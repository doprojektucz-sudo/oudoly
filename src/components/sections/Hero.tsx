'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown, MapPin, Fish, Home } from 'lucide-react';

const slides = [
  {
    image: '/images/hero-bg.webp',
    alt: 'Rybniční kaskáda Oudoly - hlavní pohled',
  },
  {
    image: '/images/kapr.webp',
    alt: 'Rybaření na rybníce',
  },
  {
    image: '/images/ovecky.webp',
    alt: 'Ubytování u rybníků',
  },
];

const stats = [
  { icon: Fish, value: '3', label: 'Rybníky' },
  { icon: MapPin, value: '2.2', label: 'ha vodní plochy' },
  { icon: Home, value: '4', label: 'Lůžka' },
];

const SLIDE_DURATION = 7000;

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, SLIDE_DURATION);
    return () => clearInterval(interval);
  }, [nextSlide]);

  // Progress bar animation
  useEffect(() => {
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min(elapsed / SLIDE_DURATION, 1);
      setProgress(newProgress);
      if (newProgress < 1) {
        requestAnimationFrame(animate);
      }
    };
    const frameId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frameId);
  }, [currentSlide]);

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Carousel - všechny obrázky mají neustále běžící Ken Burns */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-[2000ms] ease-in-out ${
              currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative w-full h-full overflow-hidden">
              <Image
                src={slide.image}
                alt={slide.alt}
                fill
                className="object-cover animate-ken-burns-infinite"
                priority={index === 0}
                sizes="100vw"
                style={{
                  // Offset animace pro každý slide, aby nebyly synchronizované
                  animationDelay: `${index * -5}s`,
                }}
              />
            </div>
          </div>
        ))}

        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/50 via-primary-900/30 to-primary-900/70 z-20" />
      </div>

      {/* Floating decorative elements - hidden on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-20 hidden md:block">
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
      <div className="relative z-30 h-full flex items-center justify-center">
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center pt-16 md:pt-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Location tag - hidden on small mobile */}
            <span className="hidden sm:inline-block text-sm font-medium text-primary-300 tracking-widest uppercase mb-4 md:mb-6">
              Vysočina • Česká republika
            </span>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-4 md:mb-6">
              Rybniční kaskáda
              <span className="block text-accent-400 mt-1 md:mt-2">Oudoly</span>
            </h1>

            {/* Description - shorter on mobile */}
            <p className="text-lg sm:text-xl md:text-2xl text-white/80 max-w-3xl mx-auto mb-8 md:mb-10 leading-relaxed px-4 md:px-0">
              <span className="hidden sm:inline">
                Tři propojené rybníky v&nbsp;malebné krajině Vysočiny. Ideální
                místo pro rybaření, relaxaci a&nbsp;odpočinek v&nbsp;přírodě.
              </span>
              <span className="sm:hidden">
                Tři rybníky na Vysočině. Rybaření, relaxace, příroda.
              </span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-10 md:mb-16">
              <Link
                href="/nocovani"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 bg-white text-primary-700 font-medium rounded-full hover:bg-neutral-50 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                <Home className="w-5 h-5" />
                Rezervovat pobyt
              </Link>
              <Link
                href="/rybareni"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3.5 sm:py-4 border-2 border-white/30 text-white font-medium rounded-full hover:bg-white/10 hover:border-white/50 transition-all duration-300"
              >
                <Fish className="w-5 h-5" />
                Prozkoumat rybaření
              </Link>
            </div>

            {/* Stats - responsive layout */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center gap-6 sm:gap-8 md:gap-16"
            >
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="flex items-center justify-center gap-1.5 sm:gap-2 mb-1 sm:mb-2">
                    <stat.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent-400" />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-serif text-white">
                      {stat.value}
                    </span>
                  </div>
                  <span className="text-xs sm:text-sm text-white/60 uppercase tracking-wider">
                    {stat.label}
                  </span>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-20 sm:bottom-24 left-1/2 -translate-x-1/2 z-40 flex gap-3 sm:gap-4">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className="group relative"
            aria-label={`Přejít na slide ${index + 1}`}
          >
            <div
              className={`relative overflow-hidden transition-all duration-300 h-1.5 sm:h-2 rounded-full ${
                currentSlide === index
                  ? 'w-12 sm:w-16 bg-white/30'
                  : 'w-8 sm:w-12 bg-white/20 hover:bg-white/40'
              }`}
            >
              {currentSlide === index && (
                <div
                  className="absolute inset-y-0 left-0 bg-white rounded-full transition-none"
                  style={{ width: `${progress * 100}%` }}
                />
              )}
            </div>
          </button>
        ))}
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        onClick={scrollToContent}
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 z-40 text-white/60 hover:text-white transition-colors cursor-pointer"
        aria-label="Scroll dolů"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="w-7 h-7 sm:w-8 sm:h-8" />
        </motion.div>
      </motion.button>
    </section>
  );
}