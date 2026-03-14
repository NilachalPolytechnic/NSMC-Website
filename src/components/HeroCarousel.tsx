import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const slides = [
  {
    title: 'Capturing Campus Stories',
    description: 'The creative minds behind the digital memories of Nilachal Polytechnic.',
    image: 'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?q=80&w=2000&auto=format&fit=crop',
    cta: 'Explore Gallery',
    href: '#gallery',
  },
  {
    title: 'Cinematic Event Coverage',
    description: 'From tech fests to cultural nights, we frame every moment perfectly.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
    cta: 'View Events',
    href: '#events',
  },
  {
    title: 'Creative Media Production',
    description: 'Editing, designing, and producing high-quality content for our college.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop',
    cta: 'Meet the Team',
    href: '#team',
  },
];

export function HeroCarousel() {
  return (
    <section id="home" className="relative h-screen w-full overflow-hidden bg-neutral-dark">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true, dynamicBullets: true }}
        navigation
        loop
        className="h-full w-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index} className="relative h-full w-full">
            {/* Background Image */}
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/50 to-transparent" />
            
            {/* Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="max-w-4xl mx-auto glass-panel p-8 md:p-12 rounded-3xl"
              >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-neutral-white mb-6 tracking-tight drop-shadow-lg">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl text-neutral-white/90 mb-10 max-w-2xl mx-auto drop-shadow-md">
                  {slide.description}
                </p>
                <a
                  href={slide.href}
                  className="inline-flex items-center gap-2 bg-secondary text-primary font-semibold px-8 py-4 rounded-full hover:bg-neutral-white transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  {slide.cta}
                  <ArrowRight size={20} />
                </a>
              </motion.div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
