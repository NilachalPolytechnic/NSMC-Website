import { WorkingMoments } from '../components/WorkingMoments';
import { motion } from 'motion/react';

export function Gallery() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 md:pt-32 pb-8 md:pb-12"
    >
      <div className="container mx-auto px-4 md:px-8 mb-12 md:mb-24">
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4 md:mb-8 flex items-center gap-3 md:gap-4"
          >
            <span className="w-6 md:w-12 h-px bg-secondary"></span>
            Visual Archive
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-9xl lg:text-[10vw] font-display font-bold text-neutral-white mb-6 md:mb-12 leading-[0.85] uppercase tracking-tighter"
          >
            Our <span className="text-secondary">Gallery</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-3xl text-neutral-white/70 max-w-3xl leading-relaxed font-sans font-light"
          >
            A glimpse into our creative process, behind-the-scenes moments, and the magic we capture.
          </motion.p>
        </div>
      </div>
      <WorkingMoments />
    </motion.div>
  );
}
