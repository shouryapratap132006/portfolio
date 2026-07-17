"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { Brain, Cpu, GitPullRequest, Code, Star, Zap, TrendingUp, Users, Trophy } from "lucide-react";

// ─── Correct Amazon SVG logo ─────────────────────────────────────────────────
// Renders "amazon" text + smile arrow, faithful to brand guidelines
const AmazonLogo = () => (
    <svg viewBox="0 0 200 60" className="h-6 w-auto" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* "amazon" wordmark */}
        <text
            x="0" y="38"
            fontFamily="'Arial Black', 'Arial Bold', Arial, sans-serif"
            fontSize="40"
            fontWeight="900"
            letterSpacing="-1"
            fill="#FF9900"
        >
            amazon
        </text>
        {/* Smile arrow beneath — drawn as a curved path */}
        <path
            d="M 8 50 Q 100 72 192 50"
            stroke="#FF9900"
            strokeWidth="4.5"
            fill="none"
            strokeLinecap="round"
        />
        {/* Arrowhead on the right */}
        <path
            d="M 182 44 L 192 50 L 183 57"
            stroke="#FF9900"
            strokeWidth="4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

// ─── Animated Counter ────────────────────────────────────────────────────────
const Counter = ({ value, suffix, decimals = 0 }: { value: number; suffix: string; decimals?: number }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useSpring(count, { damping: 28, stiffness: 90 });
    const [display, setDisplay] = useState("0");

    useEffect(() => { if (inView) count.set(value); }, [inView, value, count]);
    useEffect(() => rounded.on("change", (v) => {
        setDisplay(decimals > 0 ? v.toFixed(decimals) : Math.floor(v).toString());
    }), [rounded, decimals]);

    return (
        <span ref={ref} className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-violet-400">
            {display}{suffix}
        </span>
    );
};

// ─── Stats ───────────────────────────────────────────────────────────────────
const stats = [
    { label: "DSA Questions", value: 300, suffix: "+", icon: Code },
    { label: "Codeforces Rating", value: 1000, suffix: "", icon: TrendingUp },
    { label: "Projects Built", value: 15, suffix: "+", icon: Cpu },
    { label: "Open Source PRs", value: 10, suffix: "+", icon: GitPullRequest },
];

// ─── Amazon selection stats ───────────────────────────────────────────────────
const amazonStats = [
    { value: 130000, suffix: "+", label: "Students Applied", decimals: 0, icon: Users, color: "text-amber-300" },
    { value: 3000, suffix: "", label: "Students Selected", decimals: 0, icon: Trophy, color: "text-emerald-300" },
    { value: 2.3, suffix: "%", label: "Selection Rate", decimals: 1, icon: Star, color: "text-rose-300" },
];

// ─── Highlight pills ──────────────────────────────────────────────────────────
const highlights = [
    { icon: Users,  text: "Selected from 1,30,000+ applicants across India — only 3,000 chosen",  color: "text-amber-400",   bg: "bg-amber-400/10" },
    { icon: Brain,  text: "Curriculum: ML, Deep Learning, LLMs & Generative AI by Amazon scientists", color: "text-violet-400", bg: "bg-violet-400/10" },
    { icon: Zap,    text: "Direct mentorship from Amazon engineers on production-scale AI", color: "text-cyan-400",   bg: "bg-cyan-400/10"   },
    { icon: Trophy, text: "2.3% acceptance — one of the most competitive ML programmes in India", color: "text-emerald-400", bg: "bg-emerald-400/10" },
];

// ─── Component ────────────────────────────────────────────────────────────────
export const Achievements = () => {
    return (
        <section id="achievements" className="py-28 relative overflow-hidden bg-background">
            {/* Ambient glows */}
            <div className="absolute top-0 right-1/4 h-[30rem] w-[30rem] bg-amber-500/5 rounded-full blur-[140px] -z-10 pointer-events-none" />
            <div className="absolute bottom-0 left-1/4 h-[25rem] w-[25rem] bg-primary/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

            <div className="container px-6 mx-auto space-y-24">

                {/* ── Amazon ML Summer School ────────────────────────────── */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-80px" }}
                    transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                >
                    {/* Eyebrow */}
                    <div className="text-center mb-14">
                        <span className="section-eyebrow">Recognition & Honours</span>
                        <h2 className="section-heading mt-4">
                            Built for the <span className="text-primary">big leagues.</span>
                        </h2>
                    </div>

                    {/* Featured card */}
                    <div className="relative rounded-[2.5rem] overflow-hidden border border-amber-400/20 p-px shadow-2xl"
                        style={{ background: "linear-gradient(135deg, rgba(251,191,36,0.25) 0%, rgba(255,255,255,0.03) 50%, rgba(139,92,246,0.2) 100%)" }}>

                        <div className="relative rounded-[2.4rem] bg-[#0a0a0a] px-8 py-10 md:px-14 md:py-14 flex flex-col lg:flex-row gap-12 lg:gap-20 items-start lg:items-center overflow-hidden">
                            {/* Background shimmer */}
                            <div className="absolute inset-0 pointer-events-none"
                                style={{ background: "radial-gradient(ellipse 60% 60% at 80% 20%, rgba(251,191,36,0.06) 0%, transparent 70%)" }} />

                            {/* Left: content */}
                            <div className="flex-1 min-w-0 relative z-10">

                                {/* Logo + pill row */}
                                <div className="flex flex-wrap items-center gap-4 mb-7">
                                    <div className="px-5 py-2.5 rounded-xl bg-white/[0.05] border border-white/10 backdrop-blur-sm">
                                        <AmazonLogo />
                                    </div>
                                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] font-extrabold uppercase tracking-widest bg-amber-400/15 border border-amber-400/30 text-amber-300">
                                        <Star className="size-3" fill="currentColor" />
                                        Highly Competitive · 2026
                                    </span>
                                </div>

                                <h3 className="text-3xl md:text-4xl font-extrabold tracking-tight leading-tight mb-2">
                                    <span className="text-white">Amazon ML </span>
                                    <span className="text-amber-300">Summer School 2026</span>
                                </h3>
                                <p className="text-sm text-foreground/60 mb-6 font-medium">
                                    Machine Learning Programme by Amazon · India
                                </p>

                                <p className="text-base text-foreground/70 leading-relaxed max-w-lg mb-8">
                                    Selected for one of India&apos;s most prestigious machine learning programmes conducted by Amazon. Expanding expertise across advanced ML, production AI systems, and real-world model deployment under direct mentorship of Amazon scientists and engineers.
                                </p>

                                {/* Highlight pills */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                                    {highlights.map((h, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, x: -16 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                                            className="flex items-start gap-3 p-3.5 rounded-2xl border border-white/5 bg-white/[0.02]"
                                        >
                                            <div className={`mt-0.5 p-1.5 rounded-lg shrink-0 ${h.bg}`}>
                                                <h.icon className={`size-3.5 ${h.color}`} />
                                            </div>
                                            <p className="text-xs text-foreground/70 leading-relaxed">{h.text}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Amazon-specific stats row */}
                                <div className="flex flex-wrap gap-6">
                                    {amazonStats.map((s, i) => {
                                        const Icon = s.icon;
                                        return (
                                            <motion.div
                                                key={s.label}
                                                initial={{ opacity: 0, y: 12 }}
                                                whileInView={{ opacity: 1, y: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: 0.3 + i * 0.1 }}
                                                className="flex flex-col items-start"
                                            >
                                                <div className="flex items-baseline gap-1">
                                                    <Counter value={s.value} suffix={s.suffix} decimals={s.decimals} />
                                                </div>
                                                <div className="flex items-center gap-1.5 mt-1">
                                                    <Icon className={`size-3 ${s.color}`} />
                                                    <span className="text-[10px] uppercase tracking-widest font-bold text-foreground/45">
                                                        {s.label}
                                                    </span>
                                                </div>
                                            </motion.div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* Right: prestige badge */}
                            <div className="shrink-0 flex flex-col items-center gap-5 self-center relative z-10">
                                <div className="relative flex items-center justify-center">
                                    <div className="absolute size-52 rounded-full bg-amber-400/8 blur-3xl animate-pulse" />
                                    <div className="absolute size-44 rounded-full border border-amber-400/15 animate-spin" style={{ animationDuration: "22s" }} />
                                    <div className="absolute size-34 rounded-full border border-dashed border-amber-400/10 animate-spin" style={{ animationDuration: "38s", animationDirection: "reverse" }} />

                                    {/* Core badge */}
                                    <div className="relative flex flex-col items-center justify-center size-40 rounded-full border border-amber-400/25 shadow-[0_0_70px_rgba(251,191,36,0.18)]"
                                        style={{ background: "radial-gradient(circle at 40% 35%, rgba(251,191,36,0.18) 0%, rgba(0,0,0,0.6) 70%)" }}>
                                        <Brain className="size-9 text-amber-300 mb-2" />
                                        <span className="text-[9px] font-extrabold uppercase tracking-[0.18em] text-amber-400/80 text-center leading-tight px-3">
                                            ML Summer<br/>School
                                        </span>
                                        <span className="text-[8px] font-bold text-amber-500/60 mt-1">Amazon · 2026</span>
                                    </div>
                                </div>

                                {/* 2.3% label */}
                                <div className="flex flex-col items-center">
                                    <span className="text-2xl font-extrabold text-amber-300">2.3%</span>
                                    <span className="text-[9px] uppercase tracking-widest text-foreground/40 font-bold">Acceptance Rate</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* ── Animated stats counters ────────────────────────────── */}
                <div>
                    <div className="text-center mb-12">
                        <span className="section-eyebrow">By the numbers</span>
                        <h2 className="section-heading mt-4">
                            The <span className="text-primary">metrics</span> speak.
                        </h2>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {stats.map((stat, i) => {
                            const Icon = stat.icon;
                            return (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: i * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                                    className="group flex flex-col items-center text-center p-8 rounded-3xl border border-white/5 bg-white/[0.02] hover:border-primary/20 hover:bg-white/[0.04] transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/[0.04] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl" />
                                    <div className="p-2.5 rounded-xl bg-white/5 mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                                        <Icon className="size-5 text-primary" />
                                    </div>
                                    <Counter value={stat.value} suffix={stat.suffix} />
                                    <p className="text-foreground/50 mt-3 font-semibold uppercase tracking-widest text-[10px]">
                                        {stat.label}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>

            </div>
        </section>
    );
};
