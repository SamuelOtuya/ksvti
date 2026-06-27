import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "../components/layout/MainLayout";

import Home from "../pages/Home";
import About from "../pages/About";
import Courses from "../pages/Courses";
import Admissions from "../pages/Admissions";
import StudentLife from "../pages/StudentLife";
import News from "../pages/News";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import ScrollToTop from "../components/common/ScrollToTop";
import RouteProgress from "../components/common/RouteProgress";
import Gallery from "../pages/Gallery";
import Programmes from "../pages/programmes/Programmes";
import ProgrammeDetails from "../pages/programmes/ProgrammeDetails";
import NewsDetails from "../pages/NewsDetails";
import Downloads from "../pages/Downloads";
import Application from "../pages/Application";
import AdminLayout from "../admin/layout/AdminLayout";
import Dashboard from "../admin/pages/Dashboard";
import ProgrammesAdmin from "../admin/pages/ProgrammesAdmin";
import NewsAdmin from "../admin/pages/NewsAdmin";
import GalleryAdmin from "../admin/pages/GalleryAdmin";
import DownloadsAdmin from "../admin/pages/DownloadsAdmin";
import ApplicationsAdmin from "../admin/pages/ApplicationsAdmin";
import MessagesAdmin from "../admin/pages/MessagesAdmin";
import ProtectedAdminRoute from "../admin/layout/ProtectedAdminRoute";
import AdminLogin from "../admin/pages/AdminLogin";
import AddProgramme from "../admin/pages/AddProgramme";
import EditProgramme from "../admin/pages/EditProgramme";
import AddNews from "../admin/pages/AddNews";
import EditNews from "../admin/pages/EditNews";
export default function AppRoutes() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <RouteProgress />
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/student-life" element={<StudentLife />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/news/:slug" element={<NewsDetails />} />
          <Route path="/programmes" element={<Programmes />} />
          <Route path="/programmes/:slug" element={<ProgrammeDetails />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/apply" element={<Application />} />
        </Route>

        <Route path="/admin/login" element={<AdminLogin />} />

        <Route element={<ProtectedAdminRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="programmes" element={<ProgrammesAdmin />} />
            <Route path="programmes/add" element={<AddProgramme />} />
            <Route path="news" element={<NewsAdmin />} />
            <Route path="gallery" element={<GalleryAdmin />} />
            <Route path="downloads" element={<DownloadsAdmin />} />
            <Route path="applications" element={<ApplicationsAdmin />} />
            <Route path="messages" element={<MessagesAdmin />} />
            <Route path="programmes/edit/:id" element={<EditProgramme />} />
            <Route path="news/add" element={<AddNews />} />
            <Route path="news/edit/:id" element={<EditNews />} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
