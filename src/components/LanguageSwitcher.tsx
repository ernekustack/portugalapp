import { useI18n } from "@/i18n/LanguageContext";
import { LANGUAGES, Lang } from "@/i18n/translations";

export const LanguageSwitcher = ({ className = "" }: { className?: string }) => {
  const { lang, setLang } = useI18n();
  return (
    <div className={`inline-flex items-center gap-1 rounded-full hairline bg-background/60 backdrop-blur p-1 ${className}`}>
      {LANGUAGES.map((l) => {
        const active = l.code === lang;
        return (
          <button
            key={l.code}
            onClick={() => setLang(l.code as Lang)}
            aria-pressed={active}
            className={`px-2.5 py-1 text-[11px] font-medium tracking-wider rounded-full transition-colors ${
              active ? "bg-accent text-accent-foreground" : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {l.label}
          </button>
        );
      })}
    </div>
  );
};
