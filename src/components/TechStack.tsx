import { Reveal } from "./Reveal";

const stack = [
  { name: "React", sub: "JavaScript" },
  { name: "Python", sub: "Backend & KI" },
  { name: "Swift", sub: "iOS" },
  { name: "Kotlin", sub: "Android" },
  { name: "SQL", sub: "Datenbanken" },
];

export const TechStack = () => {
  return (
    <section id="qualitaet" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <Reveal className="lg:col-span-5">
            <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Qualitäts-Garantie</div>
            <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
              Verwendete{" "}
              <span className="font-serif-display italic text-ink-soft">Industriestandards.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed text-pretty max-w-md">
              Für Ihre Sicherheit setze ich ausschließlich auf weltweit bewährte Technologien.
              Das garantiert Ihnen eine schnelle, stabile App, die jederzeit mit Ihrem Unternehmen
              mitwachsen kann.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <div className="rounded-3xl hairline bg-card p-6 md:p-10 shadow-soft">
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-x-4 gap-y-8">
                {stack.map((t) => (
                  <div key={t.name} className="text-center group">
                    <div className="mx-auto h-14 w-14 rounded-2xl bg-secondary flex items-center justify-center font-display font-semibold text-lg group-hover:bg-accent group-hover:text-accent-foreground transition-colors">
                      {t.name.slice(0, 2)}
                    </div>
                    <div className="mt-3 font-medium text-sm">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.sub}</div>
                  </div>
                ))}
              </div>
              <div className="mt-10 pt-6 border-t border-border grid grid-cols-3 gap-4 text-center">
                <Stat k="Stabil" v="Bewährt seit Jahren" />
                <Stat k="Schnell" v="Optimierte Performance" />
                <Stat k="Skalierbar" v="Wächst mit Ihnen" />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ k, v }: { k: string; v: string }) => (
  <div>
    <div className="font-display font-semibold tracking-tight">{k}</div>
    <div className="text-xs text-muted-foreground mt-1">{v}</div>
  </div>
);
