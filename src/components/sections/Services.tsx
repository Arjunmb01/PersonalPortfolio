import { motion } from 'framer-motion'
import { SERVICES } from '../../lib/constants'

function ServiceCard({ service, index }: { service: typeof SERVICES[0]; index: number }) {
  return (
    <motion.div
      className="group relative border-b border-paper/5 py-10 flex flex-col gap-4 hover:border-accent/30 transition-colors duration-500"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.06 }}
    >
      {/* Number */}
      <span className="text-caption text-mist tracking-widest opacity-40">
        {service.number}
      </span>

      {/* Title */}
      <h3 className="font-serif text-display-sm text-paper group-hover:text-accent transition-colors duration-400 leading-tight">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-body text-mist max-w-sm leading-relaxed">
        {service.description}
      </p>

      {/* Tech */}
      <p className="text-caption text-accent/60 tracking-wide">
        {service.tech}
      </p>

      {/* Hover arrow */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-400 translate-x-4 group-hover:translate-x-0">
        <span className="text-accent text-2xl">→</span>
      </div>
    </motion.div>
  )
}

export default function Services() {
  return (
    <section id="services" className="section-pad px-5 sm:px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <div className="mb-20">
          <motion.p
            className="text-caption text-accent tracking-widest uppercase mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Services
          </motion.p>
          <motion.h2
            className="font-serif text-display-lg text-paper leading-none max-w-2xl"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            Let's build something{' '}
            <span className="font-serif-italic text-accent">worth remembering.</span>
          </motion.h2>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.number} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
