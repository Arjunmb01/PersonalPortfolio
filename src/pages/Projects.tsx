import { motion } from 'framer-motion';
import { ExternalLink, Github, Folder, Loader2 } from 'lucide-react';
import HUDPanel from '@/components/ui/HUDPanel';
import ProjectsScene from '@/components/3d/ProjectsScene';
import { useProjects } from '@/hooks/useProjects';

const Projects = () => {
  const { data: projects, isLoading, error } = useProjects();

  const featuredProjects = projects?.filter((p) => p.featured) || [];
  const otherProjects = projects?.filter((p) => !p.featured) || [];

  if (error) {
    console.error('Error loading projects:', error);
  }

  return (
    <section id="projects" className="relative z-10 py-20 min-h-screen">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            {'// FEATURED_WORK'}
          </span>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mt-4">
            <span className="text-foreground">MY </span>
            <span className="text-primary text-glow">PROJECTS</span>
          </h1>
        </motion.div>

        {/* 3D Projects Scene */}
        {projects && projects.length > 0 && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-16"
          >
            <HUDPanel title="projects_3d_viewer.exe" className="h-[350px] md:h-[550px]">
              <div className="h-full">
                <ProjectsScene
                  projects={projects.map(p => ({ id: p.id, title: p.title }))}
                />
              </div>
            </HUDPanel>
          </motion.div>
        )}

        {isLoading ? (
          <div className="flex items-center justify-center py-20">
            <Loader2 className="w-8 h-8 text-primary animate-spin" />
            <span className="ml-3 font-mono text-primary">Loading projects...</span>
          </div>
        ) : (
          <>
            {/* Featured Projects */}
            <div className="space-y-16 mb-20">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                >
                  <HUDPanel className="overflow-hidden">
                    <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                      {/* Image */}
                      <div className="relative h-64 lg:h-auto overflow-hidden">
                        <img
                          src={project.image || '/placeholder.svg'}
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                        <div className="absolute inset-0 bg-primary/10" />
                      </div>

                      {/* Content */}
                      <div className="p-8 flex flex-col justify-center">
                        <span className="font-mono text-primary text-sm mb-2">
                          FEATURED PROJECT
                        </span>
                        <h3 className="font-orbitron text-2xl md:text-3xl font-bold text-foreground mb-4">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-6 leading-relaxed">
                          {project.description}
                        </p>

                        {/* Technologies */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies?.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 rounded bg-muted border border-border font-mono text-xs text-primary"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>

                        {/* Links */}
                        <div className="flex gap-4">
                          {project.github_url && (
                            <a
                              href={project.github_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <Github className="w-5 h-5" />
                              <span className="font-mono text-sm">Code</span>
                            </a>
                          )}
                          {project.live_url && (
                            <a
                              href={project.live_url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
                            >
                              <ExternalLink className="w-5 h-5" />
                              <span className="font-mono text-sm">Live Demo</span>
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </HUDPanel>
                </motion.div>
              ))}
            </div>

            {/* Other Projects */}
            {otherProjects.length > 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <h2 className="font-orbitron text-2xl font-bold text-foreground mb-8">
                  Other Projects
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                    >
                      <HUDPanel className="p-6 h-full flex flex-col hover:border-primary/50 transition-colors group">
                        <div className="flex items-center justify-between mb-4">
                          <Folder className="w-10 h-10 text-primary" />
                          <div className="flex gap-3">
                            {project.github_url && (
                              <a
                                href={project.github_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <Github className="w-5 h-5" />
                              </a>
                            )}
                            {project.live_url && (
                              <a
                                href={project.live_url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-muted-foreground hover:text-primary transition-colors"
                              >
                                <ExternalLink className="w-5 h-5" />
                              </a>
                            )}
                          </div>
                        </div>

                        <h3 className="font-orbitron text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground text-sm mb-4 flex-grow">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-2">
                          {project.technologies?.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="font-mono text-xs text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </HUDPanel>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default Projects;
