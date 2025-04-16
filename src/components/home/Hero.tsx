
// import React from "react";
import { Button } from "@/components/ui/button";
import { ChevronRight,  Users, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
// import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-background to-background/80">
      {/* Animated background elements */}
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

      <div className="container px-4 py-24 mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 text-left space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              <img
                src="/logo.png"
                alt="Department Logo"
                className="w-24 h-24 object-contain rounded-xl shadow-md ring-1 ring-muted"
              />

              <span className="block mt-2">Computer Department</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
              Association of Computer Engineering Students - Building the next generation of tech professionals through innovation, learning, and collaboration.
            </p>

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

            <div className="flex flex-wrap items-center gap-3 pt-6">
              {["React", "Python", "AWS", "Machine Learning", "Blockchain"].map((tech) => (
                <span key={tech} className="px-3 py-1 text-sm bg-muted rounded-full">
                  {tech}
                </span>
              ))}
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative z-10 bg-card p-1 rounded-lg border shadow-lg overflow-hidden">
              <div className="bg-black/90 rounded-md overflow-hidden">
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
                    {/* <div className="flex flex-col items-start"> */}
                    <div className="mt-2 text-white/80">Initializing ACES portal...</div>
                  <div className="mt-1 text-white/80">Loading modules: React, Next.js, TailwindCSS</div>
                  <div className="mt-1 text-white/80">Building student community...</div>
                  <div className="mt-1 text-white/80">Connecting developers...</div>
                  <div className="mt-1 text-green-500">✓ ACES portal launched successfully!</div>
                    {/* </div> */}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/20 rounded-full blur-xl" />
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-secondary/20 rounded-full blur-xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
