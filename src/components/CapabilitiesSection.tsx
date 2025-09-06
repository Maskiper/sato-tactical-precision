const CapabilitiesSection = () => {
  const capabilities = [
    {
      category: "Engineering & Development",
      items: [
        "Advanced drone avionics design and integration",
        "Precision ballistics manufacturing and testing",
        "Embedded systems programming (C++, JavaScript, HTML)",
        "Arduino and microcontroller development",
        "Ultrasonic radar system implementation",
        "Performance automotive systems engineering"
      ]
    },
    {
      category: "Manufacturing & Production",
      items: [
        ".308 Winchester rifle production",
        "Match-grade ammunition manufacturing",
        "Military specification quality control",
        "Custom ballistics solutions",
        "Precision machining and tolerances",
        "Defense contractor capabilities"
      ]
    },
    {
      category: "Business Operations",
      items: [
        "International BPO center management",
        "Strategic cost optimization",
        "Cross-border operational efficiency",
        "Client relationship management",
        "Performance automotive center development",
        "Multi-industry vertical integration"
      ]
    },
    {
      category: "Competitive Excellence",
      items: [
        "National FTR record holder (800m)",
        "F-Class and F-Open competition expertise",
        "Long-range precision shooting techniques",
        "Ballistics analysis and optimization",
        "Equipment testing and validation",
        "Performance consistency methodologies"
      ]
    }
  ];

  return (
    <section id="capabilities" className="section-padding bg-surface">
      <div className="container-premium">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-heading-1 mb-6">Core Capabilities</h2>
          <p className="text-body-large text-muted-foreground max-w-3xl mx-auto">
            A comprehensive suite of technical expertise spanning multiple industries, 
            united by a commitment to precision, innovation, and tactical excellence.
          </p>
        </div>

        {/* Capabilities Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {capabilities.map((capability, index) => (
            <div 
              key={index}
              className="p-8 bg-background border border-border rounded-lg hover:shadow-tactical transition-all duration-300"
            >
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-heading-3 mb-2">{capability.category}</h3>
                <div className="w-16 h-1 bg-primary rounded-full" />
              </div>

              {/* Capability Items */}
              <div className="space-y-3">
                {capability.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex items-start">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 mr-4 flex-shrink-0" />
                    <span className="text-body text-muted-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Technology Stack */}
        <div className="mt-16">
          <h3 className="text-heading-3 text-center mb-8">Technology Stack</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "C++", "JavaScript", "HTML", "Arduino", "Embedded Systems",
              "CAD/CAM", "Ballistics Software", "CNC Programming", 
              "Quality Control Systems", "Military Standards",
              "International Business", "Supply Chain Management"
            ].map((tech, index) => (
              <span 
                key={index}
                className="px-4 py-2 bg-primary text-primary-foreground text-sm rounded-md font-mono hover:bg-hover hover:text-hover-foreground transition-colors duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="max-w-2xl mx-auto p-8 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg border border-border">
            <h3 className="text-heading-3 mb-4">Ready to Collaborate?</h3>
            <p className="text-body text-muted-foreground mb-6">
              Whether you need precision engineering, tactical solutions, or innovative 
              manufacturing capabilities, SATO delivers results that exceed expectations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="premium-button px-8 py-3 rounded-lg font-semibold">
                Discuss Your Project
              </button>
              <button className="border border-border bg-background hover:bg-surface text-foreground px-8 py-3 rounded-lg transition-colors duration-300">
                View Case Studies
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilitiesSection;