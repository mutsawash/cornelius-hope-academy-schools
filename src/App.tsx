
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import Index from "./pages/Index";
import AboutPage from "./pages/About";
import AcademicsPage from "./pages/Academics";
import AdmissionsPage from "./pages/Admissions";
import ContactPage from "./pages/Contact";
import GalleryPage from "./pages/Gallery";
import AdminLogin from "./pages/AdminLogin";
import AdminDashboard from "./pages/AdminDashboard";
import PrimarySchool from "./pages/PrimarySchool";
import SecondarySchool from "./pages/SecondarySchool";
import AlumniPage from "./pages/Alumni";
import NotFound from "./pages/NotFound";
import AnnouncementBanner from "./components/AnnouncementBanner";

const queryClient = new QueryClient();

// Component to handle scrolling to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
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
          <Route path="/primary-school" element={<PrimarySchool />} />
          <Route path="/secondary-school" element={<SecondarySchool />} />
          <Route path="/alumni" element={<AlumniPage />} />
          <Route path="/admin/login" element={<AdminLogin />} />
          <Route path="/admin/dashboard" element={<AdminDashboard />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
