import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, CheckCircle, Database, BarChart, Settings } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import workbookDashboard from '@/assets/images/workbook/dashboard-worbook.jpg';
import workbookOpportunities from '@/assets/images/workbook/opportunities-workbook.jpg';

const Workbook = () => {
  const navigate = useNavigate();

  return (
    <div className="relative-content min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        <div className="mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Fintech Web App / ERP
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">Workbook</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            All-in-one ERP fintech web application with comprehensive business management features, financial tools, and analytics.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Company:</strong> Everything Technologies Company
          </p>
        </div>

        {/* Hero Screenshots */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={workbookDashboard} alt="Workbook Dashboard" className="w-full h-auto" />
          </Card>
          <Card className="glass-card p-0 overflow-hidden">
            <img src={workbookOpportunities} alt="Workbook Opportunities" className="w-full h-auto" />
          </Card>
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Workbook is a comprehensive all-in-one ERP (Enterprise Resource Planning) fintech web application designed to streamline business operations, financial management, and data analytics for organizations. The platform combines multiple business functions into a unified system.
              </p>
              <p>
                The business goal was to create a powerful yet user-friendly ERP solution that eliminates the need for multiple disparate systems. Workbook aims to provide businesses with complete visibility into their operations, finances, and opportunities through integrated modules and real-time analytics.
              </p>
              <p className="font-semibold text-foreground">
                Key Focus: Financial management, opportunity tracking, analytics, and seamless integration of business processes.
              </p>
            </div>
          </Card>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">My Role</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">UI/UX Designer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Dashboard UI design</li>
                  <li>• Information architecture</li>
                  <li>• Component design</li>
                  <li>• User flow optimization</li>
                  <li>• Visual design system</li>
                  <li>• Design specifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">QA Engineer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Quality assurance testing</li>
                  <li>• Bug tracking and management</li>
                  <li>• Test case development</li>
                  <li>• User acceptance testing</li>
                  <li>• Regression testing</li>
                  <li>• Project management using ClickUp</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Tools & Technologies */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { name: 'Figma', icon: Figma },
                { name: 'QA Testing', icon: CheckCircle },
                { name: 'ClickUp', icon: Settings },
                { name: 'UI Design', icon: Figma },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center p-4 glass-card rounded-lg">
                  <tool.icon className="w-8 h-8 mb-2 text-highlight" />
                  <span className="text-sm font-medium text-center">{tool.name}</span>
                </div>
              ))}
            </div>
          </Card>
        </section>

        {/* Core Features */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Core Features</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <BarChart className="w-5 h-5" />
                  Dashboard & Analytics
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Comprehensive business dashboard</li>
                  <li>• Real-time financial analytics</li>
                  <li>• Performance metrics</li>
                  <li>• Customizable widgets</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Database className="w-5 h-5" />
                  Financial Management
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Financial tracking and reporting</li>
                  <li>• Budget management</li>
                  <li>• Transaction processing</li>
                  <li>• Financial analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">
                  Opportunities Management
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Sales pipeline tracking</li>
                  <li>• Opportunity management</li>
                  <li>• Lead conversion tracking</li>
                  <li>• Revenue forecasting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">
                  ERP Modules
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Integrated business modules</li>
                  <li>• Process automation</li>
                  <li>• Data management</li>
                  <li>• Workflow optimization</li>
                </ul>
              </div>
            </div>
          </Card>
        </section>

        {/* Design Process */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Design Process</h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Research & Requirements</h3>
                <p className="text-muted-foreground mb-4">
                  I worked closely with stakeholders to understand the complex requirements of an ERP system. Key considerations included:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Users need quick access to critical information</li>
                  <li>• Data visualization is crucial for decision-making</li>
                  <li>• Complex workflows need to be simplified</li>
                  <li>• Multiple user roles require different views</li>
                  <li>• Financial data must be presented clearly and accurately</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Information Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  I designed a hierarchical information architecture that organizes complex ERP modules into intuitive sections. The dashboard serves as the central hub, providing quick access to all major functions while maintaining clear navigation to detailed views.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Dashboard Design</h3>
                <p className="text-muted-foreground mb-4">
                  The dashboard UI was my primary design focus. I created a layout that balances information density with readability, using visual hierarchy to guide users' attention to the most important metrics. The design supports customizable widgets and personalized views.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  <Card className="p-2 bg-card/50 border-border">
                    <img src={workbookDashboard} alt="Dashboard Design" className="w-full h-auto rounded" />
                  </Card>
                  <Card className="p-2 bg-card/50 border-border">
                    <img src={workbookOpportunities} alt="Opportunities Design" className="w-full h-auto rounded" />
                  </Card>
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* QA Process */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">QA Engineering Process</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Test Planning & Management</h3>
                <p className="text-muted-foreground mb-4">
                  I managed the entire QA process using ClickUp, organizing test cases, tracking bugs, and coordinating with the development team. The systematic approach ensured comprehensive coverage of all features and modules.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Testing Activities</h3>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Functional testing of all modules</li>
                  <li>• User acceptance testing (UAT)</li>
                  <li>• Regression testing for each release</li>
                  <li>• UI/UX consistency verification</li>
                  <li>• Performance testing</li>
                  <li>• Cross-browser compatibility testing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Bug Tracking</h3>
                <p className="text-muted-foreground">
                  I maintained detailed bug reports in ClickUp, prioritizing issues based on severity and impact. Clear communication with developers ensured timely resolution and maintained product quality throughout the development lifecycle.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Visual Design Highlights */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Visual Design Highlights</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Dashboard Design</h3>
                <p className="text-muted-foreground">
                  The dashboard design prioritizes information hierarchy and visual clarity. I used a card-based layout with clear sections for different data types. Color coding and data visualization help users quickly understand their business metrics and make informed decisions.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">UI Components</h3>
                <p className="text-muted-foreground mb-4">
                  I designed a comprehensive component library including:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Data visualization components (charts, graphs)</li>
                  <li>• Financial metric cards</li>
                  <li>• Table and list components</li>
                  <li>• Form elements and inputs</li>
                  <li>• Navigation components</li>
                  <li>• Modal dialogs and overlays</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Design System</h3>
                <p className="text-muted-foreground">
                  Created a consistent design system that ensures visual coherence across all modules. The system includes typography scales, color palettes, spacing guidelines, and component specifications that maintain consistency while allowing for module-specific customization.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* Impact / Results */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Impact & Results</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">✓ Live</div>
                <p className="text-muted-foreground">Platform deployed and operational</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">All-in-One</div>
                <p className="text-muted-foreground">Comprehensive ERP solution</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">QA Managed</div>
                <p className="text-muted-foreground">Complete quality assurance</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Impact:</strong> The dashboard design I created provides users with clear, actionable insights into their business operations. The comprehensive QA process ensured high-quality releases and reduced production bugs. The systematic approach to testing and bug tracking improved development efficiency and product reliability.
              </p>
            </div>
          </Card>
        </section>

        {/* Challenges & Solutions */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Challenges & Solutions</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Complex Data Visualization</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> I designed intuitive data visualization components that present complex financial and operational data in easily digestible formats. Used progressive disclosure to show summary metrics first, with detailed views available on demand.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Managing Multiple Modules</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Created a consistent navigation system and design language that works across all modules. The dashboard serves as a central hub, making it easy to switch between different functional areas while maintaining context.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Comprehensive QA Coverage</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Implemented a systematic QA process using ClickUp for organization and tracking. Created test case libraries, established regression testing procedures, and maintained clear communication channels with the development team.
                </p>
              </div>
            </div>
          </Card>
        </section>

        {/* What I Learned */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">What I Learned & Next Steps</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Key Learnings:</strong> Working on an ERP system taught me the importance of scalability and consistency in design. Managing QA for such a complex platform improved my attention to detail and systematic thinking. Using ClickUp for project management enhanced my organizational and communication skills.
              </p>
              <p>
                <strong className="text-foreground">Design Thinking:</strong> Designing for complex business systems requires balancing information density with usability. Every design decision must support user efficiency while maintaining clarity. The dashboard became the most critical component, requiring careful consideration of user priorities and workflows.
              </p>
              <p>
                <strong className="text-foreground">QA Insights:</strong> A systematic approach to QA is essential for complex applications. Clear documentation, prioritization, and communication are key to maintaining quality while supporting rapid development cycles.
              </p>
              <p>
                <strong className="text-foreground">Next Steps:</strong> Future enhancements could include advanced analytics features, AI-powered insights, mobile app versions, and expanded customization options. Continuous user feedback will drive iterative improvements to both design and functionality.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Workbook;
