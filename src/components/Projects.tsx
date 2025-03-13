
import React, { useEffect, useRef } from 'react';
import { 
  Carousel, 
  CarouselContent, 
  CarouselItem, 
  CarouselNext, 
  CarouselPrevious 
} from "@/components/ui/carousel";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "Portfolio Redesign",
    description: "Personal portfolio website built with React and Tailwind CSS.",
    tags: ["React", "Tailwind CSS", "UI/UX"],
    links: {
      demo: "#",
      github: "#",
      files: "#"
    },
    type: "design"
  },
  {
    title: "E-commerce Dashboard",
    description: "Analytics dashboard for tracking sales and inventory.",
    tags: ["React", "Node.js", "D3.js"],
    links: {
      demo: "#",
      github: "#",
      files: "#"
    },
    type: "project"
  },
  {
    title: "Mobile App Design",
    description: "UI/UX design for a fitness tracking mobile application.",
    tags: ["Figma", "UI/UX", "Prototyping"],
    links: {
      demo: "#",
      github: "#",
      files: "#"
    },
    type: "design"
  }
];

const Projects = () => {
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
    <section id="projects" ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="container px-6 md:px-8 mx-auto relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <div className="animate-on-scroll opacity-0 mb-4">
              <span className="text-sm font-medium text-primary">Portfolio</span>
            </div>
            <h2 className="animate-on-scroll opacity-0 text-3xl md:text-4xl font-bold tracking-tight">
              My Projects & Work
            </h2>
            <p className="animate-on-scroll opacity-0 mt-4 text-foreground/70 max-w-2xl mx-auto">
              A showcase of my professional work, personal projects, and design samples.
            </p>
          </div>
          
          <div className="animate-on-scroll opacity-0">
            <Carousel className="w-full max-w-5xl mx-auto">
              <CarouselContent>
                {projects.map((project, index) => (
                  <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="border border-border/50 bg-secondary/30 h-full flex flex-col">
                      <CardHeader>
                        <CardTitle>{project.title}</CardTitle>
                        <CardDescription>{project.description}</CardDescription>
                      </CardHeader>
                      <CardContent className="flex-grow">
                        <div className="flex flex-wrap gap-2 mt-2">
                          {project.tags.map((tag, tagIndex) => (
                            <span 
                              key={tagIndex} 
                              className="px-2 py-1 rounded-md bg-primary/20 text-xs font-medium"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </CardContent>
                      <CardFooter className="flex justify-between">
                        <Button 
                          variant="ghost" 
                          size="sm"
                          className="text-xs"
                        >
                          <FileText className="mr-1 h-3 w-3" /> 
                          View Files
                        </Button>
                        <div className="flex space-x-1">
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="p-1 h-8 w-8"
                          >
                            <ExternalLink className="h-4 w-4" />
                          </Button>
                          <Button 
                            variant="ghost" 
                            size="sm" 
                            className="p-1 h-8 w-8"
                          >
                            <Github className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <div className="flex justify-center mt-8">
                <CarouselPrevious className="relative static mx-2" />
                <CarouselNext className="relative static mx-2" />
              </div>
            </Carousel>
          </div>
          
          <div className="animate-on-scroll opacity-0 mt-16 flex justify-center">
            <div className="p-6 md:p-8 rounded-xl bg-background border shadow-sm max-w-3xl">
              <div className="text-center mb-6">
                <h3 className="text-xl font-semibold mb-2">Want to See More?</h3>
                <p className="text-foreground/70">
                  I have additional work samples available as PDFs, presentation slides, and design files.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {[
                  { title: "Design Portfolio", icon: "🎨", type: "PDF" },
                  { title: "Project Case Studies", icon: "📊", type: "PPT" },
                  { title: "UI/UX Samples", icon: "📱", type: "JPG" }
                ].map((item, index) => (
                  <div 
                    key={index}
                    className="p-4 rounded-lg bg-secondary/70 text-center hover:bg-secondary transition-colors duration-300 flex flex-col items-center"
                  >
                    <span className="text-2xl mb-2">{item.icon}</span>
                    <span className="text-sm font-medium">{item.title}</span>
                    <span className="text-xs text-foreground/60 mt-1">{item.type}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
