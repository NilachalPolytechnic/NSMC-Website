/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Navbar } from './components/Navbar';
import { HeroVideo } from './components/HeroVideo';
import { ClubIntro } from './components/ClubIntro';
import { WhatWeDo } from './components/WhatWeDo';
import { TeamShowcase } from './components/TeamShowcase';
import { WorkingMoments } from './components/WorkingMoments';
import { EventsCoverage } from './components/EventsCoverage';
import { FeaturedEvent } from './components/FeaturedEvent';
import { Timeline } from './components/Timeline';
import { JoinClub } from './components/JoinClub';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Preloader } from './components/Preloader';
import { CustomCursor } from './components/CustomCursor';
import { Marquee } from './components/Marquee';
import { motion, useScroll, useSpring } from 'motion/react';

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="min-h-screen bg-primary font-sans text-neutral-white selection:bg-secondary/30 selection:text-neutral-white relative overflow-hidden">
      <Preloader />
      <CustomCursor />
      
      {/* Scroll Progress */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary to-accent origin-left z-[100]"
        style={{ scaleX }}
      />

      {/* Animated Background Glowing Orbs */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-secondary/20 blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -40, 0],
            y: [0, -50, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-accent/10 blur-[150px]" 
        />
        <motion.div 
          animate={{ 
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 5 }}
          className="absolute top-[40%] left-[60%] w-[30%] h-[30%] rounded-full bg-secondary/10 blur-[100px]" 
        />
      </div>

      <div className="relative z-10">
        <Navbar />
        <main>
          <HeroVideo />
          <Marquee />
          <ClubIntro />
          <WhatWeDo />
          <TeamShowcase />
          <WorkingMoments />
          <FeaturedEvent />
          <EventsCoverage />
          <Timeline />
          <JoinClub />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
