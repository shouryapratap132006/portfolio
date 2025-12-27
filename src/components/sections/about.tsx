"use client";

import React from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const techStack = [
    "React", "Next.js","JavaScript", "TypeScript", "Tailwind CSS", "mongoDB", "Express.js",
    "Flask", "Node.js", "Python", "C++", "AI/ML", "DSA","Figma", "Git", "GitHub"   
];

export const About = () => {
    return (
        <section id="about" className="py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            Crafting Digital <span className="text-primary">Experiences</span>
                        </h2>
                        <div className="space-y-6 text-lg leading-relaxed text-foreground/75">
                            <p>
                                I&apos;m <span className="text-foreground font-medium">Shourya Pratap</span>, a B.Tech
                                Artificial Intelligence student at Newton School of Technology with a strong
                                interest in <span className="text-foreground font-medium">AI/ML systems and backend engineering</span>.
                            </p>

                            <p>
                                I enjoy building <span className="text-foreground font-medium">intelligent, data-driven applications</span>
                                by combining machine learning concepts with scalable backend architectures
                                using Node.js, Express, MongoDB, SQL, and REST APIs.
                            </p>

                            <p>
                                On the AI/ML side, I work with <span className="text-foreground font-medium">Python,
                                    Pandas, NumPy</span>, and core machine learning workflows, and I actively explore
                                how AI can be integrated into real-world products.
                            </p>

                            <p>
                                Alongside this, I maintain a strong frontend foundation using React and Next.js
                                to build clean dashboards and user interfaces for AI-powered applications.
                                I&apos;m also an <span className="text-foreground font-medium">open-source contributor</span>
                                (Hacktoberfest, GirlScript Summer of Code) and have solved
                                <span className="text-foreground font-medium"> 300+ DSA problems</span> through
                                competitive programming.
                            </p>
                        </div>

                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="p-8 rounded-3xl glass-dark border border-white/10 relative z-10">
                            <h3 className="text-xl font-semibold mb-6">Tech Arsenal</h3>
                            <div className="flex flex-wrap gap-3">
                                {techStack.map((tech, index) => (
                                    <motion.div
                                        key={tech}
                                        initial={{ opacity: 0, scale: 0.8 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                    >
                                        <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/5 hover:bg-primary/20 transition-colors border-white/10">
                                            {tech}
                                        </Badge>
                                    </motion.div>
                                ))}
                            </div>
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl -z-10" />
                        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-indigo-500/20 rounded-full blur-3xl -z-10" />
                    </motion.div>
                </div>
            </div>
        </section>
    );
};
