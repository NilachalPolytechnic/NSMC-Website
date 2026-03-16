import { TeamShowcase } from '../components/TeamShowcase';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

export function Team() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="pb-0"
    >
      <PageHero
        title="Our"
        highlight="Team"
        subtitle="The Creators"
        description="Meet the passionate individuals who bring stories to life through their lenses and creativity."
        backgroundImage="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
      />
      <TeamShowcase />
    </motion.div>
  );
}
