import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    // Temporary login before Supabase auth
    if (email === "admin@ksvti.ac.ke" && password === "admin123") {
      localStorage.setItem("ksvti_admin", "true");
      navigate("/admin/dashboard");
      return;
    }

    alert("Invalid email or password");
  }

  const isLoggedIn = localStorage.getItem("ksvti_admin") === "true";

  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <section className="min-h-screen bg-[#2d1b5e] flex items-center justify-center px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="text-center mb-8">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2d1b5e] text-[#f5a623] font-black text-xl">
            KS
          </div>

          <h1 className="text-2xl font-black uppercase text-[#2d1b5e]">
            Admin Login
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to manage KSVTI website content.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
              Email Address
            </label>

            <div className="relative">
              <Mail
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@ksvti.ac.ke"
                className="w-full rounded-lg border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#f5a623]"
              />
            </div>
          </div>

          <div>
            <label className="mb-2 block text-sm font-bold text-[#2d1b5e]">
              Password
            </label>

            <div className="relative">
              <Lock
                size={18}
                className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password"
                className="w-full rounded-lg border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#f5a623]"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-[#f5a623] py-4 font-bold text-white hover:bg-[#d4891a]"
          >
            Login
          </button>
        </form>

        <p className="mt-6 text-center text-xs text-gray-400">
          © KSVTI Website CMS
        </p>
      </div>
    </section>
  );
}
