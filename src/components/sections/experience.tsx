"use client";

import React from "react";
import { motion } from "framer-motion";

const experiences = [
    {
        title: "Girlscript Summer of Code",
        role: "Contributor",
        period: "2024",
        description: "Contributed to various open-source projects, improving UI/UX and fixing critical bugs.",
    },
    {
        title: "Hacktoberfest",
        role: "Open Source Contributor",
        period: "2024",
        description: "Successfully completed Hacktoberfest by contributing to multiple repositories in the React ecosystem.",
    },
    {
        title: "Open Source Contributions",
        role: "Developer",
        period: "Ongoing",
        description: "Active contributor to several frontend libraries and AI-related projects on GitHub.",
    },
];

export const Experience = () => {
    return (
        <section id="experience" className="py-24 bg-white/5">
            <div className="container px-6 mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-4">Journey & <span className="text-primary">Experience</span></h2>
                    <p className="text-foreground/60 max-w-2xl mx-auto">
                        My professional journey and contributions to the developer community.
                    </p>
                </motion.div>

                <div className="max-w-4xl mx-auto relative">
                    {/* Timeline Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent -translate-x-1/2 hidden md:block" />

                    <div className="space-y-12">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={exp.title}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                    }`}
                            >
                                <div className="flex-1 w-full">
                                    <div className={`p-8 rounded-3xl glass-dark border border-white/5 hover:border-primary/30 transition-colors ${index % 2 === 0 ? "md:text-right" : "md:text-left"
                                        }`}>
                                        <span className="text-primary font-mono text-sm mb-2 block">{exp.period}</span>
                                        <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                                        <p className="text-foreground/80 font-medium mb-4">{exp.role}</p>
                                        <p className="text-foreground/60 leading-relaxed">{exp.description}</p>
                                    </div>
                                </div>

                                <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-background border-2 border-primary/50 shadow-[0_0_15px_rgba(99,102,241,0.3)]">
                                    <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
                                </div>

                                <div className="flex-1 hidden md:block" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};
