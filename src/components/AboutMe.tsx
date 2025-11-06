import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Figma, 
  Code2, 
  Smartphone, 
  Palette, 
  Zap, 
  Server,
  Database,
  Layers
} from 'lucide-react';

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});

  const skills = [
    { name: 'Flutter', icon: Smartphone, color: 'text-primary', description: 'Build cross-platform mobile apps with expressive UI using Flutter.' },
    { name: 'Dart', icon: Code2, color: 'text-primary', description: 'Strong Dart fundamentals for building maintainable app logic and state management.' },
    { name: 'UI/UX Design', icon: Palette, color: 'text-primary', description: 'Design mobile-first user experiences and polish interfaces for usability and delight.' },
    { name: 'React', icon: Code2, color: 'text-primary', description: 'Creating responsive web applications using React and modern web technologies.' },
    { name: 'Figma', icon: Figma, color: 'text-primary', description: 'Create high-fidelity screens, prototypes and design systems in Figma.' },
    { name: 'Firebase', icon: Database, color: 'text-primary', description: 'Integrate auth, realtime DB / Firestore, and cloud functions for mobile backends.' },
    { name: 'Mobile Design', icon: Layers, color: 'text-primary', description: 'Design patterns and components optimized for touch, accessibility and performance.' },
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
    <section ref={sectionRef} className="relative-content py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-highlight">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio */}
          <div className="scroll-reveal">
            <Card className="glass-card p-8 glow-border">
              <h3 className="text-2xl font-semibold mb-6">
                <span className="text-highlight">Designer</span>, <span className="text-highlight">Developer</span> & QA Engineer from Ghana 🇬🇭
              </h3>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  No, I'm not a jack of all trades - I'm just a simple girl with strong knowledge in{' '}
                  <span className="text-highlight font-medium">Flutter</span>,{' '}
                  <span className="text-highlight font-medium">Dart</span>, and{' '}
                  <span className="text-highlight font-medium">UI/UX design</span> using Flutter.
                </p>
                <p>
                  Based in Tema, Ghana, I focus on creating mobile experiences that are not just 
                  visually stunning, but also highly functional and user-centered. My expertise in 
                  Flutter allows me to bridge the gap between design and development, creating 
                  seamless mobile applications.
                </p>
                <p>
                  When I'm not crafting pixel-perfect interfaces or building mobile apps, 
                  you'll find me playing basketball, listening to music, or exploring the latest 
                  trends in <span className="text-highlight font-medium">mobile development</span>.
                </p>
              </div>
            </Card>
          </div>

          {/* Skills Grid */}
          <div className="scroll-reveal">
            <h3 className="text-2xl font-semibold mb-8 text-center">
              Core <span className="text-highlight">Skills</span>
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-4">
              {skills.map((skill) => (
                <Card key={skill.name} className="glass-card p-6 text-center">
                  <div className={`w-12 h-12 mx-auto mb-3 ${skill.color}`}>
                    <skill.icon className="w-full h-full" />
                  </div>
                  <h4 className="font-medium text-sm">{skill.name}</h4>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 scroll-reveal">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: '10+', label: 'Projects Completed' },
              { number: '2+', label: 'Years Experience' },
              { number: '100%', label: 'Client Satisfaction' },
              { number: '24/7', label: 'Availability' },
            ].map((stat, index) => (
              <Card key={stat.label} className="glass-card p-6 text-center">
                <div className="text-3xl font-bold text-highlight mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </Card>
            ))}
          </div>
        </div>

        {/* Specialties */}
        <div className="mt-16 scroll-reveal">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            What I <span className="text-highlight">Specialize</span> In
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                title: 'UI/UX Design',
                description: 'Creating intuitive, user-centered designs that solve real problems and delight users.',
                badge: 'Design'
              },
              {
                title: 'Full-Stack Development',
                description: 'Building complete web applications from frontend to backend with modern technologies.',
                badge: 'Development'
              },
              {
                title: 'Mobile Apps',
                description: 'Developing cross-platform mobile applications that provide native-like experiences.',
                badge: 'Mobile'
              },
              {
                title: 'Content Writer',
                description: 'Writing engaging content that tells stories and connects with audiences across platforms.',
                badge: 'Content'
              }
            ].map((specialty, index) => (
              <Card key={specialty.title} className="glass-card p-6 glow-border">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
                  {specialty.badge}
                </Badge>
                <h4 className="text-xl font-semibold mb-3">{specialty.title}</h4>
                <p className="text-muted-foreground">{specialty.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
