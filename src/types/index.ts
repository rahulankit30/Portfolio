export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  category: string[];
  github?: string;
  live?: string;
  highlights: string[];
  featured?: boolean;
  isOSS?: boolean;
  company?: string;
  period?: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  period: string;
  location: string;
  description: string;
  highlights: string[];
  tags: string[];
  current?: boolean;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  location: string;
  score: string;
  scoreLabel: string;
  highlights?: string[];
}

export interface Award {
  id: string;
  title: string;
  description: string;
  company: string;
  icon: string;
}

export interface SkillCategory {
  id: string;
  label: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

export interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export interface SocialLink {
  platform: string;
  href: string;
  icon: string;
}
