import { createContext, useContext, useEffect, useMemo, useState, ReactNode } from "react";
import { Lang, translations, Dict } from "./translations";

type Ctx = { lang: Lang; setLang: (l: Lang) => void; t: Dict };

const LanguageContext = createContext<Ctx | null>(null);

const SUPPORTED: Lang[] = ["de", "en", "pt", "nl"];

const detect = (): Lang => {
  if (typeof window === "undefined") return "en";
  const saved = localStorage.getItem("lang") as Lang | null;
  if (saved && SUPPORTED.includes(saved)) return saved;
  return "en";
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    setLangState(detect());
  }, []);

  useEffect(() => {
    if (typeof document !== "undefined") document.documentElement.lang = lang;
  }, [lang]);

  const setLang = (l: Lang) => {
    setLangState(l);
    try { localStorage.setItem("lang", l); } catch {}
  };

  const value = useMemo<Ctx>(() => ({ lang, setLang, t: translations[lang] }), [lang]);
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

const fallback: Ctx = { lang: "en", setLang: () => {}, t: translations.en };

export const useI18n = () => {
  const ctx = useContext(LanguageContext);
  return ctx ?? fallback;
};
