import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Briefcase, Calendar, MapPin, ExternalLink, Github, Award } from 'lucide-react';
import { experiences } from '../data/portfolio';

const Experience: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="py-20 bg-white">
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
              Work <span className="text-indigo-600">Experience</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="relative border-l-2 border-indigo-100 ml-4 md:ml-8 space-y-12 pb-8">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative pl-8 md:pl-12"
              >
                {/* Timeline Dot */}
                <div className="absolute -left-3 top-0 w-6 h-6 bg-indigo-600 rounded-full border-4 border-white shadow-md"></div>
                
                <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-50 hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-6 gap-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900">{exp.role}</h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2">
                        <div className="flex items-center gap-1.5 text-indigo-600 font-semibold">
                          <Briefcase size={18} />
                          {exp.company}
                        </div>
                        {exp.location && (
                          <div className="flex items-center gap-1.5 text-gray-500">
                            <MapPin size={18} />
                            {exp.location}
                          </div>
                        )}
                        <div className="flex items-center gap-1.5 text-gray-500">
                          <Calendar size={18} />
                          {exp.period}
                        </div>
                      </div>
                    </div>
                    {exp.website && (
                      <a
                        href={exp.website.startsWith('http') ? exp.website : `https://${exp.website}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-indigo-600 hover:text-indigo-700 font-medium"
                      >
                        Visit Website <ExternalLink size={14} />
                      </a>
                    )}
                  </div>

                  <ul className="space-y-3 mb-8">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-gray-600 leading-relaxed">
                        <span className="mt-2 w-1.5 h-1.5 bg-indigo-400 rounded-full shrink-0"></span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  {(exp.projects || exp.certification) && (
                    <div className="grid md:grid-cols-2 gap-6 pt-6 border-t border-gray-100">
                      {exp.projects && exp.projects.map((project, pi) => (
                        <div key={pi} className="bg-gray-50 rounded-xl p-5">
                          <h4 className="font-bold text-gray-900 mb-2 flex items-center justify-between">
                            {project.name}
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-gray-900">
                                <Github size={18} />
                              </a>
                            )}
                          </h4>
                          <p className="text-sm text-gray-600">{project.description}</p>
                        </div>
                      ))}
                      {exp.certification && (
                        <div className="bg-indigo-50 rounded-xl p-5 border border-indigo-100">
                          <div className="flex items-center gap-2 text-indigo-600 mb-2">
                            <Award size={20} />
                            <h4 className="font-bold">Certification</h4>
                          </div>
                          <p className="text-sm text-indigo-900 font-medium mb-3">{exp.certification.name}</p>
                          <a 
                            href={exp.certification.link} 
                            className="text-xs text-indigo-600 hover:underline inline-flex items-center gap-1"
                          >
                            View Certificate <ExternalLink size={12} />
                          </a>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
