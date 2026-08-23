import React, { useEffect, useRef, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { services } from "../data/services";
import logoElWebo from "/img/elwebo-logo.webp";

const mainLinks = [
  { text: "Tarifs", to: "/tarifs" },
  { text: "À propos", to: "/a-propos" },
];

const Chevron = ({ open }) => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

const linkClass = ({ isActive }) =>
  `block py-3 font-semibold font-[Epilogue,Helvetica] text-[17px] xl:text-[19px] transition-colors duration-200 hover:text-[#8a7200] ${
    isActive
      ? "text-black underline decoration-[var(--yellow)] decoration-4 underline-offset-8"
      : "text-black"
  }`;

const NavigationMenuSection = ({ onContactClick }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const burgerRef = useRef(null);
  const servicesRef = useRef(null);
  const { pathname } = useLocation();

  const onServicePage = services.some((s) => pathname === `/${s.slug}`);

  // Referme les menus à chaque changement de page
  useEffect(() => {
    setMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  // Bloque le scroll du body quand le menu mobile est ouvert
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Échap ferme, clic extérieur ferme le sous-menu Services
  useEffect(() => {
    const onKey = (e) => {
      if (e.key !== "Escape") return;
      if (servicesOpen) setServicesOpen(false);
      else if (menuOpen) {
        setMenuOpen(false);
        burgerRef.current?.focus();
      }
    };
    const onClickOutside = (e) => {
      if (servicesRef.current && !servicesRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClickOutside);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClickOutside);
    };
  }, [menuOpen, servicesOpen]);

  const ServiceLinks = ({ mobile = false }) =>
    services.map((s) => (
      <li key={s.slug}>
        <NavLink
          to={`/${s.slug}`}
          className={({ isActive }) =>
            `flex items-center gap-3 rounded-[10px] px-3 py-2.5 font-semibold text-[16px] transition-colors ${
              isActive
                ? "bg-[var(--yellow)] text-[#1c1c1c]"
                : "text-black hover:bg-black/5"
            }`
          }
          tabIndex={mobile && !menuOpen ? -1 : 0}
        >
          <img
            src={s.heroImage}
            alt=""
            aria-hidden="true"
            width="32"
            height="32"
            loading="lazy"
            className="w-[28px] h-[28px] object-contain flex-shrink-0"
          />
          {s.navLabel}
        </NavLink>
      </li>
    ));

  return (
    <nav
      aria-label="Navigation principale"
      className="w-full h-[90px] flex items-center justify-between bg-white relative z-40"
    >
      {/* Logo */}
      <Link
        to="/"
        className="flex items-center h-full select-none"
        aria-label="El Webo, retour à l'accueil"
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
      </Link>

      {/* Menu bureau */}
      <ul className="hidden lg:flex items-center gap-7 xl:gap-9 mr-4">
        <li className="relative" ref={servicesRef}>
          <button
            type="button"
            onClick={() => setServicesOpen((p) => !p)}
            aria-expanded={servicesOpen}
            aria-haspopup="true"
            className={`flex items-center gap-1.5 py-3 font-semibold font-[Epilogue,Helvetica] text-[17px] xl:text-[19px] cursor-pointer transition-colors hover:text-[#8a7200] ${
              onServicePage
                ? "text-black underline decoration-[var(--yellow)] decoration-4 underline-offset-8"
                : "text-black"
            }`}
          >
            Services
            <Chevron open={servicesOpen} />
          </button>

          {servicesOpen && (
            <ul className="absolute left-0 top-full z-50 mt-1 w-[268px] rounded-[14px] border border-black/5 bg-white p-2 shadow-xl">
              <ServiceLinks />
            </ul>
          )}
        </li>

        <li>
          <Link to="/#mes-projets" className={linkClass({ isActive: false })}>
            Réalisations
          </Link>
        </li>

        {mainLinks.map((item) => (
          <li key={item.to}>
            <NavLink to={item.to} className={linkClass}>
              {item.text}
            </NavLink>
          </li>
        ))}

        <li>
          <button
            type="button"
            className="lift bg-[var(--yellow)] rounded-[20px] px-6 py-3 font-bold text-[#1c1c1c] text-[17px] xl:text-[19px] hover:bg-[#e6be00] cursor-pointer whitespace-nowrap"
            onClick={() => onContactClick()}
          >
            Me contacter
          </button>
        </li>
      </ul>

      {/* Bouton menu mobile */}
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
        />
        <div
          className={`w-8 h-1 bg-black rounded my-1 transition-all duration-300 ${
            menuOpen ? "opacity-0" : ""
          }`}
        />
        <div
          className={`w-8 h-1 bg-black rounded transition-all duration-300 ${
            menuOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Voile sombre */}
      <div
        className={`fixed inset-0 z-40 transition-opacity duration-300 lg:hidden ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        style={{
          background: "rgba(0,0,0,0.95)",
          backdropFilter: "blur(4px)",
          WebkitBackdropFilter: "blur(4px)",
        }}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Panneau mobile */}
      <div
        id="menu-mobile"
        className={`
          fixed top-0 right-0 w-[82vw] max-w-[350px] h-full
          bg-white rounded-l-xl shadow-2xl z-50
          flex flex-col gap-2 pt-5 pb-10 px-5
          border-l border-[#ececec] overflow-y-auto
          ${menuOpen ? "translate-x-0" : "translate-x-full"}
          transition-transform duration-300 lg:hidden
        `}
        aria-hidden={!menuOpen}
      >
        <button
          className="self-end p-3 -mr-1 cursor-pointer"
          onClick={() => setMenuOpen(false)}
          aria-label="Fermer le menu"
          type="button"
          tabIndex={menuOpen ? 0 : -1}
        >
          <div className="w-8 h-1 bg-black rounded rotate-45 translate-y-2" />
          <div className="w-8 h-1 bg-black rounded my-1 opacity-0" />
          <div className="w-8 h-1 bg-black rounded -rotate-45 -translate-y-2" />
        </button>

        <p className="px-3 pt-2 pb-1 text-[13px] uppercase tracking-wide text-black/45">
          Services
        </p>
        <ul className="flex flex-col gap-1">
          <ServiceLinks mobile />
        </ul>

        <hr className="my-3 border-black/10" />

        <ul className="flex flex-col gap-1">
          <li>
            <Link
              to="/#mes-projets"
              className="block rounded-[10px] px-3 py-3 font-semibold text-[19px] text-black hover:bg-black/5 transition-colors"
              tabIndex={menuOpen ? 0 : -1}
            >
              Réalisations
            </Link>
          </li>
          {mainLinks.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                className={({ isActive }) =>
                  `block rounded-[10px] px-3 py-3 font-semibold text-[19px] transition-colors ${
                    isActive
                      ? "bg-[var(--yellow)] text-[#1c1c1c]"
                      : "text-black hover:bg-black/5"
                  }`
                }
                tabIndex={menuOpen ? 0 : -1}
              >
                {item.text}
              </NavLink>
            </li>
          ))}
        </ul>

        <button
          type="button"
          className="lift mt-4 bg-[var(--yellow)] rounded-[20px] px-7 py-4 font-bold text-[#1c1c1c] text-[19px] hover:bg-[#e6be00] cursor-pointer"
          onClick={() => {
            setMenuOpen(false);
            onContactClick?.();
          }}
          tabIndex={menuOpen ? 0 : -1}
        >
          Me contacter
        </button>
      </div>
    </nav>
  );
};

export default NavigationMenuSection;
