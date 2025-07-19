import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
    {
      title: 'EcoTrack Mobile App',
      description: 'A comprehensive environmental tracking app built with Flutter and Firebase. Features real-time carbon footprint monitoring, sustainable lifestyle tips, and community challenges.',
      tech: ['Flutter', 'Firebase', 'UI/UX Design'],
      category: 'Mobile App',
      image: '/api/placeholder/600/400',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'FinTech Dashboard',
      description: 'Modern financial dashboard with real-time analytics, transaction tracking, and investment portfolio management. Built with React and integrated with multiple payment APIs.',
      tech: ['React', 'TypeScript', 'Figma'],
      category: 'Web App',
      image: '/api/placeholder/600/400',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'Health & Wellness Platform',
      description: 'Complete wellness platform featuring workout tracking, nutrition planning, and mental health resources. Designed for accessibility and user engagement.',
      tech: ['React', 'Node.js', 'UI/UX Design'],
      category: 'Full Stack',
      image: '/api/placeholder/600/400',
      links: {
        live: '#',
        github: '#'
      }
    },
    {
      title: 'E-Commerce Redesign',
      description: 'Complete UI/UX redesign of a major e-commerce platform, focusing on improving conversion rates and user experience through data-driven design decisions.',
      tech: ['Figma', 'Prototyping', 'User Research'],
      category: 'UI/UX Design',
      image: '/api/placeholder/600/400',
      links: {
        live: '#',
        github: '#'
      }
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
            Featured <span className="text-cosmic">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my latest work, combining beautiful design with functional development
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
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
              <div className="relative overflow-hidden h-64 bg-gradient-to-br from-primary/20 to-secondary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-6xl opacity-20">🚀</div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="flex gap-2">
                    <Button size="sm" className="btn-neon">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="border-secondary text-secondary">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </Button>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                </div>
                
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech}
                      variant="outline" 
                      className="text-xs border-muted-foreground/30 hover:border-accent hover:text-accent transition-colors"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16 scroll-reveal">
          <p className="text-lg text-muted-foreground mb-6">
            Want to see more of my work?
          </p>
          <Button className="btn-neon px-8 py-3">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;