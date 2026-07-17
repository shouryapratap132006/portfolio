"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Cpu, GitPullRequest, Terminal, Briefcase, GraduationCap, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const techCategories = [
    {
        name: "Languages",
        skills: ["TypeScript", "JavaScript", "Python", "C++", "HTML5", "CSS3", "SQL"]
    },
    {
        name: "Frameworks & Libraries",
        skills: ["React", "Next.js", "Django", "FastAPI", "Express.js", "Node.js", "Phaser.js", "Tailwind CSS", "Framer Motion"]
    },
    {
        name: "Databases & AI Tools",
        skills: ["PostgreSQL", "MongoDB", "FAISS Vector DB", "LangGraph", "LangChain", "Scikit-Learn", "TensorFlow", "Hugging Face"]
    }
];

const stats = [
    {
        value: "300+",
        label: "DSA Problems Solved",
        sublabel: "LeetCode & Competitive Programming",
        icon: Code,
        color: "text-[#38bdf8]"
    },
    {
        value: "15+",
        label: "Interactive Web Apps",
        sublabel: "Phaser.js, Next.js, and scaling backends",
        icon: Terminal,
        color: "text-[#a855f7]"
    },
    {
        value: "Active",
        label: "Open Source Contributor",
        sublabel: "Zulip · Rocket.Chat · Wagtail · Joplin · CNCF",
        icon: GitPullRequest,
        color: "text-[#f43f5e]"
    }
];

const highlights = [
    {
        category: "🏆 Prestigious Selection",
        title: "Amazon ML Summer School 2026",
        institution: "Amazon · Highly Competitive Programme",
        period: "2026",
        description: "Selected from thousands of applicants across India for Amazon's elite ML programme. Learning from Amazon scientists & engineers across ML, Deep Learning, LLMs, Generative AI, and production-scale AI systems.",
        icon: Star,
        color: "from-amber-500/15 to-yellow-500/10 border-amber-500/30",
        featured: true
    },
    {
        category: "Internship Experience",
        title: "Full Stack Developer Intern",
        institution: "Brightpoint Studios Pvt. Ltd.",
        period: "Jan 2026 – Jun 2026",
        description: "Built 15+ interactive web experiences, engineered reusable modules reducing codebase overhead by 30%, and optimized rendering speed to improve cross-browser compatibility.",
        icon: Briefcase,
        color: "from-blue-500/10 to-cyan-500/10 border-blue-500/20",
        featured: false
    },
    {
        category: "Academic Background",
        title: "B.Tech in Artificial Intelligence",
        institution: "Newton School of Technology",
        period: "Expected 2027",
        description: "Focused on ML modeling, data structures, algorithm design, and integrating agentic reasoning models into modern web frameworks.",
        icon: GraduationCap,
        color: "from-purple-500/10 to-indigo-500/10 border-purple-500/20",
        featured: false
    }
];

export const About = () => {
    return (
        <section id="about" className="py-28 relative overflow-hidden bg-background">
            {/* Ambient Lighting Background */}
            <div className="absolute left-0 top-1/4 h-[30rem] w-[30rem] bg-primary/5 rounded-full blur-[140px] -z-10" />
            <div className="absolute right-1/4 bottom-1/4 h-[25rem] w-[25rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
                    
                    {/* Left Column: Biography & Stats (taking 7 columns on LG) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <span className="section-eyebrow">Behind the code</span>

                        <h2 className="section-heading mb-4">
                            Driven by intelligence. <br />
                            <span className="text-primary">Built for scale.</span>
                        </h2>
                        
                        <div className="space-y-5 text-base leading-relaxed text-foreground/70 font-normal">
                            <p>
                                I&apos;m <span className="text-white font-semibold">Shourya Pratap</span>, a B.Tech Artificial Intelligence student at <span className="text-white font-medium">Newton School of Technology</span> and a proud selectee of the <span className="text-amber-300 font-semibold">Amazon ML Summer School 2026</span> — chosen from <span className="text-white font-medium">1,30,000+ applicants</span> at a <span className="text-white font-medium">2.3% acceptance rate</span>, placing me among India&apos;s top emerging AI engineers.
                            </p>

                            <p>
                                As a <span className="text-white font-medium">Full Stack Developer Intern at Brightpoint Studios Pvt. Ltd.</span> (Jan – Jun 2026), I engineered <span className="text-primary font-medium">15+ interactive web experiences</span> using HTML5, CSS3, JavaScript, and Phaser.js — architecting reusable module systems that cut codebase overhead by <span className="text-primary font-medium">30%</span> and resolved 50+ critical client-side performance bottlenecks across browsers and devices.
                            </p>

                            <p>
                                On the AI side, I build production-ready intelligent systems — stateful multi-agent pipelines with <span className="text-primary font-medium">LangGraph</span>, vector search via <span className="text-primary font-medium">FAISS RAG</span>, and LLM integrations with OpenAI &amp; Gemini. I&apos;m also an active open source contributor to projects including <span className="text-white font-medium">Zulip, Rocket.Chat, Wagtail, Joplin,</span> and <span className="text-white font-medium">CNCF</span> — with verified PRs from GirlScript Summer of Code and Hacktoberfest.
                            </p>
                        </div>

                        {/* Interactive Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-4">
                            {stats.map((stat, i) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 15 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.5 }}
                                    className="p-5 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-white/10 transition-all duration-300 group shadow-md"
                                >
                                    <div className="flex items-center justify-between mb-4">
                                        <div className={`p-2 rounded-xl bg-white/5 ${stat.color} group-hover:scale-105 transition-transform`}>
                                            <stat.icon className="size-5" />
                                        </div>
                                    </div>
                                    <h4 className="text-3xl font-extrabold text-white tracking-tight">{stat.value}</h4>
                                    <p className="text-sm font-bold text-foreground/80 mt-1">{stat.label}</p>
                                    <p className="text-[11px] text-foreground/50 leading-snug mt-0.5">{stat.sublabel}</p>
                                </motion.div>
                            ))}
                        </div>

                        {/* Recruiter Section: Amazon + Internship + Education Highlights */}
                        <div className="mt-8">
                            <h3 className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-6">
                                Recruiter Highlights
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                                {highlights.map((highlight, index) => (
                                    <motion.div
                                        key={highlight.title}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.12, duration: 0.6 }}
                                        className={`${
                                            highlight.featured ? "md:col-span-2" : ""
                                        } p-6 rounded-[2rem] border bg-gradient-to-br ${highlight.color} flex flex-col gap-3.5 hover:scale-[1.005] transition-transform shadow-lg relative overflow-hidden`}
                                    >
                                        {/* Glow for featured card */}
                                        {highlight.featured && (
                                            <div className="absolute -top-10 -right-10 size-32 bg-amber-400/10 rounded-full blur-2xl pointer-events-none" />
                                        )}
                                        <div className="flex items-center justify-between">
                                            <span className={`text-[10px] font-extrabold uppercase tracking-wider ${
                                                highlight.featured ? "text-amber-400" : "text-primary"
                                            }`}>
                                                {highlight.category}
                                            </span>
                                            <highlight.icon className={`size-4 ${
                                                highlight.featured ? "text-amber-400" : "text-primary"
                                            }`} />
                                        </div>
                                        <div>
                                            <h4 className={`text-lg font-bold leading-tight ${
                                                highlight.featured ? "text-amber-100" : "text-white"
                                            }`}>
                                                {highlight.title}
                                            </h4>
                                            <p className="text-xs text-foreground/60 mt-1">
                                                {highlight.institution} • <span className="italic">{highlight.period}</span>
                                            </p>
                                        </div>
                                        <p className="text-xs text-foreground/70 leading-relaxed">
                                            {highlight.description}
                                        </p>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                    </motion.div>

                    {/* Right Column: Tech Arsenal (taking 5 columns on LG) */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-5 flex flex-col gap-6"
                    >
                        <div className="p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden shadow-xl">
                            {/* Glow spot in tech card */}
                            <div className="absolute -top-16 -right-16 size-36 bg-primary/10 rounded-full blur-2xl" />
                            
                            <h3 className="text-xl font-bold tracking-tight text-white mb-6 flex items-center gap-2">
                                <Cpu className="size-5 text-primary" />
                                Technical Stack
                            </h3>
                            
                            <div className="space-y-6">
                                {techCategories.map((category) => (
                                    <div key={category.name} className="border-b border-white/5 pb-5 last:border-b-0 last:pb-0">
                                        <h4 className="text-xs uppercase tracking-widest text-foreground/40 font-bold mb-3">
                                            {category.name}
                                        </h4>
                                        <div className="flex flex-wrap gap-2">
                                            {category.skills.map((skill) => (
                                                <Badge 
                                                    key={skill} 
                                                    variant="secondary" 
                                                    className="px-3 py-1.5 rounded-xl border border-white/5 bg-white/[0.04] text-xs font-medium text-foreground/80 hover:bg-primary/20 hover:text-white transition-colors"
                                                >
                                                    {skill}
                                                </Badge>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
};
