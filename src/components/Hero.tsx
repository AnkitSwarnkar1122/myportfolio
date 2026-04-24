"use client";
import React from "react";
import { motion } from "framer-motion";
import { Download, Github, Linkedin, Mail } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-white via-blue-50 to-indigo-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 text-gray-900 dark:text-white">
      <div className="relative z-10 container mx-auto px-6 flex flex-col items-center text-center">
        {/* Profile Image */}
        <motion.img
          src="profile.jpg"
          alt="Ankit Swarnkar"
          className="w-36 h-36 md:w-44 md:h-44 rounded-full border-4 border-indigo-200 shadow-xl object-cover object-top"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Name */}
        <motion.h1
          className="mt-6 text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Hi, I’m{" "}
          <span className="text-indigo-600 dark:text-indigo-400">
            Ankit Swarnkar
          </span>
        </motion.h1>

        {/* Intro */}
        <motion.p
          className="mt-4 max-w-2xl text-gray-600 dark:text-gray-300 text-lg leading-relaxed"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Computer Science graduate focused on <span className="font-semibold text-indigo-600 dark:text-indigo-400">Artificial Intelligence</span>.
          Experienced in building intelligent, data-driven solutions for real-world challenges.
        </motion.p>

        {/* Buttons */}
        <motion.div
          className="mt-8 flex flex-wrap gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <a
            href="#contact"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-full shadow-md flex items-center gap-2 transition"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a
            href="/cv.pdf"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-full shadow-md flex items-center gap-2 transition"
          >
            <Download size={18} /> Download CV
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-full shadow-md flex items-center gap-2 transition"
          >
            <Linkedin size={18} /> LinkedIn
          </a>
          <a
            href="https://github.com/AnkitSwarnkar1122"
            target="_blank"
            className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-white/10 dark:hover:bg-white/20 text-gray-900 dark:text-white font-semibold rounded-full shadow-md flex items-center gap-2 transition"
          >
            <Github size={18} />Github
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
