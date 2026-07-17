"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, Sparkles, Brain, Cpu, Database, 
  Layers, Code2, Terminal, Server, Zap, 
  Cloud, Box, RefreshCw, Globe, Github, 
  FileCode, Play, Flame, HeartHandshake, Eye
} from "lucide-react";

// Skill item type definition
interface Skill {
  name: string;
  label: string;
  icon: React.ComponentType<any>;
  color: string;
  accent: string;
  description: string;
}

// Mode type definition
interface SkillMode {
  name: string;
  eyebrow: string;
  description: string;
  skills: Skill[];
}

const skillModes: SkillMode[] = [
  {
    name: "AI / ML",
    eyebrow: "Cognitive Computing & Automation",
    description: "I build intelligent agentic systems, multimodal search engines, and automated data pipelines using state-of-the-art models and vector architectures.",
    skills: [
      {
        name: "python",
        label: "Python",
        icon: Terminal,
        color: "#3776AB",
        accent: "from-[#3776AB]/30 to-[#FFD343]/20",
        description: "Core language for data analysis, model training, and building scalable backend reasoning systems."
      },
      {
        name: "langgraph",
        label: "LangGraph",
        icon: Brain,
        color: "#A855F7",
        accent: "from-[#A855F7]/30 to-[#EC4899]/20",
        description: "Creating stateful, multi-agent workflows with complex branching logic, persistence, and human-in-the-loop control."
      },
      {
        name: "rag",
        label: "RAG & FAISS",
        icon: Database,
        color: "#10B981",
        accent: "from-[#10B981]/30 to-[#06B6D4]/20",
        description: "Implementing retrieval-augmented generation using semantic search, dense embeddings, and high-performance vector databases."
      },
      {
        name: "llms",
        label: "LLM API Integrations",
        icon: Sparkles,
        color: "#F97316",
        accent: "from-[#F97316]/30 to-[#EAB308]/20",
        description: "Deploying intelligent services utilizing OpenAI, Gemini, and open-source models for context-aware text and image reasoning."
      },
      {
        name: "scikit",
        label: "Scikit-Learn",
        icon: Cpu,
        color: "#F7931E",
        accent: "from-[#F7931E]/30 to-[#3776AB]/20",
        description: "Training classic regression, classification, and clustering models for breast cancer detection and question difficulty."
      },
      {
        name: "tensorflow",
        label: "TensorFlow",
        icon: Flame,
        color: "#FF6F00",
        accent: "from-[#FF6F00]/30 to-[#FFD343]/20",
        description: "Building deep learning architectures, analyzing neural networks, and developing computer vision classifiers."
      }
    ]
  },
  {
    name: "Full Stack",
    eyebrow: "Product Engineering & UX Craft",
    description: "I engineer responsive, modern, and high-performance web applications using robust frontends and secure, data-backed backends.",
    skills: [
      {
        name: "react",
        label: "React",
        icon: Code2,
        color: "#61DAFB",
        accent: "from-[#61DAFB]/30 to-[#3b82f6]/20",
        description: "Developing interactive user interfaces, custom React hooks, state management, and optimized web render cycles."
      },
      {
        name: "nextjs",
        label: "Next.js",
        icon: Layers,
        color: "#FFFFFF",
        accent: "from-white/20 to-neutral-500/20",
        description: "Architecting server-side rendered (SSR) apps, dynamic API routing, static site generation, and core web vitals speed optimization."
      },
      {
        name: "typescript",
        label: "TypeScript",
        icon: Code2,
        color: "#3178C6",
        accent: "from-[#3178C6]/30 to-[#60a5fa]/20",
        description: "Writing scalable, self-documenting code with strong typing, strict compile configurations, and clean software architecture."
      },
      {
        name: "nodejs",
        label: "Node.js",
        icon: Terminal,
        color: "#339933",
        accent: "from-[#339933]/30 to-[#10b981]/20",
        description: "Building high-throughput REST APIs, middleware controllers, background processing, and real-time server logic."
      },
      {
        name: "django",
        label: "Django",
        icon: Server,
        color: "#092E20",
        accent: "from-[#092E20]/30 to-[#10b981]/20",
        description: "Developing secure backend structures, schema management, admin customization, and robust web service foundations."
      },
      {
        name: "fastapi",
        label: "FastAPI",
        icon: Zap,
        color: "#009688",
        accent: "from-[#009688]/30 to-[#06b6d4]/20",
        description: "Creating rapid asynchronous Python APIs with Pydantic validations, interactive Swagger docs, and excellent throughput."
      },
      {
        name: "mongodb",
        label: "MongoDB",
        icon: Database,
        color: "#47A248",
        accent: "from-[#47A248]/30 to-[#10b981]/20",
        description: "Designing flexible NoSQL databases, writing optimized aggregation pipelines, and structuring model collections."
      }
    ]
  },
  {
    name: "Cloud & DevOps",
    eyebrow: "Reliable Deployments & Systems",
    description: "I deploy applications with robust production infrastructures, automated deployments, containerization, and server configurations.",
    skills: [
      {
        name: "aws",
        label: "AWS EC2",
        icon: Cloud,
        color: "#FF9900",
        accent: "from-[#FF9900]/30 to-[#EAB308]/20",
        description: "Provisioning virtual servers, security groups, volume attachments, Elastic IPs, and maintaining cloud compute services."
      },
      {
        name: "docker",
        label: "Docker",
        icon: Box,
        color: "#2496ED",
        accent: "from-[#2496ED]/30 to-[#06b6d4]/20",
        description: "Containerizing services to guarantee environment consistency between local development and production staging."
      },
      {
        name: "nginx",
        label: "Nginx",
        icon: Server,
        color: "#009639",
        accent: "from-[#009639]/30 to-[#10b981]/20",
        description: "Configuring reverse proxies, SSL certificate termination with Let's Encrypt, traffic load balancing, and routing."
      },
      {
        name: "githubactions",
        label: "CI/CD Actions",
        icon: RefreshCw,
        color: "#2088FF",
        accent: "from-[#2088FF]/30 to-[#a855f7]/20",
        description: "Writing CI/CD build scripts, automated test workflows, and deploying container registries (GHCR) to virtual servers."
      },
      {
        name: "git",
        label: "Git & GitHub",
        icon: Github,
        color: "#F05032",
        accent: "from-[#F05032]/30 to-[#f87171]/20",
        description: "Managing source control, pull request reviews, feature branching patterns, and collaborative open-source contributions."
      },
      {
        name: "postgres",
        label: "PostgreSQL & Neon",
        icon: Database,
        color: "#4169E1",
        accent: "from-[#4169E1]/30 to-[#3b82f6]/20",
        description: "Structuring relational databases, writing optimized SQL joins, and deploying cloud-managed Neon serverless databases."
      },
      {
        name: "postman",
        label: "Postman",
        icon: FileCode,
        color: "#FF6C37",
        accent: "from-[#FF6C37]/30 to-[#f97316]/20",
        description: "Designing end-to-end API test suites, validating responses, mapping environments, and generating clean API docs."
      }
    ]
  }
];

export const Skills = () => {
  const [activeModeIndex, setActiveModeIndex] = useState(1); // Default to Full Stack
  const [activeSkillIndex, setActiveSkillIndex] = useState(0); // Default to first skill in that mode
  const [radius, setRadius] = useState(220);

  const activeMode = skillModes[activeModeIndex];
  const activeSkill = activeMode.skills[activeSkillIndex] || activeMode.skills[0];

  // Recalculate radius dynamically based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) {
        setRadius(120);
      } else if (window.innerWidth < 640) {
        setRadius(140);
      } else if (window.innerWidth < 1024) {
        setRadius(175);
      } else {
        setRadius(220);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // When changing modes, reset active skill to index 0
  const handleModeChange = (index: number) => {
    setActiveModeIndex(index);
    setActiveSkillIndex(0);
  };

  // Math variables for dome spacing
  const skillsCount = activeMode.skills.length;
  const startAngle = Math.PI; // 180 degrees
  const angleSpread = 150 * (Math.PI / 180); // 150 degrees spread
  const angleOffset = 15 * (Math.PI / 180); // 15 degrees offset from the sides

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-background">
      {/* Dynamic Background Glow corresponding to the active skill */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 h-[35rem] w-[35rem] rounded-full blur-[140px] opacity-25 transition-all duration-1000 -z-10"
        style={{ 
          background: `radial-gradient(circle, ${activeSkill.color} 0%, transparent 70%)` 
        }} 
      />
      <div className="absolute left-1/4 top-1/4 h-[25rem] w-[25rem] bg-indigo-500/5 rounded-full blur-[120px] -z-10" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-white/5 pb-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.28em] text-primary">Technical Arsenal</span>
            <h2 className="mt-4 text-4xl font-bold tracking-tight md:text-6xl">
              My core <span className="text-primary">expertise.</span>
            </h2>
          </div>
          
          {/* Mode Selector Tabs */}
          <div className="flex gap-2 mt-6 md:mt-0 p-1 bg-white/[0.03] border border-white/10 rounded-full">
            {skillModes.map((mode, index) => (
              <button
                key={mode.name}
                onClick={() => handleModeChange(index)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                  index === activeModeIndex
                    ? "bg-white text-black shadow-lg shadow-white/5"
                    : "text-foreground/60 hover:text-white"
                }`}
              >
                {mode.name}
              </button>
            ))}
          </div>
        </div>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center min-h-[500px]">
          
          {/* Left Column: Context Details */}
          <div className="flex flex-col justify-center">
            <span className="flex items-center gap-2 text-foreground/50 text-xs font-medium uppercase tracking-[0.25em] mb-4">
              <Sparkles className="size-4 text-primary animate-pulse" />
              {activeMode.eyebrow}
            </span>
            
            <h3 className="text-3xl md:text-5xl font-bold tracking-tight text-white mb-6">
              {activeMode.name} Universe
            </h3>
            
            <p className="text-foreground/75 text-lg leading-relaxed mb-8 max-w-xl">
              {activeMode.description}
            </p>

            {/* Glowing Interactive CTA Buttons matching Active Skill brand color */}
            <div className="flex items-center gap-6 mt-2">
              <a 
                href="#contact" 
                className="relative inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold text-black transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] group"
                style={{ 
                  backgroundColor: activeSkill.color,
                  boxShadow: `0 0 30px ${activeSkill.color}40`
                }}
              >
                {/* Glow Overlay */}
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Contact me</span>
              </a>
              
              <a 
                href="#projects" 
                className="group text-sm font-semibold flex items-center gap-2 text-foreground/70 hover:text-white transition-colors"
              >
                See projects 
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>

          {/* Right Column: Circular Dome Arch Visualization */}
          <div className="relative flex justify-center items-end min-h-[380px] sm:min-h-[440px] select-none">
            {/* Center Anchor Point at bottom 90% */}
            <div className="absolute left-1/2 bottom-[10%] -translate-x-1/2 w-full max-w-[400px] flex flex-col items-center">
              
              {/* Semi-circular dashed path representation */}
              <div 
                className="absolute left-1/2 bottom-0 -translate-x-1/2 border-t-2 border-dashed border-white/10 rounded-full -z-10"
                style={{ 
                  width: `${radius * 2}px`, 
                  height: `${radius * 2}px`,
                  bottom: `0px`
                }} 
              />

              {/* Central Glowing Active Card */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeSkill.name}
                  initial={{ opacity: 0, scale: 0.85, y: 15 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: 15 }}
                  transition={{ duration: 0.35 }}
                  className="flex flex-col items-center text-center p-6 rounded-3xl border border-white/10 bg-black/60 backdrop-blur-2xl w-[260px] sm:w-[300px] shadow-2xl relative"
                  style={{
                    boxShadow: `0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${activeSkill.color}15`
                  }}
                >
                  {/* brand-colored glowing spot behind the icon */}
                  <div 
                    className="absolute top-10 left-1/2 -translate-x-1/2 size-16 rounded-full blur-2xl opacity-80" 
                    style={{ backgroundColor: activeSkill.color }}
                  />

                  {/* Top brand icon wrapper */}
                  <div 
                    className="relative flex items-center justify-center size-20 rounded-full border border-white/20 bg-white/5 mb-5 shadow-inner"
                    style={{ borderColor: `${activeSkill.color}50` }}
                  >
                    <activeSkill.icon 
                      className="size-10 transition-transform duration-500 hover:rotate-12" 
                      style={{ color: activeSkill.color }} 
                    />
                  </div>

                  {/* Active Skill Title */}
                  <h4 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2">
                    {activeSkill.label}
                  </h4>

                  {/* Active Skill Description */}
                  <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed max-w-[240px]">
                    {activeSkill.description}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Render Skill Bubbles along the Dome Arc */}
            {activeMode.skills.map((skill, index) => {
              // Calculate angles from left to right (dome arch)
              // 0 index starts on the left (180 - 15 = 165 deg)
              // Last index ends on the right (180 - 15 - 150 = 15 deg)
              const angle = Math.PI - (angleOffset + (index / (skillsCount - 1)) * angleSpread);
              const x = radius * Math.cos(angle);
              const y = -radius * Math.sin(angle); // negative lifts it up in screen space

              const SkillIcon = skill.icon;
              const isActive = index === activeSkillIndex;

              return (
                <button
                  key={skill.name}
                  onClick={() => setActiveSkillIndex(index)}
                  onMouseEnter={() => setActiveSkillIndex(index)}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    bottom: `calc(10% + ${y}px)`,
                    transform: "translate(-50%, 50%)"
                  }}
                  className="absolute z-20 group outline-none"
                >
                  {/* Bubble Container */}
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      borderColor: isActive ? skill.color : "rgba(255,255,255,0.08)",
                      backgroundColor: isActive ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.02)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className={`flex items-center justify-center size-12 sm:size-14 rounded-full border backdrop-blur-md cursor-pointer shadow-lg`}
                    style={{
                      boxShadow: isActive 
                        ? `0 0 25px ${skill.color}35, inset 0 0 8px ${skill.color}25`
                        : "0 4px 12px rgba(0,0,0,0.3)"
                    }}
                  >
                    <SkillIcon 
                      className="size-5 sm:size-6 transition-all duration-300"
                      style={{ 
                        color: isActive ? skill.color : "rgba(255,255,255,0.4)",
                        filter: isActive ? `drop-shadow(0 0 4px ${skill.color}60)` : "none"
                      }}
                    />
                  </motion.div>

                  {/* Tooltip Label */}
                  <div className="absolute left-1/2 -top-8 -translate-x-1/2 bg-black/80 border border-white/10 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-white opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {skill.label}
                  </div>
                </button>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};
