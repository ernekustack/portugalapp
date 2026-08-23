import { useI18n } from "@/i18n/LanguageContext";
import { images } from "@/i18n/translations";
import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";

const IMAGE_KEYS = ["p1", "p2", "p3"] as const;

const FALLBACK_BG = [
  "linear-gradient(135deg, hsl(220 28% 12%), hsl(24 50% 18%))",
  "linear-gradient(135deg, hsl(24 50% 22%), hsl(40 60% 55%))",
  "linear-gradient(135deg, hsl(220 30% 14%), hsl(24 45% 25%))",
];

export const InDevelopment = () => {
  const { t } = useI18n();
  const s = t.inDevelopment;

  return (
    <section id="in-development" className="py-20 sm:py-28 container-px">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-accent text-sm tracking-widest uppercase mb-4">{s.eyebrow}</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl tracking-tight max-w-3xl">
            {s.title}
            <em className="font-serif-display not-italic text-accent">{s.titleItalic}</em>
          </h2>
          <p className="mt-5 text-ink-soft max-w-2xl">{s.desc}</p>
        </Reveal>

        {/* Kleinere Kacheln */}
        <div className="mt-12 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {s.items.map((p, i) => {
            const img = images.inDevelopment[IMAGE_KEYS[i]];
            const inner = (
              <>
                {/* Grafik */}
                <div className="relative h-28 w-full overflow-hidden rounded-t-2xl">
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
                      <Sparkles className="h-8 w-8 text-white/70" strokeWidth={1.5} />
                    </div>
                  )}
                  <span className="absolute top-2.5 left-2.5 text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-full bg-white/15 text-white backdrop-blur">
                    {s.badge}
                  </span>
                </div>

                {/* Kurztext */}
                <div className="p-4 flex flex-col gap-1.5 flex-1">
                  <h3
                    className="font-display text-base sm:text-lg tracking-tight leading-snug"
                    style={{ color: "#1F2937" }}
                  >
                    {p.name || "…"}
                  </h3>
                  <p className="text-[13px] leading-relaxed" style={{ color: "#1F2937" }}>
                    {p.desc || "…"}
                  </p>
                  <span
                    className="mt-1 inline-flex items-center gap-1 text-[12px] font-medium"
                    style={{ color: "#ab5014" }}
                  >
                    {p.link ? s.visit : s.soon}
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M7 17L17 7M17 7H8M17 7v9" />
                    </svg>
                  </span>
                </div>
              </>
            );

            const card = (
              <article className="bg-card rounded-2xl overflow-hidden shadow-sm h-full flex flex-col group hover:shadow-card transition-shadow">
                {inner}
              </article>
            );

            return (
              <Reveal key={i} delay={i * 80}>
                {p.link ? (
                  <a href={p.link} target="_blank" rel="noopener noreferrer" aria-label={p.name} className="block h-full">
                    {card}
                  </a>
                ) : (
                  card
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
