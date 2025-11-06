import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Sparkles, Palette, Code2, Lightbulb } from 'lucide-react';

type Planet = {
  id: string;
  title: string;
  subtitle: string;
  Icon: any;
  accent: string;
  
};

const RolePlanets = ({ onOpen }: { onOpen?: (id: string) => void }) => {
  const planets = useMemo<Planet[]>(() => [
    {
      id: 'design',
      title: 'Design Planet',
      subtitle: 'UI/UX • Prototyping • Accessibility',
      Icon: Palette,
      accent: 'from-pink-500/20 to-pink-500/5',
      
    },
    {
      id: 'dev',
      title: 'Development Planet',
      subtitle: 'Frontend • Systems',
      Icon: Code2,
      accent: 'from-fuchsia-500/20 to-fuchsia-500/5',
     
    },
    {
      id: 'strategy',
      title: 'Strategy Planet',
      subtitle: 'Product thinking • Writing',
      Icon: Lightbulb,
      accent: 'from-rose-500/20 to-rose-500/5',
      
    },
  ], []);

  const [flipped, setFlipped] = useState<string | null>(null);
  const details: Record<string, { title: string; bullets: string[] }> = {
    design: {
      title: 'Design in practice',
      bullets: [
        'User research → wireframes → prototypes in Figma',
        'Accessibility-first (contrast, semantics, focus order)',
        'Design systems and tokens for consistency',
      ],
    },
    dev: {
      title: 'Development in practice',
      bullets: [
        'React/TypeScript frontends with performance budgets',
        'Firebase/Node backends; structured APIs and data flow',
        'Testing and CI-friendly component architecture',
      ],
    },
    strategy: {
      title: 'Strategy in practice',
      bullets: [
        'Product discovery and scope shaping with stakeholders',
        'Clear specs, measurable outcomes, and iteration loops',
        'Documentation and crisp UX writing for clarity',
      ],
    },
  };
  return (
    <section aria-label="Where I Thrive" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold">Role/Skills <span className="text-highlight">Planets</span></h2>
          <div className="inline-flex items-center gap-2 mb-2 text-muted-foreground">
            <Sparkles className="w-4 h-4 text-primary" />
            <span>Where I Thrive</span>
          </div>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 sm:gap-6">
          {planets.map(({ id, title, subtitle, Icon, accent, }) => (
            <div key={id} className="relative [perspective:1000px]">
              <Card
  className={`relative glass-card p-6 overflow-show group cursor-pointer transition-all duration-500 [transform-style:preserve-3d] ${
    flipped === id ? '[transform:rotateY(180deg)] min-h-[400px] md:min-h-[340px]' : 'min-h-[260px] md:min-h-[300px]'
  }`}
  onClick={() => setFlipped((prev) => (prev === id ? null : id))}
>
  {/* Front Side */}
  <div className={`absolute inset-0 p-6 [backface-visibility:visible] bg-card ${ // Removed gradient for full opacity
    flipped === id ? 'opacity-0' : 'opacity-100'
  } transition-opacity duration-300`}>
    <div className={`absolute -right-10 -top-10 w-40 h-40 rounded-full bg-gradient-to-br ${accent} blur-2xl group-hover:scale-110 transition-transform`} />
    <div className="relative z-10 flex flex-col items-start gap-2">
      <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h3 className="text-lg sm:text-xl font-semibold">{title}</h3>
      <p className="text-xs sm:text-sm text-muted-foreground">{subtitle}</p>
      
      <div className="mt-4 inline-flex items-center text-primary text-sm">
        Explore more
        <span className="ml-1">→</span>
      </div>
    </div>
    <div className="absolute inset-0 pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <span
          key={i}
          className="absolute w-2 h-2 bg-primary/60 rounded-full animate-pulse"
          style={{ top: `${15 + i * 12}%`, left: `${10 + (i % 3) * 30}%`, animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  </div>

  {/* Back Side */}
  <div className={`absolute inset-0 p-6 [backface-visibility:] [transform:rotateY(180deg)] bg-gray-100 ${ // Changed background to solid gray-900
    flipped === id ? 'opacity-100' : 'opacity-0'
  } transition-opacity duration-300`}>
    <div className="relative z-10 h-full flex flex-col justify-between">
      <div className="text-left z-20">
        <h4 className="text-lg font-semibold text-black">{details[id]?.title || 'Details'}</h4>
        <ul className="mt-3 space-y-2 text-sm text-black/90">
          {(details[id]?.bullets || []).map((b) => (
            <li key={b} className="flex items-start">
              <span className="text-primary mr-2">•</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
      <div className="text-primary text-sm text-center mt-4 z-20">Tap to go back ↺</div>
    </div>
  </div>
</Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RolePlanets;
