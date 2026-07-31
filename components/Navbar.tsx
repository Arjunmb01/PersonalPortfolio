"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { portfolioContent } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const scrollPosition = window.scrollY + 160;
      const elements = navLinks.map(link => ({
        id: link.href.slice(1),
        offset: document.getElementById(link.href.slice(1))?.offsetTop || 0,
        height: document.getElementById(link.href.slice(1))?.offsetHeight || 0,
      }));

      const current = elements.find(
        el => scrollPosition >= el.offset && scrollPosition < el.offset + el.height
      );

      if (current) {
        setActiveSection(current.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled
          ? "glass py-4 shadow-sm border-blueprint-grid"
          : "bg-transparent py-6 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-black text-lg tracking-wider text-foreground hover:opacity-80 transition-opacity"
        >
          ARJUN<span className="text-primary font-mono font-medium">.DEV</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            const section = link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`font-mono text-[11px] tracking-widest uppercase transition-all duration-200 hover:text-primary relative py-1 ${
                  activeSection === section
                    ? "text-primary"
                    : "text-foreground/75"
                }`}
              >
                <span className="text-[9px] text-primary/50 mr-1">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.name}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </a>
            );
          })}
          <div className="w-[1px] h-4 bg-blueprint-grid" />
          <ThemeToggle />
          <a
            href={portfolioContent.personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 font-mono text-[10px] tracking-widest uppercase px-4 py-2 border border-primary/20 hover:border-primary bg-primary/5 hover:bg-primary/10 text-foreground rounded-none transition-all duration-300 cursor-pointer"
          >
            GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground/80 hover:text-foreground cursor-pointer border border-blueprint-grid"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-4 shadow-lg border-t border-blueprint-grid">
          {navLinks.map((link, index) => {
            const section = link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-primary py-2 border-b border-blueprint-grid/30 ${
                  activeSection === section
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                <span className="text-[10px] text-primary/50 mr-1.5">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.name}
              </a>
            );
          })}
          <a
            href={portfolioContent.personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 font-mono text-xs tracking-widest uppercase py-3 border border-primary/30 bg-primary/5 text-foreground hover:bg-primary/10 transition-colors"
          >
            GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
