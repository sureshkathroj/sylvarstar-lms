import {
  addDoc,
  collection,
  getDocs,
  query,
  where,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import {
  CreateStudentCourseInput,
  StudentCourse,
} from "../types/student-course.types";
const COLLECTION_NAME = "studentCourses";

const studentCoursesRef = collection(db, COLLECTION_NAME);

class StudentCourseService {
    async isAlreadyAssigned(
  studentId: string,
  courseId: string
): Promise<boolean> {
  const q = query(
    studentCoursesRef,
    where("studentId", "==", studentId),
    where("courseId", "==", courseId)
  );

  const snapshot = await getDocs(q);

  return !snapshot.empty;
}

async assignCourse(
  input: CreateStudentCourseInput,
  assignedBy: string
) {
  const alreadyAssigned =
    await this.isAlreadyAssigned(
      input.studentId,
      input.courseId
    );

  if (alreadyAssigned) {
    throw new Error("This course is already assigned.");
  }

  await addDoc(studentCoursesRef, {
    studentId: input.studentId,
    courseId: input.courseId,
    assignedBy,
    assignedAt: serverTimestamp(),

    status: input.status,

    startDate: input.startDate ?? null,

    endDate: input.endDate ?? null,

    notes: input.notes ?? "",
  });
}

}

export const studentCourseService = new StudentCourseService();