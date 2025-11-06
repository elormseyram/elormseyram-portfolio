import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';
import milautoImg1 from '@/assets/images/milautodrive/Milauto Drive - Your Trusted Auto Partner - Google Chrome 05_11_2025 10_30_25 am.png';
import epunchImg1 from '@/assets/images/epunch/flutter-mobileapp/photo_1_2025-11-05_10-55-19.jpg';
import workbookImg from '@/assets/images/workbook/dashboard-worbook.jpg';

const items = [
  { title: 'GlobalDrive Auto', route: '/projects/milauto-drive', image: milautoImg1, tag: 'Case Study' },
  { title: 'ePunch Redesign', route: '/projects/epunch', image: epunchImg1, tag: 'UI/UX + Dev' },
  { title: 'YF Essentials', route: '/projects/yf-essentials', image: workbookImg, tag: 'E‑Commerce' },
];

const ProjectsShowcase = () => {
  const navigate = useNavigate();
  return (
    <section aria-label="My Projects in Motion" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-end justify-between mb-6">
          <h2 className="text-2xl sm:text-4xl font-bold">Featured <span className="text-highlight">Achievements</span></h2>
          <button onClick={() => navigate('/projects')} className="text-sm text-primary hover:underline">
            View all
          </button>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-2 snap-x">
          {items.map((p, i) => (
            <Card key={p.title} className="min-w-[260px] sm:min-w-[340px] glass-card overflow-hidden group snap-start">
              <div className="relative h-40 sm:h-56 overflow-hidden">
                <img src={p.image} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute top-2 left-2">
                  <Badge className="bg-primary/20 text-primary border-primary/30">{p.tag}</Badge>
                </div>
              </div>
              <div className="p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">{p.title}</h3>
                  <p className="text-xs text-muted-foreground">Hover for a micro preview</p>
                </div>
                <button
                  onClick={() => navigate(p.route)}
                  className="text-primary hover:text-primary/80 transition-transform group-hover:translate-x-0.5"
                >
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;


