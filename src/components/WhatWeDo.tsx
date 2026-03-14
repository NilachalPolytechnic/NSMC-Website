import { motion } from 'motion/react';
import { Camera, Video, Scissors, PenTool, Share2, Calendar, Lightbulb, MonitorPlay } from 'lucide-react';
import { TiltCard } from './TiltCard';

const services = [
  { icon: Camera, title: 'Photography', desc: 'Professional event and portrait photography.' },
  { icon: Video, title: 'Videography', desc: 'High-quality video recording and cinematography.' },
  { icon: Scissors, title: 'Editing', desc: 'Post-production for photos and videos.' },
  { icon: PenTool, title: 'Poster Design', desc: 'Creative graphics and promotional materials.' },
  { icon: Share2, title: 'Social Media Management', desc: 'Handling official college social accounts.' },
  { icon: Calendar, title: 'Event Coverage', desc: 'End-to-end media coverage for campus events.' },
  { icon: Lightbulb, title: 'Creative Direction', desc: 'Conceptualizing media campaigns and themes.' },
  { icon: MonitorPlay, title: 'Media Production', desc: 'Producing short films and documentaries.' },
];

export function WhatWeDo() {
  return (
    <section id="services" className="py-24 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Our Expertise
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
          >
            What We Do
          </motion.h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <TiltCard className="h-full">
                <div className="glass-panel glass-panel-hover p-8 rounded-2xl transition-all duration-300 group h-full flex flex-col">
                  <div className="w-14 h-14 rounded-xl bg-white/10 flex items-center justify-center text-neutral-white mb-6 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300">
                    <service.icon size={28} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-xl font-bold font-display text-neutral-white mb-3 group-hover:text-secondary transition-colors">
                    {service.title}
                  </h4>
                  <p className="text-neutral-white/70 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
