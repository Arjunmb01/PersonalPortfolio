import { motion } from 'framer-motion';
import { Globe, Layout, Layers } from 'lucide-react';
import HUDPanel from '@/components/ui/HUDPanel';

const services = [
    {
        title: 'Web Applications',
        description: 'Building scalable, secure, and high-performance web applications tailored to your business needs.',
        icon: Globe,
        tech: ['React', 'Node.js', 'PostgreSQL']
    },
    {
        title: 'Frontend Development',
        description: 'Crafting responsive, interactive, and visually stunning user interfaces using modern web technologies.',
        icon: Layout,
        tech: ['TypeScript', 'Tailwind', 'Framer Motion']
    },
    {
        title: 'Full Stack Solutions',
        description: 'End-to-end development from database design to deployment, ensuring seamless integration and efficiency.',
        icon: Layers,
        tech: ['MERN Stack', 'REST APIs']
    }
];

const Services = () => {
    return (
        <section id="services" className="py-24 relative overflow-hidden">
            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="font-orbitron text-4xl md:text-5xl font-bold mb-4">
                        CORE <span className="text-primary text-glow">SERVICES</span>
                    </h2>
                    <div className="w-24 h-1 bg-primary mx-auto rounded-full" />
                </motion.div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <HUDPanel className="h-full group hover:border-primary/50 transition-colors" delay={index * 0.1}>
                                <div className="p-8 space-y-6">
                                    <div className="w-16 h-16 rounded-2xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                        <service.icon className="w-8 h-8 text-primary" />
                                    </div>

                                    <div className="space-y-4">
                                        <h3 className="font-orbitron text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed font-rajdhani text-lg">
                                            {service.description}
                                        </p>
                                    </div>

                                    <div className="flex flex-wrap gap-2 pt-4">
                                        {service.tech.map((tech) => (
                                            <span
                                                key={tech}
                                                className="text-[10px] font-mono px-2 py-1 rounded bg-muted border border-border text-muted-foreground uppercase tracking-wider"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </HUDPanel>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden opacity-20">
                <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/20 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-secondary/20 rounded-full blur-[120px]" />
            </div>
        </section>
    );
};

export default Services;
