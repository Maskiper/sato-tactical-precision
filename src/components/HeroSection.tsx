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
          {/* Main Headline */}
          <div className="animate-fade-in">
            <h1 className="text-display mb-6 leading-none">
              Engineering the
              <span className="block text-primary">Future of Precision</span>
            </h1>
          </div>

          {/* Subheadline */}
          <div className="animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <p className="text-body-large text-muted-foreground max-w-3xl mx-auto mb-8">
              From mastering code at 11 to holding national records at 16, I've dedicated my life to pushing 
              the boundaries of tactical engineering. SATO represents the convergence of personal excellence 
              and revolutionary technology.
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
              <div className="text-3xl font-bold">11</div>
              <div className="text-tactical text-muted-foreground">AGE MASTERED C++</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">800M</div>
              <div className="text-tactical text-muted-foreground">NATIONAL RECORD</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">.308</div>
              <div className="text-tactical text-muted-foreground">PRECISION RIFLES</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold">∞</div>
              <div className="text-tactical text-muted-foreground">POSSIBILITIES</div>
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