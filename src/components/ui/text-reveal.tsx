"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextRevealProps {
    text: string;
    className?: string;
}

export const TextReveal = ({ text, className }: TextRevealProps) => {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start end", "end start"],
    });

    const words = text.split(" ");

    return (
        <div ref={targetRef} className={cn("relative z-0 h-[200vh]", className)}>
            <div className="sticky top-0 flex h-[50vh] max-w-4xl items-center bg-transparent px-6">
                <p className="flex flex-wrap text-3xl font-bold text-foreground/20 md:text-5xl lg:text-6xl">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + 1 / words.length;
                        return (
                            <Word key={i} progress={scrollYProgress} range={[start, end]}>
                                {word}
                            </Word>
                        );
                    })}
                </p>
            </div>
        </div>
    );
};

interface WordProps {
    children: React.ReactNode;
    progress: any;
    range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
    const opacity = useTransform(progress, range, [0, 1]);
    return (
        <span className="relative mx-1 lg:mx-2">
            <span className="absolute opacity-30">{children}</span>
            <motion.span style={{ opacity }} className="text-foreground">
                {children}
            </motion.span>
        </span>
    );
};
