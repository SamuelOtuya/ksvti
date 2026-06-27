import { Bell, Menu, UserCircle } from "lucide-react";

export default function AdminTopbar() {
  return (
    <header className="sticky top-0 z-40 flex h-20 items-center justify-between border-b border-gray-200 bg-white px-6 lg:px-8">
      <div className="flex items-center gap-4">
        <button className="lg:hidden text-[#2d1b5e]">
          <Menu size={26} />
        </button>

        <div>
          <h1 className="text-lg font-black text-[#2d1b5e]">Admin Dashboard</h1>
          <p className="text-xs text-gray-500">
            Manage website content and submissions
          </p>
        </div>
      </div>

      <div className="flex items-center gap-5">
        <button className="relative text-gray-500 hover:text-[#2d1b5e]">
          <Bell size={22} />
          <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#f5a623]" />
        </button>

        <div className="flex items-center gap-2">
          <UserCircle className="text-[#2d1b5e]" size={30} />
          <div className="hidden sm:block">
            <p className="text-sm font-bold text-[#2d1b5e]">Admin</p>
            <p className="text-xs text-gray-500">KSVTI</p>
          </div>
        </div>
      </div>
    </header>
  );
}
