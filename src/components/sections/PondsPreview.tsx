'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Waves, Fish } from 'lucide-react';
import { ponds } from '@/lib/data';

export default function PondsPreview() {
  return (
    <section className="py-20 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
            Naše rybníky
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-700 mb-6">
            Tři propojené rybníky
          </h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Každý rybník má svůj jedinečný charakter a&nbsp;specifické druhy ryb.
            Celková vodní plocha přes 2,2 hektaru.
          </p>
        </motion.div>

        {/* Ponds grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {ponds.map((pond, index) => (
            <motion.div
              key={pond.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              className="group"
            >
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,61,46,0.08)] overflow-hidden hover:shadow-[0_8px_30px_rgba(26,61,46,0.12)] hover:-translate-y-1 transition-all duration-300">
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={pond.imageUrl || '/images/pond-placeholder.jpg'}
                    alt={pond.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-serif text-white mb-1">
                      {pond.name}
                    </h3>
                    <div className="flex items-center gap-2 text-white/80 text-sm">
                      <Waves className="w-4 h-4" />
                      <span>{pond.area} ha</span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-neutral-600 text-sm mb-4 line-clamp-2">
                    {pond.description}
                  </p>

                  {/* Fish preview */}
                  <div className="flex items-center gap-2 mb-4">
                    <Fish className="w-4 h-4 text-primary-500" />
                    <span className="text-sm text-neutral-500">
                      {pond.fish.slice(0, 3).map(f => f.species).join(', ')}
                      {pond.fish.length > 3 && '...'}
                    </span>
                  </div>

                  <Link
                    href="/rybareni"
                    className="inline-flex items-center gap-2 text-primary-600 font-medium text-sm hover:text-primary-700 hover:gap-3 transition-all"
                  >
                    Více o rybníku
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            href="/rybareni"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-600 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
          >
            Zobrazit kompletní zarybnění
            <ArrowRight className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
