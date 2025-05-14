
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

const skillCategories = [
  {
    id: "security",
    name: "Security",
    skills: [
      { name: "NGFW (Palo Alto, Cisco, Fortinet)", level: 95 },
      { name: "SASE, SD-WAN Security", level: 90 },
      { name: "Zero Trust Architecture", level: 85 },
      { name: "IPS, DDoS, WAF", level: 90 },
      { name: "SIEM, SOC, NAC", level: 85 },
      { name: "Cloud Security (Azure, AWS)", level: 80 }
    ]
  },
  {
    id: "network",
    name: "Network",
    skills: [
      { name: "Data Center Architecture", level: 95 },
      { name: "SD-WAN, SDN, Cisco ACI", level: 90 },
      { name: "Enterprise WAN/LAN Design", level: 90 },
      { name: "Load Balancing (F5, Citrix)", level: 85 },
      { name: "Network Automation", level: 80 },
      { name: "Spine-Leaf Fabric", level: 90 }
    ]
  },
  {
    id: "frameworks",
    name: "Frameworks & Certifications",
    skills: [
      { name: "TOGAF Architecture Framework", level: 90 },
      { name: "CISSP Security Framework", level: 85 },
      { name: "NIST Security Framework", level: 90 },
      { name: "ISO 27001 Compliance", level: 85 },
      { name: "TIA-942 Rated 3 Standards", level: 80 },
      { name: "ITIL Service Management", level: 75 }
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
          <Tabs defaultValue="security" className="w-full">
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
          <h3 className="text-xl font-semibold mb-6 text-center">Professional Competencies</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Network Security Design",
              "Product Management",
              "Risk Management",
              "Pre-Sales Architecture",
              "IT Strategy",
              "Solution Design",
              "Technical Leadership",
              "Governance & Compliance"
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
