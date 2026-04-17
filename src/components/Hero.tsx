import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useI18n();
  return (
    <section id="top" className="relative pt-32 md:pt-44 pb-20 md:pb-32 overflow-hidden bg-gradient-hero">
      <div className="absolute inset-0 bg-dotgrid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)] pointer-events-none" />

      <div className="relative container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="inline-flex items-center gap-2 rounded-full hairline px-3 py-1.5 text-xs text-muted-foreground bg-background/60 backdrop-blur">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 rounded-full bg-accent animate-ping opacity-60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-accent" />
            </span>
            {t.hero.badge}
          </div>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.05] text-balance max-w-5xl">
            {t.hero.title1}
            <span className="font-serif-display italic text-accent">{t.hero.titleItalic}</span>
            {t.hero.titleAfter}
            <span className="block text-ink-soft font-normal mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
              {t.hero.subtitle}
            </span>
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="mt-8 max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            {t.hero.desc}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-10 flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <a
              href="#kontakt"
              className="group inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-3.5 text-sm font-medium shadow-glow hover:opacity-95 transition-all"
            >
              {t.hero.cta}
              <svg className="transition-transform group-hover:translate-x-0.5" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
            </a>
            <a
              href="#leistungen"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3.5 text-sm font-medium text-foreground hover:text-accent transition-colors"
            >
              {t.hero.secondary}
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12l7 7 7-7"/></svg>
            </a>
          </div>
        </Reveal>

        <Reveal delay={360}>
          <div className="mt-16 md:mt-24 grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-10 max-w-3xl">
            {t.hero.stats.map(({ k, v }) => (
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
