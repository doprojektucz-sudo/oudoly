import { Pond, AccommodationPrice, FishPrice, ExtraPrice, Contact, GalleryImage, Amenity } from '@/types';

// Rybníky a zarybnění 2025
export const ponds: Pond[] = [
  {
    id: '1',
    name: 'Spodní rybník',
    slug: 'spodni',
    area: 0.9,
    depth: 'průměr 1,0 m',
    avgDepth: 1.0,
    description: 'Největší rybník kaskády s lodičkou.',
    imageUrl: '/images/spodni.webp',
    order: 1,
    fish: [
      { id: '1', species: 'Kapr (K3)', sizeRange: '1,5–2,5 kg', quantity: 150, pondId: '1', year: 2025 },
      { id: '2', species: 'Kapr', sizeRange: '5–20 kg', quantity: 50, pondId: '1', year: 2025 },
      { id: '3', species: 'Candát', sizeRange: '1 kg', quantity: 10, pondId: '1', year: 2025 },
      { id: '4', species: 'Amur', sizeRange: '1–8 kg', quantity: 100, pondId: '1', year: 2025 },
      { id: '5', species: 'Štika', sizeRange: '0,5–1,0 kg', quantity: 20, pondId: '1', year: 2025 },
      { id: '6', species: 'Jeseter', sizeRange: '70–90 cm', quantity: 5, pondId: '1', year: 2025 },
    ],
  },
  {
    id: '2',
    name: 'Prostřední rybník',
    slug: 'prostredni',
    area: 0.62,
    depth: 'průměr 0,7 m',
    avgDepth: 0.7,
    description: 'Idylický rybník s bohatou populací línů.',
    imageUrl: '/images/about-main.webp',
    order: 2,
    fish: [
      { id: '7', species: 'Kapr (K3)', sizeRange: '1,5–2,5 kg', quantity: 20, pondId: '2', year: 2025 },
      { id: '8', species: 'Lín', sizeRange: '0,5–1,3 kg', quantity: 300, pondId: '2', year: 2025 },
      { id: '9', species: 'Kapr', sizeRange: '4,0–5,0 kg', quantity: 10, pondId: '2', year: 2025 },
    ],
  },
  {
    id: '3',
    name: 'Horní rybník',
    slug: 'horni',
    area: 0.7,
    depth: 'průměr 1,3 m',
    avgDepth: 1.3,
    description: 'Nejhlubší rybník s klidnou atmosférou.',
    imageUrl: '/images/rybareni-hero.webp',
    order: 3,
    fish: [
      { id: '10', species: 'Kapr (K3)', sizeRange: '1,5–2,5 kg', quantity: 150, pondId: '3', year: 2025 },
    ],
  },
];

// Ceník ubytování
export const accommodationPrices: AccommodationPrice[] = [
  {
    id: '1',
    name: 'Víkend',
    type: 'weekend',
    duration: 'Pá až Ne',
    price: 5000,
    description: 'Ideální pro víkendový únik do přírody',
    order: 1,
    isActive: true,
  },
  {
    id: '2',
    name: 'Všední den',
    type: 'weekday',
    duration: '1 den (min. 2 noci)',
    price: 2000,
    description: 'Pro ty, kdo mají čas i ve všední dny',
    order: 2,
    isActive: true,
  },
  {
    id: '3',
    name: 'Týden',
    type: 'week',
    duration: '6–8 dní',
    price: 10000,
    description: 'Prodloužený pobyt pro skutečné nadšence',
    order: 3,
    isActive: true,
  },
];

// Další ceny
export const additionalPrices = [
  { label: 'Bedna plná dřeva', price: 500 },
  { label: 'Vratná kauce na chatu', price: 1000 },
];

// Ceník ryb k odkupu
export const fishPrices: FishPrice[] = [
  { id: '1', species: 'Kapr', maxSize: 'do 60 cm', pricePerKg: 90, isActive: true, order: 1 },
  { id: '2', species: 'Amur', maxSize: undefined, pricePerKg: 100, isActive: true, order: 2 },
  { id: '3', species: 'Lín', maxSize: undefined, pricePerKg: 150, isActive: true, order: 3 },
  { id: '4', species: 'Štika', maxSize: undefined, pricePerKg: 200, isActive: true, order: 4 },
  { id: '5', species: 'Candát', maxSize: undefined, pricePerKg: 300, isActive: true, order: 5 },
];

// Ceník ryb k odkupu
export const extraPrice: ExtraPrice[] = [
  { id: '1', name: 'Bedna plná dřeva', price: 500, isActive: true, order: 1 },
  { id: '2', name: 'Vratná kauce na chatu', price: 1000, isActive: true, order: 2 },

];

// Kontakty
export const contacts: Contact[] = [
  { id: '1', type: 'address', value: 'OUDOLY, 594 51 Kadolec', label: 'Adresa', order: 1, isActive: true },
  { id: '2', type: 'email', value: 'kaskada@oudoly.cz', label: 'E-mail', order: 2, isActive: true },
  { id: '3', type: 'phone', value: '+420 732 878 036', label: 'Telefon', order: 3, isActive: true },
  { id: '4', type: 'phone', value: '+420 608 577 038', label: 'Telefon 2', order: 4, isActive: true },
  { id: '5', type: 'facebook', value: 'https://www.facebook.com/oudoly', label: 'Facebook', order: 5, isActive: true },
  { id: '6', type: 'whatsapp', value: 'https://wa.me/420732878036', label: 'WhatsApp', order: 6, isActive: true },
];

// Galerie (placeholder URLs - nahradit skutečnými)
export const galleryImages: GalleryImage[] = [
  { id: '1', url: '/images/gallery/chata-exterior.jpg', alt: 'Chata u rybníka', category: 'chata', featured: true, order: 1 },
  { id: '2', url: '/images/gallery/chata-interior.jpg', alt: 'Interiér chaty', category: 'chata', featured: false, order: 2 },
  { id: '3', url: '/images/gallery/chata-krb.jpg', alt: 'Krb v chatě', category: 'chata', featured: false, order: 3 },
  { id: '4', url: '/images/gallery/rybnik-1.jpg', alt: 'Spodní rybník', category: 'rybniky', featured: true, order: 1 },
  { id: '5', url: '/images/gallery/rybnik-2.jpg', alt: 'Prostřední rybník', category: 'rybniky', featured: false, order: 2 },
  { id: '6', url: '/images/rybareni-hero.webp', alt: 'Horní rybník', category: 'rybniky', featured: false, order: 3 },
  { id: '7', url: '/images/gallery/ulovek-1.jpg', alt: 'Kapr 15 kg', category: 'ulovky', featured: true, order: 1 },
  { id: '8', url: '/images/gallery/ulovek-2.jpg', alt: 'Amur', category: 'ulovky', featured: false, order: 2 },
];

// Vybavení chaty
export const amenities: Amenity[] = [
  { id: '1', name: '4 lůžka', icon: 'Bed', order: 1, isActive: true },
  { id: '2', name: 'Plynový sporák', icon: 'Flame', order: 2, isActive: true },
  { id: '3', name: 'Rychlovarná konvice', icon: 'Coffee', order: 3, isActive: true },
  { id: '4', name: 'Lodička', icon: 'Anchor', order: 4, isActive: true },
  { id: '5', name: 'Lednice', icon: 'Snowflake', order: 5, isActive: true },
  { id: '6', name: '230V zásuvky', icon: 'Plug', order: 6, isActive: true },
  { id: '7', name: 'Místo na stanování', icon: 'Tent', order: 7, isActive: true },
  { id: '8', name: 'Pitná voda', icon: 'Droplets', order: 8, isActive: true },
  { id: '9', name: 'Krb', icon: 'Flame', order: 9, isActive: true },
  { id: '10', name: 'Koupání', icon: 'Waves', order: 10, isActive: true },
  { id: '11', name: 'Rybaření', icon: 'Fish', order: 11, isActive: true },
  { id: '12', name: 'Rádio', icon: 'Radio', order: 12, isActive: true },
  { id: '13', name: 'Dog friendly', icon: 'Dog', order: 13, isActive: true },
  { id: '14', name: 'Parkování', icon: 'Car', order: 14, isActive: true },
  { id: '15', name: 'Toaleta', icon: 'Bath', order: 15, isActive: true },
];

// Navigace
export const navigation = [
  { label: 'Úvod', href: '/' },
  { label: 'Rybaření', href: '/rybareni' },
  { label: 'Nocování', href: '/nocovani' },
  { label: 'Galerie', href: '/galerie' },
  { label: 'Kontakt', href: '/kontakt' },
];

// Statistiky pro hero sekci
export const stats = [
  { value: '2,2', unit: 'ha', label: 'vodní plochy' },
  { value: '3', unit: '', label: 'rybníky' },
  { value: '4', unit: '', label: 'lůžka' },
];


export const requiredEquipment = [
  'Udice',
  'Velký kaprařský podběrák',
  'Podložka na ulovené ryby',
  'Dezinfekce na ryby',
  'Vezírek s kruhy',
  'Vyprošťovák háčků',
  'Stojánky na udice',
  'Metr',
];