import { WorkingMoments } from '../components/WorkingMoments';
import { motion } from 'motion/react';
import { PageHero } from '../components/PageHero';

export function Gallery() {
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
        highlight="Gallery"
        subtitle="Visual Archive"
        description="A glimpse into our creative process, behind-the-scenes moments, and the magic we capture."
        backgroundImage="https://images.unsplash.com/photo-1452587925148-ce544e77e70d?q=80&w=2000&auto=format&fit=crop"
      />
      <WorkingMoments />
    </motion.div>
  );
}
