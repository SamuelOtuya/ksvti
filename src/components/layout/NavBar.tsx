import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../../assets/logo.jpeg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About Us", path: "/about" },
  { name: "Courses", path: "/programmes" },
  { name: "Admissions", path: "/admissions" },
  { name: "Student Life", path: "/student-life" },
  { name: "Gallery", path: "/gallery" },
  { name: "News & Events", path: "/news" },
  { name: "Contact Us", path: "/contact" },
  {
    name: "Downloads",
    path: "/downloads",
  },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="h-[70px] px-6 lg:px-10 flex items-center justify-between">
        <NavLink to="/" className="flex items-center gap-3">
          <img src={logo} alt="KSVTI Logo" className="h-14 w-auto" />

          <div className="leading-tight">
            <div className="font-extrabold text-[15px] text-[#2d1b5e] uppercase tracking-wide">
              Kahawa Sukari
            </div>
            <div className="text-[9.5px] text-[#2d1b5e] uppercase tracking-widest font-semibold">
              Vocational & Training Institute
            </div>
            <div className="text-[9px] text-[#d4891a] italic font-semibold">
              Educating for Human Greatness
            </div>
          </div>
        </NavLink>

        <div className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `text-[12px] uppercase tracking-wide font-bold px-3 py-2 rounded transition ${
                  isActive
                    ? "text-[#2d1b5e]"
                    : "text-[#1a1a2e] hover:text-[#2d1b5e]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/apply"
            className="ml-2 bg-[#f5a623] hover:bg-[#d4891a] text-white text-[12px] uppercase font-bold px-5 py-3 rounded"
          >
            Apply Now
          </NavLink>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-[#2d1b5e]"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                `block text-sm uppercase font-bold ${
                  isActive ? "text-[#f5a623]" : "text-[#2d1b5e]"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}

          <NavLink
            to="/admissions"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-[#f5a623] text-white font-bold py-3 rounded"
          >
            Apply Now
          </NavLink>
        </div>
      )}
    </nav>
  );
}
