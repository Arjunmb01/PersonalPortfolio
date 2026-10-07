import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { NAV_LINKS } from '../../lib/constants'
import { X, Menu } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const navRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const navStyles: React.CSSProperties = {
    background: scrolled
      ? 'rgba(10, 10, 10, 0.85)'
      : 'transparent',
    backdropFilter: scrolled ? 'blur(16px)' : 'none',
    borderBottom: scrolled ? '1px solid rgba(255,255,255,0.07)' : '1px solid transparent',
    transition: 'background 0.5s ease, backdrop-filter 0.5s ease, border-color 0.5s ease',
  }

  return (
    <>
      <nav
        ref={navRef}
        className="fixed top-0 left-0 right-0 z-50 px-8 lg:px-16"
        style={navStyles}
        aria-label="Main navigation"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="font-serif-italic text-2xl text-paper tracking-tight hover:text-accent transition-colors duration-300 flex items-center gap-2"
            aria-label="Arjun M B — Home"
          >
            <span>AMB</span>
            <span className="text-[11px] font-sans text-mist tracking-widest uppercase hidden sm:inline">Arjun M B</span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-10">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-caption text-mist-light tracking-widest uppercase hover:text-paper transition-colors duration-300 underline-accent"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* CTAs */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="/resume.pdf"
              download="Arjun_MB_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2.5 text-caption tracking-widest uppercase text-paper/80 border border-paper/15 hover:border-accent hover:text-accent transition-colors duration-300"
            >
              Resume
            </a>
            <a
              href="#contact"
              className="px-6 py-2.5 text-caption tracking-widest uppercase text-ink bg-accent hover:bg-accent-light transition-colors duration-300"
            >
              Hire Me
            </a>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-paper p-2"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
            aria-expanded={menuOpen}
          >
            <Menu size={22} />
          </button>
        </div>
      </nav>

      {/* Mobile fullscreen menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 z-[100] bg-ink flex flex-col px-8 py-8"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="flex justify-between items-center mb-16">
              <span className="font-serif-italic text-2xl text-paper">AMB</span>
              <button
                onClick={() => setMenuOpen(false)}
                className="text-paper p-2"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="flex flex-col gap-8 flex-1">
              {NAV_LINKS.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-serif text-display-sm text-paper hover:text-accent transition-colors duration-300"
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.07, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                >
                  {link.label}
                </motion.a>
              ))}
            </nav>

            <motion.a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="mt-auto py-5 text-center text-caption tracking-widest uppercase text-ink bg-accent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              Let's Work Together
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
