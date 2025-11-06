import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Figma, Code2, Smartphone, Database, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import epunchFigma1 from '@/assets/images/epunch/figma-designs/photo_1_2025-11-05_10-55-50.jpg';
import epunchFigma2 from '@/assets/images/epunch/figma-designs/photo_2_2025-11-05_10-55-50.jpg';
import epunchFigma3 from '@/assets/images/epunch/figma-designs/photo_3_2025-11-05_10-55-50.jpg';
import epunchFigma4 from '@/assets/images/epunch/figma-designs/photo_4_2025-11-05_10-55-50.jpg';
import epunchFigma5 from '@/assets/images/epunch/figma-designs/photo_5_2025-11-05_10-55-50.jpg';
import epunchFlutter1 from '@/assets/images/epunch/flutter-mobileapp/photo_1_2025-11-05_10-55-19.jpg';
import epunchFlutter2 from '@/assets/images/epunch/flutter-mobileapp/photo_2_2025-11-05_10-55-19.jpg';
import epunchFlutter3 from '@/assets/images/epunch/flutter-mobileapp/photo_3_2025-11-05_10-55-19.jpg';
import epunchFlutter4 from '@/assets/images/epunch/flutter-mobileapp/photo_1_2025-11-05_10-55-33.jpg';
import epunchFlutter5 from '@/assets/images/epunch/flutter-mobileapp/photo_2_2025-11-05_10-55-33.jpg';
import epunchFlutter6 from '@/assets/images/epunch/flutter-mobileapp/photo_3_2025-11-05_10-55-33.jpg';
import epunchFlutter7 from '@/assets/images/epunch/flutter-mobileapp/photo_4_2025-11-05_10-55-33.jpg';
import epunchFlutter8 from '@/assets/images/epunch/flutter-mobileapp/photo_5_2025-11-05_10-55-33.jpg';

const EPunch = () => {
  const navigate = useNavigate();
  const figmaDesigns = [epunchFigma1, epunchFigma2, epunchFigma3, epunchFigma4, epunchFigma5];
  const flutterScreens = [epunchFlutter1, epunchFlutter2, epunchFlutter3, epunchFlutter4, epunchFlutter5, epunchFlutter6, epunchFlutter7, epunchFlutter8];

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
            Mobile App & HR Dashboard
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="text-highlight">ePunch</span>
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            Modern HR solution for time and attendance management using mobile and facial verification.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            <strong>Company:</strong> Enterprise Computing Limited
          </p>
        </div>

        {/* Hero Screenshots */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {flutterScreens.slice(0, 4).map((img, index) => (
            <Card key={index} className="glass-card p-0 overflow-hidden">
              <img src={img} alt={`ePunch Mobile App ${index + 1}`} className="w-full h-auto" />
            </Card>
          ))}
        </div>

        {/* Project Overview */}
        <section className="mb-16">
          <Card className="glass-card p-8">
            <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              <p>
                ePunch is a comprehensive HR solution designed to modernize time and attendance management for businesses. The platform combines mobile app technology with facial recognition verification to provide accurate, secure, and efficient employee attendance tracking.
              </p>
              <p>
                The business goal was to eliminate traditional time clock systems and provide a seamless, digital-first attendance solution that reduces administrative overhead while improving accuracy and preventing time theft. The platform needed to support both employee self-service and administrative oversight.
              </p>
              <p className="font-semibold text-foreground">
                Key Objectives: Streamline attendance tracking, reduce manual errors, provide real-time insights, and enhance employee experience.
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
                  <li>• Complete mobile app UI/UX redesign</li>
                  <li>• HR dashboard interface design</li>
                  <li>• User research and persona development</li>
                  <li>• Information architecture</li>
                  <li>• Wireframing and prototyping</li>
                  <li>• High-fidelity design creation</li>
                  <li>• Design system development</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Frontend Developer</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Flutter mobile app development</li>
                  <li>• Component implementation</li>
                  <li>• Firebase integration</li>
                  <li>• State management</li>
                  <li>• API integration</li>
                  <li>• Performance optimization</li>
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
                { name: 'Flutter', icon: Smartphone },
                { name: 'Firebase', icon: Database },
                { name: 'UI/UX Design', icon: Code2 },
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
                <h3 className="text-xl font-semibold mb-3 text-highlight">Mobile Attendance</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Facial verification for clock in/out</li>
                  <li>• Location-based attendance tracking</li>
                  <li>• Real-time attendance submission</li>
                  <li>• Offline mode support</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Automated Timesheets</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Automatic time calculation</li>
                  <li>• Break time tracking</li>
                  <li>• Overtime detection</li>
                  <li>• Timesheet generation</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Real-Time Tracking</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Live attendance status</li>
                  <li>• Employee location tracking</li>
                  <li>• Attendance notifications</li>
                  <li>• Dashboard analytics</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">HR Dashboard</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Employee management</li>
                  <li>• Attendance reports</li>
                  <li>• Analytics and insights</li>
                  <li>• Approval workflows</li>
                </ul>
              </div>
              <div className="md:col-span-2">
                <h3 className="text-xl font-semibold mb-3 text-highlight">Cloud Sync</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Real-time data synchronization</li>
                  <li>• Multi-device support</li>
                  <li>• Backup and recovery</li>
                  <li>• Secure data storage</li>
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
                  I conducted user research with HR managers and employees to understand pain points with existing attendance systems:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Manual time tracking was error-prone</li>
                  <li>• Employees forgot to clock in/out</li>
                  <li>• Difficulty tracking remote workers</li>
                  <li>• Time theft was a concern</li>
                  <li>• Lack of real-time visibility</li>
                </ul>
                <p className="text-muted-foreground mt-4">
                  The solution needed to be intuitive for employees while providing powerful administrative tools for HR teams.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Information Architecture</h3>
                <p className="text-muted-foreground mb-4">
                  I designed separate information architectures for the mobile app (employee-facing) and HR dashboard (admin-facing). The mobile app prioritized quick clock in/out actions, while the dashboard focused on data visualization and management tools.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Wireframes</h3>
                <p className="text-muted-foreground mb-4">
                  Low-fidelity wireframes established the core user flows, particularly the facial verification process which needed to be simple yet secure. I iterated on the clock in/out flow to minimize steps while maintaining security.
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">High-Fidelity Designs - Figma</h3>
                <p className="text-muted-foreground mb-4">
                  I created comprehensive high-fidelity designs in Figma for both the mobile app and HR dashboard, ensuring consistency across platforms while optimizing each for its specific use case.
                </p>
                <div className="grid md:grid-cols-5 gap-4 mt-4">
                  {figmaDesigns.map((img, index) => (
                    <Card key={index} className="p-2 bg-card/50 border-border">
                      <img src={img} alt={`Figma Design ${index + 1}`} className="w-full h-auto rounded" />
                    </Card>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">Flutter Implementation</h3>
                <p className="text-muted-foreground mb-4">
                  I implemented the mobile app designs using Flutter, ensuring pixel-perfect accuracy while optimizing for performance. The app integrates with Firebase for real-time data synchronization.
                </p>
                <div className="grid md:grid-cols-4 gap-4 mt-4">
                  {flutterScreens.map((img, index) => (
                    <Card key={index} className="p-2 bg-card/50 border-border">
                      <img src={img} alt={`Flutter App Screen ${index + 1}`} className="w-full h-auto rounded" />
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
                <h3 className="text-xl font-semibold mb-3 text-highlight">Mobile App Design</h3>
                <p className="text-muted-foreground">
                  The mobile app features a clean, minimalist design that prioritizes the primary action (clock in/out). Large touch targets, clear visual feedback, and intuitive navigation ensure employees can quickly complete attendance tasks. The facial verification interface is designed to be non-intimidating and user-friendly.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-3 text-highlight">HR Dashboard</h3>
                <p className="text-muted-foreground mb-4">
                  The HR dashboard provides comprehensive data visualization with:
                </p>
                <ul className="space-y-2 text-muted-foreground ml-6">
                  <li>• Real-time attendance overview</li>
                  <li>• Employee status cards</li>
                  <li>• Attendance charts and graphs</li>
                  <li>• Filter and search capabilities</li>
                  <li>• Export functionality</li>
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
                <div className="text-4xl font-bold text-highlight mb-2">✓ Live</div>
                <p className="text-muted-foreground">Platform deployed and in use</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">2 Platforms</div>
                <p className="text-muted-foreground">Mobile App & HR Dashboard</p>
              </div>
              <div>
                <div className="text-4xl font-bold text-highlight mb-2">Real-Time</div>
                <p className="text-muted-foreground">Cloud sync and tracking</p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-primary/10 rounded-lg border border-primary/20">
              <p className="text-muted-foreground">
                <strong className="text-foreground">Impact:</strong> The redesigned UI/UX significantly improved user adoption rates. The facial verification feature reduced time theft and improved accuracy. The HR dashboard provided administrators with real-time insights, reducing the time spent on attendance management by approximately 60%.
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
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Balancing Security with Usability</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> I designed the facial verification flow to be quick and intuitive. The UI provides clear feedback during the verification process, and I implemented a fallback mechanism for verification failures to prevent user frustration.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Offline Functionality</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Designed the app to store attendance data locally when offline, with automatic sync when connectivity is restored. The UI clearly indicates sync status to users.
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2 text-highlight">Challenge: Complex Data Visualization</h3>
                <p className="text-muted-foreground">
                  <strong>Solution:</strong> Created intuitive dashboard layouts with progressive disclosure - showing high-level metrics first, with detailed views available on demand. Used color coding and visual hierarchy to make complex data easily digestible.
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
                <strong className="text-foreground">Key Learnings:</strong> This project taught me the importance of designing for both end-users and administrators. I learned to balance simplicity for employees with powerful features for HR teams. Working with Flutter and Firebase taught me valuable lessons about mobile app development and real-time data synchronization.
              </p>
              <p>
                <strong className="text-foreground">Design Thinking:</strong> The facial verification feature required careful UX consideration - it needed to feel secure but not invasive. I learned to design authentication flows that build trust rather than frustration.
              </p>
              <p>
                <strong className="text-foreground">Next Steps:</strong> Future iterations could include advanced analytics, predictive attendance insights, integration with payroll systems, and enhanced reporting features. I'd also like to explore AI-powered attendance pattern recognition.
              </p>
            </div>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default EPunch;
