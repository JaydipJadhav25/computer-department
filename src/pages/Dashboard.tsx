import  { useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Announcements from "@/components/announcements/Announcements";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { AnnouncementProps } from "@/components/announcements/AnnouncementCard";
// import { EventProps } from "@/components/events/EventCard";
import EventCard from "@/components/events/EventCard";
import { BarChart, Bell, Calendar, Clock, QrCode, Users } from "lucide-react";
import { ResponsiveContainer, XAxis, YAxis, Tooltip, Bar, BarChart as Chart } from "recharts";
// import axios from "axios";
import { axiosInstance } from "@/config/axiosConfig";


const auth = localStorage.getItem("aces_auth");
console.log("dasshbord auth : ", auth);


// const upcomingEvents: EventProps[] = [
//   {
//     id: "1",
//     title: "Annual Hackathon 2025",
//     description: "Join us for 24 hours of coding, innovation, and fun. Great prizes to be won!",
//     date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
//     location: "Computer Department Lab",
//     registrationOpen: true,
//     registeredCount: 45,
//     maxCapacity: 100,
//     tags: ["Hackathon", "Coding"],
//   },
//   {
//     id: "2",
//     title: "ML Workshop Series",
//     description: "Learn the fundamentals of Machine Learning with hands-on examples.",
//     date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000),
//     location: "Seminar Hall",
//     registrationOpen: true,
//     registeredCount: 28,
//     maxCapacity: 50,
//     tags: ["Workshop", "ML"],
//   },
// ];



const upcomingEvents  = [
  {
    _id: "1",
    title: "Annual Hackathon 2025",
    description: "Join us for 24 hours of coding, innovation, and fun. Great prizes to be won!",
    date: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000).toISOString(),
    location: "Computer Department Lab",
    registrationOpen: true,
    registeredCount: 45,
    maxCapacity: 100,
    tags: ["Hackathon", "Coding"],
  },
  {
    _id: "2",
    title: "ML Workshop Series",
    description: "Learn the fundamentals of Machine Learning with hands-on examples.",
    date: new Date(Date.now() + 14 * 24 * 60 * 60 * 1000).toISOString(),
    location: "Seminar Hall",
    registrationOpen: true,
    registeredCount: 28,
    maxCapacity: 50,
    tags: ["Workshop", "ML"],
  },
];

// "_id": "6804fcadb89e32c7647165bb",
// "name": "Cloud Computing Seminar",
// "description": "Explore the latest trends in cloud infrastructure, DevOps, and AWS services through expert talks and demos.",
// "date": "2025-08-20T00:00:00.000Z",
// "time": "11:00 AM",
// "location": "Seminar Room, CS Department",
// "imgurl": "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
// "googlelink": "https://www.google.com/maps?q=cs+department+seminar+room",
// "__v": 0

const budgetData = [
  { name: "Hackathon", planned: 5000, actual: 4800 },
  { name: "ML Workshop", planned: 3000, actual: 2700 },
  { name: "Tech Talk", planned: 2000, actual: 2100 },
  { name: "Industrial Visit", planned: 8000, actual: 8500 },
];

const expenseCategories = [
  { name: "Venue", value: 4500 },
  { name: "Refreshments", value: 2800 },
  { name: "Marketing", value: 1500 },
  { name: "Prizes", value: 3500 },
  { name: "Speakers", value: 5000 },
];

const Dashboard = () => {
  const [tab, setTab] = useState("overview");
  const [announcements, setAnnouncements] = useState<AnnouncementProps[]>([]);

  useEffect(() => {
    const fetchAnnouncements = async () => {
      try {
        // const response = await axios.get("http://localhost:3000/open/announcements");
        const response = await axiosInstance("/open/announcements");
        const data = response.data.map((a: any) => ({
          ...a,
          date: new Date(a.date),
        }));
        setAnnouncements(data);
      } catch (error) {
        console.error("Error fetching announcements:", error);
      }
    };

    fetchAnnouncements();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 bg-muted/30">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <p className="text-muted-foreground">Welcome to CESA portal</p>
          </div>

          <Tabs value={tab} onValueChange={setTab} className="space-y-6">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="announcements">Announcements</TabsTrigger>
              <TabsTrigger value="events">Events</TabsTrigger>
              <TabsTrigger value="budget">Budget</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="md:col-span-2 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Upcoming Events</CardTitle>
                      </CardHeader>
                      <CardContent className="flex items-center justify-between">
                        <span className="text-3xl font-bold">{upcomingEvents.length}</span>
                        {/* <span className="text-3xl font-bold">{[1 ,2].length}</span> */}
                        <Calendar className="h-5 w-5 text-muted-foreground" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Event Registrations</CardTitle>
                      </CardHeader>
                      <CardContent className="flex items-center justify-between">
                        <span className="text-3xl font-bold">73</span>
                        <Users className="h-5 w-5 text-muted-foreground" />
                      </CardContent>
                    </Card>

                    <Card>
                      <CardHeader className="pb-2">
                        <CardTitle className="text-sm font-medium text-muted-foreground">Next Event</CardTitle>
                      </CardHeader>
                      <CardContent className="flex items-center justify-between">
                        <span className="text-sm">In 3 days</span>
                        <Clock className="h-5 w-5 text-muted-foreground" />
                      </CardContent>
                    </Card>
                  </div>

                  <Card>
                    <CardHeader>
                      <CardTitle>Budget Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <Chart data={budgetData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="planned" fill="#2563eb" name="Planned" />
                            <Bar dataKey="actual" fill="#8b5cf6" name="Actual" />
                          </Chart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <Card className="shadow-lg border-primary border">
                    <CardHeader className="pb-3">
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg text-primary">Recent Announcements</CardTitle>
                        <Button variant="ghost" size="sm" className="text-xs" onClick={() => setTab("announcements")}>
                          View All
                        </Button>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <Announcements announcements={announcements.slice(0, 3)} limit={3} showViewAll={false} />
                    </CardContent>
                  </Card>
                </div>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                    <Calendar className="h-5 w-5" />
                    <span>Create Event</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                    <Bell className="h-5 w-5" />
                    <span>Post Announcement</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                    <QrCode className="h-5 w-5" />
                    <span>Scan Attendance</span>
                  </Button>
                  <Button variant="outline" className="h-auto py-6 flex flex-col gap-2">
                    <BarChart className="h-5 w-5" />
                    <span>Record Expense</span>
                  </Button>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="announcements">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-semibold">All Announcements</h2>
                  { auth && <Button>New Announcement</Button>}
                </div>
                <Announcements announcements={announcements} limit={100} showViewAll={false} />
              </div>
            </TabsContent>

            <TabsContent value="events">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Manage Events</h2>
                  {auth && <Button>Create Event</Button>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {upcomingEvents.map((event) => (
                    <EventCard key={event._id} event={event} />
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="budget">
              <div className="space-y-8">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-semibold">Budget & Expenses</h2>
                 {auth &&  <Button>Add Expense</Button>}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Event Budgets</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <Chart data={budgetData}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="planned" fill="#2563eb" name="Planned" />
                            <Bar dataKey="actual" fill="#8b5cf6" name="Actual" />
                          </Chart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Expense Categories</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="h-80">
                        <ResponsiveContainer width="100%" height="100%">
                          <Chart data={expenseCategories}>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <Tooltip />
                            <Bar dataKey="value" fill="#8b5cf6" />
                          </Chart>
                        </ResponsiveContainer>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Dashboard;
