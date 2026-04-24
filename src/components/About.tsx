import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap, Users, Globe, Heart, MapPin, Gem, TrendingUp, Video } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const highlights = [
    {
      icon: GraduationCap,
      title: 'CS Graduate',
      description: 'B.Sc. CSIT from Rajarshi Janak University'
    },
    {
      icon: Gem,
      title: 'AI & ML Intern',
      description: 'Developing RAG-based systems at Digineptronics'
    },
    {
      icon: Globe,
      title: 'IELTS 7.0',
      description: 'Strong proficiency in English communication'
    },
    {
      icon: Users,
      title: 'Student Mentor',
      description: 'Mentoring 50+ students in Math & CS'
    },
    {
      icon: TrendingUp,
      title: 'Project Assistant',
      description: 'Planning and coordinating projects at Indor'
    },
    {
      icon: MapPin,
      title: 'Based in Nepal',
      description: 'Janakpur-14, exploring AI solutions'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
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
              About <span className="text-indigo-600">Me</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-yellow-400 mx-auto mb-8"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative">
                <div className="w-80 h-80 mx-auto  rounded-full overflow-hidden shadow-2xl">
                  <img
                    src="ankit.jpeg"
                    alt="Ankit Swarnkar"
                    className="transition-transform duration-300 ease-in-out scale-125 hover:scale-150 w-full h-full object-cover rounded-full shadow-lg object-top"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-yellow-400 rounded-full p-4 shadow-lg">
                  <GraduationCap className="text-black" size={24} />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-700 leading-relaxed">
                Curious and adaptable, I seek to explore new perspectives and deepen my understanding of the world through reflective and open-minded learning. I’m passionate about visual storytelling and value collaboration, personal growth, and cultural awareness.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                As a Computer Science graduate with a strong foundation in software development and experience in full-stack web applications, I am now focused on Artificial Intelligence. I aim to pursue a Master’s in AI to build intelligent, data-driven solutions for real-world challenges.
              </p>

              <div className="flex flex-wrap gap-3 pt-4">
                {['AI Enthusiast', 'Problem Solver', 'Visual Storyteller', 'Continuous Learner'].map((trait, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                  >
                    {trait}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                className="bg-gradient-to-br from-gray-50 to-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-indigo-100 rounded-lg mr-4">
                    <highlight.icon className="text-indigo-600" size={24} />
                  </div>
                  <h3 className="font-semibold text-gray-900">{highlight.title}</h3>
                </div>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </motion.div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Globe className="text-indigo-600" size={24} />
                Languages
              </h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">Nepali</span>
                    <span className="text-xs font-bold text-indigo-600 uppercase">Mother Tongue</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="font-medium text-gray-700">English</span>
                    <span className="text-xs font-bold text-indigo-600 uppercase">C1 Proficiency</span>
                  </div>
                  <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                    <div className="bg-indigo-600 h-full w-[90%]"></div>
                  </div>
                  <div className="mt-2 grid grid-cols-4 gap-1">
                    {['L: C1', 'R: B2', 'S: B2', 'W: B2'].map(s => (
                      <span key={s} className="text-[10px] bg-indigo-50 text-indigo-600 px-1 py-0.5 rounded text-center font-bold">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Hobbies */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="text-red-500" size={24} />
                Hobbies & Interests
              </h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-red-50 text-red-500 rounded-lg shrink-0">
                    <Video size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Videography & Storytelling</h4>
                    <p className="text-xs text-gray-500">Creating story-based visual narratives</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-blue-50 text-blue-500 rounded-lg shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm">Travel & Cultural Exploration</h4>
                    <p className="text-xs text-gray-500">Documenting diverse cultures through video</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;