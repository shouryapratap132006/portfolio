"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { BarChart3, Brain, Cloud, Code2, Database, Sparkles } from "lucide-react";

const skillModes = [
  {
    name: "AI / ML",
    eyebrow: "Intelligent systems",
    icon: Brain,
    accent: "from-violet-500 via-fuchsia-400 to-cyan-300",
    glow: "bg-violet-500/20",
    description: "I design agentic applications that retrieve, reason, and respond with useful context.",
    focus: "Agentic AI",
    skills: ["LangGraph", "LangChain", "RAG", "FAISS", "LLMs", "OpenAI API", "Gemini API", "Scikit-learn", "TensorFlow", "Hugging Face", "NLP", "Embeddings"],
  },
  {
    name: "Full Stack",
    eyebrow: "Product engineering",
    icon: Code2,
    accent: "from-cyan-400 via-sky-500 to-blue-600",
    glow: "bg-cyan-500/20",
    description: "I turn complex product ideas into responsive, secure, and delightful web experiences.",
    focus: "Next.js",
    skills: ["React", "Next.js", "TypeScript", "Node.js", "Django", "FastAPI", "PostgreSQL", "MongoDB", "Prisma", "REST APIs", "Socket.IO", "Stripe"],
  },
  {
    name: "Data & Visualisation",
    eyebrow: "Decision-ready insights",
    icon: BarChart3,
    accent: "from-amber-300 via-orange-400 to-rose-500",
    glow: "bg-amber-500/20",
    description: "I transform raw information into precise analysis, meaningful KPIs, and clear data stories.",
    focus: "Tableau",
    skills: ["Python", "SQL", "Pandas", "NumPy", "Tableau", "Power BI", "Excel", "Looker Studio", "Matplotlib", "Seaborn", "ETL", "EDA"],
  },
  {
    name: "Cloud & DevOps",
    eyebrow: "Reliable delivery",
    icon: Cloud,
    accent: "from-emerald-400 via-teal-400 to-cyan-500",
    glow: "bg-emerald-500/20",
    description: "I ship cloud-native applications with repeatable deployments and production-minded workflows.",
    focus: "AWS",
    skills: ["AWS EC2", "Docker", "Nginx", "GitHub Actions", "GHCR", "Neon", "Vercel", "Render", "Git", "GitHub", "Postman", "CI/CD"],
  },
  {
    name: "Core",
    eyebrow: "Developer foundations",
    icon: Database,
    accent: "from-pink-400 via-rose-400 to-orange-300",
    glow: "bg-rose-500/20",
    description: "A strong foundation in problem-solving, interface craft, and practical software development.",
    focus: "Problem solving",
    skills: ["JavaScript", "Python", "C++", "HTML5", "CSS", "Tailwind CSS", "Phaser.js", "Framer Motion", "Three.js", "Figma", "DSA", "UI/UX"],
  },
] as const;

export const Skills = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeMode = skillModes[activeIndex];
  const Icon = activeMode.icon;

  return (
    <section id="skills" className="relative overflow-hidden py-28 bg-white/[0.025]">
      <div className={`absolute left-1/2 top-0 h-96 w-[42rem] -translate-x-1/2 rounded-full ${activeMode.glow} blur-[140px] transition-colors duration-700`} />
      <div className="container relative mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Capabilities</span>
          <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">My evolving <span className="text-primary">skill universe.</span></h2>
          <p className="mx-auto mt-5 max-w-2xl text-foreground/60">Choose a mode to explore the tools and systems I use to bring ideas from concept to production.</p>
        </motion.div>

        <div className="no-scrollbar mt-10 flex gap-2 overflow-x-auto pb-2 md:justify-center">
          {skillModes.map((mode, index) => {
            const ModeIcon = mode.icon;
            const isActive = index === activeIndex;
            return (
              <button key={mode.name} onClick={() => setActiveIndex(index)} className={`group flex shrink-0 items-center gap-2 rounded-full border px-4 py-2.5 text-sm transition-all ${isActive ? "border-white/25 bg-white text-black shadow-lg shadow-white/10" : "border-white/10 bg-white/[0.03] text-white/60 hover:border-white/25 hover:text-white"}`}>
                <ModeIcon className="size-4" /> {mode.name}
              </button>
            );
          })}
        </div>

        <motion.div key={activeMode.name} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.35 }} className="mt-10 grid overflow-hidden rounded-[2rem] border border-white/10 bg-[#0c0c10] shadow-2xl shadow-black/40 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative min-h-[430px] overflow-hidden border-b border-white/10 p-8 lg:border-b-0 lg:border-r md:p-12">
            <div className={`absolute -left-20 top-16 size-72 rounded-full ${activeMode.glow} blur-[90px]`} />
            <div className="relative z-10 flex h-full flex-col">
              <div className="flex items-center gap-3 text-white/55"><Sparkles className="size-4" /> <span className="text-xs uppercase tracking-[0.25em]">{activeMode.eyebrow}</span></div>
              <h3 className="mt-8 max-w-sm text-4xl font-bold tracking-tight">{activeMode.description}</h3>
              <div className="relative mx-auto mt-auto flex aspect-square w-full max-w-[310px] items-center justify-center">
                <div className="absolute inset-2 rounded-full border border-white/15" />
                <div className="absolute inset-9 rounded-full border border-dashed border-white/15" />
                {[0, 1, 2, 3, 4].map((item) => (
                  <span key={item} style={{ transform: `rotate(${item * 72}deg) translateY(-142px) rotate(-${item * 72}deg)` }} className="absolute left-[calc(50%-20px)] top-[calc(50%-20px)] flex size-10 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-[10px] font-bold backdrop-blur">
                    {activeMode.skills[item].slice(0, 2).toUpperCase()}
                  </span>
                ))}
                <div className={`relative flex size-28 items-center justify-center rounded-full bg-gradient-to-br ${activeMode.accent} shadow-[0_0_45px_rgba(255,255,255,0.2)]`}><Icon className="size-12 text-black" /></div>
              </div>
            </div>
          </div>
          <div className="p-8 md:p-12">
            <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-7">
              <div><p className="text-xs uppercase tracking-[0.25em] text-white/45">Current mode</p><h3 className="mt-2 text-3xl font-bold">{activeMode.name}</h3></div>
              <span className={`rounded-full bg-gradient-to-r ${activeMode.accent} px-4 py-2 text-xs font-bold text-black`}>{activeMode.focus}</span>
            </div>
            <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
              {activeMode.skills.map((skill, index) => <motion.div key={skill} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: index * 0.03 }} className="rounded-2xl border border-white/10 bg-white/[0.035] px-3 py-4 text-center text-sm text-white/75 transition-colors hover:border-white/25 hover:bg-white/[0.08]">{skill}</motion.div>)}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
