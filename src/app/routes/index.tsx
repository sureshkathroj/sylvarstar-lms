import { createBrowserRouter } from "react-router-dom";

import HomePage from "@/features/marketing/pages/HomePage";
import { MarketingLayout } from "@/features/marketing/layout/MarketingLayout";
import { ProgramsPage } from "@/features/marketing/pages/ProgramsPage";
import { BlogPage } from "@/features/marketing/pages/BlogPage";
import { AboutPage } from "@/features/marketing/pages/AboutPage";
import { ContactPage } from "@/features/marketing/pages/ContactPage";
import { CorporateTrainingPage } from "@/features/marketing/pages/CorporateTrainingPage";

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
        path: "/corporate-training",
        element: <CorporateTrainingPage />,
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
    ],
  },
]);