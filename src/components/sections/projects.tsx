"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, ArrowRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

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
        category: "Full Stack",
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
        category: "Full Stack",
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

const projectCategories = ["All", "AI / ML", "Full Stack", "DVA"] as const;


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
            className="relative h-[460px] w-[min(82vw,390px)] shrink-0 rounded-[2rem] glass-dark border border-white/10 overflow-hidden cursor-pointer group shadow-2xl shadow-black/20"
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
                        <span className="rounded-full border border-white/20 bg-black/30 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/80">
                            {project.category}
                        </span>
                        <span className="flex size-9 items-center justify-center rounded-full bg-white text-black transition-transform duration-300 group-hover:rotate-45">
                            <ArrowUpRight className="size-4" />
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.slice(0, 3).map((t) => (
                            <Badge key={t} variant="secondary" className="bg-white/10 text-[10px] uppercase tracking-wider">
                                {t}
                            </Badge>
                        ))}
                    </div>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
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
    const scrollRef = useRef<HTMLDivElement>(null);
    const visibleProjects = projects
        .filter((project) => activeCategory === "All" || project.category === activeCategory)
        .sort((a, b) => Number(Boolean(b.featured)) - Number(Boolean(a.featured)));
    const scrollProjects = (direction: "left" | "right") => {
        scrollRef.current?.scrollBy({
            left: direction === "left" ? -440 : 440,
            behavior: "smooth",
        });
    };

    return (
        <section id="projects" className="py-28 overflow-hidden">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-10"
                >
                    <div className="max-w-2xl">
                        <span className="text-primary text-xs font-semibold uppercase tracking-[0.28em]">Selected work</span>
                        <h2 className="mt-4 text-4xl md:text-6xl font-bold tracking-tight">A closer look at <span className="text-primary">what I build.</span></h2>
                    </div>
                    <p className="text-foreground/60 max-w-sm md:pb-2">
                        Scroll through intelligent products, data stories, and production-ready experiences.
                    </p>
                </motion.div>

                <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
                    <div className="flex flex-wrap gap-2">
                    {projectCategories.map((category) => (
                        <Button
                            key={category}
                            variant={activeCategory === category ? "default" : "outline"}
                            className="rounded-full px-5 border-white/10"
                            onClick={() => setActiveCategory(category)}
                        >
                            {category}
                        </Button>
                    ))}
                    </div>
                    <div className="flex gap-2">
                        <Button variant="outline" size="icon" aria-label="Previous projects" className="rounded-full border-white/15 bg-white/5" onClick={() => scrollProjects("left")}>
                            <ArrowLeft />
                        </Button>
                        <Button variant="outline" size="icon" aria-label="Next projects" className="rounded-full border-white/15 bg-white/5" onClick={() => scrollProjects("right")}>
                            <ArrowRight />
                        </Button>
                    </div>
                </div>

                <div ref={scrollRef} className="no-scrollbar -mx-6 flex gap-5 overflow-x-auto px-6 pb-4 snap-x snap-mandatory">
                    {visibleProjects.map((project) => (
                        <div key={project.id} className="snap-start"><ProjectCard project={project} onClick={() => setSelectedProject(project)} /></div>
                    ))}
                </div>
            </div>

            <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
                <DialogContent className="max-w-3xl glass-dark border-white/10 text-foreground p-0 overflow-hidden">
                    {selectedProject && (
                        <div className="flex flex-col">
                            <div className="relative h-64 w-full">
                                <img src={selectedProject.image} alt={selectedProject.title} className="w-full h-full object-cover" />
                                <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                            </div>
                            <div className="p-8">
                                <DialogHeader>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {selectedProject.tech.map((t) => (
                                            <Badge key={t} variant="secondary" className="bg-primary/20 text-primary border-primary/20">
                                                {t}
                                            </Badge>
                                        ))}
                                    </div>
                                    <DialogTitle className="text-3xl font-bold mb-4">{selectedProject.title}</DialogTitle>
                                    <DialogDescription className="text-lg text-foreground/70 leading-relaxed">
                                        {selectedProject.longDescription}
                                    </DialogDescription>
                                </DialogHeader>
                                <div className="flex gap-4 mt-8">
                                    {selectedProject.live && (
                                        <Button asChild className="rounded-full px-6">
                                            <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                                <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                            </a>
                                        </Button>
                                    )}
                                    {selectedProject.github && (
                                        <Button asChild variant="outline" className="rounded-full px-6 glass">
                                            <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                                <Github className="mr-2 h-4 w-4" /> GitHub
                                            </a>
                                        </Button>
                                    )}
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
