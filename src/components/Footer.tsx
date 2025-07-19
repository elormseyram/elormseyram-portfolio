import { Heart, Code2 } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 px-6 border-t border-muted/20 bg-background/50 backdrop-blur-sm">
      <div className="max-w-6xl mx-auto">
        <div className="text-center">
          {/* Easter Egg Sign-off */}
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-4 h-4 text-accent animate-pulse" />
            <span className="text-lg font-medium">
              <span className="text-primary">beauty</span> in UI, 
              <span className="text-secondary"> brains</span> in 
              <span className="text-accent"> VS Code</span>.
            </span>
            <Code2 className="w-4 h-4 text-primary animate-pulse" />
          </div>
          
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Senu Seyram Elorm Adzo. 
            <span className="text-accent"> Made with passion</span> in Ghana 🇬🇭
          </p>
          
          {/* Fun Note */}
          <p className="text-xs text-muted-foreground/70 mt-2">
            Crafted with React, TypeScript, and a lot of ☕
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;