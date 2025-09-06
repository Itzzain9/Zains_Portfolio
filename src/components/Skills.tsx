import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Code, 
  Database, 
  Cloud, 
  Palette, 
  GitBranch, 
  Server,
  Smartphone,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Code,
      skills: ['React.js', 'Next.js', 'TypeScript', 'Tailwind CSS', 'PrimeReact', 'HTML5/CSS3'],
      color: 'text-blue-600'
    },
    {
      title: 'Backend Development',
      icon: Server,
      skills: ['Node.js', 'Express.js', 'RESTful APIs', 'Microservices', 'JWT Authentication', 'OAuth2'],
      color: 'text-green-600'
    },
    {
      title: 'Database & Storage',
      icon: Database,
      skills: ['PostgreSQL', 'MongoDB', 'MySQL', 'Database Optimization', 'Query Performance', 'Data Modeling'],
      color: 'text-purple-600'
    },
    {
      title: 'Cloud & DevOps',
      icon: Cloud,
      skills: ['AWS (EC2, S3, Lambda)', 'CloudWatch', 'CI/CD', 'Docker', 'Deployment', 'Monitoring'],
      color: 'text-orange-600'
    },
    {
      title: 'Development Tools',
      icon: GitBranch,
      skills: ['Git', 'GitHub', 'VS Code', 'Postman', 'ESLint', 'Prettier'],
      color: 'text-gray-600'
    },
    {
      title: 'Other Technologies',
      icon: Zap,
      skills: ['Python', 'Server-Side Rendering', 'Performance Optimization', 'Testing', 'Agile', 'SCRUM'],
      color: 'text-red-600'
    }
  ];

  return (
    <section id="skills" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive skill set covering the full spectrum of modern web development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <Card 
                key={category.title}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-l-4 border-l-accent"
              >
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-accent/10 rounded-lg group-hover:bg-accent/20 transition-colors">
                      <IconComponent className={`h-6 w-6 ${category.color}`} />
                    </div>
                    <CardTitle className="text-lg">{category.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="secondary"
                        className="text-sm bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-200 cursor-default"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full">
            <Zap className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">
              Specialized in API Development, SSR, Database Optimization & Microservices
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;