import { CoursesHero } from "./sections/CoursesHero";
import { AcademyTabs } from "./sections/AcademyTabs";
import { CourseToolbar } from "./sections/CourseToolbar";
import { CoursesGrid } from "./sections/CoursesGrid";
import { CourseContext } from "./context/CourseContext";
import { useCourses } from "./hooks/useCourses";

export function CoursesPage() {
  const courseState = useCourses();
  return (
     <CourseContext.Provider value={courseState}>
    <main className="bg-slate-50">
      <CoursesHero />

      <AcademyTabs />

      <CourseToolbar />

      <CoursesGrid />
    </main>
    </CourseContext.Provider>
  );
}