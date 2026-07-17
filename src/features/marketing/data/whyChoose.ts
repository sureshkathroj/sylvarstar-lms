import {
  Briefcase,
  Award,
  type LucideIcon,
} from "lucide-react";

export type WhyChooseItem = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const whyChooseItems: WhyChooseItem[] = [
  {
    icon: Briefcase,
    title: "10+ Years Industry Experience",
    description:
      "Learn from software professionals working on enterprise applications.",
  },
  // {
  //   icon: FolderGit2,
  //   title: "Live Project Based Learning",
  //   description:
  //     "Build portfolio-ready applications instead of only theory.",
  // },
  
  
  {
    icon: Award,
    title: "Placement Guidance",
    description:
      "Mock interviews and continuous career support.",
  },
];