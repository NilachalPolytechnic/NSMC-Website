import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
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
    href: '/gallery',
  },
  {
    title: 'Cinematic Event Coverage',
    description: 'From tech fests to cultural nights, we frame every moment perfectly.',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&w=2000&auto=format&fit=crop',
    cta: 'View Events',
    href: '/events',
  },
  {
    title: 'Creative Media Production',
    description: 'Editing, designing, and producing high-quality content for our college.',
    image: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?q=80&w=2000&auto=format&fit=crop',
    cta: 'Meet the Team',
    href: '/about',
  },
];

export function HeroCarousel() {
  return (
    <section className="relative h-[100dvh] w-full overflow-hidden bg-primary">
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
            {({ isActive }) => (
              <>
                {/* Background Image */}
                <div
                  className="absolute inset-0 bg-cover bg-center grayscale opacity-60"
                  style={{ backgroundImage: `url(${slide.image})` }}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/80 to-transparent" />
                
                {/* Content */}
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4 md:px-8">
                  <motion.div
                    initial={{ opacity: 0, y: 50, skewX: -5 }}
                    animate={isActive ? { opacity: 1, y: 0, skewX: 0 } : { opacity: 0, y: 50, skewX: -5 }}
                    transition={{ duration: 0.8, delay: isActive ? 0.2 : 0 }}
                    className="max-w-5xl mx-auto"
                  >
                    <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[10vw] leading-[0.85] font-display font-bold text-neutral-white mb-4 md:mb-6 tracking-tighter uppercase">
                      {slide.title}
                    </h1>
                    <p className="text-base sm:text-lg md:text-2xl text-neutral-white/70 mb-8 md:mb-10 max-w-2xl mx-auto font-sans font-light">
                      {slide.description}
                    </p>
                    <Link
                      to={slide.href}
                      className="inline-flex items-center gap-3 bg-gradient-to-r from-secondary to-accent text-white font-bold px-6 py-3 md:px-10 md:py-5 rounded-none hover:from-white hover:to-white hover:text-primary transition-all duration-300 uppercase tracking-widest text-xs md:text-sm"
                    >
                      {slide.cta}
                      <ArrowRight size={20} />
                    </Link>
                  </motion.div>
                </div>
              </>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
