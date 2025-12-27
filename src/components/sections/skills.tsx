"use client";

import React from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Code2, Database, Cpu,Brain, Wrench } from "lucide-react";

const skillCategories = [
  {
    title: "AI / ML",
    icon: <Brain className="w-6 h-6 text-purple-400" />,
    skills: [
      "Python",
      "Pandas",
      "NumPy",
      "Machine Learning Fundamentals",
      "Data Preprocessing",
      "AI-powered Applications",
    ],
  },
  {
    title: "Backend",
    icon: <Database className="w-6 h-6 text-green-400" />,
    skills: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "MySQL",
      "Prisma ORM",
      "REST APIs",
      "JWT Authentication",
    ],
  },
  {
    title: "Frontend",
    icon: <Code2 className="w-6 h-6 text-blue-400" />,
    skills: [
      "React",
      "Next.js",
      "JavaScript",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Three.js",
      "shadcn/ui",
    ],
  },
  {
    title: "DSA & Problem Solving",
    icon: <Cpu className="w-6 h-6 text-red-400" />,
    skills: [
      "Data Structures",
      "Algorithms",
      "C++",
      "Competitive Programming",
      "Problem Solving",
    ],
  },
  {
    title: "Tools & Platforms",
    icon: <Wrench className="w-6 h-6 text-orange-400" />,
    skills: [
      "Git",
      "GitHub",
      "Postman",
      "Figma",
      "Chart.js",
      "Vercel",
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
