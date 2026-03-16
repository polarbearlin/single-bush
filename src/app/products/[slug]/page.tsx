import { teas } from "@/data/teas";
import ProductDetailClient from "./ProductDetailClient";

// 静态导出模式：预生成所有产品路由
export function generateStaticParams() {
  return teas.map((tea) => ({ slug: tea.slug }));
}

/**
 * 服务端页面组件：接收路由参数并传递给客户端交互组件。
 * 这种架构能同时满足 Next.js 静态导出和客户端交互需求。
 */
export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <ProductDetailClient slug={slug} />;
}
