import { createBrowserRouter } from "react-router-dom";

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
      }
    ],
  },
]);