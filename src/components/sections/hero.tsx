"use client";

import React from "react";
import { motion } from "framer-motion";
import { Scene } from "@/components/canvas/scene";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
    return (
        <section
            id="home"
            className="relative h-screen w-full flex items-center justify-center overflow-hidden"
        >
            {/* Three.js Background */}
            <Scene />

            {/* Content */}
            <div
                className="container px-6 relative z-10"
            >
                <div className="max-w-4xl mx-auto text-center">

                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <span className="inline-block px-4 py-1.5 mb-6 text-sm font-medium tracking-wider uppercase rounded-full glass-dark text-primary border border-primary/20">
                            Building Intelligent Systems
                        </span>
                    </motion.div>

                    {/* Heading */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
                        className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8"
                    >
                        Hi, I&apos;m{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-indigo-400">
                            Shourya Pratap
                        </span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.35, ease: "easeOut" }}
                        className="text-lg md:text-2xl text-foreground/65 mb-12 max-w-3xl mx-auto font-medium"
                    >
                        AI / ML Enthusiast • Backend Developer • Full Stack Engineer
                        <br className="hidden md:block" />
                        Building data-driven, scalable, and intelligent web applications
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-6"
                    >
                        <Button
                            asChild
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full group"
                        >
                            <Link href="#projects">
                                View Projects
                                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                            </Link>
                        </Button>

                        <Button
                            asChild
                            variant="outline"
                            size="lg"
                            className="h-14 px-8 text-lg rounded-full glass group"
                        >
                            <a
                                href="/Shourya_Pratap_Resume.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                download
                            >
                                Download Resume
                                <Download className="ml-2 h-5 w-5 transition-transform group-hover:translate-y-0.5" />
                            </a>
                        </Button>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
            >
                <span className="text-xs font-medium uppercase tracking-widest text-foreground/40">
                    Scroll
                </span>
                <div className="w-px h-12 bg-gradient-to-b from-primary/50 to-transparent" />
            </motion.div>
        </section>
    );
};
