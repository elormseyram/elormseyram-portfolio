import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Briefcase } from 'lucide-react';
import milautoImg1 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_30_25 am.png';
import epunchImg1 from '@/assets/images/epunch/flutter-mobileapp/photo_1_2025-11-05_10-55-19.jpg';
import workbookImg from '@/assets/images/workbook/dashboard-worbook.jpg';
import yfEssentialsImg from '@/assets/images/yf-essentials/yf-essentials-figmaprototype.mp4';

const ProjectsPreview = () => {
  const navigate = useNavigate();

  const featuredProjects = [
    {
      title: 'MilAuto Drive',
      description: 'A comprehensive web platform for auto trading with blockchain-backed vehicle history.',
      tech: ['Figma', 'UI/UX Design', 'Web Design'],
      category: 'UI/UX Design',
      image: milautoImg1,
      route: '/projects/milauto-drive',
    },
    {
      title: 'ePunch',
      description: 'Modern HR solution for time and attendance management using mobile and facial verification.',
      tech: ['Flutter', 'Firebase', 'UI/UX Design'],
      category: 'Frontend',
      image: epunchImg1,
      route: '/projects/epunch',
    },
    {
      title: 'Workbook',
      description: 'All-in-one ERP fintech web application with QA engineering and dashboard design.',
      tech: ['Figma', 'QA Testing', 'ClickUp'],
      category: 'Quality Assurance',
      image: workbookImg,
      route: '/projects/workbook',
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-highlight">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            A showcase of my latest <span className="text-highlight">work</span>, combining beautiful design with functional development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {featuredProjects.map((project, index) => (
            <Card
              key={project.title}
              className="group glass-card overflow-hidden glow-border scroll-reveal hover:shadow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden h-40 sm:h-48 cursor-pointer" onClick={() => navigate(project.route)}>
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
              </div>

              {/* Project Info */}
              <div className="p-6">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  {project.category}
                </Badge>
                <h3
                  className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors cursor-pointer"
                  onClick={() => navigate(project.route)}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <Badge
                      key={tech}
                      variant="outline"
                      className="text-xs border-muted-foreground/30"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center scroll-reveal">
          <Button
            onClick={() => navigate('/projects')}
            size="lg"
            className="btn-primary px-8 py-6 text-lg"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            View Projects Collection
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsPreview;
