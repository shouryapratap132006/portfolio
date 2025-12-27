"use client";

import React from "react";
import { motion } from "framer-motion";

export const Footer = () => {
    return (
        <footer className="py-12 border-t border-white/5">
            <div className="container px-6 mx-auto">
                <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="text-2xl font-bold tracking-tighter text-gradient"
                    >
                        SP.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-foreground/40 text-sm text-center"
                    >
                        © {new Date().getFullYear()} Shourya Pratap. Built with passion and code.
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.4 }}
                        className="text-foreground/40 text-sm italic"
                    >
                        Stay curious. Keep building.
                    </motion.div>
                </div>
            </div>
        </footer>
    );
};
