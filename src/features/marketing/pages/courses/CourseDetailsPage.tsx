import { useParams, Navigate } from "react-router-dom";
import { getCourse } from "./utils/getCourse";
import { CourseHeader } from "./sections/CourseHeader";
import { CourseOverview } from "./sections/CourseOverview";
import { WhoShouldJoin } from "./sections/WhoShouldJoin";
import { LearningOutcomes } from "./sections/LearningOutcomes";
import { Technologies } from "./sections/Technologies";
import { Curriculum } from "./sections/Curriculum";

export default function CourseDetailsPage() {
  const { slug } = useParams();

  const course = getCourse(slug ?? "");

  if (!course) {
    return <Navigate to="/courses" replace />;
  }

  return (
    <main className="bg-slate-50 min-h-screen">
      <CourseHeader course={course} />
    <CourseOverview course={course} />
    <WhoShouldJoin course={course} />
    <LearningOutcomes course={course} />
    <Technologies course={course} />
    <Curriculum course={course} />
    {/* <BookDemoCTA course={course} /> */}
    </main>
  );
}