import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

import { Button } from "@/components/ui/button";

export function NavActions() {
  const navigate = useNavigate();

  return (
    <div className="hidden items-center gap-3 lg:flex">
      <Button
        size="lg"
        onClick={() => navigate("/student-login")}
        className="
rounded-full
bg-cyan-500
px-6
font-semibold
text-white
shadow-lg
transition-all
duration-300
hover:-translate-y-0.5  
hover:bg-cyan-400
hover:shadow-cyan-500/30
"
      >
        Student Login
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </div>
  );
}