import { useEffect, useState } from "react";
import { courseService } from "../services/course.service";

export function useActiveCourses() {
  const [courses, setCourses] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadCourses() {
      try {
        const data = await courseService.getActiveCourses();
        setCourses(data);
      } finally {
        setLoading(false);
      }
    }

    loadCourses();
  }, []);

  return {
    courses,
    loading,
  };
}