export type Program = {
  id: number;
  slug: string;
  title: string;
  category: "Oracle" | "Full Stack";
  duration: string;
  mode: string;
  featured?: boolean;
};

export const programs: Program[] = [
  {
    id: 1,
    slug: "oracle-hcm-technical",
    title: "Oracle Fusion HCM Technical",
    category: "Oracle",
    duration: "3 Months",
    mode: "Online & Offline",
  },
  {
    id: 2,
    slug: "oracle-hcm-functional",
    title: "Oracle Fusion HCM Functional",
    category: "Oracle",
    duration: "3 Months",
    mode: "Online & Offline",
  },
  {
    id: 3,
    slug: "oracle-techno-functional",
    title: "Oracle Fusion Techno Functional",
    category: "Oracle",
    duration: "4 Months",
    mode: "Online & Offline",
  },
  {
    id: 4,
    slug: "oracle-core-technical",
    title: "Oracle Fusion Core Technical",
    category: "Oracle",
    duration: "3 Months",
    mode: "Online",
  },
  {
    id: 5,
    slug: "oracle-financial",
    title: "Oracle Financial Technical",
    category: "Oracle",
    duration: "3 Months",
    mode: "Online",
  },
  {
    id: 6,
    slug: "oracle-scm",
    title: "Oracle SCM Technical",
    category: "Oracle",
    duration: "3 Months",
    mode: "Online",
  },
  {
    id: 7,
    slug: "oracle-sql",
    title: "Oracle SQL",
    category: "Oracle",
    duration: "2 Months",
    mode: "Online & Offline",
  },
  {
    id: 8,
    slug: "ai-powered-full-stack",
    title: "AI Powered Full Stack Developer",
    category: "Full Stack",
    duration: "6 Months",
    mode: "Classroom & Online",
    featured: true,
  },
];