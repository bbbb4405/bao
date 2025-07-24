import { Card, CardContent } from '@/components/ui/card';
import { GraduationCap, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my journey, education, and what drives my passion for web development.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-6">
              My Journey
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              I'm Ho Nguyen Duy Bao, a second-year student at Nguyen Tat Thanh University with a deep passion for web development. 
              While I may not have professional experience yet, I bring enthusiasm, dedication, and a strong desire to learn and grow in the tech industry.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              My goal is to become an excellent intern and eventually a skilled web developer. I believe in continuous learning 
              and am always eager to take on new challenges that will help me expand my skills and knowledge.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Quick Learner</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Team Player</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Problem Solver</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-muted-foreground">Detail-Oriented</span>
              </div>
            </div>
          </div>

          {/* Right Content - Cards */}
          <div className="space-y-6">
            <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Education</h4>
                    <p className="text-muted-foreground">
                      Second-year student at Nguyen Tat Thanh University, studying web development and expanding my technical skills.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-accent/10 p-3 rounded-lg">
                    <Heart className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Interests</h4>
                    <p className="text-muted-foreground">
                      I enjoy playing video games and reading comics in my free time, which helps me stay creative and relaxed.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary/10 p-3 rounded-lg">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-foreground mb-2">Goals</h4>
                    <p className="text-muted-foreground">
                      To secure an internship opportunity where I can apply my skills, learn from experienced developers, and contribute to meaningful projects.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;