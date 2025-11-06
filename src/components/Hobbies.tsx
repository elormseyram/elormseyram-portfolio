import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Music, 
  Gamepad2, 
  Mountain, 
  Camera, 
  BookOpen, 
  Dumbbell,
  Palette,
  Coffee,
  ArrowRight,
  DumbbellIcon
} from 'lucide-react';

const Hobbies = () => {
  const navigate = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);

  const hobbies = [
    {
      icon: DumbbellIcon,
      title: 'Sports',
      description: 'Playing sports like basketball, soccer and table tennis keeps me energized and teaches me teamwork and strategy.',
      color: 'text-primary',
      bgColor: 'from-primary/20 to-primary/5'
    },
    {
      icon: Music,
      title: 'Music',
      description: 'Listening to music fuels my creativity and helps me stay in the zone while designing.',
      color: 'text-secondary',
      bgColor: 'from-secondary/20 to-secondary/5'
    },
   
    {
      icon: Gamepad2,
      title: 'Gaming',
      description: 'Playing games inspires me with innovative UI/UX patterns and interactions.',
      color: 'text-secondary',
      bgColor: 'from-secondary/20 to-secondary/5'
    },
    {
      icon: Mountain,
      title: 'Walks',
      description: 'Nature walks clear my mind and provide fresh perspectives for creative challenges.',
      color: 'text-accent',
      bgColor: 'from-accent/20 to-accent/5'
    },
    
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
    <section id="hobbies" ref={sectionRef} className="py-12 sm:py-20 px-4 sm:px-6 bg-muted/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            Beyond <span className="text-highlight">Code</span>
          </h2>
          <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            The hobbies and interests that fuel my creativity and keep me inspired
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mt-4 sm:mt-6" />
        </div>

        {/* Hobbies Grid - New Design */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {hobbies.map((hobby, index) => (
            <Card
              key={hobby.title}
              className="group glass-card p-6 hover:shadow-lg transition-all duration-300 glow-border scroll-reveal relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Hover Effect Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-primary/5 transition-all duration-300" />
              
              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                  <hobby.icon className="w-8 h-8 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-3 text-center group-hover:text-primary transition-colors">
                  {hobby.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed text-center">
                  {hobby.description}
                </p>
              </div>

              {/* Pink Glow on Hover */}
              <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className="absolute inset-0 rounded-lg border-2 border-primary/30 animate-pulse" />
              </div>
            </Card>
          ))}
        </div>

            {/* Fun Facts */}
            <div className="mt-12 sm:mt-20 scroll-reveal">
              <Card className="glass-card p-6 sm:p-8 text-center glow-border">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                  <span className="text-highlight">Fun Facts</span> About Me
                </h3>
                <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 text-center mb-6 sm:mb-8">
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🏀</div>
                <p className="text-muted-foreground">
                  Can shoot hoops while debugging code in my head
                </p>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">🎵</div>
                <p className="text-muted-foreground">
                  My design inspiration often comes from music rhythms
                </p>
              </div>
              <div className="group">
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">📸</div>
                <p className="text-muted-foreground">
                  Every photo I take teaches me something about composition
                </p>
              </div>
            </div>
            <Button
              onClick={() => navigate('/beyond-code')}
              className="btn-primary"
            >
              Explore More About Me
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;