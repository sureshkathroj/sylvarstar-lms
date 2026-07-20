export const ENQUIRY_STATUS = {
  NEW: "new",
  CONTACTED: "contacted",
  FOLLOW_UP: "follow-up",
  REGISTERED: "registered",
  CLOSED: "closed",
} as const;

export type EnquiryStatus =
  (typeof ENQUIRY_STATUS)[keyof typeof ENQUIRY_STATUS];

export interface Enquiry {
  [x: string]: ReactNode;
  id: string;

  name: string;

  email: string;

  phone: string;

  course: string;

  message?: string;

  status: EnquiryStatus;

  source: string;

  createdAt: Date;

  updatedAt: Date;
}