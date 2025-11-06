import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import milautoImg1 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_30_25 am.png';
import epunchImg1 from '@/assets/images/epunch/flutter-mobileapp/photo_1_2025-11-05_10-55-19.jpg';
import workbookImg from '@/assets/images/workbook/dashboard-worbook.jpg';
import yfEssentialsImg from '@/assets/images/yf-essentials/yf-essentials-figmaprototype.mp4';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const navigate = useNavigate();

  const projects = [
    {
      title: 'MilAuto Drive',
      description: 'A comprehensive web platform for auto trading, connecting buyers and sellers of vehicles with auctions, mechanics, spare parts, and blockchain-backed vehicle history. Designed for a trusted car business in Ghana.',
      tech: ['Figma', 'UI/UX Design', 'Web Design'],
      category: 'Web Platform',
      image: milautoImg1,
      route: '/projects/milauto-drive',
      company: 'Freelance - Personal Project'
    },
    {
      title: 'ePunch',
      description: 'Modern HR solution for time and attendance management using mobile and facial verification. I redesigned the mobile app UI/UX and HR dashboard, and contributed to Flutter development.',
      tech: ['Figma', 'Flutter', 'Firebase', 'UI/UX Design'],
      category: 'Mobile App & Dashboard',
      image: epunchImg1,
      route: '/projects/epunch',
      company: 'Enterprise Computing Limited'
    },
    {
      title: 'Workbook',
      description: 'All-in-one ERP fintech web application where I served as QA Engineer and designed the dashboard UI. Managed quality assurance using ClickUp and ensured seamless user experience across the platform.',
      tech: ['Figma', 'QA Testing', 'ClickUp', 'UI Design'],
      category: 'Fintech Web App',
      image: workbookImg,
      route: '/projects/workbook',
      company: 'Everything Technologies Company'
    },
    {
      title: 'YF Essentials',
      description: 'E-commerce mobile app for household cleaning essentials with delivery & pickup, product categories, cart & checkout, order tracking, loyalty points, subscriptions, and mobile money payments.',
      tech: ['Figma', 'UI/UX Design', 'Prototyping'],
      category: 'E-commerce Mobile App',
      image: yfEssentialsImg,
      route: '/projects/yf-essentials',
      company: 'Freelance'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1 }
    );

    const scrollElements = sectionRef.current?.querySelectorAll('.scroll-reveal');
    scrollElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" ref={sectionRef} className="py-20 px-6 bg-muted/5">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-highlight">Work</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest <span className="text-highlight">work</span>, combining beautiful design with functional development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.title}
              className="group glass-card overflow-hidden glow-border scroll-reveal"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-64 cursor-pointer" onClick={() => navigate(project.route)}>
                {project.image.endsWith('.mp4') ? (
                  <video 
                    src={project.image}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <Button 
                    size="sm" 
                    className="btn-primary"
                    onClick={(e) => {
                      e.stopPropagation();
                      navigate(project.route);
                    }}
                  >
                    View Case Study
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{project.company}</span>
                </div>
                
                <h3 
                  className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => navigate(project.route)}
                >
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="text-xs border-muted-foreground/30 hover:border-primary hover:text-primary transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full group-hover:text-primary transition-colors"
                  onClick={() => navigate(project.route)}
                >
                  View Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;