import { useEffect, useRef } from 'react';
import { Card } from '@/components/ui/card';
import { Search, PenTool, Palette, Code, Rocket } from 'lucide-react';

const Process = () => {
  const sectionRef = useRef<HTMLElement>(null);

  const processSteps = [
    {
      icon: Search,
      title: 'Research',
      description: 'Deep dive into user needs, market analysis, and competitive research to understand the problem space.',
      color: 'text-primary',
      delay: '0s'
    },
    {
      icon: PenTool,
      title: 'Wireframe',
      description: 'Create low-fidelity wireframes and user flows to map out the core functionality and structure.',
      color: 'text-secondary',
      delay: '0.2s'
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Craft beautiful, pixel-perfect designs with attention to typography, color, and visual hierarchy.',
      color: 'text-accent',
      delay: '0.4s'
    },
    {
      icon: Code,
      title: 'Develop',
      description: 'Build responsive, performant applications using modern technologies and best practices.',
      color: 'text-primary',
      delay: '0.6s'
    },
    {
      icon: Rocket,
      title: 'Deliver',
      description: 'Deploy, test, and iterate based on user feedback to ensure the best possible experience.',
      color: 'text-secondary',
      delay: '0.8s'
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
    <section id="process" ref={sectionRef} className="py-20 px-6 relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 scroll-reveal">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-highlight">Design</span> Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A proven methodology that turns ideas into impactful digital experiences
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full mt-6" />
        </div>

        {/* Process Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-accent rounded-full opacity-30 hidden lg:block" />
          
          {/* Process Steps */}
          <div className="space-y-12 lg:space-y-20">
            {processSteps.map((step, index) => (
              <div
                key={step.title}
                className={`flex flex-col lg:flex-row items-center gap-8 scroll-reveal ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
                style={{ animationDelay: step.delay }}
              >
                {/* Content Card */}
                <div className="flex-1 w-full lg:w-auto">
                  <Card className="glass-card p-8 glow-border">
                    <div className="flex items-center gap-4 mb-4">
                      <div className={`w-12 h-12 rounded-full bg-gradient-to-br from-${step.color.split('-')[1]}/20 to-${step.color.split('-')[1]}/10 flex items-center justify-center`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      <h3 className="text-2xl font-semibold">{step.title}</h3>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {step.description}
                    </p>
                  </Card>
                </div>

                {/* Step Number */}
                <div className="relative z-10">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-2xl font-bold text-white shadow-lg">
                    {index + 1}
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="flex-1 w-full lg:w-auto lg:block hidden" />
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20 scroll-reveal">
          <Card className="glass-card p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold mb-4">
              Ready to bring your <span className="text-highlight">vision</span> to life?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's collaborate and create something amazing together using this proven process.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary px-8 py-3"
              >
                Start Your <span className="text-white">Project</span>
              </button>
              <button 
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                className="text-secondary hover:text-secondary-glow transition-colors"
              >
                View Case Studies →
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Process;