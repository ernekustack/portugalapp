import { useEffect, useState, FormEvent } from "react";
import { Link } from "react-router-dom";
import { Calendar, Flame, MessageCircle, ArrowUpRight, X } from "lucide-react";
import { LanguageProvider, useI18n } from "@/i18n/LanguageContext";

// ⚙️ Hier deine WhatsApp-Nummer eintragen (internationales Format, nur Ziffern):
const WHATSAPP_NUMBER = "351923595110"; // TODO: durch echte Nummer ersetzen

// Projekt-Links — sobald Live-URLs vorhanden, hier ersetzen.
const LINK_EVENTOS = "https://alentejoeventos.com";
const LINK_LUZ = "https://luz-e-morte.lovable.app";

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
  }
> = {
  de: {
    tagline: "Kreative Projekte aus dem Alentejo, Portugal.",
    eventos: "Events & Kultur im Alentejo",
    luz: "Ein Lichtprojekt zwischen Leben und Tod",
    contact: "Schreib mir auf WhatsApp",
    formTitle: "Nachricht senden",
    namePh: "Dein Name",
    msgPh: "Deine Nachricht …",
    send: "Auf WhatsApp öffnen",
    cancel: "Abbrechen",
  },
  en: {
    tagline: "Creative projects from the Alentejo, Portugal.",
    eventos: "Events & culture in the Alentejo",
    luz: "A light project between life and death",
    contact: "Message me on WhatsApp",
    formTitle: "Send a message",
    namePh: "Your name",
    msgPh: "Your message …",
    send: "Open in WhatsApp",
    cancel: "Cancel",
  },
  pt: {
    tagline: "Projetos criativos do Alentejo, Portugal.",
    eventos: "Eventos e cultura no Alentejo",
    luz: "Um projeto de luz entre a vida e a morte",
    contact: "Escreve-me no WhatsApp",
    formTitle: "Enviar mensagem",
    namePh: "O teu nome",
    msgPh: "A tua mensagem …",
    send: "Abrir no WhatsApp",
    cancel: "Cancelar",
  },
  nl: {
    tagline: "Creatieve projecten uit de Alentejo, Portugal.",
    eventos: "Evenementen & cultuur in de Alentejo",
    luz: "Een lichtproject tussen leven en dood",
    contact: "Stuur me een bericht op WhatsApp",
    formTitle: "Bericht versturen",
    namePh: "Je naam",
    msgPh: "Je bericht …",
    send: "Openen in WhatsApp",
    cancel: "Annuleren",
  },
};

const ConnectInner = () => {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.de;
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState("");
  const [msg, setMsg] = useState("");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const prev = document.title;
    document.title = "Studio — Connect";
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

  const tiles = [
    {
      key: "eventos",
      title: "Alentejo Eventos",
      desc: c.eventos,
      href: LINK_EVENTOS,
      Icon: Calendar,
      internal: LINK_EVENTOS.startsWith("/"),
    },
    { key: "luz", title: "Luz e Morte", desc: c.luz, href: LINK_LUZ, Icon: Flame, internal: LINK_LUZ.startsWith("/") },
  ];

  return (
    <main className="min-h-[100svh] bg-background text-foreground flex flex-col items-center px-6 py-10 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center gap-10 flex-1 justify-center">
        <Link to="/" className="flex flex-col items-center gap-4" aria-label="Studio">
          <span className="h-14 w-14 rounded-2xl bg-gradient-ink flex items-center justify-center shadow-card">
            <span className="h-3.5 w-3.5 rounded-sm bg-accent" />
          </span>
          <span className="font-display font-semibold tracking-tight text-2xl">
            Studio<span className="text-accent">.</span>
          </span>
        </Link>

        <p className="text-center text-[15px] leading-relaxed text-muted-foreground max-w-[18rem]">{c.tagline}</p>

        <div className="w-full flex flex-col gap-3.5">
          {tiles.map(({ key, title, desc, href, Icon, internal }) => {
            const inner = (
              <>
                <span className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-[17px] font-semibold tracking-tight">{title}</span>
                  <span className="block text-[13px] text-muted-foreground truncate">{desc}</span>
                </span>
                <ArrowUpRight
                  className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors"
                  strokeWidth={2}
                />
              </>
            );
            const cls =
              "group flex items-center gap-4 rounded-2xl bg-card hairline shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 p-4";
            return internal ? (
              <Link key={key} to={href.replace(/^\//, "/")} className={cls}>
                {inner}
              </Link>
            ) : (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                {inner}
              </a>
            );
          })}

          {/* Kontakt-Kachel öffnet Mini-Formular */}
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
        © {new Date().getFullYear()} Studio
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
