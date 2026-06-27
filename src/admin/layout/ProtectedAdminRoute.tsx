import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedAdminRoute() {
  const isLoggedIn = localStorage.getItem("ksvti_admin") === "true";

  if (!isLoggedIn) {
    return <Navigate to="/admin/login" replace />;
  }

  return <Outlet />;
}
