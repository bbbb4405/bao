import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Code, Lightbulb, Users, Zap } from 'lucide-react';
const SkillsSection = () => {
  const technicalSkills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Git', 'VS Code', 'Web Standards', 'Browser DevTools'];
  const softSkills = [{
    icon: Lightbulb,
    title: 'Quick Learner',
    description: 'Rapidly adapts to new technologies and methodologies'
  }, {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Works effectively in team environments and group projects'
  }, {
    icon: Zap,
    title: 'Problem Solving',
    description: 'Analytical thinking and creative approach to challenges'
  }, {
    icon: Code,
    title: 'Attention to Detail',
    description: 'Focused on writing clean, maintainable code'
  }];
  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-background to-accent/5">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
          Skills & Expertise
        </h2>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Technical Skills */}
          <Card className="backdrop-blur-sm bg-card/50 border-border/50">
            <CardContent className="p-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">Technical Skills</h3>
              <div className="flex flex-wrap gap-2">
                {technicalSkills.map((skill, index) => (
                  <Badge key={index} variant="secondary" className="text-sm">
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Soft Skills */}
          <div className="space-y-4">
            {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <Card key={index} className="backdrop-blur-sm bg-card/50 border-border/50 hover:border-primary/50 transition-colors">
                  <CardContent className="p-4">
                    <div className="flex items-start gap-3">
                      <div className="p-2 rounded-lg bg-primary/10 text-primary">
                        <Icon size={20} />
                      </div>
                      <div>
                        <h4 className="font-semibold text-foreground">{skill.title}</h4>
                        <p className="text-sm text-muted-foreground">{skill.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillsSection;