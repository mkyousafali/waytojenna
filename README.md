# Way to Jenna — Islamic Malayalam Dua App

> A production-ready Progressive Web App (PWA) built with **SvelteKit**.  
> Daily Islamic duas in Arabic with Malayalam translation, TTS audio, and offline support.

---

## Features

| Feature | Details |
|---|---|
| 8 dua categories | Morning, Evening, Toilet, Eating, Sleeping, Travel, Masjid, Daily Life |
| Arabic text | Large, clear Amiri font with gold accent bar |
| Malayalam translation | Noto Sans Malayalam font |
| Transliteration | Phonetic English romanisation |
| Hadith reference | Source citation per dua |
| Text-to-Speech | Web Speech API — Arabic & Malayalam voices auto-detected |
| Favorites | Save/remove duas; persisted in `localStorage` |
| Copy text | Copies arabic + translation + reference to clipboard |
| PWA | Installable on mobile, full offline support via Workbox |
| Mobile-first UI | Calm Islamic green/white theme |
| Vercel-ready | `@sveltejs/adapter-vercel` configured |

---

## Project Structure

```
way-to-jenna/
├── src/
│   ├── app.html                    # HTML shell (fonts, meta, manifest link)
│   ├── app.css                     # Global CSS variables & base styles
│   ├── lib/
│   │   ├── data/
│   │   │   └── duas.js             # All dua content (categories + duas array)
│   │   ├── stores/
│   │   │   └── favorites.svelte.js # Svelte 5 runes store (localStorage)
│   │   ├── utils/
│   │   │   ├── tts.js              # Web Speech API helper
│   │   │   └── toast.js            # Toast notification helper
│   │   └── components/
│   │       ├── NavBar.svelte       # Bottom navigation bar
│   │       ├── CategoryCard.svelte # Category list item
│   │       └── DuaCard.svelte      # Dua list item
│   └── routes/
│       ├── +layout.svelte          # App shell layout
│       ├── +layout.js              # prerender = true
│       ├── +page.svelte            # Home — category grid
│       ├── category/[slug]/
│       │   ├── +page.js            # Load category + duas
│       │   └── +page.svelte        # Category duas list
│       ├── dua/[id]/
│       │   ├── +page.js            # Load single dua
│       │   └── +page.svelte        # Dua detail with TTS & actions
│       └── favorites/
│           └── +page.svelte        # Saved favorites
├── static/
│   ├── favicon.svg                 # SVG app icon (source)
│   ├── icon-192.png                # PWA icon (generated)
│   ├── icon-512.png                # PWA icon (generated)
│   ├── icon-maskable-192.png       # Maskable icon (generated)
│   ├── icon-maskable-512.png       # Maskable icon (generated)
│   ├── apple-touch-icon.png        # iOS home screen icon (generated)
│   └── manifest.webmanifest        # PWA manifest
├── generate-icons.js               # One-time icon generator script
├── svelte.config.js                # SvelteKit config (adapter-vercel)
├── vite.config.js                  # Vite config with vite-plugin-pwa
└── package.json
```

---

## Running Locally

### Prerequisites
- **Node.js 18, 20, or 22** (the Vercel adapter requires one of these)
- npm

### Steps

```bash
# 1. Install dependencies
npm install

# 2. Generate PWA icons (run once)
npm install --save-dev sharp
node generate-icons.js

# 3. Start development server
npm run dev
# → http://localhost:5173

# 4. Build for production
npm run build

# 5. Preview production build
npm run preview
```

---

## Deploying to Vercel

### Option A — Vercel CLI

```bash
npm install -g vercel
vercel
```

Follow the prompts. Vercel auto-detects SvelteKit.

### Option B — GitHub Integration

1. Push this project to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → **New Project** → import your repo.
3. Vercel detects SvelteKit automatically.
4. Click **Deploy**. Done.

No environment variables are needed — the app has no backend.

---

## Adding More Duas

Open `src/lib/data/duas.js` and add an entry to the `duas` array:

```js
{
  id: 'unique-id-slug',         // URL-safe unique string
  category: 'daily',            // must match a category id
  title: 'English Title',
  titleML: 'മലയാളം തലക്കെട്ട്',
  arabic: 'Arabic text here',
  transliteration: 'Phonetic romanisation',
  malayalam: 'Malayalam translation here',
  reference: 'Bukhari 1234'     // optional
}
```

---

## Adding More Categories

In `duas.js`, add to the `categories` array:

```js
{
  id: 'new-category',
  name: 'English Name',
  nameML: 'മലയാളം പേര്',
  icon: '🕌',
  description: 'Short English description',
  descriptionML: 'ഹ്രസ്വ മലയാളം വിവരണം'
}
```

---

## PWA Icon Regeneration

If you change `static/favicon.svg`, regenerate the PNG icons:

```bash
node generate-icons.js
```

---

## Tech Stack

| Technology | Purpose |
|---|---|
| SvelteKit 2 + Svelte 5 | Framework |
| Vite 6 | Build tool |
| vite-plugin-pwa | Service worker & PWA manifest |
| Workbox | Offline caching |
| @sveltejs/adapter-vercel | Vercel deployment |
| Web Speech API | Text-to-speech (no backend needed) |
| localStorage | Favorites persistence |
| Google Fonts | Amiri (Arabic) + Noto Sans Malayalam |
| sharp | Icon generation (dev dependency) |

---

## بارك الله فيكم

*May Allah accept this effort and make it a means of benefit for the Ummah.*
