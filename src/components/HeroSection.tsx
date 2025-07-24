import { Button } from '@/components/ui/button';
import { ChevronDown, Code, Github, Facebook, Sparkles, Star } from 'lucide-react';
import profileImage from '@/assets/profile-placeholder.jpg';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-hero-gradient relative overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 right-20 w-32 h-32 bg-hero-accent rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent rounded-lg opacity-20 rotate-45 animate-spin duration-[20s]"></div>
        <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rounded-full opacity-40 animate-bounce delay-100"></div>
        <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-accent rounded-full opacity-30 animate-pulse delay-300"></div>
        
        {/* Floating Code Icons */}
        <div className="absolute top-32 left-1/3 text-primary/20 animate-float">
          <Code size={32} />
        </div>
        <div className="absolute bottom-60 right-1/4 text-accent/20 animate-float delay-1000">
          <Sparkles size={28} />
        </div>
        <div className="absolute top-1/2 right-20 text-primary/15 animate-float delay-500">
          <Star size={24} />
        </div>
        
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 right-1/2 w-64 h-64 bg-gradient-to-r from-primary/10 to-accent/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 left-1/3 w-48 h-48 bg-gradient-to-l from-accent/15 to-primary/15 rounded-full blur-2xl animate-pulse delay-700"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content - Enhanced */}
          <div className="text-center lg:text-left space-y-8 animate-fade-in">
            <div className="space-y-6">
              {/* Status Badge */}
              <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary/10 to-accent/10 backdrop-blur-sm border border-primary/20 rounded-full text-sm font-medium animate-scale-in">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                Available for Internship
              </div>
              
              {/* Main Heading */}
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                  <span className="block text-primary-foreground">Hello, I'm</span>
                  <span className="block bg-gradient-to-r from-primary via-accent to-primary-glow bg-clip-text text-transparent animate-gradient bg-300% hover:scale-105 transition-transform duration-300">
                    Ho Nguyen Duy Bao
                  </span>
                </h1>
                
                {/* Typing Effect Subtitle */}
                <div className="relative">
                  <p className="text-2xl md:text-3xl text-primary-foreground/90 font-light">
                    Web Developer
                    <span className="inline-block w-1 h-8 bg-accent ml-1 animate-pulse"></span>
                  </p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-xl text-primary-foreground/80 leading-relaxed max-w-2xl">
                Passionate about creating digital experiences and eager to grow in the tech industry. 
                <span className="text-accent font-medium"> Ready to bring fresh ideas to your team!</span>
              </p>
            </div>
            
            {/* Enhanced Button Group */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-accent to-primary hover:from-primary hover:to-accent text-white shadow-lg hover:shadow-2xl transition-all duration-300 px-8 py-6 text-lg hover:scale-105"
              >
                <span className="group-hover:animate-pulse">Get In Touch</span>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('about')}
                className="group bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/20 hover:border-primary-foreground/50 px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
              >
                <Code className="mr-2 group-hover:rotate-12 transition-transform" size={20} />
                Learn More
              </Button>
            </div>
            
            {/* Social Links Preview */}
            <div className="flex gap-4 justify-center lg:justify-start pt-4">
              <div className="flex items-center gap-3 text-primary-foreground/60 text-sm">
                <Github size={20} className="hover:text-primary-foreground transition-colors cursor-pointer hover:scale-110" />
                <Facebook size={20} className="hover:text-primary-foreground transition-colors cursor-pointer hover:scale-110" />
                <span className="text-xs">Let's connect!</span>
              </div>
            </div>
          </div>

          {/* Right Content - Enhanced Profile */}
          <div className="flex justify-center lg:justify-end animate-fade-in delay-300">
            <div className="relative group">
              {/* Glowing Ring */}
              <div className="absolute -inset-6 bg-gradient-to-r from-primary via-accent to-primary-glow rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              
              {/* Main Profile Container */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Profile Image */}
                <div className="relative w-full h-full rounded-full overflow-hidden shadow-2xl border-4 border-primary-foreground/20 group-hover:border-primary-foreground/40 transition-colors duration-300">
                  <img 
                    src={profileImage} 
                    alt="Ho Nguyen Duy Bao" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  {/* Overlay Effect */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Enhanced Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-gradient-to-r from-primary to-accent text-white rounded-2xl p-4 shadow-xl animate-float hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Code size={20} />
                    <span className="font-bold text-sm">Web Dev</span>
                  </div>
                </div>
                
                <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-accent to-primary-glow text-white rounded-2xl p-4 shadow-xl animate-float delay-500 hover:scale-110 transition-transform cursor-pointer">
                  <div className="flex items-center gap-2">
                    <Star size={20} />
                    <span className="font-bold text-sm">NTTU Student</span>
                  </div>
                </div>
                
                <div className="absolute top-1/2 -right-8 bg-gradient-to-r from-primary-glow to-primary text-white rounded-xl p-3 shadow-lg animate-float delay-1000 hover:scale-110 transition-transform cursor-pointer">
                  <Sparkles size={16} />
                </div>
                
                {/* Tech Stack Pills */}
                <div className="absolute -top-12 left-1/4 bg-primary-foreground/90 backdrop-blur-sm text-primary rounded-full px-3 py-1 text-xs font-medium shadow-lg animate-float delay-200">
                  React
                </div>
                <div className="absolute -bottom-2 right-1/4 bg-accent/90 text-accent-foreground rounded-full px-3 py-1 text-xs font-medium shadow-lg animate-float delay-700">
                  JavaScript
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center animate-fade-in delay-1000">
          <div className="flex flex-col items-center gap-2">
            <span className="text-primary-foreground/60 text-sm font-medium">Scroll to explore</span>
            <button 
              onClick={() => scrollToSection('about')}
              className="group p-2 rounded-full bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 text-primary-foreground/60 hover:text-primary-foreground hover:bg-primary-foreground/20 transition-all duration-300 hover:scale-110"
            >
              <ChevronDown size={24} className="animate-bounce group-hover:animate-pulse" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;