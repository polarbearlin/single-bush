"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useLanguage } from "@/components/LanguageContext";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { teas } from "@/data/teas";
import HeroImg from "../../public/images/hero.png";
import WudongImg from "../../public/images/journal-terroir.png";
import ClipReveal from "@/components/ClipReveal";

const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

/* ─── Hero Section ─── */
function Hero({ dict, heroY }: { dict: any, heroY: any }) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-charcoal overflow-hidden pt-16">
      <motion.div style={{ y: heroY }} className="absolute inset-0 z-0">
        <Image src={HeroImg} alt="Wudong Mountain Mist" fill placeholder="blur" className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-charcoal/40 via-transparent to-charcoal" />
      </motion.div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-amber/5 rounded-full blur-3xl" />
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 text-center px-6 max-w-4xl"
      >
        <motion.p variants={fadeInUp} className="text-amber-light/70 text-sm tracking-[0.4em] uppercase mb-8">
          {dict.home.heroSubtitle}
        </motion.p>
        <motion.h1 variants={fadeInUp} className="font-serif text-6xl md:text-8xl lg:text-9xl text-cream font-light leading-[0.9] mb-8 whitespace-pre-line">
          {dict.home.heroTitle}
        </motion.h1>
        <motion.p variants={fadeInUp} className="text-mountain-light text-lg md:text-xl max-w-xl mx-auto leading-relaxed mb-12 font-light">
          {dict.home.heroDesc}
        </motion.p>
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/aroma"
            className="inline-block px-10 py-4 border border-amber/40 text-amber-light text-sm tracking-[0.3em] uppercase hover:bg-amber/10 transition-all duration-500"
          >
            {dict.home.btnAroma}
          </Link>
          <Link
            href="/products"
            className="inline-block px-10 py-4 text-mountain-light text-sm tracking-[0.3em] uppercase hover:text-cream transition-colors duration-500"
          >
            {dict.home.btnExplore}
          </Link>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-mountain/50 text-xs tracking-[0.3em] uppercase">{dict.home.scroll}</span>
        <div className="w-px h-12 bg-gradient-to-b from-mountain/30 to-transparent" />
      </motion.div>
    </section>
  );
}

/* ─── Philosophy Section ─── */
function Philosophy({ dict }: { dict: any }) {
  return (
    <section className="py-32 lg:py-40 px-6 lg:px-12 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24 items-center"
      >
        <div>
          <motion.p variants={fadeInUp} className="text-amber text-xs tracking-[0.4em] uppercase mb-6">{dict.home.philTag}</motion.p>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight mb-8 whitespace-pre-line">
            {dict.home.philTitle}
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-mountain text-lg leading-relaxed mb-6">
            {dict.home.philDesc1}
          </motion.p>
          <motion.p variants={fadeInUp} className="text-mountain text-lg leading-relaxed">
            {dict.home.philDesc2}
          </motion.p>
        </div>
        <ClipReveal direction="right" className="relative aspect-[4/5]">
          <div className="relative w-full h-full">
            <Image src={WudongImg} alt="Wudong Mountain" fill placeholder="blur" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal/60 via-transparent to-charcoal/20" />
            <div className="absolute bottom-8 left-8 right-8 text-left">
              <p className="text-cream/80 text-sm tracking-[0.3em] uppercase">{dict.home.wudong}</p>
              <p className="text-cream/50 text-xs mt-2">{dict.home.originTag}</p>
            </div>
          </div>
        </ClipReveal>
      </motion.div>
    </section>
  );
}

/* ─── The Perfume Concept ─── */
function PerfumeConcept({ dict }: { dict: any }) {
  const notes = dict.home.notes;

  return (
    <section className="py-32 lg:py-40 bg-cream-dark/50 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="text-center mb-20">
          <motion.p variants={fadeInUp} className="text-amber text-xs tracking-[0.4em] uppercase mb-6">{dict.home.conceptTag}</motion.p>
          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-charcoal leading-tight whitespace-pre-line">
            {dict.home.conceptTitle}
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
          {notes.map((note: any) => (
            <motion.div variants={fadeInUp} key={note.label} className="text-center group">
              <div className="w-16 h-16 mx-auto mb-8 rounded-full border border-amber/30 flex items-center justify-center group-hover:bg-amber/5 transition-all duration-500">
                <div className="w-2 h-2 rounded-full bg-amber" />
              </div>
              <p className="text-xs tracking-[0.3em] uppercase text-amber mb-4">{note.time}</p>
              <h3 className="font-serif text-2xl text-charcoal mb-4">{note.label}</h3>
              <p className="text-mountain leading-relaxed">{note.desc}</p>
            </motion.div>
          ))}
        </div>

        <motion.div variants={fadeInUp} className="text-center mt-20">
          <p className="text-mountain text-base max-w-2xl mx-auto leading-relaxed italic font-serif">
            {dict.home.conceptQuote}
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Featured Teas Preview ─── */
function FeaturedPreview({ dict }: { dict: any }) {
  return (
    <section className="py-32 lg:py-40 overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto px-6 lg:px-12"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <motion.div variants={fadeInUp}>
            <p className="text-amber text-xs tracking-[0.4em] uppercase mb-6">{dict.home.colTag}</p>
            <h2 className="font-serif text-4xl md:text-5xl text-charcoal leading-tight whitespace-pre-line">
              {dict.home.colTitle}
            </h2>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <Link href="/products" className="text-sm tracking-[0.2em] uppercase text-mountain hover:text-charcoal transition-colors mt-6 md:mt-0 inline-block">
              {dict.home.viewAll}
            </Link>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teas.map((tea, index) => (
            <motion.div variants={fadeInUp} key={tea.name}>
              <Link href="/products" className="group block h-full">
                <ClipReveal direction="up" delay={index * 0.15}>
                  <div className={`aspect-[3/4] bg-charcoal mb-6 flex items-end p-8 overflow-hidden relative`}>
                    {tea.image && <Image src={tea.image} alt={tea.name} fill placeholder="blur" className="object-cover z-0 opacity-80 group-hover:scale-105 transition-transform duration-1000" />}
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 to-transparent z-0" />
                    <div className="absolute inset-0 bg-parchment/0 group-hover:bg-cream-dark/10 transition-all duration-700 z-10" />
                    <div className="relative z-10 w-full transition-transform duration-700 group-hover:-translate-y-2">
                      <p className="text-xs tracking-[0.3em] uppercase text-amber mb-2">{tea.tagline}</p>
                      <h3 className="font-serif text-3xl text-cream">{tea.name}</h3>
                      <p className="text-mountain-light text-sm mt-1">{tea.subtitle}</p>
                    </div>
                  </div>
                </ClipReveal>
                <p className="text-mountain text-sm leading-relaxed group-hover:text-charcoal transition-colors duration-300">
                  {tea.desc}
                </p>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─── CTA / Aroma Quiz ─── */
function AromaCTA({ dict }: { dict: any }) {
  return (
    <section className="py-32 lg:py-40 bg-charcoal text-center overflow-hidden">
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-3xl mx-auto px-6"
      >
        <motion.p variants={fadeInUp} className="text-amber-light/60 text-xs tracking-[0.4em] uppercase mb-8">{dict.home.discoverTag}</motion.p>
        <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight mb-8 whitespace-pre-line">
          {dict.home.discoverTitle}
        </motion.h2>
        <motion.p variants={fadeInUp} className="text-mountain-light text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          {dict.home.discoverDesc}
        </motion.p>
        <motion.div variants={fadeInUp}>
          <Link
            href="/aroma"
            className="inline-block px-12 py-5 border border-amber/40 text-amber-light text-sm tracking-[0.3em] uppercase hover:bg-amber/10 transition-all duration-500"
          >
            {dict.home.btnAroma}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Limited Release ─── */
function LimitedRelease({ dict }: { dict: any }) {
  const laoCong = teas.find((t) => t.slug === "lao-cong");
  return (
    <section className="relative py-32 lg:py-40 bg-charcoal overflow-hidden">
      {/* 背景图：老丛大图，极低透明度营造氛围 */}
      {laoCong && (
        <div className="absolute inset-0">
          <Image src={laoCong.image} alt="" fill className="object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-r from-charcoal via-charcoal/90 to-charcoal/70" />
        </div>
      )}

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="relative z-10 max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center"
      >
        {/* Left: text */}
        <div>
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-3 mb-8">
            <span className="w-2 h-2 rounded-full bg-amber animate-pulse" />
            <span className="text-amber text-xs tracking-[0.4em] uppercase">{dict.home.limitedTag}</span>
          </motion.div>

          <motion.h2 variants={fadeInUp} className="font-serif text-4xl md:text-5xl lg:text-6xl text-cream font-light leading-tight mb-8 whitespace-pre-line">
            {dict.home.limitedTitle}
          </motion.h2>

          <motion.p variants={fadeInUp} className="text-mountain-light text-lg leading-relaxed mb-8 max-w-lg">
            {dict.home.limitedDesc}
          </motion.p>

          <motion.p variants={fadeInUp} className="text-amber/50 text-xs tracking-[0.2em] uppercase mb-10">
            {dict.home.limitedScarcity}
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-start gap-4">
            <Link
              href="/products/lao-cong"
              className="inline-block px-10 py-4 bg-amber text-charcoal text-sm tracking-[0.3em] uppercase hover:bg-amber-light transition-colors duration-300"
            >
              {dict.home.limitedCta}
            </Link>
            <span className="text-mountain-light/50 text-xs tracking-wider self-center">{dict.home.limitedNote}</span>
          </motion.div>
        </div>

        {/* Right: decorative info card */}
        <motion.div variants={fadeInUp} className="hidden lg:block">
          <div className="border border-cream/10 p-12 space-y-8">
            <div className="flex items-baseline justify-between border-b border-cream/10 pb-6">
              <span className="text-cream/40 text-xs tracking-[0.3em] uppercase">Lao Cong</span>
              <span className="font-serif text-3xl text-cream">¥588</span>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div>
                <p className="text-amber/40 text-xs tracking-[0.2em] uppercase mb-1">Altitude</p>
                <p className="text-cream/80 font-serif">1,200m</p>
              </div>
              <div>
                <p className="text-amber/40 text-xs tracking-[0.2em] uppercase mb-1">Tree Age</p>
                <p className="text-cream/80 font-serif">100+ years</p>
              </div>
              <div>
                <p className="text-amber/40 text-xs tracking-[0.2em] uppercase mb-1">Yield</p>
                <p className="text-cream/80 font-serif">&lt; 5kg/year</p>
              </div>
              <div>
                <p className="text-amber/40 text-xs tracking-[0.2em] uppercase mb-1">Infusions</p>
                <p className="text-cream/80 font-serif">12-15</p>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

/* ─── Page ─── */
export default function Home() {
  const { dict } = useLanguage();
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 1000], ["0%", "20%"]);

  return (
    <main>
      <Nav />
      <Hero dict={dict} heroY={heroY} />
      <Philosophy dict={dict} />
      <PerfumeConcept dict={dict} />
      <FeaturedPreview dict={dict} />
      <LimitedRelease dict={dict} />
      <AromaCTA dict={dict} />
      <Footer />
    </main>
  );
}

