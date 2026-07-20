import {
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export const authService = {
  async login(email: string, password: string) {
    await signInWithEmailAndPassword(auth, email, password);
  },

  async logout() {
    await signOut(auth);
  },
};