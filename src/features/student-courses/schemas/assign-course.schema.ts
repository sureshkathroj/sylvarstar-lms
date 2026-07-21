import { z } from "zod";
import { STUDENT_COURSE_STATUS } from "../types/student-course.types";

export const assignCourseSchema = z.object({
  courseId: z.string().min(1, "Please select a course"),

  status: z.enum([
    STUDENT_COURSE_STATUS.ACTIVE,
    STUDENT_COURSE_STATUS.COMPLETED,
    STUDENT_COURSE_STATUS.EXPIRED,
  ]),

  startDate: z.date().optional(),

  endDate: z.date().nullable().optional(),

  notes: z
    .string()
    .max(500, "Notes cannot exceed 500 characters")
    .optional(),
});

export type AssignCourseFormData = z.infer<typeof assignCourseSchema>;