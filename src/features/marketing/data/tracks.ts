import {
  Database,
  Code2,
 Sparkles,
  Building2,
} from "lucide-react";

import type { TechnologyTrack } from "../types/track";

export const tracks: TechnologyTrack[] = [
  {
    id: 1,
    slug: "oracle-technologies",
    title: "Oracle Technologies",
    description:
      "Master Oracle Fusion Applications, HCM, SCM, Financials and Enterprise ERP solutions.",
      cta:"/tracks/oracle-technologies",
    icon: Database,
    featured: false,
  },
  {
    id: 2,
    slug: "software-development",
    title: "Software Development",
    description:
      "Build modern web applications with Full Stack Development, React, Angular, Java and Python.",
      cta:"/tracks/software-development",
    icon: Code2,
    featured: true,
  },
  {
    id: 3,
    slug: "ai-future-skills",
    title: "AI & Future Skills",
    description:
      "Learn AI-assisted development, developer productivity and emerging technologies.",
      cta:"/tracks/ai-future-skills",
    icon: Sparkles,
    comingSoon: true,
  },
  {
    id: 4,
    slug: "enterprise-platforms",
    title: "Enterprise Platforms",
    description:
      "ServiceNow, Salesforce, SAP and other enterprise platforms.",
    cta:"/tracks/enterprise-platforms",
    icon: Building2,
    comingSoon: true,
  },
];