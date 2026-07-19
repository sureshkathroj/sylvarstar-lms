import { Database, Code2 } from "lucide-react";

export const learningPaths = [
  {
    id: "oracle",
    title: "Oracle Fusion Academy",
    subtitle:
      "Master Oracle Cloud ERP and become a certified Oracle consultant.",

    icon: Database,

    features: [
      "6 Professional Courses",
      "Live Projects",
      "Online & Classroom Training",
      "Career Guidance & Placement Support",
    ],

    button: "Explore Oracle Fusion",

    theme: "blue",

    illustration: "/images/learning-path/oracle.png",
  },

  {
    id: "software",

    title: "Software Development Academy",

    subtitle:
      "Become a modern developer with in-demand technologies and AI-powered learning.",

    icon: Code2,

    features: [
      "6+ Learning Tracks",
      "AI Powered Curriculum",
      "Real-world Projects",
      "Job Ready Program",
    ],

    button: "Explore Software Development",

    theme: "purple",

    illustration: "/images/learning-path/software.png",
  },
];