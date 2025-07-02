import { Card  } from "@/components/ui/card";
// import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { FocusCards } from "@/components/ui/focus-cards";
import {axiosInstance} from "../../config/axiosConfig"
import { useEffect, useState } from "react";


type Announcement = {
  _id: string;
  title: string;
  description: string;
  date: string;
  tag?: string;
};

const Testimonials = () => {
  const [announcements, setAnnouncements] = useState<Announcement[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");


  useEffect(()=>{

    const fechAnnouncements = async()=>{
      try {
        const response = await axiosInstance("/open/announcements");
        setAnnouncements(response.data);
        console.log("responce  :" , response.data);

      } catch (error) {
        console.log("fech announcements error: " , error);
        setError("check your network connection or try again later");
        
      }finally{
        setLoading(false)
      }

    }
    fechAnnouncements()//call only if mount element

  },[])



  const testimonials = [
    {
      quote:
        "Being part of ACES helped me build my technical skills and discover my passion for web development.",
      name: "Jaydip Jadhav",
      role: "Class of 2022",
      avatar: "JJ",
    },
    {
      quote:
        "The hackathons and workshops organized by ACES were instrumental in building my portfolio that got me my dream job.",
      name: "Aditya Mulik",
      role: "Class of 2023",
      avatar: "AM",
    },
    {
      quote:
        "ACES provided a supportive community where I could collaborate with like-minded individuals on innovative projects.",
      name: "Soham Piase",
      role: "Class of 2021",
      avatar: "SP",
    },
  ];



  // const cards = [
  //   {
  //     title: "Forest Adventure",
  //     src: "https://images.unsplash.com/photo-1518710843675-2540dd79065c?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Valley of life",
  //     src: "https://images.unsplash.com/photo-1600271772470-bd22a42787b3?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Sala behta hi jayega",
  //     src: "https://images.unsplash.com/photo-1505142468610-359e7d316be0?q=80&w=3070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "Camping is for pros",
  //     src: "https://images.unsplash.com/photo-1486915309851-b0cc1f8a0084?q=80&w=3387&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "The road not taken",
  //     src: "https://images.unsplash.com/photo-1507041957456-9c397ce39c97?q=80&w=3456&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  //   },
  //   {
  //     title: "The First Rule",
  //     src: "https://assets.aceternity.com/the-first-rule.png",
  //   },
  // ];




  return (
    <div className="py-16 container mx-auto px-4">
      {/* Testimonials Section */}
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          Testimonials
        </span>
        <h2 className="text-3xl font-bold mt-4 mb-4">What Our Alumni Say</h2>
        <p className="text-muted-foreground">
          Hear from our alumni about how being part of ACES impacted their academic and professional journey.
        </p>
      </div>


      <FocusCards cards={testimonials} />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto mb-20">
        {testimonials.map((testimonial, index) => (
          <Card key={index} className="bg-card border hover:shadow-md transition-all">
            <CardContent className="p-6 flex flex-col h-full">
              <div className="flex-grow">
                <svg
                  className="h-8 w-8 text-muted-foreground/40 mb-4"
                  fill="currentColor"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.8 5.6C5.7 8.7 2 14.2 2 19.5c0 4.6 2.9 7.8 6.9 7.8 3.3 0 5.7-2.6 5.7-6 0-3.5-2.4-6.1-5.6-6.1-.4 0-.9 0-1.2.1-.1 0-.1 0-.2-.1 1.1-2.3 3.8-4.8 6.9-6.2.1 0 .1-.1.1-.2s0-.2-.1-.2c-.1 0-1.1-.6-1.7-.6zm16.8 0C22.5 8.7 18.7 14.2 18.7 19.5c0 4.6 2.9 7.8 6.9 7.8 3.3 0 5.7-2.6 5.7-6 0-3.5-2.4-6.1-5.6-6.1-.4 0-.9 0-1.2.1-.1 0-.1 0-.2-.1 1.1-2.3 3.8-4.8 6.9-6.2.1 0 .1-.1.1-.2s0-.2-.1-.2c-.1 0-1.1-.6-1.7-.6z" />
                </svg>
                <p className="text-muted-foreground mb-6">{testimonial.quote}</p>
              </div>
              <div className="flex items-center mt-4">
                <Avatar className="h-10 w-10">
                  <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <p className="text-sm font-medium">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div> */}

      {/* Announcements Section */}
      {/* Announcements Section */}


      <div className="max-w-5xl mx-auto px-4 mt-24">
  <div className="text-center mb-10">
    <span className="text-sm font-semibold text-orange-600 bg-orange-100 px-4 py-1 rounded-full">
      📢 Important Updates
    </span>
    <h2 className="text-4xl font-bold mt-4 mb-2 tracking-tight text-primary">
      Stay in the Loop
    </h2>
    <p className="text-muted-foreground text-base">
      Get the latest announcements, events, and opportunities from ACES.
    </p>
  </div>

  {loading && (
    <p className="text-center text-muted-foreground">Loading announcements...</p>
  )}
  {error && (
    <p className="text-center text-red-500">{error}</p>
  )}
  {!loading && announcements.length === 0 && (
    <p className="text-center text-muted-foreground">No announcements found.</p>
  )}

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
    {announcements.map((announcement) => (
      <Card key={announcement._id} className="hover:shadow-xl transition-shadow border bg-background hover:bg-background/10 p-6">
        <div className="flex items-center justify-between mb-2">
          <div className="flex items-center space-x-2">
            <div className="bg-primary/10 text-primary rounded-full p-2">
              📣
            </div>
            <h3 className="text-xl font-semibold">{announcement.title}</h3>
          </div>
          {announcement.tag && (
            <Badge
              variant="outline"
              className={`text-xs px-2 py-0.5 rounded-full ${
                announcement.tag.toLowerCase() === "important"
                  ? "bg-red-100 text-red-600"
                  : "bg-secondary"
              }`}
            >
              {announcement.tag}
            </Badge>
          )}
        </div>

        <p className="text-muted-foreground mb-3">{announcement.description}</p>

        <p className="text-xs text-muted-foreground mt-auto">
          {new Date(announcement.date).toLocaleDateString("en-US", {
            weekday: "short",
            year: "numeric",
            month: "short",
            day: "numeric",
          })}
        </p>
      </Card>
    ))}
  </div>
</div> 


    </div>
  );
};

export default Testimonials;
