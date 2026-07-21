import { useState } from "react";
import { CreateStudentCourseInput } from "../types/student-course.types";
import { studentCourseService } from "../services/student-course.service";
import { toast } from "sonner";

export function useAssignCourse() {
  const [loading, setLoading] = useState(false);

  const assignCourse = async (
    input: CreateStudentCourseInput,
    assignedBy: string
  ) => {
    try {
      setLoading(true);

      await studentCourseService.assignCourse(
        input,
        assignedBy
      );

      toast.success("Course assigned successfully");

      return true;
    } catch (error) {
      toast.error(
        (error as Error).message ||
          "An error occurred while assigning the course"
      );

      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    assignCourse,
    loading,
  };
}