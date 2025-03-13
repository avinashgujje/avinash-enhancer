
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const experiences = [
  {
    position: "Senior Software Engineer",
    company: "TechInnovate Solutions",
    duration: "2021 - Present",
    location: "San Francisco, CA",
    description: "Lead developer for cloud-based enterprise applications, managing a team of 5 engineers. Implemented microservices architecture reducing system latency by 40% and improving scalability.",
    responsibilities: [
      "Architected and developed scalable backend services using Node.js and TypeScript",
      "Optimized database performance and implemented efficient data retrieval patterns",
      "Mentored junior developers and conducted code reviews to maintain high quality standards",
      "Collaborated with product managers to define technical requirements and timelines"
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "MongoDB", "Docker"]
  },
  {
    position: "Full Stack Developer",
    company: "Digital Solutions Inc.",
    duration: "2018 - 2021",
    location: "Boston, MA",
    description: "Developed and maintained web applications for financial services clients, focusing on secure and compliant solutions.",
    responsibilities: [
      "Built responsive frontend interfaces with React and modern CSS frameworks",
      "Implemented RESTful APIs and server-side logic using Python and Django",
      "Collaborated with UX designers to create intuitive user interfaces",
      "Participated in agile development cycles, delivering features on time"
    ],
    technologies: ["React", "Python", "Django", "PostgreSQL", "Redis", "AWS"]
  },
  {
    position: "Frontend Developer",
    company: "WebCraft Technologies",
    duration: "2016 - 2018",
    location: "Austin, TX",
    description: "Created engaging user interfaces for various client projects, focusing on performance and responsive design.",
    responsibilities: [
      "Developed interactive web applications using JavaScript and Vue.js",
      "Implemented responsive designs and ensured cross-browser compatibility",
      "Optimized frontend performance through code splitting and lazy loading",
      "Worked directly with clients to gather requirements and implement feedback"
    ],
    technologies: ["JavaScript", "Vue.js", "HTML5", "CSS3", "Sass", "Webpack"]
  }
];

const Experience = () => {
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
    <section id="experience" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="section-fade-in text-3xl font-bold mb-4">Professional Experience</h2>
          <div className="section-fade-in h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="section-fade-in text-muted-foreground">
            My career journey and professional achievements
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative pl-8 border-l border-border">
            {experiences.map((exp, index) => (
              <div key={index} className="section-fade-in mb-12 relative">
                <div className="absolute -left-[41px] w-5 h-5 rounded-full bg-primary border-4 border-background"></div>
                
                <div className="mb-2">
                  <Badge variant="secondary" className="text-primary font-normal">
                    {exp.duration}
                  </Badge>
                  <Badge variant="outline" className="ml-2 font-normal">
                    {exp.location}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold">{exp.position}</h3>
                <h4 className="text-primary font-medium mb-4">{exp.company}</h4>
                
                <p className="text-muted-foreground mb-4">
                  {exp.description}
                </p>
                
                <div className="space-y-2 mb-4">
                  {exp.responsibilities.map((resp, respIndex) => (
                    <div key={respIndex} className="flex items-start">
                      <div className="mr-2 mt-1 w-1.5 h-1.5 rounded-full bg-primary"></div>
                      <p className="text-sm text-muted-foreground">{resp}</p>
                    </div>
                  ))}
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="font-normal">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                {index < experiences.length - 1 && (
                  <Separator className="mt-12 opacity-50" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
