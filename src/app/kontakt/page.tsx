'use client';

import { motion } from 'framer-motion';
import {
  MapPin,
  Mail,
  Phone,
  Facebook,
  MessageCircle,
  Calendar,
  Clock,
  Navigation,
  Fish,
  Home,
  Users,
} from 'lucide-react';
import { contacts } from '@/lib/data';
import PageHero from '@/components/PageHero';

export default function KontaktPage() {
  const addressContact = contacts.find((c) => c.type === 'address');
  const emailContact = contacts.find((c) => c.type === 'email');
  const phoneContacts = contacts.filter((c) => c.type === 'phone');
  const facebookContact = contacts.find((c) => c.type === 'facebook');
  const whatsappContact = contacts.find((c) => c.type === 'whatsapp');
  const year = new Date().getFullYear();

  return (
    <main>
      {/* Hero */}
      <PageHero
        image="/images/ubytovani.webp"
        imageAlt="Ubytování Oudoly"
        subtitle="Spojte se s námi"
        title="Kontakt"
        description="Máte dotaz nebo si chcete rezervovat pobyt? Jsme tu pro vás."
      />

      {/* Contact section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-medium text-primary-500 tracking-widest uppercase mb-4">
              Kontaktní údaje
            </span>
            <h2 className="text-3xl md:text-4xl font-serif text-primary-700 mb-6">
              Jak nás kontaktovat
            </h2>
            <p className="text-neutral-600">
              Budeme rádi za každou zprávu. Neváhejte nás kontaktovat
              telefonicky, e-mailem nebo přes sociální sítě.
            </p>
          </motion.div>

          {/* Contact cards grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {/* Phone */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary-100 flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-primary-600" />
              </div>
              <h3 className="text-xl font-serif text-primary-700 mb-4">
                Zavolejte nám
              </h3>
              <div className="space-y-2">
                {phoneContacts.map((phone, index) => (
                  <a
                    key={index}
                    href={`tel:${phone.value.replace(/\s/g, '')}`}
                    className="block text-lg text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                  >
                    {phone.value}
                  </a>
                ))}
              </div>
              <p className="text-sm text-neutral-500 mt-4">
                Po–Ne: 8:00–20:00
              </p>
            </motion.div>

            {/* Email */}
            {emailContact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-secondary-100 flex items-center justify-center mx-auto mb-6">
                  <Mail className="w-8 h-8 text-secondary-600" />
                </div>
                <h3 className="text-xl font-serif text-primary-700 mb-4">
                  Napište e-mail
                </h3>
                <a
                  href={`mailto:${emailContact.value}`}
                  className="text-lg text-neutral-700 hover:text-primary-600 transition-colors font-medium"
                >
                  {emailContact.value}
                </a>
                <p className="text-sm text-neutral-500 mt-4">
                  Odpovídáme do 24 hodin
                </p>
              </motion.div>
            )}

            {/* Address */}
            {addressContact && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-white rounded-2xl p-8 shadow-lg text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent-100 flex items-center justify-center mx-auto mb-6">
                  <MapPin className="w-8 h-8 text-accent-600" />
                </div>
                <h3 className="text-xl font-serif text-primary-700 mb-4">
                  Navštivte nás
                </h3>
                <p className="text-lg text-neutral-700 font-medium">
                  {addressContact.value}
                </p>
                <a
                  href="https://maps.google.com/?q=Oudoly,Kadolec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600 mt-4"
                >
                  <Navigation className="w-4 h-4" />
                  Otevřít navigaci
                </a>
              </motion.div>
            )}
          </div>

          {/* Bottom row */}
          <div className="grid md:grid-cols-2 gap-6">
            {/* Social & Season card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-primary-700 rounded-2xl p-8 text-white"
            >
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6 text-primary-300" />
                <h3 className="text-xl font-serif">Sezóna {year}</h3>
              </div>

              <div className="flex items-center gap-3 mb-4">
                <Clock className="w-5 h-5 text-primary-300" />
                <span className="text-primary-100 text-lg">Květen – Září</span>
              </div>

              <p className="text-primary-300 mb-8">
                Rezervace možná celoročně. Odpovídáme obvykle do 24 hodin.
              </p>

              <div className="border-t border-white/20 pt-6">
                <h4 className="text-sm font-medium text-primary-300 uppercase tracking-wider mb-4">
                  Sledujte nás
                </h4>
                <div className="flex gap-3">
                  {facebookContact && (
                    <a
                      href={facebookContact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-6 h-6" />
                    </a>
                  )}
                  {whatsappContact && (
                    <a
                      href={whatsappContact.value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                      aria-label="WhatsApp"
                    >
                      <MessageCircle className="w-6 h-6" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>

            {/* Quick info card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-8 shadow-lg"
            >
              <h3 className="text-xl font-serif text-primary-700 mb-6">
                Co u nás najdete
              </h3>

              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center flex-shrink-0">
                    <Fish className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">
                      3 rybníky s rybami
                    </h4>
                    <p className="text-sm text-neutral-500">
                      Kapr, amur, lín, štika, candát
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-secondary-100 flex items-center justify-center flex-shrink-0">
                    <Home className="w-6 h-6 text-secondary-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">
                      Útulná chata
                    </h4>
                    <p className="text-sm text-neutral-500">
                      Plně vybavená, přímo u vody
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent-100 flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-accent-600" />
                  </div>
                  <div>
                    <h4 className="font-medium text-neutral-800">
                      Kapacita až 4 osoby
                    </h4>
                    <p className="text-sm text-neutral-500">
                      Ideální pro rodiny i party rybářů
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map section */}
      <section className="h-[500px] relative">
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
        {/* Map overlay card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 md:left-8 md:translate-x-0"
        >
          <div className="bg-white p-6 rounded-2xl shadow-xl">
            <h4 className="font-serif text-lg text-primary-700 mb-2">
              Rybniční kaskáda Oudoly
            </h4>
            <p className="text-sm text-neutral-500 mb-3">
              594 51 Kadolec, Vysočina
            </p>
            <a
              href="https://maps.google.com/?q=Oudoly,Kadolec"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary-500 hover:text-primary-600"
            >
              <Navigation className="w-4 h-4" />
              Otevřít v Google Maps
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}