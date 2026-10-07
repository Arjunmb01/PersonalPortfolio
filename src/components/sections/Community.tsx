import { motion } from 'framer-motion'
import { Globe, Link2, ArrowUpRight, Mail } from 'lucide-react'
import { PERSONAL_INFO } from '../../lib/constants'

const platforms = [
  {
    icon: Link2,
    label: 'GitHub',
    handle: '@Arjunmb01',
    description: 'Open source projects, full-stack templates, and production implementations',
    stat: 'Repositories & Code',
    href: PERSONAL_INFO.socials.github,
  },
  {
    icon: Globe,
    label: 'LinkedIn',
    handle: '/in/arjun-mb',
    description: 'Professional updates, tech insights, and production engineering discussions',
    stat: 'Bangalore Network',
    href: PERSONAL_INFO.socials.linkedin,
  },
  {
    icon: ArrowUpRight,
    label: 'Twitter / X',
    handle: '@arjundev',
    description: 'Insights on full-stack architecture, MERN/PERN setups, and developer tooling',
    stat: 'Tech Updates',
    href: PERSONAL_INFO.socials.twitter,
  },
  {
    icon: Mail,
    label: 'Instagram',
    handle: '@arjundev',
    description: 'Developer lifestyle, behind the code, and creative engineering workflows',
    stat: 'Creative Flow',
    href: PERSONAL_INFO.socials.instagram,
  },
]

export default function Community() {
  return (
    <section className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
          <div>
            <motion.p
              className="text-caption text-accent tracking-widest uppercase mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Network & Open Source
            </motion.p>
            <motion.h2
              className="font-serif text-display-lg text-paper leading-none"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: 'easeOut', delay: 0.1 }}
            >
              Connecting{' '}
              <span className="font-serif-italic text-accent">beyond code.</span>
            </motion.h2>
          </div>
          <motion.p
            className="text-body-lg text-mist leading-relaxed self-end"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            I actively share insights around full-stack development, Docker workflows, scalable system design,
            and real-world production engineering. Connect with me across GitHub, LinkedIn, and social channels.
          </motion.p>
        </div>

        {/* Platform grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0">
          {platforms.map((p, i) => (
            <motion.a
              key={p.label}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group border-t border-paper/5 py-10 pr-8 flex gap-6 items-start hover:border-accent/20 transition-colors duration-400"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: 'easeOut', delay: i * 0.08 }}
            >
              <div className="w-12 h-12 border border-paper/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent/40 transition-colors duration-300">
                <p.icon size={18} className="text-mist group-hover:text-accent transition-colors duration-300" />
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-body text-paper font-medium">{p.label}</span>
                  <span className="text-caption text-mist">{p.handle}</span>
                </div>
                <p className="text-body text-mist mb-3">{p.description}</p>
                <span className="text-caption text-accent tracking-wide">{p.stat}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
