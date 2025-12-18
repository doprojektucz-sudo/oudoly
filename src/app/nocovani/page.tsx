'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import {
  Home, Bed, Utensils, Waves, Car, Tent, Plug, Droplets, Flame,
  Fish, Radio, Dog, Check, Star, Calendar, ArrowRight,
  Coffee,
  Anchor,
  Snowflake,
  Bath,
  Download,
  FileText,
  Info,
  File
} from 'lucide-react';
import { accommodationPrices, fishPrices, amenities, extraPrice } from '@/lib/data';
import PageHero from '@/components/PageHero';


const rules = [
  {
    title: 'Elektrické spotřebiče',
    description:
      'Maximální spotřeba všech spotřebičů nesmí přesáhnout 1000 W. Lednici lze ponechat zapnutou i během nepřítomnosti.',
  },
  {
    title: 'Zacházení s ohněm',
    description:
      'Při používání krbových kamen dbejte zvýšené opatrnosti. Po použití plynového vařiče vždy uzavřete uzávěr plynu.',
  },
  {
    title: 'Odpadky',
    description:
      'Veškerý odpad je návštěvník povinen odvézt. Bioodpad lze umístit do zeleného kompostéru.',
  },
  {
    title: 'Úklid',
    description:
      'Chatu i prostory odevzdáváte ve stejném stavu, v jakém jste je převzali. Použitá povlečení uložte na gauč.',
  },
];


const cabinAmenities = [
  { icon: Bed, label: '4 lůžka' },
  { icon: Flame, label: 'Plynový sporák' },
  { icon: Coffee, label: 'Rychlovarná konvice' },
  { icon: Anchor, label: 'Lodička' },
  { icon: Snowflake, label: 'Lednice' },
  { icon: Plug, label: '230V zásuvky' },
  { icon: Tent, label: 'Místo na stanování' },
  { icon: Droplets, label: 'Pitná voda' },
  { icon: Flame, label: 'Krb' },
  { icon: Waves, label: 'Koupání' },
  { icon: Home, label: 'Rybaření' },
  { icon: Radio, label: 'Rádio' },
  { icon: Dog, label: 'Dog friendly' },
  { icon: Car, label: 'Parkování' },
  { icon: Bath, label: 'Toaleta' },
];

const visitorRules = [
  'Check-in od 14:00, check-out do 11:00',
  'Zákaz hlučného chování po 22:00',
  'Úklid před odjezdem',
  'Třídění odpadu',
  'Pes na vodítku v areálu',
  'Parkování pouze na vyznačených místech',
];

export default function NocovaniPage() {
  const includedFeatures = [
    'Rybaření na 3 rybnících',
    'Ubytování v chatě (4 lůžka)',
    'Loďka k dispozici',
    'Parkování u chaty',
    'Gril a ohniště',
  ];

  const year = new Date().getFullYear();

  return (
    <main>
      {/* Hero */}
      <PageHero
        image="/images/nocovani-hero.webp"
        imageAlt="Ubytování Oudoly"
        subtitle="Ubytování u vody"
        title="Nocování"
        description="Útulná chata přímo u&nbsp;rybníka. Ideální základna pro rybaření, odpočinek a&nbsp;rodinnou dovolenou."
      />

      {/* Pricing */}
      <section id="cenik" className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
              Ceník {year}
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
              Jednoduché ceny
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              V&nbsp;ceně je vždy zahrnuto ubytování v&nbsp;chatě i&nbsp;rybaření
              na všech třech rybnících.
            </p>
          </motion.div>

          {/* Pricing cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-16">
            {accommodationPrices.map((price, index) => {
              const isPopular = price.type === 'weekend';

              return (
                <motion.div
                  key={price.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className={`relative rounded-2xl overflow-hidden ${isPopular
                    ? 'bg-white shadow-[0_12px_40px_rgba(26,61,46,0.15)] scale-105 z-10 ring-2 ring-accent-500'
                    : 'bg-white shadow-[0_4px_20px_rgba(26,61,46,0.08)]'
                    }`}
                >
                  {isPopular && (
                    <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-medium px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                      <Star className="w-3 h-3" />
                      Nejoblíbenější
                    </div>
                  )}

                  <div className="p-8">
                    <h3 className="text-lg font-medium text-primary-700 mb-2">
                      {price.name}
                    </h3>
                    <p className="text-sm text-neutral-500 mb-6">
                      {price.description}
                    </p>

                    <div className="flex items-baseline gap-2 mb-8">
                      <span className="text-4xl font-serif text-primary-700">
                        {price.price.toLocaleString('cs-CZ')}
                      </span>
                      <span className="text-neutral-500">Kč</span>
                    </div>

                    <ul className="space-y-3 mb-8">
                      {includedFeatures.map((feature) => (
                        <li key={feature} className="flex items-center gap-3">
                          <div className="w-5 h-5 bg-primary-100 rounded-full flex items-center justify-center">
                            <Check className="w-3 h-3 text-primary-600" />
                          </div>
                          <span className="text-sm text-neutral-600">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/kontakt"
                      className={`block w-full py-3 text-center font-medium rounded-full transition-all duration-300 ${isPopular
                        ? 'bg-primary-700 text-white hover:bg-primary-600'
                        : 'bg-neutral-100 text-primary-700 hover:bg-neutral-200'
                        }`}
                    >
                      Rezervovat
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Fish prices */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl p-8 shadow-[0_4px_20px_rgba(26,61,46,0.08)]"
          >
            <h3 className="text-xl font-serif text-primary-700 mb-6 flex items-center gap-2">
              <File className="w-5 h-5 text-primary-500" />
              Další ceny
            </h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {extraPrice.map((extra) => (
                <div
                  key={extra.id}
                  className="flex items-center justify-between p-3 bg-neutral-50 rounded-xl"
                >
                  <span className="font-medium text-primary-700">{extra.name}</span>
                  <span className="text-neutral-600">{extra.price} Kč</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Amenities */}
      <section className="py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Fish prices */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
                Pro rybáře
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
                Odkup ulovených ryb
              </h2>
              <p className="text-neutral-600 mb-8">
                Ryby si můžete odkoupit po předchozí domluvě a&nbsp;zvážení.
              </p>

              <div className="space-y-3">
                {fishPrices.map((fish) => (
                  <div
                    key={fish.species}
                    className="flex items-center justify-between p-4 rounded-xl bg-secondary-100/50"
                  >
                    <div className="flex items-center gap-3">
                      <Fish className="w-5 h-5 text-primary-500" />
                      <span className="text-neutral-700">{fish.species}</span>
                      {fish.maxSize && (
                        <span className="text-sm text-neutral-400">
                          ({fish.maxSize})
                        </span>
                      )}
                    </div>
                    <span className="font-semibold text-primary-700">
                      {fish.pricePerKg} Kč/kg
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Cabin amenities */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
                Co vás čeká
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
                Vybavení chaty
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {cabinAmenities.map((amenity) => {
                  const Icon = amenity.icon;
                  return (
                    <div
                      key={amenity.label}
                      className="flex items-center gap-3 p-3 rounded-xl bg-"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary-500/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary-500" />
                      </div>
                      <span className="text-sm text-neutral-700">
                        {amenity.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rules & Calendar */}
      <section className="py-20 md:py-32 bg-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <FileText className="w-12 h-12 text-primary-300 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif mb-6">
              Návštěvní řád
            </h2>
            <p className="text-white/70">
              Prosíme o&nbsp;dodržování pravidel pro příjemný pobyt všech hostů.
            </p>
          </motion.div>

          {/* Rules grid */}
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {rules.map((rule, index) => (
              <motion.div
                key={rule.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
              >
                <h4 className="font-medium text-white mb-2">{rule.title}</h4>
                <p className="text-white/70 text-sm">{rule.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Download buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-12 flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="/documents/cenik-2025.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-700 rounded-full font-medium hover:bg-primary-300 hover:text-white transition-all"
            >
              <Download className="w-5 h-5" />
              Stáhnout ceník
            </a>
            <a
              href="/documents/navstevni-rad.pdf"
              download
              className="inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-white/30 text-white rounded-full font-medium hover:bg-white/10 transition-all"
            >
              <Download className="w-5 h-5" />
              Stáhnout návštěvní řád
            </a>
          </motion.div>
        </div>
      </section >

      {/* CTA */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
            <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
              Kdy může být vaše?
            </h2>
            <p className="text-lg text-neutral-600">
              Podívejte se na dostupné termíny a&nbsp;rezervujte si pobyt.
            </p>
          </motion.div>

          {/* Calendar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl shadow-lg overflow-hidden max-w-4xl mx-auto"
          >
            <iframe
              src="https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FPrague&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=MmQ3MzA1ODY1YzVmZjg3ZDRhYWMxYzBmY2I3MTc2ZTljNDQ2MGM0NWVlNjkwYmE5MTljMGM3NjUzNmVkMzgxMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
              className="border-0 w-full h-[500px]"
              title="Kalendář obsazenosti"
            />
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-8"
          >
            <Link
              href="/kontakt"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              Rezervovat termín
            </Link>
          </motion.div>

          {/* Info box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-8 max-w-2xl mx-auto p-4 rounded-xl bg-sky-100/50 border border-sky-200"
          >
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-600">
                Červeně označené dny jsou již obsazené. Pro rezervaci nás
                kontaktujte telefonicky nebo prostřednictvím formuláře.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </main >
  );
}
