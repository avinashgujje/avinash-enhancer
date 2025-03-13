
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
              Full Stack Developer
            </span>
          </div>
          
          <h1 
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance opacity-0 animate-fade-in"
            style={{ animationDelay: '0.4s' }}
          >
            Hi, I'm Avinash Gujje
          </h1>
          
          <p 
            className="mt-6 text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto text-balance opacity-0 animate-fade-in"
            style={{ animationDelay: '0.6s' }}
          >
            A passionate full-stack developer specializing in creating modern web applications and intuitive user experiences.
          </p>
          
          <div 
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0 animate-fade-in"
            style={{ animationDelay: '0.8s' }}
          >
            <a 
              href="#contact" 
              className="px-6 py-3 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-all duration-300 w-full sm:w-auto"
            >
              Contact Me
            </a>
            <a 
              href="#projects" 
              className="px-6 py-3 rounded-full bg-card text-foreground font-medium border border-border/30 hover:bg-card/80 transition-all duration-300 w-full sm:w-auto"
            >
              View My Portfolio
            </a>
          </div>
          
          <div 
            className="mt-16 flex justify-center items-center space-x-6 opacity-0 animate-fade-in"
            style={{ animationDelay: '1s' }}
          >
            {/* Social media links */}
            {[
              { name: "GitHub", icon: "github", url: "#" },
              { name: "LinkedIn", icon: "linkedin", url: "#" },
              { name: "Twitter", icon: "twitter", url: "#" },
            ].map((social) => (
              <a
                key={social.name}
                href={social.url}
                className="text-foreground/60 hover:text-foreground transition-colors duration-300"
                aria-label={social.name}
              >
                <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  {social.icon === "github" ? (
                    <>
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
                    </>
                  ) : social.icon === "linkedin" ? (
                    <>
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect x="2" y="9" width="4" height="12" />
                      <circle cx="4" cy="4" r="2" />
                    </>
                  ) : (
                    <>
                      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                    </>
                  )}
                </svg>
              </a>
            ))}
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
