"use client";

import React, { useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Github, ExternalLink, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";

const projects = [
  {
    id: 1,
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
];



const ProjectCard = ({ project, onClick }: { project: typeof projects[0]; onClick: () => void }) => {
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
            className="relative h-[400px] w-full rounded-3xl glass-dark border border-white/5 overflow-hidden cursor-pointer group"
        >
            <div
                style={{
                    transform: "translateZ(50px)",
                    transformStyle: "preserve-3d",
                }}
                className="absolute inset-0 p-8 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/40 to-transparent"
            >
                <div className="relative z-10">
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
    const [selectedProject, setSelectedProject] = useState<typeof projects[0] | null>(null);

    return (
        <section id="projects" className="py-24">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Featured <span className="text-primary">Projects</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        A selection of my recent work, ranging from AI applications to immersive e-commerce experiences.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} onClick={() => setSelectedProject(project)} />
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
                                    <Button asChild className="rounded-full px-6">
                                        <a href={selectedProject.live} target="_blank" rel="noopener noreferrer">
                                            <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                        </a>
                                    </Button>
                                    <Button asChild variant="outline" className="rounded-full px-6 glass">
                                        <a href={selectedProject.github} target="_blank" rel="noopener noreferrer">
                                            <Github className="mr-2 h-4 w-4" /> GitHub
                                        </a>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </section>
    );
};
