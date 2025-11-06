import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Search, PenTool, Palette, Code, Rocket, Play, RotateCcw, Lock, Unlock } from 'lucide-react';

interface Door {
  id: number;
  x: number;
  unlocked: boolean;
  step: {
    icon: any;
    title: string;
    description: string;
  };
}

interface Obstacle {
  id: number;
  x: number;
  height: number;
}

const ProcessPage = () => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const [gameStarted, setGameStarted] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [showCard, setShowCard] = useState(false);
  const [player, setPlayer] = useState({ x: 100, y: 400, velocityY: 0, jumping: false, onGround: true });
  const [gameSpeed, setGameSpeed] = useState(3);
  const [keys, setKeys] = useState({ left: false, right: false, up: false });
  const animationRef = useRef<number>();

  const processSteps = [
    {
      icon: Search,
      title: 'Research',
      description: 'Deep dive into user needs, market analysis, and competitive research to understand the problem space.'
    },
    {
      icon: PenTool,
      title: 'Wireframe',
      description: 'Create low-fidelity wireframes and user flows to map out the core functionality and structure.'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Craft beautiful, pixel-perfect designs with attention to typography, color, and visual hierarchy.'
    },
    {
      icon: Code,
      title: 'Develop',
      description: 'Build responsive, performant applications using modern technologies and best practices.'
    },
    {
      icon: Rocket,
      title: 'Deliver',
      description: 'Deploy, test, and iterate based on user feedback to ensure the best possible experience.'
    }
  ];

  const [doors, setDoors] = useState<Door[]>(
    processSteps.map((step, index) => ({
      id: index,
      x: 1200 + index * 1000, // Increased spacing between doors
      unlocked: false,
      step
    }))
  );

  const [obstacles, setObstacles] = useState<Obstacle[]>([]);

  // Generate obstacles
  useEffect(() => {
    if (!gameStarted) {
      setObstacles([]);
      return;
    }
    const newObstacles: Obstacle[] = [];
    // Generate obstacles between doors, avoiding door positions
    for (let i = 0; i < 30; i++) {
      const baseX = 600 + i * 300 + Math.random() * 150;
      // Skip positions near doors
      const nearDoor = doors.some(door => Math.abs(baseX - door.x) < 200);
      if (!nearDoor) {
        newObstacles.push({
          id: i,
          x: baseX,
          height: 40 + Math.random() * 30 // Smaller obstacles (40-70 instead of 60-100)
        });
      }
    }
    setObstacles(newObstacles);
  }, [gameStarted, doors]);

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Prevent default browser behavior for arrow keys, space, and WASD
      const gameKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        ' ', 'w', 'W', 'a', 'A', 's', 'S', 'd', 'D'
      ];
      
      if (gameKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (!gameStarted || gameOver) return;
      
      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setKeys(prev => ({ ...prev, left: true }));
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setKeys(prev => ({ ...prev, right: true }));
      }
      if ((e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') && player.onGround) {
        setPlayer(prev => ({ ...prev, velocityY: -22, jumping: true, onGround: false }));
        setKeys(prev => ({ ...prev, up: true }));
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      // Prevent default browser behavior
      const gameKeys = [
        'ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight',
        ' ', 'w', 'W', 'a', 'A', 's', 'S', 'd', 'D'
      ];
      
      if (gameKeys.includes(e.key)) {
        e.preventDefault();
        e.stopPropagation();
      }

      if (e.key === 'ArrowLeft' || e.key === 'a' || e.key === 'A') {
        setKeys(prev => ({ ...prev, left: false }));
      }
      if (e.key === 'ArrowRight' || e.key === 'd' || e.key === 'D') {
        setKeys(prev => ({ ...prev, right: false }));
      }
      if (e.key === 'ArrowUp' || e.key === 'w' || e.key === 'W' || e.key === ' ') {
        setKeys(prev => ({ ...prev, up: false }));
      }
    };

    window.addEventListener('keydown', handleKeyDown, { passive: false });
    window.addEventListener('keyup', handleKeyUp, { passive: false });
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [gameStarted, gameOver, player.onGround]);

  // Game loop
  useEffect(() => {
    if (!gameStarted || gameOver || showCard) return;

    const gameLoop = () => {
      setPlayer(prev => {
        let newX = prev.x;
        let newY = prev.y;
        let newVelocityY = prev.velocityY;
        let newOnGround = prev.onGround;

        // Horizontal movement - player moves forward automatically
        if (keys.right) {
          newX += gameSpeed * 1.5; // Faster when holding right
        } else {
          newX += gameSpeed; // Auto-scroll forward
        }
        if (keys.left) {
          newX = Math.max(100, prev.x - 3); // Can move back slightly
        }

        // Gravity and jumping
        if (!prev.onGround) {
          newVelocityY += 0.9; // Gravity
          newY += newVelocityY;
          
          // Ground collision
          if (newY >= 400) {
            newY = 400;
            newVelocityY = 0;
            newOnGround = true;
          }
        }

        // Check door collision
        doors.forEach((door, index) => {
          const distance = Math.abs(newX - door.x);
          if (!door.unlocked && distance < 50 && newY >= 350 && newY <= 450) {
            // Unlock door and show card
            setDoors(prevDoors => {
              const updated = [...prevDoors];
              updated[index] = { ...updated[index], unlocked: true };
              return updated;
            });
            setCurrentStep(door.id);
            setShowCard(true);
            setGameStarted(false); // Pause game
          }
        });

        // Check obstacle collision (adjusted for smaller obstacles)
        obstacles.forEach(obstacle => {
          const obsTop = 500 - obstacle.height;
          if (
            newX + 35 > obstacle.x &&
            newX < obstacle.x + 30 &&
            newY + 60 > obsTop &&
            newY < obsTop + 10
          ) {
            // Hit obstacle - game over
            setGameOver(true);
            setGameStarted(false);
          }
        });

        return {
          x: newX,
          y: newY,
          velocityY: newVelocityY,
          jumping: !newOnGround,
          onGround: newOnGround
        };
      });

      // Move obstacles and doors (relative to player)
      setObstacles(prev => prev.map(obs => ({ ...obs, x: obs.x })));
      setGameSpeed(prev => Math.min(prev + 0.0005, 6));

      animationRef.current = requestAnimationFrame(gameLoop);
    };

    animationRef.current = requestAnimationFrame(gameLoop);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [gameStarted, gameOver, keys, doors, obstacles, gameSpeed, showCard]);

  // Draw game
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const container = canvas.parentElement;
    if (container) {
      canvas.width = container.clientWidth;
      canvas.height = 500;
    }

    const draw = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw sky gradient
      const gradient = ctx.createLinearGradient(0, 0, 0, 500);
      gradient.addColorStop(0, '#87CEEB');
      gradient.addColorStop(1, '#E0F6FF');
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, canvas.width, 500);

      // Draw ground
      ctx.fillStyle = '#4a5568';
      ctx.fillRect(0, 450, canvas.width, 50);
      
      // Draw grass
      ctx.fillStyle = '#2d5016';
      ctx.fillRect(0, 450, canvas.width, 5);

      // Draw doors
      doors.forEach(door => {
        const doorX = door.x - player.x + 100; // Relative to player
        if (doorX > -100 && doorX < canvas.width + 100) {
          ctx.fillStyle = door.unlocked ? '#48bb78' : '#cbd5e0';
          ctx.fillRect(doorX - 30, 350, 60, 100);
          ctx.fillStyle = door.unlocked ? '#2d5016' : '#718096';
          ctx.fillRect(doorX - 25, 360, 50, 80);
          
          // Door handle
          ctx.fillStyle = '#FFD700';
          ctx.fillRect(doorX + 15, 390, 5, 8);
          
          // Door icon
          ctx.fillStyle = door.unlocked ? '#48bb78' : '#FF1E8E';
          ctx.font = 'bold 24px Arial';
          ctx.textAlign = 'center';
          ctx.fillText(door.unlocked ? '✓' : '🔒', doorX, 415);
        }
      });

      // Draw obstacles
      obstacles.forEach(obstacle => {
        const obsX = obstacle.x - player.x + 100; // Relative to player
        if (obsX > -50 && obsX < canvas.width + 50) {
          const obsY = 500 - obstacle.height;
          // Obstacle shadow
          ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
          ctx.fillRect(obsX + 3, 500, 30, 3);
          
          // Obstacle body (smaller)
          ctx.fillStyle = '#e53e3e';
          ctx.fillRect(obsX, obsY, 30, obstacle.height);
          
          // Obstacle top
          ctx.fillStyle = '#c53030';
          ctx.fillRect(obsX - 3, obsY, 36, 8);
          
          // Obstacle highlight
          ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
          ctx.fillRect(obsX + 3, obsY + 3, 10, 10);
        }
      });

      // Draw player (Mario-style)
      const playerX = 100; // Fixed position on screen
      const playerY = player.y;
      
      // Player shadow
      ctx.fillStyle = 'rgba(0, 0, 0, 0.3)';
      ctx.beginPath();
      ctx.ellipse(playerX + 20, 460, 15, 5, 0, 0, 2 * Math.PI);
      ctx.fill();
      
      // Player body
      ctx.fillStyle = '#FF1E8E';
      ctx.fillRect(playerX, playerY, 40, 60);
      
      // Player details
      ctx.fillStyle = '#ffffff';
      ctx.fillRect(playerX + 8, playerY + 10, 24, 20); // Face
      ctx.fillStyle = '#000000';
      ctx.fillRect(playerX + 12, playerY + 15, 4, 4); // Left eye
      ctx.fillRect(playerX + 24, playerY + 15, 4, 4); // Right eye
      ctx.fillRect(playerX + 15, playerY + 22, 10, 2); // Mouth
      
      // Arms
      ctx.fillStyle = '#FF1E8E';
      ctx.fillRect(playerX - 5, playerY + 20, 8, 20);
      ctx.fillRect(playerX + 37, playerY + 20, 8, 20);
      
      // Legs
      ctx.fillStyle = '#c53030';
      ctx.fillRect(playerX + 5, playerY + 55, 12, 5);
      ctx.fillRect(playerX + 23, playerY + 55, 12, 5);
    };

    // Initial draw
    draw();
    
    // Animation loop - always runs but only updates when game is active
    let animationId: number;
    const animate = () => {
      draw();
      animationId = requestAnimationFrame(animate);
    };
    
    animationId = requestAnimationFrame(animate);
    
    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
    }, [gameStarted, gameOver, player, doors, obstacles, showCard]);

  const startGame = () => {
    setGameStarted(true);
    setGameOver(false);
    setPlayer({ x: 100, y: 400, velocityY: 0, jumping: false, onGround: true });
    setGameSpeed(3);
  };

  const continueGame = () => {
    setShowCard(false);
    setGameStarted(true);
  };

  const resetGame = () => {
    setGameStarted(false);
    setGameOver(false);
    setCurrentStep(0);
    setShowCard(false);
    setPlayer({ x: 100, y: 400, velocityY: 0, jumping: false, onGround: true });
    setGameSpeed(3);
    setDoors(processSteps.map((step, index) => ({
      id: index,
      x: 1200 + index * 1000,
      unlocked: false,
      step
    })));
  };

  const CurrentStepIcon = processSteps[currentStep]?.icon || Search;

  return (
    <div className="min-h-screen bg-background relative-content">
      <Navigation />
      <section className="py-20 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              My <span className="text-highlight">Design</span> Process
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Play through my design process! Move forward, jump over obstacles, and unlock each step.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full" />
          </div>

          {/* Game Area - Side by Side Layout */}
          <div className="grid lg:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-8">
            {/* Game Canvas - Takes 2 columns */}
            <div className="lg:col-span-2">
              <Card className="glass-card p-4 sm:p-6">
                <div className="mb-4 flex flex-col gap-3 sm:gap-4">
                  <div className="flex flex-wrap gap-2 sm:gap-4">
                    <Button
                      onClick={startGame}
                      disabled={gameStarted && !gameOver}
                      className="btn-primary text-sm sm:text-base"
                    >
                      <Play className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      {gameStarted ? 'Playing...' : 'Start Game'}
                    </Button>
                    <Button
                      onClick={resetGame}
                      variant="outline"
                      className="btn-outline-primary text-sm sm:text-base"
                    >
                      <RotateCcw className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Reset
                    </Button>
                  </div>
                  <div className="text-xs sm:text-sm text-muted-foreground">
                    Use Arrow Keys or WASD to move • Space to jump
                  </div>
                </div>

                <div className="relative bg-gradient-to-b from-blue-400 to-blue-600 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                  <canvas
                    ref={canvasRef}
                    className="w-full h-full block"
                    style={{ height: '400px', width: '100%' }}
                  />
                  
                  {/* Game Over Overlay */}
                  {gameOver && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <Card className="glass-card p-8 text-center max-w-md mx-4">
                        <h3 className="text-2xl font-bold text-red-500 mb-4">Game Over!</h3>
                        <p className="text-muted-foreground mb-6">
                          You hit an obstacle! Try again and remember to jump over them.
                        </p>
                        <Button onClick={resetGame} className="btn-primary">
                          Try Again
                        </Button>
                      </Card>
                    </div>
                  )}

                  {/* Win Condition */}
                  {currentStep >= processSteps.length - 1 && doors[doors.length - 1]?.unlocked && (
                    <div className="absolute inset-0 bg-black/70 flex items-center justify-center">
                      <Card className="glass-card p-8 text-center max-w-md mx-4">
                        <h3 className="text-2xl font-bold text-highlight mb-4">🎉 Complete!</h3>
                        <p className="text-muted-foreground mb-6">
                          You've unlocked all design process steps!
                        </p>
                        <Button onClick={() => navigate('/contact')} className="btn-primary">
                          Start Your Project
                        </Button>
                      </Card>
                    </div>
                  )}
                </div>
              </Card>
            </div>

                {/* Process Step Card - Takes 1 column */}
                <div className="lg:col-span-1">
                  {showCard && processSteps[currentStep] ? (
                    <Card className="glass-card p-4 sm:p-6 sticky top-4 sm:top-6">
                      <div className="flex flex-col items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                        <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center">
                          <CurrentStepIcon className="w-6 h-6 sm:w-8 sm:h-8 text-primary" />
                        </div>
                        <div className="text-center">
                          <h3 className="text-xl sm:text-2xl font-bold text-highlight">{processSteps[currentStep].title}</h3>
                          <p className="text-xs sm:text-sm text-muted-foreground">Step {currentStep + 1} of {processSteps.length}</p>
                        </div>
                      </div>
                      <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed text-center">
                        {processSteps[currentStep].description}
                      </p>
                      <Button onClick={continueGame} className="btn-primary w-full text-sm sm:text-base">
                        Continue Journey
                        <ArrowLeft className="w-3 h-3 sm:w-4 sm:h-4 ml-2 rotate-180" />
                      </Button>
                    </Card>
                  ) : (
                    <Card className="glass-card p-4 sm:p-6">
                      <div className="text-center">
                        <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-highlight">Game Progress</h3>
                    <div className="space-y-3">
                      {processSteps.map((step, index) => {
                        const StepIcon = step.icon;
                        const isUnlocked = doors[index]?.unlocked || false;
                        return (
                          <div
                            key={index}
                            className={`flex items-center gap-3 p-3 rounded-lg transition-all ${
                              isUnlocked ? 'bg-primary/10 border border-primary/30' : 'bg-muted/50'
                            }`}
                          >
                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                              isUnlocked ? 'bg-primary/20' : 'bg-muted'
                            }`}>
                              {isUnlocked ? (
                                <StepIcon className="w-4 h-4 text-primary" />
                              ) : (
                                <Lock className="w-4 h-4 text-muted-foreground" />
                              )}
                            </div>
                            <span className={`text-sm font-medium ${
                              isUnlocked ? 'text-foreground' : 'text-muted-foreground'
                            }`}>
                              {step.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </Card>
              )}
            </div>
          </div>

        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProcessPage;