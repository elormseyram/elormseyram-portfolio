import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, Code2, Smartphone, Database, Shield, Globe } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import milautoImg1 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_30_25 am.png';
import milautoImg2 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_31_39 am.png';
import milautoImg3 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_34_20 am.png';
import milautoImg4 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_36_12 am.png';

const MilAutoDrive = () => {
  const navigate = useNavigate();
  const screenshots = [milautoImg1, milautoImg2, milautoImg3, milautoImg4];

  return (
    <div className="relative-content min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Back Button */}
        <Button
          variant="ghost"
          onClick={() => navigate('/')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Portfolio
        </Button>

        {/* Header */}
        <div className="mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Web Platform
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            MilAuto <span className="text-highlight">Drive</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A comprehensive web platform connecting buyers and sellers of vehicles, including auctions, mechanics, spare parts, and blockchain-backed vehicle history.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Company:</strong> Freelance - Personal Project (Designed for my mum's car business)
          </p>
        </div>

        {/* Hero Screenshots */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {screenshots.map((img, index) => (
            <Card key={index} className="glass-card p-0 overflow-hidden">
              <img src={img} alt={`MilAuto Drive Screenshot ${index + 1}`} className="w-full h-auto" />
            </Card>
          ))}
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                MilAuto Drive is an innovative web platform designed to revolutionize the vehicle trading ecosystem in Ghana. The platform connects buyers and sellers through a seamless marketplace, while also offering specialized services including vehicle auctions, mechanic directories, spare parts marketplace, and blockchain-verified vehicle history.
              </p>
              <p>
                This project was a personal initiative to support my mum's car business, creating a trustworthy, transparent, and efficient platform that addresses common pain points in the African vehicle trading market, including lack of transparency, fraud concerns, and difficulty finding reliable mechanics and parts.
              </p>
              <p className="font-semibold text-foreground">
                Launch Region: Ghana (with potential expansion to Nigeria)
              </p>
              <p className="text-sm italic text-muted-foreground">
                Note: Blockchain verification is used for vehicle history records without requiring crypto payments at launch.
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
                  <li>• User research and persona development</li>
                  <li>• Information architecture and user flows</li>
                  <li>• Wireframing and prototyping</li>
                  <li>• High-fidelity design creation</li>
                  <li>• Design system development</li>
                  <li>• Brand identity design</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Web Designer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Responsive layout design</li>
                  <li>• Component design and specifications</li>
                  <li>• Visual design direction</li>
                  <li>• Design documentation</li>
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
                { name: 'UI/UX Design', icon: Code2 },
                { name: 'Blockchain', icon: Shield },
                { name: 'Web Design', icon: Globe },
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
                <h3 className="text-xl font-semibold mb-3 text-highlight">Vehicle Marketplace</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Advanced search and filtering system</li>
                  <li>• Detailed vehicle listings with photos</li>
                  <li>• Price comparison tools</li>
                  <li>• Seller verification badges</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Auction System</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time bidding interface</li>
                  <li>• Automated bidding increments</li>
                  <li>• Countdown timers and notifications</li>
                  <li>• Secure payment processing</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Mechanic Directory</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Verified mechanic profiles</li>
                  <li>• Location-based search</li>
                  <li>• Ratings and reviews system</li>
                  <li>• Booking and scheduling</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Spare Parts Marketplace</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Categorized parts catalog</li>
                  <li>• Vehicle compatibility matching</li>
                  <li>• Price negotiation tools</li>
                  <li>• Delivery tracking</li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-highlight">Blockchain Vehicle History</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Immutable vehicle records</li>
                  <li>• Complete ownership history</li>
                  <li>• Accident and repair records</li>
                  <li>• Verification badges for verified vehicles</li>
                  <li className="text-sm italic">Note: No crypto payments at launch - blockchain used for verification only</li>
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
                  I conducted extensive research to understand the Ghanaian vehicle trading market. Through conversations with car buyers, sellers, mechanics, and my mum's business experience, I identified key pain points:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Lack of trust in online vehicle listings</li>
                  <li>• Difficulty verifying vehicle history and condition</li>
                  <li>• Limited access to reliable mechanics</li>
                  <li>• Fragmented spare parts market</li>
                  <li>• Concerns about fraud and scams</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The brand tone needed to be professional, bold, trustworthy, and disruptive - reflecting confidence while maintaining approachability for a wide range of users in the Ghanaian market.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Information Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  I designed a comprehensive site map that organized four main service areas while maintaining clear navigation paths. The architecture prioritized discoverability and intuitive user flows between related services (e.g., finding a vehicle → finding mechanics → finding spare parts).
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Wireframes</h3>
                <p className="text-muted-foreground mb-4">
                  Low-fidelity wireframes helped establish the layout structure and content hierarchy. I focused on creating clear visual separation between different service areas while maintaining design consistency across the platform.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">High-Fidelity Designs</h3>
                <p className="text-muted-foreground mb-4">
                  The final designs feature a professional color palette with bold accent colors. I created a comprehensive design system ensuring consistency across all platform sections, with special attention to building trust through visual design.
                </p>
                <div className="grid md:grid-cols-2 gap-4 mt-4">
                  {screenshots.map((img, index) => (
                    <Card key={index} className="p-2 bg-card/50 border-border">
                      <img src={img} alt={`Design Screenshot ${index + 1}`} className="w-full h-auto rounded" />
                    </Card>
                  ))}
                </div>
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
                <h3 className="text-xl font-semibold mb-3 text-highlight">Brand Identity</h3>
                <p className="text-muted-foreground">
                  The brand identity reflects professionalism and trustworthiness, essential for a vehicle trading platform. The color scheme uses a sophisticated palette with bold accent colors that draw attention to key actions and important information. Typography choices emphasize readability while maintaining a modern, tech-forward aesthetic.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">UI Components</h3>
                <p className="text-muted-foreground mb-4">
                  I developed a comprehensive component library including:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Custom card components for vehicle listings</li>
                  <li>• Interactive auction timer components</li>
                  <li>• Advanced filter and search UI</li>
                  <li>• Responsive navigation system</li>
                  <li>• Trust indicators and verification badges</li>
                  <li>• Mobile-optimized touch interactions</li>
                </ul>
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
                <div className="text-4xl font-bold text-highlight mb-2">In Development</div>
                <p className="text-muted-foreground">Platform currently in design phase</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">1 Region</div>
                <p className="text-muted-foreground">Primary focus: Ghana</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">4 Services</div>
                <p className="text-muted-foreground">Marketplace, Auctions, Mechanics, Parts</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Expected Impact:</strong> The platform aims to increase transparency in vehicle trading in Ghana, reduce fraud incidents, and create a more efficient marketplace ecosystem. The blockchain verification system will provide unprecedented trust and security for buyers, directly supporting my mum's car business growth.
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
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Complex Multi-Service Platform</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> I designed a clear navigation system with distinct service areas while maintaining visual consistency. Tab-based navigation and contextual breadcrumbs help users understand their location within the platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Building Trust in Online Vehicle Trading</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Implemented multiple trust indicators including verification badges, blockchain-backed history, user ratings, and transparent seller information. Visual design emphasizes security and reliability throughout the platform.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Mobile-First Market</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Prioritized mobile-responsive design with touch-optimized interactions. Simplified navigation for smaller screens while maintaining full functionality across all device sizes, crucial for the Ghanaian market.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Blockchain Integration Without Crypto Complexity</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Designed blockchain verification as a background feature that enhances trust without requiring users to understand cryptocurrency. Clear, simple messaging explains the benefits without technical jargon.
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
                <strong className="text-foreground">Key Learnings:</strong> This project taught me the importance of balancing multiple service offerings within a single platform. I learned to prioritize user needs while maintaining design consistency across different functional areas. The blockchain integration taught me how to simplify complex technical concepts for end users.
              </p>
              <p>
                <strong className="text-foreground">Design Thinking:</strong> The research phase revealed that trust is the most critical factor in vehicle trading platforms. Every design decision was evaluated through the lens of building and maintaining user trust, especially important for a personal business project.
              </p>
              <p>
                <strong className="text-foreground">Next Steps:</strong> Future iterations will focus on user testing with real buyers and sellers in Ghana. I plan to refine the auction interface based on feedback, enhance the mobile experience, and develop additional trust-building features such as vehicle inspection scheduling. The platform will continue to evolve based on my mum's business needs and market feedback.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default MilAutoDrive;
