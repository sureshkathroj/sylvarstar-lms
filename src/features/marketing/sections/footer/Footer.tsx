import {
  MapPin,
  Phone,
  Mail,
  Clock
} from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-slate-50">
      <div className="container mx-auto grid gap-12 px-6 py-20 lg:grid-cols-4">

        {/* Brand */}

        <div>

          <h3 className="text-2xl font-black text-slate-900">
            SylvarStar
          </h3>

          <p className="mt-4 leading-7 text-slate-600">
            AI-powered learning platform helping students
            build future-ready skills through live classes,
            real projects and expert mentorship.
          </p>

          <div className="mt-8 space-y-4">

            <div className="flex items-start gap-3">

              <MapPin className="mt-1 h-5 w-5 text-indigo-600" />

              <p className="text-sm text-slate-600">
                SylvarStar Learning Center
                <br />
                Madhapur,
                Hyderabad,
                Telangana – 500081
              </p>

            </div>

            <div className="flex items-center gap-3">

              <Phone className="h-5 w-5 text-indigo-600" />

              <span className="text-sm text-slate-600">
                +91 98765 43210
              </span>

            </div>

            <div className="flex items-center gap-3">

              <Mail className="h-5 w-5 text-indigo-600" />

              <span className="text-sm text-slate-600">
                hello@sylvarstar.com
              </span>

            </div>

          </div>

        </div>

        {/* Programs */}

        <div>

          <h4 className="font-semibold text-slate-900">
            Programs
          </h4>

          <ul className="mt-6 space-y-3 text-slate-600">

            <li>React Development</li>

            <li>Angular</li>

            <li>Java Full Stack</li>

            <li>Python</li>

            <li>Artificial Intelligence</li>

          </ul>

        </div>

        {/* Company */}

        <div>

          <h4 className="font-semibold text-slate-900">
            Company
          </h4>

          <ul className="mt-6 space-y-3 text-slate-600">

            <li>About Us</li>

            <li>Contact</li>

            <li>Privacy Policy</li>

            <li>Terms & Conditions</li>

          </ul>

        </div>

        {/* Hours */}

        <div>

          <h4 className="font-semibold text-slate-900">
            Business Hours
          </h4>

          <div className="mt-6 flex gap-3">

            <Clock className="h-5 w-5 text-indigo-600" />

            <div className="text-slate-600">

              <p>Monday – Saturday</p>

              <p>9:00 AM – 8:00 PM</p>

            </div>

          </div>

          <div className="mt-8 flex gap-4">

            {/* <Instagram className="h-5 w-5 cursor-pointer text-slate-500 hover:text-indigo-600" />

            <Linkedin className="h-5 w-5 cursor-pointer text-slate-500 hover:text-indigo-600" />

            <Youtube className="h-5 w-5 cursor-pointer text-slate-500 hover:text-indigo-600" /> */}

          </div>

        </div>

      </div>

      <div className="border-t py-6 text-center text-sm text-slate-500">
        © 2026 SylvarStar Learning Center. All rights reserved.
      </div>

    </footer>
  );
}