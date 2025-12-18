'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Check, Star, Fish } from 'lucide-react';
import { accommodationPrices } from '@/lib/data';

const includedFeatures = [
  'Chata až pro 4 osoby',
  'Plně vybavená kuchyňka',
  'Neomezené rybaření',
  'Parkování u chaty',
  'Posezení u ohniště',
  'Využití loďky',
];

export default function PricingPreview() {
  const year = new Date().getFullYear();

  return (
    <section className="py-20 md:py-32 bg-primary-800 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-primary-400 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary-400 rounded-full blur-3xl translate-x-1/2 translate-y-1/2" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm font-medium text-primary-300 tracking-widest uppercase mb-4">
            Ceník {year}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-6">
            Vyberte si svůj pobyt
          </h2>
          <p className="text-lg text-primary-200 max-w-2xl mx-auto">
            V&nbsp;ceně je vždy zahrnuto ubytování v&nbsp;chatě i&nbsp;rybaření
            na všech třech rybnících.
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
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
                  ? 'bg-white shadow-2xl scale-105 z-10'
                  : 'bg-primary-700/50 backdrop-blur'
                  }`}
              >
                {/* Popular badge */}
                {isPopular && (
                  <div className="absolute top-0 right-0 bg-accent-500 text-white text-xs font-medium px-4 py-1.5 rounded-bl-xl flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Nejoblíbenější
                  </div>
                )}

                <div className="p-8">
                  <h3
                    className={`text-lg font-medium mb-2 ${isPopular ? 'text-primary-700' : 'text-white'
                      }`}
                  >
                    {price.name}
                  </h3>
                  <p
                    className={`text-sm mb-6 ${isPopular ? 'text-neutral-500' : 'text-primary-300'
                      }`}
                  >
                    {price.description}
                  </p>

                  <div className="flex items-baseline gap-2 mb-6">
                    <span
                      className={`text-4xl font-serif ${isPopular ? 'text-primary-700' : 'text-white'
                        }`}
                    >
                      {price.price.toLocaleString('cs-CZ')}
                    </span>
                    <span
                      className={
                        isPopular ? 'text-neutral-500' : 'text-primary-300'
                      }
                    >
                      Kč
                    </span>
                  </div>

                  {/* Fish badge */}
                  <div className="flex items-center gap-2 mb-6">
                    <Fish
                      className={`w-4 h-4 ${isPopular ? 'text-primary-600' : 'text-primary-300'
                        }`}
                    />
                    <span
                      className={`text-sm font-medium ${isPopular ? 'text-primary-700' : 'text-white'
                        }`}
                    >
                      Rybaření v ceně
                    </span>
                  </div>

                  <Link
                    href="/kontakt"
                    className={`block w-full py-3 text-center font-medium rounded-full transition-all duration-300 ${isPopular
                      ? 'bg-primary-700 text-white hover:bg-primary-600'
                      : 'bg-white/10 text-white hover:bg-white/20 border border-white/20'
                      }`}
                  >
                    Rezervovat
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Included features box */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 max-w-5xl mx-auto"
        >
          <h4 className="text-lg font-serif text-white mb-6 text-center">
            Vždy v ceně zahrnuto
          </h4>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
            {includedFeatures.map((feature) => (
              <div key={feature} className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-primary-300/20 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-primary-300" />
                </div>
                <span className="text-white/80">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-10"
        >
          <Link
            href="/nocovani"
            className="inline-flex items-center gap-2 text-primary-200 hover:text-white transition-colors"
          >
            Zobrazit kompletní ceník včetně cen ryb
            <Fish className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}