import type { LucideIcon } from "lucide-react";

export interface TechnologyTrack {
  id: number;
  slug: string;
  title: string;
  description: string;
  icon: LucideIcon;
  featured?: boolean;
  comingSoon?: boolean;
}