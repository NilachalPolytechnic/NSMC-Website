import { motion, AnimatePresence } from 'motion/react';
import { Camera } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Preloader() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[10000] flex items-center justify-center bg-primary"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.2, 0],
              rotate: [0, 90, 180]
            }}
            transition={{ duration: 1.5, ease: "easeInOut", delay: 0.2 }}
            className="text-secondary"
          >
            <Camera size={64} strokeWidth={1} />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
