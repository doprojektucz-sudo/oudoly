'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { TreePine, Waves, Sun, Heart, Leaf, House, DropletIcon } from 'lucide-react';

const features = [
  {
    icon: DropletIcon,
    title: 'Čistá voda',
    description: 'Rybníky napájené celoročně čistým potůčkem z okolních lesů.',
  },
  {
    icon: Leaf,
    title: 'Krásná příroda',
    description: 'Hráze spásané ovečkami dotváří idylickou atmosféru.',
  },
  {
    icon: House,
    title: 'Útulná chata',
    description: 'Dřevěná chata se základním vybavením až pro 4 osoby.',
  },
  {
    icon: Waves,
    title: 'Koupání',
    description: 'V létě příjemná teplota vody 22–25 °C pro osvěžení.',
  },
];

export default function About() {
  return (
    <section className="py-20 md:py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="relative h-48 md:h-64 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-main.webp"
                    alt="Pohled na rybníky"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="relative h-32 md:h-40 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-chata.webp"
                    alt="Chata u rybníka"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="pt-8">
                <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/about-ovce.webp"
                    alt="Příroda kolem rybníků"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
            
            {/* Decorative badge */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, type: 'spring' }}
              className="absolute -bottom-6 -right-6 md:bottom-8 md:-right-8 w-28 h-28 md:w-36 md:h-36 bg-accent-500 rounded-full flex items-center justify-center shadow-lg"
            >
              <div className="text-center text-white">
                <span className="block text-2xl md:text-3xl font-serif">25+</span>
                <span className="block text-xs uppercase tracking-wider">let tradice</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
              O nás
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-700 mb-6">
              Kousek ráje na Vysočině
            </h2>
            <p className="text-lg text-neutral-600 mb-6 leading-relaxed">
              Rybniční kaskáda Oudoly je unikátní soustava tří propojených rybníků 
              v&nbsp;srdci Českomoravské vysočiny. Nabízíme rybaření na soukromém 
              revíru s&nbsp;bohatým zarybněním a&nbsp;ubytování přímo u&nbsp;vody.
            </p>
            <p className="text-neutral-500 mb-10">
              Ať už jste vášnivý rybář, nebo jen hledáte klidné místo pro relaxaci, 
              u&nbsp;nás si užijete nezapomenutelný pobyt v&nbsp;objetí přírody.
            </p>

            {/* Features grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-start gap-4"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-primary-700 mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-sm text-neutral-500">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
