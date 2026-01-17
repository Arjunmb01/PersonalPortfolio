import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

const ScrollToTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 p-4 rounded-lg bg-card/60 backdrop-blur-xl border border-primary/30 text-primary shadow-neon hover:bg-primary/20 hover:border-primary transition-all group active:scale-95"
                    aria-label="Scroll to top"
                >
                    <div className="relative">
                        {/* HUD corner accents */}
                        <div className="absolute -top-1 -left-1 w-2 h-2 border-t-2 border-l-2 border-primary opacity-60 group-hover:opacity-100" />
                        <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b-2 border-r-2 border-primary opacity-60 group-hover:opacity-100" />

                        <ArrowUp className="w-6 h-6 animate-pulse" />
                    </div>

                    {/* Scanning line effect */}
                    <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none opacity-20">
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/20 to-transparent h-1/2 w-full -translate-y-full group-hover:animate-[scan_2s_linear_infinite]" />
                    </div>
                </motion.button>
            )}
        </AnimatePresence>
    );
};

export default ScrollToTop;
