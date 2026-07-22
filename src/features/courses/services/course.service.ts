import {
  addDoc,
  collection,
  doc,
  getDoc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type {
  Course,
  CreateCourseInput,
  UpdateCourseInput,
} from "../types/course.types";

class CourseService {
  private collectionRef = collection(db, "courses");

  async createCourse(data: CreateCourseInput) {
    const docRef = await addDoc(this.collectionRef, {
      ...data,
      status: "active",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });

    return docRef.id;
  }

  async getCourses() {
    const snapshot = await getDocs(
      query(
        this.collectionRef,
        orderBy("createdAt", "desc")
      )
    );

    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as Course
    );
  }

  async getCourse(id: string) {
  const snapshot = await getDoc(doc(db, "courses", id));

  if (!snapshot.exists()) {
    return null;
  }

  return {
    id: snapshot.id,
    ...snapshot.data(),
  } as Course;
}

  async updateCourse(
    id: string,
    data: UpdateCourseInput
  ) {
    await updateDoc(doc(db, "courses", id), {
      ...data,
      updatedAt: serverTimestamp(),
    });
  }

  async updateCourseStatus(
    id: string,
    status: "active" | "inactive"
  ) {
    await updateDoc(doc(db, "courses", id), {
      status,
      updatedAt: serverTimestamp(),
    });
  }
}

export const courseService = new CourseService();