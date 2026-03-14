import { motion } from 'motion/react';
import { Calendar, Flag, Users, Star } from 'lucide-react';

const timelineData = [
  {
    year: '2023',
    title: 'Club Formation',
    desc: 'The inception of Nilachal Social Media Club by a group of passionate students.',
    icon: Flag,
    color: 'bg-primary',
  },
  {
    year: '2024',
    title: 'First Major Event Coverage',
    desc: 'Successfully covered the annual Tech Fest, setting a new standard for campus media.',
    icon: Calendar,
    color: 'bg-secondary',
  },
  {
    year: '2025',
    title: 'Team Expansion',
    desc: 'Grew our team to include dedicated videographers, editors, and social media managers.',
    icon: Users,
    color: 'bg-accent',
  },
  {
    year: '2026',
    title: 'Digital Archive Launch',
    desc: 'Launching our official website to preserve and showcase the legacy of our college.',
    icon: Star,
    color: 'bg-primary',
  },
];

export function Timeline() {
  return (
    <section id="timeline" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Our Journey
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
          >
            Club Timeline
          </motion.h3>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-white/10 transform md:-translate-x-1/2 rounded-full" />

          {timelineData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className={`relative flex items-center justify-between md:justify-normal mb-12 group ${
                index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'
              }`}
            >
              {/* Timeline Dot/Icon */}
              <div className="absolute left-6 md:left-1/2 w-12 h-12 rounded-full flex items-center justify-center transform -translate-x-1/2 shadow-lg z-10 bg-primary border-4 border-white/10 group-hover:border-secondary transition-colors duration-300">
                <div className={`w-full h-full rounded-full flex items-center justify-center text-neutral-white ${item.color}`}>
                  <item.icon size={20} />
                </div>
              </div>

              {/* Content Box */}
              <div className={`w-[calc(100%-4rem)] md:w-[calc(50%-3rem)] ml-auto md:ml-0 ${
                index % 2 === 0 ? 'md:mr-auto md:pr-8 text-left md:text-right' : 'md:ml-auto md:pl-8 text-left'
              }`}>
                <div className="glass-panel glass-panel-hover p-6 rounded-2xl">
                  <span className="inline-block px-3 py-1 bg-white/10 text-secondary text-sm font-bold rounded-full mb-3 border border-white/10">
                    {item.year}
                  </span>
                  <h4 className="text-2xl font-display font-bold text-neutral-white mb-2 group-hover:text-secondary transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-neutral-white/70 leading-relaxed">
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
