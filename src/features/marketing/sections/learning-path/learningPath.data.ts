import { Database, Code2 } from "lucide-react";

export const learningPaths = [
  {
    id: "oracle",
    title: "Oracle Fusion Academy",
    subtitle:
      "Master Oracle Cloud ERP and become a certified Oracle consultant.",

    icon: Database,

    features: [
  "Live Classes",
  "Real Projects",
  "Industry Mentors",
  "Placement Support",
],

    button: "Explore Oracle Fusion",

    theme: "blue",
    href: "/courses?academy=oracle",

    illustration: "/images/learning-path/oracle.png",
  },

  {
    id: "software",

    title: "Software Development Academy",

    subtitle:
      "Become a modern developer with in-demand technologies and AI-powered learning.",

    icon: Code2,

    features: [
  "React & Angular",
  "AI Powered Learning",
  "Hands-on Projects",
  "Job Ready Program",
],

    button: "Explore Software Development",

    theme: "purple",
    href: "/courses?academy=software",

    illustration: "/images/learning-path/software.png",
  },
];