"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    Menu,
    X,
    Github,
    Linkedin,
    FileText,
    Code2,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { Magnetic } from "@/components/ui/magnetic";

const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Contact", href: "#contact" },
];

const socialLinks = [
    {
        name: "GitHub",
        href: "https://github.com/shouryapratap132006",
        icon: Github,
    },
    {
        name: "LinkedIn",
        href: "https://linkedin.com/in/shourya-pratap-1b07a4310",
        icon: Linkedin,
    },
    {
        name: "LeetCode",
        href: "https://leetcode.com/u/shouryasisodia/",
        icon: Code2,
    },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState("Home");

    /* Scroll effect */
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 40);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    /* Lock body scroll when mobile menu open */
    useEffect(() => {
        document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    }, [isMobileMenuOpen]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-[100] transition-all duration-300",
                isScrolled
                    ? "bg-background/80 backdrop-blur-xl border-b border-white/10"
                    : "bg-transparent"
            )}
        >
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
                {/* Logo */}
                <Link
                    href="#home"
                    className="text-2xl font-bold tracking-tight text-gradient"
                >
                    SP<span className="text-primary">.</span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <Magnetic key={link.name} strength={0.2}>
                            <Link
                                href={link.href}
                                onClick={() => setActiveSection(link.name)}
                                className={cn(
                                    "text-sm font-medium transition-colors relative px-2 py-1",
                                    activeSection === link.name
                                        ? "text-primary"
                                        : "text-foreground/70 hover:text-foreground"
                                )}
                            >
                                {link.name}
                                {activeSection === link.name && (
                                    <motion.span
                                        layoutId="nav-underline"
                                        className="absolute -bottom-1 left-0 w-full h-[2px] bg-primary rounded-full"
                                    />
                                )}
                            </Link>
                        </Magnetic>
                    ))}

                    {/* Socials */}
                    <div className="flex items-center gap-4 pl-6 border-l border-white/10">
                        {socialLinks.map(({ name, href, icon: Icon }) => (
                            <Magnetic key={name} strength={0.5}>
                                <Link
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="text-foreground/70 hover:text-primary transition-colors p-2"
                                >
                                    <Icon size={20} />
                                </Link>
                            </Magnetic>
                        ))}
                    </div>

                    {/* Resume Button */}
                    <Magnetic strength={0.3}>
                        <Link
                            href="/Shourya_Pratap_Resume.pdf"
                            target="_blank"
                            className="ml-4 inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm font-medium text-primary hover:bg-primary hover:text-background transition"
                        >
                            <FileText size={16} />
                            Resume
                        </Link>
                    </Magnetic>
                </div>

                {/* Mobile Menu Button */}
                <button
                    aria-label="Toggle menu"
                    className="md:hidden text-foreground"
                    onClick={() => setIsMobileMenuOpen((prev) => !prev)}
                >
                    {isMobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.25 }}
                        className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-xl border-b border-white/10 px-6 py-8 flex flex-col gap-6"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="text-lg font-medium text-foreground/80 hover:text-primary transition"
                            >
                                {link.name}
                            </Link>
                        ))}

                        <div className="flex items-center gap-6 pt-6 border-t border-white/10">
                            {socialLinks.map(({ name, href, icon: Icon }) => (
                                <Link
                                    key={name}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={name}
                                    className="text-foreground/70 hover:text-primary transition-colors"
                                >
                                    <Icon size={24} />
                                </Link>
                            ))}
                            <Link
                                href="/Shourya_Pratap_Resume.pdf"
                                target="_blank"
                                className="ml-auto inline-flex items-center gap-2 rounded-full border border-primary/30 px-4 py-2 text-sm text-primary hover:bg-primary hover:text-background transition"
                            >
                                <FileText size={16} />
                                Resume
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};
