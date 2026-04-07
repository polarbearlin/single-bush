"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { useCart } from "@/components/CartContext";
import { useShowcase } from "@/components/ShowcaseContext";

export function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const { lang, setLang, dict } = useLanguage();
  const { totalItems, setIsOpen: setCartOpen } = useCart();
  const { setIsOpen: setShowcaseOpen } = useShowcase();

  const links = [
    { href: "/products", label: dict.nav.products },
    { href: "/journal", label: dict.nav.journal },
    { href: "/aroma", label: dict.nav.aroma },
    { href: "/guide", label: dict.nav.guide },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-parchment/80 backdrop-blur-md border-b border-cream-dark/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 h-16 flex items-center justify-between">
          <Link href="/" className="font-serif text-2xl tracking-wider text-charcoal">
            SINGLE BUSH
          </Link>
          
          <div className="hidden md:flex items-center gap-10 text-sm tracking-widest uppercase text-mountain">
            {links.map((link) => (
              <Link 
                key={link.href} 
                href={link.href}
                className={`transition-colors duration-300 ${pathname === link.href ? "text-charcoal" : "hover:text-charcoal"}`}
              >
                {link.label}
              </Link>
            ))}
            <button 
              onClick={() => setShowcaseOpen(true)}
              className="transition-colors duration-300 hover:text-charcoal"
            >
              {dict.nav.showcase}
            </button>
          </div>

          <button 
            className="md:hidden text-charcoal z-50 relative"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <line x1="4" y1="7" x2="20" y2="7" />
                <line x1="4" y1="12" x2="20" y2="12" />
                <line x1="4" y1="17" x2="20" y2="17" />
              </svg>
            )}
          </button>
          
          <button
            onClick={() => setLang(lang === "en" ? "zh" : "en")}
            className="hidden md:block ml-8 text-xs tracking-widest text-mountain hover:text-charcoal transition-colors border border-mountain/30 px-3 py-1 rounded"
          >
            {lang === "en" ? "中文" : "EN"}
          </button>

          {/* 购物车图标 */}
          <button
            onClick={() => setCartOpen(true)}
            className="relative ml-4 text-mountain hover:text-charcoal transition-colors p-1"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <AnimatePresence>
              {totalItems > 0 && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  exit={{ scale: 0 }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-amber text-white text-[10px] flex items-center justify-center rounded-full"
                >
                  {totalItems}
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-parchment bg-opacity-95 backdrop-blur-lg pt-24 px-6 md:hidden flex flex-col items-center gap-8"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`text-2xl font-serif tracking-widest uppercase ${pathname === link.href ? "text-charcoal" : "text-mountain"}`}
              >
                {link.label}
              </Link>
            ))}
            
            <button
              onClick={() => {
                setShowcaseOpen(true);
                setIsOpen(false);
              }}
              className="text-2xl font-serif tracking-widest uppercase text-mountain hover:text-charcoal"
            >
              {dict.nav.showcase}
            </button>

            <button
              onClick={() => {
                setLang(lang === "en" ? "zh" : "en");
                setIsOpen(false);
              }}
              className="mt-8 text-sm tracking-widest text-charcoal border border-charcoal/30 px-8 py-3 rounded hover:bg-charcoal/5"
            >
              {lang === "en" ? "切换至中文" : "Switch to English"}
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
