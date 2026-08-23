# Google-Dienste: Status und Umstellung der Schriften

## Status heute
- **Google Analytics: nicht im Einsatz.** Kein gtag.js, kein Tag Manager, kein Analytics-Connector im Projekt.
- **Google Fonts: im Einsatz.** `index.html` lädt Inter (300–700) und Instrument Serif direkt von `fonts.googleapis.com` / `fonts.gstatic.com`. Dabei geht bei jedem Besuch die IP-Adresse an Google – der bekannte DSGVO-Kritikpunkt.

## Ziel
Schriften selbst hosten, damit die Seite keine Verbindung zu Google-Servern mehr aufbaut.

## Vorgehen
1. Font-Dateien (woff2) für Inter in den benötigten Schnitten sowie Instrument Serif Regular beschaffen und als CDN-Assets des Projekts ablegen (keine Binärdateien im Repo).
2. Lokale `@font-face`-Definitionen in `src/index.css` anlegen, mit `font-display: swap` und Latin-Zeichensatz.
3. Die drei Google-Fonts-Zeilen (2x preconnect, 1x stylesheet) aus `index.html` entfernen.
4. Prüfen, dass Überschriften (Instrument Serif) und Textkörper (Inter) unverändert aussehen; `tailwind.config.ts` behält dieselben Font-Namen, daher keine Änderung dort.
5. Kontrolle im Preview: Netzwerkanfragen enthalten keine Google-Domain mehr, Schriftbild identisch.

## Technische Details
- Schnitte: Inter 300/400/500/600/700, Instrument Serif 400 – identisch zum bisherigen Google-Request, kein Layoutsprung.
- Fonts werden über `lovable-assets` als CDN-Pointer eingebunden und in `@font-face { src: url(...) }` referenziert.
- Cookie-Banner und Datenschutz-Hinweise bleiben unberührt; nach der Umstellung entfällt lediglich der externe Google-Aufruf.
