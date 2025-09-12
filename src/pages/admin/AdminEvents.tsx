import  { useState } from "react";
import AdminLayout from "@/components/admin/AdminLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dialog } from "@/components/ui/dialog";

import {
  Plus,
  Search,
  Calendar,
  MapPin,
  Users,
  Pencil,
  Trash,
  QrCode,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { axiosInstance } from "@/config/axiosConfig";
import { useActivityFunction } from "@/hook/useActivityFunction";

// Define type for event
interface Event {
  _id: string;
  name: string;
  description: string;
  date: string; // or Date if you parse it
  time: string;
  location: string;
  imgurl: string;
  googlelink: string;
  __v: number;
}


const AdminEvents = () => {
  // const [eventData, setEventData] = useState<Event[]>([]);

  const [searchTerm, setSearchTerm] = useState("");
  const [open, setOpen] = useState(false);

  // const [loading, setLoading] = useState(false);
  // const [formData, setFormData] = useState({
  //   name: "",
  //   description: "",
  //   date: "",
  //   time: "",
  //   location: "",
  //   imgurl: "",
  //   googlelink: "",
  // });

  // Fetch all events from backend
  // const fetchEvents = async () => {
  //   try {
  //     const res = await fetch("https://compute-department-backend.vercel.app/open/events");
  //     const data = await res.json();

  //     if (!res.ok) throw new Error(data.error || "Failed to fetch events");
  //     setEventData(data);
  //   } catch (error) {
  //     console.error("Error fetching events:", error);
  //     alert("Failed to load events.");
  //   }
  // };

  // useEffect(() => {
  //   fetchEvents();
  // }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  // const handleSubmit = async () => {
  //   setLoading(true);
  //   try {
  //     const res = await fetch("http://localhost:3000/admin/events", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //       body: JSON.stringify(formData),
  //     });

  //     const data = await res.json();

  //     if (!res.ok) {
  //       throw new Error(data.error || "Something went wrong");
  //     }

  //     alert("Event created successfully!");
  //     setOpen(false);
  //     fetchEvents(); // Refresh list
  //   } catch (error: any) {
  //     alert(`Failed to create event: ${error.message}`);
  //     console.error("Create Event Error:", error);
  //   } finally {
  //     setLoading(false);
  //   }
  // };



  
  const {register , handleSubmit , reset} = useForm<Event>();
    const queryClient = useQueryClient();
  
    //react-query
  const { isError, isLoading, data } = useQuery({
    queryKey: ["adminevents"],
    queryFn: async () => {
      const response = await axiosInstance("/open/events");
      console.log("api call ......................................");
      return response.data;
    },
    staleTime: 5 * 60 * 1000,      // 5 minutes = 300000 ms
    gcTime: 5 * 60 * 1000,         // cache garbage collect after 5 min
    refetchOnWindowFocus: false,   // don't refetch when switching tabs
    refetchOnReconnect: false,     // don't refetch on network reconnect
    refetchOnMount: false,         // don't refetch on remount
  });
  
  

  // activity functions
  const activityFunction = useActivityFunction();


  //mutation for create
   const mutation = useMutation({
      mutationFn : async(formData)=>{
       const responce = await axiosInstance.post("/admin/events" ,formData );
      return responce.data;
      },
      onSuccess : (data : any)=>{
            console.log("Event add successfully : " , data);
           alert("Events add successfully ")
            
            // refresh the members list
          
            queryClient.invalidateQueries({ queryKey: ["adminevents"] });
              //close         
              setOpen(false);
              
          
        // clear form after success
        reset();

        //activity
         activityFunction("Events added successfully")
      } ,
      onError : (error)=>{
           console.error("Error adding Events", error);
           alert("Error adding Events...! ");
           // clear form after success
        reset();

         //activity
         activityFunction("Events added Error")
      }
    });
  

    //use mutation -delete
  const mutationDelete = useMutation({
     mutationFn : async(id)=>{
         const response = await axiosInstance.post("/admin/event/delete" , { id});
         return response.data;
     },
     onSuccess : (data)=>{
       console.log("Event deleted successfully......." , data);
       alert("Event delete Successfully !");
       queryClient.invalidateQueries({ queryKey: ["adminevents"] });


        //activity
         activityFunction("Event deleted successfully")
     },

      onError : (error)=>{
         console.error("Error delete Event:", error);
         alert("Error Delete Event !");

         activityFunction("Event delete Error !")

    }

  })  
  
    // form 
   function handleFormSubmit(formData : any){
    mutation.mutate(formData);
   } 
  
  




  const filteredEvents  = data?.filter(
    (event : any) =>
      event?.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      event?.location?.toLowerCase().includes(searchTerm.toLowerCase())
  );


  return (
    <AdminLayout currentPage="events">
      <div className="space-y-6">
        <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
          <div className="relative w-full sm:w-64">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-8"
              disabled={isLoading || isError}
            />
          </div>
          <Button onClick={() => setOpen(true)} disabled={isLoading || isError}>
            <Plus className="mr-2 h-4 w-4" /> Create Event
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-6">
           {mutationDelete.isPending && <h1 className="text-center text-green-800 my-2">Deleting Member....</h1>}
            {
              isLoading ? <>
                   <h1 className="text-green-600 text-center">Loading....</h1>
              </> :<>
                       {
                        isError ? <>
                             <h1 className="red-green-600 text-center">Events fetch error ! Check your netWork Connections</h1>
                         </>:<>
                          {filteredEvents.map((event: any) => (
            <Card key={event._id || event.id} className="p-6 border shadow-sm">
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="text-xl font-semibold">{event.title || event.name}</h3>
                    <Badge
                      variant={
                        event.status === "Upcoming" ? "default" : "secondary"
                      }
                    >
                      {event.status || "Upcoming"}
                    </Badge>
                  </div>

                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {new Date(event.date).toLocaleDateString("en-IN", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                        })}
                      </span>
                    </div>

                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-muted-foreground" />
                      <span>{event.location}</span>
                    </div>

                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>
                        {event.registeredCount || 0} / {event.maxCapacity || "?"} registered
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 items-start">
                  <Button variant="outline" size="sm">
                    <QrCode className="mr-2 h-4 w-4" />
                    QR Code
                  </Button>
                  <Button variant="outline" size="sm">
                    <Pencil className="mr-2 h-4 w-4" />
                    Edit
                  </Button>
                  <Button
                  disabled={mutationDelete.isPending}
                  onClick={()=>{
                    mutationDelete.mutate(event._id || null);
                  }}
                  variant="outline" size="sm">
                    <Trash className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
              </div>
            </Card>
          ))}

                         </>
                       }
               </>
            }
        </div>
      </div>



      {/* Create Event Modal */}
      <Dialog open={open} onOpenChange={setOpen}>
        {open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 w-full max-w-md shadow-xl space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Create New Event</h2>
                <button
                  onClick={() => setOpen(false)}
                  className="text-gray-500 hover:text-gray-700 dark:hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="space-y-3">
                   <form onSubmit={handleSubmit(handleFormSubmit)} >
                       <Input
                  
                  placeholder="Event Name"
                 {...register("name")}
                />
                <Input
                
                  placeholder="Description"
                  {...register("description")}

                />
                <Input
                
                  type="date"
                  {...register("date")}
                  
                />
                <Input
              
                  type="time"
                  {...register("time")}
                 
                />
                <Input
                
                  placeholder="Location"
                  {...register("location")}
                  
                />
                <Input 
                
                placeholder="Image URL"
                  {...register("imgurl")}
                />
                
                <Input
                  
                  placeholder="Google Maps Link"
                  {...register("googlelink")}
                 
                />

                <Button
                  disabled={mutation.isPending}
                  className="w-full"
                >
                  {mutation.isPending ? "Creating..." : "Create Event"}
                </Button>
                   </form>
              </div>
            </div>
          </div>
        )}
      </Dialog>


    </AdminLayout>
  );
};

export default AdminEvents;
