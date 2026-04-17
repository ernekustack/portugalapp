import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n/LanguageContext";

const BusinessMock = () => (
  <div className="absolute inset-0 p-6 md:p-8">
    <div className="h-full w-full rounded-2xl bg-background hairline shadow-card overflow-hidden">
      <div className="flex items-center gap-1.5 px-4 py-3 border-b border-border bg-secondary/50">
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
        <span className="ml-3 text-[10px] text-muted-foreground">workspace.app</span>
      </div>
      <div className="grid grid-cols-12 gap-3 p-4">
        <div className="col-span-3 space-y-2">
          {[...Array(5)].map((_, i) => (
            <div key={i} className={`h-6 rounded-md ${i === 1 ? "bg-accent/15" : "bg-secondary"}`} />
          ))}
        </div>
        <div className="col-span-9 space-y-3">
          <div className="grid grid-cols-3 gap-3">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="rounded-xl border border-border p-3">
                <div className="h-2 w-12 rounded bg-muted" />
                <div className="mt-2 h-5 w-16 rounded bg-foreground/80" />
                <div className="mt-2 h-1.5 w-full rounded bg-secondary overflow-hidden">
                  <div className="h-full bg-accent" style={{ width: `${30 + i * 22}%` }} />
                </div>
              </div>
            ))}
          </div>
          <div className="rounded-xl border border-border p-3 h-28 relative overflow-hidden">
            <svg viewBox="0 0 200 80" className="absolute inset-0 w-full h-full">
              <defs>
                <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="hsl(var(--accent))" stopOpacity="0.35" />
                  <stop offset="100%" stopColor="hsl(var(--accent))" stopOpacity="0" />
                </linearGradient>
              </defs>
              <path d="M0,60 C30,40 50,55 80,35 C110,15 140,45 170,25 L200,30 L200,80 L0,80 Z" fill="url(#g)" />
              <path d="M0,60 C30,40 50,55 80,35 C110,15 140,45 170,25 L200,30" fill="none" stroke="hsl(var(--accent))" strokeWidth="1.5" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ConsumerMock = () => (
  <div className="absolute inset-0 flex items-center justify-center p-6">
    <div className="relative">
      <div className="w-[180px] h-[360px] md:w-[210px] md:h-[420px] rounded-[2.5rem] bg-ink p-2.5 shadow-card animate-float">
        <div className="h-full w-full rounded-[2rem] bg-background overflow-hidden relative">
          <div className="absolute top-2 left-1/2 -translate-x-1/2 h-4 w-20 bg-ink rounded-full" />
          <div className="pt-10 px-4">
            <div className="text-[10px] text-muted-foreground">Hi,</div>
            <div className="font-display text-lg font-semibold tracking-tight">Anna</div>
            <div className="mt-3 rounded-2xl bg-gradient-ink p-4 text-primary-foreground shadow-soft">
              <div className="text-[10px] opacity-70">Active</div>
              <div className="text-xl font-semibold mt-1">€ 2.480</div>
              <div className="mt-3 h-1 rounded-full bg-white/15 overflow-hidden">
                <div className="h-full bg-accent w-2/3" />
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-2">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-14 rounded-xl border border-border bg-secondary/60" />
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="absolute -inset-10 -z-10 rounded-full bg-accent/15 blur-3xl" />
    </div>
  </div>
);

export const Portfolio = () => {
  const { t } = useI18n();
  const cards = [
    { ...t.portfolio.business, visual: "business" as const },
    { ...t.portfolio.consumer, visual: "consumer" as const },
  ];

  return (
    <section id="leistungen" className="py-24 md:py-32 surface">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="max-w-2xl">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{t.portfolio.eyebrow}</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              {t.portfolio.title}
              <span className="font-serif-display italic text-ink-soft">{t.portfolio.titleItalic}</span>
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 md:mt-20 grid lg:grid-cols-2 gap-6 md:gap-8">
          {cards.map((c, i) => (
            <Reveal key={c.title} delay={i * 120}>
              <article className="group relative rounded-3xl bg-card hairline overflow-hidden shadow-soft hover:shadow-card transition-all duration-500">
                <div className="relative h-72 md:h-80 surface-2 border-b border-border overflow-hidden">
                  {c.visual === "business" ? <BusinessMock /> : <ConsumerMock />}
                </div>
                <div className="p-7 md:p-9">
                  <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">{c.eyebrow}</div>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl font-semibold tracking-tight">{c.title}</h3>
                  <p className="mt-4 text-muted-foreground leading-relaxed text-pretty">{c.desc}</p>
                  <ul className="mt-6 space-y-2.5">
                    {c.bullets.map((b) => (
                      <li key={b} className="flex items-center gap-3 text-sm text-foreground">
                        <span className="h-5 w-5 rounded-full bg-accent/10 text-accent flex items-center justify-center">
                          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M5 12l5 5L20 7"/></svg>
                        </span>
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
