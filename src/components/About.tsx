
import React, { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, Database, Globe, Server, Shield, Network, Cloud, Lock } from 'lucide-react';

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
            Accomplished Senior Security Architect with over 15 years of expertise in the Telecom and IT industry
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="section-fade-in space-y-6">
            <h3 className="text-xl font-semibold">Professional Profile</h3>
            <p className="text-muted-foreground">
              Specializing in the strategic planning and designing of network and security architecture for data centers and enterprise infrastructures. Demonstrated success in planning network and security solutions for the UK Government and leading service providers, including Vodafone, Ericsson, Microsoft, and Jio across EMEA, APAC, and US.
            </p>
            <p className="text-muted-foreground">
              Adept at collaborative strategic planning and decision-making, with a focus on delivering cost-effective architecture solutions that maximize ROI. Holds an MS in Cybersecurity and Forensics, BEng in Information Technology and certifications from Cisco, Palo Alto, Fortinet and Meraki.
            </p>
            <div className="pt-4">
              <Button variant="outline" className="rounded-md" asChild>
                <a href="#experience">View Experience</a>
              </Button>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            {[
              {
                icon: <Shield className="h-6 w-6 text-primary" />,
                title: "Security Architecture",
                desc: "Designing comprehensive security solutions for enterprise and data center infrastructures"
              },
              {
                icon: <Network className="h-6 w-6 text-primary" />,
                title: "Network Architecture",
                desc: "Planning and implementing scalable network solutions for large organizations"
              },
              {
                icon: <Cloud className="h-6 w-6 text-primary" />,
                title: "Cloud Security",
                desc: "Securing Azure, AWS environments and implementing cloud-first strategies"
              },
              {
                icon: <Lock className="h-6 w-6 text-primary" />,
                title: "Compliance",
                desc: "Ensuring adherence to ISO 27001, NIST, CIS, TOGAF, CISSP frameworks"
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
