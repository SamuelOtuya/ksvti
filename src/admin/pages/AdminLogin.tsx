import { Lock, Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { supabase } from "../../services/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@ksvti.ac.ke");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(true);
  const [signingIn, setSigningIn] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    checkSession();
  }, []);

  async function checkSession() {
    const { data } = await supabase.auth.getSession();
    setIsLoggedIn(!!data.session);
    setLoading(false);
  }

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setSigningIn(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setSigningIn(false);

    if (error) {
      alert(error.message);
      return;
    }

    navigate("/admin/dashboard", { replace: true });
  }

  if (loading) return null;

  if (isLoggedIn) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return (
    <section className="flex min-h-screen items-center justify-center bg-[#2d1b5e] px-6">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-2xl">
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#2d1b5e] text-xl font-black text-[#f5a623]">
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
                className="w-full rounded-lg border border-gray-200 py-4 pl-12 pr-4 outline-none focus:border-[#f5a623]"
                required
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
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={signingIn}
            className="w-full rounded-lg bg-[#f5a623] py-4 font-bold text-white hover:bg-[#d4891a] disabled:opacity-60"
          >
            {signingIn ? "Signing in..." : "Login"}
          </button>
        </form>
      </div>
    </section>
  );
}
