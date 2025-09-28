import { ChevronDown, Download, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/braj-profile.jpg';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      {/* Geometric Decorations */}
      <div className="absolute top-20 right-20 geometric-accent animate-float"></div>
      <div className="absolute bottom-32 left-16 geometric-accent animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 geometric-accent animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <p className="text-accent font-semibold text-lg mb-2">👋 Hi I'm Braj Patel</p>
              <h1 className="text-5xl lg:text-6xl font-bold mb-4">
                <span className="text-gradient">AUTOMATION ENGINEER</span>
              </h1>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                & <span className="text-accent-gradient">TECHNICAL ADVISOR</span>
              </h2>
            </div>

            <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
              As a dedicated professional with 4+ years of experience, I bring expertise in test automation, 
              AI frameworks, and scalable solution design throughout every phase of my career.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button className="btn-hero group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
              </Button>
              <Button variant="outline" className="btn-secondary group">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Play Video
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-glow">
                <img
                  src={profileImage}
                  alt="Braj Patel - Automation Engineer"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating animation circle */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full animate-pulse-slow"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-accent hover:text-primary transition-colors animate-bounce"
        aria-label="Scroll to about section"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
};

export default Hero;