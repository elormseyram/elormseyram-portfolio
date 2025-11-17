import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, ShoppingCart, Package, CreditCard, Gift, Repeat, Sparkles, Star, Truck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import yfEssentialsVideo from '@/assets/images/yf-essentials/yf-essentials-figmaprototype.mp4';
import yfEssentialsImg1 from '@/assets/images/yf-essentials/yf-essentials1.jpg';
import yfEssentialsImg2 from '@/assets/images/yf-essentials/yf-essentials2.jpg';
import yfEssentialsImg3 from '@/assets/images/yf-essentials/yf-essentials3.jpg';

const YFEssentials = () => {
  const navigate = useNavigate();
  const screenshots = [yfEssentialsImg1, yfEssentialsImg2, yfEssentialsImg3];

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
            E-commerce Mobile App
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            YF <span className="text-highlight">Essentials</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            E-commerce mobile app for household cleaning essentials with delivery, pickup, loyalty points, subscriptions, and mobile money payments.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Company:</strong> Freelance (formerly YF Sanitaries)
          </p>
        </div>

   
{/* Hero Video */}
<div className="max-w-2xl mx-auto">
  <Card className="glass-card p-0 overflow-hidden mb-12">
    <video
      src={yfEssentialsVideo}
      className="w-full h-auto max-w-[720px] max-h-[420px] mx-auto"
      controls
      autoPlay
      loop
      muted
      playsInline
    />
  </Card>
</div>

        {/* Image Gallery */}
        <div className="grid md:grid-cols-3 gap-4 mb-12">
          {screenshots.map((img, index) => (
            <Card key={index} className="glass-card p-0 overflow-hidden">
              <img src={img} alt={`YF Essentials Screenshot ${index + 1}`} className="w-full h-auto" />
            </Card>
          ))}
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                YF Essentials is a fully designed e-commerce mobile app for household cleaning essentials, rebranded from YF Sanitaries. The platform was designed to provide a convenient and accessible shopping experience for customers looking to purchase cleaning products.
              </p>
              <p>
                The business goal was to create a modern, user-friendly mobile shopping experience that combines traditional e-commerce features with local delivery options, loyalty programs, and mobile money payments - essential for the Ghanaian market.
              </p>
              <p className="font-semibold text-foreground">
                Objective: Create a convenient, accessible shopping experience that drives customer loyalty and repeat purchases through innovative features like subscriptions and loyalty points.
              </p>
            </div>
          </Card>
        </section>

        {/* My Role */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">My Role</h2>
            <div className="grid md:grid-cols-1 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">UI/UX Designer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Complete mobile app UI/UX design</li>
                  <li>• User research and persona development</li>
                  <li>• Information architecture</li>
                  <li>• Wireframing and prototyping</li>
                  <li>• High-fidelity design creation in Figma</li>
                  <li>• Interactive prototype development</li>
                  <li>• Design system and component library</li>
                  <li>• Brand identity refinement (rebrand from YF Sanitaries)</li>
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
                { name: 'UI/UX Design', icon: Figma },
                { name: 'Prototyping', icon: Figma },
                { name: 'Mobile Design', icon: Figma },
              ].map((tool) => (
                <div key={tool.name} className="flex flex-col items-center p-4 glass-card rounded-lg" >
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
                  <Package className="w-5 h-5" />
                  Product Categories
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Organized product catalog</li>
                  <li>• Category-based browsing</li>
                  <li>• Search and filter functionality</li>
                  <li>• Product details and specifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <ShoppingCart className="w-5 h-5" />
                  Cart & Checkout
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Easy add-to-cart functionality</li>
                  <li>• Cart management</li>
                  <li>• Secure checkout process</li>
                  <li>• Order summary and confirmation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Package className="w-5 h-5" />
                  Delivery & Pickup
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Delivery option with address selection</li>
                  <li>• Pickup option for store collection</li>
                  <li>• Delivery time selection</li>
                  <li>• Delivery tracking</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <CreditCard className="w-5 h-5" />
                  Mobile Money Payments
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Mobile money integration</li>
                  <li>• Multiple payment options</li>
                  <li>• Secure payment processing</li>
                  <li>• Payment confirmation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Gift className="w-5 h-5" />
                  Loyalty Points
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Earn points on purchases</li>
                  <li>• Points balance tracking</li>
                  <li>• Redeem points for discounts</li>
                  <li>• Loyalty tier system</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">
                  <Repeat className="w-5 h-5 inline-block mr-2" />
                   Subscriptions
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Subscribe to regular deliveries</li>
                  <li>• Flexible subscription plans</li>
                  <li>• Manage subscriptions</li>
                  <li>• Auto-renewal options</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">
                  <Truck className="w-5 h-5 inline-block mr-2" />
                   Order Tracking
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time order status</li>
                  <li>• Delivery tracking</li>
                  <li>• Order history</li>
                  <li>• Push notifications</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">
                  <Sparkles className="w-5 h-5 inline-block mr-2" />
                   Personalized Recommendations
                </h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• AI-powered product suggestions</li>
                  <li>• Based on purchase history</li>
                  <li>• Personalized home screen</li>
                  <li>• Special offers and deals</li>
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
                  I researched e-commerce mobile apps and local shopping behaviors to understand user needs:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Customers prefer convenient delivery options</li>
                  <li>• Mobile money is the preferred payment method</li>
                  <li>• Loyalty programs drive repeat purchases</li>
                  <li>• Subscription models reduce shopping friction</li>
                  <li>• Clear product information is essential</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The rebrand from YF Sanitaries to YF Essentials required a fresh, modern design approach that maintained brand recognition while appealing to a broader audience.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Information Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  I designed an intuitive navigation structure that prioritized product discovery and shopping. The architecture supports quick access to categories, cart, orders, and account features. The subscription and loyalty features are integrated seamlessly into the main shopping flow.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Wireframes</h3>
                <p className="text-muted-foreground mb-4">
                  Low-fidelity wireframes established the core user flows, particularly the shopping, checkout, and subscription processes. I focused on minimizing steps in the purchase flow while maintaining clarity and security.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">High-Fidelity Designs & Prototyping</h3>
                <p className="text-muted-foreground mb-4">
                  I created comprehensive high-fidelity designs in Figma with an interactive prototype that demonstrates all key user flows. The prototype showcases the smooth transitions, interactions, and visual feedback throughout the app.
                </p>
                <Card className="p-4 bg-card/50 border-border mt-4">
                  <video 
                    src={yfEssentialsVideo}
                    className="w-full h-auto rounded"
                    controls
                    loop
                    muted
                    playsInline
                  />
                </Card>
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
                  The rebrand to YF Essentials reflects a modern, clean aesthetic that appeals to contemporary consumers. The color palette is fresh and approachable, with emphasis on product imagery and clear typography that enhances readability.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">UI Components</h3>
                <p className="text-muted-foreground mb-4">
                  I developed a comprehensive component library including:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Product cards with clear CTAs</li>
                  <li>• Shopping cart interface</li>
                  <li>• Checkout flow components</li>
                  <li>• Loyalty points display</li>
                  <li>• Subscription management UI</li>
                  <li>• Order tracking interface</li>
                  <li>• Mobile money payment screens</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">User Experience</h3>
                <p className="text-muted-foreground">
                  The design prioritizes ease of use with large touch targets, clear visual hierarchy, and intuitive navigation. The shopping flow is optimized for quick purchases while subscription and loyalty features are easily accessible without cluttering the interface.
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
                <div className="text-4xl font-bold text-highlight mb-2">✓ Designed</div>
                <p className="text-muted-foreground">Complete UI/UX design ready</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">8+ Features</div>
                <p className="text-muted-foreground">Comprehensive feature set</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">Interactive</div>
                <p className="text-muted-foreground">Figma prototype completed</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Design Impact:</strong> The comprehensive design and interactive prototype provide a clear vision for development. The mobile-first approach ensures the app will be optimized for the primary user base, while features like subscriptions and loyalty points are designed to drive customer retention and revenue growth.
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
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Balancing Feature-Rich with Simplicity</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> I used progressive disclosure to show primary features prominently while keeping secondary features easily accessible. The design hierarchy guides users through the most common flows while advanced features like subscriptions are discoverable but not overwhelming.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Mobile Money Payment Integration</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Designed clear, step-by-step payment flows with visual feedback at each stage. The mobile money interface feels native and trustworthy, with clear instructions and confirmation steps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Subscription Management UX</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Created an intuitive subscription interface that makes it easy to understand, modify, and cancel subscriptions. Clear visual indicators show subscription status and next delivery dates.
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
                <strong className="text-foreground">Key Learnings:</strong> This project taught me the importance of understanding local market preferences, particularly payment methods and shopping behaviors. Designing for mobile money required careful consideration of the user experience. The rebranding process taught me how to evolve a brand while maintaining recognition.
              </p>
              <p>
                <strong className="text-foreground">Design Thinking:</strong> E-commerce design requires balancing conversion optimization with user experience. Every element should guide users toward purchase while maintaining a pleasant, non-pushy experience. Features like loyalty points and subscriptions need to feel valuable rather than gimmicky.
              </p>
              <p>
                <strong className="text-foreground">Next Steps:</strong> The design is ready for development. Future iterations could include user testing with real customers, A/B testing of checkout flows, and refinement based on user behavior data. Integration with inventory management and logistics systems would be the next development phase.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default YFEssentials;
