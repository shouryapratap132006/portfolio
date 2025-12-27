"use client";

import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, X, Mail, Send, MessageSquare } from "lucide-react";
import { Magnetic } from "@/components/ui/magnetic";
import Link from "next/link";

const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/shouryapratap132006", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/shourya-pratap-1b07a4310", label: "LinkedIn" },
    { icon: <X size={24} />, href: "https://x.com/shoooouryaaaa", label: "Twitter" },
    { icon: <Mail size={24} />, href: "mailto:shouryapuja130406@gmail.com", label: "Email" },
];

export const Contact = () => {
    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 className="text-3xl md:text-5xl font-bold mb-8 tracking-tight">
                            Let&apos;s Build Something <span className="text-primary">Great</span>
                        </h2>
                        <p className="text-foreground/60 text-lg mb-12 max-w-md leading-relaxed">
                            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your visions.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            {socialLinks.map((link, index) => (
                                <Magnetic key={index} strength={0.4}>
                                    <Link
                                        href={link.href}
                                        target="_blank"
                                        className="w-14 h-14 flex items-center justify-center rounded-2xl glass-dark border-white/5 hover:border-primary/50 text-foreground/70 hover:text-primary transition-colors"
                                        aria-label={link.label}
                                    >
                                        {link.icon}
                                    </Link>
                                </Magnetic>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-8 rounded-3xl glass-dark border border-white/10"
                    >
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/60 ml-1">Name</label>
                                    <Input placeholder="John Doe" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary/50" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-foreground/60 ml-1">Email</label>
                                    <Input type="email" placeholder="john@example.com" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary/50" />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/60 ml-1">Subject</label>
                                <Input placeholder="Project Inquiry" className="bg-white/5 border-white/10 rounded-xl h-12 focus:ring-primary/50" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-foreground/60 ml-1">Message</label>
                                <Textarea placeholder="Tell me about your project..." className="bg-white/5 border-white/10 rounded-xl min-h-[150px] focus:ring-primary/50" />
                            </div>
                            <Button className="w-full h-14 rounded-xl text-lg font-bold group">
                                Send Message
                                <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Decorative background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />
        </section>
    );
};
