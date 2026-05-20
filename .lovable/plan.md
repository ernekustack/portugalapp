# GitHub Pages Deployment – Status & Anpassungen

## Befund: Alles bereits korrekt konfiguriert

Die geforderten Punkte sind im Repo schon umgesetzt:

- `vite.config.ts` → `base: mode === "production" ? "/portugalapp/" : "/"` ✓
- `public/manifest.webmanifest` → alle Icons + `start_url`/`scope`/`id` unter `/portugalapp/…` ✓
- `index.html` → `<link rel="manifest">`, Icons, Apple-Touch-Icon alle mit `/portugalapp/`-Präfix ✓
- `public/404.html` → SPA-Fallback für GitHub Pages mit Repo-Präfix ✓
- `App.tsx` → `BrowserRouter basename={import.meta.env.BASE_URL}` ✓
- `.github/workflows/deploy.yml` → Build + Pages-Deploy aktiv ✓

Live-URL nach Push: **`https://<github-user>.github.io/portugalapp/connect`**

## Geplante Mini-Anpassung (Robustheit)

Eine kleine Verbesserung, damit die Konfiguration auch bei einem Custom Domain / Root-Deployment nicht bricht und Pfade nicht doppelt hartcodiert sind:

**Manifest-Pfade auf relativ umstellen** – `public/manifest.webmanifest`:
- `start_url`: `"connect"` (relativ zum Manifest-Ort)
- `scope`: `"./"`
- `id`: `"./connect"`
- Icons: `"icon-192.png"`, `"icon-512.png"` (relativ)

Vorteil: Manifest funktioniert sowohl unter `/portugalapp/` als auch unter einem späteren Root-Hosting ohne erneute Anpassung. Die `index.html`-Links bleiben absolut mit `/portugalapp/` (für GitHub Pages erforderlich).

## Was NICHT geändert wird

- WhatsApp-Kachel und `wa.me`-Link bleiben unverändert
- Texte, Kacheln, Design bleiben unverändert
- Routing-Logik bleibt unverändert

## Nach dem Push

QR-Code auf `https://<github-user>.github.io/portugalapp/connect` zeigen lassen → installierbar via „Zum Startbildschirm hinzufügen" → öffnet im Standalone-Modus direkt auf `/connect`.
