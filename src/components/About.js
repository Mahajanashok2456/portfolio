'use client';
import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';

export default function About() {
  const skillsText = "AI / ML ✦ RAG Pipelines ✦ LangChain ✦ Gemini API ✦ OpenAI ✦ PyTorch ✦ Hugging Face ✦ Frontend ✦ React ✦ Next.js ✦ Framer Motion ✦ Tailwind CSS ✦ TypeScript ✦ Backend ✦ FastAPI ✦ Python ✦ Node.js ✦ MongoDB ✦ PostgreSQL ✦ Docker ✦ Tools ✦ Git ✦ Vercel ✦ Linux ✦ VS Code ✦ Postman ✦";

  return (
    <section id="about" className="pt-24 pb-12 md:pt-32 md:pb-24 bg-black border-t border-accent/20 fade-in-section overflow-hidden">
      {/* Edge-masked Marquee Container */}
      <div
        className="relative w-full py-4 mb-16"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
        }}
      >
        <CurvedLoop
          marqueeText={skillsText}
          speed={1.5}
          curveAmount={100}
          className="text-accent/60"
        />
        <CurvedLoop
          marqueeText={skillsText}
          speed={1.2}
          curveAmount={-100}
          direction="right"
          className="text-white/10"
        />
      </div>

      <div className="max-w-[1440px] mx-auto px-6 md:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <h2 className="text-6xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.8]">
            About <br />
            <span className="text-white/20">Me</span>
          </h2>

          <div className="text-base md:text-lg text-white/70 leading-relaxed font-medium space-y-6 lg:pt-4">
            <p>
              I am an AI Engineer and Full Stack Developer driven by the goal of building products that solve real problems. My journey started with a curiosity for data and evolved into architecting complex RAG pipelines and scalable web applications.
            </p>
            <p>
              I specialize in bridging the gap between cutting-edge AI research and production-ready software. Whether it&apos;s optimizing a MongoDB query or fine-tuning a prompt for an LLM, I obsess over performance and user experience.
            </p>
            <p>
              Currently available for freelance projects and consulting.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
