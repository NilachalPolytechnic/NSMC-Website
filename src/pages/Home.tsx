import { HeroCarousel } from '../components/HeroCarousel';
import { ClubIntro } from '../components/ClubIntro';
import { WhatWeDo } from '../components/WhatWeDo';
import { Timeline } from '../components/Timeline';
import { motion } from 'motion/react';

export function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className=""
    >
      <HeroCarousel />
      <ClubIntro />
      <WhatWeDo />
      <Timeline />
    </motion.div>
  );
}
