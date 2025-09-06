import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
      isScrolled ? 'bg-background/95 backdrop-blur-sm border-b border-border' : 'bg-transparent'
    }`}>
      <div className="container-premium">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold tracking-tight">SATO</span>
            <span className="text-tactical text-muted-foreground hidden md:inline">
              Solving Advanced Tactical Objectives
            </span>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('personal')}
              className="tactical-link text-sm"
            >
              Personal
            </button>
            <button 
              onClick={() => scrollToSection('company')}
              className="tactical-link text-sm"
            >
              Company
            </button>
            <button 
              onClick={() => scrollToSection('capabilities')}
              className="tactical-link text-sm"
            >
              Capabilities
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="tactical-link text-sm"
            >
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <Button 
            variant="tactical" 
            size="sm"
            onClick={() => scrollToSection('contact')}
          >
            ENGAGE
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;