
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillCategories = [
  {
    id: "frontend",
    name: "Frontend",
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 90 },
      { name: "Next.js", level: 80 },
      { name: "Tailwind CSS", level: 85 }
    ]
  },
  {
    id: "backend",
    name: "Backend",
    skills: [
      { name: "Node.js", level: 85 },
      { name: "Express", level: 80 },
      { name: "Python", level: 75 },
      { name: "Django", level: 70 },
      { name: "Java", level: 65 },
      { name: "SQL", level: 80 }
    ]
  },
  {
    id: "tools",
    name: "Tools & Others",
    skills: [
      { name: "Git/GitHub", level: 90 },
      { name: "Docker", level: 75 },
      { name: "AWS", level: 70 },
      { name: "CI/CD", level: 80 },
      { name: "RESTful APIs", level: 85 },
      { name: "GraphQL", level: 70 }
    ]
  }
];

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            
            // Animate skill bars
            const skillBars = entry.target.querySelectorAll('.skill-bar');
            skillBars.forEach((bar, index) => {
              setTimeout(() => {
                bar.classList.add('animate');
              }, index * 100);
            });
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
    <section id="skills" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="section-fade-in text-3xl font-bold mb-4">Skills & Expertise</h2>
          <div className="section-fade-in h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="section-fade-in text-muted-foreground">
            My technical skills and professional competencies
          </p>
        </div>
        
        <div className="section-fade-in max-w-4xl mx-auto">
          <Tabs defaultValue="frontend" className="w-full">
            <TabsList className="grid grid-cols-3 mb-8">
              {skillCategories.map((category) => (
                <TabsTrigger key={category.id} value={category.id} className="text-sm">
                  {category.name}
                </TabsTrigger>
              ))}
            </TabsList>
            
            {skillCategories.map((category) => (
              <TabsContent key={category.id} value={category.id} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {category.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex justify-between items-center">
                        <h4 className="font-medium">{skill.name}</h4>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-muted rounded-full overflow-hidden relative">
                        <div 
                          className="skill-bar absolute top-0 left-0 h-full rounded-full"
                          style={{ '--skill-value': `${skill.level}%` } as React.CSSProperties}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
        
        <div className="section-fade-in mt-16 max-w-4xl mx-auto">
          <h3 className="text-xl font-semibold mb-6 text-center">Additional Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Problem Solving",
              "Team Leadership",
              "Agile Methodology",
              "Project Management",
              "UI/UX Design",
              "Technical Writing",
              "System Architecture",
              "Performance Optimization"
            ].map((skill, index) => (
              <Card key={index} className="bg-card border-border/50">
                <CardContent className="p-4 text-center">
                  <p className="text-sm">{skill}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
