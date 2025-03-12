
import React, { useEffect, useRef } from 'react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = sectionRef.current?.querySelectorAll('.animate-on-scroll');
    elements?.forEach((el) => observer.observe(el));
    
    return () => {
      elements?.forEach((el) => observer.unobserve(el));
    };
  }, []);

  return (
    <section id="about" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container px-6 md:px-8 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="animate-on-scroll opacity-0 mb-4">
                <span className="text-sm font-medium text-primary">About Me</span>
              </div>
              <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold tracking-tight mb-6">
                Passionate about crafting exceptional software solutions
              </h2>
              <p className="animate-on-scroll opacity-0 text-foreground/80 mb-6">
                I'm a Software Engineer with expertise in building robust applications using modern technologies. With a strong foundation in full-stack development, I bring ideas to life through clean code and thoughtful architecture.
              </p>
              <p className="animate-on-scroll opacity-0 text-foreground/80 mb-6">
                My approach combines technical excellence with a deep understanding of user needs, resulting in solutions that are not only functional but also intuitive and enjoyable to use.
              </p>
              <div className="animate-on-scroll opacity-0 pt-4">
                <a 
                  href="#experience" 
                  className="inline-flex items-center text-primary font-medium hover:underline"
                >
                  View my work
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </a>
              </div>
            </div>
            
            <div className="animate-on-scroll opacity-0 relative">
              <div className="aspect-square rounded-2xl overflow-hidden shadow-lg glow relative">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-background z-10"></div>
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1531297484001-80022131f5a1')] bg-cover bg-center transform hover:scale-105 transition-transform duration-700"></div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
            {[
              { value: '5+', label: 'Years Experience' },
              { value: '20+', label: 'Projects Completed' },
              { value: '10+', label: 'Technologies Mastered' },
              { value: '100%', label: 'Client Satisfaction' }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="animate-on-scroll opacity-0 p-6 rounded-xl bg-secondary/50 backdrop-blur-sm text-center transform hover:translate-y-[-4px] transition-transform duration-300"
                style={{ animationDelay: `${0.1 * index}s` }}
              >
                <h3 className="text-3xl font-bold text-primary mb-2">{stat.value}</h3>
                <p className="text-sm text-foreground/70">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
