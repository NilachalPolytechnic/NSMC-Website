import { motion } from 'motion/react';

export function Marquee() {
  const items = [
    "PHOTOGRAPHY", 
    "VIDEOGRAPHY", 
    "DESIGN", 
    "SOCIAL MEDIA", 
    "EVENT COVERAGE", 
    "CREATIVE DIRECTION"
  ];
  
  return (
    <div className="w-full overflow-hidden bg-primary py-6 flex whitespace-nowrap border-y border-white/10 relative z-20">
      <motion.div
        className="flex gap-8 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Infinity, ease: "linear", duration: 25 }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <div key={i} className="flex items-center gap-8">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent font-display font-bold text-3xl md:text-4xl tracking-wider">
              {item}
            </span>
            <span className="text-white/20 text-3xl">•</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
