import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import {
  ExternalLink,
  Filter,
  Github,
  Shield,
  Zap
} from 'lucide-react';
import { useState } from 'react';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Full-Stack', 'Backend', 'Frontend'];

  const projects = [
    {
      id: 1,
      title: 'Web Wallet Platform',
      category: 'Full-Stack',
      description: 'A secure, scalable payment platform built with Next.js SSR, Node.js, Express.js, and PostgreSQL. Features JWT & OAuth2 authentication, microservices architecture, and comprehensive monitoring.',
      longDescription: 'Built a comprehensive payment platform from the ground up, focusing on security, scalability, and performance. The platform handles user authentication, payment processing, and transaction management with real-time monitoring and analytics.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'Node.js', 'PostgreSQL', 'AWS EC2', 'JWT', 'OAuth2', 'Express.js'],
      features: [
        'Secure user authentication with JWT & OAuth2',
        'Real-time payment processing',
        'Microservices architecture',
        'Performance optimization (30% latency reduction)',
        'AWS EC2 deployment with CloudWatch monitoring',
        'Comprehensive transaction management'
      ],
      achievements: [
        '30% backend performance improvement',
        'Secure payment processing integration',
        'Scalable microservices architecture',
        'Real-time monitoring and analytics'
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    // {
    //   id: 2,
    //   title: 'E-Commerce API Gateway',
    //   category: 'Backend',
    //   description: 'RESTful API gateway for e-commerce platform with rate limiting, authentication, and microservices integration.',
    //   longDescription: 'Developed a robust API gateway that serves as the central hub for an e-commerce platform, handling authentication, rate limiting, and routing to various microservices.',
    //   image: '/placeholder.svg',
    //   technologies: ['Node.js', 'Express.js', 'MongoDB', 'Redis', 'JWT'],
    //   features: [
    //     'API rate limiting and throttling',
    //     'Centralized authentication',
    //     'Microservices routing',
    //     'Caching with Redis',
    //     'API documentation and testing'
    //   ],
    //   achievements: [
    //     'Reduced API response time by 40%',
    //     'Implemented robust security measures',
    //     'Scalable architecture design'
    //   ],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // },
    // {
    //   id: 3,
    //   title: 'React Dashboard UI',
    //   category: 'Frontend',
    //   description: 'Modern, responsive dashboard interface built with React.js and Tailwind CSS featuring data visualization and real-time updates.',
    //   longDescription: 'Created a comprehensive admin dashboard with real-time data visualization, user management, and analytics. The interface is fully responsive and optimized for performance.',
    //   image: '/placeholder.svg',
    //   technologies: ['React.js', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'PrimeReact'],
    //   features: [
    //     'Real-time data visualization',
    //     'Responsive design',
    //     'Interactive charts and graphs',
    //     'User management interface',
    //     'Dark/light theme support'
    //   ],
    //   achievements: [
    //     'Improved user engagement by 25%',
    //     'Mobile-first responsive design',
    //     'Optimized performance metrics'
    //   ],
    //   liveUrl: '#',
    //   githubUrl: '#',
    //   featured: false
    // }

    {
      id: 4,
      title: 'AI Assist Project',
      category: 'Full Stack',
      description: 'An intelligent AI-powered assistant application that provides real-time answers, task automation, and personalized recommendations.',
      longDescription: 'Developed an AI-powered assistant platform integrating natural language processing (NLP) and machine learning models. The system supports real-time question answering, task automation, personalized suggestions, and seamless integration with third-party APIs for extended functionality.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'Node.js', 'Express.js', 'OpenAI API', 'MongoDB', 'Tailwind CSS'],
      features: [
        'Natural language understanding',
        'Real-time responses powered by AI',
        'Task automation and scheduling',
        'Integration with external APIs',
        'User authentication and personalized dashboard'
      ],
      achievements: [
        'Enhanced user productivity by automating repetitive tasks',
        'Achieved seamless integration with third-party services',
        'Optimized AI response accuracy with fine-tuned prompts'
      ],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    }

  ];

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work in full-stack development, API design, and modern web applications
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              className={activeFilter === filter
                ? "bg-accent hover:bg-red-hover text-accent-foreground"
                : "hover:bg-accent hover:text-accent-foreground"
              }
              onClick={() => setActiveFilter(filter)}
            >
              <Filter className="mr-2 h-4 w-4" />
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <Card
              key={project.id}
              className={`group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${project.featured ? 'border-l-4 border-l-accent lg:col-span-2' : ''
                }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <CardTitle className="text-xl">{project.title}</CardTitle>
                      {project.featured && (
                        <Badge className="bg-accent text-accent-foreground">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <Badge variant="outline" className="text-accent border-accent">
                      {project.category}
                    </Badge>
                  </div>
                  <div className="flex gap-2">
                    <Button size="icon" variant="ghost" className="hover:text-accent">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="ghost" className="hover:text-accent">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardDescription className="text-base leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="secondary"
                        className="bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-primary mb-3">Key Features</h4>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {project.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="font-semibold text-primary mb-3 flex items-center gap-2">
                    <Zap className="h-4 w-4 text-accent" />
                    Key Achievements
                  </h4>
                  <ul className="space-y-1">
                    {project.achievements.map((achievement) => (
                      <li key={achievement} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                        {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-4 pt-4 border-t border-border">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 hover:bg-accent hover:text-accent-foreground hover:border-accent"
                  >
                    <Github className="mr-2 h-4 w-4" />
                    Code
                  </Button>
                  <Button
                    size="sm"
                    className="flex-1 bg-accent hover:bg-red-hover text-accent-foreground"
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Live Demo
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-accent/10 rounded-full mb-6">
            <Shield className="h-5 w-5 text-accent" />
            <span className="text-sm font-medium">
              All projects follow security best practices and performance optimization
            </span>
          </div>
          <p className="text-muted-foreground">
            Want to see more projects? Check out my GitHub for additional work and contributions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;