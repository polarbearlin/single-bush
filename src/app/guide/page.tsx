"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import GuideHeroImg from '../../../public/images/guide-hero.png';

// the steps object is now managed by dict.guide.steps

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function Guide() {
  const { dict } = useLanguage();
  return (
    <main>
      <Nav />
      <div className="pt-16" />

      {/* Header */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center"
        >
          <div>
            <motion.p variants={fadeInUp} className="text-amber text-xs tracking-[0.4em] uppercase mb-6">{dict.guide.tag}</motion.p>
            <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-charcoal font-light leading-tight mb-6 whitespace-pre-line">
              {dict.guide.title}
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-mountain text-lg max-w-xl leading-relaxed">
              {dict.guide.desc}
            </motion.p>
          </div>
          <motion.div variants={fadeInUp} className="relative aspect-[4/3] bg-charcoal w-full group overflow-hidden">
            <Image src={GuideHeroImg} alt="Gaiwan Pouring Tea" fill placeholder="blur" className="object-cover opacity-90 group-hover:scale-105 transition-transform duration-1000" priority />
            <div className="absolute inset-0 border border-cream/20 m-4 z-10 pointer-events-none" />
          </motion.div>
        </motion.div>
      </section>

      {/* Steps */}
      <section className="px-6 lg:px-12 pb-32 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          {dict.guide.steps.map((step: any, i: number) => (
            <motion.div 
              key={step.num}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
              className={`${i > 0 ? "border-t border-cream-dark" : ""}`}
            >
              <div className="py-16 lg:py-20 grid lg:grid-cols-[80px_1fr] gap-8">
                <div className="flex lg:items-start gap-4 lg:gap-0">
                  <motion.span variants={fadeInUp} className="font-serif text-5xl text-amber/30">{step.num}</motion.span>
                </div>
                <div className="overflow-hidden">
                  <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl text-charcoal mb-6">{step.title}</motion.h2>
                  <motion.p variants={fadeInUp} className="text-mountain text-lg leading-relaxed mb-6">{step.desc}</motion.p>
                  <motion.p variants={fadeInUp} className="text-mountain/60 text-sm italic font-serif">{step.detail}</motion.p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Parameters reference */}
      <section className="bg-cream-dark/50 py-20 lg:py-28 overflow-hidden">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="max-w-4xl mx-auto px-6 lg:px-12"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl md:text-4xl text-charcoal mb-12 text-center">{dict.guide.refTitle}</motion.h2>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            {dict.guide.refItems.map((item: any) => (
              <motion.div variants={fadeInUp} key={item.label}>
                <p className="font-serif text-4xl text-charcoal mb-2">{item.value}</p>
                <p className="text-xs tracking-[0.2em] uppercase text-mountain">{item.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
