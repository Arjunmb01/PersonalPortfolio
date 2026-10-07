import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function FinalCTA() {
  return (
    <section className="py-24 sm:py-40 px-5 sm:px-8 lg:px-16 border-t border-paper/5 bg-ink relative overflow-hidden">
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
        aria-hidden
      >
        <span
          className="font-serif text-[20vw] text-paper/3 leading-none whitespace-nowrap"
          style={{ letterSpacing: '-0.05em' }}
        >
          Let's Build
        </span>
      </div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col items-center text-center">
        <motion.p
          className="text-caption text-accent tracking-widest uppercase mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Ready?
        </motion.p>

        <motion.h2
          className="font-serif text-display-xl text-paper leading-none mb-8 max-w-4xl"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Have a project in mind?{' '}
          <span className="font-serif-italic text-accent">Let's build it together.</span>
        </motion.h2>

        <motion.p
          className="text-body-lg text-mist mb-16 max-w-lg"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >
          Available for full-time engineering roles, high-impact freelance contracts, and architecture consulting.
        </motion.p>

        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.35 }}
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-4 px-10 py-5 bg-accent text-ink text-caption tracking-widest uppercase hover:bg-accent-light transition-colors duration-300 font-medium"
          >
            Get In Touch
            <ArrowRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </a>
          <a
            href="/resume.pdf"
            download="Arjun_MB_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-4 px-10 py-5 border border-paper/20 text-paper text-caption tracking-widest uppercase hover:border-accent hover:text-accent transition-colors duration-300 font-medium"
          >
            Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}
