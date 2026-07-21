import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import { db } from "@/lib/firebase";
import { where } from "firebase/firestore";


class CourseService {
  
async getActiveCourses() {
  const q = query(
    collection(db, "courses"),
    where("status", "==", "active")
  );

  const snapshot = await getDocs(q);

  return snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
}
  
}

export const courseService = new CourseService();