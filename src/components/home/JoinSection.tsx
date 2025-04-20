
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'; //

const JoinSection = () => {

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
    <div className="py-16 container mx-auto px-4">
      <div className="max-w-5xl mx-auto relative overflow-hidden rounded-xl">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-aces-purple/80 to-aces-pink/90 -z-10" />
        <div className="absolute inset-0 opacity-30 -z-10">
          {/* Decorative code patterns */}
          {Array.from({ length: 10 }).map((_, i) => (
            <div 
              key={i} 
              className="absolute text-white/30 font-mono text-xs whitespace-nowrap"
              style={{
                top: `${10 + Math.random() * 80}%`,
                left: `${Math.random() * 100}%`,
                transform: `rotate(${Math.random() * 10 - 5}deg)`
              }}
            >
              {"{" + "  "}console.log("Join ACES");{" }"}
            </div>
          ))}
          
          {/* Grid pattern overlay */}
          <div className="absolute inset-0" 
            style={{
              backgroundImage: 'radial-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)',
              backgroundSize: '20px 20px'
            }} 
          />
        </div>
        
        <div className="relative z-10 p-8 md:p-12 lg:p-16 flex flex-col items-center text-white text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Join ACES?</h2>
          <p className="text-white/90 max-w-2xl mb-8">
            Become part of our thriving computer engineering community. Access exclusive events, workshops, and networking opportunities to boost your academic and professional journey.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button
            data-aos="fade-up" 
            size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
              <Link to="/members">
                Become a Member
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
            data-aos="fade-up" 
            size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
              <Link to="/events">
                Explore Events
              </Link>
            </Button>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default JoinSection;
