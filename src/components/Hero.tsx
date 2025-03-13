
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { FileText, Github, Linkedin, Mail } from 'lucide-react';

// Profile image can be easily replaced by changing this URL
const PROFILE_IMAGE = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=800&h=800";

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
              Full Stack Developer
            </h2>
            <p className="section-fade-in text-lg text-muted-foreground max-w-xl">
              I specialize in building exceptional digital experiences, creating robust and scalable applications with modern technologies.
            </p>
            
            <div className="section-fade-in flex flex-wrap gap-4 pt-2">
              <Button size="lg" className="rounded-md">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Button>
              <Button variant="outline" size="lg" className="rounded-md">
                <FileText className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
            
            <div className="section-fade-in flex gap-4 pt-4">
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="GitHub">
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-foreground hover:text-primary transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div className="md:col-span-5 section-fade-in">
            <div className="relative">
              <div className="aspect-square max-w-md mx-auto overflow-hidden rounded-xl bg-secondary border border-border/30 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent opacity-60"></div>
                <img 
                  src={PROFILE_IMAGE} 
                  alt="Professional portrait" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 p-4 bg-card rounded-lg border border-border shadow-lg">
                <p className="text-sm font-medium text-primary">5+ Years Experience</p>
                <p className="text-xs text-muted-foreground">Full Stack Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
