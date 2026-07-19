import { useMemo, useState } from "react";

import { courses } from "../data/courses";

export function useCourses() {
  const [academy, setAcademy] = useState<"oracle" | "software">("oracle");
  const [level, setLevel] = useState("All");
  const [search, setSearch] = useState("");

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const academyMatch = course.academy === academy;

      const levelMatch =
        level === "All" || course.level === level;

      const searchMatch =
        course.title.toLowerCase().includes(search.toLowerCase()) ||
        course.shortDescription
          .toLowerCase()
          .includes(search.toLowerCase());

      return academyMatch && levelMatch && searchMatch;
    });
  }, [academy, level, search]);

  return {
    academy,
    setAcademy,

    level,
    setLevel,

    search,
    setSearch,

    filteredCourses,
  };
}