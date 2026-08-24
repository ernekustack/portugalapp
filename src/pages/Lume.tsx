import { Link } from "react-router-dom";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { useI18n } from "@/i18n/LanguageContext";
import lumeDragon from "@/assets/lume-dragon.webp";

const WHATSAPP_NUMBER = "351923595110";

const COPY: Record<
  string,
  {
    kicker: string;
    title: string;
    subtitle: string;
    b1t: string;
    b1: string;
    b2t: string;
    b2: string;
    b3t: string;
    b3: string;
    cta: string;
    back: string;
  }
> = {
  de: {
    kicker: "Studio Southwest",
    title: "Lume Magic Book",
    subtitle: "Ein personalisierbares Kinderbuch aus dem Alentejo.",
    b1t: "Ein Abenteuer an der wilden Küste",
    b1: "Ein packendes Abenteuer an der wilden Küste Portugals, in dem ein kleiner Klippendrache über sich hinauswachsen muss. Wenn der alte Leuchtturm in der Sturmnacht erlischt, steht alles auf dem Spiel.",
    b2t: "Ein einzigartiges Leseerlebnis",
    b2: "Eine herzerwärmende Geschichte für junge Leserinnen und Leser, die als personalisierbares Buch ein einzigartiges Leseerlebnis schafft.",
    b3t: "Bald verfügbar",
    b3: "Das Buch befindet sich in der Fertigstellung. Schreib mir, wenn du zu den Ersten gehören möchtest.",
    cta: "Auf WhatsApp schreiben",
    back: "Zurück",
  },
  en: {
    kicker: "Studio Southwest",
    title: "Lume Magic Book",
    subtitle: "A personalisable children's book from the Alentejo.",
    b1t: "An adventure on the wild coast",
    b1: "A gripping adventure on Portugal's wild coast, where a little cliff dragon has to grow beyond himself. When the old lighthouse goes dark on a stormy night, everything is at stake.",
    b2t: "A unique reading experience",
    b2: "A heart-warming story for young readers that becomes a truly unique experience as a personalised book.",
    b3t: "Coming soon",
    b3: "The book is being finalised. Message me if you'd like to be among the first.",
    cta: "Message me on WhatsApp",
    back: "Back",
  },
  pt: {
    kicker: "Studio Southwest",
    title: "Lume Magic Book",
    subtitle: "Um livro infantil personalizável do Alentejo.",
    b1t: "Uma aventura na costa selvagem",
    b1: "Uma aventura envolvente na costa selvagem de Portugal, onde um pequeno dragão das falésias tem de superar-se. Quando o velho farol se apaga numa noite de tempestade, tudo está em jogo.",
    b2t: "Uma experiência de leitura única",
    b2: "Uma história comovente para jovens leitores que, como livro personalizado, cria uma experiência única.",
    b3t: "Disponível em breve",
    b3: "O livro está a ser finalizado. Escreva-me se quiser ser dos primeiros.",
    cta: "Falar no WhatsApp",
    back: "Voltar",
  },
  nl: {
    kicker: "Studio Southwest",
    title: "Lume Magic Book",
    subtitle: "Een personaliseerbaar kinderboek uit de Alentejo.",
    b1t: "Een avontuur aan de wilde kust",
    b1: "Een spannend avontuur aan de wilde kust van Portugal, waarin een kleine klifdraak boven zichzelf moet uitstijgen. Als de oude vuurtoren tijdens de stormnacht dooft, staat alles op het spel.",
    b2t: "Een unieke leeservaring",
    b2: "Een hartverwarmend verhaal voor jonge lezers dat als persoonlijk boek een unieke leeservaring wordt.",
    b3t: "Binnenkort beschikbaar",
    b3: "Het boek wordt afgerond. Stuur me een bericht als je bij de eersten wilt horen.",
    cta: "Stuur een WhatsApp",
    back: "Terug",
  },
};

const LumeContent = () => {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.de;
  const waHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent("Lume Magic Book")}`;

  return (
    <main className="min-h-screen px-5 py-10 flex justify-center">
      <div className="w-full max-w-md flex flex-col gap-6">
        <Link
          to="/connect"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
        >
          <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
          {c.back}
        </Link>

        <header className="flex flex-col items-center text-center gap-4">
          <img
            src={lumeDragon}
            alt="Lume, der kleine Klippendrache"
            className="h-28 w-28 rounded-2xl object-cover shadow-card"
          />
          <div>
            <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{c.kicker}</p>
            <h1 className="font-display text-3xl font-semibold tracking-tight mt-1">{c.title}</h1>
            <p className="text-sm text-muted-foreground mt-2">{c.subtitle}</p>
          </div>
        </header>

        <div className="flex flex-col gap-4">
          {[
            [c.b1t, c.b1],
            [c.b2t, c.b2],
            [c.b3t, c.b3],
          ].map(([title, body]) => (
            <section key={title} className="rounded-2xl bg-card hairline shadow-soft p-5">
              <h2 className="font-display text-[15px] font-semibold tracking-tight">{title}</h2>
              <p className="text-[13px] leading-relaxed text-muted-foreground mt-2">{body}</p>
            </section>
          ))}
        </div>

        <a
          href={waHref}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-neon inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-sm font-semibold transition-all"
        >
          <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
          <span>{c.cta}</span>
        </a>
      </div>
    </main>
  );
};

const Lume = () => (
    <LumeContent />
);

export default Lume;
