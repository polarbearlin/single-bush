"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/components/LanguageContext";
import { useCart } from "@/components/CartContext";
import ClipReveal from "@/components/ClipReveal";
import { teas } from "@/data/teas";

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" as const } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } },
};

// slug → 字典中的 tea id 映射
const SLUG_TO_ID: Record<string, string> = {
  "ya-shi-xiang": "yashi",
  "mi-lan-xiang": "milan",
  "lao-cong": "laocong",
};

/**
 * 产品详情页客户端组件：全屏 ClipReveal 大图 + 故事 + 参数 + 购买 CTA。
 */
export default function ProductDetailClient({ slug }: { slug: string }) {
  const { dict } = useLanguage();
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const tea = teas.find((t) => t.slug === slug);
  const teaId = SLUG_TO_ID[slug];
  const localizedTea = dict.products.teas.find((t: any) => t.id === teaId);
  const otherTeas = teas.filter((t) => t.slug !== slug);

  if (!tea) return null;

  const displayTea = localizedTea || tea;
  const pd = dict.productDetail;

  const handleAddToCart = () => {
    addItem({
      slug: tea.slug,
      name: tea.name,
      price: tea.price,
      weight: tea.weight,
    });
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 2000);
  };

  return (
    <main>
      <Nav />

      {/* ─── Hero Image ─── */}
      <section className="relative h-[70vh] lg:h-[80vh] overflow-hidden bg-charcoal">
        <ClipReveal direction="up" duration={1.4} className="w-full h-full">
          <div className="relative w-full h-full">
            <Image
              src={tea.image}
              alt={tea.name}
              fill
              placeholder="blur"
              className="object-cover opacity-70"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent" />
          </div>
        </ClipReveal>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="absolute bottom-16 left-0 right-0 z-10 text-center"
        >
          <p className="text-amber text-xs tracking-[0.4em] uppercase mb-4">
            {displayTea.tagline}
          </p>
          <h1 className="font-serif text-5xl md:text-7xl text-cream font-light">
            {tea.name}
          </h1>
          <p className="text-mountain-light text-sm mt-3">{displayTea.subtitle}</p>
        </motion.div>
      </section>

      {/* ─── Product Info ─── */}
      <section className="py-20 lg:py-32 px-6 lg:px-12 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto grid lg:grid-cols-5 gap-16 lg:gap-24"
        >
          {/* Left: story + metadata */}
          <div className="lg:col-span-3">
            <motion.p variants={fadeInUp} className="text-mountain text-lg leading-relaxed mb-8">
              {displayTea.story}
            </motion.p>

            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-8 py-8 border-t border-b border-cream-dark/50">
              <div>
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-2">{dict.products.metaOrigin}</p>
                <p className="font-serif text-charcoal text-lg">{displayTea.origin}</p>
              </div>
              <div>
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-2">{dict.products.metaProcess}</p>
                <p className="font-serif text-charcoal text-lg">{displayTea.process}</p>
              </div>
              <div>
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-2">{dict.products.metaInfusions}</p>
                <p className="font-serif text-charcoal text-lg">{displayTea.steep}</p>
              </div>
              <div>
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-2">{dict.products.recommended || "Temperature"}</p>
                <p className="font-serif text-charcoal text-lg">{displayTea.temp}</p>
              </div>
            </motion.div>

            <motion.div variants={fadeInUp} className="mt-10 space-y-8">
              <div>
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-4">{dict.products.aromaProfile}</p>
                <div className="flex flex-wrap gap-2">
                  {displayTea.aroma.map((note: string) => (
                    <span key={note} className="px-5 py-2.5 border border-cream-dark text-sm text-mountain hover:border-amber/50 hover:text-charcoal transition-colors duration-300">
                      {note}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-4">{dict.products.tastingNotes}</p>
                <ul className="space-y-3">
                  {displayTea.taste.map((note: string) => (
                    <li key={note} className="flex items-center text-mountain">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber/50 mr-3 flex-shrink-0" />
                      {note}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Right: pricing & CTA (sticky) */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="lg:sticky lg:top-24 space-y-8">
              <div className="border-b border-cream-dark/50 pb-8">
                <p className="text-amber text-xs tracking-[0.3em] uppercase mb-3">{pd.priceLabel}</p>
                <p className="font-serif text-5xl text-charcoal">¥{tea.price}</p>
                <p className="text-mountain/60 text-sm mt-2">{pd.weightLabel}: {tea.weight}</p>
              </div>

              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.97 }}
                className={`w-full py-5 text-sm tracking-[0.3em] uppercase transition-all duration-500 ${
                  justAdded
                    ? "bg-amber text-white"
                    : "bg-charcoal text-cream hover:bg-charcoal-light"
                }`}
              >
                {justAdded ? pd.added : pd.addToCart}
              </motion.button>

              <Link
                href="/products"
                className="block text-center text-mountain/60 text-xs tracking-[0.2em] uppercase hover:text-charcoal transition-colors py-2"
              >
                ← {dict.nav.products}
              </Link>
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* ─── You May Also Like ─── */}
      <section className="py-20 lg:py-32 bg-cream-dark/30 px-6 lg:px-12 overflow-hidden">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="max-w-6xl mx-auto"
        >
          <motion.h2 variants={fadeInUp} className="font-serif text-3xl text-charcoal mb-12 text-center">
            {pd.alsoLike}
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {otherTeas.map((other) => {
              const otherId = SLUG_TO_ID[other.slug];
              const otherLocalized = dict.products.teas.find((t: any) => t.id === otherId);
              const otherDisplay = otherLocalized || other;
              return (
                <motion.div variants={fadeInUp} key={other.slug}>
                  <Link href={`/products/${other.slug}`} className="group block">
                    <div className="aspect-[3/2] bg-charcoal relative overflow-hidden mb-4">
                      <Image
                        src={other.image}
                        alt={other.name}
                        fill
                        placeholder="blur"
                        className="object-cover opacity-80 group-hover:scale-105 transition-transform duration-1000"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 to-transparent" />
                      <div className="absolute bottom-6 left-6 z-10">
                        <p className="text-xs tracking-[0.2em] uppercase text-amber mb-1">{otherDisplay.tagline}</p>
                        <p className="font-serif text-2xl text-cream">{other.name}</p>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <p className="text-mountain text-sm">{otherDisplay.subtitle}</p>
                      <p className="font-serif text-charcoal">¥{other.price}</p>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </section>

      <Footer />
    </main>
  );
}
