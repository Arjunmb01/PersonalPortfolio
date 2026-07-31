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

      // Determine active section based on scroll offset
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "glass py-4 shadow-md"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <a
          href="#home"
          className="font-display font-bold text-xl tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent"
        >
          ARJUN.DEV
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const section = link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-all duration-200 hover:text-primary relative py-1 ${
                  activeSection === section
                    ? "text-primary"
                    : "text-foreground/70"
                }`}
              >
                {link.name}
                {activeSection === section && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full" />
                )}
              </a>
            );
          })}
          <ThemeToggle />
          <a
            href={portfolioContent.personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs font-semibold px-4 py-2 rounded-full bg-foreground text-background hover:scale-105 active:scale-95 transition-all cursor-pointer"
          >
            GitHub <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </nav>

        {/* Mobile menu controls */}
        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-foreground/80 hover:text-foreground cursor-pointer rounded-lg hover:bg-zinc-100/10"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-5 shadow-lg border-t border-glass-border">
          {navLinks.map((link) => {
            const section = link.href.slice(1);
            return (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-base font-medium transition-colors hover:text-primary py-2 ${
                  activeSection === section
                    ? "text-primary"
                    : "text-foreground/80"
                }`}
              >
                {link.name}
              </a>
            );
          })}
          <a
            href={portfolioContent.personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 text-sm font-semibold py-3 rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            GitHub <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
}
