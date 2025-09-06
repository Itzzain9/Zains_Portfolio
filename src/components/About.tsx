import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Briefcase, MapPin, Calendar } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative solutions and building scalable applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section */}
          <div>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Who I Am
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Full Stack Developer with 1.5+ years of experience designing and building 
              scalable web applications using React.js, Node.js, Next.js, Express.js, 
              PostgreSQL, and MongoDB. Skilled in secure RESTful APIs, SSR, backend 
              performance optimization (30% latency reduction), and AWS services 
              (EC2, S3, Lambda, CloudWatch).
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Passionate about system design, problem-solving, and cloud-native 
              applications. I thrive on turning complex requirements into elegant, 
              performant solutions that deliver exceptional user experiences.
            </p>
            
            {/* Key Strengths */}
            <div className="mt-8">
              <h4 className="text-lg font-semibold text-primary mb-4">Key Strengths</h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'API Development', 
                  'Server-Side Rendering', 
                  'Database Optimization', 
                  'Microservices', 
                  'Performance Tuning',
                  'Cloud Architecture'
                ].map((strength) => (
                  <Badge 
                    key={strength}
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground transition-colors"
                  >
                    {strength}
                  </Badge>
                ))}
              </div>
            </div>
          </div>

          {/* Experience & Education Cards */}
          <div className="space-y-6">
            {/* Work Experience */}
            <Card className="border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <Briefcase className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">
                      Software Development Engineer
                    </h4>
                    <p className="text-accent font-medium mb-2">
                      ARASMO Technologies Pvt Ltd
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      Jan 2024 – Present
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Developing scalable web applications, optimizing backend performance 
                      by 30%, and implementing secure authentication systems. Working with 
                      modern tech stack including React, Node.js, and AWS services.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="border-l-4 border-l-accent shadow-md hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent/10 rounded-lg">
                    <GraduationCap className="h-6 w-6 text-accent" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-primary mb-1">
                      B.Tech, Computer Science & Engineering
                    </h4>
                    <p className="text-accent font-medium mb-2">
                      P.E.S College of Engineering
                    </p>
                    <div className="flex items-center text-sm text-muted-foreground mb-3">
                      <Calendar className="h-4 w-4 mr-1" />
                      2023
                    </div>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      Strong foundation in computer science fundamentals, algorithms, 
                      data structures, and software engineering principles.
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

export default About;