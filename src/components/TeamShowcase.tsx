import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const batchesData = [
  {
    batchName: 'Faculty In-Charge',
    description: 'The guiding pillars and mentors of the Nilachal Polytechnic Media Club.',
    members: [
      {
        name: 'Shibanika Panda',
        role: 'Chief Coordinator',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
        desc: 'Providing strategic direction and continuous support to the club.',
      },
      {
        name: 'Bibhash Ranjan',
        role: 'Chief Coordinator',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop',
        desc: 'Providing strategic direction and continuous support to the club.',
      },
      {
        name: 'Debashis Pohi',
        role: 'Faculty Advisor',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
        desc: 'Mentoring students in creative media and event management.',
      },
    ]
  },
  {
    batchName: 'Batch 2023-2026',
    description: 'The founding members who established the creative foundation.',
    members: [
      {
        name: 'Aryan Mohanty',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        desc: 'Leading the creative vision for all media projects.',
      },
      {
        name: 'Abhishek Giri',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        desc: 'Leading the creative vision for all media projects.',
      },
      {
        name: 'Binod Sharma',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        desc: 'Leading the creative vision for all media projects.',
      },
      {
        name: 'Shuvranshu Sekhar Sahoo',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        desc: 'Leading the creative vision for all media projects.',
      },
      {
        name: 'Aditiya Kumar Sahu',
        role: 'Lead Photographer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
        desc: 'Capturing the essence of campus life through the lens.',
      },
    ]
  },
  {
    batchName: 'Batch 2024-2027',
    description: 'The current members leading the club to new heights.',
    members: [
      {
        name: 'Rohan Gupta',
        role: 'Videographer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        desc: 'Crafting cinematic stories from college events.',
      },
      {
        name: 'Sneha Reddy',
        role: 'Video Editor',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        desc: 'Bringing raw footage to life with dynamic editing.',
      },
    ]
  },
  {
    batchName: 'Batch 2025-2028',
    description: 'The current members leading the club to new heights.',
    members: [
      {
        name: 'Rohan Gupta',
        role: 'Videographer',
        image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop',
        desc: 'Crafting cinematic stories from college events.',
      },
      {
        name: 'Sneha Reddy',
        role: 'Video Editor',
        image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop',
        desc: 'Bringing raw footage to life with dynamic editing.',
      },
    ]
  },
  {
    batchName: 'Upcoming Members',
    description: 'The upcoming talents of NSMC carrying the legacy forward.',
    members: [
    ]
  }
];

const futureMembers = [
  { title: 'Future Member', role: 'Next Creative' },
  { title: 'Upcoming Batch', role: 'Join Us' },
];

export function TeamShowcase() {
  return (
    <section className="py-16 md:py-32 bg-primary relative z-10 border-t border-white/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="mb-12 md:mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold tracking-widest uppercase text-xs md:text-sm mb-4 md:mb-6 flex items-center gap-4"
          >
            <span className="w-8 md:w-12 h-px bg-secondary"></span>
            The Faces Behind The Lens
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-display font-bold text-neutral-white uppercase leading-none"
          >
            Meet Our Team
          </motion.h3>
        </div>

        <div className="space-y-20 md:space-y-32">
          {batchesData.map((batch, batchIndex) => (
            <div key={batchIndex}>
              <div className="mb-8 md:mb-12 flex flex-col md:flex-row md:items-end justify-between gap-4 md:gap-6 border-b border-white/10 pb-4 md:pb-6">
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-5xl font-display font-bold text-secondary uppercase tracking-wide"
                >
                  {batch.batchName}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-neutral-white/60 font-sans font-light max-w-md text-left md:text-right text-sm md:text-base"
                >
                  {batch.description}
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                {batch.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden bg-white/5 aspect-[3/4] border border-white/10"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-90 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 translate-y-8 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-neutral-white mb-1 md:mb-2 uppercase leading-none">{member.name}</h4>
                      <p className="text-secondary font-bold text-xs md:text-sm mb-2 md:mb-4 tracking-widest uppercase">{member.role}</p>
                      <p className="text-neutral-white/70 font-sans font-light text-xs md:text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 mb-4 md:mb-6">
                        {member.desc}
                      </p>
                      
                      <div className="flex gap-3 md:gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <a href="#" className="text-neutral-white hover:text-secondary transition-colors"><Instagram size={18} className="md:w-5 md:h-5" /></a>
                        <a href="#" className="text-neutral-white hover:text-secondary transition-colors"><Linkedin size={18} className="md:w-5 md:h-5" /></a>
                        <a href="#" className="text-neutral-white hover:text-secondary transition-colors"><Mail size={18} className="md:w-5 md:h-5" /></a>
                      </div>
                    </div>
                  </motion.div>
                ))}
                
                {/* Add future members placeholders to the last batch */}
                {batchIndex === batchesData.length - 1 && futureMembers.map((member, index) => (
                  <motion.div
                    key={`future-${index}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (batch.members.length + index) * 0.1 }}
                    className="group relative overflow-hidden bg-white/5 border border-dashed border-white/20 aspect-[3/4] flex flex-col items-center justify-center text-center p-6 md:p-8 transition-all duration-300 hover:bg-white/10 hover:border-secondary cursor-pointer"
                  >
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-white/20 flex items-center justify-center mb-4 md:mb-6 text-neutral-white/40 group-hover:text-secondary group-hover:border-secondary transition-all duration-300">
                      <span className="text-2xl md:text-3xl font-light">+</span>
                    </div>
                    <h4 className="text-xl md:text-2xl font-display font-bold text-neutral-white/60 group-hover:text-neutral-white transition-colors uppercase">{member.title}</h4>
                    <p className="text-secondary/60 font-bold text-xs md:text-sm mt-2 md:mt-3 tracking-widest uppercase group-hover:text-secondary">{member.role}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
