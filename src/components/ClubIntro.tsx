import { motion } from 'motion/react';
import { Camera, Film, PenTool, Share2 } from 'lucide-react';
import { AnimatedCounter } from './AnimatedCounter';

export function ClubIntro() {
  return (
    <section id="about" className="py-24 md:py-32 bg-transparent relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      {/* Background Watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center pointer-events-none z-0">
        <span className="text-[15vw] font-display font-bold text-stroke whitespace-nowrap opacity-50">NSMC</span>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Who We Are
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-8 leading-tight"
          >
            Nilachal Social Media Club
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-2xl text-neutral-white/70 leading-relaxed font-light"
          >
            "We capture stories, moments, and memories that define campus life."
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 mb-20">
          <AnimatedCounter value={50} suffix="+" label="Events Covered" />
          <AnimatedCounter value={10} suffix="k+" label="Photos Taken" />
          <AnimatedCounter value={100} suffix="+" label="Active Members" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: Camera, title: 'Photography', desc: 'Freezing moments in time.' },
            { icon: Film, title: 'Videography', desc: 'Cinematic storytelling.' },
            { icon: PenTool, title: 'Design', desc: 'Visual communication.' },
            { icon: Share2, title: 'Social Media', desc: 'Digital presence.' },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel glass-panel-hover rounded-2xl p-8 text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-secondary/10 text-secondary mb-6 group-hover:scale-110 group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
                <item.icon size={32} strokeWidth={1.5} />
              </div>
              <h4 className="text-xl font-display font-bold text-neutral-white mb-3">{item.title}</h4>
              <p className="text-neutral-white/60">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
