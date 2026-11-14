# Million Laugh Entertainment: UI prototype (Nuxt 4)

UI-only prototype of the teal-glass redesign. No CMS, no backend, English only. The contact form shows a thank-you message and sends nothing.

## Run
    npm install
    npm run dev        # http://localhost:3000
    npm run generate   # static site in .output/public

## Pages
/ · /work · /work/[slug] · /services · /venues · /events · /about · /csr · /gallery · /contact

## Where things live
- `app/data/site.ts`: all copy, projects, events, image references
- `app/assets/css/main.css`: design tokens and styles
- `app/components/`: header, footer, cards, form, lightbox
- `public/images/`: optimised photos; `logos/` client logos; `placeholders/` sample SVGs

## Stand-in content (replace before launch)
- Sample SVGs (`public/images/placeholders/`): ICC World Cup, BIA Departure, IDB Expo (expo), APS Marquee, Grass Protection Cover.
- Demo event dates (Upcoming events).
- WhatsApp number is `[WHATSAPP NUMBER]`; the WhatsApp links go nowhere.
- Map on Contact is a placeholder box. Social links are `#`.
- Photos are captioned by what they show (e.g. Lanka T10, not LPL 2026). The LPL 2026 case study uses the aerial concert photo as a stand-in.
- No chairman or team headshots supplied; the About page uses the group photo.
