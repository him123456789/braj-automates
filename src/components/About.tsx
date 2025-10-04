import { GraduationCap, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">✨ ABOUT ME</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient">SOFTWARE ENGINEER</span> | <span className="text-accent-gradient">INNOVATION ENTHUSIAST</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I'm Braj Patel, an Automation Engineer with 4+ years of experience designing and implementing 
              robust test automation solutions. My expertise spans web (Selenium with C#), mobile (Appium), 
              and backend/API validation (RestSharp, Azure microservices).
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              I have hands-on experience integrating automation with Azure DevOps for seamless reporting 
              and test management. I'm passionate about building scalable frameworks using OOP principles, 
              leveraging BDD with SpecFlow, and exploring AI-driven approaches to enhance test automation.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Beyond technology, I'm naturally curious and enjoy simplifying complex concepts into 
              practical solutions.
            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">UI/UX AUTOMATION</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">API DEVELOPMENT</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">FRAMEWORK DESIGN</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-foreground">AI & AUTOMATION</span>
              </div>
            </div>

            <button 
              className="btn-hero" 
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GET IN TOUCH NOW
            </button>
          </div>

          {/* Stats and Education */}
          <div className="space-y-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-6">
              <div className="card-gradient text-center">
                <div className="text-3xl font-bold text-accent mb-2">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="card-gradient text-center">
                <div className="text-3xl font-bold text-accent mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="card-gradient text-center">
                <div className="text-3xl font-bold text-accent mb-2">10+</div>
                <div className="text-sm text-muted-foreground">Frameworks Built</div>
              </div>
              <div className="card-gradient text-center">
                <div className="text-3xl font-bold text-accent mb-2">100%</div>
                <div className="text-sm text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>

            {/* Education */}
            <div className="card-gradient">
              <div className="flex items-start space-x-4">
                <div className="bg-primary/20 p-3 rounded-lg">
                  <GraduationCap className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-foreground mb-2">
                    B.Tech, Computer Science & Engineering
                  </h3>
                  <p className="text-muted-foreground mb-2">
                    Madan Mohan Malaviya University Of Technology Gorakhpur
                  </p>
                  <div className="flex items-center text-accent text-sm">
                    <Calendar className="h-4 w-4 mr-1" />
                    2020
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;