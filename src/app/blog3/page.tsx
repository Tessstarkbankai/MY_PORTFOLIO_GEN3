"use client";
import { useRouter } from "next/navigation";
export default function Blog() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#0b1120] flex items-center justify-center px-6 py-20">
      
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
        <div onClick={()=>router.push("/#blog")} className=" mb-5"> <span className="ml-2 hover:cursor-pointer">→</span></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-8">
          Why I Chose Next.js for My E-Commerce Project:
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
          When building an e-commerce platform, performance, scalability, and user experience are not optional — they directly influence revenue. I chose Next.js because it provides a production-grade framework that balances developer efficiency with enterprise-level performance optimization.

One of the primary reasons was server-side rendering (SSR) and static site generation (SSG). In e-commerce, page speed and SEO significantly impact product visibility and conversions. With Next.js, I can pre-render product pages for faster load times while still supporting dynamic data when needed. This hybrid rendering model ensures both discoverability and performance — two critical growth drivers for online stores.

Next.js also offers built-in routing, API routes, and optimized image handling, reducing the need for heavy third-party dependencies. Features like automatic code splitting and image optimization improve Core Web Vitals, which directly affects search rankings and customer retention. For an e-commerce platform handling multiple products, categories, and user sessions, these optimizations become business-critical.

From a scalability perspective, Next.js integrates seamlessly with modern backend services, payment gateways, authentication providers, and cloud infrastructure. Its compatibility with edge deployment and serverless architectures allows the platform to scale efficiently during high-traffic periods such as sales or promotions.

Additionally, the developer experience is structured and predictable. Clean file-based routing, modular architecture, and production-ready deployment options enabled me to focus on business logic, performance engineering, and conversion optimization instead of configuration overhead.

Ultimately, I chose Next.js because it is not just a frontend framework — it is a full-stack production framework designed for high-performance, scalable applications. For an e-commerce system where speed, SEO, and reliability directly influence revenue, it was the strategic choice.
        </p>

      </div>

    </div>
  );
}
