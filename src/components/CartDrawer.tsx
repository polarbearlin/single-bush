"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useCart } from "./CartContext";
import { useLanguage } from "./LanguageContext";

/**
 * 购物车侧栏抽屉：从右侧滑出，体现品牌的极简奢华感。
 * 展示购物车内容、数量调整、总价和结账入口。
 */
export function CartDrawer() {
  const { items, isOpen, setIsOpen, removeItem, updateQuantity, totalPrice, clearCart } = useCart();
  const { dict } = useLanguage();
  const cart = dict.cart;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* 背景遮罩 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] bg-charcoal/60 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />

          {/* 抽屉面板 */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", ease: [0.32, 0.72, 0, 1], duration: 0.5 }}
            className="fixed top-0 right-0 bottom-0 z-[70] w-full max-w-md bg-parchment shadow-2xl flex flex-col"
          >
            {/* 头部 */}
            <div className="flex items-center justify-between px-8 py-6 border-b border-cream-dark/50">
              <h2 className="font-serif text-2xl text-charcoal">{cart.title}</h2>
              <button
                onClick={() => setIsOpen(false)}
                className="text-mountain hover:text-charcoal transition-colors p-1"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            {/* 商品列表 */}
            <div className="flex-1 overflow-y-auto px-8 py-6">
              {items.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-center">
                  <div className="w-20 h-20 rounded-full bg-cream-dark/40 flex items-center justify-center mb-6">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" className="text-mountain/40">
                      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
                      <line x1="3" y1="6" x2="21" y2="6" />
                      <path d="M16 10a4 4 0 0 1-8 0" />
                    </svg>
                  </div>
                  <p className="text-mountain font-serif text-lg mb-2">{cart.empty}</p>
                  <p className="text-mountain/60 text-sm">{cart.emptyHint}</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.slug} className="flex gap-5 pb-6 border-b border-cream-dark/30">
                      {/* 商品色块（替代缩略图） */}
                      <div className="w-20 h-20 bg-charcoal/10 flex-shrink-0 flex items-center justify-center">
                        <span className="font-serif text-charcoal/40 text-xs tracking-wider">
                          {item.name.split(" ").map(w => w[0]).join("")}
                        </span>
                      </div>

                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-serif text-charcoal text-base">{item.name}</p>
                            <p className="text-mountain/60 text-xs mt-0.5">{item.weight}</p>
                          </div>
                          <button
                            onClick={() => removeItem(item.slug)}
                            className="text-mountain/40 hover:text-charcoal transition-colors p-1 -mr-1"
                          >
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                              <line x1="18" y1="6" x2="6" y2="18" />
                              <line x1="6" y1="6" x2="18" y2="18" />
                            </svg>
                          </button>
                        </div>

                        <div className="flex items-center justify-between mt-3">
                          {/* 数量控制 */}
                          <div className="flex items-center border border-cream-dark/50">
                            <button
                              onClick={() => updateQuantity(item.slug, item.quantity - 1)}
                              className="w-8 h-8 flex items-center justify-center text-mountain hover:text-charcoal transition-colors text-sm"
                            >
                              −
                            </button>
                            <span className="w-8 h-8 flex items-center justify-center text-charcoal text-sm border-x border-cream-dark/50">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.slug, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-mountain hover:text-charcoal transition-colors text-sm"
                            >
                              +
                            </button>
                          </div>
                          <p className="font-serif text-charcoal">¥{item.price * item.quantity}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* 底部结算区 */}
            {items.length > 0 && (
              <div className="border-t border-cream-dark/50 px-8 py-6 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-mountain text-sm uppercase tracking-[0.2em]">{cart.total}</span>
                  <span className="font-serif text-2xl text-charcoal">¥{totalPrice}</span>
                </div>
                <button
                  className="w-full py-4 bg-charcoal text-cream text-sm tracking-[0.3em] uppercase hover:bg-charcoal-light transition-colors duration-300"
                >
                  {cart.checkout}
                </button>
                <button
                  onClick={clearCart}
                  className="w-full text-center text-mountain/60 text-xs tracking-[0.2em] uppercase hover:text-charcoal transition-colors py-2"
                >
                  {cart.clear}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
