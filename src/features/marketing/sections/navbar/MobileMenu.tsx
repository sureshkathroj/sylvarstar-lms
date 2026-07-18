import { Menu, X, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import { navigation } from "../../config/navigation";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="rounded-xl border border-white/10 p-2 lg:hidden"
        aria-label="Open Menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <aside
            className="
              fixed
              right-0
              top-0
              z-50
              flex
              h-full
              w-[320px]
              flex-col
              bg-slate-950
              shadow-2xl
            "
          >
            <div className="flex items-center justify-between border-b border-white/10 p-6">
              <h3 className="text-lg font-bold text-white">
                Menu
              </h3>

              <button onClick={() => setOpen(false)}>
                <X className="h-6 w-6 text-white" />
              </button>
            </div>

            <nav className="flex flex-1 flex-col p-6">
              {navigation.map((item) => (
                <NavLink
                  key={item.label}
                  to={item.href}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `
                    rounded-xl
                    px-4
                    py-4
                    text-base
                    font-medium
                    transition

                    ${
                      isActive
                        ? "bg-cyan-500 text-white"
                        : "text-slate-300 hover:bg-slate-800"
                    }
                    `
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            <div className="border-t border-white/10 p-6">
              <button
                onClick={() => {
                  navigate("/student-login");
                  setOpen(false);
                }}
                className="
                  flex
                  w-full
                  items-center
                  justify-center
                  rounded-xl
                  bg-cyan-500
                  py-4
                  font-semibold
                  text-white
                  transition
                  hover:bg-cyan-400
                "
              >
                Student Login

                <ArrowRight className="ml-2 h-4 w-4" />
              </button>
            </div>
          </aside>
        </>
      )}
    </>
  );
}