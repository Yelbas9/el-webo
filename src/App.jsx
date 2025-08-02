import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import Home from "./pages/Home";
import NavigationMenuSection from "./components/NavigationMenuSection";
import ContactFormSection from "./components/ContactFormSection";
import ContactModal from "./components/ContactModal";

function App() {
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const openContactModal = () => setContactModalOpen(true);
  const closeContactModal = () => setContactModalOpen(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col overflow-x-hidden">
        {/* --- NAVBAR --- */}
        <nav className="w-full bg-white shadow-sm">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-0">
            <NavigationMenuSection onContactClick={openContactModal} />
          </div>
        </nav>

        {/* --- MAIN --- */}
        <main className="flex-1">
          <Routes>
            <Route
              path="/"
              element={<Home onContactClick={openContactModal} />}
            />
          </Routes>
        </main>

        {/* --- FOOTER --- */}
        <footer className="w-full bg-[#1c1c1c] shadow-sm mt-8">
          <div className="max-w-[1280px] mx-auto px-4 sm:px-0">
            <ContactFormSection onContactClick={openContactModal} />
          </div>
        </footer>

        {/* --- CONTACT MODAL (global) --- */}
        <ContactModal open={contactModalOpen} onClose={closeContactModal} />
      </div>
    </Router>
  );
}

export default App;
