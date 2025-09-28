import { Lightbulb, Settings, Brain, Code, CheckCircle } from 'lucide-react';

const Services = () => {
  return (
    <section id="services" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-accent font-semibold mb-2">🛠️ MY SERVICE PROVIDE</p>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            MY BEST QUALITY <span className="text-gradient">SERVICE</span>
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Main Service Card */}
          <div className="card-gradient mb-12">
            <div className="text-center mb-8">
              <div className="inline-flex p-4 rounded-xl bg-primary/20 mb-4">
                <Lightbulb className="h-12 w-12 text-primary" />
              </div>
              <h3 className="text-3xl font-bold text-foreground mb-4">Technical Advisor</h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Expert guidance in automation strategies, framework design, and AI-driven testing approaches. 
                I help organizations build scalable, maintainable test automation solutions.
              </p>
            </div>

            {/* Service Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-primary/20 mb-4">
                  <Settings className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Automation Strategy</h4>
                <p className="text-sm text-muted-foreground">
                  Comprehensive automation roadmaps and framework architecture design
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-accent/20 mb-4">
                  <Code className="h-6 w-6 text-accent" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Framework Development</h4>
                <p className="text-sm text-muted-foreground">
                  Custom automation frameworks using modern tools and best practices
                </p>
              </div>

              <div className="bg-secondary/50 rounded-xl p-6 text-center">
                <div className="inline-flex p-3 rounded-lg bg-primary/20 mb-4">
                  <Brain className="h-6 w-6 text-primary" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">AI Integration</h4>
                <p className="text-sm text-muted-foreground">
                  AI-driven testing approaches and intelligent automation solutions
                </p>
              </div>
            </div>
          </div>

          {/* Expertise Areas */}
          <div className="grid md:grid-cols-2 gap-8">
            <div className="card-accent">
              <h4 className="text-xl font-bold text-foreground mb-4">Core Specializations</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Web Automation (Selenium + C#)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Mobile Testing (Appium)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">API Validation (RestSharp)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">Azure DevOps Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-accent flex-shrink-0" />
                  <span className="text-muted-foreground">BDD with SpecFlow</span>
                </div>
              </div>
            </div>

            <div className="card-accent">
              <h4 className="text-xl font-bold text-foreground mb-4">Consulting Benefits</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Scalable Framework Architecture</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Reduced Maintenance Overhead</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Enhanced Test Coverage</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">CI/CD Pipeline Integration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">Team Training & Knowledge Transfer</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-12">
            <button className="btn-hero">
              GET EXPERT CONSULTATION
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;