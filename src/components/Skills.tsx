import React from "react";
import { motion } from "framer-motion";
import { 
  Code2, 
  Terminal, 
  GraduationCap, 
  Users, 
  Video, 
  TrendingUp, 
  Compass, 
  Lightbulb 
} from "lucide-react";
import { skills } from "../data/portfolio";

const categoryIcons: Record<string, any> = {
  technical: Code2,
  teaching: GraduationCap,
  leadership: Users,
  creative: Video,
  marketing: TrendingUp,
  exploration: Compass,
  soft: Lightbulb,
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(skills.map(s => s.category)));

  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              My <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.map((category, catIdx) => {
              const Icon = categoryIcons[category] || Terminal;
              const categorySkills = skills.filter(s => s.category === category);

              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: catIdx * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-lg border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-center mb-6">
                    <div className="p-3 bg-indigo-100 dark:bg-indigo-900/30 rounded-xl mr-4 text-indigo-600 dark:text-indigo-400">
                      <Icon size={24} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white capitalize">
                      {category.replace('_', ' ')}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {categorySkills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-600 dark:hover:text-white transition-colors duration-200"
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;