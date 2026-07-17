"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { BarChart3, Brain, Cloud, Code2, Database } from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "LangChain & LangGraph",
      "RAG & Vector Embeddings",
      "FAISS & SentenceTransformers",
      "LLMs, OpenAI & Gemini APIs",
      "Scikit-learn & TensorFlow",
      "NLP & Hugging Face",
    ],
  },
  {
    title: "Full Stack",
    icon: <Database className="w-6 h-6 text-green-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "Django & FastAPI",
      "MongoDB, MySQL & PostgreSQL",
      "Prisma ORM",
      "REST APIs",
      "JWT & Clerk Authentication",
      "Socket.IO & Stripe",
    ],
  },
  {
    title: "Data & Visualisation",
    icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
    skills: [
      "SQL & Excel",
      "Tableau & Looker Studio",
      "Power BI & Google Sheets",
      "Pandas, NumPy & Jupyter",
      "Matplotlib & Seaborn",
      "ETL Pipeline Design",
      "EDA & KPI Tracking",
      "Dashboard Storytelling",
    ],
  },
  {
    title: "Cloud & DevOps",
    icon: <Cloud className="w-6 h-6 text-red-400" />,
    skills: [
      "AWS EC2",
      "Docker & Nginx",
      "GitHub Actions & GHCR",
      "Git & GitHub",
      "Vercel & Render",
      "Neon PostgreSQL",
    ],
  },
  {
    title: "Core Development",
    icon: <Code2 className="w-6 h-6 text-orange-400" />,
    skills: [
      "React & Next.js",
      "JavaScript & TypeScript",
      "Python & C++",
      "HTML5, CSS & Phaser.js",
      "Postman",
      "Figma",
      "Chart.js",
      "Framer Motion & Three.js",
    ],
  },
];


export const Skills = () => {
    return (
        <section id="skills" className="py-24 bg-white/5">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Technical <span className="text-primary">Skills</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        A comprehensive overview of my technical expertise and the tools I use to bring ideas to life.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: categoryIndex * 0.1 }}
                        >
                            <Card className="h-full glass-dark border-white/5 hover:border-primary/50 transition-colors group">
                                <CardContent className="p-8">
                                    <div className="mb-6 p-3 rounded-2xl bg-white/5 w-fit group-hover:scale-110 transition-transform">
                                        {category.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4">{category.title}</h3>
                                    <ul className="space-y-2">
                                        {category.skills.map((skill) => (
                                            <li key={skill} className="text-foreground/60 flex items-center gap-2">
                                                <div className="w-1.5 h-1.5 rounded-full bg-primary/50" />
                                                {skill}
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
