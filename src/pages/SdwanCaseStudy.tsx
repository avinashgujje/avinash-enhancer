
import React from 'react';
import { Button } from '@/components/ui/button';
import { FileText, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const SdwanCaseStudy = () => {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <div className="mb-8">
          <Button variant="ghost" asChild>
            <Link to="/#projects">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Projects
            </Link>
          </Button>
        </div>
        
        {/* Header */}
        <div className="mb-12 border-b pb-8">
          <h1 className="text-4xl font-bold mb-4">🌐 High-Level Design: Global SD-WAN Cloud Architecture</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="mr-4">Date: 10/01/2020</span>
            <span>Author: Avinash Gujje – All Rights Reserved</span>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Content */}
          <div className="lg:col-span-2 space-y-8">
            <section>
              <h2 className="text-2xl font-semibold mb-4">📌 Overview</h2>
              <p className="text-foreground/80">
                This architecture illustrates a Global Software-Defined Wide Area Network (SD-WAN) deployment leveraging a hybrid cloud model. It connects geographically distributed enterprise branches and data centers using a mix of MPLS, VPN over Internet, and SD-WAN tunnels to ensure optimized performance, secure connectivity, and centralized orchestration.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">🎯 Business Objectives</h2>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Enable secure and resilient global connectivity between data centers, branch offices, and cloud providers.</li>
                <li>Reduce dependency on MPLS while improving performance via traffic steering and SaaS optimization.</li>
                <li>Centrally manage and orchestrate WAN policies using a unified controller.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">🧩 Key Components</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="py-3 px-4 text-left">Component</th>
                      <th className="py-3 px-4 text-left">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">SD-WAN Edges</td>
                      <td className="py-3 px-4">Deployed at each branch/DC (e.g., Toronto, San Jose, Paris, Mumbai, etc.). Manages dynamic routing and link failover.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Orchestrator</td>
                      <td className="py-3 px-4">Centralized management and policy control engine for SD-WAN configuration.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">MPLS Cloud</td>
                      <td className="py-3 px-4">Legacy MPLS backbone used for high-priority traffic and inter-DC connectivity.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">VPN over Internet</td>
                      <td className="py-3 px-4">Backup/secondary path via encrypted internet tunnels to reduce costs and enhance flexibility.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">Cloud On-Ramp</td>
                      <td className="py-3 px-4">Integrations with major cloud providers like Azure, AWS, and Google Cloud.</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-3 px-4 font-medium">SaaS Optimization</td>
                      <td className="py-3 px-4">Special handling for services like Office 365, Slack, LinkedIn, etc., using traffic shaping.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">🌍 Global Site Distribution</h2>
              <p className="mb-3 text-foreground/80">The architecture includes the following major nodes:</p>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li><span className="font-medium">Americas:</span> Toronto, Frisco-Colo, San Jose</li>
                <li><span className="font-medium">EMEA:</span> Paris, Paris DC, Kfar Saba</li>
                <li><span className="font-medium">APAC:</span> Singapore, Beijing, Mumbai, Bangalore DC</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">🧠 Connectivity & Routing Strategy</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-medium mb-2">🔹 Primary Path</h3>
                  <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                    <li>MPLS is used for mission-critical and latency-sensitive traffic between data centers.</li>
                    <li>Blue solid lines in the diagram represent MPLS circuits.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">🔹 Secondary Path</h3>
                  <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                    <li>VPN over the internet is used for non-critical workloads or backup.</li>
                    <li>Represented by red dashed lines in the diagram.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">🔹 SD-WAN Intelligence</h3>
                  <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                    <li>Traffic dynamically routed based on performance metrics (latency, jitter, packet loss).</li>
                    <li>SD-WAN edges constantly monitor link health to decide optimal path.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-2">🔹 SaaS Traffic Shaping</h3>
                  <ul className="list-disc pl-5 space-y-1 text-foreground/80">
                    <li>SaaS applications like Salesforce, SharePoint, and Zendesk are prioritized through deep packet inspection (DPI) and QoS policies.</li>
                  </ul>
                </div>
              </div>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">☁️ Cloud Integration</h2>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Direct integration with public cloud platforms ensures optimized cloud app performance.</li>
                <li>Multi-cloud support for Azure, AWS, and Google Cloud Platform is enabled through SD-WAN fabric.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">🛡️ Security Considerations</h2>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>All SD-WAN tunnels are encrypted using IPsec.</li>
                <li>Central policy enforcement ensures consistent firewall and access rules.</li>
                <li>Zero Trust principles enforced between regions.</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-2xl font-semibold mb-4">📈 Scalability and Resilience</h2>
              <ul className="list-disc pl-5 space-y-2 text-foreground/80">
                <li>Easily extendable to add new locations or cloud zones.</li>
                <li>High Availability (HA) configuration possible for orchestrator and edge devices.</li>
                <li>Supports centralized logging and monitoring.</li>
              </ul>
            </section>
          </div>
          
          {/* Right Column - Image and Quick Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              <div className="rounded-lg overflow-hidden border border-border mb-8">
                <img 
                  src="/lovable-uploads/859a4a0b-fc8c-459f-8679-0b0e54f5921a.png" 
                  alt="SD-WAN Architecture Diagram" 
                  className="w-full h-auto"
                />
                <div className="p-4 bg-muted/50">
                  <p className="text-sm text-center text-muted-foreground">
                    SD-WAN Architecture Diagram - Click to enlarge
                  </p>
                </div>
              </div>
              
              <div className="bg-card rounded-lg p-6 border border-border/50">
                <h3 className="font-semibold mb-4">Project Summary</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <span className="font-medium block">Project Type:</span>
                    <span className="text-muted-foreground">Network Architecture</span>
                  </div>
                  <div>
                    <span className="font-medium block">Technology:</span>
                    <span className="text-muted-foreground">SD-WAN, MPLS, VPN, Cloud</span>
                  </div>
                  <div>
                    <span className="font-medium block">Scope:</span>
                    <span className="text-muted-foreground">Global Enterprise WAN</span>
                  </div>
                  <div>
                    <span className="font-medium block">Implementation Date:</span>
                    <span className="text-muted-foreground">2020</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full" asChild>
                    <a href="https://github.com/avinashgujje" target="_blank" rel="noopener noreferrer">
                      <FileText className="h-4 w-4 mr-2" />
                      View on GitHub
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SdwanCaseStudy;
