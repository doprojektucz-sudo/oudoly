'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { galleryImages } from '@/lib/data';
import Gallery from '@/components/ui/Gallery';
import PageHero from '@/components/PageHero';

const categories = [
  { id: 'all', name: 'Vše' },
  { id: 'chata', name: 'Chata' },
  { id: 'rybniky', name: 'Rybníky' },
  { id: 'ulovky', name: 'Úlovky' },
];

export default function GaleriePage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredImages =
    activeCategory === 'all'
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <main>
      {/* Hero */}
      <PageHero
        image="/images/galerie.webp"
        imageAlt="Ubytování Oudoly"
        subtitle="Fotogalerie"
        title="Galerie"
        description="Prohlédněte si fotky z&nbsp;našich rybníků, chaty a&nbsp;úlovků
              našich spokojených návštěvníků."
      />
      
      {/* Gallery */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Category filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-300 ${activeCategory === category.id
                  ? 'bg-primary-700 text-white'
                  : 'bg-white text-neutral-600 hover:bg-neutral-100'
                  }`}
              >
                {category.name}
              </button>
            ))}
          </motion.div>

          {/* Gallery grid */}
          <Gallery images={filteredImages} />

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-neutral-500">
                V&nbsp;této kategorii zatím nejsou žádné fotky.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
