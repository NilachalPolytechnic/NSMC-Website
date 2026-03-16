import { ArrowUp, Camera, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-neutral-white pt-24 pb-12 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group mb-8 inline-flex">
              <div className="bg-secondary text-primary p-2 group-hover:bg-white transition-colors">
                <Camera size={28} strokeWidth={1.5} />
              </div>
              <span className="font-display font-bold text-3xl tracking-tighter text-white uppercase">
                NSMC
              </span>
            </Link>
            <p className="text-neutral-white/60 font-sans font-light leading-relaxed mb-8 max-w-sm">
              The official creative media team of Nilachal Polytechnic. Capturing stories, preserving memories, and showcasing student talent.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all duration-300">
                <Instagram size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all duration-300">
                <Linkedin size={20} strokeWidth={1.5} />
              </a>
              <a href="#" className="w-12 h-12 border border-white/10 flex items-center justify-center hover:border-secondary hover:text-secondary transition-all duration-300">
                <Mail size={20} strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl font-display font-bold mb-8 text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Events', path: '/events' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={scrollToTop} className="text-neutral-white/60 font-sans font-light hover:text-secondary transition-colors inline-block uppercase tracking-wider text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xl font-display font-bold mb-8 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-4 text-neutral-white/60 font-sans font-light">
              <li className="uppercase tracking-wider text-sm">Nilachal Polytechnic</li>
              <li className="uppercase tracking-wider text-sm">Bhubaneswar, Odisha</li>
              <li><a href="mailto:contact@nsmc.edu.in" className="hover:text-secondary transition-colors uppercase tracking-wider text-sm">contact@nsmc.edu.in</a></li>
              <li><a href="tel:+919876543210" className="hover:text-secondary transition-colors uppercase tracking-wider text-sm">+91 98765 43210</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div>
            <h4 className="text-xl font-display font-bold mb-8 text-white uppercase tracking-widest">Stay Updated</h4>
            <p className="text-neutral-white/60 font-sans font-light mb-6">Subscribe to our newsletter for the latest updates and event coverage.</p>
            <form className="flex flex-col gap-4">
              <input
                type="email"
                placeholder="Email address"
                className="bg-transparent border border-white/20 px-4 py-3 w-full focus:outline-none focus:border-secondary transition-colors text-white placeholder-white/40 font-sans font-light"
              />
              <button type="submit" className="bg-secondary hover:bg-white text-primary px-4 py-3 font-bold uppercase tracking-widest text-sm transition-colors border border-secondary hover:border-white">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-8">
          <p className="text-neutral-white/40 font-sans font-light text-sm text-center md:text-left uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Nilachal Social Media Club. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-4 text-neutral-white/60 hover:text-secondary transition-colors font-bold uppercase tracking-widest text-xs group"
          >
            Back to top
            <div className="w-10 h-10 border border-white/20 flex items-center justify-center group-hover:border-secondary group-hover:text-secondary transition-all duration-300">
              <ArrowUp size={16} strokeWidth={1.5} />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
