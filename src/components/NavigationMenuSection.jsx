import React, { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import logoElWebo from "/img/elwebo-logo.webp";

// L'ordre doit suivre celui des sections dans la page :
// il sert aussi à déterminer l'entrée surlignée au défilement.
const navigationItems = [
  { text: "Services", id: "services" },
  { text: "Réalisations", id: "mes-projets" },
  { text: "Tarifs", id: "tarifs" },
  { text: "Méthode", id: "methode" },
  { text: "FAQ", id: "faq" },
];

const NavigationMenuSection = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("");
  const panelRef = useRef(null);
  const burgerRef = useRef(null);
  const { pathname } = useLocation();

  // Hors de la page d'accueil, les ancres doivent y ramener d'abord
  const onHome = pathname === "/";
  const hrefFor = (id) => (onHome ? `#${id}` : `/#${id}`);

  // Bloque le scroll du body quand le menu est ouvert
  useEffect(() => {
    if (menuOpen) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Ferme le menu mobile avec Échap
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  // Surligne l'entrée de menu correspondant à la section visible
  useEffect(() => {
    const sections = navigationItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean);
    if (sections.length === 0 || typeof IntersectionObserver === "undefined") {
      return;
    }

    // On suit les sections présentes dans la bande centrale de l'écran.
    // Si aucune ne s'y trouve (haut de page, pied de page), plus rien n'est
    // surligné — sinon la dernière section vue resterait active à tort.
    const inView = new Set();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) inView.add(entry.target.id);
          else inView.delete(entry.target.id);
        });
        const firstInDomOrder = navigationItems.find((item) =>
          inView.has(item.id)
        );
        setActiveId(firstInDomOrder ? firstInDomOrder.id : "");
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const linkClass = (id, extra = "") =>
    `font-semibold font-[Epilogue,Helvetica] transition-colors duration-200 hover:text-[#8a7200] ${
      activeId === id
        ? "text-black underline decoration-[var(--yellow)] decoration-4 underline-offset-8"
        : "text-black"
    } ${extra}`;

  return (
    <nav
      aria-label="Navigation principale"
      className="w-full h-[90px] flex items-center justify-between bg-white relative z-40"
    >
      {/* Logo à gauche */}
      <a
        href={onHome ? "#top" : "/"}
        className="flex items-center h-full select-none"
        aria-label="El Webo, retour en haut de page"
      >
        <img
          src={logoElWebo}
          alt="El Webo"
          width="76"
          height="76"
          className="h-[65px] md:h-[76px] w-auto object-contain ml-2"
          style={{ userSelect: "none", pointerEvents: "none" }}
          draggable={false}
        />
      </a>

      {/* Menu Desktop */}
      <ul className="hidden lg:flex items-center gap-7 xl:gap-9 mr-4">
        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              href={hrefFor(item.id)}
              className={linkClass(item.id, "text-[17px] xl:text-[19px] py-3 block")}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
        <li>
          <button
            type="button"
            className="bg-[var(--yellow)] rounded-[20px] px-6 py-3 font-bold text-[#1c1c1c] text-[17px] xl:text-[19px] hover:bg-[#e6be00] transition-colors duration-200 cursor-pointer whitespace-nowrap"
            onClick={() => onContactClick()}
          >
            Me contacter
          </button>
        </li>
      </ul>

      {/* Hamburger Mobile */}
      <button
        ref={burgerRef}
        className="lg:hidden flex flex-col justify-center items-center mr-2 p-3 z-50 cursor-pointer"
        onClick={() => setMenuOpen((prev) => !prev)}
        aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={menuOpen}
        aria-controls="menu-mobile"
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
          lg:hidden
        `}
        style={{
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Menu Mobile Panel */}
      <ul
        id="menu-mobile"
        ref={panelRef}
        className={`
          fixed top-0 right-0
          w-[78vw] max-w-[340px] h-full
          bg-white rounded-l-xl shadow-2xl z-50
          flex flex-col gap-6 pt-[40px] pb-10 px-6 text-right
          border-l border-[#ececec]
          ${
            menuOpen
              ? "translate-x-0 opacity-100"
              : "translate-x-full opacity-0 pointer-events-none"
          }
          transition-all duration-300
          lg:hidden
        `}
        style={{
          maxHeight: "100vh",
          overflowY: "auto",
        }}
        aria-hidden={!menuOpen}
      >
        <li>
          <button
            className="flex lg:hidden flex-col justify-center items-end mb-3 ml-auto p-3 -mr-2 cursor-pointer"
            onClick={() => setMenuOpen(false)}
            aria-label="Fermer le menu"
            type="button"
            tabIndex={menuOpen ? 0 : -1}
          >
            <div className="w-8 h-1 bg-black rounded rotate-45 translate-y-2"></div>
            <div className="w-8 h-1 bg-black rounded my-1 opacity-0"></div>
            <div className="w-8 h-1 bg-black rounded -rotate-45 -translate-y-2"></div>
          </button>
        </li>

        {navigationItems.map((item) => (
          <li key={item.id}>
            <a
              href={hrefFor(item.id)}
              className={linkClass(item.id, "text-[22px] w-full block text-left pl-5 py-2.5")}
              onClick={() => setMenuOpen(false)}
              tabIndex={menuOpen ? 0 : -1}
              aria-current={activeId === item.id ? "true" : undefined}
            >
              {item.text}
            </a>
          </li>
        ))}
        <li className="pl-5 pt-2">
          <button
            type="button"
            className="bg-[var(--yellow)] rounded-[20px] px-7 py-3 font-bold text-[#1c1c1c] text-[20px] hover:bg-[#e6be00] transition-colors duration-200 cursor-pointer"
            onClick={() => {
              setMenuOpen(false);
              onContactClick?.();
            }}
            tabIndex={menuOpen ? 0 : -1}
          >
            Me contacter
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenuSection;
