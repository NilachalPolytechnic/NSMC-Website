import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function FeaturedEvent() {
  return (
    <section className="relative py-16 md:py-32 bg-primary overflow-hidden border-t border-white/10">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed grayscale opacity-40"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=2000&auto=format&fit=crop)',
        }}
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary/80 to-transparent" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-4 text-secondary font-bold tracking-widest uppercase text-sm mb-8"
          >
            <span className="w-12 h-px bg-secondary"></span>
            Featured Highlight
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-6xl md:text-8xl lg:text-[8vw] font-display font-bold text-neutral-white mb-8 leading-[0.85] uppercase tracking-tighter"
          >
            Freshers Party 2025
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl text-neutral-white/70 mb-12 max-w-2xl leading-relaxed font-sans font-light"
          >
            A spectacular night filled with electrifying performances, unforgettable moments, and the beginning of new journeys. Relive the magic through our exclusive coverage.
          </motion.p>
          
          <motion.a
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            href="#"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-accent text-white font-bold px-10 py-5 rounded-none hover:from-white hover:to-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-sm"
          >
            View Full Gallery
            <ArrowRight size={20} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
