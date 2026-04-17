import { useI18n } from "@/i18n/LanguageContext";
import { Reveal } from "./Reveal";
import { Button } from "./ui/button";
import { Heart, Sparkles } from "lucide-react";

const ICONS = [Sparkles, Heart];

export const Initiatives = () => {
  const { t } = useI18n();
  const s = t.initiatives;

  return (
    <section id="initiatives" className="py-24 sm:py-32 container-px">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">{s.eyebrow}</p>
          <h2 className="font-display text-4xl sm:text-5xl md:text-6xl tracking-tight max-w-3xl">
            {s.title}<em className="font-serif-display not-italic text-accent">{s.titleItalic}</em>
          </h2>
          <p className="mt-6 text-ink-soft max-w-2xl">{s.desc}</p>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {s.projects.map((p, i) => {
            const Icon = ICONS[i] ?? Sparkles;
            return (
              <Reveal key={p.name} delay={i * 80}>
                <article className="bg-card rounded-2xl overflow-hidden shadow-sm h-full flex flex-col">
                  {/* Image placeholder */}
                  <div
                    className="aspect-[16/9] w-full relative flex items-center justify-center"
                    style={{
                      background:
                        i === 0
                          ? "linear-gradient(135deg, hsl(220 28% 12%), hsl(158 50% 18%))"
                          : "linear-gradient(135deg, hsl(158 50% 22%), hsl(40 60% 55%))",
                    }}
                  >
                    <Icon className="h-12 w-12 text-white/90" strokeWidth={1.5} />
                    <span
                      className="absolute top-4 left-4 text-xs tracking-widest uppercase px-2.5 py-1 rounded-full bg-white/15 text-white backdrop-blur"
                    >
                      {p.tag}
                    </span>
                  </div>

                  <div className="p-6 sm:p-8 flex flex-col gap-4 flex-1">
                    <h3
                      className="font-display text-2xl sm:text-3xl tracking-tight"
                      style={{ color: "#1F2937" }}
                    >
                      {p.name}
                    </h3>
                    <p
                      className="text-base leading-relaxed"
                      style={{ color: "#1F2937" }}
                    >
                      {p.tagline}
                    </p>

                    <div
                      className="mt-2 rounded-lg p-4 border"
                      style={{ background: "hsl(158 60% 96%)", borderColor: "hsl(158 40% 80%)" }}
                    >
                      <p
                        className="text-xs tracking-widest uppercase mb-1 font-semibold"
                        style={{ color: "#065F46" }}
                      >
                        {s.sponsorGoal}
                      </p>
                      <p className="text-sm" style={{ color: "#1F2937" }}>
                        {p.goal}
                      </p>
                    </div>

                    <div className="mt-auto pt-2">
                      <Button
                        asChild
                        className="bg-accent text-accent-foreground hover:bg-accent/90 w-full sm:w-auto"
                      >
                        <a href="#contact">{s.cta}</a>
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
