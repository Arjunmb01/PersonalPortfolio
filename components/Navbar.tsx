"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { portfolioContent } from "@/lib/content";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/#about" },
    { name: "Skills", href: "/#skills" },
    { name: "Experience", href: "/#experience" },
    { name: "Projects", href: "/#projects" },
    { name: "Contact", href: "/#contact" },
  ];

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const sections = ["about", "skills", "experience", "projects", "contact"];
    const observers = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.2, rootMargin: "-20% 0px -50% 0px" }
    );

    // Observe each section
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observers.observe(el);
    });

    // Handle scroll to top (home active)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection("");
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      observers.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b glass py-4 shadow-sm border-blueprint-grid">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          href="/"
          className="font-display font-black text-lg tracking-wider text-foreground hover:opacity-85 transition-opacity"
        >
          ARJUN<span className="text-primary font-mono font-medium">.DEV</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === "/"
                ? (link.href === "/" && !activeSection) || link.href === `/#${activeSection}`
                : pathname === link.href || pathname === link.href.replace("/#", "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`font-mono text-[11px] tracking-widest uppercase transition-all duration-200 hover:text-primary relative py-1 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-foreground/75"
                }`}
              >
                <span className="text-[9px] text-primary/50 mr-1">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary" />
                )}
              </Link>
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
        <div className="md:hidden glass absolute top-full left-0 right-0 py-6 px-8 flex flex-col gap-4 shadow-lg border-t border-blueprint-grid/30">
          {navLinks.map((link, index) => {
            const isActive =
              pathname === "/"
                ? (link.href === "/" && !activeSection) || link.href === `/#${activeSection}`
                : pathname === link.href || pathname === link.href.replace("/#", "/");
            return (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-mono text-xs tracking-widest uppercase transition-colors hover:text-primary py-2 border-b border-blueprint-grid/30 ${
                  isActive
                    ? "text-primary font-bold"
                    : "text-foreground/80"
                }`}
              >
                <span className="text-[10px] text-primary/50 mr-1.5">
                  {String(index + 1).padStart(2, "0")}.
                </span>
                {link.name}
              </Link>
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
