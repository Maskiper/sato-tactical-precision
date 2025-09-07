import { Badge } from "@/components/ui/badge";
import tacRifleImage from "@/assets/tactical-rifle.jpg";

const CompanySection = () => {
  return (
    <section id="company" className="section-padding bg-surface">
      <div className="container-premium">
        {/* PMC Introduction */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Badge variant="secondary">PRIVATE MILITARY CONTRACTOR</Badge>
            <Badge variant="outline">TACTICAL SOLUTIONS</Badge>
          </div>
          
          <h2 className="text-display-small mb-6">
            Advanced Military
            <span className="block text-primary">Tactical Solutions</span>
          </h2>
          
          <p className="text-body-large text-muted-foreground max-w-4xl mx-auto">
            SATO operates as a Private Military Contractor delivering cutting-edge defense systems, 
            precision engineering, and tactical solutions to military and government agencies worldwide. 
            Our expertise spans three critical verticals: autonomous drone systems, ballistic manufacturing, 
            and performance automotive engineering.
          </p>
        </div>

        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">SATO Divisions</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Three distinct verticals united by a singular vision: pushing the boundaries 
            of what's possible through precision engineering and tactical innovation. Each division 
            operates with military-grade standards and delivers solutions that exceed operational requirements.
          </p>
        </div>

        {/* Technical Specifications */}
        <div className="mt-20 p-8 bg-gradient-to-r from-primary/5 to-accent/5 rounded-lg border border-border">
          <h3 className="text-heading-3 mb-6 text-center">Technical Excellence Standards</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">0.001″</div>
              <div className="text-tactical text-muted-foreground">Manufacturing Tolerance</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">MIL-STD</div>
              <div className="text-tactical text-muted-foreground">Quality Standards</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-tactical text-muted-foreground">Support Operations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-tactical text-muted-foreground">Mission Success</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CompanySection;