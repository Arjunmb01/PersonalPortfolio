import { motion } from 'framer-motion';
import { ArrowDown, Zap, Code2, Database } from 'lucide-react';
import Scene3D from '@/components/3d/Scene3D';
import Navigation from '@/components/layout/Navigation';
import HUDPanel from '@/components/ui/HUDPanel';
import TypewriterText from '@/components/ui/TypewriterText';
import GlitchText from '@/components/ui/GlitchText';
import PageTransition from '@/components/layout/PageTransition';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';
import ScrollToTop from '@/components/ui/ScrollToTop';

const Index = () => {
  const roles = [
    'Full Stack Developer',
    'MERN Specialist',
    'UI/UX Enthusiast',
    'Problem Solver'
  ];

  const stats = [
    { icon: Code2, value: '5+', label: 'Projects Completed' },
    { icon: Database, value: '1+', label: 'Years Experience' },
    { icon: Zap, value: '100%', label: 'Client Satisfaction' },
  ];

  return (
    <PageTransition>
      <div className="relative min-h-screen bg-background overflow-hidden">
        {/* Background grid */}
        <div className="fixed inset-0 grid-bg opacity-30" />

        {/* Scanlines overlay */}
        <div className="fixed inset-0 scanlines pointer-events-none" />

        <Navigation />

        <main>
          {/* Hero Section */}
          <section id="home" className="relative min-h-screen flex items-center pt-20">
            {/* 3D Scene */}
            <div className="absolute inset-0 z-0">
              <Scene3D />
            </div>

            <div className="container mx-auto px-6 relative z-10">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left content */}
                <div className="space-y-8">
                  {/* Status badge */}
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-neon-green/30 bg-neon-green/10"
                  >
                    <span className="w-2 h-2 rounded-full bg-neon-green animate-pulse" />
                    <span className="font-mono text-sm text-neon-green">AVAILABLE FOR HIRE</span>
                  </motion.div>

                  {/* Main heading */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="space-y-4"
                  >
                    <h1 className="font-orbitron text-5xl md:text-7xl font-bold leading-tight">
                      <span className="text-foreground">I BUILD</span>
                      <br />
                      <GlitchText className="text-primary text-glow">
                        DIGITAL
                      </GlitchText>
                      <br />
                      <span className="text-foreground">EXPERIENCES</span>
                    </h1>
                  </motion.div>

                  {/* Typewriter subtitle */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="flex items-center gap-3"
                  >
                    <span className="text-primary font-mono">{'>'}</span>
                    <TypewriterText
                      texts={roles}
                      className="text-xl text-muted-foreground"
                    />
                  </motion.div>

                  {/* Description */}
                  <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="text-lg text-muted-foreground max-w-lg leading-relaxed"
                  >
                    Crafting immersive web applications with cutting-edge technologies.
                    Specializing in the MERN stack with a passion for creating
                    seamless user experiences.
                  </motion.p>

                  {/* CTA Buttons */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    className="flex flex-wrap gap-4"
                  >
                    <a
                      href="#projects"
                      className="group relative px-8 py-4 rounded-lg font-rajdhani font-semibold tracking-wider overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-primary" />
                      <div className="absolute inset-0 bg-gradient-to-r from-primary via-secondary to-primary bg-[length:200%_100%] animate-border-flow opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="relative z-10 text-primary-foreground">VIEW PROJECTS</span>
                    </a>
                    <a
                      href="/resume.pdf"
                      download="Arjun_Resume.pdf"
                      className="group px-8 py-4 rounded-lg border-2 border-primary/50 font-rajdhani font-semibold tracking-wider text-primary hover:bg-primary/10 hover:border-primary transition-all flex items-center gap-2"
                    >
                      DOWNLOAD CV
                    </a>
                    <a
                      href="#contact"
                      className="group px-8 py-4 rounded-lg border-2 border-white/20 font-rajdhani font-semibold tracking-wider text-white/70 hover:bg-white/5 hover:border-white transition-all"
                    >
                      CONTACT ME
                    </a>
                  </motion.div>
                </div>

                {/* Right side - Stats panels */}
                <div className="hidden lg:block relative z-10">
                  <div className="relative h-[500px]">
                    {/* Decorative circle */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary/20 opacity-50" />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary/10 opacity-30 rotate-slow" />

                    {/* Stats cards floating */}
                    {stats.map((stat, index) => (
                      <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                        className="absolute"
                        style={{
                          top: `${20 + index * 30}%`,
                          right: `${10 + (index % 2) * 20}%`,
                        }}
                      >
                        <HUDPanel className="p-4 float" delay={0.6 + index * 0.1}>
                          <div className="flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                              <stat.icon className="w-6 h-6 text-primary" />
                            </div>
                            <div>
                              <div className="font-orbitron text-2xl font-bold text-foreground">
                                {stat.value}
                              </div>
                              <div className="font-mono text-xs text-muted-foreground">
                                {stat.label}
                              </div>
                            </div>
                          </div>
                        </HUDPanel>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
              <span className="font-mono text-xs text-muted-foreground tracking-wider">SCROLL</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowDown className="w-5 h-5 text-primary" />
              </motion.div>
            </motion.div>
          </section>

          {/* Sections */}
          <About />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </main>

        {/* Tech stack floating icons */}
        <div className="fixed bottom-8 left-8 z-20 hidden lg:block">
          <HUDPanel title="tech_stack.config" className="p-4">
            <div className="flex gap-3">
              {['M', 'E', 'R', 'N'].map((letter, index) => (
                <motion.div
                  key={letter}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="w-10 h-10 rounded-lg bg-muted border border-border flex items-center justify-center font-orbitron text-lg font-bold text-primary"
                >
                  {letter}
                </motion.div>
              ))}
            </div>
          </HUDPanel>
        </div>

        <ScrollToTop />
      </div>
    </PageTransition>
  );
};

export default Index;
