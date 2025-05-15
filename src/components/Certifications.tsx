
import React, { useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { GraduationCap, Award, BadgeCheck } from 'lucide-react';

const certifications = [
  {
    name: "Cisco Certified Network Professional (CCNP Enterprise)",
    issuer: "Cisco",
    date: "Jan 2021",
    credentialId: "CSCO13594932",
    expires: "Jan 2024"
  },
  {
    name: "Palo Alto Networks Certified Network Security Engineer (PCNSE)",
    issuer: "Palo Alto Networks",
    date: "Apr 2020",
    credentialId: "PCNSE-2021-0892",
    expires: "Apr 2023"
  },
  {
    name: "Fortinet Network Security Expert Level 4 (NSE 4)",
    issuer: "Fortinet",
    date: "Dec 2019",
    credentialId: "NSE4-FL-Ent-2219",
    expires: "Dec 2022"
  },
  {
    name: "Certified Information Systems Security Professional (CISSP Associate)",
    issuer: "(ISC)²",
    date: "Mar 2021",
    credentialId: "ISC2-ACC-1229448",
    expires: "Mar 2024"
  },
  {
    name: "Cisco Certified Network Associate (CCNA)",
    issuer: "Cisco",
    date: "Sep 2015",
    credentialId: "CSCO13594932",
    expires: "Sep 2018"
  },
  {
    name: "Microsoft Certified: Azure Administrator Associate",
    issuer: "Microsoft",
    date: "Jul 2022",
    credentialId: "MS-AZ-104-2293874",
    expires: "Jul 2025"
  },
  {
    name: "Cisco Certified Specialist - Enterprise Core",
    issuer: "Cisco",
    date: "Jan 2021",
    credentialId: "CSCO13594932",
    expires: "Jan 2024"
  },
  {
    name: "Cisco Meraki Network Associate (CMNA)",
    issuer: "Cisco",
    date: "Oct 2020",
    credentialId: "CMNA-2020-1092",
    expires: "Oct 2023"
  }
];

const Certifications = () => {
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
    <section id="certifications" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto mb-12 text-center">
          <h2 className="section-fade-in text-3xl font-bold mb-4">Professional Certifications</h2>
          <div className="section-fade-in h-1 w-20 bg-primary mx-auto mb-6"></div>
          <p className="section-fade-in text-muted-foreground">
            Industry certifications validating my expertise and skills
          </p>
        </div>
        
        <div className="section-fade-in max-w-4xl mx-auto">
          <Card className="bg-card border-border/50 overflow-hidden">
            <CardContent className="p-0">
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Certification</TableHead>
                      <TableHead className="hidden md:table-cell">Issuer</TableHead>
                      <TableHead className="hidden md:table-cell">Issue Date</TableHead>
                      <TableHead className="hidden md:table-cell">Credential ID</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {certifications.map((cert, index) => (
                      <TableRow key={index} className="hover:bg-muted/50">
                        <TableCell className="font-medium">
                          <div className="flex flex-col space-y-1">
                            <div>{cert.name}</div>
                            <div className="md:hidden text-xs text-muted-foreground">
                              {cert.issuer} • {cert.date}
                            </div>
                          </div>
                        </TableCell>
                        <TableCell className="hidden md:table-cell">{cert.issuer}</TableCell>
                        <TableCell className="hidden md:table-cell">{cert.date}</TableCell>
                        <TableCell className="hidden md:table-cell">
                          <Badge variant="outline">{cert.credentialId}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
          
          <div className="mt-6 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              <BadgeCheck className="h-4 w-4" />
              <span>All certifications have been verified by the issuing organization</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
