"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

type ClipRevealDirection = "left" | "right" | "up" | "down";

interface ClipRevealProps {
  children: React.ReactNode;
  direction?: ClipRevealDirection;
  /** 动画时长（秒） */
  duration?: number;
  /** 延迟（秒） */
  delay?: number;
  className?: string;
}

/**
 * 高级揭示动画组件：利用 CSS clip-path 实现"拉幕"效果。
 * 比普通 opacity 淡入更具戏剧感和仪式感，常见于 Gucci、Dior 等顶级品牌官网。
 */
export default function ClipReveal({
  children,
  direction = "up",
  duration = 1.2,
  delay = 0,
  className = "",
}: ClipRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  // 根据方向计算初始的 clip-path inset 值
  // inset(top right bottom left)
  const clipPathMap: Record<ClipRevealDirection, string> = {
    up: "inset(100% 0 0 0)",     // 从底部向上揭示
    down: "inset(0 0 100% 0)",   // 从顶部向下揭示
    left: "inset(0 100% 0 0)",   // 从左侧向右揭示
    right: "inset(0 0 0 100%)",  // 从右侧向左揭示
  };

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="w-full h-full"
        initial={{ clipPath: clipPathMap[direction], opacity: 0.3 }}
        animate={
          isInView
            ? { clipPath: "inset(0 0 0 0)", opacity: 1 }
            : { clipPath: clipPathMap[direction], opacity: 0.3 }
        }
        transition={{
          duration,
          delay,
          ease: [0.25, 0.46, 0.45, 0.94], // 优雅的 cubic-bezier 缓动
        }}
      >
        {children}
      </motion.div>
    </div>
  );
}
