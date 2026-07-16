import {
  Database,
  Code2,
  type LucideIcon,
} from "lucide-react";

export type Academy = {
  id: number;
  slug: string;
  route: string;

  icon: LucideIcon;

  title: string;
  tagline: string;
  description: string;

  duration: string;
  mode: string;

  technologies: string[];
  highlights: string[];

  featured?: boolean;
};

export const academies: Academy[] = [
  {
    id: 1,

    slug: "oracle-fusion",

    route: "/programs/oracle-fusion",

    icon: Database,

    title: "Oracle Fusion Academy",

    tagline: "Enterprise ERP Solutions",

    description:
      "Professional Oracle Fusion training designed for freshers, experienced professionals and career switchers who want to build a successful ERP career.",

    duration: "3–4 Months",

    mode: "Online & Classroom",

    technologies: [
      "HCM Technical",
      "HCM Functional",
      "Techno Functional",
      "Financial",
      "SCM",
      "SQL",
    ],

    highlights: [
      "Online & Classroom Training",
      "Weekday & Weekend Batches",
      "Corporate Training",
      "Interview Preparation",
      "Placement Assistance",
    ],

    featured: true,
  },

  {
    id: 2,

    slug: "software-development",

    route: "/programs/software-development",

    icon: Code2,

    title: "Software Development Academy",

    tagline: "Modern Full Stack Development",

    description:
      "Become a job-ready software engineer by learning modern frontend, backend and AI-powered development through real-world projects.",

    duration: "6 Months",

    mode: "Online & Classroom",

    technologies: [
      "AI Full Stack",
      "React",
      "Angular",
      "Java",
      "Python",
      "Node.js",
    ],

    highlights: [
      "Live Industry Projects",
      "GitHub Portfolio",
      "Resume Building",
      "Mock Interviews",
      "Career Mentorship",
    ],

    featured: true,
  },
];