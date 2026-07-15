import { Outlet } from "react-router-dom";

import { Navbar } from "@/features/marketing/sections/navbar/Navbar";
import { Footer } from "@/features/marketing/sections/footer/Footer";

export function MarketingLayout() {
  return (
    <>
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />
    </>
  );
}