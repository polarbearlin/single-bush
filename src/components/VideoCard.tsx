"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";

export function VideoCard({ title, desc, src }: { title: string, desc: string, src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div 
      className="relative w-full aspect-[4/5] bg-charcoal/40 overflow-hidden cursor-pointer group rounded-sm"
      onMouseEnter={() => {
        setIsHovered(true);
        if (videoRef.current && src) {
          videoRef.current.play().catch(() => {});
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        if (videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      {/* Video Element (Muted, looping) */}
      {src ? (
        <video 
          ref={videoRef}
          src={src} 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
        />
      ) : (
        <div className="w-full h-full bg-zinc-800/50 flex flex-col items-center justify-center opacity-70 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-mountain-light/30">
              <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
              <line x1="7" y1="2" x2="7" y2="22" />
              <line x1="17" y1="2" x2="17" y2="22" />
              <line x1="2" y1="12" x2="22" y2="12" />
              <line x1="2" y1="7" x2="7" y2="7" />
              <line x1="2" y1="17" x2="7" y2="17" />
              <line x1="17" y1="17" x2="22" y2="17" />
              <line x1="17" y1="7" x2="22" y2="7" />
            </svg>
        </div>
      )}
      
      {/* Glassmorphism gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />

      {/* Content */}
      <div className="absolute bottom-6 left-6 right-6">
        <motion.h3 
          className="font-serif text-2xl text-cream mb-2"
          animate={{ y: isHovered ? -4 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {title}
        </motion.h3>
        <motion.p 
          className="text-mountain-light text-sm"
          animate={{ opacity: isHovered ? 1 : 0.7, y: isHovered ? -2 : 0 }}
        >
          {desc}
        </motion.p>
      </div>

      {/* Play Icon Hint (visible before hover) */}
      <motion.div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none"
        animate={{ opacity: isHovered ? 0 : 1, scale: isHovered ? 1.1 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <div className="w-12 h-12 rounded-full border border-cream/20 flex items-center justify-center bg-charcoal/20 backdrop-blur-sm">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" stroke="none" className="text-cream translate-x-[1px]">
            <path d="M5 3l14 9-14 9V3z" />
          </svg>
        </div>
      </motion.div>
    </motion.div>
  );
}
