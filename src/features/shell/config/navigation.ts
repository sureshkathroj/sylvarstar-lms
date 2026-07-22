import {
  BookOpen,
  GraduationCap,
  Inbox,
  LayoutDashboard,
  Layers3,
  Settings,
  UserCog,
  Users,
} from "lucide-react";

import { USER_ROLES } from "@/features/users/constants/roles";

const adminNavigation = [
  {
    title: "General",
    items: [
      {
        label: "Dashboard",
        to: "/app/dashboard",
        icon: LayoutDashboard,
      },
    ],
  },
  {
    title: "Admissions",
    items: [
      {
        label: "Enquiries",
        to: "/app/enquiries",
        icon: Inbox,
      },
      {
        label: "Students",
        to: "/app/students",
        icon: Users,
      },
    ],
  },
  {
    title: "Academics",
    items: [
      {
        label: "Courses",
        to: "/app/courses",
        icon: BookOpen,
      },
      {
        label: "Trainers",
        to: "/app/trainers",
        icon: GraduationCap,
      },
      {
        label: "Batches",
        to: "/app/batches",
        icon: Layers3,
      },
    ],
  },
  {
    title: "Administration",
    items: [
      {
        label: "Users",
        to: "/app/users",
        icon: UserCog,
      },
      {
        label: "Settings",
        to: "/app/settings",
        icon: Settings,
      },
    ],
  },
];

const studentNavigation = [
  {
    title: "Learning",
    items: [
      {
        label: "Dashboard",
        to: "/app/dashboard",
        icon: LayoutDashboard,
      },
      {
        label: "My Courses",
        to: "/app/my-courses",
        icon: LayoutDashboard,
      },
    ],
  },
];

const trainerNavigation: typeof adminNavigation = [];

export const navigation = {
  [USER_ROLES.ADMIN]: adminNavigation,

  // For MVP, Super Admin sees everything Admin sees
  [USER_ROLES.SUPER_ADMIN]: adminNavigation,

  [USER_ROLES.STUDENT]: studentNavigation,

  [USER_ROLES.TRAINER]: trainerNavigation,
} as const;