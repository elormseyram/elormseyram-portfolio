import { useEffect, useRef } from 'react';
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
  Layers,
  Terminal
} from 'lucide-react';

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: 'Canva', icon: Palette, color: 'text-primary' },
    { name: 'Figma', icon: Figma, color: 'text-primary' },
    { name: 'HTML/CSS', icon: Code2, color: 'text-primary' },
    { name: 'React', icon: Layers, color: 'text-primary' },
    { name: 'Flutter', icon: Smartphone, color: 'text-primary' },
    { name: 'JavaScript', icon: Zap, color: 'text-primary' },
    { name: 'Firebase', icon: Database, color: 'text-primary' },
    { name: 'Node.js', icon: Server, color: 'text-primary' },
    { name: 'MongoDB', icon: Database, color: 'text-primary' },
    { name: 'Content Writing', icon: Layers, color: 'text-primary' },
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
    <section id="about" ref={sectionRef} className="py-12 sm:py-20 px-4 sm:px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 scroll-reveal">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
            About <span className="text-highlight">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Bio */}
          <div className="scroll-reveal">
            <Card className="glass-card p-6 sm:p-8 glow-border">
              <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">
                <span className="text-highlight">Designer</span>, <span className="text-highlight">Developer</span> & <span className="text-highlight">QA Engineer</span> from Ghana 🇬🇭
              </h3>
              <div className="space-y-4 text-base sm:text-lg text-muted-foreground leading-relaxed">
                <p>
                  I'm a passionate <span className="text-highlight font-medium">UI/UX Designer</span>,{' '}
                  <span className="text-foreground font-medium">Full-Stack Developer</span>,{' '}
                  <span className="text-highlight font-medium">Quality Assurance Engineer</span>, and{' '}
                  <span className="text-highlight font-medium">Content Writer</span> staying at Tema, Ghana. 
                  I create digital experiences that are not just visually stunning, but also highly functional 
                  and user-centered.
                </p>
                <p>
                  With expertise spanning from <span className="text-highlight font-medium">design thinking</span> to{' '}  
                   <span className="text-highlight font-medium">backend development</span> and {' '}
                   <span className="text-foreground font-medium">content Writing</span>, I bridge the gap 
                  between creative vision and technical implementation. My work combines beautiful aesthetics 
                  with smooth performance and engaging content.
                </p>
                <p>
                  When I'm not crafting pixel-perfect interfaces, building robust backends, or creating engaging content, 
                  you'll find me playing basketball, listening to music, or exploring the latest trends in {' '}
                  <span className="text-highlight font-medium">digital innovation</span>.
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
              {skills.map((skill, index) => (
                <Card 
                  key={skill.name}
                  className="skill-card glass-card p-6 text-center group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className={`w-12 h-12 mx-auto mb-3 ${skill.color} group-hover:scale-110 transition-transform duration-300`}>
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
                <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
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
                title: 'Content Writing',
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

export default About;