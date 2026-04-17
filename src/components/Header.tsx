import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";
import { LanguageSwitcher } from "./LanguageSwitcher";

export const Header = () => {
  const { t } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  const links = [
    { href: "#leistungen", label: t.nav.services },
    { href: "#qualitaet", label: t.nav.quality },
    { href: "#prozess", label: t.nav.process },
    { href: "#kontakt", label: t.nav.contact },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-xl bg-background/70 border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto max-w-7xl flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex items-center gap-2 group">
          <span className="h-7 w-7 rounded-lg bg-gradient-ink flex items-center justify-center shadow-soft">
            <span className="h-2 w-2 rounded-sm bg-accent" />
          </span>
          <span className="font-display font-semibold tracking-tight text-[15px]">
            Studio<span className="text-accent">.</span>
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors link-underline"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <LanguageSwitcher />
          <a
            href="#kontakt"
            className="inline-flex items-center gap-2 rounded-full bg-accent text-accent-foreground px-4 py-2 text-sm font-medium hover:opacity-90 transition shadow-soft"
          >
            {t.nav.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </a>
        </div>

        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            aria-label="Menu"
            onClick={() => setOpen((o) => !o)}
            className="p-2 -mr-2 rounded-lg hover:bg-secondary"
          >
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? <path d="M6 6l12 12M18 6L6 18"/> : <><path d="M3 6h18"/><path d="M3 12h18"/><path d="M3 18h18"/></>}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in">
          <div className="container-px py-4 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2 text-foreground">
                {l.label}
              </a>
            ))}
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center rounded-full bg-accent text-accent-foreground px-4 py-3 text-sm font-medium"
            >
              {t.nav.ctaLong}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
