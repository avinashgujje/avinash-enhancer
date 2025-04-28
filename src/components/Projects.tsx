
import React, { useEffect, useRef, useState } from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Award, ExternalLink, FileText, Github, GraduationCap } from 'lucide-react';

const projects = [
  {
    title: "Zero Trust Security Architecture",
    description: "Designed and implemented a comprehensive Zero Trust security framework for government data centers.",
    image: "https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Zero Trust", "SASE", "ZTNA", "Micro-segmentation", "MFA"],
    category: "security",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Hyperscale Data Center Architecture",
    description: "Built network security infrastructure for four Greenfield Internet and Colocation Data Centers.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Data Center", "Spine-Leaf", "Security", "20,000 Compute Nodes"],
    category: "network",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "SD-WAN Migration Strategy",
    description: "Redesigned enterprise WAN to SD-WAN architecture, achieving 30% cost reduction while improving security.",
    image: "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["SD-WAN", "Security", "Cost Optimization", "Migration"],
    category: "network",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Enterprise SOC Implementation",
    description: "Designed Security Operations Center infrastructure using Next-Gen Firewalls and SIEM solutions.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["SOC", "NGFW", "SIEM", "Security Monitoring"],
    category: "security",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Cloud Security Framework",
    description: "Developed cloud-first security strategy for public cloud adoption ensuring compliance with industry standards.",
    image: "https://images.unsplash.com/photo-1603899122634-f086ca5f5ddd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Cloud Security", "Azure", "AWS", "Compliance"],
    category: "security",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  },
  {
    title: "Cisco Meraki Wireless Training",
    description: "Published comprehensive training course on Udemy, trained over 250 IT professionals on wireless networking.",
    image: "https://images.unsplash.com/photo-1603398938378-e54eab446dde?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    tags: ["Training", "Cisco Meraki", "Wireless", "Certification"],
    category: "education",
    links: {
      demo: "#",
      github: "#",
      case: "#"
    }
  }
];

const achievements = [
  {
    title: "Rising Star Award Big Idea 2024",
    type: "Award",
    icon: "🏆",
    organization: "University of Westminster, London",
    link: "#"
  },
  {
    title: "Employee of the Year 2021",
    type: "Award",
    icon: "🥇",
    organization: "Vodafone, Ireland",
    link: "#"
  },
  {
    title: "MS Cybersecurity & Forensics",
    type: "Education",
    icon: "🎓",
    organization: "University of Westminster, UK",
    link: "#"
  },
  {
    title: "Published Cisco Meraki Training",
    type: "Publication",
    icon: "📚",
    organization: "Udemy (250+ Trained Professionals)",
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
          <h2 className="section-fade-in text-3xl font-bold mb-4">Projects & Achievements</h2>
          <div className="section-fade-in h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="section-fade-in text-muted-foreground">
            Highlighted projects and notable professional achievements
          </p>
        </div>
        
        <div className="section-fade-in mb-12 flex justify-center">
          <Tabs defaultValue="all" value={category} onValueChange={setCategory}>
            <TabsList>
              <TabsTrigger value="all">All Projects</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="network">Network</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
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
              <CardTitle className="text-center">Notable Achievements</CardTitle>
              <CardDescription className="text-center">
                Awards, education, and professional accomplishments
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {achievements.map((achievement, index) => (
                  <a 
                    key={index} 
                    href={achievement.link}
                    className="flex flex-col items-center p-4 rounded-lg bg-secondary hover:bg-secondary/70 transition-colors"
                  >
                    <span className="text-2xl mb-2">{achievement.icon}</span>
                    <h4 className="text-sm font-medium text-center">{achievement.title}</h4>
                    <span className="text-xs text-muted-foreground text-center">{achievement.organization}</span>
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
