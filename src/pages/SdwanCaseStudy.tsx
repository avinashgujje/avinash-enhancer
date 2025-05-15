
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";

const SdwanCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header */}
        <div className="mb-8 border-b pb-6">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#eee]">Global SD-WAN Cloud Architecture</h1>
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between text-sm text-muted-foreground">
            <div className="flex flex-col sm:flex-row sm:items-center mb-4 sm:mb-0">
              <span className="mr-4">Date: 10/01/2020</span>
              <span className="mr-4">Author: Avinash Gujje – All Rights Reserved</span>
              <Button variant="outline" size="sm" className="gap-2 mt-2 sm:mt-0" asChild>
                <a href="https://github.com/avinashgujje" target="_blank" rel="noopener noreferrer">
                  <FileText className="h-4 w-4" />
                  GitHub
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Project Summary - Now above Overview */}
        <section className="mb-10 bg-gradient-to-br from-card to-card/50 rounded-lg border border-border/50 p-6 shadow-md">
          <h2 className="text-2xl font-semibold mb-4 pb-2 border-b border-border/50">Project Summary</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Project Type</h3>
              <p className="text-foreground">Network Architecture</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Technology</h3>
              <p className="text-foreground">SD-WAN, MPLS, VPN</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Scope</h3>
              <p className="text-foreground">Global Enterprise WAN</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground">Date</h3>
              <p className="text-foreground">2020</p>
            </div>
          </div>
        </section>
        
        {/* Main Content */}
        <div className="space-y-10">
          <section>
            <h2 className="text-3xl font-semibold mb-4">Overview</h2>
            <p className="text-foreground/80 text-justify leading-relaxed">
              This architecture illustrates a Global Software-Defined Wide Area Network (SD-WAN) deployment leveraging a hybrid cloud model. It connects geographically distributed enterprise branches and data centers using a mix of MPLS, VPN over Internet, and SD-WAN tunnels to ensure optimized performance, secure connectivity, and centralized orchestration.
            </p>
          </section>
          
          {/* Diagram Section - With updated styling */}
          <section className="my-12">
            <div className="w-[85%] mx-auto group">
              <div className="overflow-hidden rounded-lg border border-primary/20 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-primary/20 hover:border-primary/50">
                <AspectRatio ratio={16/9} className="w-full">
                  <img 
                    src="/lovable-uploads/859a4a0b-fc8c-459f-8679-0b0e54f5921a.png" 
                    alt="SD-WAN Architecture Diagram" 
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-105"
                  />
                </AspectRatio>
              </div>
              <div className="mt-3 text-center font-medium text-muted-foreground">
                <p>SD-WAN Architecture Diagram</p>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to view in full size</p>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Business Objectives</h2>
            <ul className="list-none space-y-3 text-justify">
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Enable secure and resilient global connectivity between data centers, branch offices, and cloud providers.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Reduce dependency on MPLS while improving performance via traffic steering and SaaS optimization.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Centrally manage and orchestrate WAN policies using a unified controller.</span>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Key Components</h2>
            <div className="overflow-x-auto rounded-lg border border-border/50 bg-card/50 shadow-sm">
              <table className="min-w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="py-4 px-6 text-left font-medium text-foreground">Component</th>
                    <th className="py-4 px-6 text-left font-medium text-foreground">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border/50">
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">SD-WAN Edges</td>
                    <td className="py-4 px-6 text-foreground/80 text-justify">Deployed at each branch/DC (e.g., Toronto, San Jose, Paris, Mumbai, etc.). Manages dynamic routing and link failover.</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Orchestrator</td>
                    <td className="py-4 px-6 text-foreground/80 text-justify">Centralized management and policy control engine for SD-WAN configuration.</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">MPLS Cloud</td>
                    <td className="py-4 px-6 text-foreground/80 text-justify">Legacy MPLS backbone used for high-priority traffic and inter-DC connectivity.</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">VPN over Internet</td>
                    <td className="py-4 px-6 text-foreground/80 text-justify">Backup/secondary path via encrypted internet tunnels to reduce costs and enhance flexibility.</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">Cloud On-Ramp</td>
                    <td className="py-4 px-6 text-foreground/80 text-justify">Integrations with major cloud providers like Azure, AWS, and Google Cloud.</td>
                  </tr>
                  <tr className="hover:bg-muted/30 transition-colors">
                    <td className="py-4 px-6 font-medium">SaaS Optimization</td>
                    <td className="py-4 px-6 text-foreground/80 text-justify">Special handling for services like Office 365, Slack, LinkedIn, etc., using traffic shaping.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Global Site Distribution</h2>
            <p className="mb-4 text-foreground/80 text-justify">The architecture includes the following major nodes:</p>
            <div className="space-y-3 text-justify">
              <p><span className="font-semibold text-primary">Americas:</span> Toronto, Frisco-Colo, San Jose</p>
              <p><span className="font-semibold text-primary">EMEA:</span> Paris, Paris DC, Kfar Saba</p>
              <p><span className="font-semibold text-primary">APAC:</span> Singapore, Beijing, Mumbai, Bangalore DC</p>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Connectivity & Routing Strategy</h2>
            <div className="space-y-6">
              <div className="bg-card/30 rounded-lg p-6 border-l-4 border-blue-500 hover:bg-card/50 transition-all">
                <h3 className="text-xl font-medium mb-2">Primary Path</h3>
                <ul className="list-none space-y-2 text-justify">
                  <li className="flex">
                    <span className="text-blue-500 mr-3">•</span>
                    <span className="text-foreground/80">MPLS is used for mission-critical and latency-sensitive traffic between data centers.</span>
                  </li>
                  <li className="flex">
                    <span className="text-blue-500 mr-3">•</span>
                    <span className="text-foreground/80">Blue solid lines in the diagram represent MPLS circuits.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card/30 rounded-lg p-6 border-l-4 border-red-500 hover:bg-card/50 transition-all">
                <h3 className="text-xl font-medium mb-2">Secondary Path</h3>
                <ul className="list-none space-y-2 text-justify">
                  <li className="flex">
                    <span className="text-red-500 mr-3">•</span>
                    <span className="text-foreground/80">VPN over the internet is used for non-critical workloads or backup.</span>
                  </li>
                  <li className="flex">
                    <span className="text-red-500 mr-3">•</span>
                    <span className="text-foreground/80">Represented by red dashed lines in the diagram.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card/30 rounded-lg p-6 border-l-4 border-green-500 hover:bg-card/50 transition-all">
                <h3 className="text-xl font-medium mb-2">SD-WAN Intelligence</h3>
                <ul className="list-none space-y-2 text-justify">
                  <li className="flex">
                    <span className="text-green-500 mr-3">•</span>
                    <span className="text-foreground/80">Traffic dynamically routed based on performance metrics (latency, jitter, packet loss).</span>
                  </li>
                  <li className="flex">
                    <span className="text-green-500 mr-3">•</span>
                    <span className="text-foreground/80">SD-WAN edges constantly monitor link health to decide optimal path.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-card/30 rounded-lg p-6 border-l-4 border-yellow-500 hover:bg-card/50 transition-all">
                <h3 className="text-xl font-medium mb-2">SaaS Traffic Shaping</h3>
                <ul className="list-none space-y-2 text-justify">
                  <li className="flex">
                    <span className="text-yellow-500 mr-3">•</span>
                    <span className="text-foreground/80">SaaS applications like Salesforce, SharePoint, and Zendesk are prioritized through deep packet inspection (DPI) and QoS policies.</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Cloud Integration</h2>
            <ul className="list-none space-y-3 text-justify">
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Direct integration with public cloud platforms ensures optimized cloud app performance.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Multi-cloud support for Azure, AWS, and Google Cloud Platform is enabled through SD-WAN fabric.</span>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Security Considerations</h2>
            <ul className="list-none space-y-3 text-justify">
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">All SD-WAN tunnels are encrypted using IPsec.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Central policy enforcement ensures consistent firewall and access rules.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Zero Trust principles enforced between regions.</span>
              </li>
            </ul>
          </section>
          
          <section>
            <h2 className="text-3xl font-semibold mb-4">Scalability and Resilience</h2>
            <ul className="list-none space-y-3 text-justify">
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Easily extendable to add new locations or cloud zones.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">High Availability (HA) configuration possible for orchestrator and edge devices.</span>
              </li>
              <li className="flex">
                <span className="text-primary mr-3">•</span>
                <span className="text-foreground/80">Supports centralized logging and monitoring.</span>
              </li>
            </ul>
          </section>
          
          {/* Back Button at bottom right */}
          <div className="flex justify-end mt-12">
            <Button variant="default" className="bg-blue-500 hover:bg-blue-600" asChild>
              <Link to="/#projects">
                Back to Projects
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdwanCaseStudy;
