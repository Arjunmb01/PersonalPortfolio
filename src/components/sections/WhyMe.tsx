import { motion } from 'framer-motion'
import { WHY_ITEMS } from '../../lib/constants'

export default function WhyMe() {
  return (
    <section className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-20 items-start">
          {/* Left label */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-caption text-accent tracking-widest uppercase mb-4">Why me</p>
            <h2 className="font-serif text-display-sm text-paper leading-tight">
              The difference is{' '}
              <span className="font-serif-italic text-accent">in the details.</span>
            </h2>
          </motion.div>

          {/* Right grid of statements */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-0">
            {WHY_ITEMS.map((item, i) => (
              <motion.div
                key={item.title}
                className="border-t border-paper/5 py-8"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.07 }}
              >
                <h3 className="font-serif text-display-sm text-paper mb-2 leading-tight">
                  {item.title}
                </h3>
                <p className="text-body text-mist">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
