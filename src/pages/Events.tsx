import { EventsCoverage } from '../components/EventsCoverage';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

export function Events() {
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
        highlight="Events"
        subtitle="Experience"
        description="Explore the events we've covered, hosted, and brought to life through our lenses."
        backgroundImage="https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2000&auto=format&fit=crop"
      />
      <EventsCoverage />
    </motion.div>
  );
}
