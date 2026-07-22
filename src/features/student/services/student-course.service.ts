import {
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type {
  StudentCourse,
} from "../types/student-course.types";

class StudentCourseService {
  async getAssignments(studentId: string) {
    const q = query(
      collection(db, "studentCourses"),
      where("studentId", "==", studentId),
      where("status", "==", "active")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    })) as StudentCourse[];
  }
}

export const studentCourseService =
  new StudentCourseService();