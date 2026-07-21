import { CourseLevel, CourseMode } from "../types/course.types";

export const COURSE_MODES: CourseMode[] = [
  "Online",
  "Offline",
  "Hybrid",
];

export const COURSE_LEVELS: CourseLevel[] = [
  "Beginner",
  "Intermediate",
  "Advanced",
];

export const COURSE_STATUS = {
  ACTIVE: "active",
  INACTIVE: "inactive",
} as const;

export const COURSE_CATEGORIES = [
  "Oracle Fusion",
  "Software Development",
  "Database",
  "AI",
];