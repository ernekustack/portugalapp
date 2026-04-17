import { useEffect, useState } from "react";
import { useI18n } from "@/i18n/LanguageContext";

export const CookieBanner = () => {
  const { t } = useI18n();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem("cookie-consent");
    if (!accepted) {
      const id = setTimeout(() => setShow(true), 600);
      return () => clearTimeout(id);
    }
  }, []);

  if (!show) return null;

  const accept = () => {
    try { localStorage.setItem("cookie-consent", "accepted"); } catch {}
    setShow(false);
  };

  return (
    <div className="fixed bottom-4 inset-x-4 md:inset-x-auto md:right-6 md:bottom-6 z-[60] animate-fade-in">
      <div className="md:max-w-md mx-auto md:mx-0 rounded-2xl bg-background/90 backdrop-blur-xl hairline shadow-card p-4 md:p-5 flex items-center gap-4">
        <p className="text-sm text-muted-foreground leading-relaxed flex-1">{t.cookie.text}</p>
        <button
          onClick={accept}
          className="shrink-0 inline-flex items-center rounded-full bg-accent text-accent-foreground px-4 py-2 text-xs font-medium hover:opacity-90 transition shadow-soft"
        >
          {t.cookie.accept}
        </button>
      </div>
    </div>
  );
};
