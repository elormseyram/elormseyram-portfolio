import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, Gamepad2, Heart, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import biciImg from '@/assets/bici image.jpg';
const Bici = () => {
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
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Product & UX Design
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">Bici</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A gamified menstrual tracking experience that rewards consistency and self-care.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> Product & UX Designer
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={biciImg} alt="Bici App Showcase" className="w-full h-auto" />
          </Card>
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Bici is a conceptual mobile app that transforms the routine of menstrual cycle tracking into an engaging and rewarding game. The goal was to create an experience that encourages users to be consistent with their health tracking by incorporating elements of self-care and motivation.
              </p>
              <p className="font-semibold text-foreground">
                As the Product and UX Designer, I was responsible for the entire design process, from initial research to the final UI system.
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
                  <Search className="w-5 h-5" />
                  UX Research
                </h3>
                <p className="text-muted-foreground">
                  I conducted research into the daily habits and needs of the target user base to understand what motivates them and what challenges they face with existing tracking apps.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Gamepad2 className="w-5 h-5" />
                  Gamification
                </h3>
                <p className="text-muted-foreground">
                  I designed core gamification mechanics, such as point systems, rewards for consistency, and self-care challenges, to keep users motivated and engaged.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Heart className="w-5 h-5" />
                  UI System Design
                </h3>
                <p className="text-muted-foreground">
                  I created a complete UI system in Figma with a friendly and feminine aesthetic, using soft colors and approachable illustrations to create a welcoming and non-clinical feel.
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
                <strong className="text-foreground">The Power of Gamification:</strong> This project was a deep dive into how game mechanics can be applied to non-game contexts to drive user behavior and create positive habits.
              </p>
              <p>
                <strong className="text-foreground">Empathetic Design:</strong> Designing for a personal and sensitive topic like menstrual health taught me the importance of empathy, privacy, and creating a supportive user experience.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Bici;
