import {
  addDoc,
  collection,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
  updateDoc,
  doc,
} from "firebase/firestore";

import { db } from "@/lib/firebase";
import type { Enquiry } from "../types/enquiry.types";

export interface CreateEnquiryRequest {
  name: string;
  email: string;
  phone: string;
  academy: string;
  mode: string;
  message: string;
}


class EnquiryService {
  async createEnquiry(data: CreateEnquiryRequest) {
    return addDoc(collection(db, "enquiries"), {
      ...data,
      status: "new",
      source: "website",
      createdAt: serverTimestamp(),
      updatedAt: serverTimestamp(),
    });
  }


  async getEnquiries(): Promise<Enquiry[]> {
    const q = query(
      collection(db, "enquiries"),
      orderBy("createdAt", "desc")
    );

    const snapshot = await getDocs(q);

    return snapshot.docs.map((doc) => ({
      id: doc.id,
      ...(doc.data() as Omit<Enquiry, "id">),
    }));
  }
  async convertEnquiry(
    enquiryId: string,
    studentId: string
  ) {
    await updateDoc(
      doc(db, "enquiries", enquiryId),
      {

        status: "converted",

        studentId,

        updatedAt: serverTimestamp(),

      }
    );
  }

}

export const enquiryService = new EnquiryService();