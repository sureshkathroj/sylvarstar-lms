export interface Course {
  id: string;
  slug: string;
  academy: "oracle" | "software";

  title: string;
  shortDescription: string;

  duration: string;
  level: string;
  mode: string;

  featured?: boolean;

  overview?: string;

  whoShouldJoin?: string[];

  learningOutcomes?: string[];

  technologies?: string[];

  curriculum?: {
    title: string;
    topics: string[];
  }[];
}