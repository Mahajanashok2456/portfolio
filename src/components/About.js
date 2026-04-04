'use client';
import { motion } from 'framer-motion';
import CurvedLoop from './CurvedLoop';
import { useEffect, useState } from 'react';

export default function About() {
  const [config, setConfig] = useState(null);

  useEffect(() => {
    const fetchConfig = async () => {
      try {
        const res = await fetch('/api/site-config?section=about');
        const data = await res.json();
        if (data.success && data.data) {
          setConfig(data.data);
        }
      } catch (error) {
        console.error('Error fetching about config:', error);
      }
    };
    fetchConfig();
  }, []);

  const content = config?.content || null;

  return (
    <section id="about" className="py-16 md:py-24 bg-white border-t border-black/5">
      <div className="max-w-[1200px] mx-auto px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
          <div>
            <h2 className="section-title-minimal">About Me</h2>
            <p className="text-4xl md:text-6xl font-black text-black/10 uppercase tracking-tighter leading-none mt-4">
              FULL STACK DEV <br />
              & AI ENGINEER
            </p>
          </div>

          <div className="text-lg md:text-2xl text-black/60 leading-relaxed font-medium space-y-8 lg:pt-2">
            {content ? (
              <div dangerouslySetInnerHTML={{ __html: content.replace(/\n/g, '<br />') }} />
            ) : (
              <>
                <p>
                  I am a Full Stack Developer and AI Engineer driven by the goal of building products that solve real problems. My journey started with a curiosity for building scalable web applications and evolved into architecting complex RAG pipelines and intelligent AI-driven systems.
                </p>
                <p>
                  I specialize in bridging the gap between production-ready software and cutting-edge AI. Whether it&apos;s architecting a high-performance Next.js application or fine-tuning a prompt for an LLM, I obsess over performance and user experience.
                </p>
              </>
            )}
            <p className="text-black font-bold uppercase tracking-widest text-sm pt-4 border-t border-black/5">
              Currently available for freelance projects and consulting.
            </p>
            <p className="sr-only">
              Mahajan Ashok is a senior remote AI Engineer and Full Stack Developer serving clients in the US, UK, London, North America, and South America. Specializing in production-grade RAG pipelines, LangChain-powered AI agents, and high-performance FastAPI backends, he helps global startups build intelligent SaaS applications. Based in India but operating on global timezones, he holds certifications in Generative AI from Oracle, Google Cloud, and Salesforce. His expertise includes integrating multimodal LLMs like Gemini Pro, GPT-4o, and open-source models into scalable cloud architectures. Available for remote contract work and AI consulting worldwide.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
