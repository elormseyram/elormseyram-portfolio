import { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowLeft, Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, Sparkles, Trophy, Timer, Target, HelpCircle, Keyboard, Volume2, VolumeX } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import emailjs from '@emailjs/browser';

type SubmissionState = 'form' | 'prompt' | 'game' | 'thanks';

interface RankingEntry {
  id: string;
  name: string;
  score: number;
  date: string;
  weekKey: string; // Week identifier (YYYY-WW format)
}

// Get current week key (YYYY-WW format, e.g., "2025-47")
const getCurrentWeekKey = (): string => {
  const now = new Date();
  const startOfYear = new Date(now.getFullYear(), 0, 1);
  const pastDaysOfYear = (now.getTime() - startOfYear.getTime()) / 86400000;
  const weekNumber = Math.ceil((pastDaysOfYear + startOfYear.getDay() + 1) / 7);
  return `${now.getFullYear()}-${weekNumber.toString().padStart(2, '0')}`;
};

const getStoredRankings = (): RankingEntry[] => {
  if (typeof window === 'undefined') return [];
  try {
    const stored = localStorage.getItem('hoops-rankings');
    if (!stored) return [];
    
    const allRankings: RankingEntry[] = JSON.parse(stored);
    const currentWeekKey = getCurrentWeekKey();
    
    // Filter to only current week's rankings
    const currentWeekRankings = allRankings.filter(r => r.weekKey === currentWeekKey);
    
    // If no current week data exists, clear old data and return empty
    if (currentWeekRankings.length === 0 && allRankings.length > 0) {
      // Clear old data
      localStorage.setItem('hoops-rankings', JSON.stringify([]));
      return [];
    }
    
    return currentWeekRankings.sort((a, b) => b.score - a.score).slice(0, 10);
  } catch {
    return [];
  }
};

// Clear all rankings (for fresh start)
const clearAllRankings = () => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem('hoops-rankings');
  }
};

const BasketballGame = ({ playerName, onExit }: { playerName: string; onExit: () => void }) => {
  const [rankings, setRankings] = useState<RankingEntry[]>(() => getStoredRankings());
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameFinished, setGameFinished] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);
  const [score, setScore] = useState(0);
  const [shotsRemaining, setShotsRemaining] = useState(15);
  const [power, setPower] = useState(0);
  const [statusMessage, setStatusMessage] = useState('Press SPACEBAR (desktop) or TAP (mobile) when the power meter is in the sweet spot!');
  const [showHelp, setShowHelp] = useState(false);
  const [ballPosition, setBallPosition] = useState({ x: 50, y: 85, shooting: false, inNet: false, hitRim: false, power: 0, onFloor: false });
  const [musicEnabled, setMusicEnabled] = useState(true);
  const [soundEnabled, setSoundEnabled] = useState(true);
  const directionRef = useRef(1);
  const powerRef = useRef(0);
  const gameAreaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isPlaying) return;
    if (timeLeft <= 0) {
      finishGame(score);
      return;
    }
    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [isPlaying, timeLeft, score]);

  useEffect(() => {
    if (!isPlaying) return;
    const interval = setInterval(() => {
      setPower((prev) => {
        let next = prev + directionRef.current * 5;
        if (next >= 100) {
          next = 100;
          directionRef.current = -1;
        } else if (next <= 0) {
          next = 0;
          directionRef.current = 1;
        }
        powerRef.current = next; // Keep ref in sync
        return next;
      });
    }, 80);
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Initialize rankings on mount - weekly system handles filtering
  useEffect(() => {
    if (typeof window === 'undefined') return;
    // Load current week's rankings (weekly system automatically filters)
    const currentRankings = getStoredRankings();
    setRankings(currentRankings);
    
    // One-time migration: Clear old data without weekKey (fresh start)
    try {
      const stored = localStorage.getItem('hoops-rankings');
      if (stored) {
        const allRankings: RankingEntry[] = JSON.parse(stored);
        const hasOldData = allRankings.some(r => !r.weekKey);
        if (hasOldData) {
          // Clear all old data and start fresh with weekly system
          clearAllRankings();
          setRankings([]);
        }
      }
    } catch {
      // If error, just use current rankings
    }
  }, []);

  // Save rankings to localStorage (only current week)
  useEffect(() => {
    if (typeof window === 'undefined') return;
    const currentWeekKey = getCurrentWeekKey();
    
    // Get all stored rankings
    try {
      const stored = localStorage.getItem('hoops-rankings');
      let allRankings: RankingEntry[] = stored ? JSON.parse(stored) : [];
      
      // Remove old week data and add current week's rankings
      allRankings = allRankings.filter(r => r.weekKey !== currentWeekKey);
      allRankings = [...allRankings, ...rankings];
      
      localStorage.setItem('hoops-rankings', JSON.stringify(allRankings));
    } catch {
      localStorage.setItem('hoops-rankings', JSON.stringify(rankings));
    }
  }, [rankings]);

  // Generate sounds using Web Audio API
  const playSwishSound = useCallback(() => {
    if (!soundEnabled) return;
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(200, audioContext.currentTime + 0.15);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.15);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.15);
  }, [soundEnabled]);

  const playRimSound = useCallback(() => {
    if (!soundEnabled) return;
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(300, audioContext.currentTime);
    oscillator.frequency.exponentialRampToValueAtTime(150, audioContext.currentTime + 0.2);
    oscillator.type = 'square';
    
    gainNode.gain.setValueAtTime(0.2, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + 0.2);
  }, [soundEnabled]);

  // Handle background music - simple tone loop
  useEffect(() => {
    if (!isPlaying || !musicEnabled) return;
    
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    let interval: number;
    
    const playTone = () => {
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);
      
      oscillator.frequency.value = 220; // A3 note
      oscillator.type = 'sine';
      
      gainNode.gain.setValueAtTime(0.05, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
      
      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + 0.5);
    };
    
    // Play a subtle tone every 2 seconds
    interval = window.setInterval(playTone, 2000);
    
    return () => {
      clearInterval(interval);
      audioContext.close();
    };
  }, [isPlaying, musicEnabled]);

  const startGame = () => {
    setIsPlaying(true);
    setGameFinished(false);
    setTimeLeft(30);
    setScore(0);
    setShotsRemaining(15);
    setPower(0);
    powerRef.current = 0;
    setBallPosition({ x: 50, y: 85, shooting: false, inNet: false, hitRim: false, power: 0, onFloor: false });
    setStatusMessage('Press SPACEBAR (desktop) or TAP anywhere (mobile) when the power meter is in the sweet spot!');
    directionRef.current = 1;
  };

  const finishGame = useCallback((finalScore: number) => {
    setIsPlaying(false);
    setGameFinished((prev) => {
      if (prev) return prev;
      const currentWeekKey = getCurrentWeekKey();
      const entry: RankingEntry = {
        id: Date.now().toString(),
        name: playerName || 'Guest Hooper',
        score: finalScore,
        date: new Date().toISOString(),
        weekKey: currentWeekKey
      };
      setRankings((prevRankings) => {
        // Only keep current week's rankings
        const currentWeekRankings = prevRankings.filter(r => r.weekKey === currentWeekKey);
        const updated = [...currentWeekRankings, entry].sort((a, b) => b.score - a.score).slice(0, 10);
        return updated;
      });
      return true;
    });
  }, [playerName]);

  const handleShoot = useCallback(() => {
    if (!isPlaying || shotsRemaining <= 0 || ballPosition.shooting) return;
    
    // Capture power at the moment of shooting
    const capturedPower = powerRef.current;
    
    // Animate ball shooting - first phase: ball goes up from bottom
    setBallPosition({ x: 50, y: 85, shooting: true, inNet: false, hitRim: false, power: capturedPower, onFloor: false });
    
    // Ball travels upward toward rim (intermediate animation)
    setTimeout(() => {
      setBallPosition({ x: 50, y: 25, shooting: true, inNet: false, hitRim: false, power: capturedPower, onFloor: false });
    }, 300);
    
    // After ball reaches rim height, check if it goes in based on power
    setTimeout(() => {
      const target = 72;
      const difference = Math.abs(capturedPower - target);
      let earned = 0;
      let madeShot = false;
      let shotType: 'perfect' | 'good' | 'decent' | 'rim' | 'overshoot' | 'undershoot' = 'rim';
      
      // Power too high - overshoots
      if (capturedPower > 90) {
        setStatusMessage('Too much power! Shot over the rim!');
        shotType = 'overshoot';
        madeShot = false;
        setBallPosition({ x: 50, y: 15, shooting: true, inNet: false, hitRim: false, power: capturedPower, onFloor: false });
      }
      // Power too low - doesn't reach
      else if (capturedPower < 30) {
        setStatusMessage('Not enough power! Shot falls short!');
        shotType = 'undershoot';
        madeShot = false;
        setBallPosition({ x: 50, y: 40, shooting: true, inNet: false, hitRim: false, power: capturedPower, onFloor: false });
      }
      // Perfect shot
      else if (difference <= 6) {
        earned = 3;
        setStatusMessage('Perfect swish! +3');
        madeShot = true;
        shotType = 'perfect';
        if (soundEnabled) {
          playSwishSound();
        }
      }
      // Good shot
      else if (difference <= 14) {
        earned = 2;
        setStatusMessage('Net splash! +2');
        madeShot = true;
        shotType = 'good';
        if (soundEnabled) {
          playSwishSound();
        }
      }
      // Decent shot
      else if (difference <= 22) {
        earned = 1;
        setStatusMessage('Friendly bounce! +1');
        madeShot = true;
        shotType = 'decent';
        if (soundEnabled) {
          playSwishSound();
        }
      }
      // Hits rim
      else {
        setStatusMessage('Off the rim — keep trying!');
        madeShot = false;
        shotType = 'rim';
        setBallPosition({ x: 50, y: 22, shooting: true, inNet: false, hitRim: true, power: capturedPower, onFloor: false });
        if (soundEnabled) {
          playRimSound();
        }
      }
      
      // If shot is made, show ball going through net and landing on floor
      if (madeShot) {
        setTimeout(() => {
          // Ball goes through net (at rim level)
          setBallPosition({ x: 50, y: 20, shooting: true, inNet: true, hitRim: false, power: capturedPower, onFloor: false });
          // Ball falls through net and lands on floor
          setTimeout(() => {
            setBallPosition({ x: 50, y: 95, shooting: true, inNet: false, hitRim: false, power: capturedPower, onFloor: true });
            // Wait a moment to see the ball on floor, then reset
            setTimeout(() => {
              setScore((prev) => {
                const newScore = prev + earned;
                const remaining = shotsRemaining - 1;
                setShotsRemaining(remaining);
                
                // Reset ball position
                setBallPosition({ x: 50, y: 85, shooting: false, inNet: false, hitRim: false, power: 0, onFloor: false });
                
                if (remaining <= 0) {
                  finishGame(newScore);
                }
                return newScore;
              });
            }, 600);
          }, 500);
        }, 200);
      } else {
        // Miss - ball bounces off rim, overshoots, or falls short
        const missDelay = shotType === 'overshoot' ? 400 : shotType === 'undershoot' ? 1000 : 800;
        setTimeout(() => {
          setScore((prev) => {
            const newScore = prev + earned;
            const remaining = shotsRemaining - 1;
            setShotsRemaining(remaining);
            
              // Reset ball position
              setBallPosition({ x: 50, y: 85, shooting: false, inNet: false, hitRim: false, power: 0, onFloor: false });
            
            if (remaining <= 0) {
              finishGame(newScore);
            }
            return newScore;
          });
        }, missDelay);
      }
    }, 600); // Time for ball to reach rim (300ms upward travel + 300ms at rim)
  }, [isPlaying, shotsRemaining, ballPosition.shooting, finishGame, soundEnabled, playSwishSound, playRimSound]);

  // Keyboard controls for desktop
  useEffect(() => {
    if (!isPlaying || gameFinished) return;
    
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        e.preventDefault();
        handleShoot();
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isPlaying, gameFinished, handleShoot]);

  // Mobile: tap anywhere on screen
  useEffect(() => {
    if (!isPlaying || gameFinished || !gameAreaRef.current) return;
    
    const handleTap = (e: TouchEvent | MouseEvent) => {
      if (e.target === gameAreaRef.current || gameAreaRef.current?.contains(e.target as Node)) {
        e.preventDefault();
        handleShoot();
      }
    };

    const gameArea = gameAreaRef.current;
    if (gameArea) {
      gameArea.addEventListener('touchstart', handleTap);
      gameArea.addEventListener('click', handleTap);
      return () => {
        gameArea.removeEventListener('touchstart', handleTap);
        gameArea.removeEventListener('click', handleTap);
      };
    }
  }, [isPlaying, gameFinished, handleShoot]);


  useEffect(() => {
    if (!isPlaying || gameFinished) return;
    if (timeLeft <= 0) {
      finishGame(score);
    }
  }, [timeLeft, isPlaying, gameFinished, score, finishGame]);

  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <div className="flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-primary" />
          <h3 className="text-2xl font-semibold">Arcade Hoops</h3>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowHelp(!showHelp)}
            className="ml-2"
          >
            <HelpCircle className="w-4 h-4" />
          </Button>
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMusicEnabled(!musicEnabled)}
            className="ml-2"
            title={musicEnabled ? 'Disable music' : 'Enable music'}
          >
            {musicEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
          </Button>
        </div>
        <p className="text-muted-foreground text-sm">
          {isPlaying ? 'Sink as many shots as you can in 30 seconds or 15 attempts.' : 'Ready to shoot some hoops while you wait?'}
        </p>
      </div>

      {showHelp && (
        <Card className="glass-card p-4 space-y-3">
          <h4 className="font-semibold flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-primary" />
            How to Play
          </h4>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p><strong className="text-foreground">Desktop/Laptop:</strong> Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">SPACEBAR</kbd> when the power meter is in the sweet spot (around 72%) to shoot.</p>
            <p><strong className="text-foreground">Mobile:</strong> Tap anywhere on the screen when the power meter is in the sweet spot to shoot.</p>
            <p><strong className="text-foreground">Scoring:</strong></p>
            <ul className="list-disc list-inside ml-2 space-y-1">
              <li>Perfect shot (within 6% of target): <span className="text-primary font-semibold">+3 points</span></li>
              <li>Good shot (within 14%): <span className="text-primary font-semibold">+2 points</span></li>
              <li>Decent shot (within 22%): <span className="text-primary font-semibold">+1 point</span></li>
              <li>Miss: <span className="text-muted-foreground">0 points</span></li>
            </ul>
            <p><strong className="text-foreground">Game End:</strong> Game ends when you run out of time (30s) or shots (15 attempts).</p>
          </div>
        </Card>
      )}

      <div className="glass-card p-4 space-y-4">
        <div className="grid grid-cols-3 gap-3 text-center">
          <div>
            <Timer className="w-5 h-5 mx-auto text-primary" />
            <p className="text-xs text-muted-foreground">Time</p>
            <p className="text-lg font-semibold">{Math.max(timeLeft, 0)}s</p>
          </div>
          <div>
            <Target className="w-5 h-5 mx-auto text-primary" />
            <p className="text-xs text-muted-foreground">Shots Left</p>
            <p className="text-lg font-semibold">{shotsRemaining}</p>
          </div>
          <div>
            <Trophy className="w-5 h-5 mx-auto text-primary" />
            <p className="text-xs text-muted-foreground">Score</p>
            <p className="text-lg font-semibold">{score}</p>
          </div>
        </div>

        {/* Basketball Court Visual - Realistic Style */}
        <div 
          ref={gameAreaRef}
          className="relative w-full h-80 rounded-lg overflow-hidden"
          style={{ minHeight: '320px', background: 'linear-gradient(to bottom, #8B4513 0%, #A0522D 50%, #DC143C 50%, #B22222 100%)' }}
        >
          {/* Brick Wall Background */}
          <div 
            className="absolute inset-0"
            style={{
              backgroundImage: `
                repeating-linear-gradient(0deg, transparent, transparent 20px, rgba(139, 69, 19, 0.3) 20px, rgba(139, 69, 19, 0.3) 22px),
                repeating-linear-gradient(90deg, transparent, transparent 40px, rgba(139, 69, 19, 0.2) 40px, rgba(139, 69, 19, 0.2) 42px)
              `,
              backgroundSize: '42px 22px',
              backgroundColor: '#CD853F'
            }}
          />

          {/* Red Court Floor (bottom half) */}
          <div className="absolute bottom-0 left-0 right-0 h-1/2" style={{ background: 'linear-gradient(to bottom, #DC143C, #B22222)' }}>
            {/* Court markings */}
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-32 border-2 border-white/30 rounded-full" style={{ borderStyle: 'dashed' }}></div>
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-24 border-t-2 border-white/20"></div>
          </div>

          {/* Hoop Support Pole */}
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-2 h-32 bg-white shadow-lg"></div>

          {/* Basketball Hoop */}
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 z-10">
            {/* Backboard */}
            <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 w-24 h-14 bg-white border-4 border-red-600 rounded shadow-2xl">
              <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-16 h-10 border-2 border-red-600 rounded-sm"></div>
            </div>
            
            {/* Rim and Net - Realistic Basketball Net */}
            <div className="relative w-28 h-36 mt-2">
              <svg viewBox="0 0 120 140" className="w-full h-full" style={{ transform: 'perspective(200px) rotateX(15deg)' }}>
                {/* Rim - viewed from angle (ellipse, not circle) */}
                <ellipse
                  cx="60"
                  cy="50"
                  rx="42"
                  ry="28"
                  fill="none"
                  stroke="#DC143C"
                  strokeWidth="6"
                  className="drop-shadow-2xl"
                />
                {/* Rim inner edge - smaller ellipse */}
                <ellipse
                  cx="60"
                  cy="50"
                  rx="38"
                  ry="25"
                  fill="none"
                  stroke="#FF4500"
                  strokeWidth="3"
                />
                {/* Rim top edge highlight */}
                <ellipse
                  cx="60"
                  cy="48"
                  rx="40"
                  ry="26"
                  fill="none"
                  stroke="#FF6B6B"
                  strokeWidth="2"
                  opacity="0.6"
                />
                
                {/* Realistic Net - 18 strands forming a cone shape (like real basketball nets) */}
                {/* Front layer strands - starting from bottom edge of rim, hanging down */}
                {Array.from({ length: 18 }, (_, i) => {
                  const angle = (i / 18) * 2 * Math.PI;
                  // Rim bottom edge: cy=50, ry=28, so bottom edge is at y = 50 + 28 = 78
                  const rimX = 60 + Math.cos(angle) * 40;
                  const rimY = 78; // Start from bottom edge of rim
                  const bottomX = 60 + Math.cos(angle) * 30;
                  const bottomY = 115; // Net extends further down
                  return (
                    <line
                      key={`front-strand-${i}`}
                      x1={rimX}
                      y1={rimY}
                      x2={bottomX}
                      y2={bottomY}
                      stroke="#FFFFFF"
                      strokeWidth="2.5"
                      opacity="0.95"
                      strokeLinecap="round"
                    />
                  );
                })}
                
                {/* Middle layer strands - slightly offset for depth */}
                {Array.from({ length: 18 }, (_, i) => {
                  const angle = ((i + 0.5) / 18) * 2 * Math.PI;
                  const rimX = 60 + Math.cos(angle) * 38;
                  const rimY = 79; // Slightly below front layer
                  const bottomX = 60 + Math.cos(angle) * 28;
                  const bottomY = 113;
                  return (
                    <line
                      key={`middle-strand-${i}`}
                      x1={rimX}
                      y1={rimY}
                      x2={bottomX}
                      y2={bottomY}
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      opacity="0.75"
                      strokeLinecap="round"
                    />
                  );
                })}
                
                {/* Net horizontal support rings - creating the woven net effect */}
                {[80, 90, 100, 108, 112].map((y, i) => {
                  const radius = 35 - (y - 78) * 0.25; // Adjusted for net starting at rim bottom
                  const ellipseRy = radius * 0.65;
                  return (
                    <ellipse
                      key={`ring-${y}`}
                      cx="60"
                      cy={y}
                      rx={radius}
                      ry={ellipseRy}
                      fill="none"
                      stroke="#FFFFFF"
                      strokeWidth="2"
                      strokeDasharray="3 4"
                      opacity={0.7 - i * 0.1}
                    />
                  );
                })}
                
                {/* Net bottom opening - wider ellipse showing the net opening */}
                <ellipse
                  cx="60"
                  cy="115"
                  rx="30"
                  ry="8"
                  fill="none"
                  stroke="#FFFFFF"
                  strokeWidth="3"
                  strokeDasharray="4 5"
                  opacity="0.9"
                />
                
                {/* Additional net texture - diagonal cross strands for realism */}
                {Array.from({ length: 9 }, (_, i) => {
                  const angle1 = (i / 9) * 2 * Math.PI;
                  const angle2 = ((i + 4.5) / 9) * 2 * Math.PI;
                  const midY = 95; // Adjusted to be in the middle of the net
                  const midRadius = 32;
                  const x1 = 60 + Math.cos(angle1) * midRadius;
                  const y1 = midY + Math.sin(angle1) * (midRadius * 0.6);
                  const x2 = 60 + Math.cos(angle2) * midRadius;
                  const y2 = midY + Math.sin(angle2) * (midRadius * 0.6);
                  return (
                    <line
                      key={`cross-strand-${i}`}
                      x1={x1}
                      y1={y1}
                      x2={x2}
                      y2={y2}
                      stroke="#FFFFFF"
                      strokeWidth="1"
                      opacity="0.4"
                      strokeLinecap="round"
                    />
                  );
                })}
              </svg>
              {/* Rim hit effect */}
              {ballPosition.hitRim && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                  <div className="w-24 h-16 border-4 border-yellow-400 rounded-full animate-ping opacity-75" style={{ borderRadius: '50%' }}></div>
                </div>
              )}
            </div>
          </div>

          {/* Basketball */}
          <div
            className="absolute z-20 transition-all"
            style={{
              left: `${ballPosition.x}%`,
              top: `${ballPosition.y}%`,
              transform: ballPosition.shooting 
                ? ballPosition.onFloor
                  ? 'translate(-50%, -50%) scale(1)'
                  : ballPosition.inNet
                  ? 'translate(-50%, -50%) scale(0.7)'
                  : ballPosition.hitRim
                  ? 'translate(-50%, -50%) translateX(15px) scale(0.7)'
                  : ballPosition.power > 90
                  ? 'translate(-50%, -50%) translateX(30px) scale(0.6)'
                  : ballPosition.power < 30
                  ? 'translate(-50%, -50%) scale(0.7)'
                  : 'translate(-50%, -50%) scale(0.8)'
                : 'translate(-50%, -50%)',
              transition: ballPosition.shooting 
                ? ballPosition.onFloor
                  ? 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : ballPosition.inNet
                  ? 'all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                  : ballPosition.hitRim
                  ? 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  : ballPosition.power > 90
                  ? 'all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  : ballPosition.power < 30
                  ? 'all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                  : 'all 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55)'
                : 'none',
              filter: 'drop-shadow(0 4px 8px rgba(0,0,0,0.3))',
              opacity: ballPosition.shooting && ballPosition.inNet ? 0.85 : 1,
              zIndex: ballPosition.onFloor ? 15 : 20
            }}
          >
            <svg width="48" height="48" viewBox="0 0 48 48">
              <circle cx="24" cy="24" r="22" fill="#FF6B35" />
              <path
                d="M 24 2 Q 12 10, 12 24 Q 12 38, 24 46 Q 36 38, 36 24 Q 36 10, 24 2"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
              />
              <path
                d="M 2 24 Q 10 12, 24 12 Q 38 12, 46 24 Q 38 36, 24 36 Q 10 36, 2 24"
                fill="none"
                stroke="#000000"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>

        <div className="space-y-2">
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Power Meter</span>
            <span>{power}%</span>
          </div>
          <div className="h-6 bg-muted/50 rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-red-500 via-orange-400 to-green-500 transition-all duration-75"
              style={{ width: `${power}%` }}
            />
            {/* Sweet spot indicator */}
            <div 
              className="absolute top-0 h-full w-1 bg-yellow-300 border border-yellow-500 shadow-lg"
              style={{ left: '72%' }}
            />
            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center">
              <span className="text-[10px] font-semibold text-foreground/80">Sweet Spot</span>
            </div>
          </div>
          <p className="text-xs text-center text-muted-foreground">{statusMessage}</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          {!isPlaying ? (
            <>
              <Button className="btn-primary w-full" onClick={startGame}>
                {gameFinished ? 'Play Again' : 'Start Game'}
              </Button>
              <Button variant="outline" className="w-full" onClick={onExit}>
                Exit Game
              </Button>
            </>
          ) : (
            <>
              <Button 
                className="btn-primary w-full" 
                onClick={handleShoot}
                disabled={ballPosition.shooting}
              >
                {ballPosition.shooting ? 'Shooting...' : 'Shoot! (or press SPACEBAR)'}
              </Button>
              <Button variant="outline" className="w-full" onClick={onExit}>
                Exit Game
              </Button>
            </>
          )}
        </div>
      </div>

      <Card className="glass-card p-4">
        <h4 className="text-lg font-semibold mb-1 text-center flex items-center justify-center gap-2">
          <Trophy className="w-4 h-4 text-primary" />
          Weekly Leaderboard
        </h4>
        <p className="text-xs text-center text-muted-foreground mb-3">
          Resets every week • Top 3 get medals 🥇🥈🥉
        </p>
        {rankings.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground">No scores yet. Be the first to set the record!</p>
        ) : (
          <ul className="space-y-2 text-sm">
            {rankings.map((entry, index) => {
              const getMedal = (position: number) => {
                if (position === 0) return '🥇'; // Gold
                if (position === 1) return '🥈'; // Silver
                if (position === 2) return '🥉'; // Bronze
                return null;
              };
              
              const medal = getMedal(index);
              
              return (
                <li
                  key={entry.id}
                  className={`flex items-center justify-between rounded-lg px-3 py-2 ${
                    index < 3 ? 'bg-primary/10 border border-primary/20' : 'bg-muted/20'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-semibold text-muted-foreground w-6">
                      {medal ? medal : `${index + 1}.`}
                    </span>
                    <div>
                      <p className={`font-medium ${index < 3 ? 'text-primary' : ''}`}>{entry.name}</p>
                      <p className="text-[11px] text-muted-foreground">
                        {new Date(entry.date).toLocaleDateString()}
                      </p>
                    </div>
                  </div>
                  <span className={`text-sm font-semibold ${index < 3 ? 'text-primary' : ''}`}>
                    {entry.score} pts
                  </span>
                </li>
              );
            })}
          </ul>
        )}
      </Card>
    </div>
  );
};

const ContactPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  // EmailJS Configuration
  // Setup Instructions:
  // 1. Go to https://www.emailjs.com and create a free account
  // 2. Create an Email Service (Gmail, Outlook, etc.) and get your SERVICE_ID
  // 3. Create an Email Template with variables: {{from_name}}, {{from_email}}, {{subject}}, {{message}}
  // 4. Get your Public Key from Account > API Keys
  // 5. Replace the values below with your credentials
  const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'YOUR_SERVICE_ID';
  const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'YOUR_TEMPLATE_ID';
  const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'YOUR_PUBLIC_KEY';
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionState, setSubmissionState] = useState<SubmissionState>('form');
  const [playerName, setPlayerName] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  
  // Initialize EmailJS
  useEffect(() => {
    if (EMAILJS_PUBLIC_KEY && EMAILJS_PUBLIC_KEY !== 'YOUR_PUBLIC_KEY') {
      emailjs.init(EMAILJS_PUBLIC_KEY);
    }
  }, [EMAILJS_PUBLIC_KEY]);

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'elormseyram@theseas.tech',
      href: 'mailto:elormseyram@theseas.tech'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+233 59 648 1875',
      href: 'tel:+233596481875'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Tema, Ghana',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: 'https://github.com/elormseyram',
      color: 'hover:text-primary'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: 'https://www.linkedin.com/in/elormseyram0804?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      color: 'hover:text-primary'
    },
    {
      icon: Twitter,
      label: 'Twitter',
      href: 'https://twitter.com/elormseyram_',
      color: 'hover:text-primary'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Check if EmailJS is configured
    if (EMAILJS_SERVICE_ID === 'YOUR_SERVICE_ID' || EMAILJS_TEMPLATE_ID === 'YOUR_TEMPLATE_ID' || EMAILJS_PUBLIC_KEY === 'YOUR_PUBLIC_KEY') {
      toast({
        title: 'Email service not configured',
        description: 'Please set up EmailJS credentials. Check the code comments for setup instructions, or email directly at elormseyram@theseas.tech',
        variant: 'destructive'
      });
      setIsSubmitting(false);
      return;
    }

    try {
      // Send email using EmailJS
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject || 'New Contact Form Submission',
        message: formData.message,
        to_email: 'elormseyram@theseas.tech'
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      // Success
      setPlayerName(formData.name || 'Guest Hooper');
      setSubmissionState('prompt');
      toast({
        title: 'Message sent successfully!',
        description: 'Your message has been delivered to elormseyram@theseas.tech. Thanks for reaching out!'
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
      setIsSubmitting(false);

    } catch (error) {
      console.error('Form submission error:', error);
      setIsSubmitting(false);
      toast({
        title: 'Failed to send message',
        description: 'There was an error sending your message. Please try again or email directly at elormseyram@theseas.tech',
        variant: 'destructive'
      });
    }
  };

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
      <Navigation />
      <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto relative z-10">
          {/* Back Button */}
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>

          {/* Section Header */}
          <div className="text-center mb-16 scroll-reveal">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's <span className="text-highlight">Connect</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to bring your next <span className="text-highlight">project</span> to life? Let's discuss how we can create something amazing together.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mt-6" />
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
            {/* Contact Form / Game */}
            <Card className="glass-card p-6 sm:p-8 scroll-reveal">
              <div className="flex items-center gap-2 mb-4 sm:mb-6">
                <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-primary" />
                <h3 className="text-xl sm:text-2xl font-semibold">
                  {submissionState === 'form' ? 'Send a Message' : 'Thanks for reaching out'}
                </h3>
              </div>
              
              {submissionState === 'form' && (
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Your name"
                        required
                        className=""
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="your.email@example.com"
                        required
                        className=""
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      placeholder="What's this about?"
                      required
                      className="glow-border focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      placeholder="Tell me about your project..."
                      rows={5}
                      required
                      className="resize-none"
                    />
                  </div>

                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full btn-primary py-3 text-lg font-medium"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        Send Message
                      </div>
                    )}
                  </Button>
                  
                  <div className="mt-4 p-3 rounded-lg bg-muted/20 border border-muted/40">
                    <p className="text-xs text-muted-foreground text-center">
                      <Mail className="w-3 h-3 inline mr-1" />
                      Messages are sent directly to <strong className="text-foreground">elormseyram@theseas.tech</strong> via EmailJS. 
                      You'll receive them instantly in your inbox!
                    </p>
                  </div>
                </form>
              )}

              {submissionState === 'prompt' && (
                <div className="space-y-4 text-center">
                  <h4 className="text-2xl font-semibold">Your message is on its way! 🚀</h4>
                  <p className="text-muted-foreground">
                    Would you like to shoot some hoops while you wait for my response?
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                    <Button className="btn-primary w-full" onClick={() => setSubmissionState('game')}>
                      Yes, let's play!
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setSubmissionState('thanks')}>
                      Maybe later
                    </Button>
                  </div>
                </div>
              )}

              {submissionState === 'game' && (
                <BasketballGame
                  playerName={playerName}
                  onExit={() => setSubmissionState('thanks')}
                />
              )}

              {submissionState === 'thanks' && (
                <div className="space-y-4 text-center">
                  <h4 className="text-2xl font-semibold">Thanks for your message!</h4>
                  <p className="text-muted-foreground">
                    I'm already on it. Feel free to send another message or keep playing hoops.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="btn-primary w-full" onClick={() => setSubmissionState('form')}>
                      Send another message
                    </Button>
                    <Button variant="outline" className="w-full" onClick={() => setSubmissionState('game')}>
                      Play again
                    </Button>
                  </div>
                </div>
              )}
            </Card>

            {/* Contact Info */}
            <div className="space-y-6 sm:space-y-8 scroll-reveal">
              {/* Quick Contact */}
              <Card className="glass-card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Get in Touch</h3>
                <div className="space-y-4">
                  {contactInfo.map((info) => (
                    <a
                      key={info.label}
                      href={info.href}
                      className="flex items-center gap-4 p-3 rounded-lg hover:bg-muted/10 transition-colors group"
                    >
                      <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{info.label}</div>
                        <div className="text-muted-foreground">{info.value}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Social Links */}
              <Card className="glass-card p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6">Follow Me</h3>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex flex-col items-center gap-3 p-4 rounded-lg hover:bg-muted/10 transition-all duration-300 group ${social.color}`}
                    >
                      <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <social.icon className="w-6 h-6" />
                      </div>
                      <span className="text-sm font-medium">{social.label}</span>
                    </a>
                  ))}
                </div>
              </Card>

              {/* Availability */}
              <Card className="glass-card p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-3 sm:mb-4 pulse-glow">
                  <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary" />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2">Available for Projects</h3>
                <p className="text-sm sm:text-base text-muted-foreground">
                  Currently accepting new projects and collaborations. Let's create something extraordinary!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ContactPage;
