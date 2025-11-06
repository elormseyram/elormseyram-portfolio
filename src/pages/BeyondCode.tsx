import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Music, Sparkles, Coffee, Gamepad2, BookOpen, Heart, Zap } from 'lucide-react';

const BeyondCode = () => {
  const navigate = useNavigate();
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [bugPosition, setBugPosition] = useState({ x: 100, y: 100 });
  const [konamiCode, setKonamiCode] = useState<string[]>([]);
  const [showSecret, setShowSecret] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  // Konami code: ↑↑↓↓←→←→BA
  const konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
  
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const newCode = [...konamiCode, e.key].slice(-konamiSequence.length);
      setKonamiCode(newCode);
      
      if (newCode.join(',') === konamiSequence.join(',')) {
        setShowSecret(true);
      }
    };
    
    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [konamiCode]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
      // Bug follows cursor with slight delay (faster)
      setTimeout(() => {
        setBugPosition({ x: e.clientX - 20, y: e.clientY - 20 });
      }, 30);
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const funFacts = [
    {
      icon: Coffee,
      title: 'Favorite Snacks',
      items: ['Dark chocolate', 'Fresh fruits', 'Trail mix', 'Sometimes... code with coffee ☕']
    },
    {
      icon: Music,
      title: 'Coding Playlist',
      items: ['Lo-fi hip hop beats', 'Electronic ambient', 'Jazz for focus', 'Upbeat pop when debugging']
    },
    {
      icon: BookOpen,
      title: 'Quotes That Move Me',
      items: [
        '"Design is not just what it looks like — design is how it works."',
        '"Code is like humor. When you have to explain it, it\'s bad."',
        '"That woman? Definitely!"'
      ]
    },
    {
      icon: Zap,
      title: 'Developer Horoscope',
      items: [
        'You are a creative problem solver',
        'Bugs fear you',
        'Coffee is your best friend',
        'You see UI/UX patterns in everything'
      ]
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
    <div className="min-h-screen bg-background relative-content overflow-hidden">
      {/* Animated Bug */}
      <div
        className="fixed z-50 pointer-events-none transition-all duration-300 ease-out"
        style={{
          left: `${bugPosition.x}px`,
          top: `${bugPosition.y}px`,
          transform: 'translate(-50%, -50%)'
        }}
      >
        <div className="text-2xl animate-bounce">🐞</div>
      </div>

      <Navigation />
      <section ref={sectionRef} className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Header */}
          <div className="text-center mb-12 sm:mb-16 scroll-reveal">
            <div className="flex items-center justify-center gap-2 sm:gap-3 mb-4">
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold">
                Beyond <span className="text-highlight">Code</span>
              </h1>
              <Sparkles className="w-6 h-6 sm:w-8 sm:h-8 text-primary animate-pulse" />
            </div>
            <p className="text-base sm:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
              The personality layer — what makes me, <span className="text-highlight">me</span>
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mt-4 sm:mt-6" />
          </div>

          {/* Fun Facts Grid */}
          <div className="grid md:grid-cols-2 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {funFacts.map((fact, index) => (
              <Card
                key={fact.title}
                className="glass-card p-4 sm:p-6 glow-border scroll-reveal hover:scale-105 transition-all duration-300"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                    <fact.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-semibold text-highlight">{fact.title}</h3>
                </div>
                <ul className="space-y-2">
                  {fact.items.map((item, idx) => (
                    <li key={idx} className="flex items-start text-xs sm:text-sm text-muted-foreground">
                      <span className="text-primary mr-2 flex-shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>

          {/* Hobbies Section */}
          <div className="mb-8 sm:mb-12 scroll-reveal">
            <Card className="glass-card p-6 sm:p-8">
              <h2 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 text-highlight">Hobbies & Interests</h2>
              <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4">
                {[
                  { name: 'Basketball', icon: '🏀', desc: 'Teamwork & strategy' },
                  { name: 'Music', icon: '🎵', desc: 'Creative fuel' },
                  { name: 'Reading', icon: '📚', desc: 'Always learning' },
                  { name: 'Photography', icon: '📸', desc: 'Visual storytelling' },
                  { name: 'Gaming', icon: '🎮', desc: 'UI/UX inspiration' },
                  { name: 'Hiking', icon: '🥾', desc: 'Nature & clarity' },
                  { name: 'Art', icon: '🎨', desc: 'Creative expression' },
                  { name: 'Coffee', icon: '☕', desc: 'Culture & networking' },
                ].map((hobby, index) => (
                  <div
                    key={hobby.name}
                    className="p-4 rounded-lg bg-primary/5 hover:bg-primary/10 transition-all duration-300 hover:scale-105 group"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                      {hobby.icon}
                    </div>
                    <h4 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                      {hobby.name}
                    </h4>
                    <p className="text-xs text-muted-foreground">{hobby.desc}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Personal Quote */}
          <div className="text-center scroll-reveal">
            <Card className="glass-card p-8 max-w-3xl mx-auto">
              <Heart className="w-8 h-8 text-primary mx-auto mb-4 animate-pulse" />
              <blockquote className="text-2xl md:text-3xl font-medium text-muted-foreground italic mb-4">
                "That <span className="text-highlight">woman</span>? Definitely!"
              </blockquote>
              <p className="text-sm text-muted-foreground">
                — Senu's Life Philosophy
              </p>
            </Card>
          </div>

          {/* Secret Content */}
          {showSecret && (
            <div className="mt-12 scroll-reveal">
              <Card className="glass-card p-8 border-2 border-primary animate-pulse">
                <div className="text-center mb-6">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-spin" />
                  <h3 className="text-2xl font-bold text-highlight mb-2">
                    🎉 Secret Unlocked! 🎉
                  </h3>
                  <p className="text-muted-foreground">
                    You found the Konami code! Here's something extra:
                  </p>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-lg bg-primary/10">
                    <h4 className="font-semibold mb-2 text-highlight">Developer Horoscope</h4>
                    <p className="text-sm text-muted-foreground">
                      Today, you will debug a bug that's been haunting you. The stars align for clean code and successful deployments! ✨
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-primary/10">
                    <h4 className="font-semibold mb-2 text-highlight">Coding Mantra</h4>
                    <p className="text-sm text-muted-foreground">
                      "Code is poetry. Design is storytelling. Together, they create magic." 🪄
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BeyondCode;
