'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, Info, ArrowRight, Phone } from 'lucide-react';

// Stejný Google kalendář jako na stránce Nocování
const CALENDAR_SRC =
  'https://calendar.google.com/calendar/embed?height=600&wkst=2&bgcolor=%23ffffff&ctz=Europe%2FPrague&showTitle=0&showNav=1&showDate=1&showPrint=0&showTabs=0&showCalendars=0&showTz=0&src=MmQ3MzA1ODY1YzVmZjg3ZDRhYWMxYzBmY2I3MTc2ZTljNDQ2MGM0NWVlNjkwYmE5MTljMGM3NjUzNmVkMzgxMEBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00';

export default function AvailabilityPreview() {
  return (
    <section
      id="obsazenost"
      className="py-20 md:py-32 bg-neutral-50 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-12"
        >
          <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
            Volné termíny
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-primary-700 mb-6">
            Obsazenost chaty
          </h2>
          <p className="text-lg text-neutral-600">
            Podívejte se rovnou zde, kdy je chata volná. Červeně označené dny
            jsou už obsazené.
          </p>
        </motion.div>

        {/* Calendar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-[0_8px_30px_rgba(26,61,46,0.12)] overflow-hidden max-w-4xl mx-auto"
        >
          <iframe
            src={CALENDAR_SRC}
            className="border-0 w-full h-[480px] md:h-[560px]"
            title="Kalendář obsazenosti chaty Oudoly"
            loading="lazy"
          />
        </motion.div>

        {/* Info + CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto mt-8"
        >
          <div className="p-4 rounded-xl bg-sky-100/50 border border-sky-200 mb-8">
            <div className="flex gap-3">
              <Info className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-neutral-600">
                Pro rezervaci konkrétního termínu nás kontaktujte telefonicky
                nebo přes formulář. Rádi vám pobyt potvrdíme.
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              href="/kontakt"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-primary-700 text-white font-medium rounded-full hover:bg-primary-600 transition-colors"
            >
              <Calendar className="w-5 h-5" />
              Rezervovat termín
            </Link>
            <a
              href="tel:+420732878036"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 border-2 border-primary-200 text-primary-700 font-medium rounded-full hover:bg-primary-50 transition-colors"
            >
              <Phone className="w-5 h-5" />
              +420 732 878 036
            </a>
            <Link
              href="/nocovani#kalendar"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-primary-600 font-medium hover:text-primary-700 transition-colors"
            >
              Více o ubytování
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}