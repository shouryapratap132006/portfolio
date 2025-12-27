"use client";

import React, { useState, useRef } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, X, Mail, Send, MessageSquare } from "lucide-react";

const socialLinks = [
    { icon: <Github size={24} />, href: "https://github.com/shouryapratap132006", label: "GitHub" },
    { icon: <Linkedin size={24} />, href: "https://linkedin.com/in/shourya-pratap-1b07a4310", label: "LinkedIn" },
    { icon: <X size={24} />, href: "https://x.com/shoooouryaaaa", label: "Twitter" },
    { icon: <Mail size={24} />, href: "mailto:shouryapuja130406@gmail.com", label: "Email" },
];

const MagneticButton = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef<HTMLDivElement>(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!ref.current) return;
        const { clientX, clientY } = e;
        const { left, top, width, height } = ref.current.getBoundingClientRect();
        const x = clientX - (left + width / 2);
        const y = clientY - (top + height / 2);
        setPosition({ x: x * 0.3, y: y * 0.3 });
    };

    const handleMouseLeave = () => {
        setPosition({ x: 0, y: 0 });
    };

    return (
        <motion.div
            ref={ref}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            animate={{ x: position.x, y: position.y }}
            transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
            className={className}
        >
            {children}
        </motion.div>
    );
};

export const Contact = () => {
    const [formState, setFormState] = useState({ name: "", email: "", subject: "", message: "" });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Form submitted:", formState);
        // Add actual form submission logic here
    };

    return (
        <section id="contact" className="py-24 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] -z-10" />

            <div className="container px-6 mx-auto">
                <div className="max-w-5xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                                Let&apos;s Build Something <span className="text-primary">Extraordinary</span>
                            </h2>
                            <p className="text-foreground/70 text-lg mb-12 max-w-md">
                                Whether you have a question, a project idea, or just want to say hi,
                                my inbox is always open.
                            </p>

                            <div className="flex flex-wrap gap-4">
                                {socialLinks.map((link, index) => (
                                    <MagneticButton key={index}>
                                        <a
                                            href={link.href}
                                            target="_blank"
                                            className="w-14 h-14 flex items-center justify-center rounded-2xl glass-dark border-white/5 hover:border-primary/50 text-foreground/70 hover:text-primary transition-colors"
                                            aria-label={link.label}
                                        >
                                            {link.icon}
                                        </a>
                                    </MagneticButton>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <Card className="glass-dark border-white/5">
                                <CardContent className="p-8">
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground/70 ml-1">Name</label>
                                                <Input
                                                    placeholder="John Doe"
                                                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                                                    value={formState.name}
                                                    onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                                />
                                            </div>
                                            <div className="space-y-2">
                                                <label className="text-sm font-medium text-foreground/70 ml-1">Email</label>
                                                <Input
                                                    type="email"
                                                    placeholder="john@example.com"
                                                    className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                                                    value={formState.email}
                                                    onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                                />
                                            </div>
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground/70 ml-1">Subject</label>
                                            <Input
                                                placeholder="Project Inquiry"
                                                className="bg-white/5 border-white/10 focus:border-primary/50 h-12"
                                                value={formState.subject}
                                                onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                                            />
                                        </div>
                                        <div className="space-y-2">
                                            <label className="text-sm font-medium text-foreground/70 ml-1">Message</label>
                                            <Textarea
                                                placeholder="Tell me about your project..."
                                                className="bg-white/5 border-white/10 focus:border-primary/50 min-h-[150px] resize-none"
                                                value={formState.message}
                                                onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                            />
                                        </div>
                                        <Button type="submit" className="w-full h-14 text-lg font-medium group">
                                            Send Message
                                            <Send className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                                        </Button>
                                    </form>
                                </CardContent>
                            </Card>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};
