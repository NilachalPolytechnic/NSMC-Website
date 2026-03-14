import { motion } from 'motion/react';
import { Calendar, ExternalLink } from 'lucide-react';

const events = [
  {
    name: 'Freshers Welcome 2025',
    date: 'August 15, 2025',
    desc: 'Welcoming the new batch with a night of music, dance, and memories.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=1200&auto=format&fit=crop',
    link: '#',
  },
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
    <section id="events" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Our Portfolio
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
          >
            Events Coverage
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl overflow-hidden flex flex-col h-full group"
            >
              <div className="relative h-56 overflow-hidden">
                <img
                  src={event.image}
                  alt={event.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex flex-col flex-grow relative z-10 -mt-6 bg-gradient-to-b from-transparent to-primary/20">
                <div className="flex items-center gap-2 text-secondary text-sm font-medium mb-3">
                  <Calendar size={16} />
                  <span>{event.date}</span>
                </div>
                <h4 className="text-2xl font-display font-bold text-neutral-white mb-3 group-hover:text-secondary transition-colors">
                  {event.name}
                </h4>
                <p className="text-neutral-white/70 text-sm leading-relaxed mb-6 flex-grow">
                  {event.desc}
                </p>
                
                <a
                  href={event.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full bg-white/5 border border-white/10 text-neutral-white font-semibold py-3 rounded-xl hover:bg-secondary hover:text-primary transition-colors duration-300 mt-auto"
                >
                  View Event Album
                  <ExternalLink size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
