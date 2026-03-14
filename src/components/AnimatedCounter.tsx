import { motion, useInView, useSpring, useTransform } from 'motion/react';
import { useEffect, useRef } from 'react';

export function AnimatedCounter({ value, suffix = "", label }: { value: number, suffix?: string, label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (current) => Math.floor(current) + suffix);

  useEffect(() => {
    if (inView) {
      spring.set(value);
    }
  }, [inView, spring, value]);

  return (
    <div ref={ref} className="flex flex-col items-center justify-center p-6 glass-panel rounded-2xl">
      <motion.span className="text-4xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-secondary to-accent mb-2">
        {display}
      </motion.span>
      <span className="text-neutral-white/70 font-medium text-sm uppercase tracking-wider">{label}</span>
    </div>
  );
}
