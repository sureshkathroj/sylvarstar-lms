import { useCallback, useEffect, useState } from "react";

import { courseService } from "../services/course.service";
import type { Course } from "../types/course.types";

export function useCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);

  const loadCourses = useCallback(async () => {
    try {
      setLoading(true);

      const data = await courseService.getCourses();

      setCourses(data);
    } catch (error) {
      console.error("Failed to load courses:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    loadCourses();
  }, [loadCourses]);

  return {
    courses,
    loading,
    refresh: loadCourses,
  };
}