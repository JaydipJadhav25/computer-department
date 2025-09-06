
import  { useState } from "react";
import EventCard, { EventProps } from "./EventCard";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface EventsListProps {
  events: EventProps[];
}

const EventsList = ({ events }: EventsListProps) => {
  const [filter, setFilter] = useState("all");


  console.log("events ara came from events in eventsList : " , events);
  
  // const now = new Date();
  // const upcomingEvents = events.filter((event) => event.date > now);
  // const pastEvents = events.filter((event) => event.date <= now);

  // data in coming in string so we want to convert tha  data into obj then compare
  const now = new Date();

const upcomingEvents = events.filter((event) => new Date(event.date) > now);
const pastEvents = events.filter((event) => new Date(event.date) <= now);

console.log("Upcoming:", upcomingEvents);
console.log("Past:", pastEvents);





  const filteredEvents = filter === "upcoming" 
    ? upcomingEvents 
    : filter === "past" 
      ? pastEvents 
      : events;


      console.log("filteredEvents ", filteredEvents );
  return (
    <div className="space-y-6">
      <Tabs defaultValue="all" onValueChange={setFilter}>
        <TabsList>
          <TabsTrigger value="all">All Events</TabsTrigger>
          <TabsTrigger value="upcoming">Upcoming</TabsTrigger>
          <TabsTrigger value="past">Past</TabsTrigger>
        </TabsList>
      </Tabs>
      
      {filteredEvents.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No events to display.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredEvents.map((event) => (
            <EventCard key={event?._id} event={event} />
          ))}
        </div>
      )}
    </div>
  );
};

export default EventsList;
