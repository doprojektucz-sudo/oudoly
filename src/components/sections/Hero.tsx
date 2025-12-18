'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, MapPin, Fish, Home } from 'lucide-react';

const stats = [
  { icon: Fish, value: '3', label: 'Rybníky' },
  { icon: MapPin, value: '2.2', label: 'ha vodní plochy' },
  { icon: Home, value: '4', label: 'Lůžka' },
];

export default function Hero() {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-bg.webp"
          alt="Rybniční kaskáda Oudoly"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/60 via-primary-900/40 to-primary-900/80" />
      </div>

      {/* Floating decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-[10%] w-32 h-32 bg-primary-400/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ y: [10, -10, 10] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-[15%] w-48 h-48 bg-secondary-400/10 rounded-full blur-3xl"
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block text-sm font-medium text-primary-300 tracking-widest uppercase mb-6">
            Vysočina • Česká republika
          </span>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6">
            Rybniční kaskáda
            <span className="block text-accent-400 mt-2">Oudoly</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-10 leading-relaxed">
            Tři propojené rybníky v&nbsp;malebné krajině Vysočiny. 
            Ideální místo pro rybaření, relaxaci a&nbsp;odpočinek 
            v&nbsp;přírodě.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <Link
              href="/nocovani"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary-700 font-medium rounded-full hover:bg-neutral-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
            >
              <Home className="w-5 h-5" />
              Rezervovat pobyt
            </Link>
            <Link
              href="/rybareni"
              className="inline-flex items-center gap-2 px-8 py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
            >
              <Fish className="w-5 h-5" />
              Prozkoumat rybaření
            </Link>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-wrap justify-center gap-8 md:gap-16"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <stat.icon className="w-5 h-5 text-accent-400" />
                  <span className="text-3xl md:text-4xl font-serif text-white">
                    {stat.value}
                  </span>
                </div>
                <span className="text-sm text-white/60 uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll dolů"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-8 h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}
