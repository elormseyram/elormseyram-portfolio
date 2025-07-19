import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { 
  Music, 
  Gamepad2, 
  Mountain, 
  Camera, 
  BookOpen, 
  Dumbbell,
  Palette,
  Coffee
} from 'lucide-react';

const Hobbies = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const hobbies = [
    {
      icon: Dumbbell,
      title: 'Basketball',
      description: 'Playing basketball keeps me energized and teaches me teamwork and strategy.',
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
      icon: BookOpen,
      title: 'Reading',
      description: 'Always learning about design trends, psychology, and technology innovations.',
      color: 'text-accent',
      bgColor: 'from-accent/20 to-accent/5'
    },
    {
      icon: Camera,
      title: 'Photography',
      description: 'Capturing moments and exploring composition helps improve my visual design skills.',
      color: 'text-primary',
      bgColor: 'from-primary/20 to-primary/5'
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
      title: 'Hiking',
      description: 'Nature walks clear my mind and provide fresh perspectives for creative challenges.',
      color: 'text-accent',
      bgColor: 'from-accent/20 to-accent/5'
    },
    {
      icon: Palette,
      title: 'Art',
      description: 'Sketching and digital art keep my creative muscles strong and ideas flowing.',
      color: 'text-primary',
      bgColor: 'from-primary/20 to-primary/5'
    },
    {
      icon: Coffee,
      title: 'Coffee Culture',
      description: 'Exploring different coffee shops and brewing methods - perfect for networking!',
      color: 'text-secondary',
      bgColor: 'from-secondary/20 to-secondary/5'
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
    <section id="hobbies" ref={sectionRef} className="py-20 px-6 bg-muted/5 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Beyond <span className="text-cosmic">Code</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            The hobbies and interests that fuel my creativity and keep me inspired
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-accent mx-auto rounded-full mt-6" />
        </div>

        {/* Hobbies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {hobbies.map((hobby, index) => (
            <Card
              key={hobby.title}
              className="group glass-card p-6 text-center hover:scale-105 transition-all duration-500 glow-border scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon Background */}
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br ${hobby.bgColor} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <hobby.icon className={`w-10 h-10 ${hobby.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {hobby.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground leading-relaxed">
                {hobby.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Fun Facts */}
        <div className="mt-20 scroll-reveal">
          <Card className="glass-card p-8 text-center glow-border">
            <h3 className="text-2xl font-semibold mb-6">
              <span className="text-cosmic">Fun Facts</span> About Me
            </h3>
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">🏀</div>
                <p className="text-muted-foreground">
                  Can shoot hoops while debugging code in my head
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-secondary mb-2">🎵</div>
                <p className="text-muted-foreground">
                  My design inspiration often comes from music rhythms
                </p>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent mb-2">📸</div>
                <p className="text-muted-foreground">
                  Every photo I take teaches me something about composition
                </p>
              </div>
            </div>
          </Card>
        </div>

        {/* Quote */}
        <div className="text-center mt-16 scroll-reveal">
          <blockquote className="text-2xl md:text-3xl font-medium text-muted-foreground italic max-w-3xl mx-auto">
            "Creativity is intelligence having fun. My hobbies keep that intelligence 
            <span className="text-cosmic"> playful and inspired</span>."
          </blockquote>
          <p className="text-lg text-primary mt-4">— Senu's Design Philosophy</p>
        </div>
      </div>
    </section>
  );
};

export default Hobbies;