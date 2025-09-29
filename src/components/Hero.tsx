import { ChevronDown, Download, Play, MapPin, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';
import profileImage from '@/assets/braj-profile-new.jpg';
import { useEffect, useState } from 'react';

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-15"></div>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/50 to-black/40"></div>
      
      {/* Floating Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/20 rounded-full animate-float-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${8 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Interactive Cursor Effect */}
      <div 
        className="absolute w-96 h-96 bg-primary/5 rounded-full blur-3xl transition-all duration-300 pointer-events-none"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
      />
      
      {/* Geometric Decorations */}
      <div className="absolute top-20 right-20 geometric-accent animate-float"></div>
      <div className="absolute bottom-32 left-16 geometric-accent animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 right-10 geometric-accent animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className={`text-center lg:text-left transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 bg-card/80 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-6">
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              <span className="text-sm text-muted-foreground">Available for opportunities</span>
            </div>

            <div className="mb-6">
              <p className={`text-accent font-semibold text-lg mb-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'}`} style={{ animationDelay: '0.2s' }}>
                👋 Hi I'm Braj Patel
              </p>
              <h1 className={`text-5xl lg:text-6xl font-bold mb-4 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '0.4s' }}>
                <span className="text-gradient animate-text-reveal drop-shadow-lg">SOFTWARE ENGINEER</span>
              </h1>
            </div>

            {/* Stats */}
            <div className={`flex justify-center lg:justify-start gap-6 mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '0.8s' }}>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">4+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-accent">50+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Success Rate</div>
              </div>
            </div>

            <p className={`text-xl text-foreground/90 mb-8 max-w-2xl transition-all duration-700 drop-shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '1s' }}>
              As a dedicated professional with 4+ years of experience, I bring expertise in test automation, 
              AI frameworks, and scalable solution design throughout every phase of my career.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '1.2s' }}>
              <Button className="btn-hero group magnetic-button">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Download CV
                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
              <Button variant="outline" className="btn-secondary group magnetic-button">
                <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                Play Video
                <div className="absolute inset-0 bg-primary/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </div>

            {/* Location & Contact Quick Links */}
            <div className={`flex justify-center lg:justify-start gap-4 text-sm text-muted-foreground transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '1.4s' }}>
              <div className="flex items-center gap-1">
                <MapPin className="w-4 h-4" />
                <span>India</span>
              </div>
              <div className="flex items-center gap-1">
                <Coffee className="w-4 h-4" />
                <span>Always up for coffee chat</span>
              </div>
            </div>
          </div>

          {/* Enhanced Profile Image */}
          <div className={`flex justify-center lg:justify-end transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`} style={{ animationDelay: '0.5s' }}>
            <div className="relative group">
              {/* Rotating Rings */}
              <div className="absolute -inset-4 rounded-full border border-primary/20 animate-spin-slow"></div>
              <div className="absolute -inset-8 rounded-full border border-accent/10 animate-spin-reverse"></div>
              
              {/* Main Image Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-primary shadow-glow transition-all duration-500 group-hover:scale-105 group-hover:shadow-glow-intense magnetic-element">
                <img
                  src={profileImage}
                  alt="Braj Patel - Automation Engineer"
                  className="w-full h-full object-cover transition-all duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-secondary rounded-full animate-pulse-slow group-hover:animate-bounce"></div>
              <div className="absolute -bottom-2 -left-2 w-12 h-12 bg-gradient-to-r from-accent to-primary rounded-full animate-float opacity-60"></div>
              
              {/* Skill Tags */}
              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2">
                <div className="bg-card/90 backdrop-blur-sm border border-primary/20 rounded-full px-3 py-1 text-xs text-primary whitespace-nowrap">
                  Automation Expert
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-2" style={{ animationDelay: '0.1s' }}>
                <div className="bg-card/90 backdrop-blur-sm border border-accent/20 rounded-full px-3 py-1 text-xs text-accent whitespace-nowrap">
                  AI Enthusiast
                </div>
              </div>
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