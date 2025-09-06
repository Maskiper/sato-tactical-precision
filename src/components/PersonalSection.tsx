const PersonalSection = () => {
  const achievements = [
    {
      age: "11",
      title: "Code Mastery",
      description: "Mastered C++, JavaScript, and HTML while working with Arduino microcontrollers and ultrasonic radar systems.",
      tech: ["C++", "JavaScript", "HTML", "Arduino", "Embedded Systems"]
    },
    {
      age: "16",
      title: "National FTR Champion",
      description: "Set the national record for FTR (F-Class Target Rifle) matches at 800 meters, demonstrating unparalleled precision and consistency.",
      tech: ["Ballistics", "Precision Engineering", "Performance Analytics"]
    },
    {
      age: "Present",
      title: "Global Operations",
      description: "Founded and operates a BPO center in Pakistan, utilizing strategic geographical advantages and cost optimization for international clients.",
      tech: ["Business Operations", "International Trade", "Strategic Planning"]
    }
  ];

  return (
    <section id="personal" className="section-padding bg-surface">
      <div className="container-premium">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-heading-1 mb-6">Personal Excellence</h2>
            <p className="text-body-large text-muted-foreground max-w-2xl mx-auto">
              A journey of relentless pursuit of perfection, from childhood prodigy to 
              industry leader, with achievements that defy conventional timelines.
            </p>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {achievements.map((achievement, index) => (
              <div key={index} className="grid md:grid-cols-12 gap-8 items-center">
                {/* Age Badge */}
                <div className="md:col-span-2">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary text-primary-foreground text-2xl font-bold">
                    {achievement.age}
                  </div>
                </div>

                {/* Content */}
                <div className="md:col-span-7">
                  <h3 className="text-heading-3 mb-4">{achievement.title}</h3>
                  <p className="text-body text-muted-foreground mb-4">
                    {achievement.description}
                  </p>
                  
                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {achievement.tech.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-md font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Visual Element */}
                <div className="md:col-span-3">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg border border-border flex items-center justify-center">
                    <div className="text-6xl text-primary/20 font-mono">
                      {index === 0 ? '</>' : index === 1 ? '🎯' : '🌐'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* FTR Information Box */}
          <div className="mt-16 p-8 bg-background border border-border rounded-lg">
            <h4 className="text-heading-3 mb-4">About FTR & F-Open Competitions</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-semibold mb-2">F-Class Target Rifle (FTR)</h5>
                <p className="text-sm text-muted-foreground">
                  A precision rifle discipline where competitors use .308 Winchester cartridges 
                  with strict equipment regulations. Matches test consistency and accuracy over 
                  distances up to 1000 yards.
                </p>
              </div>
              <div>
                <h5 className="font-semibold mb-2">F-Open Division</h5>
                <p className="text-sm text-muted-foreground">
                  An unrestricted division allowing any cartridge and equipment configuration, 
                  pushing the absolute limits of long-range precision shooting technology.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PersonalSection;