import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Palette, Type, Layers, Megaphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import flyerImg from '@/assets/flyer.jpg';

const FlyerDesign = () => {
  const navigate = useNavigate();

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
          <Badge className="mb-4 bg-purple-500/20 text-purple-600 border-purple-500/30">
            Graphic Design
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">Flyer Design</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Branding & Visual Communication for promotional materials.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> Graphic Designer
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={flyerImg} alt="Promotional Flyer Design" className="w-full h-auto" />
          </Card>
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                This project involved creating a promotional flyer with a strong emphasis on visual appeal and clear communication. The goal was to capture attention quickly and convey the key message effectively, driving engagement for an event or product.
              </p>
              <p className="font-semibold text-foreground">
                As the Graphic Designer, I was responsible for the entire creative process, from concept to final design, ensuring the flyer aligned with the brand's identity.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">My Strengths in this Project</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Layers className="w-5 h-5" />
                  Layout & Typography
                </h3>
                <p className="text-muted-foreground">
                  I focused on creating a strong layout and typography hierarchy to guide the viewer's eye through the information in a logical and visually pleasing order.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Palette className="w-5 h-5" />
                  Brand-Driven Color
                </h3>
                <p className="text-muted-foreground">
                  The color palette was carefully selected to be brand-driven, evoking the right emotions and ensuring the flyer was instantly recognizable and visually appealing.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Megaphone className="w-5 h-5" />
                  Message Clarity
                </h3>
                <p className="text-muted-foreground">
                  My primary goal was to ensure the message was clear and concise. Every design element served to reinforce the core message, avoiding clutter and confusion.
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
                  <Palette className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Canva</span>
                </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">The "Less is More" Principle:</strong> Flyer design taught me the power of simplicity. A clear, focused message is often more effective than a design crowded with too much information.
              </p>
              <p>
                <strong className="text-foreground">Visual Storytelling:</strong> I learned how to use color, typography, and layout to tell a story and evoke a specific feeling, which is a fundamental skill in all forms of design, including UI/UX.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default FlyerDesign;