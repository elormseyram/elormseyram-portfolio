import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Bug, Smartphone, FileCheck, ClipboardCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import cleanseGuruImg from '@/assets/cleanseguru.jpg';

const CleanseGuru = () => {
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
          <Badge className="mb-4 bg-orange-500/20 text-orange-600 border-orange-500/30">
            Quality Assurance
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">CleanseGuru</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            A platform where users can book cleaners and cleaners can register their services.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> Quality Assurance Tester
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={cleanseGuruImg} alt="CleanseGuru Showcase" className="w-full h-auto" />
          </Card>
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                CleanseGuru was a school project aimed at creating a two-sided marketplace for cleaning services. The platform needed to facilitate seamless booking for users and a straightforward registration and job management system for cleaners.
              </p>
              <p className="font-semibold text-foreground">
                My role was to ensure the platform was reliable, bug-free, and provided a smooth user experience on all devices before its launch.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">My Testing Focus</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Bug className="w-5 h-5" />
                  Functional Bug Testing
                </h3>
                <p className="text-muted-foreground">
                  I rigorously tested the core user journeys, including the user booking flow and the cleaner signup process, to identify and document functional bugs.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Smartphone className="w-5 h-5" />
                  UI Responsiveness
                </h3>
                <p className="text-muted-foreground">
                  A key focus was ensuring the user interface was fully responsive and aligned correctly across a range of devices, from mobile phones to desktops.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <FileCheck className="w-5 h-5" />
                  Reporting & Validation
                </h3>
                <p className="text-muted-foreground">
                  I used Jira to report all identified issues, providing clear, actionable details for developers. I was also responsible for validating fixes to ensure a smoother launch.
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
                  <ClipboardCheck className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Jira</span>
                </div>
                <div className="flex items-center gap-2 p-3 glass-card rounded-lg">
                  <Bug className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Manual Testing</span>
                </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">The Importance of Structured Testing:</strong> This project taught me the value of a systematic approach to QA. Creating test plans and using a tool like Jira was crucial for tracking issues and ensuring nothing fell through the cracks.
              </p>
              <p>
                <strong className="text-foreground">Collaboration with Developers:</strong> Effective QA requires clear communication. I learned how to write concise bug reports that gave developers all the information they needed to fix issues efficiently, fostering a collaborative environment.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default CleanseGuru;

