import { Outlet } from "react-router-dom";
import TopBar from "./TopBar";
import Navbar from "./NavBar";
import Footer from "./Footer";
import BackToTop from "../common/BackToTop";
// import { FaWhatsapp } from "react-icons/fa";
import ChatBot from "../common/ChatBot";

export default function MainLayout() {
  return (
    <>
      <TopBar />
      <Navbar />

      <main>
        <Outlet />
      </main>

      <Footer />

      {/* <a
        href="https://wa.me/254717976448?text=Hello%20KSVTI%2C%20I%20would%20like%20to%20make%20an%20inquiry."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 text-white shadow-xl transition hover:scale-110 hover:bg-green-600"
      >
        <FaWhatsapp size={30} />
      </a> */}
      <ChatBot />
      <BackToTop />
    </>
  );
}
