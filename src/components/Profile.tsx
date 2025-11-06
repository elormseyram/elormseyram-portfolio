import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import codefest4 from '@/assets/codefest4.jpg';

const Profile = () => {
  const sectionRef = useRef<HTMLElement>(null);

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
    <section id="profile" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-4xl mx-auto text-center">
        {/* Section Header */}
        <div className="mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Meet <span className="text-highlight">Senu</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
        </div>

        {/* Profile Picture */}
        <div className="scroll-reveal mb-12">
          <div className="relative inline-block">
            {/* Animated Border Ring */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary animate-spin" 
                 style={{ 
                   padding: '4px',
                   animationDuration: '8s',
                 }}>
              <div className="w-full h-full rounded-full bg-background"></div>
            </div>
            
            {/* Profile Image Container */}
            <div className="relative z-10 group">
              <div className="w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary/20 
                            shadow-2xl transition-all duration-500 group-hover:scale-105 group-hover:shadow-primary/50">
                <img 
                  src={codefest4} 
                  alt="Senu Seyram Elorm Adzo - UI/UX Designer & Developer"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Floating Particles */}
              <div className="absolute inset-0 pointer-events-none">
                {[...Array(8)].map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-2 h-2 bg-primary rounded-full opacity-60 animate-float"
                    style={{
                      top: `${20 + (i * 10)}%`,
                      left: `${10 + (i * 12)}%`,
                      animationDelay: `${i * 0.5}s`,
                      animationDuration: `${4 + (i % 3)}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-full bg-primary/10 blur-xl animate-pulse-glow"></div>
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="scroll-reveal">
          <Card className="glass-card p-6 sm:p-8 max-w-2xl mx-auto">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-center sm:text-left">
              Senu Seyram Elorm Adzo
            </h3>
            <p className="text-base sm:text-lg text-primary font-medium mb-3 sm:mb-4 text-center sm:text-left">
              UI/UX Designer & Full-Stack Developer
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 text-center sm:text-left">
              Based in Tema, Ghana 🇬🇭
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-primary">📧</span>
                <a href="mailto:seyramsenu22@gmail.com" className="break-all hover:text-primary transition-colors">
                  seyramsenu22@gmail.com
                </a>
              </div>
              <div className="flex items-center justify-center sm:justify-start gap-2">
                <span className="text-primary">📱</span>
                <a href="tel:+233596481875" className="hover:text-primary transition-colors">
                  +233 59 648 1875
                </a>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Profile;