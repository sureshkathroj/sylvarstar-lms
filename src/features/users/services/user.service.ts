import {
  doc,
  getDoc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";

import type { AppUser } from "../types/user.types";

class UserService {
  async getUser(uid: string): Promise<AppUser | null> {
    const ref = doc(db, "users", uid);

    const snapshot = await getDoc(ref);

    if (!snapshot.exists()) {
      return null;
    }

    return snapshot.data() as AppUser;
  }
}

export const userService = new UserService();