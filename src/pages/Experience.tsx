import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, Loader2 } from 'lucide-react';
import HUDPanel from '@/components/ui/HUDPanel';
import { useExperience } from '@/hooks/useExperience';

const Experience = () => {
  const { data: experiences, isLoading, error } = useExperience();

  if (error) {
    console.error('Error loading experience:', error);
  }

  return (
    <section id="experience" className="relative z-10 py-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            {'// CAREER_PATH'}
          </span>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mt-4">
            <span className="text-foreground">MY </span>
            <span className="text-primary text-glow">EXPERIENCE</span>
          </h1>
        </motion.div>

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="ml-3 font-mono text-primary">Loading experience...</span>
          </div>
        ) : (
          /* Timeline */
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent" />

            {/* Experience items */}
            <div className="space-y-12">
              {experiences?.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className={`relative grid lg:grid-cols-2 gap-8 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'
                    }`}
                >
                  {/* Timeline node */}
                  <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary pulse-glow z-10" />

                  {/* Content */}
                  <div className={`pl-16 lg:pl-0 ${index % 2 === 0 ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'}`}>
                    <HUDPanel className="p-6 transition-all duration-300 hover:border-primary/50 hover:shadow-neon group/card">
                      <div className={`flex items-center gap-2 mb-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <Briefcase className="w-4 h-4 text-primary group-hover/card:animate-pulse" />
                        <span className="font-mono text-primary text-sm">{exp.company}</span>
                      </div>

                      <h3 className="font-orbitron text-xl font-bold text-foreground mb-3">
                        {exp.title}
                      </h3>

                      <div className={`flex flex-wrap gap-4 mb-4 text-muted-foreground text-sm ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {exp.start_date} - {exp.end_date || 'Present'}
                        </span>
                        {exp.location && (
                          <span className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            {exp.location}
                          </span>
                        )}
                      </div>

                      <p className={`text-muted-foreground mb-4 ${index % 2 === 0 ? 'lg:text-right' : ''}`}>
                        {exp.description}
                      </p>

                      <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'lg:justify-end' : ''}`}>
                        {exp.technologies?.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded bg-muted border border-border font-mono text-xs text-primary"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </HUDPanel>
                  </div>

                  {/* Empty space for layout */}
                  <div className="hidden lg:block" />
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
