import { motion } from 'motion/react';
import { ArrowRight, Camera, Video, PenTool, Edit3 } from 'lucide-react';
import { Link } from 'react-router-dom';

export function JoinClub() {
  return (
    <section className="py-16 md:py-32 bg-gradient-to-br from-secondary to-accent relative overflow-hidden z-10 border-t border-primary">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 text-[20vw] font-display font-black text-primary/5 leading-none select-none">JOIN</div>
        <div className="absolute bottom-10 right-10 text-[20vw] font-display font-black text-primary/5 leading-none select-none">US</div>
      </div>

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-5xl mx-auto text-center border-4 border-primary p-8 md:p-24 bg-gradient-to-br from-secondary to-accent relative">
          {/* Corner accents */}
          <div className="absolute top-0 left-0 w-4 h-4 md:w-8 md:h-8 border-b-4 border-r-4 border-primary bg-primary" />
          <div className="absolute top-0 right-0 w-4 h-4 md:w-8 md:h-8 border-b-4 border-l-4 border-primary bg-primary" />
          <div className="absolute bottom-0 left-0 w-4 h-4 md:w-8 md:h-8 border-t-4 border-r-4 border-primary bg-primary" />
          <div className="absolute bottom-0 right-0 w-4 h-4 md:w-8 md:h-8 border-t-4 border-l-4 border-primary bg-primary" />

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-primary font-bold tracking-widest uppercase text-xs md:text-sm mb-6 md:mb-8 flex items-center justify-center gap-2 md:gap-4"
          >
            <span className="w-8 md:w-12 h-px bg-primary"></span>
            Become a Creator
            <span className="w-8 md:w-12 h-px bg-primary"></span>
          </motion.h2>
          
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-8xl lg:text-[8vw] font-display font-black text-primary mb-8 md:mb-12 leading-[0.85] uppercase tracking-tighter"
          >
            Join the Creative Team
          </motion.h3>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl md:text-3xl text-primary/80 mb-10 md:mb-16 max-w-3xl mx-auto leading-relaxed font-sans font-medium"
          >
            Are you passionate about capturing moments and telling stories? We are looking for talented individuals to join our ranks.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap justify-center gap-3 md:gap-4 mb-12 md:mb-20"
          >
            {[
              { icon: Camera, label: 'Photography' },
              { icon: Video, label: 'Videography' },
              { icon: Edit3, label: 'Editing' },
              { icon: PenTool, label: 'Storytelling' },
            ].map((role, index) => (
              <div key={index} className="flex items-center gap-2 md:gap-3 bg-primary text-white px-4 py-2 md:px-6 md:py-3 border border-primary hover:bg-transparent hover:text-primary transition-colors cursor-default uppercase tracking-widest text-[10px] md:text-xs font-bold">
                <role.icon size={14} className="md:w-4 md:h-4" />
                <span>{role.label}</span>
              </div>
            ))}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 md:gap-4 bg-primary text-white font-bold px-8 py-4 md:px-12 md:py-6 hover:bg-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs md:text-sm border-2 border-primary hover:border-white"
            >
              Apply Now
              <ArrowRight size={20} className="md:w-6 md:h-6" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
