import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';

const Hero = () => {
  const skills = ['React.js', 'Node.js', 'Next.js', 'PostgreSQL', 'AWS', 'TypeScript'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 text-center lg:text-left">
            <div className="mb-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-4">
                Hi, I'm{' '}
                <span className="text-accent">Syed Zainuddin</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-muted-foreground mb-6">
                Full Stack Developer | Cloud-Native Applications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                Building scalable, secure, and performance-driven web applications with 
                modern technologies and best practices.
              </p>
            </div>

            {/* Skills Badges */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-2 mb-8">
              {skills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="text-sm px-3 py-1 bg-secondary hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                >
                  {skill}
                </Badge>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button 
                size="lg"
                className="bg-accent hover:bg-red-hover text-accent-foreground"
                onClick={() => scrollToSection('#portfolio')}
              >
                View Portfolio
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                onClick={() => scrollToSection('#contact')}
              >
                Contact Me
                <Mail className="ml-2 h-4 w-4" />
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-accent transition-colors"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-accent transition-colors"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:text-accent transition-colors"
              >
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Profile Image */}
          <div className="order-1 lg:order-2 flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-accent shadow-2xl">
                <img 
                  src="/lovable-uploads/933bbab0-2cd6-4179-99f0-50f6abdf4097.png" 
                  alt="Syed Zainuddin - Full Stack Developer" 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Animated background accent */}
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 to-transparent animate-pulse -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;