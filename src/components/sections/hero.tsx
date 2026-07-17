"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

// ─── Shared easing used across all sections ────────────────────────────────
export const EASE = [0.16, 1, 0.3, 1] as const;

// ─── Neural Network Canvas ─────────────────────────────────────────────────
interface Particle {
  x: number; y: number;
  vx: number; vy: number;
  radius: number;
  opacity: number;
  hue: number;
  pulse: number;
  pulseSpeed: number;
}

const HUES = [226, 258, 174, 291]; // indigo · violet · teal · purple

const NeuralCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const rafRef    = useRef<number>(0);
  const pRef      = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // ── size ──────────────────────────────────────────────────────────────
    const fit = () => {
      canvas.width  = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    fit();
    window.addEventListener("resize", fit);

    // ── spawn ─────────────────────────────────────────────────────────────
    const N = 80;
    pRef.current = Array.from({ length: N }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.5,
      vy: (Math.random() - 0.5) * 0.5,
      radius: Math.random() * 2 + 1.5,           // min 1.5 — never < 0
      opacity: Math.random() * 0.55 + 0.3,
      hue: HUES[Math.floor(Math.random() * HUES.length)],
      pulse: Math.random() * Math.PI * 2,
      pulseSpeed: Math.random() * 0.02 + 0.007,
    }));

    const MAX_DIST = 170;

    // ── draw loop ─────────────────────────────────────────────────────────
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const ps = pRef.current;

      // — particles —
      for (const p of ps) {
        p.x += p.vx;
        p.y += p.vy;
        p.pulse += p.pulseSpeed;
        if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
        if (p.y < 0 || p.y > canvas.height) p.vy *= -1;

        // radius is always ≥ 0.5
        const r = Math.max(0.5, p.radius + Math.sin(p.pulse) * 0.9);

        // outer glow
        const glow = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r * 7);
        glow.addColorStop(0, `hsla(${p.hue},90%,70%,${p.opacity * 0.45})`);
        glow.addColorStop(1, `hsla(${p.hue},90%,70%,0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r * 7, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        // solid dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${p.hue},90%,78%,${p.opacity})`;
        ctx.fill();
      }

      // — connections —
      for (let i = 0; i < ps.length; i++) {
        for (let j = i + 1; j < ps.length; j++) {
          const a = ps[i], b = ps[j];
          const dx = a.x - b.x, dy = a.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist >= MAX_DIST) continue;

          const alpha = (1 - dist / MAX_DIST) * 0.4;
          const grad  = ctx.createLinearGradient(a.x, a.y, b.x, b.y);
          grad.addColorStop(0,   `hsla(${a.hue},80%,68%,${alpha})`);
          grad.addColorStop(0.5, `hsla(${(a.hue+b.hue)/2},80%,68%,${alpha*1.6})`);
          grad.addColorStop(1,   `hsla(${b.hue},80%,68%,${alpha})`);

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = grad;
          ctx.lineWidth   = (1 - dist / MAX_DIST) * 1.5;
          ctx.stroke();
        }
      }

      rafRef.current = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", fit);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", zIndex: 1 }}
    />
  );
};

// ─── Hero ──────────────────────────────────────────────────────────────────
export const Hero = () => (
  <section
    id="home"
    style={{ position: "relative", height: "100vh", width: "100%", display: "flex",
             alignItems: "center", justifyContent: "center", overflow: "hidden",
             backgroundColor: "var(--background)" }}
  >
    {/* Layer 0 – subtle grid (lowest) */}
    <div
      style={{ position: "absolute", inset: 0, zIndex: 0,
               backgroundImage:
                 "linear-gradient(to right,rgba(255,255,255,0.013) 1px,transparent 1px)," +
                 "linear-gradient(to bottom,rgba(255,255,255,0.013) 1px,transparent 1px)",
               backgroundSize: "72px 72px" }}
    />

    {/* Layer 1 – canvas (sits above grid) */}
    <NeuralCanvas />

    {/* Layer 2 – ambient colour blobs */}
    <div style={{ position: "absolute", inset: 0, zIndex: 2, pointerEvents: "none" }}>
      <div style={{ position: "absolute", top: "10%", left: "10%",
                    width: "44rem", height: "44rem", borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(99,102,241,0.15) 0%,transparent 70%)",
                    filter: "blur(120px)", animation: "aura1 26s ease-in-out infinite alternate" }} />
      <div style={{ position: "absolute", bottom: "8%", right: "10%",
                    width: "38rem", height: "38rem", borderRadius: "50%",
                    background: "radial-gradient(circle,rgba(139,92,246,0.12) 0%,transparent 70%)",
                    filter: "blur(110px)", animation: "aura2 32s ease-in-out infinite alternate" }} />
    </div>

    {/* Layer 3 – radial vignette mask so edges stay dark */}
    <div
      style={{ position: "absolute", inset: 0, zIndex: 3, pointerEvents: "none",
               backgroundImage:
                 "radial-gradient(ellipse 70% 70% at 50% 50%, transparent 35%, var(--background) 100%)" }}
    />

    {/* Layer 4 – central glow behind text */}
    <div
      style={{ position: "absolute", left: "50%", top: "50%", zIndex: 4,
               transform: "translate(-50%,-50%)",
               width: "36rem", height: "36rem", borderRadius: "50%",
               background: "radial-gradient(circle,rgba(99,102,241,0.2) 0%,rgba(139,92,246,0.1) 45%,transparent 70%)",
               filter: "blur(100px)", pointerEvents: "none" }}
    />

    {/* Layer 5 – content */}
    <div className="container px-6" style={{ position: "relative", zIndex: 5 }}>
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">

        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: -18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: EASE }}
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 text-xs font-semibold tracking-[0.2em] uppercase rounded-full border border-white/10 bg-white/[0.04] text-foreground/80 backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            B.Tech AI&nbsp;·&nbsp;Newton School of Technology
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.15, ease: EASE }}
          className="text-5xl sm:text-7xl lg:text-[88px] font-extrabold tracking-tight mb-8 leading-[1.05]"
        >
          Hi, I&apos;m{" "}
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-100 to-neutral-400">
            Shourya Pratap.
          </span>
        </motion.h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.35, ease: EASE }}
          className="text-lg md:text-[22px] text-neutral-400 mb-14 max-w-2xl leading-relaxed font-normal"
        >
          Crafting the future of software by combining{" "}
          <span className="text-white font-medium">agentic AI workflows</span>{" "}
          with{" "}
          <span className="text-white font-medium">high-performance architectures</span>.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.55, ease: EASE }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link
            href="#projects"
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full bg-white text-black hover:bg-neutral-100 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.15)] hover:scale-[1.03] group"
          >
            Explore Work
            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
          <a
            href="/Shourya_Pratap_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download
            className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold rounded-full border border-white/10 bg-white/[0.04] text-white hover:bg-white/[0.09] transition-all duration-300 backdrop-blur-sm hover:scale-[1.03] group"
          >
            Download Resume
            <Download className="ml-2 h-4 w-4 transition-transform group-hover:translate-y-0.5" />
          </a>
        </motion.div>

      </div>
    </div>

    {/* Scroll hint */}
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.4, duration: 1 }}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      style={{ zIndex: 5 }}
    >
      <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-neutral-500">Scroll</span>
      <div className="w-px h-10 bg-gradient-to-b from-neutral-500 to-transparent" />
    </motion.div>

    {/* Inline keyframe auras */}
    <style>{`
      @keyframes aura1 {
        0%   { transform: translate(0,0) scale(1); }
        50%  { transform: translate(40px,-50px) scale(1.12); }
        100% { transform: translate(-20px,30px) scale(0.92); }
      }
      @keyframes aura2 {
        0%   { transform: translate(0,0) scale(1); }
        50%  { transform: translate(-50px,40px) scale(0.88); }
        100% { transform: translate(20px,-20px) scale(1.1); }
      }
    `}</style>
  </section>
);
