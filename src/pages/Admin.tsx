
import { Link } from "react-router-dom";
import AdminLayout from "@/components/admin/AdminLayout";
import { Users, Calendar, Bell, PieChart } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "@/config/axiosConfig";
import {  formatDistanceToNow } from "date-fns";


interface Activity {
  action: string;
  createdAt: string; // or Date if parsed
  _id: string; // assuming _id is present from MongoDB
}




export const AdminPanel = () => {


  //fetch activity
  const {isError , isLoading , data , error} = useQuery<any>({
    queryKey : ["activities"],
    queryFn : async()=>{
      const limit = 4;
      const  response = await axiosInstance(`/open/activities?limit=${limit}`);
      return response.data;
    },
     gcTime : Infinity,
    staleTime : Infinity
  })
console.log("error : " , error);

  return (
    <AdminLayout currentPage="dashboard">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Total Members</h3>
          <p className="text-3xl font-bold">42</p>
          <p className="text-sm text-muted-foreground mt-2">+3 this month</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Upcoming Events</h3>
          <p className="text-3xl font-bold">7</p>
          <p className="text-sm text-muted-foreground mt-2">Next: Hackathon 2023</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Recent Announcements</h3>
          <p className="text-3xl font-bold">12</p>
          <p className="text-sm text-muted-foreground mt-2">3 unread</p>
        </div>
        
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h3 className="text-lg font-medium mb-1">Budget Status</h3>
          <p className="text-3xl font-bold">₹42,500</p>
          <p className="text-sm text-muted-foreground mt-2">25% allocated</p>
        </div>
      </div>
            
      <div className="mt-12 space-y-6">
        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Quick Access</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link to="/admin/members" className="p-4 hover:bg-muted/50 rounded-md flex flex-col items-center text-center">
              <Users className="h-6 w-6 mb-2" />
              <span>Manage Members</span>
            </Link>
            <Link to="/admin/events" className="p-4 hover:bg-muted/50 rounded-md flex flex-col items-center text-center">
              <Calendar className="h-6 w-6 mb-2" />
              <span>Create Event</span>
            </Link>
            <Link to="/admin/announcements" className="p-4 hover:bg-muted/50 rounded-md flex flex-col items-center text-center">
              <Bell className="h-6 w-6 mb-2" />
              <span>Post Announcement</span>
            </Link>
            <Link to="/admin/financials" className="p-4 hover:bg-muted/50 rounded-md flex flex-col items-center text-center">
              <PieChart className="h-6 w-6 mb-2" />
              <span>Budget Overview</span>
            </Link>
          </div>
        </div>

        <div className="bg-card p-6 rounded-lg border shadow-sm">
          <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
          <div className="space-y-4">
            {/* {[
              { action: "New member added", time: "2 hours ago" },
              { action: "Event created: Hackathon 2023", time: "1 day ago" },
              { action: "Announcement posted: Registration Open", time: "2 days ago" },
              { action: "Budget updated for Tech Talk", time: "3 days ago" }
            ].map((item, i) => (
              <div key={i} className="flex justify-between p-2 hover:bg-muted/50 rounded-md">
                <span>{item.action}</span>
                <span className="text-sm text-muted-foreground">{item.time}</span>
              </div>
            ))} */}

            {
              isLoading ? <>
               <h1 className="text-xl font-semibold mb-4 text-green-950">Loading Recent Activities...</h1>
              </> :<>
                    {
                      isError ? <>
               <h1 className="text-xl font-semibold mb-4 text-red-950">Check your network connection status!</h1> 
                      </> :<>
                        
                  {
                    data?.map((item: Activity, i: any) => (
                      <div key={i} className="flex justify-between p-2 hover:bg-muted/50 rounded-md">
                        <span>{item.action}</span>
                        <span className="text-sm text-muted-foreground">
                          {formatDistanceToNow(new Date(item.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                    ))
                  }
                      </>
                    }  
              </>
            }
          </div>
        </div>
      </div>
    </AdminLayout>
  );
};


