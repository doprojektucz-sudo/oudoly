'use client';

import Link from 'next/link';
import { Fish, MapPin, Phone, Mail, Facebook, Instagram } from 'lucide-react';

const navigation = {
  main: [
    { name: 'Úvod', href: '/' },
    { name: 'Rybaření', href: '/rybareni' },
    { name: 'Nocování', href: '/nocovani' },
    { name: 'Galerie', href: '/galerie' },
    { name: 'Kontakt', href: '/kontakt' },
  ],
  info: [
    { name: 'Ceník', href: '/nocovani#cenik' },
    { name: 'Návštěvní řád', href: '/nocovani#rad' },
    { name: 'Zarybnění 2025', href: '/rybareni#zarybneni' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-primary-800 text-white">
      {/* Wave decoration */}
      <div className="h-16 bg-neutral-50 relative overflow-hidden">
        <svg
          viewBox="0 0 1440 100"
          className="absolute bottom-0 w-full h-full"
          preserveAspectRatio="none"
        >
          <path
            fill="currentColor"
            className="text-primary-800"
            d="M0,50 C360,100 720,0 1080,50 C1260,75 1380,75 1440,50 L1440,100 L0,100 Z"
          />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-primary-600 rounded-full flex items-center justify-center">
                <Fish className="w-6 h-6 text-white" />
              </div>
              <div>
                <span className="text-xl font-serif font-semibold">Oudoly</span>
                <span className="block text-xs text-primary-300 tracking-wider uppercase">
                  Rybniční kaskáda
                </span>
              </div>
            </Link>
            <p className="text-primary-200 text-sm leading-relaxed">
              Tři propojené rybníky v malebné krajině Vysočiny.
              Ideální místo pro rybaření a odpočinek v přírodě.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-serif text-lg mb-6">Navigace</h4>
            <ul className="space-y-3">
              {navigation.main.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div>
            <h4 className="font-serif text-lg mb-6">Informace</h4>
            <ul className="space-y-3">
              {navigation.info.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-200 hover:text-white transition-colors text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg mb-6">Kontakt</h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="https://maps.google.com/?q=Oudoly,Kadolec"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="text-sm">
                    Oudoly<br />
                    594 51 Kadolec<br />
                    Vysočina
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+420732878036"
                  className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">+420 732 878 036</span>
                </a>
              </li>
              <li>
                <a
                  href="tel:+420608577038"
                  className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <Phone className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">+420 608 577 038</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:kaskada@oudoly.cz"
                  className="flex items-center gap-3 text-primary-200 hover:text-white transition-colors"
                >
                  <Mail className="w-5 h-5 flex-shrink-0" />
                  <span className="text-sm">kaskada@oudoly.cz</span>
                </a>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-10 h-10 bg-primary-700 hover:bg-primary-600 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-primary-300 text-sm">
              © {new Date().getFullYear()} Rybniční kaskáda Oudoly. Všechna práva vyhrazena.
            </p>
            <p className="text-primary-400 text-xs">
              Vytvořeno s láskou k přírodě
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
