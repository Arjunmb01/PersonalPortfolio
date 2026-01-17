import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface GlitchTextProps {
  children: string;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'span' | 'p';
}

const GlitchText = ({ children, className, as: Component = 'span' }: GlitchTextProps) => {
  return (
    <motion.span
      className={cn("relative inline-block", className)}
      whileHover="hover"
    >
      <Component className="relative">
        {/* Main text */}
        <span className="relative z-10">{children}</span>
        
        {/* Glitch layers */}
        <motion.span
          className="absolute inset-0 text-accent opacity-0"
          variants={{
            hover: {
              opacity: [0, 0.8, 0, 0.6, 0],
              x: [-2, 2, -1, 1, 0],
              transition: { duration: 0.3 }
            }
          }}
          aria-hidden
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-0 text-secondary opacity-0"
          variants={{
            hover: {
              opacity: [0, 0.6, 0, 0.8, 0],
              x: [2, -2, 1, -1, 0],
              transition: { duration: 0.3 }
            }
          }}
          aria-hidden
        >
          {children}
        </motion.span>
      </Component>
    </motion.span>
  );
};

export default GlitchText;
