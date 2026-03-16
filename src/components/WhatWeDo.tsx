import { motion } from 'motion/react';
import { Camera, Video, Scissors, PenTool, Share2, Calendar, Lightbulb, MonitorPlay } from 'lucide-react';

const services = [
  { icon: Camera, title: 'Photography', desc: 'Professional event and portrait photography.' },
  { icon: Video, title: 'Videography', desc: 'High-quality video recording and cinematography.' },
  { icon: Scissors, title: 'Editing', desc: 'Post-production for photos and videos.' },
  { icon: PenTool, title: 'Poster Design', desc: 'Creative graphics and promotional materials.' },
  { icon: Share2, title: 'Social Media', desc: 'Handling official college social accounts.' },
  { icon: Calendar, title: 'Event Coverage', desc: 'End-to-end media coverage for campus events.' },
  { icon: Lightbulb, title: 'Creative Direction', desc: 'Conceptualizing media campaigns and themes.' },
  { icon: MonitorPlay, title: 'Media Production', desc: 'Producing short films and documentaries.' },
];

export function WhatWeDo() {
  return (
    <section className="py-24 md:py-32 bg-primary relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
          <div className="max-w-2xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-4"
            >
              <span className="w-12 h-px bg-secondary"></span>
              Our Expertise
            </motion.h2>
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-neutral-white uppercase leading-none"
            >
              What We Do
            </motion.h3>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-white/60 font-sans font-light max-w-md text-lg"
          >
            We specialize in creating compelling visual narratives that elevate the presence of Nilachal Polytechnic across all digital platforms.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="bg-white/5 p-8 hover:bg-secondary hover:text-primary transition-colors duration-300 group"
            >
              <div className="mb-12 text-neutral-white group-hover:text-primary transition-colors duration-300">
                <service.icon size={40} strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-bold font-display mb-4 uppercase tracking-wide">
                {service.title}
              </h4>
              <p className="text-neutral-white/60 group-hover:text-primary/80 font-sans font-light text-sm leading-relaxed transition-colors duration-300">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
