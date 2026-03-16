"use client";

import Link from "next/link";
import { useLanguage } from "@/components/LanguageContext";

export function Footer() {
  const { dict } = useLanguage();

  return (
    <footer className="py-16 px-6 lg:px-12 border-t border-cream-dark">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <p className="font-serif text-xl tracking-wider text-charcoal mb-2">SINGLE BUSH</p>
          <p className="text-mountain text-xs tracking-wider">{dict.footer.location}</p>
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-xs tracking-[0.2em] uppercase text-mountain">
          <Link href="/products" className="hover:text-charcoal transition-colors">{dict.nav.products}</Link>
          <Link href="/aroma" className="hover:text-charcoal transition-colors">{dict.nav.aroma}</Link>
          <Link href="/guide" className="hover:text-charcoal transition-colors">{dict.nav.guide}</Link>
        </div>
        <p className="text-mountain/50 text-xs text-center md:text-right">{dict.footer.rights} <br className="md:hidden" /> {dict.footer.credit}</p>
      </div>
    </footer>
  );
}
