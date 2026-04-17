import { useState } from "react";
import { z } from "zod";
import { Reveal } from "./Reveal";
import { useI18n } from "@/i18n/LanguageContext";

// Replace with your real Formspree endpoint (e.g. https://formspree.io/f/abcd1234)
// Submissions are stored on Formspree and viewable as a list — no own DB needed.
const FORM_ENDPOINT = "https://formspree.io/f/your-form-id";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(2000),
});

export const ContactForm = () => {
  const { t } = useI18n();
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = { name: String(fd.get("name") || ""), email: String(fd.get("email") || ""), message: String(fd.get("message") || "") };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const es: Record<string, string> = {};
      parsed.error.issues.forEach((i) => { es[String(i.path[0])] = i.message; });
      setErrors(es);
      return;
    }
    setErrors({});
    setStatus("sending");
    try {
      const res = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) throw new Error("submit failed");
      setStatus("success");
      e.currentTarget.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="kontakt" className="py-24 md:py-32 surface">
      <div className="container-px mx-auto max-w-3xl">
        <Reveal>
          <div className="text-xs uppercase tracking-[0.2em] text-accent font-medium text-center">{t.contact.eyebrow}</div>
          <h2 className="mt-4 font-display text-3xl md:text-5xl font-semibold tracking-tight text-balance text-center">
            {t.contact.title}
          </h2>
          <p className="mt-4 text-muted-foreground text-center max-w-xl mx-auto leading-relaxed">{t.contact.desc}</p>
        </Reveal>

        <Reveal delay={120}>
          <form onSubmit={onSubmit} className="mt-12 rounded-3xl bg-card hairline shadow-soft p-6 md:p-10 space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              <Field label={t.contact.name} name="name" type="text" autoComplete="name" error={errors.name} />
              <Field label={t.contact.email} name="email" type="email" autoComplete="email" error={errors.email} />
            </div>
            <div>
              <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">{t.contact.message}</label>
              <textarea
                name="message"
                rows={5}
                maxLength={2000}
                className="mt-2 w-full rounded-2xl bg-background hairline px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
              />
              {errors.message && <p className="mt-1.5 text-xs text-destructive">{errors.message}</p>}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
              <p className="text-xs text-muted-foreground max-w-sm">{t.contact.privacy}</p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3 text-sm font-medium shadow-soft hover:opacity-95 transition disabled:opacity-60"
              >
                {status === "sending" ? t.contact.sending : t.contact.submit}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
              </button>
            </div>

            {status === "success" && (
              <div className="rounded-2xl bg-accent/10 text-accent border border-accent/20 px-4 py-3 text-sm">
                {t.contact.success}
              </div>
            )}
            {status === "error" && (
              <div className="rounded-2xl bg-destructive/10 text-destructive border border-destructive/20 px-4 py-3 text-sm">
                {t.contact.error}
              </div>
            )}
          </form>
        </Reveal>
      </div>
    </section>
  );
};

const Field = ({ label, name, type, autoComplete, error }: { label: string; name: string; type: string; autoComplete?: string; error?: string }) => (
  <div>
    <label className="text-xs uppercase tracking-[0.18em] text-muted-foreground font-medium">{label}</label>
    <input
      name={name}
      type={type}
      autoComplete={autoComplete}
      maxLength={255}
      className="mt-2 w-full rounded-2xl bg-background hairline px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/40 transition"
    />
    {error && <p className="mt-1.5 text-xs text-destructive">{error}</p>}
  </div>
);
