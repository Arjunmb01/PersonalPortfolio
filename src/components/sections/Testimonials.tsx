import { motion } from 'framer-motion'

const PHILOSOPHY_QUOTE = {
  text: 'Great software lives at the intersection of robust systems and refined user experience. Whether containerizing APIs or choreographing 60fps animations, every line of code should serve real-world reliability.',
  author: 'Arjun M B',
  role: 'Full-Stack Developer • Bangalore',
}

export default function Testimonials() {
  return (
    <section className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        <motion.p
          className="text-caption text-accent tracking-widest uppercase mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Philosophy & Vision
        </motion.p>

        <motion.blockquote
          className="max-w-3xl"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Opening quote mark */}
          <span className="font-serif text-[8rem] text-accent/20 leading-none block -mb-8 select-none" aria-hidden>
            "
          </span>
          <p className="font-serif text-display-sm text-paper leading-snug mb-10">
            {PHILOSOPHY_QUOTE.text}
          </p>
          <footer className="flex items-center gap-4">
            <div className="w-10 h-px bg-accent" />
            <div>
              <p className="text-body text-paper">{PHILOSOPHY_QUOTE.author}</p>
              <p className="text-caption text-mist tracking-wide">{PHILOSOPHY_QUOTE.role}</p>
            </div>
          </footer>
        </motion.blockquote>
      </div>
    </section>
  )
}
