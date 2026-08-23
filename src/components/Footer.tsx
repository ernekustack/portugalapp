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
              <span className="font-display font-semibold tracking-tight">Studio Southwest<span className="text-accent">.</span></span>
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
              <li><a className="link-underline hover:text-accent" href="mailto:studiosouthwest@posteo.de">studiosouthwest@posteo.de</a></li>

            </ul>
          </div>

          <div className="md:col-span-2">
            <div className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-medium">{t.footer.legal}</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              <li><a href="#" className="link-underline hover:text-foreground">{t.footer.imprint}</a></li>
              <li><Link to="/datenschutz" className="link-underline hover:text-foreground">{t.footer.privacy}</Link></li>
            </ul>
          </div>

        
        </div>

        <div className="mt-14 pt-6 border-t border-border flex flex-col md:flex-row gap-3 md:items-center justify-between text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Studio Southwest. {t.footer.rights}</div>
          <div>{t.footer.made}</div>
        </div>
      </div>
    </footer>
  );
};
