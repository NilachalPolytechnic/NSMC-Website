import { motion } from 'motion/react';

interface PageHeroProps {
  title: string;
  highlight: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
}

export function PageHero({ title, highlight, subtitle, description, backgroundImage }: PageHeroProps) {
  return (
    <div className="relative min-h-[50vh] md:min-h-[60vh] flex flex-col justify-center overflow-hidden pt-24 pb-12 md:pt-32 md:pb-16">
      <div
        className="absolute inset-0 bg-cover bg-center grayscale opacity-30"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
      
      <div className="container mx-auto px-4 md:px-8 relative z-10 mt-12 md:mt-20">
        <div className="max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-widest uppercase text-[10px] md:text-sm mb-4 md:mb-6 flex items-center gap-3 md:gap-4"
          >
            <span className="w-6 md:w-12 h-px bg-secondary"></span>
            {subtitle}
          </motion.h2>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-display font-bold text-neutral-white mb-6 md:mb-8 leading-[0.9] uppercase tracking-tighter"
          >
            {title} <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">{highlight}</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-base sm:text-lg md:text-2xl text-neutral-white/70 max-w-2xl leading-relaxed font-sans font-light"
          >
            {description}
          </motion.p>
        </div>
      </div>
    </div>
  );
}
