import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden bg-gradient-hero">
      {/* subtle grid */}
      <div className="absolute inset-0 bg-dotgrid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      <div className="relative container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full hairline px-3 py-1.5 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            Aktuell verfügbar – neue Projekte ab Q2
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance max-w-5xl">
            Ihre Idee als{" "}
            <span className="font-serif-display italic text-accent">maßgeschneiderte</span> App
            <span className="block text-ink-soft font-normal mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              einfach, schnell &amp; zukunftssicher.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Ich entwickle digitale Lösungen, die Ihre Prozesse optimieren oder Ihre Kunden begeistern.
            Professionelle Umsetzung – ohne kompliziertes IT-Vokabular.
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-medium shadow-soft hover:shadow-card transition-all"
            >
              Kostenloses Erstgespräch vereinbaren
              <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              Leistungen ansehen
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </Reveal>

        {/* trust row */}
        <Reveal delay={360}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-10 max-w-3xl">
            {[
              ["100%", "Maßgeschneidert"],
              ["DSGVO", "Konform entwickelt"],
              ["7+ J.", "Erfahrung"],
              ["1:1", "Direkter Kontakt"],
            ].map(([k, v]) => (
              <div key={v}>
                <div className="font-display text-2xl md:text-3xl font-semibold tracking-tight">{k}</div>
                <div className="text-xs md:text-sm text-muted-foreground mt-1">{v}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
};
