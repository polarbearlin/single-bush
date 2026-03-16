"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { dictionaries, Lang } from "@/dictionaries";

interface LanguageContextType {
  lang: Lang;
  setLang: (lang: Lang) => void;
  dict: typeof dictionaries.en;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  // Load language preference from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem("single-bush-lang") as Lang;
    if (savedLang && (savedLang === "en" || savedLang === "zh")) {
      setLang(savedLang);
    } else {
      // Auto-detect based on browser language
      const browserLang = navigator.language.toLowerCase();
      if (browserLang.startsWith("zh")) {
        setLang("zh");
      }
    }
  }, []);

  // Save to localStorage when language changes
  useEffect(() => {
    localStorage.setItem("single-bush-lang", lang);
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, dict: dictionaries[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
