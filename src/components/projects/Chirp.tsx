import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, MessageSquare, FileText, Server, Bug } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import chirpImg from '@/assets/chirp.jpg';

const Chirp = () => {
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
            <span className="text-highlight">Chirp</span> (Twitter Clone)
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Evaluated a social posting app with features similar to Twitter for a school project.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> Quality Assurance Tester
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={chirpImg} alt="Chirp App Showcase" className="w-full h-auto" />
          </Card>
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                Chirp was a school project designed to replicate the core functionalities of a microblogging platform like Twitter. The app allowed users to create posts, view a feed, and interact with content through likes and comments.
              </p>
              <p className="font-semibold text-foreground">
                As the QA Tester, my responsibility was to ensure the application was stable, functional, and ready for its final product demonstration by thoroughly testing all its features.
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
                  <MessageSquare className="w-5 h-5" />
                  Core Feature Testing
                </h3>
                <p className="text-muted-foreground">
                  I tested the end-to-end functionality of post creation, feed behavior, and the like/comment features to ensure they worked as expected.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <Server className="w-5 h-5" />
                  API Call Validation
                </h3>
                <p className="text-muted-foreground">
                  A critical part of my role was ensuring that UI changes correctly corresponded with backend API calls, verifying data integrity between the client and server.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <FileText className="w-5 h-5" />
                  QA Documentation
                </h3>
                <p className="text-muted-foreground">
                  I created clear and concise QA documentation, including test cases and bug reports, which improved the overall stability of the app before its demonstration.
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
                  <Bug className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">Manual Testing</span>
                </div>
                <div className="flex items-center gap-2 p-3 glass-card rounded-lg">
                  <FileText className="w-6 h-6 text-highlight" />
                  <span className="text-sm font-medium">QA Documentation</span>
                </div>
            </div>
          </Card>
        </section>

        <section>
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">What I Learned</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">API and UI Synchronization:</strong> This project highlighted the importance of testing not just what the user sees, but also what happens behind the scenes. Validating API calls was key to ensuring the app's reliability.
              </p>
              <p>
                <strong className="text-foreground">The Value of Documentation:</strong> Creating formal QA documentation, even for a school project, brought a level of professionalism and structure that made the testing process more efficient and effective.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default Chirp;