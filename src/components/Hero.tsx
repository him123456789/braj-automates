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

  const handleDownloadCV = async () => {
    try {
      const response = await fetch('/BrajPatelSDET.pdf');
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'BrajPatel_CV.pdf';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error('Error downloading CV:', error);
      // Fallback: try direct link
      window.open('/BrajPatelSDET.pdf', '_blank');
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
      <div className="absolute inset-0 bg-mesh-pattern opacity-10"></div>
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/90 to-black/60"></div>
      
      {/* Floating Programming Language Logos */}
      <div className="absolute inset-0 z-0">
        {/* Python */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ left: '5%', top: '15%', animationDelay: '0s', animationDuration: '8s' }}>
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-30 hover:opacity-60 transition-opacity p-2">
            <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 3 7.647 3L7.6 5.859s-.047 1.812 1.788 1.812h4.194v.966H6.949s-3.613-.395-3.613 5.115c0 5.508 3.145 5.312 3.145 5.312h1.871v-2.635s-.1-3.137 3.233-3.137z" fill="url(#python-gradient)" />
            <defs>
              <linearGradient id="python-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#4B8BBE" />
                <stop offset="100%" stopColor="#FFD43B" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* JavaScript */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ right: '5%', top: '10%', animationDelay: '2s', animationDuration: '10s' }}>
          <div className="w-full h-full bg-[#F7DF1E] rounded-lg flex items-center justify-center text-black font-bold text-xl opacity-30 hover:opacity-60 transition-opacity p-2">
            JS
          </div>
        </div>

        {/* React */}
        <div className="absolute w-16 h-16 animate-float-particle" style={{ left: '8%', bottom: '20%', animationDelay: '4s', animationDuration: '9s' }}>
          <svg viewBox="-11.5 -10.23174 23 20.46348" className="w-full h-full opacity-30 hover:opacity-60 transition-opacity p-2">
            <circle cx="0" cy="0" r="2.05" fill="#61dafb"/>
            <g stroke="#61dafb" strokeWidth="1" fill="none">
              <ellipse rx="11" ry="4.2"/>
              <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
              <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
            </g>
          </svg>
        </div>

        {/* TypeScript */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ right: '8%', bottom: '15%', animationDelay: '1s', animationDuration: '11s' }}>
          <div className="w-full h-full bg-[#3178C6] rounded-lg flex items-center justify-center text-white font-bold text-xl opacity-30 hover:opacity-60 transition-opacity p-2">
            TS
          </div>
        </div>

        {/* C# */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ right: '25%', top: '8%', animationDelay: '3s', animationDuration: '10s' }}>
          <div className="w-full h-full bg-[#239120] rounded-lg flex items-center justify-center text-white font-bold text-xl opacity-30 hover:opacity-60 transition-opacity p-2">
            C#
          </div>
        </div>

        {/* Selenium */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ left: '3%', top: '45%', animationDelay: '5s', animationDuration: '9s' }}>
          <div className="w-full h-full bg-[#43B02A] rounded-lg flex items-center justify-center text-white font-bold text-xs opacity-30 hover:opacity-60 transition-opacity p-2">
            Python
          </div>
        </div>

        {/* Appium */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ right: '3%', top: '40%', animationDelay: '6s', animationDuration: '8s' }}>
          <div className="w-full h-full bg-[#662D91] rounded-lg flex items-center justify-center text-white font-bold text-xs opacity-30 hover:opacity-60 transition-opacity p-2">
            Appium
          </div>
        </div>

        {/* Azure */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ right: '20%', bottom: '25%', animationDelay: '2.5s', animationDuration: '10s' }}>
          <div className="w-full h-full bg-[#0078D4] rounded-lg flex items-center justify-center text-white font-bold text-sm opacity-30 hover:opacity-60 transition-opacity p-2">
            Azure
          </div>
        </div>

        {/* AWS */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ left: '20%', top: '8%', animationDelay: '7s', animationDuration: '11s' }}>
          <div className="w-full h-full bg-[#FF9900] rounded-lg flex items-center justify-center text-white font-bold text-sm opacity-30 hover:opacity-60 transition-opacity p-2">
            AWS
          </div>
        </div>

        {/* Git */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ left: '25%', bottom: '18%', animationDelay: '4.5s', animationDuration: '9s' }}>
          <div className="w-full h-full bg-[#F05032] rounded-lg flex items-center justify-center text-white font-bold text-lg opacity-30 hover:opacity-60 transition-opacity p-2">
            Git
          </div>
        </div>

        {/* Java */}
        <div className="absolute w-14 h-14 animate-float-particle" style={{ right: '15%', top: '25%', animationDelay: '8s', animationDuration: '10s' }}>
          <div className="w-full h-full bg-[#007396] rounded-lg flex items-center justify-center text-white font-bold text-lg opacity-30 hover:opacity-60 transition-opacity p-2">
            Java
          </div>
        </div>
      </div>

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
                <div className="text-2xl font-bold text-primary">5+</div>
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

            <p className={`text-xl text-foreground/90 mb-8 max-w-2xl mx-auto text-center transition-all duration-700 drop-shadow-md ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '1s' }}>
              As a dedicated professional with 5+ years of experience, I bring expertise in test automation, 
              AI frameworks and scalable solution design throughout every phase of my career.
            </p>

            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-6 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`} style={{ animationDelay: '1.2s' }}>
              <Button onClick={handleDownloadCV} className="btn-hero group magnetic-button">
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
                <span>London, United Kingdom</span>
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