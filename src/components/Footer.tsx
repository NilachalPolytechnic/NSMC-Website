import { ArrowUp, Camera, Instagram, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-neutral-white pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      {/* Decorative Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-2 group mb-6 inline-flex">
              <div className="bg-accent text-primary p-2 rounded-xl group-hover:bg-secondary transition-colors">
                <Camera size={24} />
              </div>
              <span className="font-display font-bold text-xl tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent">
                NSMC
              </span>
            </a>
            <p className="text-neutral-white/70 leading-relaxed mb-8 max-w-sm">
              The official creative media team of Nilachal Polytechnic. Capturing stories, preserving memories, and showcasing student talent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-secondary hover:text-primary transition-all duration-300">
                <Mail size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Team', 'Gallery', 'Events', 'Contact'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="text-neutral-white/70 hover:text-secondary transition-colors inline-block transform hover:translate-x-1 duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Contact</h4>
            <ul className="space-y-4 text-neutral-white/70">
              <li>Nilachal Polytechnic</li>
              <li>Bhubaneswar, Odisha</li>
              <li><a href="mailto:contact@nsmc.edu.in" className="hover:text-secondary transition-colors">contact@nsmc.edu.in</a></li>
              <li><a href="tel:+919876543210" className="hover:text-secondary transition-colors">+91 98765 43210</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-lg font-display font-bold mb-6 text-white">Stay Updated</h4>
            <p className="text-neutral-white/70 mb-4">Subscribe to our newsletter for the latest updates and event coverage.</p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-2 w-full focus:outline-none focus:border-secondary focus:bg-white/10 transition-colors text-white placeholder-white/40"
              />
              <button type="submit" className="bg-accent hover:bg-secondary text-primary px-4 py-2 rounded-lg font-medium transition-colors">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-neutral-white/50 text-sm text-center md:text-left">
            &copy; {new Date().getFullYear()} Nilachal Social Media Club. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 text-neutral-white/70 hover:text-secondary transition-colors font-medium text-sm group"
          >
            Back to top
            <div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-secondary group-hover:text-primary transition-all duration-300">
              <ArrowUp size={16} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
