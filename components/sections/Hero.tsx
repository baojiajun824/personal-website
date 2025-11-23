"use client";

import { motion } from "framer-motion";
import { personalInfo, sectionContent } from "@/content";

export default function Hero() {

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-zinc-900 dark:to-zinc-800 pt-16 md:pt-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-4xl mx-auto"
        >
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary-600 to-primary-400 bg-clip-text text-transparent"
          >
            Hi, I&apos;m {personalInfo.name}
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl lg:text-3xl text-zinc-700 dark:text-zinc-300 mb-4"
          >
            {personalInfo.title}
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-zinc-600 dark:text-zinc-400 mb-8 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <a
              href="#projects"
              className="px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              {sectionContent.hero.ctaPrimary}
            </a>
            <a
              href="#experience"
              className="px-8 py-3 border-2 border-primary-600 text-primary-600 dark:text-primary-400 dark:border-primary-400 rounded-lg font-semibold hover:bg-primary-50 dark:hover:bg-zinc-800 transition-colors"
            >
              View Experience
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

