import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users,  BarChart, Code, Laptop, Cpu, Blocks } from "lucide-react";
import AOS from 'aos';
import 'aos/dist/aos.css'; //
import { useEffect } from "react";
import { GlareCard } from "../ui/glare-card";
import {  useIsMobile } from "@/hook/use-mobile";


const Features = () => {

const isMobile = useIsMobile();
console.log("isMobile : " , isMobile);

    useEffect(() => {
   // Initialize AOS
  AOS.init({
    // Global settings (optional)
    offset: 200,
    duration: 300,
    easing: 'ease',
    once: false,
  });
    }, []);

  const features = [
    {
      title: "Student Community",
      description: "Connect with fellow students, share knowledge, and build your network.",
      icon: Users,
      gradient: "from-blue-500/20 to-indigo-500/20"
    },
    {
      title: "Tech Workshops & Seminars",
      description: "Learn cutting-edge technologies through hands-on workshops and expert talks.",
      icon: Laptop,
      gradient: "from-purple-500/20 to-pink-500/20"
    },
    {
      title: "Hackathons & Competitions",
      description: "Test your skills in competitive coding and team-based hackathons.",
      icon: Code,
      gradient: "from-emerald-500/20 to-green-500/20"
    },
    {
      title: "Industry Connections",
      description: "Network with industry professionals and explore career opportunities.",
      icon: Blocks,
      gradient: "from-orange-500/20 to-red-500/20"
    },
    {
      title: "Research Projects",
      description: "Participate in research initiatives and publish your findings.",
      icon: Cpu,
      gradient: "from-amber-500/20 to-yellow-500/20"
    },
    {
      title: "Resources & Tools",
      description: "Access a curated collection of learning resources and development tools.",
      icon: BarChart,
      gradient: "from-sky-500/20 to-cyan-500/20"
    },
  ];

  return (
    <div className="py-16 container mx-auto px-4">
      <div className="text-center max-w-3xl mx-auto mb-12">
        <span 
        
        className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">
          Features</span>
        <h2
        data-aos="zoom-out"
        className="text-3xl font-bold mt-4 mb-4">Everything You Need</h2>
        <p 
        data-aos="fade-up"
        className="text-muted-foreground">
          Our platform provides comprehensive tools for CESA committee and students to 
          collaborate, stay informed, and manage activities efficiently.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
  {features.map((feature, index) => (
    
    isMobile ? (

       <Card
      key={index}
     className="hover:animate-crash transition-all duration-300 border bg-card/50 backdrop-blur-sm overflow-hidden relative"
      data-aos="fade-up"
      data-aos-delay={index * 100} // stagger animation
      data-aos-duration="800"
    >
      <div
        className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30`}
      ></div>

      <CardHeader className="relative z-10 pb-2">
        <div
          className="h-12 w-12 rounded-full bg-card flex items-center justify-center mb-4 border"
          data-aos="zoom-in"
          data-aos-delay={index * 100 + 200}
        >
          <feature.icon className="h-6 w-6 text-primary" />
        </div>
        <CardTitle
          data-aos="fade-right"
          data-aos-delay={index * 100 + 300}
          data-aos-duration="600"
        >
          {feature.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="relative z-10">
        <p
          className="text-muted-foreground"
          data-aos="fade-left"
          data-aos-delay={index * 100 + 400}
          data-aos-duration="600"
        >
          {feature.description}
        </p>
      </CardContent>
    </Card>


    ) : (

<GlareCard
  key={index}
  className="transition-all duration-300 border bg-card/50 backdrop-blur-sm overflow-hidden relative hover:animate-crash min-h-[200px] md:min-h-[280px] lg:min-h-[300px] min flex flex-col"
  data-aos="fade-up"
  data-aos-delay={index * 100}
  data-aos-duration="800"
>
  {/* Background gradient */}
  <div
    className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30`}
  ></div>

  {/* Main content */}
  <div className="relative z-10 p-4 md:p-6 lg:p-6 flex flex-col justify-between items-start h-full">
    <div className="w-full">
      <div
        className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-card flex items-center justify-center mb-3 md:mb-4 border"
        data-aos="zoom-in"
        data-aos-delay={index * 100 + 200}
      >
        <feature.icon className="h-5 w-5 md:h-6 md:w-6 text-primary" />
      </div>

      <h3
        className="text-base md:text-lg font-semibold mb-2"
        data-aos="fade-right"
        data-aos-delay={index * 100 + 300}
      >
        {feature.title}
      </h3>

      <p
        className="text-muted-foreground text-sm md:text-[0.925rem] leading-snug"
        data-aos="fade-left"
        data-aos-delay={index * 100 + 400}
      >
        {feature.description}
      </p>
    </div>
  </div>
</GlareCard>

  )   

  ))}
</div>

    </div>
  );
};

export default Features;




// {/* <GlareCard
//   key={index}
//   className="transition-all duration-300 border bg-card/50 backdrop-blur-sm overflow-hidden relative hover:animate-crash min-h-[280px]  flex flex-col"
//   data-aos="fade-up"
//   data-aos-delay={index * 100}
//   data-aos-duration="800"
// >
//   {/* Background gradient */}
//   <div
//     className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30`}
//   ></div>

//   {/* Main content */}
//   <div className="relative z-10 p-6 flex flex-col justify-between items-start h-full">
//     <div>
//       <div
//         className="h-12 w-12 rounded-full bg-card flex items-center justify-center mb-4 border"
//         data-aos="zoom-in"
//         data-aos-delay={index * 100 + 200}
//       >
//         <feature.icon className="h-6 w-6 text-primary" />
//       </div>

//       <h3
//         className="text-lg font-semibold mb-2"
//         data-aos="fade-right"
//         data-aos-delay={index * 100 + 300}
//       >
//         {feature.title}
//       </h3>

//       <p
//         className="text-muted-foreground text-sm"
//         data-aos="fade-left"
//         data-aos-delay={index * 100 + 400}
//       >
//         {feature.description}
//       </p>
//     </div>
//   </div>
// </GlareCard> */}
