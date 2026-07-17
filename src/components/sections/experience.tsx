"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, Award, Terminal, Star } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const experiences = [
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
                    <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Chronology</span>
                    <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight mb-4">
                        Professional <span className="text-primary">Journey.</span>
                    </h2>
                    <p className="text-foreground/60 max-w-xl mx-auto text-base">
                        A history of my internships, contributions, and active community participation.
                    </p>
                </motion.div>

                {/* Timeline wrapper */}
                <div className="max-w-4xl mx-auto relative">
                    {/* Vertical Timeline center line */}
                    <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/60 via-white/10 to-transparent -translate-x-1/2" />

                    <div className="space-y-16">
                        {experiences.map((exp, index) => {
                            const ExpIcon = exp.icon;
                            const isEven = index % 2 === 0;

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
                                    {/* Glassmorphic card container */}
                                    <div className="flex-1 w-full pl-8 md:pl-0">
                                        <div className={`p-8 rounded-[2rem] border border-white/5 bg-white/[0.02] hover:border-primary/20 transition-all duration-300 relative group shadow-xl ${
                                            isEven ? "md:text-right" : "md:text-left"
                                        }`}>
                                            {/* Micro glowing mesh behind card */}
                                            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-tr from-primary/0 via-primary/[0.01] to-white/[0.01] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                            {/* Metadata line (Period & Location) */}
                                            <div className={`flex flex-wrap gap-3 text-xs text-foreground/45 mb-4 items-center ${
                                                isEven ? "md:justify-end" : "md:justify-start"
                                            }`}>
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
                                            <h3 className="text-2xl font-bold tracking-tight text-white mb-1">
                                                {exp.title}
                                            </h3>
                                            <p className="text-primary font-semibold text-sm mb-4">
                                                {exp.role}
                                            </p>

                                            {/* Description */}
                                            <p className="text-foreground/75 leading-relaxed text-sm mb-6 max-w-2xl">
                                                {exp.description}
                                            </p>

                                            {/* Tech badges used in that role */}
                                            <div className={`flex flex-wrap gap-2 ${
                                                isEven ? "md:justify-end" : "md:justify-start"
                                            }`}>
                                                {exp.skills.map((skill) => (
                                                    <Badge 
                                                        key={skill} 
                                                        variant="outline" 
                                                        className="border-white/5 bg-white/[0.03] text-[10px] text-foreground/60 tracking-wider uppercase px-2.5 py-1"
                                                    >
                                                        {skill}
                                                    </Badge>
                                                ))}
                                            </div>
                                        </div>
                                    </div>

                                    {/* Timeline Node Connector pin */}
                                    <div className="absolute left-4 md:left-1/2 top-4 -translate-x-1/2 z-20 flex items-center justify-center size-9 rounded-full bg-background border border-white/20 group-hover:border-primary transition-colors shadow-[0_0_15px_rgba(0,0,0,0.6)]">
                                        <div className="flex items-center justify-center size-7 rounded-full bg-white/[0.03] text-foreground/60">
                                            <ExpIcon className="size-3.5 text-primary" />
                                        </div>
                                    </div>

                                    {/* Spacer column on other side of timeline to keep balance */}
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
