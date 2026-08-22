import { useI18n } from "@/i18n/LanguageContext";
import { images } from "@/i18n/translations";
import { Reveal } from "./Reveal";
import { Button } from "./ui/button";
import { Sparkles } from "lucide-react";

// Vorschaubild je Projekt — Reihenfolge muss mit den Projekten übereinstimmen.
const IMAGE_KEYS = ["luzEMorte", "alentejoEvents", "lume"] as const;

const FALLBACK_BG = [
  "linear-gradient(135deg, hsl(220 28% 12%), hsl(24 50% 18%))",
  "linear-gradient(135deg, hsl(24 50% 22%), hsl(40 60% 55%))",
  "linear-gradient(135deg, hsl(220 30% 14%), hsl(24 45% 25%))",
];

export const Initiatives = () => {
  const { t } = useI18n();
  const s = t.initiatives;

  return (
    <section id="initiatives" className="py-20 sm:py-28 container-px">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">{s.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-3xl">
            {s.title}<em className="font-serif-display not-italic text-accent">{s.titleItalic}</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-2xl">{s.desc}</p>
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {s.projects.map((p, i) => {
            const img = images.initiatives[IMAGE_KEYS[i]];
            return (
              <Reveal key={p.name} delay={i * 80}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                  {/* Vorschaubild */}
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block relative aspect-[16/10] w-full overflow-hidden group"
                    aria-label={p.name}
                  >
                    {img ? (
                      <img
                        src={img}
                        alt={p.name}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                      />
                    ) : (
                      <div
                        className="h-full w-full flex items-center justify-center"
                        style={{ background: FALLBACK_BG[i % FALLBACK_BG.length] }}
                      >
                        <Sparkles className="h-10 w-10 text-white/80" strokeWidth={1.5} />
                      </div>
                    )}
                    <span
                      className="absolute top-3 left-3 text-[11px] tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur"
                    >
                      {p.tag}
                    </span>
                  </a>

                  <div className="p-5 sm:p-6 flex flex-col gap-3 flex-1">
                    <h3
                      className="font-display text-xl sm:text-2xl tracking-tight"
                      style={{ color: "#1F2937" }}
                    >
                      {p.name}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "#1F2937" }}>
                      {p.tagline}
                    </p>

                    <div
                      className="mt-1 rounded-lg p-3.5 border"
                      style={{ background: "hsl(24 60% 96%)", borderColor: "hsl(24 40% 80%)" }}
                    >
                      <p
                        className="text-[11px] tracking-widest uppercase mb-1 font-semibold"
                        style={{ color: "#065F46" }}
                      >
                        {s.sponsorGoal}
                      </p>
                      <p className="text-[13px]" style={{ color: "#1F2937" }}>
                        {p.goal}
                      </p>
                    </div>

                    <div className="mt-auto pt-2">
                      <Button
                        asChild
                        className="bg-accent text-accent-foreground hover:bg-accent/90 w-full"
                      >
                        <a href={p.link} target="_blank" rel="noopener noreferrer">
                          {s.cta}
                        </a>
                      </Button>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
