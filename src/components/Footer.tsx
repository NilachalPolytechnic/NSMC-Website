import { ArrowUp, Camera, Instagram, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-neutral-white pt-16 md:pt-24 pb-8 md:pb-12 relative overflow-hidden border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 md:gap-12 mb-16 md:mb-24">
          {/* Brand & Logos */}
          <div className="lg:col-span-4">
            <Link to="/" onClick={scrollToTop} className="flex items-center gap-3 group mb-6 md:mb-8 inline-flex">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl transition-all duration-300 flex items-center justify-center overflow-hidden bg-white/10 group-hover:bg-white/20">
                {/* Replace src with your actual NSMC logo path */}
                <img src="https://placehold.co/100x100/1a1a1a/00B4D8?text=NSMC" alt="NSMC Logo" className="w-full h-full object-cover" />
              </div>
              <span className="font-display font-bold text-2xl md:text-3xl tracking-tighter text-white uppercase">
                NSMC
              </span>
            </Link>
            <p className="text-neutral-white/60 font-sans font-light leading-relaxed mb-6 md:mb-8 max-w-sm text-sm md:text-base">
              The official creative media team of Nilachal Polytechnic. Capturing stories, preserving memories, and showcasing student talent.
            </p>
            
            {/* College Logo */}
            <div className="mb-8 md:mb-10">
              <p className="text-[10px] md:text-xs text-neutral-white/40 uppercase tracking-widest mb-3">In association with</p>
              {/* Replace src with your actual College logo path */}
              <img src="https://placehold.co/240x80/1a1a1a/ffffff?text=Nilachal+Polytechnic" alt="Nilachal Polytechnic Logo" className="h-10 md:h-12 object-contain opacity-80 hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex gap-3 md:gap-4">
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center hover:border-transparent hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300">
                <Instagram size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center hover:border-transparent hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300">
                <Linkedin size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
              </a>
              <a href="#" className="w-10 h-10 md:w-12 md:h-12 border border-white/10 flex items-center justify-center hover:border-transparent hover:bg-gradient-to-r hover:from-secondary hover:to-accent hover:text-white transition-all duration-300">
                <Mail size={18} strokeWidth={1.5} className="md:w-5 md:h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-lg md:text-xl font-display font-bold mb-6 md:mb-8 text-white uppercase tracking-widest">Quick Links</h4>
            <ul className="space-y-3 md:space-y-4">
              {[
                { name: 'Home', path: '/' },
                { name: 'About', path: '/about' },
                { name: 'Team', path: '/team' },
                { name: 'Gallery', path: '/gallery' },
                { name: 'Events', path: '/events' },
                { name: 'Contact', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link to={link.path} onClick={scrollToTop} className="text-neutral-white/60 font-sans font-light hover:text-secondary transition-colors inline-block uppercase tracking-wider text-xs md:text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-3">
            <h4 className="text-lg md:text-xl font-display font-bold mb-6 md:mb-8 text-white uppercase tracking-widest">Contact</h4>
            <ul className="space-y-3 md:space-y-4 text-neutral-white/60 font-sans font-light">
              <li className="uppercase tracking-wider text-xs md:text-sm">Nilachal Polytechnic</li>
              <li className="uppercase tracking-wider text-xs md:text-sm">Bhubaneswar, Odisha</li>
              <li><a href="mailto:contact@nsmc.edu.in" className="hover:text-secondary transition-colors uppercase tracking-wider text-xs md:text-sm">contact@nsmc.edu.in</a></li>
              <li><a href="tel:+919876543210" className="hover:text-secondary transition-colors uppercase tracking-wider text-xs md:text-sm">+91 98765 43210</a></li>
            </ul>
          </div>

          {/* Map Integration */}
          <div className="lg:col-span-3 flex flex-col">
            <h4 className="text-lg md:text-xl font-display font-bold mb-6 md:mb-8 text-white uppercase tracking-widest">Find Us</h4>
            <div className="w-full h-48 md:flex-grow min-h-[200px] bg-white/5 border border-white/10 relative overflow-hidden group">
              <iframe 
                src="https://maps.google.com/maps?q=Nilachal%20Polytechnic,%20Bhubaneswar&t=&z=14&ie=UTF8&iwloc=&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0 grayscale contrast-125 opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
              ></iframe>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-8">
          <p className="text-neutral-white/40 font-sans font-light text-xs md:text-sm text-center md:text-left uppercase tracking-wider">
            &copy; {new Date().getFullYear()} Nilachal Social Media Club. All rights reserved.
          </p>
          
          <button
            onClick={scrollToTop}
            className="flex items-center gap-3 md:gap-4 text-neutral-white/60 hover:text-secondary transition-colors font-bold uppercase tracking-widest text-[10px] md:text-xs group"
          >
            Back to top
            <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 flex items-center justify-center group-hover:border-transparent group-hover:bg-gradient-to-r group-hover:from-secondary group-hover:to-accent group-hover:text-white transition-all duration-300">
              <ArrowUp size={14} strokeWidth={1.5} className="md:w-4 md:h-4" />
            </div>
          </button>
        </div>
      </div>
    </footer>
  );
}
