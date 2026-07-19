import { createContext, useContext } from "react";
import { useCourses } from "../hooks/useCourses";

type CourseContextType = ReturnType<typeof useCourses>;

const CourseContext =
  createContext<CourseContextType | null>(null);

export function useCourseContext() {
  const context = useContext(CourseContext);

  if (!context)
    throw new Error("CourseContext missing");

  return context;
}

export { CourseContext };