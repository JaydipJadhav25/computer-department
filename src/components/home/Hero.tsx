
// import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight,  Users, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
// import ChatBot from "../chatBot/ChatBot";
// import { motion } from "framer-motion";
import 'aos/dist/aos.css';
import AOS from 'aos';
import { useEffect } from "react";
import HeroDropEffect from "../ui/HeroDropEffect";

// import { TextHoverEffect } from "@/components/ui/text-hover-effect";
// import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
// import DropBeamsOnly from "../ui/DropBeamsOnly";


import { ContainerScroll } from "../ui/container-scroll-animation";
import { useIsMobile } from "@/hook/use-mobile";

const Hero = () => {

  const isMobail = useIsMobile();
  console.log("ismobail  : ", isMobail)





  useEffect(() => {
    AOS.init({
      duration: 300, // Global animation speed (in ms)
      once: true,    // Only animate once per element
      mirror: false,
    });
  }, []);


  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80">
    {/* <BackgroundBeamsWithCollision> */}
      {/* <DropBeamsOnly/> */}
  {/* Animated background elements */}
    <HeroDropEffect/>
  <div className="absolute inset-0 -z-10 overflow-hidden">
    <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
    <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-secondary/5 rounded-full blur-3xl" />
    <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-aces-purple/5 rounded-full blur-3xl" />
    <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-aces-blue/5 rounded-full blur-3xl" />

    {/* Code lines background */}
    <div className="absolute inset-0 opacity-5">
      {Array.from({ length: 20 }).map((_, i) => (
        <div
          key={i}
          className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"
          style={{
            position: 'absolute',
            top: `${i * 5}%`,
            left: 0,
            right: 0,
            transform: `translateY(${Math.sin(i) * 20}px)`
          }}
        /> 
      ))}
    </div>
  </div>




     {/* <div className="absolute right-0">
     <TextHoverEffect  text="ACES"/>
     </div> */}

  {/* <div className="container px-4 py-24 mx-auto"> */}
  <div className="container px-4 pb-4 pt-4 mx-auto">
    <div className="flex flex-col lg:flex-row items-center gap-12">
      
      {/* Left section with text */}
      <div
        className="flex-1 text-left space-y-6"  
      >
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          <img
            src="/logo.png"
            alt="Department Logo"
            className="w-24 h-24 object-contain rounded-xl shadow-md ring-1 ring-muted"

          />
          {/* <div className="absolute left-0 top-[1px] bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-500 via-violet-500 to-pink-500 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            <span className="">Exploding beams.</span>
          </div> */}
          <span className="block mt-2 bg-clip-text bg-no-repeat text-transparent bg-gradient-to-r py-4 from-purple-700 via-violet-200 to-pink-700 [text-shadow:0_0_rgba(0,0,0,0.1)]">
            Computer Department
            </span>
        </h2>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
         Association of Computer Engineering Students: Shaping future tech leaders through innovation and collaboration.
        </p>

        {/* <div className="flex flex-wrap items-center gap-4 pt-4" data-aos="fade-up" data-aos-delay="300"> */}
        <div className="flex flex-wrap items-center gap-4 pt-4">
          <Button size="lg" className="gap-2" asChild>
            <Link to="/events">
              <Terminal className="h-5 w-5" />
              Join Events
              <ChevronRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2" asChild>
            <Link to="/members">
              <Users className="h-5 w-5" />
              Meet Our Team
            </Link>
          </Button>
        </div>

        {/* <div className="flex flex-wrap items-center gap-3 pt-6" data-aos="fade-up" data-aos-delay="400"> */}
        <div className="flex flex-wrap items-center gap-3 pt-6" >
          {["React", "Python", "AWS", "Machine Learning", "Blockchain"].map((tech, index) => (
            // <span key={tech} className="px-3 py-1 text-sm bg-muted rounded-full" data-aos="zoom-in" data-aos-delay={500 + index * 100}>
                    <span key={index+tech} className="px-3 py-1 text-sm bg-muted rounded-full"> 
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Right section with terminal */}
      
      <div className="flex-1 relative" data-aos="fade-left">
        <div className="relative z-10 bg-card p-1 rounded-lg border shadow-lg overflow-hidden">
          {/* <div className="bg-black/90 rounded-md overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-2 bg-black/50 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-green-500" />
              </div>
              <div className="text-xs text-white/70 mx-auto">terminal</div>
            </div>
            <div className="p-4 font-mono text-sm text-green-400">
              <div className="flex gap-2 items-center">
                <span className="text-white/50">$</span>
                <span className="typing-animation">npm run start-aces-portal</span>
              </div>
              <div className="mt-2 text-white/80">Initializing ACES portal...</div>
              <div className="mt-1 text-white/80">Loading modules: React, Next.js, TailwindCSS</div>
              <div className="mt-1 text-white/80">Building student community...</div>
              <div className="mt-1 text-white/80">Connecting developers...</div>
              <div className="mt-1 text-green-500">✓ ACES portal launched successfully!</div>
            </div>
          </div> */}
        <img src="/img/tech_utsav.jpg" alt="heropng"  width={900} height={900}/>
        {/* <div className="w-100% h-screen bg-orange-200">
          jkfh
        </div> */}
        </div>

        {/* Decorative elements */}
        <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
      </div>
    </div>
  </div>



          {/* show reels */}
          {/* show only pc */}
     {
      !isMobail &&  <div className="flex flex-col overflow-hidden">
      <ContainerScroll
        titleComponent={
          <>
            <h1 className="text-4xl font-semibold text-black dark:text-white">
              TECH UTSAV <br />
              <span className="text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                CESA
              </span>
            </h1>
          </>
        }
      >
        {/* <img
          src={`/img/tech_utsav.jpg`}
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-left-top"
          draggable={false}
        /> */}
        <video src="/video/collage-video.mp4" controls></video>
      </ContainerScroll>
    </div>
     }

  {/* <ChatBot /> */}
{/* </BackgroundBeamsWithCollision> */}
</div>
  );
};

export default Hero;
