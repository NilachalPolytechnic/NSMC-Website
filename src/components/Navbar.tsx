import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Camera } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { cn } from '../utils/cn';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Gallery', href: '/gallery' },
  { name: 'Events', href: '/events' },
  { name: 'Contact', href: '/contact' },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out',
        isScrolled
          ? 'glass-panel py-4'
          : 'bg-transparent py-6'
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group">
          <div className={cn(
            "p-2 rounded-xl transition-colors",
            isScrolled ? "bg-white/10 text-secondary group-hover:bg-secondary group-hover:text-primary" : "bg-white/10 text-neutral-white group-hover:bg-secondary group-hover:text-primary"
          )}>
            <Camera size={24} />
          </div>
          <span className={cn(
            "font-display font-bold text-xl tracking-tight transition-colors",
            isScrolled ? "text-neutral-white" : "text-neutral-white drop-shadow-md"
          )}>
            NSMC
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.href}
                className={({ isActive }) => cn(
                  "text-sm font-medium transition-colors hover:text-secondary",
                  isActive ? "text-secondary" : isScrolled ? "text-neutral-white/90" : "text-neutral-white drop-shadow-md"
                )}
              >
                {link.name}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-neutral-white"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} className="text-neutral-white" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 glass-panel border-t border-white/10 md:hidden"
          >
            <ul className="flex flex-col py-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) => cn(
                      "block px-8 py-4 font-medium transition-colors hover:bg-white/10",
                      isActive ? "text-secondary bg-white/5" : "text-neutral-white hover:text-secondary"
                    )}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
