import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles } from 'lucide-react';
import heroBg from '@/assets/hero-bg.jpg';

const Hero = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'UI/UX Designer',
    'Front-End Developer',
    'Mobile App Builder',
    'Creative Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-background/40" />
      
      {/* Particles */}
      <div className="particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${8 + Math.random() * 4}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Greeting */}
        <div className="animate-fade-in">
          <p className="text-lg md:text-xl text-muted-foreground mb-4 flex items-center justify-center gap-2">
            <span>Hey, I'm</span>
            <Sparkles className="w-5 h-5 text-accent animate-pulse" />
          </p>
        </div>

        {/* Name */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-slide-up">
          <span className="text-cosmic">Senu Seyram</span>
          <br />
          <span className="text-foreground">Elorm Adzo</span>
        </h1>

        {/* Rotating Role */}
        <div className="h-16 md:h-20 mb-8 flex items-center justify-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-primary transition-all duration-1000 ease-in-out">
            {roles[currentRole]}
          </h2>
        </div>

        {/* Motto */}
        <p className="text-xl md:text-2xl text-accent font-medium mb-12 animate-fade-in" style={{ animationDelay: '0.5s' }}>
          "That woman? Definitely!"
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in" style={{ animationDelay: '0.8s' }}>
          <Button 
            onClick={scrollToAbout}
            size="lg"
            className="btn-neon px-8 py-4 text-lg font-medium min-w-[200px]"
          >
            See My Work
          </Button>
          <Button 
            onClick={scrollToContact}
            variant="outline"
            size="lg"
            className="px-8 py-4 text-lg font-medium min-w-[200px] border-secondary text-secondary hover:bg-secondary/10 hover:border-secondary-glow"
          >
            Hire Me
          </Button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-muted-foreground" />
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 rounded-full bg-primary/20 float" style={{ animationDelay: '0s' }} />
      <div className="absolute top-40 right-20 w-16 h-16 rounded-full bg-secondary/20 float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 rounded-full bg-accent/20 float" style={{ animationDelay: '4s' }} />
    </section>
  );
};

export default Hero;