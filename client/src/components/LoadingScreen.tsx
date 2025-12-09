import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from './Logo';

interface LoadingScreenProps {
  onComplete: () => void;
  minDuration?: number;
}

export function LoadingScreen({ onComplete, minDuration = 2500 }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / minDuration) * 100, 100);
      setProgress(newProgress);
      
      if (newProgress >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setIsComplete(true);
          setTimeout(onComplete, 500);
        }, 300);
      }
    }, 50);

    return () => clearInterval(interval);
  }, [minDuration, onComplete]);

  return (
    <AnimatePresence>
      {!isComplete && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="loading-screen"
        >
          <div className="flex flex-col items-center gap-8">
            {/* Animated water drops */}
            <div className="relative">
              {[...Array(5)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-4 h-6 rounded-full"
                  style={{
                    background: 'linear-gradient(180deg, rgba(96, 176, 224, 0.8) 0%, rgba(48, 144, 192, 0.6) 100%)',
                    borderRadius: '50% 50% 50% 50% / 60% 60% 40% 40%',
                    left: `${(i - 2) * 40}px`,
                  }}
                  initial={{ y: -50, opacity: 0 }}
                  animate={{
                    y: [0, 20, 0],
                    opacity: [0.5, 1, 0.5],
                  }}
                  transition={{
                    duration: 1.5,
                    delay: i * 0.2,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>

            {/* Main Logo */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Logo variant="light" size="xl" />
            </motion.div>

            {/* Tagline */}
            <motion.p
              className="text-center text-lg md:text-xl max-w-md px-4"
              style={{ color: 'hsl(150 25% 25%)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              dir="rtl"
            >
              הופך טיפות מבוזבזות לצמיחה ירוקה
            </motion.p>

            {/* Progress bar */}
            <motion.div
              className="w-64 h-2 rounded-full overflow-hidden"
              style={{ background: 'rgba(45, 138, 94, 0.2)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{ 
                  background: 'linear-gradient(90deg, #3498db 0%, #2d8a5e 100%)',
                  width: `${progress}%`,
                }}
                transition={{ duration: 0.1 }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.span
              className="text-sm font-medium"
              style={{ color: 'hsl(150 25% 35%)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              {Math.round(progress)}%
            </motion.span>
          </div>

          {/* Background water ripples */}
          {[...Array(3)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(52, 152, 219, 0.2) 0%, transparent 70%)',
                width: '300px',
                height: '300px',
                left: '50%',
                top: '50%',
                marginLeft: '-150px',
                marginTop: '-150px',
              }}
              initial={{ scale: 0, opacity: 0.5 }}
              animate={{ scale: 3, opacity: 0 }}
              transition={{
                duration: 3,
                delay: i * 1,
                repeat: Infinity,
                ease: 'easeOut',
              }}
            />
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default LoadingScreen;
