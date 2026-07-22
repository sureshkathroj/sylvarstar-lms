import {
  collection,
  getDocs,
  query,
  where,
  doc,
  getDoc,
  setDoc,
  updateDoc,
  serverTimestamp,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import { USER_ROLES } from "@/features/users/constants/roles";
import { USER_STATUS } from "@/features/users/constants/roles";

export interface Student {
  id: string;
  name: string;
  email: string;
}

class StudentService {
  async getStudentByEmail(email: string) {
    const q = query(
      collection(db, "students"),
      where("email", "==", email)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      return null;
    }

    const doc = snapshot.docs[0];

    return {
      id: doc.id,
      ...doc.data(),
    } as Student;
  }

  async getStudentByFirebaseUid(firebaseUid: string) {
  const q = query(
    collection(db, "students"),
    where("firebaseUid", "==", firebaseUid)
  );

  const snapshot = await getDocs(q);

  if (snapshot.empty) {
    return null;
  }

  const studentDoc = snapshot.docs[0];

  return {
    id: studentDoc.id,
    ...studentDoc.data(),
  } as Student;
}

  async enableStudentLogin(
  student: Student,
  firebaseUid: string
) {
  // Update student document
  await updateDoc(
    doc(db, "students", student.id),
    {
      firebaseUid,
      loginEnabledAt: serverTimestamp(),
    }
  );

  // Create users/{uid}
  await setDoc(
    doc(db, "users", firebaseUid),
    {
      uid: firebaseUid,
      displayName: student.name,
      email: student.email,
      role: USER_ROLES.STUDENT,
      status: USER_STATUS.ACTIVE,
      createdAt: serverTimestamp(),
    }
  );
}
}

export const studentService =
  new StudentService();