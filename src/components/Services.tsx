import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Code2, 
  Database, 
  Palette, 
  Server,
  ArrowRight,
  CheckCircle
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Code2,
      title: 'Full-Stack Development',
      description: 'End-to-end web application development using MERN stack and Next.js',
      features: [
        'React.js & Next.js Applications',
        'Node.js & Express.js Backend',
        'TypeScript Implementation',
        'Responsive Web Design',
        'Performance Optimization',
        'SEO & SSR Implementation'
      ],
      highlight: 'MERN & Next.js'
    },
    {
      icon: Server,
      title: 'API Development & Integration',
      description: 'Secure, scalable RESTful APIs with payment and authentication integration',
      features: [
        'RESTful API Design',
        'JWT & OAuth2 Authentication',
        'Payment Gateway Integration',
        'Third-party API Integration',
        'API Documentation',
        'Rate Limiting & Security'
      ],
      highlight: 'Secure & Scalable'
    },
    {
      icon: Palette,
      title: 'UI/UX & Web Design',
      description: 'Modern, responsive interfaces with Tailwind CSS and component libraries',
      features: [
        'Responsive Design',
        'Tailwind CSS Styling',
        'PrimeReact Components',
        'User Experience Design',
        'Mobile-First Approach',
        'Accessibility Standards'
      ],
      highlight: 'Mobile-First Design'
    },
    {
      icon: Database,
      title: 'Database Design & Optimization',
      description: 'Efficient database architecture with PostgreSQL and MongoDB',
      features: [
        'Database Schema Design',
        'Query Optimization',
        'Data Modeling',
        'Performance Tuning',
        'Backup & Recovery',
        'Migration Strategies'
      ],
      highlight: '30% Performance Boost'
    }
  ];

  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="services" className="py-20 px-4 bg-secondary/50">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Services I Offer
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <Card 
                key={service.title}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-card"
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-2">
                    <div className="p-3 bg-accent/10 rounded-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors duration-300">
                      <IconComponent className="h-6 w-6 text-accent group-hover:text-accent-foreground" />
                    </div>
                    <div className="text-sm font-medium px-3 py-1 bg-accent/20 text-accent rounded-full">
                      {service.highlight}
                    </div>
                  </div>
                  <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-3 text-sm text-muted-foreground">
                        <CheckCircle className="h-4 w-4 text-accent flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-accent group-hover:text-accent-foreground group-hover:border-accent transition-colors"
                    onClick={scrollToContact}
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-primary text-primary-foreground rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Let's discuss how I can help bring your vision to life with modern web technologies.
            </p>
            <Button 
              size="lg"
              variant="secondary"
              className="bg-accent hover:bg-red-hover text-accent-foreground"
              onClick={scrollToContact}
            >
              Let's Talk
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;