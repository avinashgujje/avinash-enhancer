
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';
import { ExternalLink } from 'lucide-react';

// Using the uploaded profile image
const PROFILE_IMAGE = "/lovable-uploads/7ca394b1-c574-4211-94f8-48844b8fb9e1.png";

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.section-fade-in');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section ref={sectionRef} id="home" className="relative pt-32 pb-20 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-7 space-y-6">
            <h3 className="section-fade-in text-primary font-medium">Hello, I'm</h3>
            <h1 className="section-fade-in text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
              Avinash Gujje
            </h1>
            <h2 className="section-fade-in text-2xl md:text-3xl text-muted-foreground">
              Senior Security Architect
            </h2>
            <p className="section-fade-in text-lg text-muted-foreground max-w-xl">
              Accomplished Senior Security Architect with over 15 years of expertise in Telecom and IT industry, specializing in strategic planning and designing of network and security architecture.
            </p>
            
            <div className="section-fade-in flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-md" asChild>
                <a href="mailto:avinashgujje07@gmail.com">
                  <Mail className="mr-2 h-4 w-4" />
                  Contact Me
                </a>
              </Button>
              <Button variant="outline" size="lg" className="rounded-md" asChild>
                <a href="/Avinash_Gujje_Resume.pdf" download>
                  <FileText className="mr-2 h-4 w-4" />
                  Download Resume
                </a>
              </Button>
            </div>
            
            <div className="section-fade-in flex gap-4 pt-4">
              <a href="https://github.com/avinashgujje" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com/in/avinashgujje" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="https://www.avinashgujje.com" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-primary transition-colors" aria-label="Personal Website">
                <ExternalLink className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 section-fade-in">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-xl bg-secondary border border-border/30 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
                <img 
                  src={PROFILE_IMAGE} 
                  alt="Avinash Gujje" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 bg-card rounded-lg border border-border shadow-lg">
                <p className="text-sm font-medium text-primary">15+ Years Experience</p>
                <p className="text-xs text-muted-foreground">IT Security Architecture</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
