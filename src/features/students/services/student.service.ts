import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
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

  async getStudents() {
    const snapshot = await getDocs(
        query(
            collection(db, "students"),
            orderBy("createdAt", "desc")
        )
    );

    return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
    })) as Student[];
}
}

export const studentService = new StudentService();