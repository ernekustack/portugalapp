import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const S = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <section className="mt-8">
    <h2 className="font-display text-base md:text-lg font-semibold tracking-tight">{title}</h2>
    <div className="mt-2 space-y-2 text-xs leading-relaxed text-muted-foreground">{children}</div>
  </section>
);

const Datenschutz = () => (
  <main className="min-h-screen bg-background text-foreground">
    <div className="container-px mx-auto max-w-3xl py-14 md:py-20">
      <Link to="/" className="inline-flex items-center gap-2 text-xs text-muted-foreground hover:text-accent transition">
        <ArrowLeft size={14} /> Zurück
      </Link>

      <h1 className="mt-8 font-display text-2xl md:text-4xl font-semibold tracking-tight">Datenschutzerklärung</h1>
      <p className="mt-2 text-xs text-muted-foreground">Stand: 24.08.2026</p>

      <S title="1. Verantwortlicher">
        <p>
          Verantwortlicher für die Datenverarbeitung auf dieser Website im Sinne der Datenschutz-Grundverordnung (DSGVO) ist:
        </p>
        <p>
          H.M. Zimmer c/o Literatur- und Kulturlounge
          <br />
          Mainzer Str. 6
          <br />
          55276 Oppenheim
          <br />
          Deutschland
        </p>
      </S>

      <S title="2. Allgemeines zur Datenverarbeitung">
        <p>
          Wir verarbeiten personenbezogene Daten der Nutzer dieser Website grundsätzlich nur, soweit dies zur Bereitstellung einer
          funktionsfähigen Website sowie unserer Inhalte und Leistungen erforderlich ist. Die Verarbeitung personenbezogener Daten erfolgt
          regelmäßig nur nach Einwilligung des Nutzers oder auf Basis einer anderen gesetzlichen Erlaubnis nach Art. 6 Abs. 1 DSGVO
          (insbesondere lit. a, b und f).
        </p>
      </S>

      <S title="3. Hosting">
        <p>Diese Website wird bei folgendem Hosting-Anbieter gehostet:</p>
        <p>
          IONOS SE
          <br />
          Elgendorfer Str. 57
          <br />
          56410 Montabaur
          <br />
          Deutschland
        </p>
        <p>
          Beim Aufruf der Website erhebt der Hosting-Anbieter automatisch sogenannte Server-Logfiles, die dein Browser automatisch
          übermittelt. Dazu gehören in der Regel:
        </p>
        <ul className="list-disc pl-5 space-y-1">
          <li>IP-Adresse (ggf. gekürzt/anonymisiert)</li>
          <li>Datum und Uhrzeit der Anfrage</li>
          <li>aufgerufene Seite / Datei</li>
          <li>verwendeter Browser und Betriebssystem</li>
          <li>Referrer-URL (zuvor besuchte Seite)</li>
        </ul>
        <p>
          Diese Daten dienen ausschließlich der Gewährleistung eines störungsfreien Betriebs der Website sowie der Sicherheit unserer
          informationstechnischen Systeme (Art. 6 Abs. 1 lit. f DSGVO – berechtigtes Interesse). Eine Zusammenführung dieser Daten mit
          anderen Datenquellen erfolgt nicht.
        </p>
        <p>
          Da IONOS SE ein deutscher Anbieter mit Sitz und Serverstandorten innerhalb der EU ist, findet in der Regel keine
          Datenübermittlung in ein Drittland (außerhalb der EU/des EWR) statt. Mit IONOS besteht bzw. ist ein entsprechender
          Auftragsverarbeitungsvertrag nach Art. 28 DSGVO abzuschließen (üblicherweise über das IONOS-Kundencenter verfügbar).
        </p>
      </S>

      <S title="4. Cookies und lokale Speicherung">
        <p>
          Diese Website verwendet, soweit nichts Anderes angegeben, keine Cookies zu Tracking- oder Marketingzwecken. Es können technisch
          notwendige Cookies bzw. lokale Speicherfunktionen (z. B. für Spracheinstellungen oder Sitzungsverwaltung) zum Einsatz kommen, die
          für den Betrieb der Website erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO). Diese werden nicht zur Erstellung von Nutzerprofilen
          verwendet.
        </p>
        <p>
          Sofern zusätzliche, nicht technisch notwendige Cookies eingesetzt werden sollten, holen wir hierfür vorab deine Einwilligung über
          ein Cookie-Consent-Banner ein.
        </p>
      </S>

      <S title="5. Keine Analyse- und Trackingtools">
        <p>
          Auf dieser Website werden derzeit keine Analyse- oder Trackingdienste wie Google Analytics, Matomo oder vergleichbare Tools
          eingesetzt. Es findet keine Erstellung von Nutzungsprofilen und keine Weitergabe von Nutzungsdaten an Drittanbieter zu
          Analysezwecken statt.
        </p>
      </S>

      <S title="6. Schriftarten (Google Fonts)">
        <p>
          Diese Website nutzt die Schriftarten „Inter" und „Instrument Serif". Diese werden lokal von unserem eigenen Server eingebunden
          (selbst gehostet). Es findet keine Verbindung zu Servern von Google oder anderen Drittanbietern statt, und es werden dabei keine
          Daten an Dritte übermittelt.
        </p>
      </S>

      <S title="7. Kontaktaufnahme">
        <p>
          Wenn du per E-Mail oder über das Kontaktformular mit uns Kontakt aufnimmst, werden deine Angaben (E-Mail-Adresse, ggf. Name,
          Inhalt der Nachricht) zum Zweck der Bearbeitung deiner Anfrage bei uns gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
          DSGVO (Anbahnung eines Vertrags bzw. Bearbeitung einer Anfrage im Zusammenhang mit unseren Leistungen) bzw. Art. 6 Abs. 1 lit. f
          DSGVO (berechtigtes Interesse an der Beantwortung von Anfragen). Die Daten werden gelöscht, sobald sie für die Bearbeitung nicht
          mehr erforderlich sind, spätestens nach 2 Jahren, sofern keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
        </p>
      </S>

      <S title="8. Eingebundene Drittinhalte">
        <p>
          Sofern auf der Website Links oder eingebettete Inhalte Dritter (z. B. Instagram-Links, YouTube-Videos, Google Maps) vorhanden
          sind, wird beim Aufruf der jeweiligen Unterseite eine Verbindung zu den Servern des jeweiligen Anbieters hergestellt, wodurch
          dieser Kenntnis von deinem Besuch erhalten kann. Details zur jeweiligen Datenverarbeitung entnimmst du der Datenschutzerklärung
          des jeweiligen Anbieters. Falls solche Inhalte nur verlinkt (nicht eingebettet) sind, findet erst beim Anklicken eine
          Datenübertragung statt.
        </p>
      </S>

      <S title="9. SSL-/TLS-Verschlüsselung">
        <p>
          Diese Website nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung für die Übertragung vertraulicher Inhalte. Eine
          verschlüsselte Verbindung erkennst du am Präfix „https://" in der Adresszeile deines Browsers.
        </p>
      </S>

      <S title="10. Speicherdauer">
        <p>
          Personenbezogene Daten werden nur so lange gespeichert, wie dies für den jeweiligen Verarbeitungszweck erforderlich ist, oder
          solange gesetzliche Aufbewahrungsfristen (z. B. steuer- oder handelsrechtliche Fristen) bestehen. Nach Wegfall des Zwecks bzw.
          Ablauf der Fristen werden die Daten routinemäßig gelöscht.
        </p>
      </S>

      <S title="11. Deine Rechte als betroffene Person">
        <p>Du hast im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf:</p>
        <ul className="list-disc pl-5 space-y-1">
          <li>Auskunft über deine bei uns gespeicherten personenbezogenen Daten (Art. 15 DSGVO)</li>
          <li>Berichtigung unrichtiger Daten (Art. 16 DSGVO)</li>
          <li>Löschung deiner bei uns gespeicherten Daten (Art. 17 DSGVO)</li>
          <li>Einschränkung der Datenverarbeitung (Art. 18 DSGVO)</li>
          <li>
            Datenübertragbarkeit, sofern du in die Verarbeitung eingewilligt hast oder ein Vertrag zur automatisierten Datenverarbeitung
            besteht (Art. 20 DSGVO)
          </li>
          <li>Widerspruch gegen die Verarbeitung deiner Daten bei uns (Art. 21 DSGVO)</li>
          <li>Widerruf einer erteilten Einwilligung mit Wirkung für die Zukunft (Art. 7 Abs. 3 DSGVO)</li>
        </ul>
        <p>Zur Ausübung dieser Rechte kannst du dich jederzeit über die oben genannte Kontaktadresse an uns wenden.</p>
      </S>

      <S title="12. Beschwerderecht bei einer Aufsichtsbehörde">
        <p>
          Du hast außerdem das Recht, dich bei einer Datenschutz-Aufsichtsbehörde über die Verarbeitung deiner personenbezogenen Daten
          durch uns zu beschweren. In Portugal ist dies die Comissão Nacional de Proteção de Dados (CNPD), www.cnpd.pt.
        </p>
      </S>

      <S title="13. Änderung dieser Datenschutzerklärung">
        <p>
          Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen rechtlichen Anforderungen entspricht
          oder um Änderungen unserer Leistungen umzusetzen. Für deinen erneuten Besuch gilt dann die neue Datenschutzerklärung.
        </p>
      </S>
    </div>
  </main>
);

export default Datenschutz;
