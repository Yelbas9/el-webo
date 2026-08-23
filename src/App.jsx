import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Home from "./pages/Home";
import MentionsLegales from "./pages/MentionsLegales";
import ServicePage from "./pages/ServicePage";
import APropos from "./pages/APropos";
import { services } from "./data/services";
import NavigationMenuSection from "./components/NavigationMenuSection";
import ContactFormSection from "./components/ContactFormSection";
import ContactModal from "./components/ContactModal";
import BackToTop from "./components/BackToTop";
import Admin from "./pages/Admin";
import NotFound from "./pages/NotFound";
import Realisations from "./pages/Realisations";
import Tarifs from "./pages/Tarifs";
import { trackPageView } from "./lib/analytics";

/** Remet la page en haut lors d'un changement de route (sauf ancre). */
const ScrollToTop = () => {
  const { pathname, hash } = useLocation();
  useEffect(() => {
    if (hash) return;
    window.scrollTo(0, 0);
  }, [pathname, hash]);
  return null;
};

/** Enregistre une page vue à chaque changement de route. */
const PageViews = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    trackPageView(pathname);
  }, [pathname]);
  return null;
};

const Layout = () => {
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState("");
  const [scrolled, setScrolled] = useState(false);

  // L'argument peut être un type de projet ; on ignore un éventuel event React.
  const openContactModal = (prefill) => {
    setContactPrefill(typeof prefill === "string" ? prefill : "");
    setContactModalOpen(true);
  };
  const closeContactModal = () => setContactModalOpen(false);

  // Ombre sous la navbar dès qu'on quitte le haut de page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      id="top"
      className="min-h-screen flex flex-col font-[Epilogue,Helvetica,sans-serif] overflow-x-hidden"
    >
      <a
        href="#contenu"
        className="
          sr-only focus:not-sr-only
          focus:fixed focus:top-3 focus:left-3 focus:z-[60]
          focus:bg-[var(--yellow)] focus:text-[#1c1c1c] focus:font-bold
          focus:px-5 focus:py-3 focus:rounded-[20px] focus:shadow-lg
        "
      >
        Aller au contenu
      </a>

      {/* --- NAVBAR --- */}
      <header
        className={`sticky top-0 z-40 w-full bg-white transition-shadow duration-300 ${
          scrolled ? "shadow-md" : "shadow-sm"
        }`}
      >
        <div className="max-w-[1280px] mx-auto gutter">
          <NavigationMenuSection onContactClick={openContactModal} />
        </div>
      </header>

      {/* --- MAIN --- */}
      <main id="contenu" className="flex-1">
        <Routes>
          <Route
            path="/"
            element={<Home onContactClick={openContactModal} />}
          />
          {services.map((s) => (
            <Route
              key={s.slug}
              path={`/${s.slug}`}
              element={
                <ServicePage slug={s.slug} onContactClick={openContactModal} />
              }
            />
          ))}
          <Route
            path="/realisations"
            element={<Realisations onContactClick={openContactModal} />}
          />
          <Route
            path="/tarifs"
            element={<Tarifs onContactClick={openContactModal} />}
          />
          <Route
            path="/a-propos"
            element={<APropos onContactClick={openContactModal} />}
          />
          <Route path="/mentions-legales" element={<MentionsLegales />} />
          <Route path="/admin" element={<Admin />} />
          <Route
            path="*"
            element={<NotFound onContactClick={openContactModal} />}
          />
        </Routes>
      </main>

      {/* --- FOOTER --- */}
      <ContactFormSection />

      <BackToTop />

      {/* --- CONTACT MODAL (global) --- */}
      <ContactModal
        open={contactModalOpen}
        onClose={closeContactModal}
        prefill={contactPrefill}
      />
    </div>
  );
};

function App() {
  return (
    <Router>
      <ScrollToTop />
      <PageViews />
      <Layout />
    </Router>
  );
}

export default App;
