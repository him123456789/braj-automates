import { Building, Calendar, CheckCircle } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">💼 MY EXPERIENCE</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            MY <span className="text-gradient">PROFESSIONAL</span> JOURNEY
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary to-accent"></div>

            {/* Experience Item */}
            <div className="relative flex items-start space-x-8 pb-12">
              {/* Timeline Dot */}
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center border-4 border-background">
                  <Building className="h-8 w-8 text-primary-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 card-gradient">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-foreground mb-2">Software Engineer</h3>
                    <p className="text-xl text-primary font-semibold">Tata Consultancy Services (TCS)</p>
                  </div>
                  <div className="flex items-center text-accent text-sm font-medium">
                    <Calendar className="h-4 w-4 mr-2" />
                    Nov 2020 – Present
                  </div>
                </div>

                <p className="text-muted-foreground mb-6">
                  Leading automation initiatives across multiple domains with focus on framework design, 
                  Azure DevOps integration, and comprehensive testing strategies for web, mobile, and backend systems.
                </p>

                {/* Key Achievements */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Designed and implemented robust automation frameworks using OOP principles
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Integrated automation with Azure DevOps for seamless CI/CD pipelines
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Expertise in web (Selenium C#), mobile (Appium), and API testing (RestSharp)
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Implemented BDD practices with SpecFlow for enhanced test readability
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Explored AI-driven approaches to enhance test automation efficiency
                    </span>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Mentored junior developers in automation best practices
                    </span>
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

export default Experience;