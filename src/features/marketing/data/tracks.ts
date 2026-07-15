import {
  Database,
  Code2,
  Sparkles,
  Building2,
} from "lucide-react";

export const tracks = [
  {
    id: 1,
    title: "Oracle Technologies",
    description:
      "Master Oracle Fusion Applications and Enterprise ERP solutions.",
    icon: Database,
    programs: 7,
    color: "indigo",
  },

  {
    id: 2,
    title: "Software Development",
    description:
      "Become a modern software engineer using today's most in-demand technologies.",
    icon: Code2,
    programs: 1,
    color: "blue",
    featured: true,
  },

  {
    id: 3,
    title: "AI & Future Skills",
    description:
      "Learn AI-assisted development, automation and modern engineering practices.",
    icon: Sparkles,
    programs: 0,
    color: "violet",
    comingSoon: true,
  },

  {
    id: 4,
    title: "Enterprise Platforms",
    description:
      "ServiceNow, Salesforce, SAP and Workday programs coming soon.",
    icon: Building2,
    programs: 0,
    color: "emerald",
    comingSoon: true,
  },
];