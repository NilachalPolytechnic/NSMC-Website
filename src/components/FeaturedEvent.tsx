import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FeaturedEvent() {
  return (
    <section className="relative py-32 md:py-48 bg-primary overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl glass-panel p-8 md:p-12 rounded-3xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 text-accent font-bold px-4 py-1.5 rounded-full text-sm mb-6 uppercase tracking-wider"
          >
            Featured Highlight
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-6 leading-tight drop-shadow-lg"
          >
            Freshers Party 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-white/90 mb-10 max-w-2xl leading-relaxed drop-shadow-md"
          >
            A spectacular night filled with electrifying performances, unforgettable moments, and the beginning of new journeys. Relive the magic through our exclusive coverage.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="#"
            className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-neutral-white transition-all duration-300 transform hover:scale-105 shadow-xl"
          >
            View Full Gallery
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
