import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n/LanguageContext";

export const TechStack = () => {
  const { t } = useI18n();
  return (
    <section id="qualitaet" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{t.tech.eyebrow}</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              {t.tech.title}
              <span className="font-serif-display italic text-ink-soft">{t.tech.titleItalic}</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-md">{t.tech.desc}</p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-3xl hairline bg-card p-6 md:p-10 shadow-soft">
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-x-4 gap-y-8">
                {t.tech.stack.map((s) => (
                  <div key={s.name} className="text-center group">
                    <div className="mx-auto h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center font-display font-semibold text-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {s.name.slice(0, 2)}
                    </div>
                    <div className="mt-3 font-medium text-sm">{s.name}</div>
                    <div className="text-xs text-muted-foreground">{s.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                {t.tech.stats.map((s) => (
                  <div key={s.k}>
                    <div className="font-display font-semibold tracking-tight">{s.k}</div>
                    <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};
