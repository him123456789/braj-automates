import { Mail, Linkedin, Github, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-background border-t border-border py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="text-2xl font-bold text-gradient mb-4">
              Braj Patel
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Software Engineer with 5+ years of experience 
              in building scalable test automation solutions and AI-driven frameworks.
            </p>
            <div className="flex space-x-4">
              <a
                href="mailto:patelbraj1311@gmail.com"
                className="bg-primary/20 p-3 rounded-lg hover:scale-110 transition-transform group"
                aria-label="Email"
              >
                <Mail className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://www.linkedin.com/in/brajpatel-sdet/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 p-3 rounded-lg hover:scale-110 transition-transform group"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </a>
              <a
                href="https://github.com/him123456789"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/20 p-3 rounded-lg hover:scale-110 transition-transform group"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5 text-primary group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection('home')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('services')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('portfolio')}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Portfolio
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-foreground mb-4">Expertise</h3>
            <ul className="space-y-2 text-muted-foreground text-sm">
              <li>Test Automation</li>
              <li>Framework Design</li>
              <li>Azure DevOps</li>
              <li>AI Integration</li>
              <li>Technical Consulting</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Braj Patel. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm flex items-center mt-4 md:mt-0">
            Built using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;