import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
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
      {/* Decorative Elements */}
      <div className="absolute top-20 right-20 w-32 h-32 bg-hero-accent rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-40 left-10 w-24 h-24 bg-accent rounded-lg opacity-20 rotate-45"></div>
      <div className="absolute top-1/3 left-1/4 w-4 h-4 bg-primary rounded-full opacity-40"></div>
      <div className="absolute top-2/3 right-1/3 w-6 h-6 bg-accent rounded-full opacity-30"></div>

      <div className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                Available for Internship
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground mb-6">
                Hello, I'm <br />
                <span className="text-accent">Ho Nguyen Duy Bao</span>
              </h1>
              <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                An aspiring web developer seeking internship opportunities. 
                Passionate about creating digital experiences and eager to grow in the tech industry.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg"
              >
                Get In Touch
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                onClick={() => scrollToSection('about')}
                className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20"
              >
                Learn More
              </Button>
            </div>
          </div>

          {/* Right Content - Profile Image */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="absolute -inset-4 bg-hero-accent rounded-full opacity-20 animate-pulse"></div>
              <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-card-hover">
                <img 
                  src={profileImage} 
                  alt="Ho Nguyen Duy Bao" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-primary-foreground/90 rounded-lg p-3 shadow-lg">
                <span className="text-primary font-medium text-sm">Web Dev</span>
              </div>
              <div className="absolute -bottom-4 -left-4 bg-accent/90 rounded-lg p-3 shadow-lg">
                <span className="text-accent-foreground font-medium text-sm">NTTU</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center">
          <button 
            onClick={() => scrollToSection('about')}
            className="text-primary-foreground/60 hover:text-primary-foreground transition-colors"
          >
            <ChevronDown size={24} className="animate-bounce" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;