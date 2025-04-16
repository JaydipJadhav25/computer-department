import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users,  BarChart, Code, Laptop, Cpu, Blocks } from "lucide-react";

const Features = () => {
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
        <span className="text-sm font-medium text-primary bg-primary/10 px-3 py-1 rounded-full">Features</span>
        <h2 className="text-3xl font-bold mt-4 mb-4">Everything You Need</h2>
        <p className="text-muted-foreground">
          Our platform provides comprehensive tools for ACES committee and students to 
          collaborate, stay informed, and manage activities efficiently.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((feature, index) => (
          <Card key={index} className="hover-scale border bg-card/50 backdrop-blur-sm overflow-hidden relative">
            <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-30`}></div>
            <CardHeader className="relative z-10 pb-2">
              <div className="h-12 w-12 rounded-full bg-card flex items-center justify-center mb-4 border">
                <feature.icon className="h-6 w-6 text-primary" />
              </div>
              <CardTitle>{feature.title}</CardTitle>
            </CardHeader>
            <CardContent className="relative z-10">
            <p className="text-muted-foreground">{feature.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Features;
