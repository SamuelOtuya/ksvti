import { NavLink, useNavigate } from "react-router-dom";
import {
  BookOpen,
  Download,
  FileText,
  GalleryHorizontal,
  Home,
  LayoutDashboard,
  LogOut,
  Mail,
  Newspaper,
} from "lucide-react";

const adminLinks = [
  { name: "Dashboard", path: "/admin/dashboard", icon: LayoutDashboard },
  { name: "Programmes", path: "/admin/programmes", icon: BookOpen },
  { name: "News", path: "/admin/news", icon: Newspaper },
  { name: "Gallery", path: "/admin/gallery", icon: GalleryHorizontal },
  { name: "Downloads", path: "/admin/downloads", icon: Download },
  { name: "Applications", path: "/admin/applications", icon: FileText },
  { name: "Messages", path: "/admin/messages", icon: Mail },
];

export default function AdminSidebar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("ksvti_admin");
    navigate("/admin/login", { replace: true });
  };

  return (
    <aside className="fixed left-0 top-0 z-50 hidden h-screen w-72 bg-[#2d1b5e] text-white lg:block">
      <div className="flex h-20 items-center border-b border-white/10 px-6">
        <div>
          <h2 className="text-xl font-black uppercase">KSVTI Admin</h2>
          <p className="text-xs text-white/50">Website Management</p>
        </div>
      </div>

      <nav className="space-y-1 p-4">
        {adminLinks.map((link) => {
          const Icon = link.icon;

          return (
            <NavLink
              key={link.path}
              to={link.path}
              end={link.path === "/admin"}
              className={({ isActive }) =>
                `flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-semibold transition ${
                  isActive
                    ? "bg-[#f5a623] text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`
              }
            >
              <Icon size={18} />
              {link.name}
            </NavLink>
          );
        })}
      </nav>

      <div className="absolute bottom-6 left-4 right-4 space-y-3">
        <NavLink
          to="/"
          className="flex items-center gap-3 rounded-lg bg-white/10 px-4 py-3 text-sm font-semibold text-white/80 transition hover:bg-white/20"
        >
          <Home size={18} />
          View Website
        </NavLink>

        <button
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-lg bg-red-600/90 px-4 py-3 text-sm font-semibold text-white transition hover:bg-red-700"
        >
          <LogOut size={18} />
          Logout
        </button>
      </div>
    </aside>
  );
}
