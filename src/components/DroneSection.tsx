import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import droneImage from "@/assets/tactical-drone.jpg";

const DroneSection = () => {
  const [hoveredSpec, setHoveredSpec] = useState<string | null>(null);

  const specifications = [
    { 
      title: "Flight Control Systems", 
      detail: "Advanced autonomous navigation with GPS/GLONASS integration and obstacle avoidance",
      icon: "🎯"
    },
    { 
      title: "Payload Capacity", 
      detail: "Modular payload bay supporting up to 2.5kg tactical equipment or surveillance gear",
      icon: "⚖️"
    },
    { 
      title: "Range & Endurance", 
      detail: "15km operational range with 45-minute flight time on standard battery configuration",
      icon: "🔋"
    },
    { 
      title: "Communication Suite", 
      detail: "Encrypted military-grade data links with real-time HD video transmission",
      icon: "📡"
    }
  ];

  return (
    <section id="drones" className="py-24 bg-surface">
      <div className="container-premium">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="secondary">UAV SYSTEMS</Badge>
              <Badge variant="outline">SINCE 2014</Badge>
            </div>
            
            <h2 className="text-display-small mb-6">
              Advanced Drone
              <span className="block text-primary">Avionics & Manufacturing</span>
            </h2>
            
            <p className="text-body text-muted-foreground mb-8">
              SATO has been pioneering unmanned aerial vehicle technology since age 14. Our custom-engineered 
              drone platforms feature military-grade avionics, autonomous flight systems, homing and telemetry 
              development used in fleet operations, and modular payload configurations for diverse tactical applications.
            </p>

            {/* Technical Specifications */}
            <div className="space-y-4 mb-8">
              <h3 className="text-heading text-foreground mb-4">Technical Specifications</h3>
              {specifications.map((spec, index) => (
                <div 
                  key={index}
                  className="group relative"
                  onMouseEnter={() => setHoveredSpec(spec.title)}
                  onMouseLeave={() => setHoveredSpec(null)}
                >
                  <div className="flex items-center gap-3 p-4 rounded-lg border border-border bg-background/50 hover:bg-background transition-all duration-300 cursor-pointer">
                    <span className="text-xl">{spec.icon}</span>
                    <span className="text-body font-medium">{spec.title}</span>
                  </div>
                  
                  {/* Hover Detail */}
                  {hoveredSpec === spec.title && (
                    <div className="absolute left-0 top-full mt-2 w-full p-4 bg-surface border border-border rounded-lg shadow-tactical z-10 animate-scale-in">
                      <p className="text-tactical text-muted-foreground">{spec.detail}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex gap-4">
              <Button variant="tactical" className="group relative overflow-hidden">
                <span className="relative z-10">VIEW SPECIFICATIONS</span>
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
              <Button variant="outline" className="group relative overflow-hidden">
                <span className="relative z-10">REQUEST DEMO</span>
                <div className="absolute inset-0 bg-gradient-to-r from-surface/50 to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform rotate-3 group-hover:rotate-6 transition-transform duration-300" />
            <img 
              src={droneImage}
              alt="SATO tactical drone with advanced avionics"
              className="relative w-full h-[500px] object-cover rounded-lg shadow-premium transform group-hover:scale-105 transition-all duration-300"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent rounded-lg" />
            
            {/* Tech Badge Overlay */}
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              <Badge variant="secondary" className="backdrop-blur-sm">CLASSIFIED</Badge>
              <Badge variant="outline" className="backdrop-blur-sm">AUTONOMOUS</Badge>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DroneSection;