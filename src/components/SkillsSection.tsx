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
  return <section id="skills" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-16 text-foreground">Skills & Abilities</h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Technical Skills */}
          

          {/* Soft Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6 text-foreground">Soft Skills</h3>
            <div className="grid gap-4">
              {softSkills.map((skill, index) => {
              const Icon = skill.icon;
              return <Card key={index} className="p-4 hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <div className="flex items-start gap-3">
                        <div className="p-2 rounded-lg bg-primary/10">
                          <Icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground">{skill.title}</h4>
                          <p className="text-sm text-muted-foreground mt-1">{skill.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>;
            })}
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default SkillsSection;