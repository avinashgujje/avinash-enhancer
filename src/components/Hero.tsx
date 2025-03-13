
import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      
      const { left, top, width, height } = containerRef.current.getBoundingClientRect();
      const x = (e.clientX - left) / width;
      const y = (e.clientY - top) / height;
      
      const moveX = (x - 0.5) * 20;
      const moveY = (y - 0.5) * 20;
      
      containerRef.current.style.setProperty('--move-x', `${moveX}px`);
      containerRef.current.style.setProperty('--move-y', `${moveY}px`);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center grain overflow-hidden pt-20 pb-24">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/90 to-background/80 pointer-events-none" />
      
      <div className="container px-6 md:px-8 mx-auto relative z-10" ref={containerRef}>
        <div className="max-w-3xl mx-auto text-center">
          <div 
            className="inline-block mb-4 opacity-0 animate-fade-in" 
            style={{ animationDelay: '0.2s' }}
          >
            <span className="px-4 py-1.5 rounded-full text-xs font-medium bg-primary/20 text-primary">
              Software Engineer
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Building digital experiences with elegance and precision
          </h1>
          
          <p 
            className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            I'm Avinash, a software engineer focused on creating exceptional digital experiences that blend functionality with beautiful design.
          </p>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
            >
              Get in Touch
            </a>
            <a 
              href="#experience" 
              className="px-6 py-3 rounded-full bg-card text-foreground font-medium border border-border/30 hover:bg-card/80 transition-all duration-300 w-full sm:w-auto"
            >
              View My Work
            </a>
          </div>
        </div>
        
        <div 
          className="absolute bottom-[-260px] left-1/2 transform -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[100px] bg-gradient-to-r from-primary/30 via-accent/20 to-primary/20 opacity-0 animate-fade-in-slow"
          style={{ animationDelay: '1s' }}
        />
      </div>
    </section>
  );
};

export default Hero;
