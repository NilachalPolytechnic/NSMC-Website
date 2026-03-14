import { motion } from 'motion/react';
import { ArrowRight, Camera, Video, PenTool, Edit3 } from 'lucide-react';

export function JoinClub() {
  return (
    <section className="py-32 md:py-48 bg-transparent relative overflow-hidden z-10">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-secondary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center glass-panel p-12 md:p-20 rounded-[3rem]">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-6"
          >
            Become a Creator
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-8 leading-tight drop-shadow-lg"
          >
            Join the Creative Team
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl md:text-2xl text-neutral-white/80 mb-12 max-w-2xl mx-auto leading-relaxed font-light"
          >
            Are you passionate about capturing moments and telling stories? We are looking for talented individuals to join our ranks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-4 mb-16"
          >
            {[
              { icon: Camera, label: 'Photography' },
              { icon: Video, label: 'Videography' },
              { icon: Edit3, label: 'Editing' },
              { icon: PenTool, label: 'Storytelling' },
            ].map((role, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/5 backdrop-blur-md px-6 py-3 rounded-full border border-white/10 text-neutral-white hover:bg-white/10 transition-colors cursor-default">
                <role.icon size={18} className="text-secondary" />
                <span className="font-medium">{role.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.a
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            href="#contact"
            className="inline-flex items-center gap-3 bg-secondary text-primary font-bold px-10 py-5 rounded-full hover:bg-neutral-white transition-all duration-300 transform hover:scale-105 shadow-2xl text-lg"
          >
            Apply Now
            <ArrowRight size={24} />
          </motion.a>
        </div>
      </div>
    </section>
  );
}
