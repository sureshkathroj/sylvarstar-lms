import { MessageCircle } from "lucide-react";

const phoneNumber = "917093013375"; // Replace with your WhatsApp number

const message =
  "Hi! I'm interested in joining SylvarStar. Please share the course details.";

export function FloatingWhatsApp() {
  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(
        message
      )}`}
      target="_blank"
      rel="noopener noreferrer"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        h-16
        w-16
        items-center
        justify-center
        rounded-full
        bg-[#25D366]
        text-white
        shadow-2xl
        transition
        duration-300
        hover:scale-110
      "
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-8 w-8" />
    </a>
  );
}