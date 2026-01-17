import { motion } from 'framer-motion';
import { User, MapPin, Calendar, Heart, Coffee, Rocket } from 'lucide-react';
import HUDPanel from '@/components/ui/HUDPanel';

const About = () => {
  const personalInfo = [
    { icon: User, label: 'Name', value: 'Arjun M B' },
    { icon: MapPin, label: 'Location', value: 'Bangalore, India' },
    { icon: Calendar, label: 'Experience', value: '1+ Years' },
  ];

  const passions = [
    { icon: Coffee, label: 'Clean Code' },
    { icon: Heart, label: 'Open Source' },
    { icon: Rocket, label: 'Innovation' },
  ];

  return (
    <section id="about" className="relative z-10 py-20 min-h-screen flex items-center">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <span className="font-mono text-primary text-sm tracking-wider">
            {'// ABOUT_ME'}
          </span>
          <h1 className="font-orbitron text-4xl md:text-6xl font-bold mt-4">
            <span className="text-foreground">WHO </span>
            <span className="text-primary text-glow">I AM</span>
          </h1>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - Bio */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-8"
          >
            <HUDPanel title="bio.txt" className="p-6">
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I'm a dedicated Full Stack Developer with over 1+ years of experience
                  building robust and scalable web applications. My expertise spans
                  across the entire development lifecycle, from front-end design to back-end architecture.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I excel in the <span className="text-primary">Modern Web Stack</span> —
                  specializing in React, Node.js, and specialized architectures like MVC and Clean Architecture.
                  My focus is on writing high-performance, maintainable code that delivers
                  exceptional user experiences.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  When I'm not coding, you'll find me contributing to open-source projects,
                  exploring new technologies, or sharing knowledge with the developer community.
                </p>
              </div>
            </HUDPanel>

            {/* Passions */}
            <div className="grid grid-cols-3 gap-4">
              {passions.map((passion, index) => (
                <motion.div
                  key={passion.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <HUDPanel className="p-4 text-center">
                    <passion.icon className="w-8 h-8 text-primary mx-auto mb-2" />
                    <span className="font-mono text-sm text-muted-foreground">
                      {passion.label}
                    </span>
                  </HUDPanel>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Stats & Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="space-y-8"
          >
            {/* Personal Info */}
            <HUDPanel title="personal_info.json" className="p-6">
              <div className="space-y-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={info.label}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className="flex items-center gap-4 p-3 rounded-lg bg-muted/50"
                  >
                    <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/50 flex items-center justify-center">
                      <info.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="font-mono text-xs text-muted-foreground">
                        {info.label}
                      </div>
                      <div className="font-rajdhani text-lg text-foreground">
                        {info.value}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </HUDPanel>

            {/* Code snippet */}
            <HUDPanel title="developer.js" className="p-6">
              <pre className="font-mono text-sm">
                <code>
                  <span className="text-accent">const</span>
                  <span className="text-foreground"> developer</span>
                  <span className="text-muted-foreground"> = </span>
                  <span className="text-foreground">{'{'}</span>
                  {'\n'}
                  <span className="text-muted-foreground">  name: </span>
                  <span className="text-neon-green">"Arjun M B"</span>
                  <span className="text-muted-foreground">,</span>
                  {'\n'}
                  <span className="text-muted-foreground">  role: </span>
                  <span className="text-neon-green">"Full Stack Dev"</span>
                  <span className="text-muted-foreground">,</span>
                  {'\n'}
                  <span className="text-muted-foreground">  skills: </span>
                  <span className="text-foreground">[</span>
                  <span className="text-neon-green">"Full Stack"</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-neon-green">"Architecture"</span>
                  <span className="text-muted-foreground">, </span>
                  <span className="text-neon-green">"Cloud"</span>
                  <span className="text-foreground">]</span>
                  <span className="text-muted-foreground">,</span>
                  {'\n'}
                  <span className="text-muted-foreground">  passion: </span>
                  <span className="text-primary">Infinity</span>
                  {'\n'}
                  <span className="text-foreground">{'}'}</span>
                  <span className="text-muted-foreground">;</span>
                </code>
              </pre>
            </HUDPanel>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
