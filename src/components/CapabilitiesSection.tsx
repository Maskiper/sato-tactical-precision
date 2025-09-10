import { Settings, Car, Monitor, TrendingUp, BarChart3, Atom, Rocket } from "lucide-react";

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

        {/* Personal Expertise */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-heading-2 mb-4">Architect of Innovation</h3>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              A multidisciplinary engineer with an extraordinary breadth of expertise, 
              seamlessly bridging the gap between theoretical knowledge and practical excellence.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-8 max-w-6xl mx-auto">
            {[
              {
                skill: "Mechanical Engineering",
                description: "Master of precision mechanics, advanced material science, and computational fluid dynamics. Expertise in finite element analysis, thermodynamics, and cutting-edge manufacturing processes.",
                icon: Settings,
              },
              {
                skill: "Automotive Engineering", 
                description: "Elite performance systems architect specializing in high-performance engine dynamics, advanced suspension geometries, and aerodynamic optimization for competitive motorsports.",
                icon: Car,
              },
              {
                skill: "Web Development & Interactive Design",
                description: "Full-stack development virtuoso crafting immersive digital experiences with cutting-edge frameworks, responsive architectures, and stunning user interface design.",
                icon: Monitor,
              },
              {
                skill: "Digital Marketing & Media Strategy",
                description: "Strategic brand architect with mastery in data-driven campaigns, omnichannel marketing automation, and compelling multimedia content that drives measurable results.",
                icon: TrendingUp,
              },
              {
                skill: "Applied Mathematics & Data Analysis",
                description: "Advanced analytical expert leveraging complex algorithms, predictive modeling, statistical analysis, and machine learning to extract actionable insights from complex datasets.",
                icon: BarChart3,
              },
              {
                skill: "Animal Nutrition",
                description: "Specialized biochemist with deep expertise in metabolic pathways, nutritional optimization, and the intricate relationship between dietary science and biological performance.",
                icon: Atom,
              },
              {
                skill: "Aerospace & Mechanical Concepts",
                description: "Aerospace systems engineer with comprehensive knowledge of flight dynamics, propulsion systems, structural analysis, and advanced materials for extreme environment applications.",
                icon: Rocket,
              }
            ].map((expertise, index) => {
              const IconComponent = expertise.icon;
              return (
                <div
                  key={index}
                  className="group relative cursor-pointer"
                  style={{ 
                    clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                    width: '200px',
                    height: '200px'
                  }}
                >
                  {/* Hexagon Background */}
                  <div 
                    className="absolute inset-0 bg-black border-2 border-white group-hover:bg-white transition-all duration-500"
                    style={{ clipPath: 'inherit' }}
                  />
                  
                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col items-center justify-center p-6 text-center">
                    <IconComponent 
                      size={32} 
                      className="text-white group-hover:text-black transition-colors duration-500 mb-3" 
                    />
                    <h4 className="text-white group-hover:text-black text-sm font-bold leading-tight transition-colors duration-500">
                      {expertise.skill}
                    </h4>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
                    <div className="bg-black text-white p-4 rounded-lg text-sm max-w-xs border border-white shadow-lg">
                      <p className="leading-relaxed">{expertise.description}</p>
                      <div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black border-l border-t border-white rotate-45" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Excellence Statement */}
          <div className="mt-12 text-center">
            <div className="inline-block p-8 bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 rounded-2xl border border-border/50">
              <p className="text-body-large text-muted-foreground italic max-w-4xl">
                "Excellence is not a destination, but a relentless pursuit of perfection across every discipline. 
                Where others see boundaries between fields, I see opportunities for revolutionary integration."
              </p>
              <div className="mt-4 w-24 h-0.5 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
            </div>
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