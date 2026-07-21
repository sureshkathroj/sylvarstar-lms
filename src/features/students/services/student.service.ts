import {
  addDoc,
  doc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
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

  async updateStudent(
    id: string,
    data: Partial<CreateStudentRequest>
  ) {
    await updateDoc(

      doc(
        db,
        "students",
        id
      ),

      {

        ...data,

        updatedAt:
          serverTimestamp(),

      }

    );
  }

  async updateStudentStatus(
    id: string,
    status: "active" | "inactive"
) {
    await updateDoc(
        doc(db, "students", id),
        {
            status,
            updatedAt: serverTimestamp(),
        }
    );
}

}
export const studentService = new StudentService();