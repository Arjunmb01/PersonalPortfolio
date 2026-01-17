import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface TypewriterTextProps {
  texts: string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseTime?: number;
}

const TypewriterText = ({
  texts,
  className,
  typingSpeed = 100,
  deletingSpeed = 50,
  pauseTime = 2000
}: TypewriterTextProps) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const text = texts[currentTextIndex];

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (currentText.length < text.length) {
          setCurrentText(text.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseTime);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(text.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentTextIndex((prev) => (prev + 1) % texts.length);
        }
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts, typingSpeed, deletingSpeed, pauseTime]);

  return (
    <span className={cn("font-mono", className)}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity, repeatType: 'reverse' }}
        className="text-primary"
      >
        |
      </motion.span>
    </span>
  );
};

export default TypewriterText;
