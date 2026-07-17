"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Terminal, Star, Brain, Trophy } from "lucide-react";
import { Badge } from "@/components/ui/badge";

// ─── Amazon logo (text + smile) ───────────────────────────────────────────────
const AmazonWordmark = () => (
    <svg viewBox="0 0 200 60" className="h-5 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        <text x="0" y="38" fontFamily="'Arial Black','Arial Bold',Arial,sans-serif" fontSize="40" fontWeight="900" letterSpacing="-1" fill="#FF9900">amazon</text>
        <path d="M 8 50 Q 100 72 192 50" stroke="#FF9900" strokeWidth="4.5" fill="none" strokeLinecap="round"/>
        <path d="M 182 44 L 192 50 L 183 57" stroke="#FF9900" strokeWidth="4" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

interface Experience {
    title: string;
    role: string;
    period: string;
    location: string;
    icon: React.ComponentType<{ className?: string }>;
    skills: string[];
    description: string;
    featured?: boolean;
    featuredStats?: { value: string; label: string }[];
}

const experiences: Experience[] = [
    {
        title: "Amazon ML Summer School 2026",
        role: "Selected Participant · Machine Learning Programme",
        period: "2026",
        location: "Amazon · India",
        icon: Brain,
        featured: true,
        featuredStats: [
            { value: "1,30,000+", label: "Students Applied" },
            { value: "3,000", label: "Students Selected" },
            { value: "2.3%", label: "Acceptance Rate" },
        ],
        skills: ["Machine Learning", "Deep Learning", "LLMs", "Generative AI", "Model Optimisation"],
        description: "Selected for Amazon's highly competitive machine learning programme from over 1,30,000 applicants across India — a 2.3% acceptance rate. Learning directly from Amazon scientists and engineers across sessions on modern ML, Deep Learning, Large Language Models, Generative AI, and production-scale AI systems.",
    },
    {
        title: "Brightpoint Studios Pvt. Ltd.",
        role: "Full Stack Developer Intern",
        period: "Jan 2026 – Jun 2026",
        location: "Remote",
        icon: Terminal,
        skills: ["HTML5", "CSS3", "JavaScript", "Phaser.js", "Module Architecture"],
        description: "Engineered 15+ interactive web experiences with smooth graphics and state lifecycles. Created reusable modular packages that reduced setup overhead by 30%. Solved 50+ critical client-side bottlenecks to ensure cross-device consistency and optimal frame rates.",
    },
    {
        title: "GirlScript Summer of Code",
        role: "Open Source Contributor",
        period: "Summer 2024",
        location: "Remote",
        icon: Star,
        skills: ["React", "UI/UX", "Git Workflow", "Open Source"],
        description: "Contributed to various community repositories, improving interface responsiveness and fixing critical bugs in React-based frameworks.",
    },
    {
        title: "Hacktoberfest",
        role: "Open Source Contributor",
        period: "Oct 2024",
        location: "Global Event",
        icon: Award,
        skills: ["GitHub", "Pull Requests", "Markdown", "React Ecosystem"],
        description: "Successfully submitted verified PRs to multiple repositories, collaborating with maintainers to add features and write clean documentation.",
    },
    {
        title: "Open Source Contributions",
        role: "Developer",
        period: "Ongoing",
        location: "GitHub",
        icon: Briefcase,
        skills: ["TypeScript", "Next.js", "Django", "LLM Pipelines"],
        description: "Maintain and contribute to developer utility libraries, backend engines, and agentic AI integrations in the public GitHub community.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-28 relative overflow-hidden bg-background">
            {/* Ambient Background Glows */}
            <div className="absolute right-1/4 top-1/3 h-[25rem] w-[25rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />
            <div className="absolute left-1/4 bottom-1/4 h-[30rem] w-[30rem] bg-primary/5 rounded-full blur-[140px] -z-10" />

            <div className="container px-6 mx-auto">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <span className="section-eyebrow">Chronology</span>
                    <h2 className="section-heading mt-4 mb-4">
                        Professional <span className="text-primary">Journey.</span>
                    </h2>
                    <p className="text-foreground/60 max-w-xl mx-auto text-base">
                        A history of my internships, contributions, and active community participation.
                    </p>
                </motion.div>

                {/* Timeline wrapper */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Timeline center line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-amber-400/60 via-primary/30 via-white/10 to-transparent -translate-x-1/2" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => {
                            const ExpIcon = exp.icon;
                            const isEven = index % 2 === 0;
                            const isFeatured = exp.featured;

                            return (
                                <motion.div
                                    key={exp.title}
                                    initial={{ opacity: 0, y: 35 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ duration: 0.65, ease: "easeOut" }}
                                    className={`relative flex flex-col md:flex-row gap-8 items-start ${
                                        isEven ? "md:flex-row-reverse" : ""
                                    }`}
                                >
                                    {/* Card */}
                                    <div className="flex-1 w-full pl-8 md:pl-0">
                                        <div className={`p-8 rounded-[2rem] border transition-all duration-300 relative group shadow-xl overflow-hidden ${
                                            isFeatured
                                                ? "border-amber-400/25 bg-gradient-to-br from-amber-500/[0.08] via-white/[0.01] to-violet-500/[0.06] hover:border-amber-400/40"
                                                : "border-white/5 bg-white/[0.02] hover:border-primary/20"
                                        } ${isEven ? "md:text-right" : "md:text-left"}`}>

                                            {/* Featured inner glow */}
                                            {isFeatured && (
                                                <div className="absolute -top-12 -right-12 size-40 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
                                            )}
                                            {/* Normal hover glow */}
                                            {!isFeatured && (
                                                <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/0 via-primary/[0.01] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                                            )}

                                            {/* Featured: Amazon wordmark */}
                                            {isFeatured && (
                                                <div className={`flex mb-5 ${isEven ? "md:justify-end" : ""}`}>
                                                    <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl bg-white/[0.04] border border-amber-400/15">
                                                        <AmazonWordmark />
                                                        <span className="text-[9px] font-extrabold uppercase tracking-[0.2em] text-amber-400/80">ML Summer School</span>
                                                    </div>
                                                </div>
                                            )}

                                            {/* Metadata */}
                                            <div className={`flex flex-wrap gap-3 text-xs mb-4 items-center ${
                                                isEven ? "md:justify-end" : "md:justify-start"
                                            } ${isFeatured ? "text-amber-400/60" : "text-foreground/45"}`}>
                                                <span className="flex items-center gap-1">
                                                    <Calendar className="size-3.5" />
                                                    {exp.period}
                                                </span>
                                                <span className="text-white/20">•</span>
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="size-3.5" />
                                                    {exp.location}
                                                </span>
                                            </div>

                                            {/* Title & Role */}
                                            <h3 className={`text-2xl font-bold tracking-tight mb-1 ${isFeatured ? "text-amber-100" : "text-white"}`}>
                                                {exp.title}
                                            </h3>
                                            <p className={`font-semibold text-sm mb-4 ${isFeatured ? "text-amber-400" : "text-primary"}`}>
                                                {exp.role}
                                            </p>

                                            {/* Description */}
                                            <p className="text-foreground/75 leading-relaxed text-sm mb-6 max-w-2xl">
                                                {exp.description}
                                            </p>

                                            {/* Featured stats row */}
                                            {isFeatured && exp.featuredStats && (
                                                <div className={`flex flex-wrap gap-6 mb-6 ${isEven ? "md:justify-end" : ""}`}>
                                                    {exp.featuredStats.map((s) => (
                                                        <div key={s.label} className="flex flex-col">
                                                            <span className="text-2xl font-extrabold text-amber-300">{s.value}</span>
                                                            <span className="text-[9px] uppercase tracking-widest text-foreground/45 font-bold mt-0.5">{s.label}</span>
                                                        </div>
                                                    ))}
                                                </div>
                                            )}

                                            {/* Skill badges */}
                                            <div className={`flex flex-wrap gap-2 ${isEven ? "md:justify-end" : "md:justify-start"}`}>
                                                {exp.skills.map((skill) => (
                                                    <Badge
                                                        key={skill}
                                                        variant="outline"
                                                        className={`text-[10px] tracking-wider uppercase px-2.5 py-1 ${
                                                            isFeatured
                                                                ? "border-amber-400/20 bg-amber-400/[0.06] text-amber-300/70"
                                                                : "border-white/5 bg-white/[0.03] text-foreground/60"
                                                        }`}
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Node */}
                                    <div className={`absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-20 flex items-center justify-center size-9 rounded-full bg-background border transition-colors shadow-[0_0_15px_rgba(0,0,0,0.6)] ${
                                        isFeatured ? "border-amber-400/40 shadow-[0_0_20px_rgba(251,191,36,0.15)]" : "border-white/20 hover:border-primary"
                                    }`}>
                                        <div className={`flex items-center justify-center size-7 rounded-full bg-white/[0.03]`}>
                                            <ExpIcon className={`size-3.5 ${isFeatured ? "text-amber-400" : "text-primary"}`} />
                                        </div>
                                    </div>

                                    {/* Spacer */}
                                    <div className="flex-1 hidden md:block" />
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
};
