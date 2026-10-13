# ImoBlog — editorial website starter

A refined, responsive Astro + TypeScript starter inspired by the supplied ImoBlog design PDF. The visual direction preserves the blue identity and Plus Jakarta Sans while improving hierarchy, whitespace, editorial rhythm, and responsive behavior.

## Stack
- Astro + TypeScript
- Tailwind CSS v4 via `@tailwindcss/vite`
- React islands for search, category filters, sorting, and article cards
- Motion for React available for future richer interactions (kept out of the critical path until needed)
- Lucide React icons in the interactive island
- CSS-driven theme toggle and lightweight transitions

## Run locally
Use Node.js 20.3+ (Node 22 LTS recommended).

```bash
npm install
npm run dev
```

Open the local URL printed by Astro.

## Production build
```bash
npm run build
npm run preview
```

## What to customize first
1. **Brand / company:** edit the name and links in `src/components/SiteHeader.astro` and `src/components/SiteFooter.astro`. No client company branding has been invented.
2. **Palette and typography:** edit CSS variables in `src/styles/global.css`. The default blue palette and Plus Jakarta Sans are based on the supplied design reference.
3. **Articles:** edit `src/data/articles.ts`. Each article has a slug, category, excerpt, read time, date, and body paragraphs. The article pages are generated from this data.
4. **Images:** change `image` values in `src/data/articles.ts`. Current image URLs are remote Unsplash images; replace with licensed/local assets before launch.
5. **Newsletter:** the form currently validates the email client-side and displays a demo confirmation. It does **not** subscribe anyone yet. Connect it to your company's email provider or a backend endpoint before presenting it as production-ready.
6. **Search / filtering:** functional client-side search, category filtering, and sorting are implemented in the React island.

## Accessibility and performance notes
- Responsive layout and semantic page structure
- Visible keyboard focus outlines
- Theme preference saved in `localStorage`
- Reduced-motion preference is respected in CSS
- Interactive article explorer is hydrated with `client:load`; most page content is static HTML
- External fonts/images require an internet connection. Consider self-hosting the font and localizing images for production.

## Important
This is a presentation-ready frontend starter, not a production CMS. Authentication, editorial dashboard, analytics, real newsletter delivery, and a persistent backend are not included.
