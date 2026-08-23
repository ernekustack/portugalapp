import { Link } from "react-router-dom";
import { ArrowLeft, HandHeart, Handshake, Megaphone, Sparkles } from "lucide-react";
import { useI18n } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";

type Copy = {
  kicker: string;
  title: string;
  intro: string;
  blocks: { t: string; d: string }[];
  stepsTitle: string;
  steps: string[];
  cta: string;
  mail: string;
  back: string;
};

const COPY: Record<string, Copy> = {
  de: {
    kicker: "Studio Southwest",
    title: "Partnerschaft",
    intro:
      "Wir entwickeln Apps, Spiele und Bücher im Südwesten Portugals. Partner unterstützen konkrete Projekte – finanziell, inhaltlich oder durch Reichweite – und werden sichtbarer Teil der Entstehung.",
    blocks: [
      { t: "Projekt-Sponsoring", d: "Sie fördern ein Projekt gezielt: Entwicklung, Illustration, Übersetzung oder Veröffentlichung. Nennung in App, Buch und auf dieser Website." },
      { t: "Kooperation", d: "Gemeinsame Inhalte, regionale Vernetzung im Alentejo oder eine App-Funktion, die zu Ihrem Angebot passt." },
      { t: "Reichweite", d: "Sie helfen mit Kanälen, Presse oder Community statt mit Budget – oft der wertvollste Beitrag." },
    ],
    stepsTitle: "So läuft es ab",
    steps: [
      "Kurze Nachricht mit Ihrem Interesse.",
      "Gespräch: Projekt, Umfang, Gegenleistung.",
      "Schlanke Vereinbarung, ein Ansprechpartner.",
      "Regelmäßige Updates bis zum Release.",
    ],
    cta: "Partnerschaft anfragen",
    mail: "Direkt per E-Mail",
    back: "Zurück zur Startseite",
  },
  en: {
    kicker: "Studio Southwest",
    title: "Partnership",
    intro:
      "We build apps, games and books in the south-west of Portugal. Partners support specific projects – with funding, content or reach – and become a visible part of how they come to life.",
    blocks: [
      { t: "Project sponsoring", d: "Fund one project: development, illustration, translation or release. Credited in the app, the book and on this site." },
      { t: "Cooperation", d: "Shared content, regional collaboration in the Alentejo, or an app feature that fits your offering." },
      { t: "Reach", d: "Support with channels, press or community instead of budget – often the most valuable contribution." },
    ],
    stepsTitle: "How it works",
    steps: [
      "A short message about your interest.",
      "A call: project, scope, what you get.",
      "A lean agreement, one contact person.",
      "Regular updates until release.",
    ],
    cta: "Request partnership",
    mail: "Email directly",
    back: "Back to home",
  },
  pt: {
    kicker: "Studio Southwest",
    title: "Parceria",
    intro:
      "Criamos aplicações, jogos e livros no sudoeste de Portugal. Os parceiros apoiam projetos concretos – com financiamento, conteúdo ou alcance – e tornam-se parte visível do processo.",
    blocks: [
      { t: "Patrocínio de projeto", d: "Apoia um projeto específico: desenvolvimento, ilustração, tradução ou lançamento. Com menção na app, no livro e neste site." },
      { t: "Cooperação", d: "Conteúdos comuns, ligação regional no Alentejo ou uma funcionalidade que encaixe na sua oferta." },
      { t: "Alcance", d: "Ajuda com canais, imprensa ou comunidade em vez de orçamento – muitas vezes o mais valioso." },
    ],
    stepsTitle: "Como funciona",
    steps: [
      "Uma mensagem curta com o seu interesse.",
      "Conversa: projeto, âmbito, contrapartida.",
      "Acordo simples, um único contacto.",
      "Atualizações regulares até ao lançamento.",
    ],
    cta: "Pedir parceria",
    mail: "Enviar e-mail",
    back: "Voltar ao início",
  },
  nl: {
    kicker: "Studio Southwest",
    title: "Partnerschap",
    intro:
      "Wij maken apps, games en boeken in het zuidwesten van Portugal. Partners steunen concrete projecten – met budget, inhoud of bereik – en worden zichtbaar deel van het ontstaan.",
    blocks: [
      { t: "Projectsponsoring", d: "U steunt één project: ontwikkeling, illustratie, vertaling of release. Met vermelding in de app, het boek en op deze site." },
      { t: "Samenwerking", d: "Gedeelde content, regionale verbinding in de Alentejo of een functie die bij uw aanbod past." },
      { t: "Bereik", d: "Hulp met kanalen, pers of community in plaats van budget – vaak de waardevolste bijdrage." },
    ],
    stepsTitle: "Zo werkt het",
    steps: [
      "Een kort bericht met uw interesse.",
      "Gesprek: project, omvang, tegenprestatie.",
      "Eenvoudige afspraak, één contactpersoon.",
      "Regelmatige updates tot de release.",
    ],
    cta: "Partnerschap aanvragen",
    mail: "Direct e-mailen",
    back: "Terug naar de startpagina",
  },
};

const ICONS = [Handshake, Megaphone, HandHeart];

const Partnerschaft = () => {
  const { lang } = useI18n();
  const c = COPY[lang] ?? COPY.de;

  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container-px mx-auto max-w-4xl py-10 md:py-16">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={1.75} />
            {c.back}
          </Link>
          <LanguageSwitcher />
        </div>

        <header className="mt-10">
          <p className="text-[12px] uppercase tracking-[0.2em] text-accent">{c.kicker}</p>
          <h1 className="mt-2 font-display text-4xl md:text-5xl font-semibold tracking-tight">
            {c.title}
            <span className="text-accent">.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-muted-foreground leading-relaxed">{c.intro}</p>
        </header>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {c.blocks.map((b, i) => {
            const Icon = ICONS[i % ICONS.length];
            return (
              <section key={b.t} className="bg-card rounded-2xl p-5 sm:p-6 shadow-soft h-full">
                <Icon className="h-6 w-6 text-accent" strokeWidth={1.75} />
                <h2 className="mt-4 font-display text-lg font-semibold tracking-tight" style={{ color: "#1F2937" }}>
                  {b.t}
                </h2>
                <p className="mt-2 text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                  {b.d}
                </p>
              </section>
            );
          })}
        </div>

        <section className="mt-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight flex items-center gap-2">
            <Sparkles className="h-5 w-5 text-accent" strokeWidth={1.75} />
            {c.stepsTitle}
          </h2>
          <ol className="mt-5 grid gap-3 sm:grid-cols-2">
            {c.steps.map((s, i) => (
              <li key={s} className="flex items-start gap-3 rounded-xl hairline p-4">
                <span className="shrink-0 h-6 w-6 rounded-full bg-accent text-accent-foreground text-xs font-semibold flex items-center justify-center">
                  {i + 1}
                </span>
                <span className="text-sm text-muted-foreground leading-relaxed">{s}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="mt-12 flex flex-col sm:flex-row gap-3">
          <Link
            to="/#kontakt"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium shadow-glow hover:opacity-95 transition"
          >
            {c.cta}
          </Link>
          <a
            href="mailto:studiosouthwest@posteo.de?subject=Partnerschaft"
            className="inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-medium text-foreground hover:text-accent transition-colors hairline"
          >
            {c.mail}
          </a>
        </div>
      </div>
    </main>
  );
};

export default Partnerschaft;
