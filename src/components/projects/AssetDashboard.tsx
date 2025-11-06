import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, BarChart3, ShieldCheck, LayoutGrid } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import assetDashboardImg from '@/assets/assetdashboard.jpg';

const AssetDashboard = () => {
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
            <span className="text-highlight">Asset Management Dashboard</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Designed an enterprise dashboard for tracking organizational assets.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Role:</strong> UI/UX Designer
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-4 mb-12">
          <Card className="glass-card p-0 overflow-hidden">
            <img src={assetDashboardImg} alt="Asset Dashboard Showcase" className="w-full h-auto" />
          </Card>
        </div>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                This project involved designing a dashboard for an enterprise-level asset management system. The goal was to provide a centralized platform for organizations to monitor, track, and manage their physical and digital assets in real-time.
              </p>
              <p className="font-semibold text-foreground">
                The key challenge was to present a large volume of complex data in a way that was clear, intuitive, and actionable for different user roles within an organization.
              </p>
            </div>
          </Card>
        </section>

        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Highlights</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <LayoutGrid className="w-5 h-5" />
                  Data-Driven Layout
                </h3>
                <p className="text-muted-foreground">
                  I designed a clear, data-driven interface layout that prioritizes key information, allowing users to quickly assess the status of their assets at a glance.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <BarChart3 className="w-5 h-5" />
                  Real-Time Visualizations
                </h3>
                <p className="text-muted-foreground">
                  The design included various real-time tracking visualizations, such as charts and maps, to provide an immediate and dynamic overview of asset distribution and health.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5" />
                  Permission-Based Journeys
                </h3>
                <p className="text-muted-foreground">
                  I mapped out user journeys based on different permission levels, ensuring that administrators, managers, and regular users only see the data and controls relevant to their roles.
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
                <strong className="text-foreground">Designing for Information Density:</strong> Enterprise dashboards require balancing a high volume of data with a clean user experience. This project taught me techniques for information hierarchy and progressive disclosure.
              </p>
              <p>
                <strong className="text-foreground">Role-Based Design:</strong> Understanding and designing for different user roles and permissions is critical in enterprise software. It ensures security and relevance, preventing information overload for users.
              </p>
            </div>
          </Card>
        </section>

      </div>
    </div>
  );
};

export default AssetDashboard;