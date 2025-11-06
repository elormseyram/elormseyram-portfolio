import { useEffect, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Rocket, Star, Zap } from 'lucide-react';

const StatItem = ({ label, value, icon }: { label: string; value: string; icon: any }) => {
  const [shown, setShown] = useState('00');
  useEffect(() => {
    let t = 0;
    const int = setInterval(() => {
      t += 1;
      if (t >= 10) {
        setShown(value);
        clearInterval(int);
      } else {
        // quick count effect
        setShown(value.replace(/\d+/g, (m) => (Math.min(parseInt(m), t)).toString().padStart(m.length, '0')));
      }
    }, 60);
    return () => clearInterval(int);
  }, [value]);

  const Icon = icon;
  return (
    <Card className="glass-card p-5 flex items-center gap-4 overflow-hidden">
      <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
        <Icon className="w-5 h-5 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold tracking-tight text-foreground">{shown}</div>
        <div className="text-xs text-muted-foreground">{label}</div>
      </div>
    </Card>
  );
};

const StatsConstellation = () => {
  return (
    <section aria-label="Impact in Numbers" className="py-16 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-4xl font-bold">Impact in <span className="text-highlight">Numbers</span></h2>
          <p className="text-sm sm:text-base text-muted-foreground mt-2">For the people and by the people ✨</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          <StatItem label="Products designed" value="05+" icon={Rocket} />
          <StatItem label="Features shipped" value="10+" icon={Star} />
          <StatItem label="Screens prototyped" value="200+" icon={Zap} />
          <StatItem label="Years building" value="03" icon={Rocket} />
        </div>
      </div>
    </section>
  );
};

export default StatsConstellation;


