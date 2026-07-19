export type Academy = "oracle" | "software";

export type Level =
  | "Beginner"
  | "Intermediate"
  | "Advanced";

export interface Course {
  id: string;
  slug: string;

  academy: Academy;

  title: string;

  shortDescription: string;

  duration: string;

  level: Level;

  mode: string;

  featured?: boolean;

  comingSoon?: boolean;

  icon?: string;
}