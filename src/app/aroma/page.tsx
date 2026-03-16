"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import AromaBgImg from '../../../public/images/aroma-bg.png';

// questions and results objects are now managed by dict.aroma

const fadeTransition = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.4, ease: "easeIn" as const } }
};

export default function Aroma() {
  const { dict } = useLanguage();
  const [step, setStep] = useState(0); // 0=intro, 1-5=questions, 6=result
  const [scores, setScores] = useState<Record<string, number>>({ yashi: 0, milan: 0, laocong: 0 });

  const handleSelect = (option: { scores: Record<string, number> }) => {
    setScores((prev) => {
      const next = { ...prev };
      for (const [key, val] of Object.entries(option.scores)) {
        next[key] = (next[key] || 0) + val;
      }
      return next;
    });
    setStep((s) => s + 1);
  };

  const getResult = () => {
    const max = Math.max(...Object.values(scores));
    const winner = Object.entries(scores).find(([, v]) => v === max)?.[0] || "milan";
    type ResultKeys = keyof typeof dict.aroma.results;
    return dict.aroma.results[winner as ResultKeys];
  };

  const reset = () => {
    setStep(0);
    setScores({ yashi: 0, milan: 0, laocong: 0 });
  };

  return (
    <main className="flex flex-col min-h-screen relative bg-cream">
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <Image src={AromaBgImg} alt="Tea Texture" fill placeholder="blur" className="object-cover opacity-[0.07] mix-blend-multiply" priority />
      </div>
      <Nav />
      <div className="pt-16" />

      <div className="flex-1 flex items-center justify-center px-6 py-20 relative z-10">
        <div className="max-w-2xl w-full text-center">
          <AnimatePresence mode="wait">
            
            {/* Intro */}
            {step === 0 && (
              <motion.div key="intro" {...fadeTransition}>
                <p className="text-amber text-xs tracking-[0.4em] uppercase mb-8">{dict.aroma.tag}</p>
                <h1 className="font-serif text-5xl md:text-6xl text-charcoal font-light leading-tight mb-6 whitespace-pre-line">
                  {dict.aroma.title}
                </h1>
                <p className="text-mountain text-lg leading-relaxed mb-12 max-w-lg mx-auto">
                  {dict.aroma.desc}
                </p>
                <button
                  onClick={() => setStep(1)}
                  className="inline-block px-12 py-5 border border-amber/40 text-charcoal text-sm tracking-[0.3em] uppercase hover:bg-amber/5 transition-all duration-500"
                >
                  {dict.aroma.beginBtn}
                </button>
              </motion.div>
            )}

            {/* Questions */}
            {step >= 1 && step <= 5 && (
              <motion.div key={`q-${step}`} {...fadeTransition}>
                <p className="text-mountain/50 text-xs tracking-[0.3em] uppercase mb-4">
                  {dict.aroma.qProgress.replace("{step}", step.toString())}
                </p>
                {/* Progress bar */}
                <div className="w-full h-px bg-cream-dark mb-12 relative overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 bottom-0 bg-amber"
                    initial={{ width: `${((step - 1) / 5) * 100}%` }}
                    animate={{ width: `${(step / 5) * 100}%` }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                  />
                </div>

                <h2 className="font-serif text-3xl md:text-4xl text-charcoal mb-12 leading-snug">
                  {dict.aroma.questions[step - 1].question}
                </h2>

                <div className="space-y-4">
                  {dict.aroma.questions[step - 1].options.map((opt: any, i: number) => (
                    <motion.button
                      key={opt.value}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.15 + 0.3, duration: 0.5 }}
                      onClick={() => handleSelect(opt)}
                      className="block w-full text-left px-8 py-6 border border-cream-dark text-charcoal text-base hover:border-amber/40 hover:bg-cream-dark/30 transition-all duration-300"
                    >
                      {opt.label}
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Result */}
            {step === 6 && (
              <motion.div key="result" {...fadeTransition}>
                {(() => {
                  const result = getResult();
                  return (
                    <div>
                      <p className="text-amber text-xs tracking-[0.4em] uppercase mb-6">{dict.aroma.resultTag}</p>
                      <h1 className="font-serif text-6xl md:text-7xl text-charcoal font-light mb-2">{result.name}</h1>
                      <p className="text-amber text-sm tracking-[0.2em] uppercase mb-10">{result.subtitle}</p>

                      <div className="flex justify-center gap-3 mb-10">
                        {result.traits.map((t: string) => (
                          <span key={t} className="px-5 py-2 border border-cream-dark text-sm text-charcoal">{t}</span>
                        ))}
                      </div>

                      <p className="text-mountain text-lg leading-relaxed max-w-lg mx-auto mb-12">{result.desc}</p>

                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                          href="/products"
                          className="inline-block px-10 py-4 border border-amber/40 text-charcoal text-sm tracking-[0.3em] uppercase hover:bg-amber/5 transition-all duration-500"
                        >
                          {dict.aroma.exploreBtn} {result.name}
                        </Link>
                        <button
                          onClick={reset}
                          className="inline-block px-10 py-4 text-mountain text-sm tracking-[0.3em] uppercase hover:text-charcoal transition-colors"
                        >
                          {dict.aroma.retakeBtn}
                        </button>
                      </div>
                    </div>
                  );
                })()}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      <Footer />
    </main>
  );
}
