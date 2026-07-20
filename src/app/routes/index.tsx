import { createBrowserRouter, Navigate } from "react-router-dom";

import HomePage from "@/features/marketing/pages/HomePage";
import { MarketingLayout } from "@/features/marketing/layout/MarketingLayout";
import { ProgramsPage } from "@/features/marketing/pages/ProgramsPage";
import { BlogPage } from "@/features/marketing/pages/BlogPage";
import { AboutPage } from "@/features/marketing/pages/about/AboutPage";
import { ContactPage } from "@/features/marketing/pages/ContactPage";
import OracleFusionPage from "@/features/marketing/pages/OracleTechnologiesPage";
import SoftwareDevelopmentPage from "@/features/marketing/pages/SoftwareDevelopmentPage";
import { CoursesPage } from "@/features/marketing/pages/courses";
import CourseDetailsPage from "@/features/marketing/pages/courses/CourseDetailsPage";
import AuthTestPage from "@/features/auth/pages/AuthTestPage";
import LoginPage from "@/features/shell/pages/LoginPage";
import ProtectedRoute from "@/features/auth/guards/ProtectedRoute";
import AppLayout from "@/features/shell/layouts/AppLayout";
import DashboardPage from "@/features/shell/pages/DashboardPage";



export const router = createBrowserRouter([
  {
    element: <MarketingLayout />,

    children: [
      {
        path: "/",
        element: <HomePage />,
      },

      {
        path: "/technology-tracks",
        element: <ProgramsPage />,
      },
      {
        path: "/blog",
        element: <BlogPage />,
      },

      {
        path: "/about",
        element: <AboutPage />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "courses",
        element: <CoursesPage />
      },
      {
        path: "/courses/:slug",
        element: <CourseDetailsPage />,
      },
      {
        path: "/auth-test",
        element: <AuthTestPage />,
      },

      {
        path: "/programs/oracle-fusion",
        element: <OracleFusionPage />,
      },
      {
        path: "/programs/software-development",
        element: <SoftwareDevelopmentPage />
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
    ],
  },
  {
  element: <ProtectedRoute />,
  children: [
    {
      path: "/app",
      element: <AppLayout />,
      children: [
        {
          index: true,
          element: <Navigate to="dashboard" replace />,
        },
        {
          path: "dashboard",
          element: <DashboardPage />,
        },
      ],
    },
  ],
}
]);