import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const contactMethods = [
    {
      title: "Strategic Partnerships",
      description: "For large-scale defense contracts, manufacturing partnerships, and institutional collaborations.",
      action: "Schedule Executive Briefing",
      icon: "🤝"
    },
    {
      title: "Technical Consultation",
      description: "Engineering services, technical advisory, and precision manufacturing solutions.",
      action: "Request Technical Review",
      icon: "⚙️"
    },
    {
      title: "Business Operations",
      description: "BPO services, operational optimization, and international business development.",
      action: "Explore Partnership",
      icon: "🌐"
    }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Engage SATO</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Ready to push the boundaries of what's possible? Let's discuss how SATO's 
            precision engineering and tactical expertise can advance your objectives.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div 
              key={index}
              className="p-8 bg-surface border border-border rounded-lg text-center hover:shadow-premium transition-all duration-300 group"
            >
              <div className="text-5xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {method.icon}
              </div>
              <h3 className="text-heading-3 mb-4">{method.title}</h3>
              <p className="text-body text-muted-foreground mb-6">
                {method.description}
              </p>
              <Button variant="tactical" className="w-full">
                {method.action}
              </Button>
            </div>
          ))}
        </div>

        {/* Direct Contact */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary to-accent p-12 rounded-lg text-center text-primary-foreground">
            <h3 className="text-heading-2 mb-6">Mission-Critical Communications</h3>
            <p className="text-body-large mb-8 opacity-90">
              For urgent tactical requirements or time-sensitive opportunities, 
              direct communication channels are available for qualified partners.
            </p>
            
            <div className="grid md:grid-cols-2 gap-8 mb-8">
              <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Strategic Operations</h4>
                <p className="text-sm opacity-80">
                  Defense contracts, government partnerships, 
                  and institutional engagements
                </p>
              </div>
              <div className="p-6 bg-primary-foreground/10 rounded-lg backdrop-blur-sm">
                <h4 className="font-semibold mb-2">Technical Services</h4>
                <p className="text-sm opacity-80">
                  Engineering consultation, manufacturing services, 
                  and precision solutions
                </p>
              </div>
            </div>

            <Button 
              variant="outline" 
              size="xl"
              className="bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/30"
            >
              INITIATE CONTACT PROTOCOL
            </Button>
          </div>
        </div>

        {/* Company Info */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <h4 className="font-semibold mb-2">Global Operations</h4>
              <p className="text-sm text-muted-foreground">
                International presence with strategic facilities 
                across multiple continents
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Security Clearance</h4>
              <p className="text-sm text-muted-foreground">
                Cleared for defense industry partnerships 
                and classified project collaboration
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-2">Response Time</h4>
              <p className="text-sm text-muted-foreground">
                Mission-critical inquiries receive priority 
                response within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;