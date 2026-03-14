import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';

export function HeroVideo() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-primary">
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover opacity-50"
      >
        <source src="https://cdn.pixabay.com/video/2020/05/24/40087-424641695_large.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/60 to-transparent" />
      
      <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="max-w-5xl mx-auto relative z-10"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1.8 }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-neutral-white font-medium px-4 py-2 rounded-full text-sm mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Official Media Team of Nilachal Polytechnic
          </motion.div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold text-neutral-white mb-6 tracking-tight drop-shadow-2xl">
            Capturing <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Moments</span>,<br/>
            Creating <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Legacy</span>
          </h1>
          
          <p className="text-lg md:text-2xl text-neutral-white/80 mb-10 max-w-2xl mx-auto drop-shadow-md font-light">
            We are the creative minds behind the digital memories, cinematic stories, and visual identity of our campus.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#gallery"
              className="inline-flex items-center gap-2 bg-secondary text-primary font-bold px-8 py-4 rounded-full hover:bg-neutral-white transition-all duration-300 transform hover:scale-105 shadow-[0_0_30px_rgba(56,189,248,0.3)]"
            >
              Explore Our Work
              <ArrowRight size={20} />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 text-neutral-white font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all duration-300"
            >
              Hire Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
