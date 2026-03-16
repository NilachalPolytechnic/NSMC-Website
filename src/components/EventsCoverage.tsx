import { motion } from 'motion/react';
import { Calendar, ExternalLink } from 'lucide-react';

const events = [
  {
    name: 'Tech Fest 2025',
    date: 'October 10, 2025',
    desc: 'Covering the biggest technical symposium of the year.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    name: 'Cultural Fest',
    date: 'December 20, 2025',
    desc: 'A vibrant celebration of art, culture, and student talent.',
    image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    name: 'Sports Day',
    date: 'February 5, 2026',
    desc: 'Capturing the adrenaline and spirit of athletic competition.',
    image: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    name: 'Media Workshops',
    date: 'March 12, 2026',
    desc: 'Training sessions on photography and editing for beginners.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
  {
    name: 'Farewell Ceremony',
    date: 'May 25, 2026',
    desc: 'Bidding adieu to the graduating batch with a heartfelt tribute.',
    image: 'https://images.unsplash.com/photo-1523580494112-071d45815986?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
];

export function EventsCoverage() {
  return (
    <section className="py-16 md:py-32 bg-primary relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-4"
          >
            <span className="w-8 md:w-12 h-px bg-secondary"></span>
            Our Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-neutral-white uppercase leading-none"
          >
            Events Coverage
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col h-full border border-white/10 hover:border-secondary transition-colors duration-300 bg-white/5"
            >
              <div className="relative h-48 md:h-64 overflow-hidden border-b border-white/10">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-primary/40 group-hover:bg-transparent transition-colors duration-300" />
              </div>
              
              <div className="p-6 md:p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 md:gap-3 text-secondary font-bold text-[10px] md:text-xs tracking-widest uppercase mb-3 md:mb-4">
                  <Calendar size={12} className="md:w-3.5 md:h-3.5" />
                  <span>{event.date}</span>
                </div>
                <h4 className="text-2xl md:text-3xl font-display font-bold text-neutral-white mb-3 md:mb-4 uppercase leading-none group-hover:text-secondary transition-colors">
                  {event.name}
                </h4>
                <p className="text-neutral-white/60 font-sans font-light text-xs md:text-sm leading-relaxed mb-6 md:mb-8 flex-grow">
                  {event.desc}
                </p>
                
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-between w-full border-t border-white/10 pt-4 md:pt-6 text-neutral-white font-bold uppercase tracking-widest text-[10px] md:text-xs hover:text-secondary transition-colors duration-300 mt-auto"
                >
                  View Event Album
                  <ExternalLink size={14} className="md:w-4 md:h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
