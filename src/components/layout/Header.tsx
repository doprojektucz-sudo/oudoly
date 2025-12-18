'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone, Fish } from 'lucide-react';

const navigation = [
  { name: 'Úvod', href: '/' },
  { name: 'Rybaření', href: '/rybareni' },
  { name: 'Nocování', href: '/nocovani' },
  { name: 'Galerie', href: '/galerie' },
  { name: 'Kontakt', href: '/kontakt' },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  // Hydration fix - počkej na mount před čtením window
  useEffect(() => {
    setMounted(true);
    // Nastav správnou hodnotu hned po mountu
    setIsScrolled(window.scrollY > 50);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [mounted]);

  // Zavřít menu při změně stránky
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Zamezit scrollování když je otevřené mobilní menu
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Dokud není mounted, renderuj transparentní header (default stav)
  const showScrolledStyle = mounted && isScrolled;

  return (
    <header
      className={`top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showScrolledStyle
          ? 'fixed bg-white/95 backdrop-blur-md shadow-sm'
          : 'absolute bg-transparent'
      } ${isMobileMenuOpen ? 'bg-white/95 backdrop-blur-md' : ''}`}
    >
      <nav className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                showScrolledStyle || isMobileMenuOpen
                  ? 'bg-primary-700'
                  : 'bg-white/20 backdrop-blur-sm'
              }`}
            >
              <Fish className="w-6 h-6 text-white" />
            </div>
            <div>
              <span
                className={`text-xl font-serif font-semibold transition-colors duration-300 ${
                  showScrolledStyle || isMobileMenuOpen
                    ? 'text-primary-700'
                    : 'text-white'
                }`}
              >
                Oudoly
              </span>
              <span
                className={`block text-xs tracking-wider uppercase transition-colors duration-300 ${
                  showScrolledStyle || isMobileMenuOpen
                    ? 'text-neutral-500'
                    : 'text-white/70'
                }`}
              >
                Rybniční kaskáda
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`relative py-2 text-sm font-medium transition-colors duration-300 ${
                  pathname === item.href
                    ? showScrolledStyle
                      ? 'text-primary-600'
                      : 'text-white'
                    : showScrolledStyle
                      ? 'text-neutral-600 hover:text-primary-600'
                      : 'text-white/80 hover:text-white'
                }`}
              >
                {item.name}
                {pathname === item.href && (
                  <motion.div
                    layoutId="activeNav"
                    className={`absolute -bottom-1 left-0 right-0 h-0.5 ${
                      showScrolledStyle ? 'bg-primary-500' : 'bg-white'
                    }`}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+420732878036"
              className={`flex items-center gap-2 text-sm font-medium transition-colors duration-300 ${
                showScrolledStyle
                  ? 'text-neutral-600 hover:text-primary-600'
                  : 'text-white/80 hover:text-white'
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">+420 732 878 036</span>
            </a>
            <Link
              href="/kontakt"
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                showScrolledStyle
                  ? 'bg-primary-700 text-white hover:bg-primary-600'
                  : 'bg-white text-primary-700 hover:bg-white/90'
              }`}
            >
              Rezervovat
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-lg transition-colors ${
              showScrolledStyle || isMobileMenuOpen
                ? 'text-primary-700 hover:bg-neutral-100'
                : 'text-white hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white border-t border-neutral-100"
          >
            <div className="px-4 py-6 space-y-4">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`block py-3 px-4 rounded-xl text-base font-medium transition-colors ${
                    pathname === item.href
                      ? 'bg-primary-50 text-primary-700'
                      : 'text-neutral-700 hover:bg-neutral-50'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-neutral-100">
                <a
                  href="tel:+420732878036"
                  className="flex items-center gap-3 py-3 px-4 text-neutral-600"
                >
                  <Phone className="w-5 h-5" />
                  +420 732 878 036
                </a>
                <Link
                  href="/kontakt"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block mt-4 py-3 px-6 bg-primary-700 text-white text-center font-medium rounded-full"
                >
                  Rezervovat pobyt
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}