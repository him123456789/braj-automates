import { Code, Database, Cpu, Globe, Smartphone, Cloud, Brain, Wrench } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      icon: Code,
      title: 'Programming Languages',
      items: ['Python', 'C#', 'JavaScript', 'TypeScript'],
      color: 'text-primary'
    },
    {
      icon: Database,
      title: 'Data & Algorithms',
      items: ['Data Structures', 'Algorithms', 'SQL', 'NoSQL'],
      color: 'text-accent'
    },
    {
      icon: Cpu,
      title: 'System Knowledge',
      items: ['Operating Systems', 'Networking', 'System Design'],
      color: 'text-primary'
    },
    {
      icon: Wrench,
      title: 'Automation Tools',
      items: ['Selenium', 'Appium', 'RestSharp', 'SpecFlow'],
      color: 'text-accent'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      items: ['Azure DevOps', 'CI/CD', 'Microservices', 'Docker'],
      color: 'text-primary'
    },
    {
      icon: Brain,
      title: 'AI & Frameworks',
      items: ['ML Frameworks', 'AI Testing', 'Automation AI', 'Neural Networks'],
      color: 'text-accent'
    },
    {
      icon: Globe,
      title: 'Web Development',
      items: ['React', 'Node.js', 'REST APIs', 'GraphQL'],
      color: 'text-primary'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      items: ['React Native', 'Mobile Testing', 'Cross-platform', 'Native Apps'],
      color: 'text-accent'
    }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">🚀 LET'S EXPLORE POPULAR</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            SKILLS AND <span className="text-gradient">EXPERIENCE</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon;
            return (
              <div
                key={index}
                className="card-gradient group hover:scale-105 transition-all duration-300"
              >
                <div className="text-center">
                  <div className={`inline-flex p-4 rounded-xl bg-secondary/50 mb-4 group-hover:scale-110 transition-transform ${skill.color}`}>
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="font-bold text-foreground mb-4">{skill.title}</h3>
                  <div className="space-y-2">
                    {skill.items.map((item, itemIndex) => (
                      <div
                        key={itemIndex}
                        className="text-sm text-muted-foreground bg-secondary/30 px-3 py-1 rounded-full"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Technical Expertise Summary */}
        <div className="mt-16 card-gradient">
          <div className="text-center">
            <h3 className="text-2xl font-bold text-foreground mb-6">Technical Expertise Summary</h3>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">4+</div>
                <div className="text-muted-foreground">Years of Experience</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">15+</div>
                <div className="text-muted-foreground">Technologies Mastered</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-accent mb-2">50+</div>
                <div className="text-muted-foreground">Projects Delivered</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;