import content from "@/content.json";

export type Lang = "de" | "en" | "pt" | "nl";

export const LANGUAGES: { code: Lang; label: string }[] = [
  { code: "de", label: "DE" },
  { code: "en", label: "EN" },
  { code: "pt", label: "PT" },
  { code: "nl", label: "NL" },
];

export type Dict = (typeof content)["translations"]["de"];

export const translations = content.translations as Record<Lang, Dict>;
export const images = content.images;
