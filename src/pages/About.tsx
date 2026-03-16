import { Timeline } from '../components/Timeline';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

export function About() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-0"
    >
      <PageHero
        title="About"
        highlight="Us"
        subtitle="Our Story"
        description="Discover our journey, our mission, and the institutions that make our creative endeavors possible."
        backgroundImage="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 md:py-32 relative z-10 border-t border-white/10">
        <div className="container mx-auto px-4 md:px-8 space-y-16 md:space-y-32">
          {/* Nilachal Polytechnic Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-white mb-6 uppercase tracking-wide">
                Nilachal <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Polytechnic</span>
              </h3>
              <div className="space-y-6 text-neutral-white/70 font-sans font-light text-base md:text-lg leading-relaxed">
                <p>
                  Nilachal Polytechnic, established with a vision to impart quality technical education, stands as a premier institution in Bhubaneswar, Odisha. We are committed to nurturing the next generation of engineers and technologists.
                </p>
                <p>
                  Our institution provides state-of-the-art infrastructure, experienced faculty, and a dynamic learning environment that encourages innovation, practical skills, and holistic development among our students.
                </p>
                <p>
                  Beyond academics, Nilachal Polytechnic strongly supports extracurricular activities, fostering clubs and societies that allow students to explore their passions and develop leadership qualities.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2 flex justify-center lg:justify-end"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-12 group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="https://placehold.co/400x400/1a1a1a/ffffff?text=Nilachal+Polytechnic" 
                  alt="Nilachal Polytechnic Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
          </section>

          {/* NSMC Section */}
          <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden bg-white/5 border border-white/10 flex items-center justify-center p-12 group">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary/10 to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <img 
                  src="https://placehold.co/400x400/1a1a1a/00B4D8?text=NSMC" 
                  alt="NSMC Logo" 
                  className="w-full h-full object-contain relative z-10 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-3xl md:text-5xl font-display font-bold text-neutral-white mb-6 uppercase tracking-wide">
                Nilachal Social <span className="text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">Media Club</span>
              </h3>
              <div className="space-y-6 text-neutral-white/70 font-sans font-light text-base md:text-lg leading-relaxed">
                <p>
                  The Nilachal Social Media Club (NSMC) is the official creative media wing of Nilachal Polytechnic. We are a collective of passionate storytellers, photographers, videographers, and digital artists.
                </p>
                <p>
                  Our mission is to capture the vibrant campus life, document significant events, and showcase the immense talent within our student body. We believe in the power of visual media to connect, inspire, and preserve memories.
                </p>
                <p>
                  From covering technical symposiums and cultural fests to creating engaging content for the college's digital platforms, NSMC is at the forefront of Nilachal Polytechnic's digital presence.
                </p>
              </div>
            </motion.div>
          </section>
        </div>
      </section>

      <Timeline />
    </motion.div>
  );
}
