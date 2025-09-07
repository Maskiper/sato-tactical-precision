import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import tacRifleImage from "@/assets/tactical-rifle.jpg";

const BallisticsSection = () => {
  return (
    <section id="ballistics" className="py-24 bg-background">
      <div className="container-premium">
        {/* Landscape Image */}
        <div className="relative group mb-12">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-lg transform -rotate-1 group-hover:-rotate-2 transition-transform duration-300" />
          <img 
            src={tacRifleImage}
            alt="SATO precision ballistics manufacturing"
            className="relative w-full h-[400px] object-cover rounded-lg shadow-premium transform group-hover:scale-[1.02] transition-all duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent rounded-lg" />
          
          <div className="absolute bottom-8 left-8">
            <h3 className="text-heading-2 text-primary-foreground mb-2">Precision. Performance. Purpose.</h3>
            <p className="text-body text-primary-foreground/80">
              Where engineering excellence meets tactical objectives
            </p>
          </div>
          
          {/* Ballistics Badge Overlay */}
          <div className="absolute top-4 right-4 flex flex-col gap-2">
            <Badge variant="secondary" className="backdrop-blur-sm">.308 WINCHESTER</Badge>
            <Badge variant="outline" className="backdrop-blur-sm">MIL-SPEC</Badge>
          </div>
        </div>

        {/* Content Below */}
        <div>
          <div className="flex items-center gap-2 mb-4">
            <Badge variant="secondary">BALLISTICS MANUFACTURING</Badge>
            <Badge variant="outline">ARMY & POF CONTRACTS</Badge>
          </div>
          
          <h2 className="text-display-small mb-6">
            Precision Ballistics
            <span className="block text-primary">& Rifle Manufacturing</span>
          </h2>
          
          <p className="text-body text-muted-foreground mb-8">
            As a Private Military Contractor, SATO manufactures .308 Winchester rifles and ammunition 
            for military and law enforcement agencies. Every component is crafted to exceed MIL-STD 
            specifications with uncompromising attention to detail and tactical precision.
          </p>

          {/* Manufacturing Specs */}
          <div className="space-y-4 mb-8">
            <h3 className="text-heading text-foreground mb-4">Manufacturing Capabilities</h3>
            
            <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🎯</span>
                <span className="text-body font-medium">.308 Winchester Rifles</span>
              </div>
              <p className="text-tactical text-muted-foreground ml-8">
                Match-grade precision rifles with sub-MOA accuracy for military applications
              </p>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">💥</span>
                <span className="text-body font-medium">Match-Grade Ammunition</span>
              </div>
              <p className="text-tactical text-muted-foreground ml-8">
                Custom ballistics solutions with consistent performance and reliability
              </p>
            </div>

            <div className="p-6 bg-surface rounded-lg border border-border hover:border-primary/50 transition-all duration-300">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-xl">🏛️</span>
                <span className="text-body font-medium">Government Contracts</span>
              </div>
              <p className="text-tactical text-muted-foreground ml-8">
                Supplying Pakistan Army and Pakistan Ordnance Factories with tactical solutions
              </p>
            </div>
          </div>

          <div className="flex gap-4">
            <Button variant="tactical" className="group relative overflow-hidden">
              <span className="relative z-10">VIEW SPECIFICATIONS</span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
            <Button variant="outline" className="group relative overflow-hidden">
              <span className="relative z-10">REQUEST QUOTE</span>
              <div className="absolute inset-0 bg-gradient-to-r from-surface/50 to-surface opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BallisticsSection;