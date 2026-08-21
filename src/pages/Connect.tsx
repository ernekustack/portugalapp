import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Calendar, Flame, MessageCircle, ArrowUpRight, ChevronDown, X } from "lucide-react";
import { LanguageProvider, useI18n } from "@/i18n/LanguageContext";
import alentejoLogo from "@/assets/alentejo-eventos-logo.png";
import logoFarol from "@/assets/logo-farol.jpg";
import luzLogo from "@/assets/luz-e-morte-logo.jpg";
import lumeDragon from "@/assets/lume-dragon.png";

// ⚙️ Hier deine WhatsApp-Nummer eintragen (internationales Format, nur Ziffern):
const WHATSAPP_NUMBER = "351923595110"; // TODO: durch echte Nummer ersetzen

// Projekt-Links — sobald Live-URLs vorhanden, hier ersetzen.
const LINK_EVENTOS = "https://alentejoeventos.com";
const LINK_LUZ = "https://luz-e-morte.lovable.app";
const LINK_LUME = "https://lume-magic-book.lovable.app"; // TODO: durch echte URL ersetzen

const COPY: Record<
  string,
  {
    tagline: string;
    eventos: string;
    luz: string;
    contact: string;
    formTitle: string;
    namePh: string;
    msgPh: string;
    send: string;
    cancel: string;
    pitchTitle1: string;
    pitchBody1: string;
    pitchTitle2: string;
    pitchBody2: string;
    cta: string;
    luzPitchTitle1: string;
    luzPitchBody1: string;
    luzPitchTitle2: string;
    luzPitchBody2: string;
    luzCta: string;
    lume: string;
    lumePitchTitle1: string;
    lumePitchBody1: string;
    lumePitchTitle2: string;
    lumePitchBody2: string;
    lumeCta: string;
  }
> = {
  de: {
    tagline: "Kreative Projekte aus dem Alentejo.",
    eventos: "Events & Kultur im Alentejo",
    luz: "Krimis und Morde im Alentejo",
    contact: "Schreib mir auf WhatsApp",
    formTitle: "Nachricht senden",
    namePh: "Dein Name",
    msgPh: "Deine Nachricht …",
    send: "Auf WhatsApp öffnen",
    cancel: "Abbrechen",
    pitchTitle1: "Mehr Sichtbarkeit für dein Business",
    pitchBody1: "Trag deine Events, Märkte oder Touren ein und erreiche Urlauber direkt in der Region.",
    pitchTitle2: "Frühbucher-Vorteil bis zum 01. Juli",
    pitchBody2: "Sichere dir jetzt die reichweitenstärksten Werbeplätze für die Saison 2026 zum Frühbucher-Rabatt.",
    cta: "Zu Alentejo Eventos wechseln ↗",
    luzPitchTitle1: "Internationale Reichweite für die Region",
    luzPitchBody1: "Profitieren Sie von pontentiell 10.000+ Downloads im Play Store und weltweite Sichtbarkeit.",
    luzPitchTitle2: "Werden Sie Teil des Spiels",
    luzPitchBody2:
      "Sichern Sie sich für die Saison 2026 einen reichweitenstarken Platz als echter Schauplatz, Kooperationspartner oder Sponsor im Krimispiel.",
    luzCta: "Zum Spiel wechseln ↗",
    lume: "Ein personalisierbares Geschenk",
    lumePitchTitle1: "Ein Abenteuer an der wilden Küste",
    lumePitchBody1: "Ein packendes Abenteuer an der wilden Küste Portugals, in dem ein kleiner Klippendrache über sich hinauswachsen muss. Wenn der alte Leuchtturm in der Sturmnacht erlischt, steht alles auf dem Spiel.",
    lumePitchTitle2: "Ein einzigartiges Leseerlebnis",
    lumePitchBody2: "Eine herzerwärmende Geschichte für junge Leserinnen und Leser, die als personalisierbares Buch ein einzigartiges Leseerlebnis schafft.",
    lumeCta: "Zum Lume Magic Book ↗",
  },
  en: {
    tagline: "Creative projects from the Alentejo, Portugal.",
    eventos: "Events & culture in the Alentejo",
    luz: "Crime & murders in the Alentejo",
    contact: "Message me on WhatsApp",
    formTitle: "Send a message",
    namePh: "Your name",
    msgPh: "Your message …",
    send: "Open in WhatsApp",
    cancel: "Cancel",
    pitchTitle1: "More visibility for your business",
    pitchBody1: "List your events, markets or tours and reach travellers directly in the region.",
    pitchTitle2: "Early-bird offer until July 1st",
    pitchBody2: "Secure the highest-reach ad placements for the 2026 season at the early-bird rate.",
    cta: "Go to the platform ↗",
    luzPitchTitle1: "International reach for the region",
    luzPitchBody1: "Benefit from potetial 10,000+ Play Store downloads and worldwide visibility.",
    luzPitchTitle2: "Become part of the game",
    luzPitchBody2:
      "Secure a high-reach spot for the 2026 season as a real location, partner or sponsor in the crime game.",
    luzCta: "Go to the game ↗",
    lume: "A personalized gift",
    lumePitchTitle1: "An adventure on the wild coast",
    lumePitchBody1: "A gripping adventure on the wild coast of Portugal, in which a young cliff dragon must grow beyond himself. When the old lighthouse goes out on the stormy night, everything is at stake.",
    lumePitchTitle2: "A unique reading experience",
    lumePitchBody2: "A heartwarming story for young readers that creates a unique reading experience as a personalized book.",
    lumeCta: "Go to Lume Magic Book ↗",
  },
  pt: {
    tagline: "Projetos criativos do Alentejo, Portugal.",
    eventos: "Eventos e cultura no Alentejo",
    luz: "Crimes e assassinatos no Alentejo",
    contact: "Escreve-me no WhatsApp",
    formTitle: "Enviar mensagem",
    namePh: "O teu nome",
    msgPh: "A tua mensagem …",
    send: "Abrir no WhatsApp",
    cancel: "Cancelar",
    pitchTitle1: "Mais visibilidade para o teu negócio",
    pitchBody1: "Regista os teus eventos, mercados ou tours e chega aos visitantes diretamente na região.",
    pitchTitle2: "Vantagem early-bird até 1 de julho",
    pitchBody2: "Garante já os espaços publicitários de maior alcance para a temporada 2026 com desconto early-bird.",
    cta: "Ir para a plataforma ↗",
    luzPitchTitle1: "Alcance internacional para a região",
    luzPitchBody1: "Aproveite o potencial de mais de 10.000 downloads na Play Store e visibilidade mundial.",
    luzPitchTitle2: "Faça parte do jogo",
    luzPitchBody2:
      "Garanta para a temporada 2026 um lugar de grande alcance como cenário real, parceiro ou patrocinador do jogo policial.",
    luzCta: "Ir para o jogo ↗",
    lume: "Um presente personalizável",
    lumePitchTitle1: "Uma aventura na costa selvagem",
    lumePitchBody1: "Uma aventura emocionante na costa selvagem de Portugal, na qual um pequeno dragão das falésias tem de superar-se. Quando o velho farol se apaga na noite de tempestade, tudo está em jogo.",
    lumePitchTitle2: "Uma experiência de leitura única",
    lumePitchBody2: "Uma história reconfortante para jovens leitores que, como livro personalizável, cria uma experiência de leitura única.",
    lumeCta: "Ir para o Lume Magic Book ↗",
  },
  nl: {
    tagline: "Creatieve projecten uit de Alentejo, Portugal.",
    eventos: "Evenementen & cultuur in de Alentejo",
    luz: "Misdaden en moorden in de Alentejo",
    contact: "Stuur me een bericht op WhatsApp",
    formTitle: "Bericht versturen",
    namePh: "Je naam",
    msgPh: "Je bericht …",
    send: "Openen in WhatsApp",
    cancel: "Annuleren",
    pitchTitle1: "Meer zichtbaarheid voor je business",
    pitchBody1: "Voeg je evenementen, markten of tours toe en bereik reizigers direct in de regio.",
    pitchTitle2: "Early-bird voordeel tot 1 juli",
    pitchBody2: "Bemachtig nu de advertentieplekken met het grootste bereik voor seizoen 2026 met early-bird korting.",
    cta: "Naar het platform ↗",
    luzPitchTitle1: "Internationaal bereik voor de regio",
    luzPitchBody1: "Profiteer van mogelijk meer dan 10.000+ downloads in de Play Store en wereldwijde zichtbaarheid.",
    luzPitchTitle2: "Word deel van het spel",
    luzPitchBody2:
      "Verzeker je voor seizoen 2026 een plek met groot bereik als echte locatie, partner of sponsor in het misdaadspel.",
    luzCta: "Naar het spel ↗",
    lume: "Een personaliseerbaar cadeau",
    lumePitchTitle1: "Een avontuur aan de wilde kust",
    lumePitchBody1: "Een spannend avontuur aan de wilde kust van Portugal, waarin een kleine klifdrake verder moet groeien dan zichzelf. Wanneer de oude vuurtoren uitgaat in de stormnacht, staat alles op het spel.",
    lumePitchTitle2: "Een unieke leeservaring",
    lumePitchBody2: "Een hartverwarmend verhaal voor jonge lezers dat als gepersonaliseerd boek een unieke leeservaring creëert.",
    lumeCta: "Naar Lume Magic Book ↗",
  },
};

const ConnectInner = () => {
  const { lang, setLang } = useI18n();

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!sessionStorage.getItem("connect-lang-init")) {
      setLang("en");
      sessionStorage.setItem("connect-lang-init", "1");
    }
  }, [setLang]);
  const c = COPY[lang] ?? COPY.de;
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = "Studio Southwest — Connect";
    const meta = document.createElement("meta");
    meta.name = "robots";
    meta.content = "noindex, nofollow";
    document.head.appendChild(meta);
    return () => {
      document.title = prev;
      document.head.removeChild(meta);
    };
  }, []);

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const n = name.trim().slice(0, 80);
    const m = msg.trim().slice(0, 600);
    if (!n || !m) {
      setError("Bitte Name und Nachricht ausfüllen.");
      return;
    }
    const text = encodeURIComponent(`Hi! ${n}: ${m}`);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, "_blank", "noopener,noreferrer");
  };

  const [eventosOpen, setEventosOpen] = useState(false);
  const [luzOpen, setLuzOpen] = useState(false);
  const [lumeOpen, setLumeOpen] = useState(false);

  return (
    <main className="min-h-[100svh] bg-background text-foreground flex flex-col items-center px-6 py-10 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center gap-10 flex-1 justify-center">
        <Link to="/" className="flex flex-col items-center gap-4" aria-label="Studio Southwest">
          <img src={logoFarol} alt="Studio Southwest Logo" className="h-16 w-16 object-contain" />
          <span className="font-display font-semibold tracking-tight text-2xl">
            Studio Southwest<span className="text-accent">.</span>
          </span>
        </Link>

        <p className="text-center text-[15px] leading-relaxed text-muted-foreground max-w-[18rem]">{c.tagline}</p>

        <div className="w-full flex flex-col gap-3.5">
          {/* Kachel 1: Alentejo Eventos — Accordion */}
          <div className="rounded-2xl bg-card hairline shadow-soft overflow-hidden transition-all duration-300">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setEventosOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setEventosOpen((v) => !v);
                }
              }}
              aria-expanded={eventosOpen}
              aria-controls="eventos-panel"
              className="group w-full flex items-center gap-4 p-4 text-left cursor-pointer select-none"
            >
              <span
                className="h-11 w-11 shrink-0 rounded-xl flex items-center justify-center"
                style={{ background: "hsl(24 79% 37% / 0.12)" }}
              >
                <img src={alentejoLogo} alt="" aria-hidden="true" className="h-7 w-7 object-contain" />
              </span>
              <span className="flex-1 min-w-0">
                <span
                  className="block font-display text-[17px] font-semibold tracking-tight"
                  style={{ color: "hsl(220 39% 11%)" }}
                >
                  Alentejo Eventos
                </span>
                <span className="block text-[13px] truncate" style={{ color: "hsl(220 21% 38%)" }}>
                  {c.eventos}
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${eventosOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
                style={{ color: eventosOpen ? "hsl(24 79% 37%)" : "hsl(220 21% 38%)" }}
              />
            </div>
            <div
              id="eventos-panel"
              role="region"
              className={`grid transition-all duration-500 ease-out ${eventosOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-display text-[14px] font-semibold tracking-tight">{c.pitchTitle1}</p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground mt-1">• {c.pitchBody1}</p>
                    </div>
                    <div>
                      <p className="font-display text-[14px] font-semibold tracking-tight">{c.pitchTitle2}</p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground mt-1">• {c.pitchBody2}</p>
                    </div>
                  </div>
                  <a
                    href={LINK_EVENTOS}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all"
                  >
                    <img src={alentejoLogo} alt="" aria-hidden="true" className="h-5 w-5 object-contain shrink-0" />
                    <span>{c.cta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kachel 2: Luz e Morte — Accordion */}
          <div className="rounded-2xl bg-card hairline shadow-soft overflow-hidden transition-all duration-300">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setLuzOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLuzOpen((v) => !v);
                }
              }}
              aria-expanded={luzOpen}
              aria-controls="luz-panel"
              className="group w-full flex items-center gap-4 p-4 text-left cursor-pointer select-none"
            >
              <span className="h-11 w-11 shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-black">
                <img src={luzLogo} alt="" aria-hidden="true" className="h-full w-full object-cover" />
              </span>
              <span className="flex-1 min-w-0">
                <span
                  className="block font-display text-[17px] font-semibold tracking-tight"
                  style={{ color: "hsl(220 39% 11%)" }}
                >
                  Luz e Morte
                </span>
                <span className="block text-[13px] truncate" style={{ color: "hsl(220 21% 38%)" }}>
                  {c.luz}
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${luzOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
                style={{ color: luzOpen ? "hsl(24 79% 37%)" : "hsl(220 21% 38%)" }}
              />
            </div>
            <div
              id="luz-panel"
              role="region"
              className={`grid transition-all duration-500 ease-out ${luzOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-display text-[14px] font-semibold tracking-tight">{c.luzPitchTitle1}</p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground mt-1">• {c.luzPitchBody1}</p>
                    </div>
                    <div>
                      <p className="font-display text-[14px] font-semibold tracking-tight">{c.luzPitchTitle2}</p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground mt-1">• {c.luzPitchBody2}</p>
                    </div>
                  </div>
                  <a
                    href={LINK_LUZ}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all"
                  >
                    <img src={luzLogo} alt="" aria-hidden="true" className="h-5 w-5 object-cover rounded-sm shrink-0" />
                    <span>{c.luzCta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kachel 3: Lume Magic Book — Accordion */}
          <div className="rounded-2xl bg-card hairline shadow-soft overflow-hidden transition-all duration-300">
            <div
              role="button"
              tabIndex={0}
              onClick={() => setLumeOpen((v) => !v)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  setLumeOpen((v) => !v);
                }
              }}
              aria-expanded={lumeOpen}
              aria-controls="lume-panel"
              className="group w-full flex items-center gap-4 p-4 text-left cursor-pointer select-none"
            >
              <span className="h-11 w-11 shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-black">
                <img src={lumeDragon} alt="" aria-hidden="true" className="h-full w-full object-cover" />
              </span>
              <span className="flex-1 min-w-0">
                <span
                  className="block font-display text-[17px] font-semibold tracking-tight"
                  style={{ color: "hsl(220 39% 11%)" }}
                >
                  Lume Magic Book
                </span>
                <span className="block text-[13px] truncate" style={{ color: "hsl(220 21% 38%)" }}>
                  {c.lume}
                </span>
              </span>
              <ChevronDown
                className={`h-5 w-5 transition-transform duration-300 ${lumeOpen ? "rotate-180" : ""}`}
                strokeWidth={2}
                style={{ color: lumeOpen ? "hsl(24 79% 37%)" : "hsl(220 21% 38%)" }}
              />
            </div>
            <div
              id="lume-panel"
              role="region"
              className={`grid transition-all duration-500 ease-out ${lumeOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
              style={{ transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)" }}
            >
              <div className="overflow-hidden">
                <div className="px-4 pb-4 pt-1 flex flex-col gap-4">
                  <div className="flex flex-col gap-3">
                    <div>
                      <p className="font-display text-[14px] font-semibold tracking-tight">{c.lumePitchTitle1}</p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground mt-1">• {c.lumePitchBody1}</p>
                    </div>
                    <div>
                      <p className="font-display text-[14px] font-semibold tracking-tight">{c.lumePitchTitle2}</p>
                      <p className="text-[13px] leading-relaxed text-muted-foreground mt-1">• {c.lumePitchBody2}</p>
                    </div>
                  </div>
                  <a
                    href={LINK_LUME}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-neon inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-all"
                  >
                    <img src={lumeDragon} alt="" aria-hidden="true" className="h-5 w-5 object-cover rounded-sm shrink-0" />
                    <span>{c.lumeCta}</span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Kachel 4: Kontakt-Kachel öffnet Mini-Formular */}
          <button
            type="button"
            onClick={() => {
              setShowForm(true);
              setError(null);
            }}
            className="group flex items-center gap-4 rounded-2xl bg-card hairline shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 p-4 text-left"
          >
            <span className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
              <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
            </span>
            <span className="flex-1 min-w-0">
              <span className="block font-display text-[17px] font-semibold tracking-tight">WhatsApp</span>
              <span className="block text-[13px] text-muted-foreground truncate">{c.contact}</span>
            </span>
            <ArrowUpRight
              className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors"
              strokeWidth={2}
            />
          </button>
        </div>
      </div>

      <p className="text-[11px] tracking-widest uppercase text-muted-foreground/70 mt-8">
        © {new Date().getFullYear()} Studio Southwest
      </p>

      {/* Modal-Formular */}
      {showForm && (
        <div
          className="fixed inset-0 z-50 bg-background/80 backdrop-blur-md flex items-end sm:items-center justify-center p-4 animate-fade-in"
          onClick={() => setShowForm(false)}
        >
          <form
            onClick={(e) => e.stopPropagation()}
            onSubmit={submit}
            className="w-full max-w-[420px] rounded-3xl bg-card hairline shadow-card p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <h2 className="font-display text-xl font-semibold tracking-tight">{c.formTitle}</h2>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                aria-label={c.cancel}
                className="p-1 -mr-1 rounded-lg hover:bg-secondary"
              >
                <X className="h-5 w-5 text-muted-foreground" />
              </button>
            </div>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              maxLength={80}
              placeholder={c.namePh}
              required
              className="w-full rounded-xl bg-secondary/60 hairline px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40"
            />
            <textarea
              value={msg}
              onChange={(e) => setMsg(e.target.value)}
              maxLength={600}
              rows={4}
              placeholder={c.msgPh}
              required
              className="w-full rounded-xl bg-secondary/60 hairline px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-accent/40 resize-none"
            />
            {error && <p className="text-xs text-destructive">{error}</p>}
            <button
              type="submit"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition shadow-soft"
            >
              <MessageCircle className="h-4 w-4" /> {c.send}
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

const Connect = () => (
  <LanguageProvider>
    <ConnectInner />
  </LanguageProvider>
);

export default Connect;
