"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import ClipReveal from "@/components/ClipReveal";
import CraftTimeline from "@/components/CraftTimeline";

import TerroirImg from '../../../public/images/journal-terroir.png';
import CraftImg from '../../../public/images/journal-craft.png';
import AcademyImg from '../../../public/images/journal-academy.png';

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export default function Journal() {
  const { dict } = useLanguage();
  const content = dict.journal;

  // Hero Parallax
  const heroRef = useRef(null);
  const { scrollYProgress: heroScroll } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const heroY = useTransform(heroScroll, [0, 1], ["0%", "30%"]);

  return (
    <main className="bg-charcoal text-cream overflow-hidden">
      <Nav />
      
      {/* ─── Hero / Terroir Section ─── */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
          <Image 
            src={TerroirImg} 
            alt={content.terroir.title} 
            fill 
            placeholder="blur" 
            className="object-cover opacity-70" 
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/20 to-charcoal/60" />
        </motion.div>

        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="relative z-10 text-center px-6 mt-24"
        >
          <motion.p variants={fadeInUp} className="text-amber text-xs tracking-[0.4em] uppercase mb-6">
            {content.hero.tag}
          </motion.p>
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl font-light leading-tight mb-8 whitespace-pre-line">
            {content.hero.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-mountain text-lg max-w-xl mx-auto leading-relaxed">
            {content.hero.desc}
          </motion.p>
        </motion.div>
      </section>

      {/* ─── Terroir Details ─── */}
      <section className="py-24 lg:py-40 px-6 lg:px-12 max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          <div>
            <motion.h2 variants={fadeInUp} className="font-serif text-4xl lg:text-5xl font-light mb-6 text-cream">
              {content.terroir.title}
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-amber text-sm tracking-[0.2em] uppercase mb-10">
              {content.terroir.subtitle}
            </motion.p>
          </div>
          <div className="space-y-8 text-mountain text-lg leading-relaxed">
            <motion.p variants={fadeInUp}>{content.terroir.desc1}</motion.p>
            <motion.p variants={fadeInUp}>{content.terroir.desc2}</motion.p>
            
            <motion.div variants={fadeInUp} className="grid grid-cols-1 sm:grid-cols-3 gap-8 pt-8 border-t border-cream-dark/30 mt-12">
              {content.terroir.data.map((item: any, i: number) => (
                <div key={i}>
                  <p className="text-xs uppercase tracking-[0.2em] text-mountain/60 mb-2">{item.label}</p>
                  <p className="font-serif text-cream">{item.value}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ─── Horizontal Scroll Craft Timeline ─── */}
      <CraftTimeline />

      {/* ─── Craftsmanship: Sticky Scroll Storytelling ─── */}
      <section className="bg-cream text-charcoal relative">
        <div className="max-w-7xl mx-auto lg:grid lg:grid-cols-12">
          
          {/* 左侧图片：sticky 钉在屏幕上 */}
          <div className="lg:col-span-7 lg:sticky lg:top-0 lg:h-screen flex items-center overflow-hidden">
            <ClipReveal direction="left" className="w-full h-full">
              <div className="relative w-full h-[70vh] lg:h-screen">
                <Image
                  src={CraftImg}
                  alt={content.craft.title}
                  fill
                  placeholder="blur"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-cream/20 hidden lg:block" />
              </div>
            </ClipReveal>
          </div>

          {/* 右侧文字区：自由滚动 */}
          <div className="lg:col-span-5 px-6 lg:px-12 py-24 lg:py-48 flex flex-col justify-center">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.p variants={fadeInUp} className="text-amber text-sm tracking-[0.2em] uppercase mb-6">
                {content.craft.subtitle}
              </motion.p>
              <motion.h2 variants={fadeInUp} className="font-serif text-4xl lg:text-5xl font-light mb-12">
                {content.craft.title}
              </motion.h2>
              
              {/* 第一段 */}
              <motion.div variants={fadeInUp} className="mb-16">
                <div className="w-12 h-px bg-amber mb-8" />
                <p className="text-mountain-dark text-lg leading-relaxed">
                  {content.craft.desc1}
                </p>
              </motion.div>

              {/* 第二段 */}
              <motion.div variants={fadeInUp}>
                <div className="w-12 h-px bg-amber mb-8" />
                <p className="text-mountain-dark text-lg leading-relaxed">
                  {content.craft.desc2}
                </p>
              </motion.div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* ─── Academy Section ─── */}
      <section className="py-32 lg:py-48 px-6 lg:px-12 max-w-7xl mx-auto text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="max-w-3xl mx-auto">
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl lg:text-5xl font-light mb-6">
            {content.academy.title}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-amber text-sm tracking-[0.2em] uppercase mb-16">
            {content.academy.subtitle}
          </motion.p>
          
          <ClipReveal direction="left" className="relative aspect-[16/9] mb-16">
            <Image 
              src={AcademyImg}
              alt={content.academy.title}
              fill
              placeholder="blur"
              className="object-cover opacity-80"
            />
          </ClipReveal>

          <div className="space-y-8 text-mountain text-lg leading-relaxed mb-16 max-w-2xl mx-auto">
            <motion.p variants={fadeInUp}>{content.academy.desc1}</motion.p>
            <motion.p variants={fadeInUp}>{content.academy.desc2}</motion.p>
          </div>

          <motion.div variants={fadeInUp} className="inline-block px-12 py-8 border border-cream-dark/30 relative">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-charcoal px-4 text-amber font-serif text-4xl">"</span>
            <p className="font-serif text-2xl lg:text-3xl font-light text-cream italic">
              {content.academy.quote}
            </p>
          </motion.div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
