import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface HUDPanelProps {
  children: ReactNode;
  className?: string;
  title?: string;
  delay?: number;
}

const HUDPanel = ({ children, className, title, delay = 0 }: HUDPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className={cn(
        "relative glass rounded-lg overflow-hidden flex flex-col",
        className
      )}
    >
      {/* Corner decorations */}
      <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2 border-primary" />
      <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2 border-primary" />
      <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2 border-primary" />
      <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2 border-primary" />

      {/* Animated border glow */}
      <div className="absolute inset-0 opacity-50 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
        <div className="absolute top-0 bottom-0 left-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
        <div className="absolute top-0 bottom-0 right-0 w-px bg-gradient-to-b from-transparent via-primary to-transparent" />
      </div>

      {/* Title bar */}
      {title && (
        <div className="px-6 py-3 border-b border-border/50 flex items-center gap-3">
          <div className="flex gap-1.5">
            <div className="w-2 h-2 rounded-full bg-destructive" />
            <div className="w-2 h-2 rounded-full bg-neon-orange" />
            <div className="w-2 h-2 rounded-full bg-neon-green" />
          </div>
          <span className="font-mono text-xs text-muted-foreground tracking-wider">
            {title}
          </span>
        </div>
      )}

      {/* Content */}
      <div className="relative z-10 flex-1 h-full">
        {children}
      </div>
    </motion.div>
  );
};

export default HUDPanel;
