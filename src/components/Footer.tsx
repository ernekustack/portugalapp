import { useI18n } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useI18n();
  return (
    <footer className="border-t border-border">
      <div className="container-px mx-auto max-w-7xl py-14 md:py-20">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2">
              <span className="h-7 w-7 rounded-lg bg-gradient-ink flex items-center justify-center">
                <span className="h-2 w-2 rounded-sm bg-accent" />
              </span>
              <span className="font-display font-semibold tracking-tight">Studio<span className="text-accent">.</span></span>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">{t.footer.tagline}</p>

            <p className="mt-6 text-xs text-muted-foreground/80 max-w-sm leading-relaxed">{t.footer.standards}</p>
            <div className="mt-3 flex items-center gap-2 flex-wrap">
              {["JavaScript", "Python", "Swift", "Kotlin"].map((n) => (
                <span key={n} className="text-[11px] tracking-wider px-2.5 py-1 rounded-full hairline text-muted-foreground bg-secondary/40">
                  {n}
                </span>
              ))}
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{t.footer.contact}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a className="link-underline hover:text-accent" href="mailto:hallo@studio.app">hallo@studio.app</a></li>
              <li><a className="link-underline hover:text-accent" href="tel:+490000">+49 (0) 000 000 000</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{t.footer.legal}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#" className="link-underline hover:text-foreground">{t.footer.imprint}</a></li>
              <li><a href="#" className="link-underline hover:text-foreground">{t.footer.privacy}</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{t.footer.follow}</div>
            <div className="mt-4 flex items-center gap-3">
              {[
                { label: "LinkedIn", path: "M4 4h4v16H4zM10 9h4v2c.7-1.3 2.2-2.3 4-2.3 3 0 4 2 4 5V20h-4v-5.5c0-1.4-.5-2.3-1.7-2.3-1.3 0-2.3 1-2.3 2.4V20h-4z" },
                { label: "X", path: "M3 3l8 10L3.5 21H6l6.5-7L18 21h3l-8.5-11L20 3h-2.5L12 9 7 3z" },
                { label: "GitHub", path: "M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.35 1.08 2.93.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.95 0-1.1.39-2 1.03-2.7-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.7 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0 0 12 2z" },
              ].map((s) => (
                <a key={s.label} href="#" aria-label={s.label} className="h-9 w-9 rounded-full hairline flex items-center justify-center hover:bg-secondary transition-colors">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d={s.path}/></svg>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Studio. {t.footer.rights}</div>
          <div>{t.footer.made}</div>
        </div>
      </div>
    </footer>
  );
};
