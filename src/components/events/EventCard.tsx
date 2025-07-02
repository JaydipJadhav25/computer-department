import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, MapPin, Users } from "lucide-react";
import { format } from "date-fns";

// Matching backend schema
export interface EventProps {
  _id: string;
  name: string;
  description: string;
  date: string; // ISO string
  time: string; // e.g. "14:23"
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
  const dateTime = new Date(`${date.split("T")[0]}T${time}`);
  const isUpcoming = dateTime > new Date();
  const formattedDate = format(dateTime, "PPP");
  const formattedTime = format(dateTime, "p");

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
            <span>{formattedDate}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
            <span>{formattedTime}</span>
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
