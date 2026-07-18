import { Link } from "react-router-dom";
import logo from "../../assets/logo/SylvarStar_logo_primary.png";

export function Logo() {
  return (
    <Link to="/" className="flex items-center">
      <img
        src={logo}
        alt="SylvarStar"
        className="h-14 w-auto"
      />
    </Link>
  );
}