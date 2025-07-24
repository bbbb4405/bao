import { Github, Facebook, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold mb-4">Ho Nguyen Duy Bao</h3>
            <p className="text-background/70 leading-relaxed">
              Aspiring web developer passionate about creating digital experiences 
              and eager to contribute to innovative projects.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => document.getElementById('skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Skills
              </button>
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="block text-background/70 hover:text-background transition-colors"
              >
                Contact
              </button>
            </div>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/honguyen.duybao8/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/bbbb4405"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-background/10 p-3 rounded-lg hover:bg-background/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-background/70 text-sm mb-4 md:mb-0">
              © {currentYear} Ho Nguyen Duy Bao. All rights reserved.
            </p>
            <div className="flex items-center space-x-2 text-background/70 text-sm">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>for future opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;