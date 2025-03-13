
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Server } from 'lucide-react';

const About = () => {
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
    <section id="about" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="section-fade-in text-3xl font-bold mb-4">About Me</h2>
          <div className="section-fade-in h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="section-fade-in text-muted-foreground">
            I'm a detail-oriented Full Stack Developer with expertise in creating scalable, efficient, and user-centric applications
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="section-fade-in space-y-6">
            <h3 className="text-xl font-semibold">Professional Profile</h3>
            <p className="text-muted-foreground">
              With over 5 years of experience in software development, I've worked on diverse projects ranging from enterprise applications to customer-facing products. My approach combines technical expertise with a strong focus on delivering exceptional user experiences.
            </p>
            <p className="text-muted-foreground">
              I thrive in collaborative environments, bringing both technical skills and effective communication to every project. My goal is to create solutions that are not only technically sound but also aligned with business objectives and user needs.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="rounded-md">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Globe className="h-6 w-6 text-primary" />,
                title: "Frontend",
                desc: "Building responsive web applications with React, TypeScript, and modern CSS frameworks"
              },
              {
                icon: <Server className="h-6 w-6 text-primary" />,
                title: "Backend",
                desc: "Developing robust server-side applications with Node.js, Express, and Java"
              },
              {
                icon: <Database className="h-6 w-6 text-primary" />,
                title: "Database",
                desc: "Designing and optimizing SQL and NoSQL database systems"
              },
              {
                icon: <Code className="h-6 w-6 text-primary" />,
                title: "DevOps",
                desc: "Implementing CI/CD pipelines, containerization, and cloud infrastructure"
              }
            ].map((item, index) => (
              <Card key={index} className="section-fade-in bg-card border-border/50">
                <CardContent className="p-6">
                  <div className="mb-4">{item.icon}</div>
                  <h4 className="font-medium mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
