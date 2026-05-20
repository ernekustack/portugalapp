# Micro-Landingpage als isolierte Route

## Ziel
Eine eigenständige, app-artige Visitenkarten-Seite unter `/connect` (Alias `/hi`), die das bestehende Design-System nutzt, aber ohne Header, Footer und Cookie-Banner lädt.

## Vorgehen

1. **Neue Seite `src/pages/Connect.tsx`**
   - Vollflächiger dunkler Hintergrund (bestehende `bg-background` / `gradient-ink` Tokens)
   - Mobile-first, zentrierter Inhalt, max-width ~420px, safe-area Padding
   - Aufbau:
     - Logo (gleiches Mark wie im Header, größer)
     - Eine Zeile Tagline (Arbeit im Alentejo, i18n aus `translations.ts`)
     - Drei große Kacheln: Alentejo Eventos, Luz e Morte, Kontakt
     - Kacheln nutzen `bg-card`, `hairline`, `shadow-card`, neongrüner Accent für Icon/Pfeil
   - Kein `<Header>`, kein `<Footer>`, kein `<CookieBanner>`
   - In `<LanguageProvider>` gewrappt, damit Sprachumschaltung funktioniert (optionaler dezenter Switcher oben rechts)

2. **Routing in `src/App.tsx`**
   - Zwei neue Routen oberhalb der Catch-All:
     - `<Route path="/connect" element={<Connect />} />`
     - `<Route path="/hi" element={<Connect />} />`
   - Bestehende Index-Route und 404 bleiben unberührt

3. **i18n-Erweiterung in `src/i18n/translations.ts`**
   - Neuer `connect`-Block: `tagline`, `tiles.eventos`, `tiles.luz`, `tiles.contact`
   - DE/EN/PT analog zu bestehenden Blöcken

4. **SEO**
   - `<title>` und Meta-Description per `document.title` Effekt in `Connect.tsx`
   - `noindex` Meta optional, falls Messe-only

## Isolation – warum nichts kaputt geht
- Keine Änderung an `Index.tsx`, `Header`, `Footer`, `CookieBanner`
- Eigene Route, eigener Komponentenbaum
- Wiederverwendung nur über Design-Tokens (`index.css`, Tailwind-Theme) und `LanguageProvider`
- BrowserRouter-Basename (`/portugalapp`) gilt automatisch → finale URL: `https://USER.github.io/portugalapp/connect`

## Offene Mini-Frage
Soll der Kontakt-Button auf der Kachel direkt `mailto:` / `tel:` öffnen, oder zu `/#kontakt` der Hauptseite springen?