import { motion } from 'motion/react';
import { Camera, Film, PenTool, Share2 } from 'lucide-react';

export function ClubIntro() {
  return (
    <section className="py-24 md:py-32 bg-primary relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-secondary"></span>
            Who We Are
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl lg:text-[6vw] font-display font-bold text-neutral-white mb-8 leading-[0.9] uppercase"
          >
            Nilachal Social Media Club
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-3xl text-neutral-white/70 leading-relaxed font-sans font-light max-w-3xl"
          >
            "We capture stories, moments, and memories that define campus life."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border-t border-l border-white/10">
          {[
            { icon: Camera, title: 'Photography', desc: 'Freezing moments in time.' },
            { icon: Film, title: 'Videography', desc: 'Cinematic storytelling.' },
            { icon: PenTool, title: 'Design', desc: 'Visual communication.' },
            { icon: Share2, title: 'Social Media', desc: 'Digital presence.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-10 border-r border-b border-white/10 hover:bg-white/5 transition-colors group"
            >
              <div className="mb-8 text-secondary">
                <item.icon size={48} strokeWidth={1} />
              </div>
              <h4 className="text-2xl font-display font-bold text-neutral-white mb-4 uppercase tracking-wide">{item.title}</h4>
              <p className="text-neutral-white/60 font-sans font-light">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
