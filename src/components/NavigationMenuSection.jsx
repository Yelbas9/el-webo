import React, { useState, useEffect } from "react";
import logoElWebo from "/elwebo-logo.webp";

const navigationItems = [
  { text: "Mes Services", href: "#services" },
  { text: "Mes Compétences", href: "#competences" },
  { text: "Mes Projets", href: "#mes-projets" },
  { text: "Contact", href: "#contact" },
];

const NavigationMenuSection = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  // Bloque le scroll du body quand menu ouvert
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  // Fermer menu + callback contact
  const handleNavClick = (cb) => {
    setMenuOpen(false);
    if (cb) cb();
  };

  return (
    <nav className="w-full h-[90px] flex items-center justify-between bg-white relative z-40">
      {/* Logo à gauche */}
      <div className="flex items-center h-full select-none">
        <img
          src={logoElWebo}
          alt="Logo El Webo"
          className="h-[65px] md:h-[76px] w-auto object-contain ml-2"
          style={{ userSelect: "none", pointerEvents: "none" }}
          draggable={false}
        />
      </div>

      {/* Menu Desktop */}
      <ul className="hidden md:flex items-center gap-10 mr-4">
        {navigationItems.map((item, i) => (
          <li key={i}>
            {item.text === "Contact" ? (
              <button
                type="button"
                className="font-semibold font-[Epilogue,Helvetica] text-[20px] text-black hover:text-[var(--yellow)] transition-colors duration-200 bg-transparent border-none p-0 m-0 outline-none cursor-pointer"
                onClick={() => onContactClick()}
                style={{ background: "none" }}
              >
                {item.text}
              </button>
            ) : (
              <a
                href={item.href}
                className="font-semibold font-[Epilogue,Helvetica] text-[20px] text-black hover:text-[var(--yellow)] transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>

      {/* Hamburger Mobile */}
      <button
        className="md:hidden flex flex-col justify-center items-center mr-4 focus:outline-none z-50"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        type="button"
      >
        <div
          className={`w-8 h-1 bg-black rounded transition-all duration-300 ${
            menuOpen ? "rotate-45 translate-y-2" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-black rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        ></div>
        <div
          className={`w-8 h-1 bg-black rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        ></div>
      </button>

      {/* Overlay noir, effet blur */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300
          ${
            menuOpen
              ? "opacity-100 pointer-events-auto"
              : "opacity-0 pointer-events-none"
          }
          md:hidden
        `}
        style={{
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />

      {/* Menu Mobile Panel */}
      <ul
        className={`
          fixed top-0 right-0
          w-[70vw] max-w-[320px] h-full
          bg-white rounded-l-xl shadow-2xl z-50
          flex flex-col gap-6 pt-[40px] pb-10 px-6 text-right
          border-l border-[#ececec]
          ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
          transition-all duration-300
          md:hidden
        `}
        style={{
          maxHeight: "100vh",
          overflowY: "auto",
        }}
      >
        {/* Hamburger/croix dans le panel (optionnel, peut l’enlever du header pour n’être QUE ici) */}
        <button
          className="flex md:hidden flex-col justify-center items-end mb-3 ml-auto focus:outline-none"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
          type="button"
        >
          <div className="w-8 h-1 bg-black rounded rotate-45 translate-y-2 transition-all duration-300"></div>
          <div className="w-8 h-1 bg-black rounded my-1 opacity-0 transition-all duration-300"></div>
          <div className="w-8 h-1 bg-black rounded -rotate-45 -translate-y-2 transition-all duration-300"></div>
        </button>
        {navigationItems.map((item, i) => (
          <li key={i}>
            {item.text === "Contact" ? (
              <button
                type="button"
                className="font-semibold font-[Epilogue,Helvetica] text-[22px] text-black hover:text-[var(--yellow)] transition-colors duration-200 bg-transparent border-none p-0 m-0 outline-none cursor-pointer w-full text-left pl-5"
                onClick={() => handleNavClick(onContactClick)}
                style={{ background: "none" }}
              >
                {item.text}
              </button>
            ) : (
              <a
                href={item.href}
                className="font-semibold font-[Epilogue,Helvetica] text-[22px] text-black hover:text-[var(--yellow)] transition-colors duration-200 w-full block text-left pl-5"
                onClick={() => setMenuOpen(false)}
              >
                {item.text}
              </a>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigationMenuSection;
