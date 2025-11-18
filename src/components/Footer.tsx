import { Heart, Code2, Mail, Github, Linkedin, Globe, ArrowUp } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="py-8 sm:py-12 px-4 sm:px-6 border-t border-muted/20 bg-background/50 backdrop-blur-sm relative-content">
      <div className="max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <img src="/seas-logo.png" alt="SEAS Logo" className="h-12 sm:h-16 w-auto" />
        </div>
        
        {/* Main Footer Content */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8 justify-items-center md:justify-items-start">
          {/* About */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-highlight">About</h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              UI/UX Designer, Front-End Developer, and QA Engineer passionate about creating 
              beautiful, functional digital experiences.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-highlight">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Me
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div className="sm:col-span-2 md:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-highlight">Connect</h3>
            <div className="flex gap-3 sm:gap-4 mb-3 sm:mb-4">
              <a
                href="https://github.com/elormseyram"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/elormseyram0804?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="https://elormseyram-portfolio.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Portfolio"
              >
                <Globe className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a
                href="mailto:seyramsenu22@gmail.com"
                className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
                aria-label="Email"
              >
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
            <p className="text-xs text-muted-foreground">
              Let's build something amazing together!
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-muted/20 pt-6 sm:pt-8">
          <div className="flex flex-col items-center gap-4">
            {/* Copyright */}
            <div className="text-center">
              <p className="text-xs sm:text-sm text-muted-foreground">
                © {new Date().getFullYear()} Senu Seyram Elorm Adzo. All rights reserved.
              </p>
              <p className="text-xs text-muted-foreground/70 mt-1">
                <span className="text-highlight">beauty</span> in UI, 
                <span className="text-foreground"> brains</span> in 
                <span className="text-highlight"> VS Code</span> • Crafted with React, TypeScript, and a lot of ☕
              </p>
            </div>

            {/* Scroll to Top */}
            <button
              onClick={scrollToTop}
              className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary hover:bg-primary/20 transition-colors"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Easter Egg Sign-off */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-4 sm:mt-6">
            <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
            <span className="text-xs sm:text-sm font-medium text-muted-foreground text-center">
              <span className="text-highlight">That woman? Definitely!</span>
            </span>
            <Code2 className="w-3 h-3 sm:w-4 sm:h-4 text-primary animate-pulse" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;