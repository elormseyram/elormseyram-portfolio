import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, Users, Zap, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import ticketmateImg from '@/assets/ticketmate.jpg';
const TicketMate = () => {
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
            UI/UX Design
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">TicketMate</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A seamless ticket-booking experience for a school group project.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> UI/UX Designer
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={ticketmateImg} alt="TicketMate Showcase" className="w-full h-auto" />
          </Card>
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                TicketMate was a school group project focused on designing a user-friendly event booking platform. The primary goal was to create a seamless and intuitive experience for users to discover, book, and manage tickets for various events.
              </p>
              <p className="font-semibold text-foreground">
                My focus was on mapping the entire user journey, from event discovery to the final checkout process, ensuring every step was logical and easy to navigate.
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
                  <Users className="w-5 h-5" />
                  User Flow Mapping
                </h3>
                <p className="text-muted-foreground">
                  I developed detailed user flow diagrams for the entire event discovery and checkout process, identifying potential friction points and optimizing the path to purchase.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  High-Fidelity Interface
                </h3>
                <p className="text-muted-foreground">
                  Using Figma, I designed a high-fidelity user interface with a modern visual hierarchy. The design emphasized clarity, with clean layouts and a consistent visual language.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  Accessibility Focus
                </h3>
                <p className="text-muted-foreground">
                  I designed interaction patterns with accessibility in mind, ensuring adequate color contrast, readable typography, and keyboard-navigable elements to make the platform usable for everyone.
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
                <strong className="text-foreground">User-Centric Design:</strong> This project reinforced the importance of placing the user at the center of the design process. Mapping the user journey was crucial in creating an experience that felt natural and efficient.
              </p>
              <p>
                <strong className="text-foreground">Collaboration in a Team:</strong> Working as part of a group taught me valuable lessons in communication, feedback, and aligning on a shared design vision to achieve our project goals.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default TicketMate;