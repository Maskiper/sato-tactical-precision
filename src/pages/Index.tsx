import { useState, useEffect } from "react";
import LoadingAnimation from "@/components/LoadingAnimation";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PersonalSection from "@/components/PersonalSection";
import DroneSection from "@/components/DroneSection";
import CompanySection from "@/components/CompanySection";
import AutomotiveSection from "@/components/AutomotiveSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);

  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    // Prevent scrolling during loading
    if (isLoading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isLoading]);

  if (isLoading) {
    return <LoadingAnimation onComplete={handleLoadingComplete} />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <PersonalSection />
      <DroneSection />
      <CompanySection />
      <AutomotiveSection />
      <CapabilitiesSection />
      <ContactSection />
    </div>
  );
};

export default Index;
