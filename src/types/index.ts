export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  liveUrl?: string;
  githubUrl: string;
  image: string;
  tags: string[];
}

export interface Skill {
  name: string;
  icon?: string;
  level?: number;
  category: 'technical' | 'teaching' | 'leadership' | 'creative' | 'marketing' | 'exploration' | 'soft';
}

export interface Achievement {
  title: string;
  description: string;
  date: string;
  icon: string;
  link?: string;
}

export interface Education {
  institution: string;
  degree: string;
  location: string;
  period: string;
  details?: string[];
  grade?: string;
  website?: string;
}

export interface Experience {
  role: string;
  company: string;
  location?: string;
  period: string;
  description: string[];
  website?: string;
  projects?: {
    name: string;
    description: string;
    github?: string;
  }[];
  certification?: {
    name: string;
    link: string;
  };
}