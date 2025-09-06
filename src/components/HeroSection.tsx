import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-drone.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Advanced tactical drone technology"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-surface" />
      </div>

      {/* Content */}
      <div className="container-premium relative z-10">
        <div className="max-w-6xl mx-auto text-center">
          {/* Logo and Headline */}
          <div className="animate-fade-in">
            <img 
              src="/lovable-uploads/eb3d11fc-8294-4b1b-b785-f08fac3557ec.png" 
              alt="SATO Logo" 
              className="h-20 mx-auto mb-6"
            />
            <h1 className="text-display mb-6 leading-none">
              <span className="block text-primary">Private Military Contractor</span>
              Advanced Tactical Solutions
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-8">
              SATO delivers cutting-edge defense systems, precision engineering, and tactical solutions 
              to military and government agencies worldwide. From autonomous drone systems to ballistic manufacturing.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="animate-scale-in flex flex-col sm:flex-row gap-4 justify-center items-center" style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="premium" 
              size="xl"
              onClick={() => scrollToSection('capabilities')}
            >
              Explore Capabilities
            </Button>
            <Button 
              variant="tactical" 
              size="xl"
              onClick={() => scrollToSection('personal')}
            >
              VIEW PORTFOLIO
            </Button>
          </div>

          {/* Stats */}
          <div className="animate-fade-in mt-16 grid grid-cols-2 md:grid-cols-4 gap-8" style={{ animationDelay: '0.6s' }}>
            <div className="text-center">
              <div className="text-3xl font-bold">14</div>
              <div className="text-tactical text-muted-foreground">YEARS UAV DEVELOPMENT</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">800M</div>
              <div className="text-tactical text-muted-foreground">PRECISION RECORD</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">.308</div>
              <div className="text-tactical text-muted-foreground">BALLISTIC SYSTEMS</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-tactical text-muted-foreground">TACTICAL SOLUTIONS</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-float">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;