import {
  addDoc,
  collection,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type { Student } from "../types/student.types";

export type CreateStudentRequest = Omit<
  Student,
  "id" | "createdAt" | "updatedAt"
>;

class StudentService {
  async createStudent(data: CreateStudentRequest) {
    const docRef = await addDoc(
      collection(db, "students"),
      {
        ...data,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
    );

    return docRef.id;
  }
}

export const studentService = new StudentService();