import {
  signInWithEmailAndPassword,
  signOut,
  UserCredential,
} from "firebase/auth";

import { auth } from "@/lib/firebase";

export const authService = {
  login(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(auth, email, password);
  },

  logout() {
    return signOut(auth);
  },
};