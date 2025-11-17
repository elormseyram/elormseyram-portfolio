import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, Bug, Search, Shield, CheckSquare, Smartphone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import bugbudImg1 from '@/assets/images/bugbud/bugbud1.jpg';
import bugbudImg2 from '@/assets/images/bugbud/bugbud2.jpg';
import bugbudImg3 from '@/assets/images/bugbud/bugbud3.jpg';
import bugbudImg4 from '@/assets/images/bugbud/bugbud4.jpg';

const BugBud = () => {
  const navigate = useNavigate();
  const screenshots = [bugbudImg1, bugbudImg2, bugbudImg3, bugbudImg4];

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
            UI/UX Design & Flutter Development
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">BugBud</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A ticketing and feedback app designed in Figma and coded in Flutter, helping teams efficiently track issues and collect user feedback.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> UI/UX Designer & Flutter Developer
          </p>
        </div>

        {/* Hero Screenshots */}
        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {screenshots.map((img, index) => (
            <Card key={index} className="glass-card p-0 overflow-hidden">
              <img src={img} alt={`BugBud Screenshot ${index + 1}`} className="w-full h-auto" />
            </Card>
          ))}
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                BugBud is a ticketing and feedback application designed to help teams efficiently track issues and collect user feedback. The project started with comprehensive UI/UX design in Figma, followed by full implementation in Flutter.
              </p>
              <p className="font-semibold text-foreground">
                I designed the entire user interface and user experience in Figma, then brought it to life by coding the complete application in Flutter, creating a seamless mobile experience for ticket management and feedback collection.
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
                  <Bug className="w-5 h-5" />
                  Bug Tracking UI
                </h3>
                <p className="text-muted-foreground">
                  Designed an intuitive interface for reporting, tracking, and managing bugs with clear status indicators and filtering capabilities.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Search className="w-5 h-5" />
                  Advanced Search
                </h3>
                <p className="text-muted-foreground">
                  Created powerful search and filter interfaces that allow teams to quickly find and organize bugs by various criteria.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Shield className="w-5 h-5" />
                  User Experience
                </h3>
                <p className="text-muted-foreground">
                  Focused on creating a user-friendly experience that reduces friction in bug reporting and resolution workflows.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Tools & Technologies</h2>
            <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 p-3 glass-card rounded-lg">
                  <Figma className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Figma</span>
                </div>
                <div className="flex items-center gap-2 p-3 glass-card rounded-lg">
                  <Smartphone className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Flutter</span>
                </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Information Architecture:</strong> This project taught me the importance of organizing complex information in a way that is both comprehensive and easy to navigate.
              </p>
              <p>
                <strong className="text-foreground">Developer Tools Design:</strong> Designing for developers requires understanding their workflows and creating interfaces that enhance productivity rather than hinder it.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default BugBud;

