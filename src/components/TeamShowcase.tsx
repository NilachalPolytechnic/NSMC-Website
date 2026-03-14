import { motion } from 'motion/react';
import { Instagram, Linkedin, Mail } from 'lucide-react';

const batchesData = [
  {
    batchName: 'Alumni',
    description: 'The founding members who established the creative foundation.',
    members: [
      {
        name: 'Aarav Sharma',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop',
        desc: 'Leading the creative vision for all media projects.',
      },
      {
        name: 'Priya Patel',
        role: 'Lead Photographer',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=800&auto=format&fit=crop',
        desc: 'Capturing the essence of campus life through the lens.',
      },
    ]
  },
  {
    batchName: 'Current Members',
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
      {
        name: 'Vikram Singh',
        role: 'Graphic Designer',
        image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop',
        desc: 'Designing visually stunning posters and graphics.',
      },
      {
        name: 'Ananya Das',
        role: 'Social Media Manager',
        image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=800&auto=format&fit=crop',
        desc: 'Managing our digital presence and engagement.',
      },
    ]
  }
];

const futureMembers = [
  { title: 'Future Member', role: 'Next Creative' },
  { title: 'Upcoming Batch', role: 'Join Us' },
];

export function TeamShowcase() {
  return (
    <section id="team" className="py-24 md:py-32 bg-transparent relative z-10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-semibold tracking-wider uppercase text-sm mb-4"
          >
            The Faces Behind The Lens
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-bold text-neutral-white"
          >
            Meet Our Team
          </motion.h3>
        </div>

        <div className="space-y-24">
          {batchesData.map((batch, batchIndex) => (
            <div key={batchIndex}>
              <div className="mb-10 border-b border-white/10 pb-4">
                <motion.h4 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl font-display font-bold text-secondary mb-2"
                >
                  {batch.batchName}
                </motion.h4>
                <motion.p
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-neutral-white/60"
                >
                  {batch.description}
                </motion.p>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {batch.members.map((member, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group relative overflow-hidden rounded-2xl glass-panel aspect-[3/4]"
                  >
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      <h4 className="text-2xl font-display font-bold text-neutral-white mb-1">{member.name}</h4>
                      <p className="text-secondary font-medium text-sm mb-3">{member.role}</p>
                      <p className="text-neutral-white/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100 line-clamp-2 mb-4">
                        {member.desc}
                      </p>
                      
                      <div className="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                        <a href="#" className="text-neutral-white hover:text-secondary transition-colors"><Instagram size={18} /></a>
                        <a href="#" className="text-neutral-white hover:text-secondary transition-colors"><Linkedin size={18} /></a>
                        <a href="#" className="text-neutral-white hover:text-secondary transition-colors"><Mail size={18} /></a>
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
                    className="group relative overflow-hidden rounded-2xl glass-panel glass-panel-hover border-dashed border-white/20 aspect-[3/4] flex flex-col items-center justify-center text-center p-6 transition-all duration-300 cursor-pointer"
                  >
                    <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mb-4 text-neutral-white/40 group-hover:text-secondary group-hover:scale-110 transition-all duration-300 shadow-sm">
                      <span className="text-2xl font-bold">+</span>
                    </div>
                    <h4 className="text-xl font-display font-bold text-neutral-white/60 group-hover:text-secondary transition-colors">{member.title}</h4>
                    <p className="text-neutral-white/40 font-medium text-sm mt-2 group-hover:text-secondary/70">{member.role}</p>
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
