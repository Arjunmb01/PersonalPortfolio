import { motion } from 'framer-motion'
import { SKILLS } from '../../lib/constants'

function SkillTag({ name, delay }: { name: string; delay: number }) {
  return (
    <motion.span
      className="group relative inline-block text-display-sm font-serif text-mist cursor-default overflow-hidden"
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
      whileHover={{ color: '#f5f0e8' }}
    >
      {/* Hover underline */}
      <span className="absolute bottom-0 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-400 ease-expo" />
      {name}
    </motion.span>
  )
}

export default function Skills() {
  return (
    <section id="skills" className="section-pad px-8 lg:px-16 border-t border-paper/5">
      <div className="max-w-7xl mx-auto">

        <motion.p
          className="text-caption text-accent tracking-widest uppercase mb-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.p>

        <motion.h2
          className="font-serif text-display-lg text-paper leading-none mb-20"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          The tools I{' '}
          <span className="font-serif-italic text-accent">master.</span>
        </motion.h2>

        <div className="space-y-16">
          {Object.entries(SKILLS).map(([category, skills], catIdx) => (
            <div key={category} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6 items-start border-b border-paper/5 pb-12">
              {/* Category label */}
              <motion.p
                className="text-caption text-mist tracking-widest uppercase pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: catIdx * 0.05 }}
              >
                {category}
              </motion.p>

              {/* Skills as large typography */}
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                {skills.map((skill, i) => (
                  <SkillTag
                    key={skill}
                    name={skill}
                    delay={catIdx * 0.05 + i * 0.04}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
