"use client";

import { motion } from "framer-motion";
import { education, sectionContent } from "@/content";

export default function Education() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { x: -30, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  const formatDate = (date: string) => {
    const [month, year] = date.split("/");
    const monthNames = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return `${monthNames[parseInt(month) - 1]} ${year}`;
  };

  return (
    <section
      id="education"
      className="section-container bg-white dark:bg-zinc-900"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {sectionContent.education.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          {sectionContent.education.subtitle}
        </motion.p>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 w-0.5 bg-primary-300 dark:bg-primary-700"></div>

            <div className="space-y-8">
              {education.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  className="relative pl-12 md:pl-20"
                >
                  {/* Timeline dot */}
                  <div className="absolute left-2 md:left-6 top-2 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-zinc-900 z-10"></div>

                  {/* Content card */}
                  <div className="bg-zinc-50 dark:bg-black rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between">
                      <div>
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-1">
                          {item.degree}
                        </h3>
                        <p className="text-lg text-primary-600 dark:text-primary-400 font-medium">
                          {item.institution}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">
                          {item.location}
                        </p>
                      </div>
                      <div className="mt-2 md:mt-0 md:text-right">
                        <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium">
                          {formatDate(item.startDate)} -{" "}
                          {formatDate(item.endDate)}
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

