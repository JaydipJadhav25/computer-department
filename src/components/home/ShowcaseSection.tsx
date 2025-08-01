import CanvasComp from "./features/CanvasComp";
import { Code,  Trophy, Calendar } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; //
import { useEffect } from "react";


const ShowcaseSection = () => {
  // const projects = [

  //   {
  //     title: "Student Project Hub",
  //     description: "A platform showcasing innovative student projects from our department",
  //     image: "public/lovable-uploads/5beb1eab-ec2f-4e73-a021-97801010dc3c.png",
  //     tags: ["React", "Node.js", "MongoDB"]
  //   },
  //   {
  //     title: "Department AI Assistant",
  //     description: "AI-powered assistant to help students with common queries about courses",
  //     image: "/placeholder.svg",
  //     tags: ["Python", "TensorFlow", "NLP"]
  //   },
  //   {
  //     title: "Collaborative Code Editor",
  //     description: "Real-time collaborative editor for pair programming and code reviews",
  //     image: "/placeholder.svg",
  //     tags: ["WebSockets", "Monaco Editor", "Express"]
  //   }
  // ];


  useEffect(() => {
 // Initialize AOS
AOS.init({
  // Global settings (optional)
  offset: 200,
  duration: 1000,
  easing: 'ease',
  once: false,
});
  }, []);

  return (
    <>

    <div className="py-16 bg-muted/30 overflow-hidden">
    
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
          <h2 data-aos="zoom-out" className="text-3xl font-bold mb-4">Featured Projects</h2>
          <p data-aos="zoom-out" className="text-muted-foreground max-w-2xl mx-auto">
            Discover the innovative projects developed by our talented students and faculty.
          </p>
          </div>
          <div className="w-full max-w-5xl mx-auto min-h-1/2 md:h-96">
             <CanvasComp/>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div
           data-aos="fade-right"
          className="p-6 bg-card rounded-lg border flex flex-col items-center text-center hover:bg-primary/10 transition duration-300 ease-in-out cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Code className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">20+ Projects</h3>
            <p className="text-muted-foreground">Successfully completed by students</p>
          </div>
          
          <div
          data-aos="fade-up"
          className="p-6 bg-card rounded-lg border flex flex-col items-center text-center hover:bg-primary/10 transition duration-300 ease-in-out cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
              <Trophy className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">15+ Awards</h3>
            <p className="text-muted-foreground">Won at various competitions</p>
          </div>
          
          <div
          data-aos="fade-left"
          className="p-6 bg-card rounded-lg border flex flex-col items-center text-center hover:bg-primary/10 transition duration-300 ease-in-out cursor-pointer">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
              <Calendar className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">30+ Events</h3>
            <p className="text-muted-foreground">Organized successfully</p>
          </div>
        </div>

        </div>
    </div>
    </>
  );
};

export default ShowcaseSection;
