"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { personalInfo, sectionContent } from "@/content";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // For now, just log the data
    // In the future, you can connect this to a backend API
    console.log("Form submitted:", formData);

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      alert(sectionContent.contact.form.successMessage);
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

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
      id="contact"
      className="section-container bg-zinc-50 dark:bg-black"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
        className="max-w-2xl mx-auto"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          {sectionContent.contact.title}
        </motion.h2>
        <motion.p variants={itemVariants} className="section-subtitle">
          {sectionContent.contact.subtitle}
        </motion.p>

        <motion.form
          variants={itemVariants}
          onSubmit={handleSubmit}
          className="space-y-6 bg-white dark:bg-zinc-900 p-8 rounded-lg shadow-md"
        >
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              {sectionContent.contact.form.nameLabel}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
              placeholder={sectionContent.contact.form.namePlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              {sectionContent.contact.form.emailLabel}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-zinc-800 dark:text-white"
              placeholder={sectionContent.contact.form.emailPlaceholder}
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-2"
            >
              {sectionContent.contact.form.messageLabel}
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="w-full px-4 py-2 border border-zinc-300 dark:border-zinc-600 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent dark:bg-zinc-800 dark:text-white resize-none"
              placeholder={sectionContent.contact.form.messagePlaceholder}
            />
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-8 py-3 bg-primary-600 text-white rounded-lg font-semibold hover:bg-primary-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
          >
            {isSubmitting
              ? sectionContent.contact.form.submittingButton
              : sectionContent.contact.form.submitButton}
          </button>
        </motion.form>

        <motion.div
          variants={itemVariants}
          className="mt-8 text-center space-y-4"
        >
          <p className="text-zinc-600 dark:text-zinc-400">
            {sectionContent.contact.form.directContactText}
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-primary-600 hover:text-primary-700 dark:text-primary-400 font-medium"
            >
              {personalInfo.email}
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

