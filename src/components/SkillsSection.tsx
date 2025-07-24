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
  return;
};
export default SkillsSection;