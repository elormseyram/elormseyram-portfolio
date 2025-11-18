import { useEffect, useRef, useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { 
  Figma, 
  Code2, 
  Smartphone, 
  Palette, 
  Zap, 
  Server,
  Database,
  Layers,
  Heart,
  MessageCircle,
  Send
} from 'lucide-react';

interface Comment {
  id: string;
  author: string;
  text: string;
  likes: number;
  liked: boolean;
  replies: Reply[];
  timestamp: string;
}

interface Reply {
  id: string;
  author: string;
  text: string;
  likes: number;
  liked: boolean;
  timestamp: string;
}

const COMMENTS_STORAGE_KEY = 'about-friends-comments';

const defaultComments: Comment[] = [
  {
    id: '1',
    author: 'Rahrah',
    text: "She's never met a friend like me before, smart and I'm the most go to person ever.",
    likes: 0,
    liked: false,
    replies: [],
    timestamp: new Date().toISOString()
  },
  {
    id: '2',
    author: 'Lily',
    text: "I'm someone who listens without judgement.",
    likes: 0,
    liked: false,
    replies: [],
    timestamp: new Date().toISOString()
  },
  {
    id: '3',
    author: 'Afriyie',
    text: 'I like fooling too much.',
    likes: 0,
    liked: false,
    replies: [],
    timestamp: new Date().toISOString()
  }
];

const AboutMe = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [flipped, setFlipped] = useState<Record<string, boolean>>({});
  const [comments, setComments] = useState<Comment[]>(() => {
    if (typeof window === 'undefined') {
      return defaultComments;
    }
    try {
      const stored = localStorage.getItem(COMMENTS_STORAGE_KEY);
      return stored ? JSON.parse(stored) : defaultComments;
    } catch {
      return defaultComments;
    }
  });
  const [newComment, setNewComment] = useState({ author: '', text: '' });
  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState<{ [key: string]: { author: string; text: string } }>({});
  const hasHydrated = useRef(false);

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

  useEffect(() => {
    if (typeof window === 'undefined') return;
    if (!hasHydrated.current) {
      const stored = localStorage.getItem(COMMENTS_STORAGE_KEY);
      if (stored) {
        try {
          setComments(JSON.parse(stored));
        } catch {
          localStorage.removeItem(COMMENTS_STORAGE_KEY);
        }
      }
      hasHydrated.current = true;
      return;
    }
    localStorage.setItem(COMMENTS_STORAGE_KEY, JSON.stringify(comments));
  }, [comments]);

  return (
    <section ref={sectionRef} className="relative-content py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="flex justify-center mb-6">
            <img src="/seas-logo.png" alt="SEAS Logo" className="h-32 sm:h-40 w-auto" />
          </div>
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
                  <span className="text-highlight font-medium">UI/UX design</span> with{' '}
                  <span className="text-highlight font-medium">Figma</span>,{' '}
                  <span className="text-highlight font-medium">Dart</span>, and{' '}
                  <span className="text-highlight font-medium">Flutter</span>.
                </p>
                <p>
                  Residing in Tema, Ghana, I focus on creating mobile experiences that are not just 
                  visually stunning, but also highly functional and user-centered. My expertise in 
                  UI/UX design and Flutter allows me to bridge the gap between design and development, creating 
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

        {/* What My Friends Say About Me */}
        <div className="mt-16 scroll-reveal">
          <h3 className="text-2xl font-semibold mb-8 text-center">
            What My <span className="text-highlight">Friends</span> Say About Me
          </h3>
          
          {/* Friends' Comments */}
          <div className="space-y-4 mb-8">
            {comments.map((comment) => (
              <Card key={comment.id} className="glass-card p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h4 className="font-semibold text-highlight">{comment.author}</h4>
                    <p className="text-xs text-muted-foreground">
                      {new Date(comment.timestamp).toLocaleDateString()}
                    </p>
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{comment.text}</p>
                
                {/* Like and Reply Buttons */}
                <div className="flex items-center gap-4 mb-3">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setComments(comments.map(c => 
                        c.id === comment.id 
                          ? { ...c, likes: c.liked ? c.likes - 1 : c.likes + 1, liked: !c.liked }
                          : c
                      ));
                    }}
                    className={`${comment.liked ? 'text-primary' : ''}`}
                  >
                    <Heart className={`w-4 h-4 mr-1 ${comment.liked ? 'fill-current' : ''}`} />
                    {comment.likes}
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setReplyingTo(replyingTo === comment.id ? null : comment.id)}
                  >
                    <MessageCircle className="w-4 h-4 mr-1" />
                    Reply
                  </Button>
                </div>

                {/* Reply Input */}
                {replyingTo === comment.id && (
                  <div className="mb-4 pl-4 border-l-2 border-primary/20">
                    <Input
                      placeholder="Your name"
                      value={replyText[comment.id]?.author || ''}
                      onChange={(e) => {
                        setReplyText({ 
                          ...replyText, 
                          [comment.id]: { 
                            author: e.target.value, 
                            text: replyText[comment.id]?.text || '' 
                          } 
                        });
                      }}
                      className="mb-2"
                    />
                    <div className="flex gap-2">
                      <Textarea
                        placeholder="Write a reply..."
                        value={replyText[comment.id]?.text || ''}
                        onChange={(e) => {
                          setReplyText({ 
                            ...replyText, 
                            [comment.id]: { 
                              author: replyText[comment.id]?.author || '', 
                              text: e.target.value 
                            } 
                          });
                        }}
                        className="flex-1"
                        rows={2}
                      />
                      <Button
                        size="sm"
                        onClick={() => {
                          const reply = replyText[comment.id];
                          if (reply?.author && reply?.text) {
                            const newReply: Reply = {
                              id: Date.now().toString(),
                              author: reply.author,
                              text: reply.text,
                              likes: 0,
                              liked: false,
                              timestamp: new Date().toISOString()
                            };
                            setComments(comments.map(c => 
                              c.id === comment.id 
                                ? { ...c, replies: [...c.replies, newReply] }
                                : c
                            ));
                            const updated = { ...replyText };
                            delete updated[comment.id];
                            setReplyText(updated);
                            setReplyingTo(null);
                          }
                        }}
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                )}

                {/* Replies */}
                {comment.replies.length > 0 && (
                  <div className="mt-4 pl-4 border-l-2 border-primary/20 space-y-3">
                    {comment.replies.map((reply) => (
                      <div key={reply.id} className="bg-card/50 p-3 rounded-lg">
                        <div className="flex items-start justify-between mb-2">
                          <div>
                            <h5 className="font-semibold text-sm text-highlight">{reply.author}</h5>
                            <p className="text-xs text-muted-foreground">
                              {new Date(reply.timestamp).toLocaleDateString()}
                            </p>
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{reply.text}</p>
                        <Button
                          variant="ghost"
                          size="sm"
                          onClick={() => {
                            setComments(comments.map(c => ({
                              ...c,
                              replies: c.replies.map(r => 
                                r.id === reply.id 
                                  ? { ...r, likes: r.liked ? r.likes - 1 : r.likes + 1, liked: !r.liked }
                                  : r
                              )
                            })));
                          }}
                          className={`text-xs ${reply.liked ? 'text-primary' : ''}`}
                        >
                          <Heart className={`w-3 h-3 mr-1 ${reply.liked ? 'fill-current' : ''}`} />
                          {reply.likes}
                        </Button>
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            ))}
          </div>

          {/* Add Comment Section */}
          <Card className="glass-card p-6">
            <h4 className="text-lg font-semibold mb-4">What do you have to say about me?</h4>
            <div className="space-y-3">
              <Input
                placeholder="Your name"
                value={newComment.author}
                onChange={(e) => setNewComment({ ...newComment, author: e.target.value })}
              />
              <Textarea
                placeholder="Share your thoughts..."
                value={newComment.text}
                onChange={(e) => setNewComment({ ...newComment, text: e.target.value })}
                rows={4}
              />
              <Button
                onClick={() => {
                  if (newComment.author && newComment.text) {
                    const comment: Comment = {
                      id: Date.now().toString(),
                      author: newComment.author,
                      text: newComment.text,
                      likes: 0,
                      liked: false,
                      replies: [],
                      timestamp: new Date().toISOString()
                    };
                    setComments([...comments, comment]);
                    setNewComment({ author: '', text: '' });
                  }
                }}
                className="w-full sm:w-auto"
              >
                <Send className="w-4 h-4 mr-2" />
                Post Comment
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
