
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "TechInnovate",
    period: "2021 - Present",
    description: "Led development of scalable microservices architecture for enterprise applications. Mentored junior developers and implemented CI/CD pipelines for seamless deployment.",
    technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker"]
  },
  {
    title: "Full Stack Developer",
    company: "DigiSolutions",
    period: "2018 - 2021",
    description: "Developed and maintained web applications for clients across various industries. Collaborated with design and product teams to deliver high-quality user experiences.",
    technologies: ["React", "JavaScript", "Python", "Django", "PostgreSQL"]
  },
  {
    title: "Frontend Developer",
    company: "WebCraft",
    period: "2016 - 2018",
    description: "Created responsive user interfaces for web applications. Worked closely with UX designers to implement pixel-perfect designs and animations.",
    technologies: ["JavaScript", "HTML", "CSS", "Vue.js", "Webpack"]
  }
];

const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured online shopping platform with secure payment processing and inventory management.",
    link: "#",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
  },
  {
    title: "Healthcare Dashboard",
    description: "A comprehensive analytics dashboard for healthcare providers to monitor patient data and outcomes.",
    link: "#",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475"
  },
  {
    title: "Financial Analytics Tool",
    description: "A sophisticated tool for financial analysis and forecasting used by investment professionals.",
    link: "#",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6"
  }
];

const Experience = () => {
  const [activeTab, setActiveTab] = useState<'work' | 'projects'>('work');
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
  }, [activeTab]);

  return (
    <section id="experience" ref={sectionRef} className="py-24 relative overflow-hidden bg-secondary/30">
      <div className="container px-6 md:px-8 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="animate-on-scroll opacity-0 mb-4">
              <span className="text-sm font-medium text-primary">My Journey</span>
            </div>
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold tracking-tight">
              Experience & Projects
            </h2>
          </div>
          
          <div className="animate-on-scroll opacity-0 flex justify-center mb-12">
            <div className="inline-flex p-1 rounded-full bg-secondary">
              {['work', 'projects'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab as 'work' | 'projects')}
                  className={cn(
                    'relative px-6 py-2 rounded-full text-sm font-medium transition-all duration-300',
                    activeTab === tab 
                      ? 'text-primary-foreground' 
                      : 'text-foreground/70 hover:text-foreground'
                  )}
                >
                  {activeTab === tab && (
                    <span className="absolute inset-0 rounded-full bg-primary" />
                  )}
                  <span className="relative">
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </span>
                </button>
              ))}
            </div>
          </div>
          
          {activeTab === 'work' ? (
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll opacity-0 p-6 rounded-xl bg-background border shadow-sm hover:shadow-md transition-shadow duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-semibold">{exp.title}</h3>
                      <p className="text-primary font-medium">{exp.company}</p>
                    </div>
                    <span className="text-sm text-foreground/60 mt-2 md:mt-0">{exp.period}</span>
                  </div>
                  <p className="text-foreground/80 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-3 py-1 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div 
                  key={index}
                  className="animate-on-scroll opacity-0 group rounded-xl overflow-hidden bg-background border shadow-sm hover:shadow-md transition-all duration-300"
                  style={{ animationDelay: `${0.1 * index}s` }}
                >
                  <div className="aspect-[16/9] overflow-hidden">
                    <div 
                      className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-700"
                      style={{ backgroundImage: `url(${project.image})` }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-foreground/80 mb-4">{project.description}</p>
                    <a 
                      href={project.link}
                      className="inline-flex items-center text-primary font-medium hover:underline"
                    >
                      View Project
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Experience;
