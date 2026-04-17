import { Reveal } from "./Reveal";

export const CTA = () => {
  return (
    <section id="kontakt" className="py-24 md:py-32">
      <div className="container-px mx-auto max-w-7xl">
        <Reveal>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-ink text-primary-foreground p-10 md:p-16 shadow-card">
            <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-accent/30 blur-3xl" />
            <div className="absolute -bottom-32 -left-20 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />

            <div className="relative grid lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-8">
                <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium">Bereit anzufangen?</div>
                <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance">
                  Lassen Sie uns über Ihre Idee{" "}
                  <span className="font-serif-display italic text-accent">sprechen.</span>
                </h2>
                <p className="mt-5 text-white/70 max-w-xl leading-relaxed">
                  30 Minuten, unverbindlich, klar. Sie bekommen eine ehrliche Einschätzung – und einen
                  realistischen Plan.
                </p>
              </div>
              <div className="lg:col-span-4 lg:text-right">
                <a
                  href="mailto:hallo@studio.app"
                  className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-6 py-4 text-sm font-medium shadow-glow hover:opacity-95 transition"
                >
                  Kostenloses Erstgespräch
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
                </a>
                <div className="mt-4 text-xs text-white/50">Antwort innerhalb von 24 Stunden</div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
