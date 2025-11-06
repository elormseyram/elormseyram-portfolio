import { useState, useEffect, useRef, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ArrowRight, ArrowLeft, Search, Code2, Palette, Database, CheckSquare } from 'lucide-react';
import milautoImg1 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_30_25 am.png';
import epunchImg1 from '@/assets/images/epunch/flutter-mobileapp/photo_1_2025-11-05_10-55-19.jpg';
import workbookImg from '@/assets/images/workbook/dashboard-worbook.jpg';
import yfEssentialsImg from '@/assets/images/yf-essentials/yf-essentials-figmaprototype.mp4';
import ticketmateImg from '@/assets/ticketmate.jpg';
import biciImg from '@/assets/bici image.jpg';
import cleanseGuruImg from '@/assets/cleanseguru.jpg';
import chirpImg from '@/assets/chirp.jpg';
import assetDashboardImg from '@/assets/assetdashboard.jpg';
import flyerImg from '@/assets/flyer.jpg';

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: 'UI/UX Design' | 'Frontend' | 'Backend' | 'Quality Assurance';
  image: string;
  route: string;
  company: string;
}

const projects: Project[] = [
  {
    title: 'MilAuto Drive',
    description: 'A comprehensive web platform for auto trading, connecting buyers and sellers of vehicles with auctions, mechanics, spare parts, and blockchain-backed vehicle history. Designed for a trusted car business in Ghana.',
    tech: ['Figma', 'UI/UX Design', 'Web Design', 'Adobe'],
    category: 'UI/UX Design',
    image: milautoImg1,
    route: '/projects/milauto-drive',
    company: 'Freelance - Personal Project'
  },
  {
    title: 'ePunch',
    description: 'Modern HR solution for time and attendance management using mobile and facial verification. I redesigned the mobile app UI/UX and HR dashboard, and contributed to Flutter development.',
    tech: ['Figma', 'Flutter', 'Firebase', 'UI/UX Design', 'Adobe'],
    category: 'Frontend',
    image: epunchImg1,
    route: '/projects/epunch',
    company: 'Enterprise Computing Limited'
  },
  {
    title: 'Workbook',
    description: 'All-in-one ERP fintech web application where I served as QA Engineer and designed the dashboard UI. Managed quality assurance using ClickUp and ensured seamless user experience across the platform.',
    tech: ['Figma', 'QA Testing', 'ClickUp', 'UI Design', 'Canva'],
    category: 'Quality Assurance',
    image: workbookImg,
    route: '/projects/workbook',
    company: 'Everything Technologies Company'
  },
  {
    title: 'YF Essentials',
    description: 'E-commerce mobile app for household cleaning essentials with delivery & pickup, product categories, cart & checkout, order tracking, loyalty points, subscriptions, and mobile money payments.',
    tech: ['Figma', 'UI/UX Design', 'Prototyping', 'Adobe'],
    category: 'UI/UX Design',
    image: yfEssentialsImg,
    route: '/projects/yf-essentials',
    company: 'Freelance'
  },
  {
    title: 'TicketMate',
    description: 'Designed a seamless ticket-booking experience for a school group project, focusing on user flow mapping, high-fidelity interface design, and accessibility.',
    tech: ['Figma', 'UI/UX Design', 'User Flow', 'Prototyping'],
    category: 'UI/UX Design',
    image: ticketmateImg,
    route: '/projects/ticketmate',
    company: 'School Project'
  },
  {
    title: 'Bici',
    description: 'A gamified menstrual tracking app that rewards consistency and self-care. My role involved UX research, designing gamification mechanics, and creating a friendly UI system.',
    tech: ['Figma', 'UI/UX Design', 'Gamification', 'User Research'],
    category: 'UI/UX Design',
    image: biciImg,
    route: '/projects/bici',
    company: 'Personal Project'
  },
  {
    title: 'CleanseGuru',
    description: 'A platform for booking cleaning services. As a QA Tester, I focused on functional bugs in booking/signup flows and ensured UI responsiveness across devices.',
    tech: ['Jira', 'Manual Testing', 'QA', 'UI Testing'],
    category: 'Quality Assurance',
    image: cleanseGuruImg,
    route: '/projects/cleanseguru',
    company: 'School Project'
  },
  {
    title: 'Chirp (Twitter Clone)',
    description: 'Evaluated a social microblogging app for a school project. My testing focused on post creation, feed behavior, and API call validation to improve stability.',
    tech: ['Manual Testing', 'QA Documentation', 'API Testing'],
    category: 'Quality Assurance',
    image: chirpImg,
    route: '/projects/chirp',
    company: 'School Project'
  },
  {
    title: 'Asset Management Dashboard',
    description: 'Designed an enterprise dashboard for tracking organizational assets, featuring a clear, data-driven interface, real-time tracking visualizations, and permission-based user journeys.',
    tech: ['Figma', 'UI/UX Design', 'Data Visualization', 'Dashboard Design'],
    category: 'UI/UX Design',
    image: assetDashboardImg,
    route: '/projects/asset-dashboard',
    company: 'Personal Project'
  },
  {
    title: 'Flyer Design',
    description: 'Created a promotional flyer with strong visual emphasis and message clarity, focusing on layout design, typography hierarchy, and brand-driven color palettes.',
    tech: ['Canva', 'Graphic Design', 'Branding', 'Typography'],
    category: 'UI/UX Design',
    image: flyerImg,
    route: '/projects/flyer-design',
    company: 'Graphic Design'
  },
];

const Projects = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Filter projects based on search and category
  const getFilteredProjects = () => {
    let filtered = projects;

    // Filter by category first
    if (activeCategory !== 'all') {
      filtered = filtered.filter(project => project.category === activeCategory);
    }

    // Then filter by search
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(project =>
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.company.toLowerCase().includes(query) ||
        project.category.toLowerCase().includes(query) ||
        project.tech.some(t => t.toLowerCase().includes(query))
      );
    }

    return filtered;
  };

  const filteredProjects = getFilteredProjects();

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

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'UI/UX Design':
        return Palette;
      case 'Frontend':
        return Code2;
      case 'Backend':
        return Database;
      case 'Quality Assurance':
        return CheckSquare;
      default:
        return Code2;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'UI/UX Design':
        return 'bg-purple-500/20 text-purple-600 border-purple-500/30';
      case 'Frontend':
        return 'bg-blue-500/20 text-blue-600 border-blue-500/30';
      case 'Backend':
        return 'bg-green-500/20 text-green-600 border-green-500/30';
      case 'Quality Assurance':
        return 'bg-orange-500/20 text-orange-600 border-orange-500/30';
      default:
        return 'bg-primary/20 text-primary border-primary/30';
    }
  };

  const renderProjectCard = (project: Project, index: number) => {
    const CategoryIcon = getCategoryIcon(project.category);
    return (
      <Card 
        key={project.title}
        className="group overflow-hidden scroll-reveal hover:shadow-lg transition-all duration-300 bg-card/80 backdrop-blur-xl border border-border/50"
        style={{ animationDelay: `${index * 0.2}s` }}
      >
        {/* Project Image */}
        <div className="relative overflow-hidden h-48 sm:h-64 cursor-pointer" onClick={() => navigate(project.route)}>
          {project.image.endsWith('.mp4') ? (
            <video 
              src={project.image}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              muted
              loop
              playsInline
              autoPlay
            />
          ) : (
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="absolute top-4 left-4">
            <Badge className={`${getCategoryColor(project.category)} flex items-center gap-1`}>
              <CategoryIcon className="w-3 h-3" />
              {project.category}
            </Badge>
          </div>
          <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
            <Button 
              size="sm" 
              className="bg-white text-primary border-2 border-white hover:bg-white/90 hover:text-primary shadow-lg"
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
                className={`text-xs border-muted-foreground/30 hover:border-primary hover:text-primary transition-colors ${
                  searchQuery && tech.toLowerCase().includes(searchQuery.toLowerCase()) 
                    ? 'border-primary bg-primary/10' 
                    : ''
                }`}
              >
                {tech}
              </Badge>
            ))}
          </div>

          <Button 
            variant="outline" 
            className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
            onClick={() => navigate(project.route)}
          >
            View Case Study
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </Card>
    );
  };

  const renderProjectsGrid = () => {
    if (filteredProjects.length === 0) {
      return (
        <Card className="p-8 sm:p-12 text-center bg-card/80 backdrop-blur-xl border border-border/50">
          <Search className="w-12 h-12 sm:w-16 sm:h-16 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-xl sm:text-2xl font-semibold mb-2">No projects found</h3>
          <p className="text-sm sm:text-base text-muted-foreground mb-4">
            {activeCategory !== 'all' 
              ? `No projects found in ${activeCategory} category.`
              : 'Try adjusting your search query.'}
          </p>
          {activeCategory !== 'all' && (
            <Button
              onClick={() => setActiveCategory('all')}
              variant="outline"
              className="mt-4"
            >
              Show All Projects
            </Button>
          )}
        </Card>
      );
    }

    return (
      <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
        {filteredProjects.map((project, index) => renderProjectCard(project, index))}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-background relative-content overflow-hidden">
      <Navigation />
      <section ref={sectionRef} className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Section Header */}
          <div className="text-center mb-12 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-highlight">Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Explore my work across <span className="text-highlight">design</span>, <span className="text-highlight">frontend</span>, and <span className="text-highlight">backend</span> development
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
          </div>

          {/* Search Bar */}
          <div className="mb-6 sm:mb-8 scroll-reveal">
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-3 sm:left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4 sm:w-5 sm:h-5" />
              <Input
                type="text"
                placeholder="Search by project name or tech stack..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 sm:pl-12 pr-4 py-4 sm:py-6 text-base sm:text-lg bg-card/80 backdrop-blur-xl border border-border/50"
              />
            </div>
          </div>

          {/* Category Tabs */}
          <Tabs 
            value={activeCategory} 
            onValueChange={setActiveCategory}
            className="mb-8"
          >
            <TabsList className="grid w-full max-w-4xl mx-auto grid-cols-3 sm:grid-cols-5 bg-card/80 backdrop-blur-xl border border-border/50 p-1 gap-1 h-auto flex">
              <TabsTrigger value="all" className="text-xs sm:text-sm">
                <span className="hidden sm:inline">All Projects</span>
                <span className="sm:hidden">All</span>
              </TabsTrigger>
              <TabsTrigger value="UI/UX Design" className="text-xs sm:text-sm">
                <Palette className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">UI/UX</span>
                <span className="sm:hidden">UX</span>
              </TabsTrigger>
              <TabsTrigger value="Frontend" className="text-xs sm:text-sm">
                <Code2 className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Frontend</span>
                <span className="sm:hidden">FE</span>
              </TabsTrigger>
              <TabsTrigger value="Backend" className="text-xs sm:text-sm col-span-1">
                <Database className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">Backend</span>
                <span className="sm:hidden">BE</span>
              </TabsTrigger>
              <TabsTrigger value="Quality Assurance" className="text-xs sm:text-sm col-span-1">
                <CheckSquare className="w-3 h-3 sm:w-4 sm:h-4 mr-1 sm:mr-2" />
                <span className="hidden sm:inline">QA</span>
                <span className="sm:hidden">QA</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-8">
              {renderProjectsGrid()}
            </TabsContent>

            <TabsContent value="UI/UX Design" className="mt-8">
              {renderProjectsGrid()}
            </TabsContent>

            <TabsContent value="Frontend" className="mt-8">
              {renderProjectsGrid()}
            </TabsContent>

            <TabsContent value="Backend" className="mt-8">
              {renderProjectsGrid()}
            </TabsContent>

            <TabsContent value="Quality Assurance" className="mt-8">
              {renderProjectsGrid()}
            </TabsContent>
          </Tabs>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Projects;