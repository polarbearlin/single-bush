import type { Metadata } from "next";
import { LanguageProvider } from "@/components/LanguageContext";
import { CartProvider } from "@/components/CartContext";
import { CartDrawer } from "@/components/CartDrawer";
import { ShowcaseProvider } from "@/components/ShowcaseContext";
import { ShowcaseDrawer } from "@/components/ShowcaseDrawer";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";
import "./globals.css";

export const metadata: Metadata = {
  title: "Single Bush — Phoenix Dancong Tea",
  description: "The perfume you can drink. Single-origin Phoenix Dancong oolong from Wudong Mountain, Chaozhou.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=Noto+Sans+SC:wght@300;400;500&family=Noto+Serif+SC:wght@300;400;500;600&display=swap" rel="stylesheet" />
      </head>
      <body className={`antialiased font-sans`} suppressHydrationWarning>
        <CustomCursor />
        <LanguageProvider>
          <ShowcaseProvider>
            <CartProvider>
              <CartDrawer />
              <ShowcaseDrawer />
              <SmoothScroll>
                {children}
              </SmoothScroll>
            </CartProvider>
          </ShowcaseProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}
