
import React, { useEffect, useRef } from 'react';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';

const experiences = [
  {
    position: "IT Security Architect",
    company: "Warwickshire County Council",
    duration: "Nov 2023 - Present",
    location: "London",
    description: "Spearheading the Security Architecture for the Warwickshire Government Council comprising of HQ Data Centers, NHS and other corporate offices.",
    responsibilities: [
      "Designed resilient data center security architecture, perimeter security",
      "Planning Zero Trust Security Models, SASE, ZTNA, Micro-segmentation, MFA and EDR",
      "Leading a cloud-first approach design and developed future state architecture strategy",
      "Led risk assessment to ensure ISO 27001, NIST, and CIS compliance",
      "Architected security policies for Public Cloud, BYOD, Wireless, Wired, IoT Networks"
    ],
    technologies: ["Zero Trust", "SASE", "ZTNA", "Cloud Security", "ISO 27001", "NIST"]
  },
  {
    position: "Senior Manager – Security Solutions Architect",
    company: "Vodafone Business",
    duration: "Mar 2020 - Oct 2021",
    location: "Ireland",
    description: "Designed Network and Security Architectures for Data Centers, Enterprise Networks of ISP, Gov, Banking and Educational organizations across EMEA and US.",
    responsibilities: [
      "Designed IT Security Infra and SOC using NGFW Cisco, Palo Alto, Fortinet, IPS, SIEM",
      "Maintained in-depth understanding of CISSP, NIST, TOGAF architecture approaches",
      "Provided Cyber Security, IAM, PAM, IoT and Cloud Security Solutions",
      "Bid for Tender, prepared HLD, LLD, RFP, RFR and BOM Quotations in Cisco CCW and Iris",
      "Led Product Manager role for Fortinet Security Fabric, SD-WAN, SASE products",
      "Redesigned Security Architecture, WAN to SD-WAN, achieved cost cutting by 30%"
    ],
    technologies: ["NGFW", "SIEM", "SOC", "SD-WAN", "SASE", "Cisco", "Palo Alto", "Fortinet"]
  },
  {
    position: "Solutions Architect",
    company: "Ericsson Global Services Ltd",
    duration: "Aug 2018 - Mar 2020",
    location: "US and India",
    description: "Built DC Security Architecture for Ericsson and MediaKind OTT MediaFirst Product.",
    responsibilities: [
      "Designed security solution for LAN, WAN, and WLAN Architectures across 2 HQ and 9+ branch in US, EMEA and APAC regions",
      "Revamped the existing security architecture, resulting in an 80% reduction in security incidents",
      "Upgraded existing WAN to SD-WAN, reduced cost by 30% by cutting back MPLS, Dedicated DWDM and DIA Lines",
      "Built network solution for OTT traffic with MediaFirst developers, and fixed real-time multicast performance issues",
      "Conceptualized Multi-Vendor Secure VPN connectivity for multi-vendor traffic flow"
    ],
    technologies: ["SD-WAN", "DC Security", "WAN Architecture", "VPN", "Network Solutions"]
  },
  {
    position: "Manager – Network Planning and Engineering",
    company: "Reliance Jio Infocomm Limited",
    duration: "Aug 2015 - Aug 2018",
    location: "India",
    description: "Built Network Security Infrastructure for four Reliance Jio Greenfield Internet and Colo Data Centers.",
    responsibilities: [
      "Planning and Engineering of 3 Internet Data Centers with capacity of 20,000 compute nodes",
      "Spearheaded major network security projects for OSS & BSS, Payment Bank, Cloud",
      "Designed L3, L2 Spine-Leaf fabric using Cisco Nexus and Perimeter Security",
      "Built Network Architecture for Storage Network SAN and NAS",
      "Implemented TOGAF, NIST, ISO compliance for Data Center infrastructure"
    ],
    technologies: ["Data Center", "Spine-Leaf", "Cisco Nexus", "Load Balancing", "ISO 27001", "TIA-942"]
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
