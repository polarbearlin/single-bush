"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";

import YashiImg from '../../../public/images/yashi.png';
import MilanImg from '../../../public/images/milan.png';
import LaocongImg from '../../../public/images/laocong.png';

const teaImageMap: Record<string, any> = {
  'yashi': YashiImg,
  'milan': MilanImg,
  'laocong': LaocongImg,
};

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

function ProductCard({ tea, index, dict, imageSrc }: { tea: any, index: number, dict: any, imageSrc: any }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);

  return (
    <section key={tea.name} className={`px-6 lg:px-12 overflow-hidden items-start ${index > 0 ? "border-t border-cream-dark" : ""}`}>
      <motion.div 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="max-w-7xl mx-auto py-20 lg:py-32 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start"
      >
        {/* Left: visual */}
        <motion.div variants={fadeInUp} className="aspect-[4/5] bg-charcoal relative overflow-hidden group">
          <motion.div ref={ref} style={{ y: imageY, height: "130%" }} className="absolute inset-x-0 top-[-15%] z-0">
            <Image src={imageSrc} alt={tea.name} fill placeholder={typeof imageSrc === 'string' ? "empty" : "blur"} className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000" />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent pointer-events-none" />
          <div className="absolute bottom-10 left-0 right-0 text-center z-10 pointer-events-none">
            <p className="font-serif text-3xl text-cream">{tea.name}</p>
            <p className="text-amber text-xs tracking-[0.2em] uppercase mt-2">{tea.subtitle}</p>
          </div>
        </motion.div>

        {/* Right: info */}
        <motion.div variants={fadeInUp} className="lg:py-12">
          <div className="mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl text-charcoal font-light mb-6">
              &ldquo;{tea.tagline}&rdquo;
            </h2>
            <p className="text-mountain text-lg leading-relaxed">{tea.story}</p>
          </div>

          <div className="grid grid-cols-2 gap-8 mb-12">
            <div>
              <p className="text-amber text-xs tracking-[0.3em] uppercase mb-2">{dict.products.metaOrigin}</p>
              <p className="font-serif text-charcoal text-lg">{tea.origin}</p>
            </div>
            <div>
              <p className="text-amber text-xs tracking-[0.3em] uppercase mb-2">{dict.products.metaProcess}</p>
              <p className="font-serif text-charcoal text-lg">{tea.process}</p>
            </div>
          </div>

          <div className="space-y-8 mb-16">
            <div>
              <p className="text-amber text-xs tracking-[0.3em] uppercase mb-3">{dict.products.aromaProfile}</p>
              <div className="flex flex-wrap gap-2">
                {tea.aroma.map((note: string) => (
                  <span key={note} className="px-4 py-2 border border-cream-dark text-sm text-mountain">{note}</span>
                ))}
              </div>
            </div>
            <div>
              <p className="text-amber text-xs tracking-[0.3em] uppercase mb-3">{dict.products.tastingNotes}</p>
              <ul className="space-y-2">
                {tea.taste.map((note: string) => (
                  <li key={note} className="flex items-center text-mountain">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber/50 mr-3" />
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default function Products() {
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
          className="max-w-7xl mx-auto"
        >
          <motion.p variants={fadeInUp} className="text-amber text-xs tracking-[0.4em] uppercase mb-6">{dict.products.tag}</motion.p>
          <motion.h1 variants={fadeInUp} className="font-serif text-5xl md:text-7xl text-charcoal font-light leading-tight mb-6 whitespace-pre-line">
            {dict.products.title}
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-mountain text-lg max-w-xl leading-relaxed">
            {dict.products.desc}
          </motion.p>
        </motion.div>
      </section>

      {/* Tea Cards */}
      {dict.products.teas.map((tea: any, i: number) => {
        const imageSrc = teaImageMap[tea.id] || `/images/${tea.id}.png`;
        return <ProductCard key={tea.name} tea={tea} index={i} dict={dict} imageSrc={imageSrc} />;
      })}

      <Footer />
    </main>
  );
}
