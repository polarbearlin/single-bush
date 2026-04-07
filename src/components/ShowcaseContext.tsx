"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ShowcaseContextType {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

const ShowcaseContext = createContext<ShowcaseContextType | undefined>(undefined);

export function ShowcaseProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <ShowcaseContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ShowcaseContext.Provider>
  );
}

export function useShowcase() {
  const context = useContext(ShowcaseContext);
  if (context === undefined) {
    throw new Error("useShowcase must be used within a ShowcaseProvider");
  }
  return context;
}
