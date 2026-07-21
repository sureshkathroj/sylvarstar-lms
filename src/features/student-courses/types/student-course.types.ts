import { Timestamp } from "firebase/firestore";

export const STUDENT_COURSE_STATUS = {
  ACTIVE: "active",
  COMPLETED: "completed",
  EXPIRED: "expired",
} as const;

export type StudentCourseStatus =
  (typeof STUDENT_COURSE_STATUS)[keyof typeof STUDENT_COURSE_STATUS];

export interface StudentCourse {
  id: string;

  studentId: string;

  courseId: string;

  assignedBy: string;

  assignedAt: Timestamp;

  status: StudentCourseStatus;

  startDate?: Timestamp | null;

  endDate?: Timestamp | null;

  notes?: string;
}

export interface CreateStudentCourseInput {
  studentId: string;

  courseId: string;

  status: StudentCourseStatus;

  startDate?: Date;

  endDate?: Date;

  notes?: string;
}

export interface UpdateStudentCourseInput {
  status?: StudentCourseStatus;

  startDate?: Date;

  endDate?: Date;

  notes?: string;
}