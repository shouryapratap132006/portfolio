"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";

const stats = [
    { label: "DSA Questions", value: 300, suffix: "+" },
    { label: "Codeforces Rating", value: 1000, suffix: "" },
    { label: "Projects Built", value: 15, suffix: "+" },
    { label: "Open Source PRs", value: 10, suffix: "+" },
];

const Counter = ({ value, suffix }: { value: number; suffix: string }) => {
    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    const count = useMotionValue(0);
    const rounded = useSpring(count, { damping: 30, stiffness: 100 });
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (inView) {
            count.set(value);
        }
    }, [inView, value, count]);

    useEffect(() => {
        return rounded.on("change", (latest) => {
            setDisplayValue(Math.floor(latest));
        });
    }, [rounded]);

    return (
        <span ref={ref} className="text-4xl md:text-6xl font-bold text-gradient-primary">
            {displayValue}{suffix}
        </span>
    );
};

export const Achievements = () => {
    return (
        <section className="py-24">
            <div className="container px-6 mx-auto">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <motion.div
                            key={stat.label}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="text-center p-8 rounded-3xl glass-dark border border-white/5"
                        >
                            <Counter value={stat.value} suffix={stat.suffix} />
                            <p className="text-foreground/60 mt-4 font-medium uppercase tracking-widest text-xs">
                                {stat.label}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
