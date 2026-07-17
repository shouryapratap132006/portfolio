"use client";

import React from "react";
import { motion } from "framer-motion";
import { Brain, Code, Cpu, Flame, GitPullRequest, Globe, Terminal } from "lucide-react";
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
        sublabel: "GSoC (GSOC) & Hacktoberfest",
        icon: GitPullRequest,
        color: "text-[#f43f5e]"
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
                    
                    {/* Left Column: Biography (taking 7 columns on LG) */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="lg:col-span-7 flex flex-col gap-6"
                    >
                        <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Behind the code</span>
                        
                        <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-4">
                            Driven by intelligence. <br />
                            <span className="text-primary">Built for scale.</span>
                        </h2>
                        
                        <div className="space-y-6 text-base md:text-lg leading-relaxed text-foreground/75 font-normal">
                            <p>
                                I&apos;m <span className="text-white font-semibold">Shourya Pratap</span>, a B.Tech Artificial Intelligence student at <span className="text-white font-medium">Newton School of Technology</span>, specialized in designing intelligent backend architectures, scalable integrations, and immersive user experiences.
                            </p>

                            <p>
                                I focus heavily on bridging the gap between high-performance web systems and AI workflows. Whether implementing complex state machine multi-agent systems via <span className="text-primary font-medium">LangGraph</span>, vector indexing structures through <span className="text-primary font-medium">FAISS RAG</span>, or structuring full-fledged Node/Django microservices—I write production-ready code with complete ownership.
                            </p>

                            <p>
                                A passionate open-source contributor and computer programming enthusiast, I constantly challenge myself to solve complex algorithms, contributing to modern web tooling and maintaining clean developer architectures.
                            </p>
                        </div>

                        {/* Interactive Stats Grid */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
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
