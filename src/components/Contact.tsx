import { motion } from 'motion/react';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            Get In Touch
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent"
          >
            Contact Us
          </motion.h3>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-panel p-10 rounded-3xl"
          >
            <h4 className="text-3xl font-display font-bold text-neutral-white mb-8">Reach Out</h4>
            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 border border-secondary/20">
                  <MapPin size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-neutral-white mb-1">Location</h5>
                  <p className="text-neutral-white/70 leading-relaxed">Nilachal Polytechnic,<br />Bhubaneswar, Odisha</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0 border border-accent/20">
                  <Mail size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-neutral-white mb-1">Email</h5>
                  <a href="mailto:contact@nsmc.edu.in" className="text-neutral-white/70 hover:text-secondary transition-colors">contact@nsmc.edu.in</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white shrink-0 border border-white/20">
                  <Phone size={24} />
                </div>
                <div>
                  <h5 className="text-lg font-bold text-neutral-white mb-1">Faculty Coordinator</h5>
                  <p className="text-neutral-white/70">Prof. Name Here<br /><a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a></p>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-8 border-t border-white/10">
              <h5 className="text-lg font-bold text-neutral-white mb-4">Follow Us</h5>
              <div className="flex gap-4">
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-neutral-white flex items-center justify-center hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-300 shadow-md">
                  <Instagram size={20} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 text-neutral-white flex items-center justify-center hover:bg-secondary hover:text-primary hover:scale-110 transition-all duration-300 shadow-md">
                  <Mail size={20} />
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
            className="glass-panel p-10 rounded-3xl"
          >
            <h4 className="text-3xl font-display font-bold text-neutral-white mb-8">Send a Message</h4>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-neutral-white/70 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all duration-300 text-white placeholder-white/30"
                  placeholder="Your Name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-neutral-white/70 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all duration-300 text-white placeholder-white/30"
                  placeholder="your.email@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-neutral-white/70 mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 focus:border-secondary focus:bg-white/10 outline-none transition-all duration-300 resize-none text-white placeholder-white/30"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-secondary text-primary font-bold py-4 rounded-xl hover:bg-white transition-colors duration-300 shadow-lg"
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
