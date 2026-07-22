import { useEffect, useState } from "react";

import PageHeader from "@/shared/components/page-header/PageHeader";

import { useAuth } from "@/features/auth/hooks/useAuth";

import { studentService } from "../services/student.service";
import { studentCourseService } from "../services/student-course.service";

import { courseService } from "@/features/courses/services/course.service";

import {CourseCard} from "../../marketing/pages/courses/components/CourseCard";

export default function MyCoursesPage() {
  const { firebaseUser } = useAuth();

  const [courses, setCourses] = useState<any[]>([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
  async function loadCourses() {
    if (!firebaseUser) {
      setLoading(false);
      return;
    }

    try {
      console.log("Firebase UID:", firebaseUser.uid);

      const student =
        await studentService.getStudentByFirebaseUid(
          firebaseUser.uid
        );

      console.log("Student:", student);

      if (!student) {
        setCourses([]);
        return;
      }

      const assignments =
        await studentCourseService.getAssignments(
          student.id
        );

      console.log("Assignments:", assignments);

      const data = await Promise.all(
        assignments.map((assignment) =>
          courseService.getCourse(assignment.courseId)
        )
      );

      console.log("Courses:", data);

      setCourses(
        data.filter(Boolean) as any[]
      );
    } catch (error) {
      console.error("Failed to load courses:", error);
      setCourses([]);
    } finally {
      setLoading(false);
    }
  }

  loadCourses();
}, [firebaseUser]);

  return (
    <div className="space-y-6">

      <PageHeader
        title="My Courses"
        description="Continue your learning journey."
      />

      {loading && (
        <div>Loading courses...</div>
      )}

      {!loading &&
        courses.length === 0 && (
          <div className="rounded-lg border p-8 text-center">
            No courses assigned yet.
          </div>
        )}

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
          />
        ))}

      </div>

    </div>
  );
}