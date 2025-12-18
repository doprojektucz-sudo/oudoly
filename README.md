# Oudoly.cz - Rybniční kaskáda

Moderní webová prezentace rybniční kaskády Oudoly na Vysočině. Postaveno na Next.js 15, Tailwind CSS 4, Prisma a TypeScript.

![Next.js](https://img.shields.io/badge/Next.js-15-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)
![Prisma](https://img.shields.io/badge/Prisma-ORM-2d3748)

## 🌲 Vlastnosti

- **Moderní design** - Přírodní estetika s plynulými animacemi (Framer Motion)
- **Responzivní** - Plně optimalizováno pro mobily, tablety i desktop
- **SEO optimalizace** - Metadata, Open Graph, strukturovaná data
- **Správa dat** - Prisma ORM pro PostgreSQL databázi
- **Kontaktní formulář** - S validací a API endpoint
- **Galerie** - Lightbox s filtrováním kategorií
- **Kalendář** - Integrace Google Calendar pro obsazenost

## 🚀 Spuštění

### Předpoklady

- Node.js 18+
- PostgreSQL databáze (volitelně - lze použít mock data)

### Instalace

```bash
# Klonování repozitáře
git clone https://github.com/your-username/oudoly.git
cd oudoly

# Instalace závislostí
npm install

# Nastavení prostředí
cp .env.example .env
# Upravte .env s vašimi údaji

# Spuštění vývojového serveru
npm run dev
```

Aplikace poběží na `http://localhost:3000`

### Databáze (volitelné)

```bash
# Inicializace Prisma
npx prisma generate
npx prisma db push

# Seed databáze (volitelně)
npx prisma db seed
```

## 📁 Struktura projektu

```
oudoly/
├── prisma/
│   └── schema.prisma       # Databázové schéma
├── public/
│   └── images/             # Obrázky (viz níže)
├── src/
│   ├── app/                # Next.js App Router
│   │   ├── api/            # API routes
│   │   ├── galerie/        # Stránka galerie
│   │   ├── kontakt/        # Kontaktní stránka
│   │   ├── nocovani/       # Stránka ubytování
│   │   ├── rybareni/       # Stránka rybaření
│   │   ├── globals.css     # Globální styly
│   │   ├── layout.tsx      # Root layout
│   │   └── page.tsx        # Hlavní stránka
│   ├── components/
│   │   ├── layout/         # Header, Footer
│   │   ├── sections/       # Sekce stránek
│   │   └── ui/             # Opakovaně použitelné komponenty
│   ├── lib/
│   │   └── data.ts         # Mock data (nahradit Prisma queries)
│   └── types/
│       └── index.ts        # TypeScript typy
├── .env                    # Proměnné prostředí
├── next.config.ts          # Next.js konfigurace
└── package.json
```

## 🖼️ Obrázky

Nahraďte placeholder obrázky v `/public/images/`:

### Hero obrázky (doporučeno 1920x1080)
- `hero-bg.jpg` - Hlavní stránka
- `rybareni-hero.jpg` - Stránka rybaření
- `nocovani-hero.jpg` - Stránka ubytování
- `galerie-hero.jpg` - Galerie
- `kontakt-hero.jpg` - Kontakt

### About sekce
- `about-main.jpg` - Hlavní foto rybníků
- `about-chata.jpg` - Exteriér chaty
- `about-ovce.jpg` - Ovce na hrázi

### Galerie (`/images/gallery/`)
- `chata-*.jpg` - Fotky chaty a interiéru
- `rybnik-*.jpg` - Fotky rybníků a okolí
- `ulovek-*.jpg` - Fotky úlovků

### Social
- `og-image.jpg` - Open Graph obrázek (1200x630)

## 🔧 Konfigurace

### Proměnné prostředí (.env)

```env
# Databáze
DATABASE_URL="postgresql://user:password@localhost:5432/oudoly"

# Volitelné - emailová služba pro formulář
RESEND_API_KEY="your-api-key"
CONTACT_EMAIL="kaskada@oudoly.cz"
```

### Google Calendar

Kalendář obsazenosti je embednutý z Google Calendar. Pro změnu:
1. Upravte `src` URL v `/src/app/nocovani/NocovaniPage.tsx`
2. Nastavte kalendář jako veřejný

## 📝 Správa obsahu

### Mock data vs Databáze

Aktuálně web používá mock data v `/src/lib/data.ts`. Pro produkční nasazení:

1. Nastavte PostgreSQL databázi
2. Spusťte `npx prisma db push`
3. Nahraďte importy z `@/lib/data` za Prisma queries
4. Vytvořte admin panel pro správu obsahu (volitelně)

### Editovatelný obsah

- **Zarybnění** - `lib/data.ts` → `ponds` array
- **Ceník** - `lib/data.ts` → `accommodationPrices`, `fishPrices`
- **Kontakty** - `lib/data.ts` → `contacts`
- **Vybavení** - `lib/data.ts` → `amenities`
- **Galerie** - `lib/data.ts` → `galleryImages`

## 🚢 Nasazení

### Vercel (doporučeno)

```bash
npm run build
vercel deploy
```

### Docker

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm ci
RUN npm run build
CMD ["npm", "start"]
```

## 📄 Licence

MIT

---

Vytvořeno s ❤️ pro rybniční kaskádu Oudoly
