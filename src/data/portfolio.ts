import { Project, Skill, Achievement, Education, Experience } from '../types';

export const projects: Project[] = [
  {
    id: '1',
    title: 'RAG-based PDF Explainer System',
    description: 'Built a system to retrieve, analyze, and generate explanations from PDF documents. Improved response accuracy using retrieval-augmented techniques.',
    techStack: ['Python', 'NLP', 'Machine Learning', 'RAG'],
    githubUrl: 'https://github.com/AnkitSwarnkar1122',
    image: 'https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['#AI', '#NLP', '#RAG', '#Python']
  },
  {
    id: '2',
    title: 'E-Commerce Platform',
    description: 'Full-stack application with focus on clean, efficient, and scalable code. Features include product management, user auth, and payment processing.',
    techStack: ['React', 'Next.js', 'Django', 'PostgreSQL'],
    githubUrl: 'https://github.com/AnkitSwarnkar1122',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    tags: ['#FullStack', '#React', '#Django']
  }
];

export const skills: Skill[] = [
  // Technical Skills
  { name: 'Python', category: 'technical' },
  { name: 'JavaScript', category: 'technical' },
  { name: 'React', category: 'technical' },
  { name: 'Next.js', category: 'technical' },
  { name: 'Django', category: 'technical' },
  { name: 'PostgreSQL', category: 'technical' },
  { name: 'MySQL', category: 'technical' },
  { name: 'MongoDB', category: 'technical' },
  { name: 'Vercel', category: 'technical' },
  { name: 'GitHub', category: 'technical' },
  { name: 'CSS', category: 'technical' },
  { name: 'HTML', category: 'technical' },

  // Teaching & Education
  { name: 'Student mentoring', category: 'teaching' },
  { name: 'Coding instruction', category: 'teaching' },
  { name: 'Simplifying complex concepts', category: 'teaching' },
  { name: 'Curriculum planning', category: 'teaching' },

  // Leadership & Teamwork
  { name: 'Team leading', category: 'leadership' },
  { name: 'Project management', category: 'leadership' },
  { name: 'Motivating team members', category: 'leadership' },
  { name: 'Team communication & coordination', category: 'leadership' },
  { name: 'Delegating tasks', category: 'leadership' },

  // Creative Skills
  { name: 'Video editing', category: 'creative' },
  { name: 'Content creation', category: 'creative' },
  { name: 'Visual storytelling', category: 'creative' },

  // Marketing
  { name: 'Digital marketing', category: 'marketing' },
  { name: 'Social media management', category: 'marketing' },
  { name: 'Client communication', category: 'marketing' },

  // Soft Skills
  { name: 'Problem-solving', category: 'soft' },
  { name: 'Analytical thinking', category: 'soft' },
  { name: 'Time management', category: 'soft' },
  { name: 'Quick learner', category: 'soft' },
  { name: 'Creativity', category: 'soft' }
];

export const experiences: Experience[] = [
  {
    role: 'AI & Machine Learning Intern',
    company: 'DIGINEPTRONICS R&D COMPANY',
    period: '02/11/2025 - 02/02/2026',
    description: [
      'Developed a RAG-based PDF explainer system using NLP and machine learning techniques',
      'Contributed to the development of an AI-powered learning platform',
      'Trained, tested, and improved document understanding models'
    ],
    website: 'WWW.DIGINEPTRONICS.COM',
    projects: [
      {
        name: 'RAG-based PDF Explainer System',
        description: 'Built a system to retrieve, analyze, and generate explanations from PDF documents',
        github: 'https://github.com/AnkitSwarnkar1122'
      }
    ],
    certification: {
      name: 'AI/ML Internship Certificate – PadhneAI',
      link: '#'
    }
  },
  {
    role: 'Project Management Assistant',
    company: 'INDOR COMPANY',
    location: 'KATHMANDU, NEPAL',
    period: '02/01/2026 - 17/04/2026',
    description: [
      'Assisted in planning, coordinating, and tracking project tasks and deadlines',
      'Conducted research using AI tools to support decision-making and project efficiency',
      'Supported team communication and documentation across ongoing projects'
    ],
    website: 'indor.com.np'
  },
  {
    role: 'Teacher & Student\'s Mentor',
    company: 'SAAN COACHING & TRAINING CENTER',
    location: 'JANAKPUR, NEPAL',
    period: '01/03/2023 - 06/03/2026',
    description: [
      'Taught Mathematics and Computer Science to students.',
      'Mentored and managed students, tracking academic progress and providing support.',
      'Created a positive learning environment focused on student growth and understanding.',
      'Taught over 50 students of Secondary Level Examination.'
    ],
    website: 'saanmobile.com.np'
  },
  {
    role: 'Sales & Marketing',
    company: 'NIDHI JEWELLERS',
    location: 'JANAKPUR, NEPAL',
    period: 'CURRENT',
    description: [
      'Assisted in day-to-day business operations and overall business management',
      'Supported inventory handling, customer relations, and financial record-keeping',
      'Managed and grew the business presence on TikTok and Google Maps for authenticity and local visibility',
      'Gained hands-on experience in retail business management and client communication'
    ]
  }
];

export const educationList: Education[] = [
  {
    institution: 'RAJARSHI JANAK UNIVERSITY',
    degree: 'BACHELOR OF SCIENCE IN COMPUTER SCIENCE AND INFORMATION TECHNOLOGY',
    location: 'JANAKPUR, NEPAL',
    period: '18/09/2021 - 05/12/2025',
    grade: '3.35',
    details: [
      'Software & Systems: Built a strong foundation in Data Structures & Algorithms, Operating Systems, and Software Engineering principles.',
      'Programming & Development: Developed full-stack web applications using React, Next.js, and Django.',
      'Data & Databases: Gained practical knowledge of Database Management Systems (MySQL, MongoDB).',
      'Artificial Intelligence Fundamentals: Acquired basic understanding of AI and Machine Learning concepts.'
    ],
    website: 'https://rju.edu.np/'
  },
  {
    institution: 'JANAKI AWASIYA SECONDARY SCHOOL',
    degree: 'SCHOOL LEAVING CERTIFICATE EXAMINATION',
    location: 'JANAKPUR, NEPAL',
    period: '16/05/2017 - 16/05/2019',
    grade: '2.94',
    website: 'https://www.facebook.com/share/1BFGE3ZBiV'
  },
  {
    institution: 'MODEL PUBLIC SCHOOL',
    degree: 'SECONDARY EDUCATION EXAM',
    location: 'JANAKPUR, NEPAL',
    period: 'Completed',
    grade: '3.35',
    website: 'https://www.facebook.com/share/17VrhHPgtk'
  }
];

export const ieltsScore = {
  date: '08/12/2025',
  overall: 7.0,
  listening: 8.5,
  reading: 7.0,
  writing: 6.0,
  speaking: 6.0
};

export const achievements: Achievement[] = [
  {
    title: 'IELTS Overall Band 7.0',
    description: 'Demonstrates strong listening and reading proficiency with competent communication skills',
    date: '2025',
    icon: 'Award'
  },
  {
    title: 'AI/ML Internship Certificate',
    description: 'Completed internship at Digineptronics with focus on RAG-based systems',
    date: '2026',
    icon: 'Award',
    link: '#'
  }
];

// For backward compatibility during migration
export const education: Education = educationList[0];
export const experience = experiences[0];