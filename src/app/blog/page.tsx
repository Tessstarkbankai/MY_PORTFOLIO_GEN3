"use client";
import { useRouter } from "next/navigation";
export default function Blog() {
  const router = useRouter();
  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0f1f] via-[#0f172a] to-[#0b1120] flex items-center justify-center px-6 py-20">
      
      <div className="max-w-4xl w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-10 md:p-14 shadow-2xl">
        <div onClick={()=>router.push("/#blog")} className=" mb-5"> <span className="ml-2 hover:cursor-pointer">→</span></div>
        <h1 className="text-4xl md:text-5xl font-bold text-white tracking-wide mb-8">
          Who I Am:
        </h1>

        <p className="text-gray-300 leading-relaxed text-lg tracking-wide">
          I am a Full Stack Developer passionate about building scalable, 
          real-world digital solutions that create impact. My journey in technology 
          is driven by curiosity, problem-solving, and the desire to architect 
          systems that are not just functional, but efficient and production-ready. 
          
          From developing university-level platforms like complaint management 
          systems and booking portals to building startup-driven automation tools, 
          I focus on delivering clean architecture, optimized backend systems, 
          and seamless user experiences. 
          
          My expertise lies in modern web technologies including the MERN stack, 
          Next.js, REST APIs, and cloud deployment. I believe strong fundamentals 
          in Data Structures, Backend Engineering, and System Design are the core 
          of scalable applications. 
          
          Beyond coding, I aim to build solutions that solve real-world problems 
          at scale — combining technical depth with product vision.
        </p>

      </div>

    </div>
  );
}
