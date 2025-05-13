
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ScrollArea } from '@/components/ui/scroll-area';

const ProjectsGallery = () => {
  const [activeProject, setActiveProject] = useState(0);
  
  const projects = [
    {
      id: 1,
      title: "HLD of Global SD-WAN Cloud Architecture",
      description: `This architecture illustrates a Global Software-Defined Wide Area Network (SD-WAN) deployment leveraging a hybrid cloud model. It connects geographically distributed enterprise branches and data centers using a mix of MPLS, VPN over Internet, and SD-WAN tunnels to ensure optimized performance, secure connectivity, and centralized orchestration.`,
      image: "/lovable-uploads/859a4a0b-fc8c-459f-8679-0b0e54f5921a.png",
      details: [
        "Enables secure and resilient global connectivity between data centers, branch offices, and cloud providers",
        "Reduces dependency on MPLS while improving performance via traffic steering and SaaS optimization",
        "Centrally manages and orchestrates WAN policies using a unified controller",
        "Includes global site distribution across Americas, EMEA, and APAC regions",
        "Implements traffic routing strategies with primary MPLS paths and secondary VPN paths",
        "Features SaaS traffic shaping for applications like Salesforce, SharePoint, and Zendesk"
      ]
    }
    // More projects can be added here in the future
  ];

  return (
    <section id="projects-gallery" className="py-16 bg-background">
      <div className="container px-4 mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Project Diagrams</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          {/* Project List - Left Side */}
          <div className="lg:col-span-1 bg-card rounded-lg shadow-sm p-4">
            <h3 className="font-medium mb-4 text-lg">Technical Designs</h3>
            <ScrollArea className="h-[400px]">
              <div className="space-y-2 pr-3">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(index)}
                    className={cn(
                      "w-full text-left px-4 py-3 rounded-md transition-colors text-sm",
                      activeProject === index ? 
                        "bg-primary/10 text-primary font-medium" : 
                        "hover:bg-muted"
                    )}
                  >
                    {project.title}
                  </button>
                ))}
              </div>
            </ScrollArea>
          </div>
          
          {/* Project Display - Right Side */}
          <div className="lg:col-span-4 bg-card rounded-lg shadow-sm p-6">
            {projects[activeProject] && (
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-4">
                  {projects[activeProject].title}
                </h3>
                
                <div className="relative rounded-lg overflow-hidden border border-border">
                  <AspectRatio ratio={16/9} className="bg-muted">
                    <img 
                      src={projects[activeProject].image} 
                      alt={projects[activeProject].title}
                      className="object-contain w-full h-full" 
                    />
                  </AspectRatio>
                </div>
                
                <div className="mt-6">
                  <p className="text-foreground/80 mb-4">
                    {projects[activeProject].description}
                  </p>
                  
                  <div className="mt-6">
                    <h4 className="font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {projects[activeProject].details.map((detail, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-primary mr-2">•</span>
                          <span className="text-sm text-foreground/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
        
        {/* Carousel for mobile view */}
        <div className="lg:hidden mt-10">
          <Carousel className="w-full">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={project.id}>
                  <div className="bg-card rounded-lg shadow-sm p-4 h-full">
                    <h3 className="text-xl font-semibold mb-4">{project.title}</h3>
                    <div className="relative rounded-lg overflow-hidden border border-border mb-4">
                      <AspectRatio ratio={16/9} className="bg-muted">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="object-contain w-full h-full" 
                        />
                      </AspectRatio>
                    </div>
                    <p className="text-sm text-foreground/80">{project.description}</p>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="-left-4" />
            <CarouselNext className="-right-4" />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default ProjectsGallery;
