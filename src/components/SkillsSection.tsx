import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';

const SkillsSection = () => {
  const technicalSkills = [
    'HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 
    'Git', 'VS Code', 'Web Standards', 'Browser DevTools'
  ];

  const softSkills = [
    { icon: Lightbulb, title: 'Quick Learner', description: 'Rapidly adapts to new technologies and methodologies' },
    { icon: Users, title: 'Team Collaboration', description: 'Works effectively in team environments and group projects' },
    { icon: Zap, title: 'Problem Solving', description: 'Analytical thinking and creative approach to challenges' },
    { icon: Code, title: 'Attention to Detail', description: 'Focused on writing clean, maintainable code' }
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Skills & Abilities
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A combination of technical knowledge and personal qualities that make me ready for internship opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Technical Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Technical Skills
            </h3>
            <Card className="shadow-card hover:shadow-card-hover transition-shadow duration-300 bg-primary/5">
              <CardContent className="p-8">
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {technicalSkills.map((skill, index) => (
                    <Badge 
                      key={index} 
                      variant="secondary" 
                      className="justify-center p-3 text-sm bg-background hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="mt-6 p-4 bg-primary/10 rounded-lg">
                  <p className="text-sm text-muted-foreground text-center">
                    Currently expanding my knowledge through coursework and self-directed learning
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center lg:text-left">
              Personal Qualities
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill, index) => (
                <Card 
                  key={index} 
                  className="shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105"
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="bg-accent/10 p-3 rounded-lg">
                        <skill.icon className="w-6 h-6 text-accent" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-lg font-semibold text-foreground mb-2">
                          {skill.title}
                        </h4>
                        <p className="text-muted-foreground text-sm">
                          {skill.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="max-w-2xl mx-auto shadow-card-hover bg-gradient-to-r from-primary/5 to-accent/5">
            <CardContent className="p-8">
              <h3 className="text-xl font-semibold text-foreground mb-4">
                Ready to Learn & Grow
              </h3>
              <p className="text-muted-foreground mb-6">
                While I'm still building my professional experience, I bring enthusiasm, dedication, 
                and a strong willingness to learn. I'm excited about the opportunity to contribute 
                to a team and grow my skills in a real-world environment.
              </p>
              <div className="flex justify-center">
                <Badge variant="outline" className="px-4 py-2 text-primary border-primary">
                  Open to Mentorship & Learning Opportunities
                </Badge>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;