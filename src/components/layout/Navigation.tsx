import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Terminal, Github, Linkedin, FileDown } from 'lucide-react';

const navLinks = [
  { path: '#home', label: 'HOME' },
  { path: '#about', label: 'ABOUT' },
  { path: '#services', label: 'SERVICES' },
  { path: '#skills', label: 'SKILLS' },
  { path: '#projects', label: 'PROJECTS' },
  { path: '#experience', label: 'EXPERIENCE' },
  { path: '#contact', label: 'CONTACT' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, path: string) => {
    e.preventDefault();
    const element = document.querySelector(path);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Main nav bar */}
      <div className="glass border-b border-glass-border">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <a
              href="#home"
              onClick={(e) => handleScroll(e, '#home')}
              className="flex items-center gap-2 group"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary flex items-center justify-center pulse-glow">
                <Terminal className="w-5 h-5 text-primary" />
              </div>
              <span className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                Arjun<span className="text-primary">.FOLIO</span>
              </span>
            </a>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.path}
                  href={link.path}
                  onClick={(e) => handleScroll(e, link.path)}
                  className="relative group"
                >
                  <span className={`font-rajdhani text-sm tracking-wider transition-colors ${location.hash === link.path || (link.path === '#home' && !location.hash)
                    ? 'text-primary text-glow'
                    : 'text-muted-foreground hover:text-foreground'
                    }`}>
                    {link.label}
                  </span>
                  {(location.hash === link.path || (link.path === '#home' && !location.hash)) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden lg:flex items-center gap-4">
              <a
                href="https://github.com/Arjunmb01"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/arjun-mb/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary transition-all"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="/resume.pdf"
                download="Arjun_Resume.pdf"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border border-primary bg-primary/10 text-primary font-rajdhani text-sm tracking-wider hover:bg-primary/20 transition-all pulse-glow"
              >
                <FileDown className="w-4 h-4" />
                RESUME
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-foreground"
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden fixed inset-x-0 top-[73px] bottom-0 glass-strong border-b border-glass-border overflow-y-auto"
          >
            <div className="container mx-auto px-6 py-6 space-y-4">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <a
                    href={link.path}
                    onClick={(e) => handleScroll(e, link.path)}
                    className={`block py-2 font-rajdhani text-lg tracking-wider ${location.hash === link.path || (link.path === '#home' && !location.hash)
                      ? 'text-primary text-glow'
                      : 'text-muted-foreground'
                      }`}
                  >
                    <span className="text-primary mr-2">//</span>
                    {link.label}
                  </a>
                </motion.div>
              ))}

              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <a
                  href="https://github.com/Arjunmb01"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground"
                >
                  <Github className="w-5 h-5" />
                </a>
                <a
                  href="https://www.linkedin.com/in/arjun-mb/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg border border-border bg-muted/50 flex items-center justify-center text-muted-foreground"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="/resume.pdf"
                  download="Arjun_Resume.pdf"
                  className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg border border-primary bg-primary/10 text-primary font-rajdhani tracking-wider"
                >
                  <FileDown className="w-4 h-4" />
                  RESUME
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navigation;
