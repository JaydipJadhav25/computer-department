// import { EventProps } from "@/components/events/EventCard";
import Footer from "@/components/layout/Footer";
import Navbar from "@/components/layout/Navbar";
import { axiosInstance } from "@/config/axiosConfig";
// import { useEffect, useState } from   "react";
import { CalendarDays } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import EventsList from "@/components/events/EventsList";




export default function Events() {
 

  //  useEffect(() => {
  //   const fetchEvents = async () => {
  //     try {
  //       // const res = await fetch("http://localhost:3000/open/events");
  //       // const data = await res.json();
  //       const data = await axiosInstance("/open/events");
  //       console.log("events data: ", data.data);
  //       setEvents(data.data);
  //     } catch (err) {
  //       console.error("check your network connection!", err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchEvents();
  // }, []);

  const{data , isError , isLoading , error} = useQuery({
    queryKey : ['events'],
    queryFn : async()=>{
       const response = await axiosInstance("/open/events");
       return response?.data
    },
    gcTime : 300000,
    staleTime : 300000
  });
  
// console.log("error: ",error);
// console.log("data : ",data);

  return (
    <div className="min-h-screen flex flex-col">
    <Navbar/>
    <main className="flex-1">
        {/* Hero Section */}
        <div className="bg-muted/50 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center p-3 bg-primary/10 rounded-full mb-4">
                <CalendarDays className="h-6 w-6 text-primary" />
              </div>
              <h1 className="text-4xl font-bold mb-4">Events & Activities</h1>
              <p className="text-xl text-muted-foreground">
                Discover upcoming hackathons, workshops, tech talks, and more 
                organized by ACES for computer department students.
              </p>
            </div>
          </div>
        </div>

        {/* Events List */}
        <div className="container mx-auto px-4 py-16">
          {isLoading ? (
            <p className="text-center text-muted-foreground">Loading events...</p>
          ) : (
            <>
          {/* handle error case  */}
          {isError ?
          <>
          <p className="text-center text-red-500">check your network connection or try again later</p>
          </> 
          :<>
            <EventsList events={data} />
          </>
          
          }
            </>
            
          )}
        </div>

        {/* Call to Action */}
        <div className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-2xl font-bold mb-4">Want to propose an event?</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have an idea for a workshop, seminar, or any tech event? We're always 
              open to new ideas and collaborations.
            </p>
            <div className="flex justify-center">
              <a 
                href="mailto:aces@college.edu?subject=Event%20Proposal" 
                className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
              >
                Submit Event Proposal
              </a>
            </div>
          </div>
        </div>
      </main>
      <Footer/>
</div>
  )
}
