import { motion } from 'motion/react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section className="py-24 md:py-32 bg-primary relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-sm mb-6 flex items-center gap-4"
          >
            <span className="w-12 h-px bg-secondary"></span>
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-neutral-white uppercase leading-none"
          >
            Contact Us
          </motion.h3>
        </div>

        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col"
          >
            <h4 className="text-4xl font-display font-bold text-neutral-white mb-12 uppercase tracking-wide">Reach Out</h4>
            <div className="space-y-12 flex-grow">
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 flex items-center justify-center text-secondary border border-secondary/30 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shrink-0">
                  <MapPin size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-xl font-display font-bold text-neutral-white mb-2 uppercase tracking-widest">Location</h5>
                  <p className="text-neutral-white/60 font-sans font-light leading-relaxed">Nilachal Polytechnic,<br />Bhubaneswar, Odisha</p>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 flex items-center justify-center text-secondary border border-secondary/30 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shrink-0">
                  <Mail size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-xl font-display font-bold text-neutral-white mb-2 uppercase tracking-widest">Email</h5>
                  <a href="mailto:contact@nsmc.edu.in" className="text-neutral-white/60 font-sans font-light hover:text-secondary transition-colors">contact@nsmc.edu.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-6 group">
                <div className="w-16 h-16 flex items-center justify-center text-secondary border border-secondary/30 group-hover:bg-secondary group-hover:text-primary transition-colors duration-300 shrink-0">
                  <Phone size={28} strokeWidth={1.5} />
                </div>
                <div>
                  <h5 className="text-xl font-display font-bold text-neutral-white mb-2 uppercase tracking-widest">Faculty Coordinator</h5>
                  <p className="text-neutral-white/60 font-sans font-light">Prof. Name Here<br /><a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a></p>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-12 border-t border-white/10">
              <h5 className="text-xl font-display font-bold text-neutral-white mb-8 uppercase tracking-widest">Follow Us</h5>
              <div className="flex gap-6">
                <a href="#" className="w-16 h-16 border border-white/20 text-neutral-white flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">
                  <Instagram size={24} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-16 h-16 border border-white/20 text-neutral-white flex items-center justify-center hover:bg-secondary hover:text-primary hover:border-secondary transition-all duration-300">
                  <Mail size={24} strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white/5 border border-white/10 p-10 md:p-16 relative"
          >
            {/* Decorative corner */}
            <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-secondary" />
            <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-secondary" />

            <h4 className="text-4xl font-display font-bold text-neutral-white mb-12 uppercase tracking-wide">Send a Message</h4>
            <form className="space-y-8">
              <div>
                <label htmlFor="name" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-3">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-secondary outline-none transition-colors duration-300 text-white placeholder-white/20 font-sans font-light"
                  placeholder="YOUR NAME"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-3">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-secondary outline-none transition-colors duration-300 text-white placeholder-white/20 font-sans font-light"
                  placeholder="YOUR.EMAIL@EXAMPLE.COM"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-xs font-bold text-secondary uppercase tracking-widest mb-3">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-0 py-4 bg-transparent border-b border-white/20 focus:border-secondary outline-none transition-colors duration-300 resize-none text-white placeholder-white/20 font-sans font-light"
                  placeholder="HOW CAN WE HELP YOU?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-primary font-bold py-5 uppercase tracking-widest text-sm hover:bg-white transition-colors duration-300 mt-8 border-2 border-secondary hover:border-white"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
