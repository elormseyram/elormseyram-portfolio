import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowDown, Sparkles, Gamepad2, Send, Paperclip, AlertTriangle } from 'lucide-react';
import codefest4 from '@/assets/codefest4.jpg';

const Hero = () => {
  const navigate = useNavigate();
  const [currentRole, setCurrentRole] = useState(0);
  const roles = [
    'UI/UX Designer',
    'Front-End Developer',
    'Mobile App Builder',
    'QA Engineer',
    'Content Writer',
    'Creative Problem Solver'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % roles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [roles.length]);

  const scrollToProjects = () => {
    navigate('/projects');
  };

  const scrollToBeyondCode = () => {
    navigate('/beyond-code');
  };

  // plane hover interaction
  const planeRef = useRef<HTMLDivElement>(null);
  const [planePos, setPlanePos] = useState({ x: 0, y: 0 });
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMove);
    return () => window.removeEventListener('mousemove', handleMove);
  }, []);

  useEffect(() => {
    const id = requestAnimationFrame(function animate() {
      setPlanePos((prev) => ({
        x: prev.x + (mouse.x - prev.x) * 0.06,
        y: prev.y + (mouse.y - prev.y) * 0.06,
      }));
      requestAnimationFrame(animate);
    });
    return () => cancelAnimationFrame(id);
  }, [mouse.x, mouse.y]);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Light grainy pink background */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-50 via-white to-pink-50" />
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{
        backgroundImage: `repeating-linear-gradient(0deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px),repeating-linear-gradient(90deg,transparent,transparent 2px,rgba(0,0,0,0.03) 2px,rgba(0,0,0,0.03) 4px)`
      }} />

      {/* soft glows */}
      <div className="absolute inset-0">
        <div className="absolute top-10 left-0 w-56 h-56 rounded-full bg-primary/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-0 w-72 h-72 rounded-full bg-primary/10 blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
      </div>

      {/* Hologram Card */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6">
        <div className="glass-card overflow-hidden border border-primary/20 shadow-xl">
          <div className="grid md:grid-cols-[220px_1fr] gap-6 items-center p-6 md:p-10">
            {/* Left: avatar */}
            <div className="flex items-center justify-center">
              <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-2xl overflow-hidden ring-2 ring-primary/30">
                <img src={codefest4} alt="Senu Seyram Elorm Adzo" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
            </div>
            {/* Right: text */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 mb-3">
                <Sparkles className="w-5 h-5 text-primary" />
                <span className="text-sm text-white/70">My Universe, Unlocked</span>
              </div>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground">
                Senu Seyram <span className="text-highlight">Elorm Adzo</span>
              </h1>
              <p className="mt-3 text-base sm:text-lg md:text-xl text-foreground/80">
                Designer & Developer Crafting Product Experiences
              </p>
              <p className="mt-2 text-sm sm:text-base text-foreground/80">
                From concept to launch — I build experiences that work.
              </p>

              {/* Rotating skills */}
              <div className="mt-4 h-6 overflow-hidden">
                <div className="text-sm sm:text-base font-medium text-primary transition-all duration-700">
                  {roles[currentRole]}
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  onClick={() => navigate('/projects')}
                  className="btn-primary px-6 py-3 text-base group"
                >
                  Explore My Universe
                  <Send className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-0.5" />
                </Button>
                <Button
                  onClick={() => navigate('/landing')}
                  variant="outline"
                  className="btn-outline-primary px-6 py-3 text-base"
                >
                  Play Mini-Game
                  <Gamepad2 className="w-4 h-4 ml-2" />
                </Button>
              </div>
              <div className="mt-4 flex items-start gap-2 text-foreground/70">
                <AlertTriangle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-1" />
                <p className="text-sm">
                  <strong>Disclaimer:</strong> I specialize in Flutter & Dart mobile app development and UI/UX designing using Figma, but I have experience and knowledge in other roles as well.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Animated paper plane reacting to cursor */}
        <div
          ref={planeRef}
          className="pointer-events-none fixed z-20"
          style={{ left: planePos.x, top: planePos.y, transform: 'translate(-50%, -50%)' }}
        >
          <div className="w-8 h-8 text-primary drop-shadow-[0_0_8px_rgba(255,30,142,0.6)] rotate-12">
            <Paperclip className="w-8 h-8" />
          </div>
        </div>

        {/* Removed extra secondary CTAs to avoid duplication */}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
        <ArrowDown className="w-5 h-5 sm:w-6 sm:h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;