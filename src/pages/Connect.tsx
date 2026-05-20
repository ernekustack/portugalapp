import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar, Flame, Mail, ArrowUpRight } from "lucide-react";
import { LanguageProvider, useI18n } from "@/i18n/LanguageContext";

const COPY: Record<string, { tagline: string; eventos: string; luz: string; contact: string }> = {
  de: {
    tagline: "Kreative Projekte aus dem Alentejo, Portugal.",
    eventos: "Events & Kultur im Alentejo",
    luz: "Ein Lichtprojekt zwischen Leben und Tod",
    contact: "Direkt Kontakt aufnehmen",
  },
  en: {
    tagline: "Creative projects from the Alentejo, Portugal.",
    eventos: "Events & culture in the Alentejo",
    luz: "A light project between life and death",
    contact: "Get in touch directly",
  },
  pt: {
    tagline: "Projetos criativos do Alentejo, Portugal.",
    eventos: "Eventos e cultura no Alentejo",
    luz: "Um projeto de luz entre a vida e a morte",
    contact: "Entrar em contacto direto",
  },
  nl: {
    tagline: "Creatieve projecten uit de Alentejo, Portugal.",
    eventos: "Evenementen & cultuur in de Alentejo",
    luz: "Een lichtproject tussen leven en dood",
    contact: "Direct contact opnemen",
  },
};

const TILES = [
  { key: "eventos", title: "Alentejo Eventos", href: "https://alentejo-eventos.pt", Icon: Calendar, external: true },
  { key: "luz", title: "Luz e Morte", href: "https://luz-e-morte.pt", Icon: Flame, external: true },
  { key: "contact", title: "Kontakt", href: "mailto:hallo@studio.app", Icon: Mail, external: false },
] as const;

const ConnectInner = () => {
  const { t, lang } = useI18n();
  const c = COPY[lang] ?? COPY.de;

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

  return (
    <main className="min-h-[100svh] bg-background text-foreground flex flex-col items-center justify-between px-6 py-10 pt-[max(2.5rem,env(safe-area-inset-top))] pb-[max(2.5rem,env(safe-area-inset-bottom))]">
      <div className="w-full max-w-[420px] mx-auto flex flex-col items-center gap-10 flex-1 justify-center">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-center gap-4 group" aria-label="Studio">
          <span className="h-14 w-14 rounded-2xl bg-gradient-ink flex items-center justify-center shadow-card">
            <span className="h-3.5 w-3.5 rounded-sm bg-accent" />
          </span>
          <span className="font-display font-semibold tracking-tight text-2xl">
            Studio<span className="text-accent">.</span>
          </span>
        </Link>

        {/* Tagline */}
        <p className="text-center text-[15px] leading-relaxed text-muted-foreground max-w-[18rem]">
          {c.tagline}
        </p>

        {/* Tiles */}
        <div className="w-full flex flex-col gap-3.5">
          {TILES.map(({ key, title, href, Icon, external }) => {
            const desc = c[key as "eventos" | "luz" | "contact"];
            const content = (
              <>
                <span className="h-11 w-11 shrink-0 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </span>
                <span className="flex-1 min-w-0">
                  <span className="block font-display text-[17px] font-semibold tracking-tight">{title}</span>
                  <span className="block text-[13px] text-muted-foreground truncate">{desc}</span>
                </span>
                <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-accent transition-colors" strokeWidth={2} />
              </>
            );
            const cls =
              "group flex items-center gap-4 rounded-2xl bg-card hairline shadow-soft hover:shadow-card hover:-translate-y-0.5 transition-all duration-300 p-4";
            return external ? (
              <a key={key} href={href} target="_blank" rel="noopener noreferrer" className={cls}>
                {content}
              </a>
            ) : (
              <a key={key} href={href} className={cls}>
                {content}
              </a>
            );
          })}
        </div>
      </div>

      <p className="text-[11px] tracking-widest uppercase text-muted-foreground/70 mt-8">
        © {new Date().getFullYear()} Studio
      </p>
    </main>
  );
};

const Connect = () => (
  <LanguageProvider>
    <ConnectInner />
  </LanguageProvider>
);

export default Connect;
