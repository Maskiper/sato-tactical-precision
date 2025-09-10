import { useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const RoboticsSection = () => {
  const [hoveredFeature, setHoveredFeature] = useState<string | null>(null);

  const roboticFeatures = [
    {
      title: "Enhanced Tactical Humanoid",
      subtitle: "E3N Series",
      detail: "Advanced tactical humanoid with integrated AI consciousness, superior strength, speed, and durability surpassing human capabilities.",
      spec: "Combat Rating: Superior"
    },
    {
      title: "Adaptive Combat Intelligence",
      subtitle: "Neural Processing",
      detail: "Real-time battlefield analysis with predictive combat algorithms and tactical decision-making capabilities.",
      spec: "Processing: 2.4 THz"
    },
    {
      title: "Modular Weapon Systems",
      subtitle: "Integrated Arsenal",
      detail: "Built-in weapon platforms with seamless integration of ballistic, energy, and electromagnetic warfare systems.",
      spec: "Systems: Multi-Platform"
    },
    {
      title: "Self-Repair Protocol",
      subtitle: "Autonomous Maintenance",
      detail: "Advanced nanite-based self-repair systems ensuring operational continuity in extended combat scenarios.",
      spec: "Uptime: 99.97%"
    }
  ];

  return (
    <section id="robotics" className="section-padding bg-background">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary">ROBOTICS DIVISION</Badge>
            <Badge variant="outline">E3N SERIES</Badge>
          </div>
          
          <h2 className="text-display-small mb-6">
            Enhanced Tactical
            <span className="block text-primary">Combat Robotics</span>
          </h2>
          
          <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
            SATO's Robotics Division pioneers the future of autonomous combat systems through the 
            Enhanced Tactical Humanoid 3rd Revision (E3N) program. These advanced combat units 
            represent the pinnacle of artificial intelligence, tactical awareness, and battlefield superiority—
            delivering the perfect soldier that exceeds human limitations in every operational parameter.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Robot Specifications */}
          <div>
            <div className="mb-8">
              <h3 className="text-heading-2 mb-4">E3N Combat Specifications</h3>
              <p className="text-body text-muted-foreground mb-6">
                The Enhanced Tactical Humanoid represents a quantum leap in military robotics, 
                integrating advanced AI personality constructs with unmatched physical capabilities. 
                Designed for seamless unit integration while maintaining tactical superiority.
              </p>
            </div>

            {/* Interactive Features */}
            <div className="space-y-4 mb-12">
              <h4 className="text-heading text-foreground mb-4">Core Systems</h4>
              {roboticFeatures.map((feature, index) => (
                <div 
                  key={index}
                  className="relative p-4 bg-surface border border-border rounded-lg hover:border-primary/50 transition-all duration-300 cursor-pointer group"
                  onMouseEnter={() => setHoveredFeature(feature.title)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <h5 className="text-tactical font-semibold text-foreground group-hover:text-primary transition-colors">
                        {feature.title}
                      </h5>
                      <p className="text-caption text-muted-foreground">{feature.subtitle}</p>
                    </div>
                    <span className="text-tactical text-primary font-mono">{feature.spec}</span>
                  </div>
                  
                  {/* Hover Detail */}
                  {hoveredFeature === feature.title && (
                    <div className="absolute left-0 top-full mt-2 w-full p-4 bg-surface border border-border rounded-lg shadow-tactical z-20 animate-scale-in">
                      <p className="text-tactical text-muted-foreground">{feature.detail}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="premium" size="lg" className="group">
                <span className="group-hover:animate-pulse">View Technical Specifications</span>
              </Button>
              <Button variant="tactical" size="lg" className="group">
                <span className="group-hover:animate-pulse">Request Demonstration</span>
              </Button>
            </div>
          </div>

          {/* Robot Image/Visual */}
          <div className="relative">
            <div className="aspect-[4/5] bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
              
              {/* Placeholder for Robot Image */}
<<<<<<< HEAD
      <div className="w-full h-full scale-90 bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center relative overflow-hidden">
        
        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: "20px 20px",
            }}
          />
        </div>

        {/* Robot Image Full Size */}
        <div className="absolute inset-0">
          <img
            src="/lovable-uploads/d11d4701-b65c-499a-b8ca-8967a8958788.png"
            alt="Enhanced Tactical Humanoid E3N Series"
            className="w-full h-full object-cover"
          />
        </div>

                {/* Captions Overlay */}
        <div className="absolute bottom-6 w-full text-center">
          <p className="text-sm font-mono tracking-widest uppercase text-cyan-400">
            Enhanced Tactical Humanoid
          </p>
          <p className="text-xs font-mono text-slate-400">
            Revision 3.0
          </p>
        </div>
      </div>

=======
              <div className="w-full h-full bg-gradient-to-br from-slate-900 to-slate-700 flex items-center justify-center relative overflow-hidden">
                {/* Grid Pattern Overlay */}
                <div className="absolute inset-0 opacity-10">
                  <div className="w-full h-full" style={{
                    backgroundImage: `
                      linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                      linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
                    `,
                    backgroundSize: '20px 20px'
                  }} />
                </div>
>>>>>>> d82e6707aa6305504a2f3530b9eb15bca3e64ea0
                
                {/* Robot Image */}
                <div className="text-center">
                  <img 
                    src="/lovable-uploads/d11d4701-b65c-499a-b8ca-8967a8958788.png"
                    alt="Enhanced Tactical Humanoid E3N Series"
                    className="w-full h-full mx-auto mb-4 object-contain rounded-lg"
                  />
                  <p className="text-caption font-mono">Enhanced Tactical Humanoid</p>
                  <p className="text-caption font-mono text-muted-foreground">3rd Revision</p>
                </div>
                
                {/* Tech Lines */}
                <div className="absolute top-1/4 left-8 w-16 h-px bg-primary/30" />
                <div className="absolute top-1/2 right-8 w-16 h-px bg-primary/30" />
                <div className="absolute bottom-1/4 left-12 w-12 h-px bg-primary/30" />
              </div>
              
              <div className="absolute bottom-8 left-8">
                <h3 className="text-heading-3 text-primary-foreground mb-2">Perfect. Tactical. Superior.</h3>
                <p className="text-body text-primary-foreground/80">
                  Where artificial intelligence meets battlefield dominance
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Excellence Stats */}
        <div className="mt-20 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
          <h3 className="text-heading-3 mb-6 text-center">E3N Performance Metrics</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">3.2x</div>
              <div className="text-tactical text-muted-foreground">Human Strength Multiplier</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">2.4THz</div>
              <div className="text-tactical text-muted-foreground">Neural Processing Speed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.97%</div>
              <div className="text-tactical text-muted-foreground">Mission Success Rate</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">168hr</div>
              <div className="text-tactical text-muted-foreground">Continuous Operation</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RoboticsSection;