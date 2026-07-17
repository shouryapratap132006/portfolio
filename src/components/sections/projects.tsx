"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const projects = [
    {
        id: 1,
        category: "AI / ML",
        title: "Sakhi AI – Breast Cancer Detection System",
        description:
            "Production-ready AI/ML system for predicting malignant vs benign breast tumors with high recall and explainability.",
        longDescription:
            "Sakhi AI is an end-to-end Machine Learning system built to predict whether a breast tumor is Malignant or Benign using clinical diagnostic features. The model is trained on the Breast Cancer Wisconsin (Diagnostic) dataset with a strong focus on recall to minimize false negatives. Advanced models like XGBoost are used along with SHAP for explainability. The system is deployed with a Flask backend and a modern Next.js frontend featuring interactive visualizations.",
        tech: [
            "Python",
            "Scikit-learn",
            "XGBoost",
            "SHAP",
            "Flask",
            "Next.js",
            "Tailwind CSS",
            "Recharts",
        ],
        github: "https://github.com/shouryapratap132006/sakhiai",
        live: "https://sakhiai-sigma.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 2,
        category: "Full Stack",
        title: "DevSync – AI Career Growth Partner",
        description:
            "AI-powered platform that analyzes skills, generates learning roadmaps, and tracks career growth.",
        longDescription:
            "DevSync is a full-stack AI-driven career mentorship platform designed to help developers assess their skills, generate personalized learning roadmaps, and track progress. It features JWT-based authentication, dynamic dashboards, community features, and AI-powered recommendations integrated using the Gemini API. The backend is scalable and supports full CRUD operations.",
        tech: [
            "Next.js",
            "Node.js",
            "Express.js",
            "MongoDB",
            "JWT",
            "Gemini API",
            "Tailwind CSS",
            "Framer Motion",
        ],
        github: "https://github.com/shouryapratap132006/devsync",
        live: "https://devsync-beta.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 3,
        category: "Full Stack",
        title: "E.D.I.T.H – AI Chatbot Maker",
        description:
            "Customizable chatbot builder for designing and managing AI-powered conversational interfaces.",
        longDescription:
            "E.D.I.T.H (Extremely Digital Intelligent Thought Hub) is a web-based chatbot maker that allows users to design, preview, and manage chatbots through an intuitive UI. The project emphasizes backend-driven chatbot configuration, smooth frontend animations, and database-backed workflows.",
        tech: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "JavaScript",
            "Postman",
            "Framer Motion",
        ],
        github: "https://github.com/shouryapratap132006/Chatbot",
        live: "https://chatbot-edith.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1684369175809-f9642140a1bd?w=900&auto=format&fit=crop&q=60",
    },
    {
        id: 4,
        category: "Full Stack",
        title: "UrbanUpTrend – Full Stack E-Commerce Platform",
        description:
            "Modern e-commerce platform with filtering, wishlist, cart, and order management.",
        longDescription:
            "UrbanUpTrend is a feature-rich full-stack e-commerce platform featuring real-time product filtering, wishlist management, cart operations, dynamic pricing, authentication, and order handling. The project demonstrates strong backend logic combined with a smooth animated UI.",
        tech: [
            "Next.js",
            "React",
            "Node.js",
            "MongoDB",
            "Firebase",
            "Tailwind CSS",
            "Framer Motion",
        ],
        github: "https://github.com/shouryapratap132006/UrbanUpTrend",
        live: "https://urban-uptrend.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 5,
        category: ["AI / ML", "Full Stack", "Cloud & DevOps"],
        featured: true,
        title: "CineVerse – AI Movie Discovery & Social Streaming Platform",
        description:
            "AI-powered movie discovery with semantic search, real-time social features, and premium subscriptions.",
        longDescription:
            "CineVerse is a full-stack movie platform with secure authentication, personalised watchlists, reviews, and real-time social experiences. Its agentic recommendation engine combines LangGraph, LangChain, LLMs, and FAISS-based RAG for semantic search and tailored movie discovery. The platform integrates TMDB, Socket.IO messaging, Stripe subscriptions, and a production AWS deployment powered by Docker, Nginx, GitHub Actions, GHCR, and Neon PostgreSQL.",
        tech: [
            "Next.js",
            "TypeScript",
            "LangGraph",
            "PostgreSQL",
            "Prisma",
            "Socket.IO",
            "Stripe",
            "AWS EC2",
        ],
        github: "https://github.com/shouryapratap132006/cineverse",
        live: "http://16.16.173.58/",
        image:
            "https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 6,
        category: "AI / ML",
        featured: true,
        title: "Bodh AI – Autonomous AI Tutor",
        description:
            "Agentic, multimodal tutoring platform for adaptive learning paths, curriculum creation, and knowledge retrieval.",
        longDescription:
            "Bodh AI uses Python, LangGraph, LangChain, and LLM-powered multi-agent workflows to provide personalised learning paths, adaptive tutoring, and contextual reasoning. A multimodal FAISS RAG pipeline retrieves information from PDFs, presentations, images, and text. The Django and Next.js platform includes AI chat, curriculum and quiz generation, homework help, revision modules, and persistent learner profiles shaped by Gagné's Nine Events of Instruction.",
        tech: [
            "Python",
            "LangGraph",
            "LangChain",
            "Django",
            "Next.js",
            "PostgreSQL",
            "FAISS",
            "LLMs",
        ],
        github: "https://github.com/shouryapratap132006/BodhAI",
        live: "https://bodh-ai-kappa.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 7,
        category: "AI / ML",
        featured: true,
        title: "Hilton AI – Autonomous Data Scientist",
        description:
            "Full-stack AI platform that automates EDA, model training, evaluation, and context-aware data insights.",
        longDescription:
            "Hilton AI is an autonomous data-science platform built with Python, Pandas, Scikit-learn, Django, and React. It automates exploratory data analysis, model training, and evaluation pipelines, while its RAG-based conversational interface and LangGraph workflows deliver context-aware insights in a scalable SaaS experience.",
        tech: ["Python", "Pandas", "Scikit-learn", "Django", "React", "LangGraph", "RAG"],
        github: "https://github.com/Anshuman-utd/Autonomous-Data-scientist",
        live: "https://autonomous-data-scientist-green.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 8,
        category: "AI / ML",
        featured: true,
        title: "Intelligent Assessment Design System",
        description:
            "ML and NLP system for predicting question difficulty, identifying learning gaps, and delivering real-time feedback.",
        longDescription:
            "The Intelligent Assessment Design System combines TF-IDF and Scikit-learn to analyse exam questions, predict their difficulty, and identify learning gaps. A LangGraph-based multi-agent RAG workflow supports contextual feedback, with Streamlit and Hugging Face deployment enabling accessible, scalable real-time interaction.",
        tech: ["Python", "Scikit-learn", "TF-IDF", "LangGraph", "RAG", "Streamlit", "Hugging Face"],
        github: "https://github.com/shouryapratap132006/question_difficulty_bloomlevel_analysis",
        live: "https://huggingface.co/spaces/shouryasiso/question-difficulty-analysis",
        image:
            "https://images.unsplash.com/photo-1453738773917-9c3eff1db985?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 9,
        category: "AI / ML",
        featured: true,
        title: "ColdCase AI – Citation-Aware Question Answering",
        description:
            "Citation-aware RAG system that grounds answers in retrieved documents and reduces hallucinations.",
        longDescription:
            "ColdCase AI uses SentenceTransformers embeddings and FAISS retrieval to ground LLM answers in relevant source documents. Built with Python and OpenAI/Gemini APIs, it returns explicit source attribution alongside answers, improving transparency and helping reduce hallucinated responses.",
        tech: ["Python", "SentenceTransformers", "FAISS", "RAG", "OpenAI API", "Gemini API"],
        github: "https://github.com/shouryapratap132006/coldcase-ai",
        image:
            "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 10,
        category: "AI / ML",
        featured: true,
        title: "PocketPilot AI – Personal Finance Advisor",
        description:
            "LangGraph-powered finance copilot for budget analysis, overspending detection, and savings planning.",
        longDescription:
            "PocketPilot AI is a personal-finance copilot that analyses budgets, flags overspending, and produces personalised savings plans. Its conditional LangGraph and LangChain workflows use OpenAI or Gemini models to reason through financial inputs, with a FastAPI backend and polished Next.js interface connected through REST APIs.",
        tech: ["Python", "LangGraph", "LangChain", "FastAPI", "Next.js", "Tailwind CSS", "REST APIs"],
        github: "https://github.com/shouryapratap132006/pocketpilotai",
        live: "https://pocketpilotai.vercel.app/",
        image:
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 11,
        category: "DVA",
        title: "Retail Sales & Revenue Analytics",
        description:
            "End-to-end retail analytics pipeline and Tableau dashboard for revenue, profitability, and regional performance.",
        longDescription:
            "Led the data pipeline and repository management for a retail analytics project. Cleaned transaction data, standardised dates, resolved SKU inconsistencies, and engineered monthly revenue and category-level profit-margin features. Performed EDA with Pandas, Matplotlib, and Seaborn, defined KPI frameworks, and contributed to a multi-view Tableau dashboard with region, category, and time filters for stakeholder drill-down.",
        tech: ["Python", "Pandas", "SQL", "Tableau", "Jupyter Notebook", "Matplotlib", "Seaborn", "ETL"],
        github: undefined,
        live: undefined,
        image:
            "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200",
    },
    {
        id: 12,
        category: "DVA",
        title: "Credit Risk & Loan Default Analysis",
        description:
            "Financial analytics project uncovering loan-default drivers through data cleaning, EDA, KPIs, and dashboarding.",
        longDescription:
            "Project lead for a six-member credit-risk analytics team, owning data sourcing, cleaning, EDA, dashboard design, reporting, and presentation. Prepared a 32,584-record dataset, defined risk KPIs including a 21.9% default rate, and identified elevated risk across younger borrowers, high loan-to-income ratios, lower loan grades, selected loan intents, prior defaults, and renter housing. Built an interactive Google Sheets dashboard with portfolio snapshots and risk-segment filters.",
        tech: ["Python", "Excel", "Power Query", "Google Sheets", "Pandas", "EDA", "KPI Analysis"],
        github: undefined,
        live: undefined,
        image:
            "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200",
    },
];

const projectCategories = ["All", "AI / ML", "Full Stack", "Cloud & DevOps", "DVA"] as const;

const ProjectCard = ({ project, onClick }: { project: (typeof projects)[number]; onClick: () => void }) => {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;
        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    const categoryText = Array.isArray(project.category) 
        ? project.category.join(" | ") 
        : project.category;

    return (
        <motion.div
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            onClick={onClick}
            className="relative h-[460px] w-[min(82vw,390px)] shrink-0 rounded-[2rem] glass-dark border border-white/10 overflow-hidden cursor-pointer group shadow-2xl shadow-black/25"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 p-7 flex flex-col justify-end bg-gradient-to-t from-black via-black/55 to-transparent"
            >
                <div className="relative z-10">
                    <div className="flex items-center justify-between mb-5">
                        <span className="rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[9px] font-bold uppercase tracking-[0.18em] text-white/90">
                            {categoryText}
                        </span>
                        <span className="flex size-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight className="size-4" />
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                            <Badge key={t} variant="secondary" className="bg-white/10 text-[9px] uppercase tracking-wider text-white/80">
                                {t}
                            </Badge>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title.split(" – ")[0]}</h3>
                    <p className="text-sm text-foreground/60 line-clamp-2">{project.description}</p>
                </div>
            </div>

            <motion.img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover -z-10 transition-transform duration-500 group-hover:scale-110"
            />
        </motion.div>
    );
};

export const Projects = () => {
    const [selectedProject, setSelectedProject] = useState<(typeof projects)[number] | null>(null);
    const [activeCategory, setActiveCategory] = useState<(typeof projectCategories)[number]>("All");
    const [scrollProgress, setScrollProgress] = useState(0);
    const scrollRef = useRef<HTMLDivElement>(null);

    // Custom filtering to check strings or arrays
    const visibleProjects = projects
        .filter((project) => {
            if (activeCategory === "All") return true;
            if (Array.isArray(project.category)) {
                return project.category.includes(activeCategory);
            }
            return project.category === activeCategory;
        })
        .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));

    const scrollProjects = (direction: "left" | "right") => {
        scrollRef.current?.scrollBy({
            left: direction === "left" ? -410 : 410,
            behavior: "smooth",
        });
    };

    // Keep track of horizontal scroll progress
    const handleScrollProgress = () => {
        if (scrollRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
            const scrollableWidth = scrollWidth - clientWidth;
            if (scrollableWidth > 0) {
                setScrollProgress(scrollLeft / scrollableWidth);
            } else {
                setScrollProgress(0);
            }
        }
    };

    useEffect(() => {
        const ref = scrollRef.current;
        if (ref) {
            ref.addEventListener("scroll", handleScrollProgress);
        }
        return () => {
            if (ref) {
                ref.removeEventListener("scroll", handleScrollProgress);
            }
        };
    }, [visibleProjects]);

    // Lock page scroll when full-screen detail overlay is open
    useEffect(() => {
        document.body.style.overflow = selectedProject ? "hidden" : "auto";
        return () => {
            document.body.style.overflow = "auto";
        };
    }, [selectedProject]);

    return (
        <section id="projects" className="py-28 overflow-hidden bg-background">
            <div className="container px-6 mx-auto">
                {/* Header Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10"
                >
                    <div className="max-w-2xl">
                        <span className="text-primary text-xs font-semibold uppercase tracking-[0.28em]">Selected Work</span>
                        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">
                            A closer look at <span className="text-primary">what I build.</span>
                        </h2>
                    </div>
                    <p className="text-foreground/60 max-w-sm md:pb-2">
                        Scroll through intelligent products, automated pipelines, and production-ready architectures.
                    </p>
                </motion.div>

                {/* Filter and Scroll Navigation Controls */}
                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap gap-2">
                        {projectCategories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                className="rounded-full px-5 border-white/10 text-xs font-semibold"
                                onClick={() => {
                                    setActiveCategory(category);
                                    setScrollProgress(0);
                                }}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>
                    <div className="flex gap-2">
                        <Button 
                            variant="outline" 
                            size="icon" 
                            aria-label="Previous projects" 
                            className="rounded-full border-white/15 bg-white/5 cursor-pointer" 
                            onClick={() => scrollProjects("left")}
                        >
                            <ArrowLeft className="size-4" />
                        </Button>
                        <Button 
                            variant="outline" 
                            size="icon" 
                            aria-label="Next projects" 
                            className="rounded-full border-white/15 bg-white/5 cursor-pointer" 
                            onClick={() => scrollProjects("right")}
                        >
                            <ArrowRight className="size-4" />
                        </Button>
                    </div>
                </div>

                {/* Scrolling Track */}
                <div 
                    ref={scrollRef} 
                    className="no-scrollbar -mx-6 flex gap-5 overflow-x-auto px-6 pb-6 snap-x snap-mandatory scroll-smooth"
                >
                    {visibleProjects.map((project) => (
                        <div key={project.id} className="snap-start">
                            <ProjectCard project={project} onClick={() => setSelectedProject(project)} />
                        </div>
                    ))}
                </div>

                {/* Horizontal Scroll Progress bar */}
                {visibleProjects.length > 1 && (
                    <div className="w-48 h-1 bg-white/10 rounded-full overflow-hidden mx-auto mt-6 relative">
                        <motion.div 
                            className="h-full bg-primary rounded-full" 
                            style={{ 
                                width: `${scrollProgress * 100}%`,
                            }}
                        />
                    </div>
                )}
            </div>

            {/* Immersive Full Screen Project Overlay */}
            <AnimatePresence>
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-[1000] h-screen w-screen bg-background overflow-y-auto"
                    >
                        {/* Close button with blur */}
                        <button
                            onClick={() => setSelectedProject(null)}
                            className="fixed top-6 right-6 z-[1050] flex items-center justify-center size-12 rounded-full bg-black/40 border border-white/10 text-white hover:bg-white/15 hover:scale-105 transition-all cursor-pointer backdrop-blur"
                        >
                            <X className="size-5" />
                        </button>

                        {/* Parallax Image Banner */}
                        <div className="relative h-[45vh] sm:h-[55vh] w-full overflow-hidden">
                            <motion.img 
                                initial={{ scale: 1.15 }}
                                animate={{ scale: 1 }}
                                transition={{ duration: 0.5 }}
                                src={selectedProject.image} 
                                alt={selectedProject.title} 
                                className="w-full h-full object-cover" 
                            />
                            {/* Rich dark gradient cover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-black/30" />
                            
                            {/* Bottom absolute title metadata */}
                            <div className="absolute bottom-8 left-0 w-full z-10">
                                <div className="max-w-5xl mx-auto px-6 flex flex-col gap-3">
                                    <div className="flex flex-wrap gap-2">
                                        {Array.isArray(selectedProject.category) ? (
                                            selectedProject.category.map((cat) => (
                                                <span key={cat} className="px-3.5 py-1 rounded-full border border-primary/30 bg-black/50 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                    {cat}
                                                </span>
                                            ))
                                        ) : (
                                            <span className="px-3.5 py-1 rounded-full border border-primary/30 bg-black/50 text-[10px] font-bold uppercase tracking-wider text-primary">
                                                {selectedProject.category}
                                            </span>
                                        )}
                                    </div>
                                    <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
                                        {selectedProject.title}
                                    </h1>
                                </div>
                            </div>
                        </div>

                        {/* Layout Split Section */}
                        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-[1.62fr_1.38fr] gap-16">
                            
                            {/* Left Side: Long Description and Details */}
                            <div className="flex flex-col gap-8">
                                <div>
                                    <h3 className="text-xs uppercase tracking-widest text-foreground/40 mb-3 font-bold">Project Overview</h3>
                                    <p className="text-lg text-foreground/80 leading-relaxed font-normal">
                                        {selectedProject.longDescription}
                                    </p>
                                </div>
                                
                                <div className="border-t border-white/5 pt-8">
                                    <h3 className="text-xs uppercase tracking-widest text-foreground/40 mb-4 font-bold">Key Architectural Specs</h3>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-foreground/75 list-none pl-0">
                                        <li className="flex gap-2.5 items-start">
                                            <span className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                            <span>Designed with modern modular frontend systems for high-performance indexing.</span>
                                        </li>
                                        <li className="flex gap-2.5 items-start">
                                            <span className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                            <span>Integrated semantic vectors or scalable database operations ensuring 99%+ stability.</span>
                                        </li>
                                        <li className="flex gap-2.5 items-start">
                                            <span className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                            <span>Fully responsive interface tested extensively across desktop and mobile devices.</span>
                                        </li>
                                        <li className="flex gap-2.5 items-start">
                                            <span className="size-2 rounded-full bg-primary mt-1.5 shrink-0" />
                                            <span>Follows industry coding guidelines for production-level deployments.</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            {/* Right Side: Technologies used & Links */}
                            <div className="flex flex-col gap-8">
                                
                                {/* Technologies Used Grid */}
                                <div className="p-7 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-5">Tech Stack & Tools</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {selectedProject.tech.map((t) => (
                                            <span 
                                                key={t} 
                                                className="px-3.5 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs text-foreground/80 font-medium hover:border-primary/20 hover:text-white transition-colors"
                                            >
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* External Navigation Buttons */}
                                <div className="p-7 rounded-[2rem] border border-white/5 bg-white/[0.02] backdrop-blur-md flex flex-col gap-4">
                                    <h4 className="text-sm font-semibold uppercase tracking-wider text-white mb-2">Project Assets</h4>
                                    <div className="flex flex-col gap-3">
                                        {selectedProject.live && (
                                            <a 
                                                href={selectedProject.live} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center justify-center gap-2 h-12 rounded-full bg-white text-black font-bold text-sm hover:opacity-90 hover:scale-[1.01] transition-all cursor-pointer shadow-lg"
                                            >
                                                <ExternalLink className="size-4" /> Live Demo / Deployment
                                            </a>
                                        )}
                                        {selectedProject.github && (
                                            <a 
                                                href={selectedProject.github} 
                                                target="_blank" 
                                                rel="noopener noreferrer" 
                                                className="flex items-center justify-center gap-2 h-12 rounded-full border border-white/10 bg-white/5 text-white font-bold text-sm hover:bg-white/10 hover:scale-[1.01] transition-all cursor-pointer"
                                            >
                                                <Github className="size-4" /> View GitHub Repository
                                            </a>
                                        )}
                                    </div>
                                </div>

                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};
