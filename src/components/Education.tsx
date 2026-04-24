import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, MapPin, Calendar, BookOpen, ExternalLink, Globe } from 'lucide-react';
import { educationList, ieltsScore } from '../data/portfolio';

const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Education & <span className="text-indigo-600">Qualifications</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              {educationList.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-md border border-gray-100 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="p-3 bg-indigo-100 rounded-xl text-indigo-600">
                      <GraduationCap size={24} />
                    </div>
                    {edu.website && (
                      <a href={edu.website} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-indigo-600">
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{edu.degree}</h3>
                  <div className="text-indigo-600 font-semibold mb-4">{edu.institution}</div>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6 text-sm text-gray-500">
                    <div className="flex items-center gap-2">
                      <Calendar size={16} />
                      {edu.period}
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin size={16} />
                      {edu.location}
                    </div>
                  </div>

                  {edu.grade && (
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-bold mb-4">
                      Final Grade: {edu.grade}
                    </div>
                  )}

                  {edu.details && (
                    <ul className="space-y-2 mt-4">
                      {edu.details.map((detail, i) => (
                        <li key={i} className="text-sm text-gray-600 flex items-start gap-2">
                          <span className="mt-1.5 w-1 h-1 bg-indigo-300 rounded-full shrink-0"></span>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="space-y-8">
              {/* IELTS Section */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl p-8 text-white shadow-xl"
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-white/20 rounded-xl">
                    <Globe size={32} />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold">IELTS Academic</h3>
                    <p className="text-indigo-100 opacity-80">Overall Band Score: {ieltsScore.overall}</p>
                  </div>
                </div>

                <p className="text-indigo-50 mb-8 leading-relaxed">
                  Demonstrates strong listening and reading proficiency with competent communication skills, essential for international collaboration and advanced studies.
                </p>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Listening', score: ieltsScore.listening },
                    { label: 'Reading', score: ieltsScore.reading },
                    { label: 'Writing', score: ieltsScore.writing },
                    { label: 'Speaking', score: ieltsScore.speaking }
                  ].map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-xl p-4 border border-white/10">
                      <div className="text-2xl font-bold mb-1">{item.score}</div>
                      <div className="text-xs uppercase tracking-wider opacity-70">{item.label}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-8 pt-8 border-t border-white/10 flex items-center justify-between">
                  <div className="text-sm opacity-80">Test Date: {ieltsScore.date}</div>
                  <div className="px-3 py-1 bg-white/20 rounded-full text-xs font-bold uppercase">Result: Verified</div>
                </div>
              </motion.div>

              {/* Research/AI Focus Note */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="bg-white rounded-2xl p-8 shadow-md border border-gray-100"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <BookOpen className="text-indigo-600" size={24} />
                  Future Objectives
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Aiming to pursue a Master’s in AI to build intelligent, data-driven solutions for real-world challenges. Currently deepening knowledge in Machine Learning, NLP, and Computer Vision through practical internships and personal research.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;