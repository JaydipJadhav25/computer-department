import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
// import { format } from "date-fns";

// Matching backend schema
export interface EventProps {
  _id: string;
  name?: string;
  title?:string;
  description: string;
  date: string; // ISO string
  time?: string; // e.g. "14:23"
  location: string;
  imgurl?: string;
  googlelink?: string;
  registrationOpen?: boolean;
  registeredCount?: number;
  maxCapacity?: number;
  tags?: string[];
}

const EventCard = ({ event }: { event: EventProps }) => {
  const { 
    name, 
    description, 
    date, 
    time, 
    location, 
    imgurl, 
    googlelink,
    registrationOpen = true,
    registeredCount,
    maxCapacity,
    tags
  } = event;
  console.log("EventCard", imgurl);
  

  // Combine date + time
  // const dateTime = new Date(`${date?.split("T")[0]}T${time}`);
  // console.log("datatime : ", dateTime, "amd  : " , date);
  // const isUpcoming = dateTime > new Date();
  // const isUpcoming = true;
  // const formattedDate = format(dateTime, "PPP");
  // const formattedTime = format(dateTime, "p");

  //2
//   const formattedDate = dateTime && !isNaN(new Date(dateTime).getTime())
//   ? format(new Date(dateTime), "PPP")
//   : "Invalid Date";

// const formattedTime = dateTime && !isNaN(new Date(dateTime).getTime())
//   ? format(new Date(dateTime), "p")
//   : "Invalid Time";

  //3
// if (dateTime && !isNaN(new Date(dateTime).getTime())) {
//   const formattedDate = format(new Date(dateTime), "PPP");
//   const formattedTime = format(new Date(dateTime), "p");
// } else {
//   console.error("Invalid dateTime:", dateTime);
// }

//4
// const validDate = dateTime && !isNaN(new Date(dateTime).getTime())
//   ? new Date(dateTime)
//   : new Date(); // fallback to current date/time

// const formattedDate = format(validDate, "PPP");
// const formattedTime = format(validDate, "p");


//4
// let dateTime: Date;

// try {
//   if (date) {
//     const datePart = date?.split("T")[0]; // "2025-08-08"
//     const timePart = time ?? "00:00";    // default to midnight if time missing
//     dateTime = new Date(`${datePart}T${timePart}`);
//   } else {
//     dateTime = new Date(); // fallback to now
//   }

//   if (isNaN(dateTime.getTime())) {
//     // fallback if still invalid
//     console.warn("Invalid dateTime, using current date.");
//     dateTime = new Date();
//   }
// } catch (e) {
//   console.error("Error creating dateTime:", e);
//   dateTime = new Date(); // always fallback
// }


// const formattedDate = format(dateTime, "PPP");
// const formattedTime = format(dateTime, "p");



// let dateTime: Date;

// try {
//   let datePart: string;

//   if (typeof date === "string") {
//     datePart = date.split("T")[0]; // OK if date is string like "2025-08-08T..."
//   } else if (date instanceof Date) {
//     datePart = date?.toISOString().split("T")[0]; // convert to ISO string first
//   } else {
//     throw new Error("Invalid date format");
//   }

//   const timePart = time ?? "00:00"; // fallback to midnight
//   dateTime = new Date(`${datePart}T${timePart}`);

//   if (isNaN(dateTime.getTime())) {
//     console.warn("Invalid dateTime. Falling back to current time.");
//     dateTime = new Date();
//   }
// } catch (e) {
//   console.error("Error creating dateTime:", e);
//   dateTime = new Date();
// }
// const isUpcoming = dateTime > new Date();
// const isUpcoming =true;
// console.log("datatime", dateTime);

//date convert in obj then compare
const isUpcoming = new Date(date) > new Date();




console.log("upcoming events : ", isUpcoming);
// const formattedDate = format(dateTime, "PPP");
// const formattedTime = format(dateTime, "p");


//formate 

// const formatDate = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleDateString("en-US", {
//     day: "numeric",
//     month: "short",
//     year: "numeric",
//   });
// };

// const formatTime = (dateString) => {
//   const date = new Date(dateString);
//   return date.toLocaleTimeString("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     hour12: true,
//   });
// };

// // Usage:
// <p>{formatDate(event.date)} at {formatTime(event.date)}</p>




const formatDate = (dateString : string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
};





  return (
    <Card className="overflow-hidden hover:scale-[1.01] transition-transform duration-200 ease-in-out">
      <div 
        className="h-48 bg-muted bg-cover bg-center"
        style={imgurl ? { backgroundImage: `url(${imgurl})` } : {}}
      />
      
      <CardContent className="p-6">
        <div className="flex flex-wrap gap-2 mb-3">
          {isUpcoming && (
            <Badge variant="outline" className="bg-primary/10 text-primary border-primary/20">
              Upcoming
            </Badge>
          )}
          {tags?.slice(0, 2).map((tag) => (
            <Badge key={tag} variant="secondary">{tag}</Badge>
          ))}
        </div>
        
        <h3 className="text-xl font-semibold mb-2">{name}</h3>
        <p className="text-muted-foreground line-clamp-2 mb-4">{description}</p>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
            {/* <span>{date}</span> */}
            <span>{formatDate(date)}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{time}</span>
          </div>
          <div className="flex items-center">
            <MapPin className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{location}</span>
          </div>
          {(registeredCount !== undefined && maxCapacity !== undefined) && (
            <div className="flex items-center">
              <Users className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>{registeredCount} / {maxCapacity} registered</span>
            </div>
          )}
        </div>
      </CardContent>
      
      <CardFooter className="pt-0 pb-6 px-6">
      <a href={googlelink} target="_blank" rel="noopener noreferrer">
        <Button 
          className="w-full"
          variant={registrationOpen ? "default" : "secondary"}
          disabled={!registrationOpen}
        >
          {registrationOpen ? "Register Now" : "Registration Closed"}
        </Button>
        </a>
      </CardFooter>
    </Card>
  );
};

export default EventCard;
