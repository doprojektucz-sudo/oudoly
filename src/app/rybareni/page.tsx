'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Fish, Waves, Scale, AlertCircle, CheckCircle, ArrowRight, Info, Anchor, TriangleAlert, CircleCheckBig } from 'lucide-react';
import { ponds, fishPrices, requiredEquipment } from '@/lib/data';
import PageHero from '@/components/PageHero';

const fishingRules = [
  'Rybaření je povoleno pouze ze břehu formou „chyť a pusť"',
  'Osoby mladší 15 let mohou rybařit pouze v doprovodu dospělé osoby',
  'Manipulace s rybou pouze v mokrých rukou a na mokré podložce',
  'Ryby bez zbytečného odkladu opatrně vraťte do vody',
  'Správný rybář pouští všechny trofejní ryby zpět do vody',
  'Povinná podložka pod ryby',
];
const year = new Date().getFullYear();

export default function RybareniPage() {
  return (
    <main>
      {/* Hero */}
      <PageHero
        image="/images/kapr-2.webp"
        imageAlt="Ubytování Oudoly"
        subtitle="Sportovní rybaření"
        title="Rybaření"
        description="Tři rybníky s&nbsp;bohatým zarybněním. Kapr, candát, amur, štika
              a&nbsp;další druhy čekají na vaši návnadu."
      />

      {/* Ponds detail */}
      <section id="zarybneni" className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
              Zarybnění {year}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
              Naše rybníky
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Kompletní přehled zarybnění pro sezónu {year}.
            </p>
          </motion.div>

          <div className="space-y-12">
            {ponds.map((pond, index) => (
              <motion.div
                key={pond.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(26,61,46,0.08)] overflow-hidden"
              >
                <div className="grid lg:grid-cols-3">
                  {/* Image */}
                  <div className="relative h-64 lg:h-auto min-h-[280px]">
                    <Image
                      src={pond.imageUrl || '/images/pond-placeholder.jpg'}
                      alt={pond.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary-900/60 to-transparent lg:bg-gradient-to-t" />
                    <div className="absolute bottom-6 left-6 lg:bottom-auto lg:top-6">
                      <h3 className="text-2xl font-serif text-white mb-2">
                        {pond.name}
                      </h3>
                      <div className="flex items-center gap-4 text-white/80 text-sm">
                        <span className="flex items-center gap-1">
                          <Waves className="w-4 h-4" />
                          {pond.area} ha
                        </span>
                        <span className="flex items-center gap-1">
                          <Scale className="w-4 h-4" />
                          {pond.depth}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Fish list */}
                  <div className="lg:col-span-2 p-6 lg:p-8">
                    <p className="text-neutral-600 mb-6">{pond.description}</p>

                    <h4 className="font-medium text-primary-700 mb-4 flex items-center gap-2">
                      <Fish className="w-5 h-5 text-primary-500" />
                      Zarybnění
                    </h4>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {pond.fish.map((fish, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl"
                        >
                          <div>
                            <span className="font-medium text-primary-700">
                              {fish.species}
                            </span>
                            <span className="block text-xs text-neutral-500">
                              {fish.sizeRange}
                            </span>
                          </div>
                          <span className="text-sm text-neutral-600">
                            {fish.quantity} ks
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fish prices */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Fish prices */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
                Ceník
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
                Odkup ulovených ryb
              </h2>
              <p className="text-neutral-600 mb-8">
                Ryby si můžete po předchozí domluvě odkoupit.
              </p>

              <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-neutral-100">
                <table className="w-full">
                  <thead>
                    <tr className="bg-secondary-100">
                      <th className="text-left p-4 font-medium text-primary-700">
                        Druh
                      </th>
                      <th className="text-left p-4 font-medium text-primary-700">
                        Max. velikost
                      </th>
                      <th className="text-right p-4 font-medium text-primary-700">
                        Cena/kg
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {fishPrices.map((fish, index) => (
                      <tr
                        key={fish.species}
                        className={index % 2 === 0 ? 'bg-white' : 'bg-secondary-50/50'}
                      >
                        <td className="p-4">
                          <div className="flex items-center gap-2">
                            <Fish className="w-4 h-4 text-primary-500" />
                            {fish.species}
                          </div>
                        </td>
                        <td className="p-4 text-neutral-500">
                          {fish.maxSize || '—'}
                        </td>
                        <td className="p-4 text-right font-semibold text-primary-700">
                          {fish.pricePerKg} Kč
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </motion.div>

            {/* Required equipment */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
                Nezapomeňte
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
                Povinná výbava rybáře
              </h2>
              <p className="text-neutral-600 mb-8">
                Pro pohodlné a&nbsp;bezpečné rybaření je nutné mít s&nbsp;sebou
                následující vybavení.
              </p>

              <div className="bg-white rounded-xl shadow-lg p-6 border border-neutral-100">
                <div className="grid sm:grid-cols-2 gap-3">
                  {requiredEquipment.map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CircleCheckBig className="w-5 h-5 text-primary-500 flex-shrink-0" />
                      <span className="text-neutral-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Warning */}
              <div className="mt-6 p-4 rounded-xl bg-amber-50 border border-amber-200">
                <div className="flex gap-3">
                  <TriangleAlert className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-medium text-amber-800 mb-1">
                      Důležité upozornění
                    </h4>
                    <p className="text-sm text-amber-700">
                      Je přísně zakázáno házení pečiva do rybníku nebo ovcím!
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rules & Equipment */}
      <section className="py-20 md:py-32 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <Info className="w-12 h-12 text-primary-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Pravidla rybaření
            </h2>
            <p className="text-white/70">
              Dodržováním těchto pravidel pomáháte udržovat zdravou populaci ryb
              a&nbsp;příjemné prostředí pro všechny návštěvníky.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {fishingRules.map((rule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <div className="w-8 h-8 rounded-full bg-primary-300/20 flex items-center justify-center mb-4">
                  <span className="text-primary-300 font-medium">{index + 1}</span>
                </div>
                <p className="text-white/80">{rule}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 text-center"
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white/10 border border-white/20">
              <Anchor className="w-5 h-5 text-primary-300" />
              <span>Na spodním rybníku je k dispozici lodička</span>
            </div>
          </motion.div>
        </div>
      </section>


      <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="py-20 md:py-32 bg-neutral-50"
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
            Připraveni na úlovek?
          </h2>
          <p className="text-lg text-neutral-600 mb-8 max-w-xl mx-auto">
            Rezervujte si pobyt a&nbsp;užijte si neomezené rybaření na všech třech
            rybnících.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              Rezervovat pobyt
            </Link>
            <Link
              href="/nocovani"
              className="inline-flex items-center justify-center px-8 py-3 bg-white text-primary-700 font-medium rounded-full border border-primary-200 hover:bg-primary-50 transition-colors"
            >
              Zobrazit ceník
            </Link>
          </div>
        </div>
      </motion.section>
    </main>
  );
}
