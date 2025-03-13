
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ExternalLink, FileText, Github } from 'lucide-react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured online store with product management, cart functionality, and secure checkout process.",
    image: "https://images.unsplash.com/photo-1661956602944-249bcd04b63f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    category: "fullstack",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Task Management App",
    description: "A collaborative project management tool with real-time updates and team assignment features.",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "Firebase", "Material UI", "Redux"],
    category: "frontend",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Financial Dashboard",
    description: "Data visualization dashboard for financial analytics with interactive charts and reports.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["React", "D3.js", "Node.js", "Express"],
    category: "fullstack",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Healthcare API",
    description: "RESTful API for healthcare data management with advanced security and compliance features.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80",
    tags: ["Node.js", "Express", "MongoDB", "JWT"],
    category: "backend",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Real Estate Mobile App",
    description: "Cross-platform mobile application for real estate listings with map integration.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2073&q=80",
    tags: ["React Native", "Firebase", "Google Maps API"],
    category: "frontend",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Content Management System",
    description: "Custom CMS built for a media company with advanced content scheduling features.",
    image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Python", "Django", "PostgreSQL", "Redis"],
    category: "backend",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  }
];

const additionalResources = [
  {
    title: "UX Design Portfolio",
    type: "PDF",
    icon: "🎨",
    link: "#"
  },
  {
    title: "Case Studies",
    type: "PDF",
    icon: "📊",
    link: "#"
  },
  {
    title: "Technical Articles",
    type: "Blog",
    icon: "📝",
    link: "#"
  },
  {
    title: "Conference Talks",
    type: "Video",
    icon: "🎬",
    link: "#"
  }
];

const Projects = () => {
  const [category, setCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  
  const filteredProjects = category === "all" 
    ? projects 
    : projects.filter(project => project.category === category);
  
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
  }, [category]);

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="section-fade-in text-3xl font-bold mb-4">Featured Projects</h2>
          <div className="section-fade-in h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="section-fade-in text-muted-foreground">
            A selection of my recent work and professional projects
          </p>
        </div>
        
        <div className="section-fade-in mb-12 flex justify-center">
          <Tabs defaultValue="all" value={category} onValueChange={setCategory}>
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="frontend">Frontend</TabsTrigger>
              <TabsTrigger value="backend">Backend</TabsTrigger>
              <TabsTrigger value="fullstack">Full Stack</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="section-fade-in overflow-hidden bg-card border-border/50 h-full flex flex-col">
              <div className="aspect-video w-full overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="font-normal">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardContent>
              <CardFooter className="flex justify-between">
                <Button variant="outline" size="sm" asChild>
                  <a href={project.links.case}>
                    <FileText className="h-4 w-4 mr-2" />
                    Case Study
                  </a>
                </Button>
                <div className="flex gap-2">
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.links.github} aria-label="GitHub Repository">
                      <Github className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button variant="ghost" size="icon" asChild>
                    <a href={project.links.demo} aria-label="Live Demo">
                      <ExternalLink className="h-4 w-4" />
                    </a>
                  </Button>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="section-fade-in mt-16 max-w-3xl mx-auto">
          <Card className="bg-card border-border/50">
            <CardHeader>
              <CardTitle className="text-center">Additional Resources</CardTitle>
              <CardDescription className="text-center">
                Portfolio documents, case studies and design samples
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {additionalResources.map((resource, index) => (
                  <a 
                    key={index} 
                    href={resource.link}
                    className="flex flex-col items-center p-4 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors"
                  >
                    <span className="text-2xl mb-2">{resource.icon}</span>
                    <h4 className="text-sm font-medium">{resource.title}</h4>
                    <span className="text-xs text-muted-foreground">{resource.type}</span>
                  </a>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Projects;
