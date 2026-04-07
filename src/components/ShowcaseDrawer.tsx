"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useShowcase } from "./ShowcaseContext";
import { useLanguage } from "./LanguageContext";
import { useEffect, useRef, useState } from "react";

const videos = [
  { id: 1, titleEn: "Shadows Fall", titleZh: "夜幕降临", descEn: "A cinematic AI exploration of the 1980s HK style.", descZh: "1980年代香港僵尸电影美学，邵氏电影调色呈现。", src: "/videos/cat-1.mp4" },
  { id: 2, titleEn: "Taoist Cat Priest", titleZh: "橘猫道长 · 激战不死谷", descEn: "A cinematic film generation.", descZh: "身穿黑色道袍的橘猫道长，阴阳八卦护符，极具电影感。", src: "/videos/showcase-1.mp4" },
  { id: 3, titleEn: "Battle Valley", titleZh: "林中秘境", descEn: "Martial arts horror masterclass.", descZh: "特写镜头，动作张力与胶片颗粒感的结合。", src: "/videos/cat-2.mp4" },
  { id: 4, titleEn: "The Talisman", titleZh: "阴阳八卦", descEn: "The artifact's glow against the darkness.", descZh: "帽面太极图，极高影片质量深度解析。", src: "/videos/cat-3.mp4" },
];

function VideoScrollItem({ video, isMuted, toggleMute, lang }: { video: any, isMuted: boolean, toggleMute: () => void, lang: 'en'|'zh' }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          videoRef.current?.play().catch(() => {});
        } else {
          videoRef.current?.pause();
        }
      });
    }, { threshold: 0.6 });

    if (containerRef.current) observer.observe(containerRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[100dvh] shrink-0 snap-start snap-always bg-zinc-950 flex items-center justify-center overflow-hidden">
      <video 
         ref={videoRef}
         src={video.src} 
         loop 
         muted={isMuted} 
         playsInline
         className="absolute inset-0 w-full h-full object-cover opacity-80"
      />
      <div className="absolute inset-0 opacity-80 pointer-events-none" style={{ background: "radial-gradient(circle at center, transparent 0%, #09090b 100%)"}} />
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none" />

      {/* Play/Sound Overlay Button */}
      <button 
        onClick={toggleMute}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 p-4 rounded-full bg-black/20 hover:bg-black/40 backdrop-blur-md border border-white/10 text-white transition-all shadow-xl"
      >
        {isMuted ? (
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <line x1="23" y1="9" x2="17" y2="15"></line>
             <line x1="17" y1="9" x2="23" y2="15"></line>
           </svg>
        ) : (
           <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
             <path d="M11 5L6 9H2v6h4l5 4V5z"></path>
             <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>
           </svg>
        )}
      </button>
      {isMuted && (
        <span className="absolute top-1/2 left-1/2 -translate-x-1/2 top-[58%] text-white/40 text-[10px] tracking-[0.2em] pointer-events-none">NO SOUND</span>
      )}

      {/* Bottom Title Area */}
      <div className="absolute bottom-16 md:bottom-24 left-8 md:left-16 right-8 md:right-16 z-20 pointer-events-none">
        <div className="flex gap-4 items-center mb-6">
           <div className="h-[1px] w-12 bg-amber" />
           <span className="text-amber text-xs tracking-[0.3em] uppercase drop-shadow-md">Scroll vertically</span>
        </div>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-cream font-light mb-6 tracking-wide drop-shadow-2xl">
          {lang === 'en' ? video.titleEn : video.titleZh}
        </h1>
        <p className="text-cream/60 text-lg md:text-xl max-w-2xl leading-relaxed drop-shadow-lg font-light">
          {lang === 'en' ? video.descEn : video.descZh}
        </p>
      </div>
    </div>
  );
}

export function ShowcaseDrawer() {
  const { isOpen, setIsOpen } = useShowcase();
  const { lang } = useLanguage();
  const [isMuted, setIsMuted] = useState(true);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
           initial={{ y: "100%", opacity: 0.5, scale: 0.95 }}
           animate={{ y: 0, opacity: 1, scale: 1 }}
           exit={{ y: "100%", opacity: 0, scale: 0.95 }}
           transition={{ type: "spring", stiffness: 70, damping: 20 }}
           className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col overflow-hidden"
        >
          {/* Header */}
          <div className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between p-8 md:px-16 bg-gradient-to-b from-black/80 to-transparent pointer-events-none">
            <div>
              <p className="text-amber/70 text-[10px] tracking-[0.4em] uppercase mb-1 drop-shadow-md">Cinematic Showcase</p>
              <h2 className="font-serif text-2xl tracking-wider text-cream drop-shadow-md">
                {lang === 'en' ? 'Featured Works' : '作品展映'}
              </h2>
            </div>
            <button
               onClick={() => { setIsOpen(false); setIsMuted(true); }}
               className="pointer-events-auto p-4 text-cream/70 hover:text-white transition-all rounded-full hover:bg-white/10 backdrop-blur-md border border-cream/10"
            >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                 <line x1="18" y1="6" x2="6" y2="18" />
                 <line x1="6" y1="6" x2="18" y2="18" />
               </svg>
            </button>
          </div>

          {/* Vertical Scroll Feed Area */}
          <div data-lenis-prevent className="flex-1 w-full h-[100dvh] overflow-y-auto snap-y snap-mandatory scroll-smooth no-scrollbar" style={{ scrollbarWidth: 'none' }}>
             {videos.map(video => (
               <VideoScrollItem 
                  key={video.id} 
                  video={video} 
                  isMuted={isMuted} 
                  toggleMute={() => setIsMuted(prev => !prev)} 
                  lang={lang} 
               />
             ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
