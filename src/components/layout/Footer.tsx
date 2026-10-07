import { Globe, Link2, Mail, ArrowUpRight } from 'lucide-react'
import { PERSONAL_INFO } from '../../lib/constants'
import Logo from '../ui/Logo'

const socials = [
  { icon: Globe, label: 'GitHub', href: PERSONAL_INFO.socials.github },
  { icon: Link2, label: 'LinkedIn', href: PERSONAL_INFO.socials.linkedin },
  { icon: ArrowUpRight, label: 'Twitter', href: PERSONAL_INFO.socials.twitter },
  { icon: ArrowUpRight, label: 'Instagram', href: PERSONAL_INFO.socials.instagram },
  { icon: Mail, label: 'Email', href: `mailto:${PERSONAL_INFO.email}` },
]

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-paper/10 bg-ink/90 backdrop-blur-xl py-12 px-5 sm:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">

        {/* Logo */}
        <a
          href="#hero"
          aria-label="Arjun M B — Home"
          className="focus:outline-none"
        >
          <Logo size={32} />
        </a>

        {/* Center tagline */}
        <p className="text-caption text-mist tracking-wide text-center">
          Designed & Developed by Arjun M B • Bangalore, India
        </p>

        {/* Right — social + copyright */}
        <div className="flex items-center gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-mist hover:text-accent transition-colors duration-300"
              aria-label={s.label}
            >
              <s.icon size={16} />
            </a>
          ))}
          <span className="text-caption text-mist/50 ml-4">© 2026</span>
        </div>
      </div>
    </footer>
  )
}
