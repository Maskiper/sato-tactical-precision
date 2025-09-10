import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import cyberpunkCar from "@/assets/cyberpunk-car.jpg";

const AutomotiveSection = () => {
  return (
    <section id="automotive" className="py-24 bg-background">
      <div className="container-premium">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">COMING SOON</Badge>
          <h2 className="text-display-small mb-6">
            Performance Automotive
            <span className="block text-primary">Maintenance Centers</span>
          </h2>
          <p className="text-body text-muted-foreground max-w-3xl mx-auto">
            SATO is expanding into high-performance automotive engineering. Our upcoming maintenance 
            centers will feature cutting-edge diagnostic systems and precision tuning for tactical 
            and performance vehicles.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Coming Soon Overlay */}
          <div className="relative group overflow-hidden rounded-lg">
            <img 
              src={cyberpunkCar}
              alt="Next-generation performance vehicle concept"
              className="w-full h-[600px] object-cover transition-all duration-700 group-hover:scale-110"
            />
            
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-background/20" />
            
            {/* Coming Soon Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center animate-fade-in">
                <div className="text-6xl font-bold mb-4 bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-pulse">
                  COMING SOON
                </div>
                <p className="text-body text-muted-foreground mb-8 max-w-lg">
                  Revolutionary automotive solutions merging tactical precision with performance engineering
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    variant="premium" 
                    onClick={() => window.open('mailto:contact@satotech.com?subject=Automotive Division Notification Request', '_blank')}
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">NOTIFY ME</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                  <Button 
                    variant="outline" 
                    onClick={() => window.open('#automotive', '_self')}
                    className="group relative overflow-hidden"
                  >
                    <span className="relative z-10">LEARN MORE</span>
                    <div className="absolute inset-0 bg-gradient-to-r from-surface/50 to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Neon Glow Effect */}
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent animate-pulse" />
              <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent to-transparent animate-pulse" />
            </div>
          </div>

          {/* Feature Preview Cards */}
          <div className="grid md:grid-cols-3 gap-6 mt-16">
            <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-2xl mb-3">🔧</div>
              <h3 className="text-heading mb-2">Precision Tuning</h3>
              <p className="text-tactical text-muted-foreground">Advanced ECU mapping and performance optimization</p>
            </div>
            
            <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-2xl mb-3">⚡</div>
              <h3 className="text-heading mb-2">Electric Systems</h3>
              <p className="text-tactical text-muted-foreground">Next-gen EV powertrain development and maintenance</p>
            </div>
            
            <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-colors duration-300">
              <div className="text-2xl mb-3">🎯</div>
              <h3 className="text-heading mb-2">Tactical Vehicles</h3>
              <p className="text-tactical text-muted-foreground">Specialized modifications for defense applications</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AutomotiveSection;