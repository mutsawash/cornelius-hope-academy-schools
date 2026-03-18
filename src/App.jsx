import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index.jsx";
import AboutPage from "./pages/About.jsx";
import AcademicsPage from "./pages/Academics.jsx";
import AdmissionsPage from "./pages/Admissions.jsx";
import ContactPage from "./pages/Contact.jsx";
import GalleryPage from "./pages/Gallery.jsx";
import FAQPage from "./pages/FAQ.jsx";
import PrimarySchool from "./pages/PrimarySchool.jsx";
import SecondarySchool from "./pages/SecondarySchool.jsx";
import AlumniPage from "./pages/Alumni.jsx";
import NotFound from "./pages/NotFound.jsx";
import AnnouncementBanner from "./components/AnnouncementBanner.jsx";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
};

const App = () => (
  <BrowserRouter>
    <AnnouncementBanner />
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Index />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/academics" element={<AcademicsPage />} />
      <Route path="/admissions" element={<AdmissionsPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/gallery" element={<GalleryPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/primary-school" element={<PrimarySchool />} />
      <Route path="/secondary-school" element={<SecondarySchool />} />
      <Route path="/alumni" element={<AlumniPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
