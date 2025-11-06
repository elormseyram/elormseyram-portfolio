import { useEffect, useState } from 'react';

const sections = [
  { id: 'hero', label: 'Hero' },
  { id: 'planets', label: 'Planets' },
  { id: 'stats', label: 'Stats' },
  { id: 'projects', label: 'Projects' },
  { id: 'tech', label: 'Tech' },
  { id: 'about', label: 'About' },
  { id: 'hobbies', label: 'Fun Facts' },
  { id: 'contact', label: 'Contact' },
];

const ProgressIndicator = () => {
  const [active, setActive] = useState<string>('hero');

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: '-40% 0px -40% 0px', threshold: 0.1 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="fixed left-3 top-1/2 -translate-y-1/2 z-30 hidden md:flex flex-col gap-2">
      {sections.map((s) => (
        <button
          key={s.id}
          onClick={() => scrollTo(s.id)}
          className={`w-2.5 h-2.5 rounded-full transition-colors ${
            active === s.id ? 'bg-primary shadow-[0_0_10px_rgba(255,30,142,0.6)]' : 'bg-white/20'
          }`}
          title={s.label}
          aria-label={`Go to ${s.label}`}
        />
      ))}
    </div>
  );
};

export default ProgressIndicator;


