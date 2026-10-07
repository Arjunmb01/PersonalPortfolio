import { motion } from 'framer-motion'
import { ACHIEVEMENTS } from '../../lib/constants'

export default function Achievements() {
  return (
    <section className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        <motion.p
          className="text-caption text-accent tracking-widest uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements
        </motion.p>

        <motion.h2
          className="font-serif text-display-lg text-paper leading-none mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Milestones{' '}
          <span className="font-serif-italic text-accent">along the way.</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0">
          {ACHIEVEMENTS.map((item, i) => (
            <motion.div
              key={item.title}
              className="border-t border-paper/5 py-8 md:pr-16"
              initial={{ opacity: 0, x: i % 2 === 0 ? -24 : 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.05 }}
            >
              <div className="flex items-start gap-4">
                {/* Number marker */}
                <span className="text-caption text-accent/40 tracking-widest mt-1 w-6 flex-shrink-0">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="text-body-lg text-paper font-medium mb-1">{item.title}</h3>
                  <p className="text-body text-mist">{item.detail}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
