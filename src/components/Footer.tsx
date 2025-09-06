import { Button } from '@/components/ui/button';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Syed Zainuddin</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              Full Stack Developer passionate about building scalable, 
              secure, and performance-driven web applications.
            </p>
            <div className="flex gap-4">
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                asChild
              >
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button 
                variant="ghost" 
                size="icon"
                className="hover:bg-primary-foreground/10 hover:text-accent transition-colors"
                asChild
              >
                <a href="mailto:syed.zainuddin@email.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="font-semibold">Quick Links</h4>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <button
                  key={link.label}
                  onClick={() => scrollToSection(link.href)}
                  className="block text-primary-foreground/80 hover:text-accent transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="font-semibold">Get In Touch</h4>
            <div className="space-y-2 text-primary-foreground/80">
              <p>📧 syed.zainuddin@email.com</p>
              <p>📱 +91 98765 43210</p>
              <p>📍 Bangalore, India</p>
            </div>
            <Button 
              variant="outline"
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              onClick={() => scrollToSection('#contact')}
            >
              Let's Work Together
            </Button>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2024 Syed Zainuddin. All rights reserved.
          </p>
          <Button 
            variant="ghost" 
            size="sm"
            className="hover:bg-primary-foreground/10 hover:text-accent transition-colors"
            onClick={scrollToTop}
          >
            <ArrowUp className="h-4 w-4 mr-2" />
            Back to Top
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;