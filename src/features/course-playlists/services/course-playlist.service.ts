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
  where,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type {
  CoursePlaylist,
  CreateCoursePlaylistInput,
  UpdateCoursePlaylistInput,
} from "../types/course-playlist.types";

class CoursePlaylistService {
  private collectionRef = collection(db, "coursePlaylists");

  async createPlaylist(
    data: CreateCoursePlaylistInput
  ) {
    const docRef = await addDoc(
      this.collectionRef,
      {
        ...data,
        status: "active",
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      }
    );

    return docRef.id;
  }

  async getPlaylists(courseId: string) {
    const snapshot = await getDocs(
      query(
        this.collectionRef,
        where("courseId", "==", courseId),
        orderBy("order", "asc")
      )
    );

    return snapshot.docs.map(
      (doc) =>
        ({
          id: doc.id,
          ...doc.data(),
        }) as CoursePlaylist
    );
  }

  async getPlaylist(id: string) {
    const snapshot = await getDoc(
      doc(db, "coursePlaylists", id)
    );

    if (!snapshot.exists()) {
      return null;
    }

    return {
      id: snapshot.id,
      ...snapshot.data(),
    } as CoursePlaylist;
  }

  async updatePlaylist(
    id: string,
    data: UpdateCoursePlaylistInput
  ) {
    await updateDoc(
      doc(db, "coursePlaylists", id),
      {
        ...data,
        updatedAt: serverTimestamp(),
      }
    );
  }

  async updatePlaylistStatus(
    id: string,
    status: "active" | "inactive"
  ) {
    await updateDoc(
      doc(db, "coursePlaylists", id),
      {
        status,
        updatedAt: serverTimestamp(),
      }
    );
  }
}

export const coursePlaylistService =
  new CoursePlaylistService();