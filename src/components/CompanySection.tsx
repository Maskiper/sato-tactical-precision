import tacRifleImage from "@/assets/tactical-rifle.jpg";

const CompanySection = () => {
  const divisions = [
    {
      title: "Drone Avionics",
      subtitle: "Advanced Flight Systems",
      description: "Engineering cutting-edge avionics for tactical and commercial applications. Our systems integrate AI-powered navigation, advanced sensor fusion, and military-grade reliability.",
      features: ["AI Navigation", "Sensor Fusion", "Military-Grade Reliability", "Custom Payload Integration"],
      image: "🚁"
    },
    {
      title: "Ballistics Manufacturing",
      subtitle: "Precision Weaponry",
      description: "Manufacturing .308 rifles and ammunition for military and law enforcement. Every component is crafted to exceed specifications with uncompromising attention to detail.",
      features: [".308 Winchester Rifles", "Match-Grade Ammunition", "Army & POF Contracts", "Custom Ballistics Solutions"],
      image: "🎯"
    },
    {
      title: "Performance Automotive",
      subtitle: "Engineering Excellence",
      description: "Developing high-performance automotive maintenance centers that combine precision engineering with cutting-edge diagnostic technology.",
      features: ["Advanced Diagnostics", "Performance Tuning", "Precision Maintenance", "Custom Solutions"],
      image: "🏎️"
    }
  ];

  return (
    <section id="company" className="section-padding">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">SATO Divisions</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            Three distinct verticals united by a singular vision: pushing the boundaries 
            of what's possible through precision engineering and tactical innovation.
          </p>
        </div>

        {/* Hero Visual */}
        <div className="mb-20 relative">
          <div className="aspect-video rounded-xl overflow-hidden bg-gradient-to-r from-primary/5 to-accent/5 border border-border">
            <img 
              src={tacRifleImage} 
              alt="SATO precision manufacturing capabilities"
              className="w-full h-full object-cover opacity-80"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
            <div className="absolute bottom-8 left-8">
              <h3 className="text-heading-2 text-primary-foreground mb-2">Precision. Performance. Purpose.</h3>
              <p className="text-body text-primary-foreground/80">
                Where engineering excellence meets tactical objectives
              </p>
            </div>
          </div>
        </div>

        {/* Divisions Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {divisions.map((division, index) => (
            <div 
              key={index} 
              className="group p-8 bg-surface border border-border rounded-lg hover:shadow-premium transition-all duration-300"
            >
              {/* Icon */}
              <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">
                {division.image}
              </div>

              {/* Content */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-heading-3 mb-2">{division.title}</h3>
                  <p className="text-tactical text-primary">{division.subtitle}</p>
                </div>

                <p className="text-body text-muted-foreground">
                  {division.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {division.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
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