## Kachel 1 „Alentejo Eventos" — Accordion mit Messe-Pitch

**Verhalten**
- Klick auf Kachel 1 leitet nicht mehr sofort weiter, sondern klappt elegant nach unten auf (Accordion via `animate-accordion-down/up`, max-height + opacity transition, `--ease-out-soft`).
- Pfeil-Icon rotiert 180° im offenen Zustand.
- Andere Kacheln (Luz e Morte, WhatsApp) bleiben unverändert.
- State lokal in `ConnectInner` (`eventosOpen`).

**Inhalt im Panel** (i18n DE/EN/PT/NL, DE-Text wörtlich wie vorgegeben)

> **Mehr Sichtbarkeit für dein Business**
> • Trag deine Events, Märkte oder Touren ein und erreiche Urlauber direkt in der Region.
>
> **Frühbucher-Vorteil bis zum 01. Juli**
> • Sichere dir jetzt die reichweitenstärksten Werbeplätze für die Saison 2026 zum Frühbucher-Rabatt.

**CTA-Button**
- Direkt unter den Stichpunkten, full-width, Pill, `bg-accent text-accent-foreground` (neongrün), Hover-Glow.
- Label DE: „Zur Plattform wechseln ↗" (analog EN/PT/NL).
- Öffnet `LINK_EVENTOS` in neuem Tab (`target="_blank"`, `rel="noopener noreferrer"`).

**Technische Details**
- Datei: nur `src/pages/Connect.tsx`.
- Kachel 1 wird aus dem `tiles.map` herausgelöst und als eigenständige Komponente mit Accordion-Body gerendert; Kachel 2 (Luz) bleibt im Map oder wird ebenfalls einzeln gerendert.
- Übersetzungsblock `eventosPanel` zu `COPY` hinzufügen mit Feldern `pitchTitle1`, `pitchBody1`, `pitchTitle2`, `pitchBody2`, `cta`.
- A11y: `aria-expanded`, `aria-controls`, Panel mit `role="region"`.
- Keine Änderungen an Header/Footer/anderen Seiten.
