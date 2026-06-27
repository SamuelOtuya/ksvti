import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import NProgress from "nprogress";
import "nprogress/nprogress.css";

NProgress.configure({
  showSpinner: false,
  speed: 400,
  minimum: 0.25,
});

export default function RouteProgress() {
  const location = useLocation();

  useEffect(() => {
    NProgress.start();

    const timer = setTimeout(() => {
      NProgress.done();
    }, 400);

    return () => clearTimeout(timer);
  }, [location.pathname]);

  return null;
}
