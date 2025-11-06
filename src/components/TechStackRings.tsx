import { useMemo, useState } from 'react';
import { Card } from '@/components/ui/card';

const TechStackRings = () => {
  const core = useMemo(() => ['Angular', 'React', 'Firebase', 'Node', 'Figma', 'Flutter', 'Dart'], []);
  const outer = useMemo(() => ['Tailwind', 'Notion', 'Git', 'TypeScript', 'ClickUp', 'Content Writing'], []);
  const [hover, setHover] = useState(false);
  return (
    <section aria-label="Tools in My Orbit" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold">Tools in My <span className="text-highlight">Orbit</span></h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">Hover for a pink radar ping</p>
        </div>
        <Card className="glass-card p-8">
          <div
            className="relative mx-auto w-full max-w-xl aspect-square"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
          >
            {/* orbit groups */}
            <div className={`absolute inset-0 rounded-full border border-primary/30 ${hover ? 'animate-[spin_14s_linear_infinite]' : ''}`} />
            <div className={`absolute inset-6 rounded-full border border-primary/40 ${hover ? 'animate-[spin_10s_linear_infinite_reverse]' : ''}`} />

            {/* core tools on inner ring */}
            {core.map((t, i) => {
              const angle = (i / core.length) * Math.PI * 2;
              const r = 110;
              const x = 150 + r * Math.cos(angle);
              const y = 150 + r * Math.sin(angle);
              return (
                <div
                  key={t}
                  className={`absolute text-xs sm:text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 ${hover ? 'animate-[spin_10s_linear_infinite_reverse]' : ''}`}
                  style={{
                    left: x,
                    top: y,
                    transformOrigin: '150px 150px',
                  }}
                  title={`Core: ${t}`}
                >
                  {t}
                </div>
              );
            })}

            {/* outer tools on outer ring */}
            {outer.map((t, i) => {
              const angle = (i / outer.length) * Math.PI * 2;
              const r = 170;
              const x = 150 + r * Math.cos(angle);
              const y = 150 + r * Math.sin(angle);
              return (
                <div
                  key={t}
                  className={`absolute text-xs sm:text-sm px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/30 hover:bg-primary/20 ${hover ? 'animate-[spin_14s_linear_infinite]' : ''}`}
                  style={{
                    left: x,
                    top: y,
                    transformOrigin: '150px 150px',
                  }}
                  title={`Complementary: ${t}`}
                >
                  {t}
                </div>
              );
            })}
          </div>
        </Card>
      </div>
    </section>
  );
};

export default TechStackRings;


