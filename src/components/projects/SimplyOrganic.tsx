import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, ShoppingCart, Leaf, Package, Heart, Clock, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import simplyOrganicImg1 from '@/assets/images/simply-organic/simplyorganic1.jpg';
import simplyOrganicImg2 from '@/assets/images/simply-organic/simplyorganic2.jpg';
import simplyOrganicImg3 from '@/assets/images/simply-organic/simplyorganic3.jpg';
import simplyOrganicImg4 from '@/assets/images/simply-organic/simplyorganic4.jpg';
import simplyOrganicImg5 from '@/assets/images/simply-organic/simplyorganic5.jpg';

const SimplyOrganic = () => {
  const navigate = useNavigate();
  const screenshots = [simplyOrganicImg1, simplyOrganicImg2, simplyOrganicImg3, simplyOrganicImg4, simplyOrganicImg5];

  return (
    <div className="relative-content min-h-screen bg-background py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <Button
          variant="ghost"
          onClick={() => navigate('/projects')}
          className="mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Button>

        <div className="mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            UI/UX Design
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            Simply <span className="text-highlight">Organic</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            An e-commerce platform where people place gift orders for their loved ones, with customizable delivery time and location.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> UI/UX Designer
          </p>
        </div>

        {/* Hero Screenshots */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {screenshots.map((img, index) => (
            <Card key={index} className="glass-card p-0 overflow-hidden">
              <img src={img} alt={`Simply Organic Screenshot ${index + 1}`} className="w-full h-auto" />
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Simply Organic is an e-commerce platform designed for placing gift orders for loved ones. The platform allows users to select products, customize delivery times, and specify delivery locations, making it easy to send thoughtful organic gifts to friends and family.
              </p>
              <p className="font-semibold text-foreground">
                The design focuses on creating a seamless gift-ordering experience with flexible delivery options, allowing users to personalize when and where their gifts are delivered to their loved ones.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">My Key Contributions</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  Gift Ordering
                </h3>
                <p className="text-muted-foreground">
                  Designed an intuitive gift ordering flow that makes it easy for users to select products and specify recipient details.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  Customizable Delivery
                </h3>
                <p className="text-muted-foreground">
                  Created flexible delivery time selection allowing users to schedule when gifts are delivered to their loved ones.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <MapPin className="w-5 h-5" />
                  Location Customization
                </h3>
                <p className="text-muted-foreground">
                  Designed location selection and address management features for precise delivery to recipients.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Tools Used</h2>
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 p-3 glass-card rounded-lg">
                  <Figma className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Figma</span>
                </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Sustainable Design:</strong> This project reinforced the importance of aligning design choices with brand values, particularly when designing for environmentally conscious consumers.
              </p>
              <p>
                <strong className="text-foreground">E-commerce Best Practices:</strong> Designing for e-commerce requires careful consideration of conversion optimization while maintaining an authentic brand experience.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default SimplyOrganic;

