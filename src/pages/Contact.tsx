import { JoinClub } from '../components/JoinClub';
import { Contact as ContactSection } from '../components/Contact';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

export function Contact() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-0"
    >
      <PageHero
        title="Get in"
        highlight="Touch"
        subtitle="Connect"
        description="Whether you want to join our creative family or have an inquiry, we'd love to hear from you."
        backgroundImage="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2000&auto=format&fit=crop"
      />
      <JoinClub />
      <ContactSection />
    </motion.div>
  );
}
