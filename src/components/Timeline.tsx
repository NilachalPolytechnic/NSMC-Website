import { motion } from 'motion/react';
import { Calendar, Flag, Users, Star } from 'lucide-react';

const timelineData = [
  {
    year: '2023',
    title: 'Club Formation',
    desc: 'The inception of Nilachal Social Media Club by a group of passionate students.',
    icon: Flag,
  },
  {
    year: '2024',
    title: 'First Major Event Coverage',
    desc: 'Successfully covered the annual Tech Fest, setting a new standard for campus media.',
    icon: Calendar,
  },
  {
    year: '2025',
    title: 'Team Expansion',
    desc: 'Grew our team to include dedicated videographers, editors, and social media managers.',
    icon: Users,
  },
  {
    year: '2026',
    title: 'Digital Archive Launch',
    desc: 'Launching our official website to preserve and showcase the legacy of our college.',
    icon: Star,
  },
];

export function Timeline() {
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
            Our Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-neutral-white uppercase leading-none"
          >
            Club Timeline
          </motion.h3>
        </div>

        <div className="max-w-5xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/20 transform md:-translate-x-1/2" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal mb-12 md:mb-16 group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute left-6 md:left-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center transform -translate-x-1/2 z-10 bg-primary border border-white/20 group-hover:border-secondary group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-accent transition-colors duration-300">
                <div className="text-neutral-white group-hover:text-white transition-colors duration-300">
                  <item.icon size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
                </div>
              </div>

              {/* Content Box */}
              <div className={`w-[calc(100%-3.5rem)] md:w-[calc(50%-4rem)] ml-auto md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-12 text-left md:text-right' : 'md:ml-auto md:pl-12 text-left'
              }`}>
                <div className="p-6 md:p-8 border border-white/10 bg-white/5 hover:border-secondary transition-colors duration-300 relative">
                  {/* Decorative corner */}
                  <div className={`absolute top-0 w-4 h-4 border-t border-secondary ${index % 2 === 0 ? 'right-0 border-r' : 'left-0 border-l'} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                  
                  <span className="inline-block text-secondary font-display text-3xl md:text-5xl font-bold mb-3 md:mb-4 opacity-50 group-hover:opacity-100 transition-opacity duration-300">
                    {item.year}
                  </span>
                  <h4 className="text-xl md:text-2xl font-display font-bold text-neutral-white mb-3 md:mb-4 uppercase tracking-wide group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-neutral-white/60 font-sans font-light text-sm md:text-base leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
