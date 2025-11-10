"use client";

import { motion } from "framer-motion";
import { personalInfo, sectionContent } from "@/content";

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  return (
    <section
      id="about"
      className="section-container bg-white dark:bg-zinc-900"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {sectionContent.about.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          {sectionContent.about.subtitle}
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="max-w-3xl mx-auto space-y-6 text-lg text-zinc-700 dark:text-zinc-300 leading-relaxed"
        >
          {personalInfo.bio.long.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}

