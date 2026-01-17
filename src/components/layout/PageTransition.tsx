import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface PageTransitionProps {
  children: ReactNode;
}

const pageVariants = {
  initial: {
    opacity: 0,
    scale: 0.98,
    filter: 'blur(10px)',
  },
  animate: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94],
      staggerChildren: 0.1,
    },
  },
  exit: {
    opacity: 0,
    scale: 1.02,
    filter: 'blur(10px)',
    transition: {
      duration: 0.4,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

// Cinematic overlay effect during transition
const overlayVariants = {
  initial: {
    scaleX: 1,
  },
  animate: {
    scaleX: 0,
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.1,
    },
  },
  exit: {
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.76, 0, 0.24, 1],
    },
  },
};

// Scan line effect
const scanLineVariants = {
  initial: {
    y: '-100%',
  },
  animate: {
    y: '100%',
    transition: {
      duration: 0.6,
      ease: 'linear',
      delay: 0.2,
    },
  },
};

const PageTransition = ({ children }: PageTransitionProps) => {
  return (
    <>
      {/* Main content with transition */}
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="min-h-screen"
      >
        {children}
      </motion.div>

      {/* Cinematic overlay */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-50 bg-primary/20 origin-right pointer-events-none"
        style={{ transformOrigin: 'right' }}
      />
      
      {/* Secondary overlay with delay */}
      <motion.div
        variants={overlayVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        className="fixed inset-0 z-50 bg-background origin-right pointer-events-none"
        style={{ 
          transformOrigin: 'right',
          transitionDelay: '0.05s',
        }}
      />

      {/* Scan line effect */}
      <motion.div
        variants={scanLineVariants}
        initial="initial"
        animate="animate"
        className="fixed left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent z-50 pointer-events-none opacity-70"
      />

      {/* Corner glitch effects */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          transition: { duration: 0.3, times: [0, 0.5, 1] }
        }}
        className="fixed top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-primary z-50 pointer-events-none"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0],
          transition: { duration: 0.3, times: [0, 0.5, 1], delay: 0.1 }
        }}
        className="fixed bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-primary z-50 pointer-events-none"
      />
    </>
  );
};

export default PageTransition;
