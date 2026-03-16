import { TeamShowcase } from '../components/TeamShowcase';
import { motion } from 'motion/react';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-32 pb-12"
    >
      <div className="container mx-auto px-4 md:px-8 mb-24">
        <div className="max-w-5xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-8 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-secondary"></span>
            Our Story
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-7xl md:text-9xl lg:text-[10vw] font-display font-bold text-neutral-white mb-12 leading-[0.85] uppercase tracking-tighter"
          >
            About <span className="text-secondary">Us</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl text-neutral-white/70 max-w-3xl leading-relaxed font-sans font-light"
          >
            Discover our journey, our mission, and the creative minds behind the Nilachal Polytechnic Media Club.
          </motion.p>
        </div>
      </div>
      <TeamShowcase />
    </motion.div>
  );
}
