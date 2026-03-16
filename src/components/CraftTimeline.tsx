"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./LanguageContext";

/**
 * 竖向滚动制茶工序时间轴 (Vertical Layout)
 *
 * 抛弃横向 scroll-jacking，改为优雅的纵向排列。
 * 核心设计：
 * - 左侧内容（标题等）在桌面端 sticky 固定
 * - 右侧为一个连贯的竖向时间轴线，8道工序依次垂直排列
 * - 每道工序都有一个圆圈连接到垂直主线上
 * - 滚动时带有渐隐渐现和位移动画 (whileInView)
 */
export default function CraftTimeline() {
  const { dict } = useLanguage();
  const t = dict.journal.timeline;
  const stepCount = t.steps.length;

  return (
    <section className="relative bg-charcoal py-24 lg:py-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 flex flex-col lg:flex-row gap-16 lg:gap-24 relative">
        
        {/* 左侧：章节标题 (桌面端 Sticky) */}
        <div className="lg:w-1/3 lg:sticky lg:top-40 lg:h-max">
          <p className="text-amber/60 text-xs tracking-[0.4em] uppercase mb-4">{t.tag}</p>
          <h2 className="font-serif text-3xl lg:text-5xl text-cream font-light whitespace-pre-line leading-tight">
            {t.title}
          </h2>
          <div className="mt-12 w-12 h-px bg-amber/30 hidden lg:block" />
        </div>

        {/* 右侧：纵向工序列表 */}
        <div className="lg:w-2/3 relative">
          {/* 装饰性垂直细线（贯穿所有步骤） */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-amber/0 via-amber/20 to-amber/0" />

          <div className="flex flex-col gap-24 lg:gap-32">
            {t.steps.map((step: any, i: number) => (
              <StepItem key={i} step={step} index={i} isLast={i === stepCount - 1} />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

/** 单个步骤卡片，带有进入视窗的触发动画 */
function StepItem({ step, index, isLast }: { step: any; index: number; isLast: boolean }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-15% 0px" }}
      transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
      className="relative flex items-start gap-8 lg:gap-12"
    >
      {/* 左侧：时间轴圆圈连接点 */}
      <div className="relative pt-2">
        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-15% 0px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          className="w-12 h-12 bg-charcoal rounded-full border border-amber/40 flex items-center justify-center relative z-10"
        >
          <span className="text-amber font-serif text-lg">{String(index + 1).padStart(2, "0")}</span>
        </motion.div>
      </div>

      {/* 右侧：步骤内容 */}
      <div className="flex-1 max-w-xl pb-16 border-b border-cream/5 last:border-b-0">
        {/* 中文副标 */}
        <p className="font-serif text-amber text-xl mb-3 tracking-widest">{step.zhName}</p>
        
        {/* 英文/主标题 */}
        <h3 className="font-serif text-3xl lg:text-4xl text-cream font-light mb-6">
          {step.title}
        </h3>
        
        {/* 段落描述 */}
        <p className="text-mountain-light leading-relaxed text-base">
          {step.desc}
        </p>

        {/* 细节标签（如时间、海拔） */}
        {step.detail && (
          <p className="text-amber/40 text-xs tracking-[0.2em] uppercase mt-8 inline-block border border-amber/10 px-3 py-1.5 rounded-sm">
            {step.detail}
          </p>
        )}
      </div>
    </motion.div>
  );
}
