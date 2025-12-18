'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { MapPin, Phone, Mail, ArrowRight } from 'lucide-react';

export default function ContactSection() {
  const year = new Date().getFullYear();
  return (
    <section className="py-20 md:py-32 bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
              Kontakt
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-700 mb-6">
              Těšíme se na vás
            </h2>
            <p className="text-lg text-neutral-600 mb-10">
              Máte dotazy ohledně rezervace nebo našich služeb? 
              Neváhejte nás kontaktovat. Rádi vám pomůžeme s&nbsp;plánováním 
              vašeho pobytu.
            </p>

            {/* Contact info */}
            <div className="space-y-6 mb-10">
              <a
                href="https://maps.google.com/?q=Oudoly,Kadolec"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-primary-200 transition-colors">
                  <MapPin className="w-5 h-5 text-primary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-700 mb-1">Adresa</h4>
                  <p className="text-neutral-600">
                    Oudoly, 594 51 Kadolec, Vysočina
                  </p>
                </div>
              </a>

              <a
                href="tel:+420732878036"
                className="flex items-start gap-4 group"
              >
                <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-secondary-200 transition-colors">
                  <Phone className="w-5 h-5 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-700 mb-1">Telefon</h4>
                  <p className="text-neutral-600">+420 732 878 036</p>
                </div>
              </a>

              <a href="mailto:kaskada@oudoly.cz" className="flex items-start gap-4 group">
                <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:bg-accent-200 transition-colors">
                  <Mail className="w-5 h-5 text-accent-600" />
                </div>
                <div>
                  <h4 className="font-medium text-primary-700 mb-1">E-mail</h4>
                  <p className="text-neutral-600">kaskada@oudoly.cz</p>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden shadow-[0_8px_30px_rgba(26,61,46,0.12)]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2597.331730464407!2d16.152290550451685!3d49.3837165714275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470d7ba8e7be644f%3A0x6e8547104097b35a!2sOudoly!5e0!3m2!1scs!2scz!4v1678911976659!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Mapa - Oudoly"
              />
            </div>

            {/* Floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -bottom-6 -left-6 md:-bottom-8 md:-left-8 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgba(26,61,46,0.15)]"
            >
              <p className="text-sm text-neutral-500 mb-1">Sezóna {year}</p>
              <p className="text-lg font-serif text-primary-700">Květen – Září</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
