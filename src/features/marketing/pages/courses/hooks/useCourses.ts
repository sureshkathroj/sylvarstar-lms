import { useMemo, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { courses } from "../data/courses";

export function useCourses() {
  const [searchParams, setSearchParams] = useSearchParams();

const initialAcademy =
  searchParams.get("academy") === "software"
    ? "software"
    : "oracle";

const [academy, setAcademyState] =
  useState<"oracle" | "software">(initialAcademy);
  const setAcademy = (value: "oracle" | "software") => {
  setAcademyState(value);

  setSearchParams({
    academy: value,
  });
};
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