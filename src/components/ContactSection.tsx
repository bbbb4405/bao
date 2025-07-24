import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github, Facebook, Mail, MapPin, Phone } from 'lucide-react';

const ContactSection = () => {
  const socialLinks = [
    {
      icon: Facebook,
      label: 'Facebook',
      url: 'https://www.facebook.com/honguyen.duybao8/',
      description: 'Connect with me on Facebook'
    },
    {
      icon: Github,
      label: 'GitHub',
      url: 'https://github.com/bbbb4405',
      description: 'View my code repositories'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Let's Connect
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            I'm always excited to connect with potential mentors, employers, and fellow developers. 
            Feel free to reach out for internship opportunities or just to say hello!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Get In Touch
            </h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <MapPin className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Location</p>
                  <p className="text-muted-foreground">Ho Chi Minh City, Vietnam</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-accent/10 p-3 rounded-lg">
                  <Mail className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Email</p>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Phone className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-foreground font-medium">Phone</p>
                  <p className="text-muted-foreground">Available upon request</p>
                </div>
              </div>
            </div>

            <Card className="shadow-card bg-gradient-to-br from-primary/5 to-accent/5">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Available for Opportunities
                </h4>
                <p className="text-muted-foreground mb-4">
                  I'm actively seeking internship positions where I can apply my skills, 
                  learn from experienced professionals, and contribute to meaningful projects.
                </p>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Internships
                  </span>
                  <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm">
                    Part-time
                  </span>
                  <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm">
                    Remote
                  </span>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Social Media
            </h3>
            
            <div className="grid gap-6">
              {socialLinks.map((link, index) => (
                <Card 
                  key={index}
                  className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="bg-primary/10 p-3 rounded-lg">
                          <link.icon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                          <h4 className="text-lg font-semibold text-foreground">
                            {link.label}
                          </h4>
                          <p className="text-muted-foreground text-sm">
                            {link.description}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => window.open(link.url, '_blank')}
                        className="hover:bg-primary hover:text-primary-foreground"
                      >
                        Visit
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              {/* Call to Action Card */}
              <Card className="shadow-card-hover bg-hero-gradient">
                <CardContent className="p-8 text-center">
                  <h4 className="text-xl font-semibold text-primary-foreground mb-4">
                    Let's Work Together
                  </h4>
                  <p className="text-primary-foreground/80 mb-6">
                    Ready to bring fresh perspective and dedication to your team. 
                    Let's discuss how I can contribute to your next project!
                  </p>
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={() => window.open('https://www.facebook.com/honguyen.duybao8/', '_blank')}
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                  >
                    Start a Conversation
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;