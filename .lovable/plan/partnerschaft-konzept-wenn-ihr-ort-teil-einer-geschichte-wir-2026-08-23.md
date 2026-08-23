# Partnerschaft: Konzept "Wenn Ihr Ort Teil einer Geschichte wird"

Die Seite `/partnerschaft` wird inhaltlich neu aufgebaut. Die bisherigen drei generischen Blöcke (Projekt-Sponsoring, Kooperation, Reichweite) entfallen und werden durch die drei konkreten Projekte ersetzt.

## Neuer Seitenaufbau

1. **Header** (bleibt): Zurück-Link, Sprachwahl, Kicker "Studio Southwest", Titel "Partnerschaft".
2. **Neues Intro**: "Wenn Ihr Ort Teil einer Geschichte wird" – Alentejo-Geschichten in Buch, Spiel und Plattform; kein lautes Marketing, keine Banner, sondern Orte, die Gästen im Gedächtnis bleiben.
3. **Drei Projektkarten** (statt der alten Blöcke), je mit Kurzbeschreibung und einem hervorgehobenen "Stellen Sie sich vor"-Satz:
   - **Lume Magic Book** – persönliches Kinderbuch, QR-Vorbestellung vor Ort, Partnerpaket: 48 Gutscheine in 4 Sprachen, Gutscheinständer, eigene Doppelseite am Buchende.
   - **Alentejo Events** – Plattform für Feste, Natur, Kultur, Ausflüge; Betrieb/Veranstaltung wird für suchende Gäste sichtbar.
   - **Luz e Morte** – atmosphärisches Spiel über Mythen und Geschichte des Alentejo; echte Orte mit echtem Namen und echter Lage.
4. **Abschnitt "Ein Ort, drei Wege dorthin"**: Die Alentejo-Karte verbindet alle drei Projekte – Spielfeld, Buchhintergrund, Wegweiser bei Events; ein Betrieb kann mehrfach auftauchen.
5. **"So läuft es ab"** (bleibt, 4 Schritte).
6. **Abschluss-CTA**: "Welcher Ort in Ihrer Nähe hätte eine Geschichte verdient?" plus Einladung zur kurzen Nachricht; bestehende Buttons (Kontaktformular + E-Mail) bleiben.

## Design

Bestehende Optik der Seite wird beibehalten: weiße Karten mit dunkelgrauem Text, Akzent in Brand-Orange, Icons aus lucide-react (Buch, Kalender, Spiel/Karte). "Stellen Sie sich vor"-Sätze als abgesetzte, dezent orange hinterlegte Zeile in der Karte. Keine neuen Bilder nötig.

## Technisch

- Anpassung nur in `src/pages/Partnerschaft.tsx`: das lokale `COPY`-Objekt wird um `storyTitle`, `storyIntro`, `projects[]` (name, desc, imagine), `mapTitle`, `mapText`, `closingTitle`, `closingText` erweitert; `blocks` entfällt.
- Alle Texte in DE, EN, PT, NL (deutsche Vorlage wird übersetzt), Struktur wie bisher pro Sprache.
- Icon-Zuordnung analog zum bestehenden `ICONS`-Array.
