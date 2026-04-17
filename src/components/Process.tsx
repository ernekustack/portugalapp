import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n/LanguageContext";

export const Process = () => {
  const { t } = useI18n();
  return (
    <section id="prozess" className="py-24 md:py-32 surface">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{t.process.eyebrow}</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              {t.process.title}
              <span className="font-serif-display italic text-ink-soft">{t.process.titleItalic}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid md:grid-cols-3 gap-6 md:gap-8 relative">
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-px bg-border" />
          {t.process.steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 120}>
              <div className="relative rounded-3xl bg-card hairline p-8 md:p-9 shadow-soft hover:-translate-y-1 transition-transform duration-500">
                <div className="flex items-center gap-4">
                  <div className="h-10 w-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-medium">
                    {i + 1}
                  </div>
                  <div className="text-xs text-muted-foreground tracking-widest">{s.n}</div>
                </div>
                <h3 className="mt-6 font-display text-xl md:text-2xl font-semibold tracking-tight">{s.t}</h3>
                <p className="mt-3 text-muted-foreground leading-relaxed text-pretty">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
