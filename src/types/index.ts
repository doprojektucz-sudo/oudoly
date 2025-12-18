// Types pro Oudoly web

export interface Pond {
  id: string;
  name: string;
  slug: string;
  area: number;
  depth: string;
  avgDepth: number;
  description?: string;
  imageUrl?: string;
  order: number;
  fish: Fish[];
}

export interface Fish {
  id: string;
  species: string;
  sizeRange: string;
  quantity: number;
  pondId: string;
  year: number;
}

export interface AccommodationPrice {
  id: string;
  name: string;
  type: 'weekend' | 'weekday' | 'week';
  duration: string;
  price: number;
  description?: string;
  order: number;
  isActive: boolean;
}

export interface FishPrice {
  id: string;
  species: string;
  maxSize?: string;
  pricePerKg: number;
  isActive: boolean;
  order: number;
}

export interface ExtraPrice {
  id: string;
  name: string;
  price: number;
  isActive: boolean;
  order: number;
}

export interface Contact {
  id: string;
  type: 'email' | 'phone' | 'address' | 'facebook' | 'whatsapp';
  value: string;
  label?: string;
  order: number;
  isActive: boolean;
}

export interface GalleryImage {
  id: string;
  url: string;
  alt: string;
  category: 'chata' | 'rybniky' | 'ulovky';
  featured: boolean;
  order: number;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
}

export interface Amenity {
  id: string;
  name: string;
  icon: string;
  order: number;
  isActive: boolean;
}

// Navigation
export interface NavItem {
  label: string;
  href: string;
}

// Hero section data
export interface HeroData {
  title: string;
  subtitle: string;
  backgroundImage: string;
}
