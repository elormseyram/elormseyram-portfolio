import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Sparkles, Rocket, Palette, Code2, Database, Globe, Zap, ArrowRight, Gamepad2, Star } from 'lucide-react';
import Footer from '@/components/Footer';

interface Collectible {
  id: string;
  name: string;
  icon: any;
  x: number;
  y: number;
  collected: boolean;
  description: string;
  skills: string[];
}

const LandingGame = () => {
  const navigate = useNavigate();
  const [spacecraft, setSpacecraft] = useState({ x: window.innerWidth / 2, y: window.innerHeight / 2 + 150 });
  const [selectedItem, setSelectedItem] = useState<Collectible | null>(null);
  const [collectedCount, setCollectedCount] = useState(0);
  const [showCTA, setShowCTA] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [showExitConfirmation, setShowExitConfirmation] = useState(false);
  const [targetRoute, setTargetRoute] = useState<string | null>(null);
  const [keys, setKeys] = useState({ up: false, down: false, left: false, right: false });
  const gameContainerRef = useRef<HTMLDivElement>(null);

  const [items, setItems] = useState<Collectible[]>(() => {
    const width = typeof window !== 'undefined' ? window.innerWidth : 1920;
    const height = typeof window !== 'undefined' ? window.innerHeight : 1080;
    
    return [
      {
        id: 'uiux',
        name: 'UI/UX',
        icon: Palette,
        x: width * 0.15,
        y: height * 0.2,
        collected: false,
        description: 'My mission: Designing intuitive worlds that users love to explore.',
        skills: ['Wireframing', 'Prototyping', 'Heuristics', 'Accessibility', 'User Research', 'Figma', 'Adobe', 'Canva']
      },
      {
        id: 'frontend',
        name: 'Frontend',
        icon: Code2,
        x: width * 0.85,
        y: height * 0.15,
        collected: false,
        description: 'Building beautiful, performant interfaces with modern technologies.',
        skills: ['React', 'TypeScript', 'Flutter', 'Firebase', 'Animations', 'WebSockets']
      },
      {
        id: 'backend',
        name: 'Backend & Systems',
        icon: Database,
        x: width * 0.15,
        y: height * 0.8,
        collected: false,
        description: 'Creating robust systems that power amazing experiences.',
        skills: ['Node.js', 'MongoDB', 'Firebase', 'API Design', 'Cloud Architecture']
      },
      {
        id: 'projects',
        name: 'Projects Galaxy',
        icon: Globe,
        x: width * 0.85,
        y: height * 0.8,
        collected: false,
        description: 'Explore my portfolio of innovative projects and case studies.',
        skills: ['GlobalDrive', 'ePunch', 'YF Essentials', 'Workbook']
      },
      {
        id: 'beyond',
        name: 'Beyond Code',
        icon: Zap,
        x: width * 0.5,
        y: height * 0.5,
        collected: false,
        description: 'The personality layer — what makes me, me.',
        skills: ['Hobbies', 'Fun Facts', 'Playlist', 'Personality']
      }
    ];
  });

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!gameStarted) return;
      const keyMap: { [key: string]: keyof typeof keys } = {
        'ArrowUp': 'up',
        'w': 'up',
        'W': 'up',
        'ArrowDown': 'down',
        's': 'down',
        'S': 'down',
        'ArrowLeft': 'left',
        'a': 'left',
        'A': 'left',
        'ArrowRight': 'right',
        'd': 'right',
        'D': 'right'
      };
      if (keyMap[e.key]) {
        setKeys(prev => ({ ...prev, [keyMap[e.key]]: true }));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      const keyMap: { [key: string]: keyof typeof keys } = {
        'ArrowUp': 'up',
        'w': 'up',
        'W': 'up',
        'ArrowDown': 'down',
        's': 'down',
        'S': 'down',
        'ArrowLeft': 'left',
        'a': 'left',
        'A': 'left',
        'ArrowRight': 'right',
        'd': 'right',
        'D': 'right'
      };
      if (keyMap[e.key]) {
        setKeys(prev => ({ ...prev, [keyMap[e.key]]: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted]);

  // Game loop
  useEffect(() => {
    if (!gameStarted) return;

    const gameLoop = setInterval(() => {
      setSpacecraft(prev => {
        let newX = prev.x;
        let newY = prev.y;
        const speed = 6; // Slightly slower for more challenge

        if (keys.up) newY = Math.max(50, prev.y - speed);
        if (keys.down) newY = Math.min(window.innerHeight - 100, prev.y + speed);
        if (keys.left) newX = Math.max(50, prev.x - speed);
        if (keys.right) newX = Math.min(window.innerWidth - 50, prev.x + speed);

        // Check collision with collectibles (smaller radius for more challenge)
        items.forEach(item => {
          if (!item.collected) {
            const distance = Math.sqrt(
              Math.pow(newX - item.x, 2) + Math.pow(newY - item.y, 2)
            );
            if (distance < 45) { // Reduced from 60 to 45 for more precision needed
              // Collect item
              setItems(prevItems => 
                prevItems.map(i => i.id === item.id ? { ...i, collected: true } : i)
              );
              setCollectedCount(prev => {
                const newCount = prev + 1;
                if (newCount >= items.length) {
                  setShowCTA(true);
                }
                return newCount;
              });
              setSelectedItem(item);
            }
          }
        });

        return { x: newX, y: newY };
      });
    }, 16); // ~60fps

    return () => clearInterval(gameLoop);
  }, [gameStarted, keys, items]);

  // Mouse movement (alternative control) - slower for more challenge
  useEffect(() => {
    if (!gameStarted) return;

    const handleMouseMove = (e: MouseEvent) => {
      setSpacecraft(prev => ({
        x: prev.x + (e.clientX - prev.x) * 0.3, // Slower follow for more challenge
        y: prev.y + (e.clientY - prev.y) * 0.3,
      }));
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [gameStarted]);

  const startGame = () => {
    setGameStarted(true);
  };

  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      {/* Space Background */}
      <div className="fixed inset-0 bg-gradient-to-b from-[#0a0a0f] via-[#1a0a1f] to-[#0a0a0f]" />
      
      {/* Stars */}
      <div className="fixed inset-0">
        {[...Array(100)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
              opacity: Math.random()
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div ref={gameContainerRef} className="relative z-10 min-h-screen flex flex-col">
        {!gameStarted ? (
          <div className="flex-1 flex items-center justify-center px-4 sm:px-6 pt-20 sm:pt-0">
            <div className="text-center max-w-2xl">
              <div className="flex items-center justify-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <img src="/seas-logo.png" alt="SEAS Logo" className="h-12 sm:h-16 md:h-20 w-auto" />
                <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold text-white">
                  Hi, I'm <span className="text-highlight">Senu</span>
                </h1>
              </div>
              <p className="text-base sm:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
                Collect the glowing stars to explore my universe! Use arrow keys or tap to move.
              </p>
              <div className="space-y-3 sm:space-y-4 px-4">
                <Button 
                  onClick={startGame}
                  className="btn-primary px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg w-full sm:w-auto"
                  size="lg"
                >
                  <Gamepad2 className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  Start Exploring
                </Button>
                <div>
                  <Button
                    variant="ghost"
                    onClick={() => navigate('/')}
                    className="text-sm sm:text-base text-muted-foreground hover:text-primary"
                  >
                    Skip to Portfolio →
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <>
            {/* Game UI */}
            <div className="absolute top-4 sm:top-8 left-4 sm:left-8 right-4 sm:right-8 flex justify-between items-center z-20">
              <div className="glass-card px-3 sm:px-4 py-2">
                <p className="text-xs sm:text-sm">
                  Collected: <span className="text-highlight font-bold">{collectedCount}/{items.length}</span>
                </p>
              </div>
              <Button
                variant="ghost"
                onClick={() => navigate('/')}
                className="text-xs sm:text-sm text-muted-foreground hover:text-primary px-2 sm:px-4"
              >
                <span className="hidden sm:inline">Skip</span>
                <span className="sm:hidden">→</span>
              </Button>
            </div>

            {/* Spacecraft */}
            <div
              className="fixed z-30 transition-all duration-50 ease-linear pointer-events-none"
              style={{
                left: `${spacecraft.x}px`,
                top: `${spacecraft.y}px`,
                transform: 'translate(-50%, -50%)'
              }}
            >
              <Rocket className="w-8 h-8 sm:w-10 sm:h-10 text-primary drop-shadow-lg" />
            </div>

            {/* Collectible Stars */}
            {items.map((item) => {
              if (item.collected) return null;
              const Icon = item.icon;
              const distance = Math.sqrt(
                Math.pow(spacecraft.x - item.x, 2) + Math.pow(spacecraft.y - item.y, 2)
              );
              const isNearby = distance < 70; // Reduced for more challenge

              return (
                <div
                  key={item.id}
                  className="fixed z-20 pointer-events-none"
                  style={{
                    left: `${item.x}px`,
                    top: `${item.y}px`,
                    transform: 'translate(-50%, -50%)'
                  }}
                >
                  <div
                    className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center transition-all duration-200 ${
                      isNearby
                        ? 'bg-primary/60 scale-125 animate-pulse ring-4 ring-primary/50'
                        : 'bg-primary/30 scale-100'
                    }`}
                  >
                    <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-primary drop-shadow-lg" />
                  </div>
                  {!item.collected && (
                    <p className="text-xs text-center mt-2 text-white/90 whitespace-nowrap font-medium hidden sm:block">
                      {item.name}
                    </p>
                  )}
                  {/* Glow effect */}
                  <div className="absolute inset-0 rounded-full bg-primary/20 blur-xl -z-10 animate-pulse" />
                </div>
              );
            })}

            {/* Collection Effect */}
            {items.filter(i => i.collected).map(item => (
              <div
                key={item.id}
                className="fixed z-25 pointer-events-none animate-ping"
                style={{
                  left: `${item.x}px`,
                  top: `${item.y}px`,
                  transform: 'translate(-50%, -50%)'
                }}
              >
                <Star className="w-16 h-16 text-primary" />
              </div>
            ))}

            {/* Instructions */}
            {collectedCount < items.length && (
              <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 glass-card px-6 py-3 z-20">
                <p className="text-sm text-muted-foreground text-center">
                  Move your mouse or tap to collect all stars!
                </p>
              </div>
            )}

            {/* CTA when all collected */}
            {showCTA && (
              <div className="fixed inset-0 flex items-center justify-center z-40 bg-background/90 backdrop-blur-sm">
                <Card className="glass-card p-8 max-w-md text-center mx-4">
                  <Sparkles className="w-12 h-12 text-primary mx-auto mb-4 animate-pulse" />
                  <h2 className="text-3xl font-bold mb-4">
                    All Stars <span className="text-highlight">Collected!</span>
                  </h2>
                  <p className="text-muted-foreground mb-6">
                    You've unlocked my complete universe. Ready to explore?
                  </p>
                  <Button
                    onClick={() => navigate('/')}
                    className="btn-primary px-8 py-3 text-lg"
                    size="lg"
                  >
                    Enter Portfolio
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Card>
              </div>
            )}

            {/* Item Info Card */}
            {selectedItem && (
              <div className="fixed inset-0 flex items-center justify-center z-30 bg-background/80 backdrop-blur-sm p-4">
                <Card className="glass-card p-8 max-w-lg w-full">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                        <selectedItem.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold text-highlight">{selectedItem.name}</h3>
                    </div>
                    <Button
                      variant="ghost"
                      onClick={() => setSelectedItem(null)}
                      className="text-muted-foreground"
                    >
                      ✕
                    </Button>
                  </div>
                  <p className="text-muted-foreground mb-6">{selectedItem.description}</p>
                  <div>
                    <h4 className="font-semibold mb-3 text-highlight">Skills & Tools:</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedItem.skills.map((skill) => (
                        <span
                          key={skill}
                          className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm border border-primary/20"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  {selectedItem.id === 'projects' && (
                    <Button
                      className="btn-primary w-full mt-6"
                      onClick={() => {
                        setTargetRoute('/projects');
                        setShowExitConfirmation(true);
                      }}
                    >
                      View All Projects
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                  {selectedItem.id === 'beyond' && (
                    <Button
                      onClick={() => { // Changed to trigger confirmation
                        setTargetRoute('/beyond-code');
                        setShowExitConfirmation(true);
                      }}
                      className="btn-primary w-full mt-6" 
                    >
                      Explore Beyond Code
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  )}
                </Card>
              </div>
            )}

            {/* Exit Confirmation Dialog */}
            {showExitConfirmation && (
              <div className="fixed inset-0 flex items-center justify-center z-50 bg-background/90 backdrop-blur-sm p-4">
                <Card className="glass-card p-8 max-w-md w-full text-center">
                  <h3 className="text-2xl font-bold mb-4">
                    Wouldn't you want to finish collecting the stars?
                  </h3>
                  <div className="flex justify-center gap-4 mt-6">
                    <Button
                      onClick={() => {
                        setShowExitConfirmation(false);
                        setTargetRoute(null);
                        setSelectedItem(null); // Close the item info card too
                      }}
                      className="btn-primary px-6 py-3"
                    >
                      Yes, continue game
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() => {
                        setShowExitConfirmation(false);
                        setSelectedItem(null); // Close the item info card too
                        if (targetRoute) navigate(targetRoute);
                      }}
                      className="btn-outline-primary px-6 py-3"
                    >
                      No, go to page
                    </Button>
                  </div>
                </Card>
              </div>
            )}
          </>
        )}
      </div>
      
    </div>
  );
};

export default LandingGame;