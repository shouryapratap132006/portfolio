"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowLeft, Terminal, Sparkles } from "lucide-react";

// --- Vector Tech Logos (SVG components for premium rendering) ---

const PythonLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M12 2c-5.5 0-5 2-5 4v2h5v1H7c-2 0-4 .5-4 3v4c0 2.5 2 3 4 3h1.5v-2c0-1.5.5-3 2-3h5c1.5 0 2-.5 2-2V7c0-2-1-5-7.5-5zm-2.5 2a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" fill="#3776AB" />
    <path d="M12 22c5.5 0 5-2 5-4v-2h-5v-1h5c2 0 4-.5 4-3v-4c0-2.5-2-3-4-3h-1.5v2c0 1.5-.5 3-2 3h-5c-1.5 0-2 .5-2 2v5c0 2 1 5 7.5 5zm2.5-4a1 1 0 1 1 0-2 1 1 0 0 1 0 2z" fill="#FFD343" />
  </svg>
);

const ReactLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="#61DAFB" strokeWidth="1.2">
    <circle cx="12" cy="12" r="2" fill="#61DAFB" stroke="none" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(30 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(90 12 12)" />
    <ellipse cx="12" cy="12" rx="9" ry="3.5" transform="rotate(150 12 12)" />
  </svg>
);

const TypeScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#3178C6" />
    <text x="6" y="15" fill="white" fontSize="9" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">TS</text>
  </svg>
);

const JavaScriptLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#F7DF1E" />
    <text x="6.5" y="15" fill="black" fontSize="9" fontWeight="bold" fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif">JS</text>
  </svg>
);

const NodejsLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M12 2L4.3 6.4v8.8L12 19.6l7.7-4.4V6.4L12 2zm-1.1 13.9l-2.4-1.4V11l2.4 1.4v3.5zm3.5-2L12 15.3l-2.4-1.4V11l2.4 1.4 2.4-1.4v2.9z" fill="#339933" />
    <path d="M12 6.4L16.5 9l-2.1 1.2-2.4-1.4L7.5 10l-2.1-1.2L12 6.4z" fill="#66cc33" />
  </svg>
);

const DjangoLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <rect x="4" y="4" width="16" height="16" rx="2" fill="#092E20" />
    <text x="6" y="14.5" fill="white" fontSize="7.5" fontWeight="bold" fontFamily="serif" letterSpacing="0.2">dj</text>
  </svg>
);

const FastAPILogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="none">
    <g transform="scale(0.85) translate(2, 2)">
      <path d="M12 2L3.5 12.5h7.5V22l8.5-10.5h-7.5V2z" fill="#009688" />
      <path d="M12 2l-7.5 9h6.5v8.5l7.5-9h-6.5V2z" fill="#00F0D0" className="opacity-80" />
    </g>
  </svg>
);

const MongoDBLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M12 1.5C12 1.5 8 6.5 8 11.5C8 16.5 10.5 19.5 12 21.5C13.5 19.5 16 16.5 16 11.5C16 6.5 12 1.5 12 1.5ZM12 18.5C11.2 18.5 10.5 17.5 10.5 15.5C10.5 13.5 12 10.5 12 10.5C12 10.5 13.5 13.5 13.5 15.5C13.5 17.5 12.8 18.5 12 18.5Z" fill="#47A248" />
    <path d="M12 1.5c0 0 4 5 4 10s-4 7-4 10V1.5z" fill="#3F8A3F" />
  </svg>
);

const AWSLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="none">
    <g transform="scale(0.8) translate(3, 3)">
      <path d="M4 15.5c2 1 5.5 1.5 8 1.5s6-.5 8-1.5c-2.5-1-5.5-1.5-8-1.5s-5.5.5-8 1.5z" fill="#232F3E" />
      <path d="M4.5 16c2.5 1.5 5 2 7.5 2s5-.5 7.5-2c.5.5 0 1-.5 1.5-2 1.5-4.5 2-7 2s-5-.5-7-2c-.5-.5-1-1-.5-1.5z" fill="#FF9900" />
      <path d="M18.5 15c.5-.5.8-1 1-1.5s.1-1-.2-.5c-.5.5-1.5 1.2-2.3.8-.5-.2-1-.7-.8-1.3.2-.5 1-.8 1.8-.5l.8.3c.5.2.8 0 .5-.5-.5-.8-1.2-1.5-2.2-1.5-1.5 0-2.5 1-2.5 2.5s1 2.5 2.5 2.5c1 0 1.8-.5 2.4-1.3z" fill="#FF9900" />
    </g>
  </svg>
);

const DockerLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="#2496ED">
    <g transform="scale(0.85) translate(2, 2)">
      <path d="M2 12.3c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6v-1.7c0-.3-.2-.5-.5-.5H2.5c-.3 0-.5.2-.5.5v1.7zm4 0c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6v-1.7c0-.3-.2-.5-.5-.5H6.5c-.3 0-.5.2-.5.5v1.7zm4 0c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6v-1.7c0-.3-.2-.5-.5-.5H10.5c-.3 0-.5.2-.5.5v1.7zm-8-3.7c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6V6.9c0-.3-.2-.6-.5-.6H2.5c-.3 0-.5.3-.5.6v1.7zm4 0c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6V6.9c0-.3-.2-.6-.5-.6H6.5c-.3 0-.5.3-.5.6v1.7zm4 0c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6V6.9c0-.3-.2-.6-.5-.6H10.5c-.3 0-.5.3-.5.6v1.7zm1.5 7.4c.3 0 .5-.3.5-.6v-1.7c0-.3-.2-.5-.5-.5H10.8c-.3 0-.5.2-.5.5v1.7c0 .3.2.6.5.6h1.7zm4-2.2c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6v-1.7c0-.3-.2-.5-.5-.5H17c-.3 0-.5.2-.5.5v1.7zm-4-3.7c0 .3.2.6.5.6h1.7c.3 0 .5-.3.5-.6V6.9c0-.3-.2-.6-.5-.6h-1.7c-.3 0-.5.3-.5.6v1.7zm6.5 2.7c-1-1-2.5-1.5-4-1.5H3.5C2 12 .5 13.2.5 14.8c0 3 2.5 5.2 5.5 5.2h12c3 0 5.5-2.2 5.5-5.2 0-.5-.3-1-.8-1.3z" />
    </g>
  </svg>
);

const NginxLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <circle cx="12" cy="12" r="11" fill="#009639" />
    <path d="M7.5 7v10l9-10v10" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const GitHubActionsLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="#2088FF" strokeWidth="2.2">
    <rect x="2" y="2" width="20" height="20" rx="4" fill="#0d1117" />
    <path d="M6 18V9a3 3 0 0 1 3-3h6a3 3 0 0 1 3 3v9M9 18l3-3 3 3" />
  </svg>
);

const GitLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <g transform="scale(0.85) translate(2, 2)">
      <path d="M23.3 11.5L12.5.7c-.8-.8-2-.8-2.8 0L8.5 2.0l3.0 3.0c.7-.2 1.6 0 2.2.6.6.6.8 1.5.6 2.2l3.0 3.0c.7-.2 1.6 0 2.2.6.8.8.8 2.1 0 2.9-.8.8-2.1.8-2.9 0-.6-.6-.8-1.5-.6-2.2l-3.0-3.0c-.2.2-.5.3-.8.3-.3 0-.6-.1-.8-.3L6.9 6.2 1.5 11.5c-.8.8-.8 2 0 2.8l10.8 10.8c.8.8 2 .8 2.8 0l10.8-10.8c.8-.8.8-2 0-2.8z" fill="#F05032" />
    </g>
  </svg>
);

const PostgreSQLLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M12 2C7.5 2 4.5 4.5 4.5 8c0 2 1 3.5 3 4.5-.5.5-1 1-1.5 2-.5-1-1.5-1.5-2.5-1.5h-1v2h1c.8 0 1.5.5 1.8 1.2L6 18c0 1.5 1.5 3 3 3.5.5.2 1 .3 1.5.3 3.5 0 6.5-2.5 7.5-6 1.5.5 2.5.5 3.5-.5 1-1 1-2.5.5-3.5L21 11c1-1.5 1-3.5-.5-4.8-1.2-1-2.8-1.5-4.5-1.5-1 0-2.5.2-4 .8V2z" fill="#4169E1" />
  </svg>
);

const PostmanLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 14.5l-2-2.5-2 2.5V8.5h4v8z" fill="#FF6C37" />
  </svg>
);

const LangGraphLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="#A855F7" strokeWidth="2.2">
    <circle cx="12" cy="5" r="3.5" fill="#A855F7" />
    <circle cx="6" cy="14" r="3.5" fill="#EC4899" />
    <circle cx="18" cy="14" r="3.5" fill="#06B6D4" />
    <circle cx="12" cy="20" r="3.5" fill="#10B981" />
    <line x1="12" y1="8.5" x2="6" y2="10.5" />
    <line x1="12" y1="8.5" x2="18" y2="10.5" />
    <line x1="6" y1="14" x2="12" y2="16.5" />
    <line x1="18" y1="14" x2="12" y2="16.5" />
  </svg>
);

const ScikitLearnLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <ellipse cx="9" cy="12" rx="6" ry="3.2" fill="#F7931E" transform="rotate(-30 9 12)" />
    <ellipse cx="15" cy="12" rx="6" ry="3.2" fill="#3776AB" transform="rotate(30 15 12)" />
  </svg>
);

const TensorFlowLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M12 2L3.5 7v10L12 22l8.5-5V7L12 2zm0 3.5l5.2 3v7l-5.2 3-5.2-3v-7l5.2-3z" fill="#FF6F00" />
    <path d="M12 5.5v13.5l5.2-3v-7.5z" fill="#E05B00" />
  </svg>
);

const NextjsLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <circle cx="12" cy="12" r="11" fill="white" />
    <circle cx="12" cy="12" r="10.5" fill="black" />
    <path d="M16.5 17.5l-5-7.5H10v7.5h1.2v-5.2l4.8 7.2h.5z" fill="white" />
    <path d="M15 9.5h1.2v5h-1.2z" fill="white" />
  </svg>
);

const HTML5Logo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M1.5 22L0 2h24l-1.5 20L12 24z" fill="#E34F26" />
    <path d="M12 22l8.5-2.3L22 4H12z" fill="#F06529" />
    <path d="M12 11.5H8.3l-.2-2.5H12V6.5H5.4l.6 7.5H12zm0 5l-3.5-1-.2-2H5.8l.5 5.5 5.7 1.5z" fill="white" />
  </svg>
);

const CSS3Logo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <path d="M1.5 22L0 2h24l-1.5 20L12 24z" fill="#1572B6" />
    <path d="M12 22l8.5-2.3L22 4H12z" fill="#33A9DC" />
    <path d="M12 11.5H6.2l.2 2.5H12zm0-5H5.8l.2 2.5H12zm0 10l-3.5-1-.2-2H5.8l.5 5.5 5.7 1.5z" fill="white" />
  </svg>
);

const FramerMotionLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full" fill="none">
    <path d="M0 0h12v12H0zm0 12h12v12H0zm12-12h12v12H12z" fill="#00C7FF" />
    <path d="M12 12h12v12H12z" fill="#FF00FF" />
  </svg>
);

const FigmaLogo = () => (
  <svg viewBox="0 0 24 24" className="size-full">
    <circle cx="8" cy="18" r="4" fill="#0acf83" />
    <path d="M8 2a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4V2z" fill="#f24e1e" />
    <path d="M16 2a4 4 0 0 0-4 4v4h4a4 4 0 0 0 4-4 4 4 0 0 0-4-4z" fill="#ff7262" />
    <path d="M8 10a4 4 0 0 0-4 4 4 4 0 0 0 4 4h4v-8z" fill="#a259ff" />
    <circle cx="16" cy="14" r="4" fill="#1abc9c" />
  </svg>
);

// Map of real logos mapping by string ID
const logoMap: Record<string, React.FC> = {
  python: PythonLogo,
  langgraph: LangGraphLogo,
  rag: PostgreSQLLogo, 
  llms: SparklesLogo,  
  scikit: ScikitLearnLogo,
  tensorflow: TensorFlowLogo,
  react: ReactLogo,
  nextjs: NextjsLogo,
  typescript: TypeScriptLogo,
  nodejs: NodejsLogo,
  django: DjangoLogo,
  fastapi: FastAPILogo,
  mongodb: MongoDBLogo,
  aws: AWSLogo,
  docker: DockerLogo,
  nginx: NginxLogo,
  githubactions: GitHubActionsLogo,
  git: GitLogo,
  postgres: PostgreSQLLogo,
  postman: PostmanLogo,
  javascript: JavaScriptLogo,
  html5: HTML5Logo,
  css3: CSS3Logo,
  framermotion: FramerMotionLogo,
  figma: FigmaLogo
};

function SparklesLogo() {
  return (
    <svg viewBox="0 0 24 24" className="size-full" fill="none" stroke="#F97316" strokeWidth="2">
      <path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8" strokeLinecap="round"/>
    </svg>
  );
}

// Skill item type definition
interface Skill {
  name: string;
  label: string;
  logo: React.ComponentType<any>;
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
        logo: PythonLogo,
        color: "#3776AB",
        accent: "from-[#3776AB]/30 to-[#FFD343]/20",
        description: "Core language for data analysis, model training, and building scalable backend reasoning systems."
      },
      {
        name: "langgraph",
        label: "LangGraph",
        logo: LangGraphLogo,
        color: "#A855F7",
        accent: "from-[#A855F7]/30 to-[#EC4899]/20",
        description: "Creating stateful, multi-agent workflows with complex branching logic, persistence, and human-in-the-loop control."
      },
      {
        name: "rag",
        label: "RAG & FAISS",
        logo: PostgreSQLLogo,
        color: "#10B981",
        accent: "from-[#10B981]/30 to-[#06B6D4]/20",
        description: "Implementing retrieval-augmented generation using semantic search, dense embeddings, and high-performance vector databases."
      },
      {
        name: "llms",
        label: "LLM API Integrations",
        logo: SparklesLogo,
        color: "#F97316",
        accent: "from-[#F97316]/30 to-[#EAB308]/20",
        description: "Deploying intelligent services utilizing OpenAI, Gemini, and open-source models for context-aware text and image reasoning."
      },
      {
        name: "scikit",
        label: "Scikit-Learn",
        logo: ScikitLearnLogo,
        color: "#F7931E",
        accent: "from-[#F7931E]/30 to-[#3776AB]/20",
        description: "Training classic regression, classification, and clustering models for breast cancer detection and question difficulty."
      },
      {
        name: "tensorflow",
        label: "TensorFlow",
        logo: TensorFlowLogo,
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
        logo: ReactLogo,
        color: "#61DAFB",
        accent: "from-[#61DAFB]/30 to-[#3b82f6]/20",
        description: "Developing interactive user interfaces, custom React hooks, state management, and optimized web render cycles."
      },
      {
        name: "nextjs",
        label: "Next.js",
        logo: NextjsLogo,
        color: "#FFFFFF",
        accent: "from-white/20 to-neutral-500/20",
        description: "Architecting server-side rendered (SSR) apps, dynamic API routing, static site generation, and core web vitals speed optimization."
      },
      {
        name: "typescript",
        label: "TypeScript",
        logo: TypeScriptLogo,
        color: "#3178C6",
        accent: "from-[#3178C6]/30 to-[#60a5fa]/20",
        description: "Writing scalable, self-documenting code with strong typing, strict compile configurations, and clean software architecture."
      },
      {
        name: "nodejs",
        label: "Node.js",
        logo: NodejsLogo,
        color: "#339933",
        accent: "from-[#339933]/30 to-[#10b981]/20",
        description: "Building high-throughput REST APIs, middleware controllers, background processing, and real-time server logic."
      },
      {
        name: "django",
        label: "Django",
        logo: DjangoLogo,
        color: "#092E20",
        accent: "from-[#092E20]/30 to-[#10b981]/20",
        description: "Developing secure backend structures, schema management, admin customization, and robust web service foundations."
      },
      {
        name: "fastapi",
        label: "FastAPI",
        logo: FastAPILogo,
        color: "#009688",
        accent: "from-[#009688]/30 to-[#06b6d4]/20",
        description: "Creating rapid asynchronous Python APIs with Pydantic validations, interactive Swagger docs, and excellent throughput."
      },
      {
        name: "mongodb",
        label: "MongoDB",
        logo: MongoDBLogo,
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
        logo: AWSLogo,
        color: "#FF9900",
        accent: "from-[#FF9900]/30 to-[#EAB308]/20",
        description: "Provisioning virtual servers, security groups, volume attachments, Elastic IPs, and maintaining cloud compute services."
      },
      {
        name: "docker",
        label: "Docker",
        logo: DockerLogo,
        color: "#2496ED",
        accent: "from-[#2496ED]/30 to-[#06b6d4]/20",
        description: "Containerizing services to guarantee environment consistency between local development and production staging."
      },
      {
        name: "nginx",
        label: "Nginx",
        logo: NginxLogo,
        color: "#009639",
        accent: "from-[#009639]/30 to-[#10b981]/20",
        description: "Configuring reverse proxies, SSL certificate termination with Let's Encrypt, traffic load balancing, and routing."
      },
      {
        name: "githubactions",
        label: "CI/CD Actions",
        logo: GitHubActionsLogo,
        color: "#2088FF",
        accent: "from-[#2088FF]/30 to-[#a855f7]/20",
        description: "Writing CI/CD build scripts, automated test workflows, and deploying container registries (GHCR) to virtual servers."
      },
      {
        name: "git",
        label: "Git & GitHub",
        logo: GitLogo,
        color: "#F05032",
        accent: "from-[#F05032]/30 to-[#f87171]/20",
        description: "Managing source control, pull request reviews, feature branching patterns, and collaborative open-source contributions."
      },
      {
        name: "postgres",
        label: "PostgreSQL & Neon",
        logo: PostgreSQLLogo,
        color: "#4169E1",
        accent: "from-[#4169E1]/30 to-[#3b82f6]/20",
        description: "Structuring relational databases, writing optimized SQL joins, and deploying cloud-managed Neon serverless databases."
      },
      {
        name: "postman",
        label: "Postman",
        logo: PostmanLogo,
        color: "#FF6C37",
        accent: "from-[#FF6C37]/30 to-[#f97316]/20",
        description: "Designing end-to-end API test suites, validating responses, mapping environments, and generating clean API docs."
      }
    ]
  }
];

// Flat lists of all skills categorized for the slide-down view
const slideDownCategories = [
  {
    name: "AI & Machine Learning",
    skills: [
      { name: "python", label: "Python" },
      { name: "langgraph", label: "LangGraph" },
      { name: "rag", label: "RAG Systems" },
      { name: "llms", label: "LLM Integrations" },
      { name: "scikit", label: "Scikit-Learn" },
      { name: "tensorflow", label: "TensorFlow" }
    ]
  },
  {
    name: "Full Stack Engineering",
    skills: [
      { name: "react", label: "React" },
      { name: "nextjs", label: "Next.js" },
      { name: "typescript", label: "TypeScript" },
      { name: "javascript", label: "JavaScript" },
      { name: "nodejs", label: "Node.js" },
      { name: "django", label: "Django" },
      { name: "fastapi", label: "FastAPI" },
      { name: "mongodb", label: "MongoDB" }
    ]
  },
  {
    name: "Cloud, Systems & Design",
    skills: [
      { name: "aws", label: "AWS EC2" },
      { name: "docker", label: "Docker" },
      { name: "nginx", label: "Nginx" },
      { name: "githubactions", label: "GitHub Actions" },
      { name: "git", label: "Git Control" },
      { name: "postgres", label: "PostgreSQL" },
      { name: "postman", label: "Postman" },
      { name: "html5", label: "HTML5" },
      { name: "css3", label: "CSS3" },
      { name: "framermotion", label: "Framer Motion" },
      { name: "figma", label: "Figma" }
    ]
  }
];

export const Skills = () => {
  const [activeModeIndex, setActiveModeIndex] = useState(1); 
  const [activeSkillIndex, setActiveSkillIndex] = useState(0); 
  const [radius, setRadius] = useState(210);
  const [sliderProgress, setSliderProgress] = useState(0);

  const sliderRef = useRef<HTMLDivElement>(null);
  const activeMode = skillModes[activeModeIndex];
  const activeSkill = activeMode.skills[activeSkillIndex] || activeMode.skills[0];

  // Dynamic layout offsets to avoid overlapping the central display
  const centerOffsetY = 190; 

  // Flat array of all flat skills for slide carousel
  const allFlatSkills = skillModes.flatMap(mode => 
    mode.skills.map(skill => ({
      ...skill,
      domain: mode.name
    }))
  );

  // Recalculate radius dynamically based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 400) {
        setRadius(95);
      } else if (window.innerWidth < 480) {
        setRadius(115);
      } else if (window.innerWidth < 640) {
        setRadius(135);
      } else if (window.innerWidth < 1024) {
        setRadius(155);
      } else if (window.innerWidth < 1280) {
        setRadius(175);
      } else {
        setRadius(200);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleModeChange = (index: number) => {
    setActiveModeIndex(index);
    setActiveSkillIndex(0);
  };

  const skillsCount = activeMode.skills.length;
  const angleSpread = 150 * (Math.PI / 180); 
  const angleOffset = 15 * (Math.PI / 180); 

  // Slider navigation scroll trigger
  const scrollSkills = (direction: "left" | "right") => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({
        left: direction === "left" ? -280 : 280,
        behavior: "smooth"
      });
    }
  };

  const handleSliderScroll = () => {
    if (sliderRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = sliderRef.current;
      const scrollableWidth = scrollWidth - clientWidth;
      if (scrollableWidth > 0) {
        setSliderProgress(scrollLeft / scrollableWidth);
      } else {
        setSliderProgress(0);
      }
    }
  };

  return (
    <section id="skills" className="relative py-28 overflow-hidden bg-background">
      {/* Background Glow */}
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
          
          <div className="flex gap-2 mt-6 md:mt-0 p-1 bg-white/[0.03] border border-white/10 rounded-full">
            {skillModes.map((mode, index) => (
              <button
                key={mode.name}
                onClick={() => handleModeChange(index)}
                className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
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

            {/* CTA Buttons */}
            <div className="flex items-center gap-6 mt-2">
              <a 
                href="#contact" 
                className="relative inline-flex items-center justify-center rounded-full px-8 py-3.5 text-sm font-bold text-black transition-all duration-500 overflow-hidden shadow-[0_0_20px_rgba(255,255,255,0.05)] group"
                style={{ 
                  backgroundColor: activeSkill.color,
                  boxShadow: `0 0 30px ${activeSkill.color}40`
                }}
              >
                <span className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                <span className="relative">Contact me</span>
              </a>
            </div>
          </div>

          {/* Right Column: Dome Visualization with Real Logos and Statically Flowing Elements */}
          <div className="relative flex justify-center items-end min-h-[460px] sm:min-h-[520px] w-full overflow-visible pb-8">
            
            {/* Semi-circular dashed path */}
            <div 
              className="absolute border border-dashed border-white/10 rounded-full -z-10"
              style={{ 
                width: `${radius * 2}px`, 
                height: `${radius * 2}px`,
                left: "50%",
                bottom: `${centerOffsetY}px`,
                transform: "translate(-50%, 50%)"
              }} 
            />

            {/* Unified central flex details container positioned below the arch center to completely avoid overlaps */}
            <div className="absolute left-1/2 bottom-[10px] -translate-x-1/2 z-10 flex flex-col items-center text-center w-[290px] pointer-events-none">
              
              {/* Active Skill Icon Wrapper */}
              <div 
                className="relative flex items-center justify-center size-20 rounded-full border border-white/10 bg-black/60 p-4 mb-4 backdrop-blur-sm transition-all duration-300"
                style={{ 
                  boxShadow: `0 0 30px ${activeSkill.color}25`
                }}
              >
                <div 
                  className="absolute inset-0 rounded-full blur-2xl opacity-60 -z-10"
                  style={{ backgroundColor: activeSkill.color }}
                />
                <div className="size-full flex items-center justify-center">
                  <activeSkill.logo />
                </div>
              </div>

              {/* Active Skill Title */}
              <h4 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white mb-2">
                {activeSkill.label}
              </h4>

              {/* Active Skill Description */}
              <p className="text-xs sm:text-sm text-foreground/60 leading-relaxed max-w-[240px]">
                {activeSkill.description}
              </p>
            </div>

            {/* Bubble list placed along the dome (safely arches over the text container) */}
            {activeMode.skills.map((skill, index) => {
              const angle = Math.PI - (angleOffset + (index / (skillsCount - 1)) * angleSpread);
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle); 

              const SkillLogo = skill.logo;
              const isActive = index === activeSkillIndex;

              return (
                <button
                  key={skill.name}
                  onClick={() => setActiveSkillIndex(index)}
                  onMouseEnter={() => setActiveSkillIndex(index)}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    bottom: `calc(${centerOffsetY}px + ${y}px)`,
                    transform: "translate(-50%, 50%)"
                  }}
                  className="absolute z-20 group outline-none cursor-pointer"
                >
                  <motion.div
                    animate={{
                      scale: isActive ? 1.25 : 1,
                      borderColor: isActive ? skill.color : "rgba(255,255,255,0.08)",
                      backgroundColor: isActive ? "rgba(0,0,0,0.85)" : "rgba(255,255,255,0.02)"
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                    className="flex items-center justify-center size-12 sm:size-14 rounded-full border backdrop-blur-md p-3 shadow-lg"
                    style={{
                      boxShadow: isActive 
                        ? `0 0 25px ${skill.color}35, inset 0 0 8px ${skill.color}25`
                        : "0 4px 12px rgba(0,0,0,0.3)"
                    }}
                  >
                    <div className="size-full flex items-center justify-center">
                      <SkillLogo />
                    </div>
                  </motion.div>

                  <div className="absolute left-1/2 -top-8 -translate-x-1/2 bg-black/85 border border-white/10 px-2 py-0.5 rounded text-[10px] font-semibold tracking-wider text-white opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {skill.label}
                  </div>
                </button>
              );
            })}
          </div>

        </div>

        {/* Permanent Horizontal Scroll Carousel - (Removed AnimatePresence & isExpanded toggle checks) */}
        <div className="w-full border-t border-white/10 mt-16 pt-16">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between mb-10">
            <div>
              <h3 className="text-2xl md:text-4xl font-bold tracking-tight text-white">
                Complete Skills Directory
              </h3>
              <p className="text-foreground/60 text-sm mt-2">
                Scroll through my comprehensive technology index.
              </p>
            </div>
            
            {/* Arrow navigation */}
            <div className="flex gap-2 self-start sm:self-auto">
              <button 
                onClick={() => scrollSkills("left")}
                className="flex items-center justify-center size-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ArrowLeft className="size-4" />
              </button>
              <button 
                onClick={() => scrollSkills("right")}
                className="flex items-center justify-center size-10 rounded-full border border-white/15 bg-white/5 text-white hover:bg-white/10 transition-colors cursor-pointer"
              >
                <ArrowRight className="size-4" />
              </button>
            </div>
          </div>

          {/* Slider list */}
          <div 
            ref={sliderRef}
            onScroll={handleSliderScroll}
            className="no-scrollbar flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth"
          >
            {allFlatSkills.map((skill) => {
              const Logo = logoMap[skill.name] || Terminal;
              return (
                <div 
                  key={skill.name}
                  className="snap-start shrink-0 w-[280px] p-6 rounded-3xl border border-white/5 bg-white/[0.01] hover:border-white/10 transition-all duration-300 relative group"
                >
                  <div 
                    className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border"
                    style={{ borderColor: `${skill.color}30` }}
                  />
                  
                  <div 
                    className="flex items-center justify-center size-14 rounded-2xl border border-white/10 bg-white/[0.03] p-3 mb-5 transition-transform duration-300 group-hover:scale-105"
                    style={{ borderColor: `${skill.color}20` }}
                  >
                    <Logo />
                  </div>

                  <h4 className="text-lg font-bold text-white mb-1.5">
                    {skill.label}
                  </h4>

                  <span className="text-[9px] uppercase font-bold tracking-wider text-primary mb-4 block">
                    {skill.domain}
                  </span>

                  <p className="text-xs text-foreground/60 leading-relaxed line-clamp-3">
                    {skill.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Progress scroll slide bar */}
          <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mx-auto mt-6 relative">
            <motion.div 
              className="h-full bg-primary rounded-full" 
              style={{ width: `${sliderProgress * 100}%` }}
            />
          </div>
        </div>

      </div>
    </section>
  );
};
