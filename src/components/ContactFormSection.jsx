import React, { useState } from "react";
import { Link } from "react-router-dom";
import sendIcon from "/img/send.webp";
import { trackEvent } from "../lib/analytics";

const socialLinks = [
  {
    href: "https://www.instagram.com/el.webo.dev/",
    icon: "/img/instagram.webp",
    alt: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@el.webo.dev",
    icon: "/img/tiktok.webp",
    alt: "TikTok",
  },
  {
    href: "https://github.com/Yelbas9",
    icon: "/img/github.webp",
    alt: "GitHub",
  },
  {
    href: "https://x.com/EL_WEBO_DEV",
    icon: "/img/twitter.webp",
    alt: "Twitter",
  },
  {
    href: "mailto:elwebo.dev@gmail.com?subject=Contact%20depuis%20le%20site%20web&body=Bonjour%20El%20Webo%2C%0A",
    icon: "/img/gmail.webp",
    alt: "Gmail",
  },
];

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const ContactFormSection = () => {
  const [formData, setFormData] = useState({ nom: "", email: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    const form = e.target;
    const botField = form["bot-field"]?.value || "";

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-rappel",
          "bot-field": botField,
          nom: formData.nom,
          email: formData.email,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      trackEvent("Contact rappel");
      setStatus("sent");
      setFormData({ nom: "", email: "" });
    } catch {
      setStatus("error");
    }
  };

  return (
    <footer className="on-dark w-full bg-[#1c1c1c] pt-12 pb-6">
      <section
        id="contact"
        className="
          max-w-[1280px] mx-auto gutter flex flex-col md:flex-row gap-10 md:gap-20 xl:gap-40
          items-stretch md:items-start
        "
      >
        {/* Partie gauche */}
        <div className="flex-1 flex flex-col gap-8 justify-center max-w-[640px] mx-auto md:mx-0">
          <h2 className="font-black text-[2rem] md:text-[32px] leading-[1.1] text-white font-[Epilogue,Helvetica] text-center md:text-left">
            Travaillons ensemble !
          </h2>
          <p className="font-[Epilogue,Helvetica] text-[1rem] md:text-[17px] leading-[1.6] text-white text-center md:text-left">
            Laisse-moi tes coordonnées et je te recontacte au plus vite pour en
            discuter !
            <br />
            Tu peux aussi me retrouver sur les réseaux ou m'écrire directement
            par mail à{" "}
            <a
              href="mailto:elwebo.dev@gmail.com"
              className="font-semibold text-[var(--yellow)] underline underline-offset-4 hover:text-white transition-colors"
            >
              elwebo.dev@gmail.com
            </a>
            .
          </p>
          <nav
            aria-label="Réseaux sociaux"
            className="flex gap-5 md:gap-6 justify-center md:justify-start flex-wrap"
          >
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.alt}
                className="flex h-11 w-11 items-center justify-center transition-transform hover:scale-110"
              >
                <img
                  src={link.icon}
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  loading="lazy"
                  className="w-8 h-8 md:w-10 md:h-10 object-contain filter invert brightness-200 transition"
                />
              </a>
            ))}
          </nav>
        </div>

        {/* Formulaire de rappel */}
        <div className="flex-1 w-full max-w-[520px] mx-auto md:mx-0">
          {status === "sent" ? (
            <div
              role="status"
              className="flex flex-col gap-2 bg-white/5 border border-[var(--yellow)] rounded-md px-6 py-8 text-center md:text-left"
            >
              <span className="font-bold text-[var(--yellow)] text-xl">
                Message bien reçu !
              </span>
              <span className="text-white">
                Je te recontacte très vite. À tout de suite.
              </span>
            </div>
          ) : (
            <form
              name="contact-rappel"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="
                flex flex-col gap-4 md:gap-6 w-full
                items-center md:items-end pt-4 md:pt-0
              "
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact-rappel" />
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" tabIndex={-1} />
                </label>
              </p>

              <label htmlFor="footer-name" className="sr-only">
                Nom
              </label>
              <input
                id="footer-name"
                name="nom"
                type="text"
                autoComplete="name"
                value={formData.nom}
                onChange={handleInputChange}
                className="px-5 py-3 md:px-6 md:py-4 bg-[#f3f3f3] rounded-md w-full text-black text-[1rem] md:text-[17px] focus:outline-none"
                placeholder="Nom"
                required
              />

              <label htmlFor="footer-email" className="sr-only">
                Email
              </label>
              <input
                id="footer-email"
                name="email"
                type="email"
                autoComplete="email"
                value={formData.email}
                onChange={handleInputChange}
                className="px-5 py-3 md:px-6 md:py-4 bg-[#f3f3f3] rounded-md w-full text-black text-[1rem] md:text-[17px] focus:outline-none"
                placeholder="Email"
                required
              />

              {status === "error" && (
                <p role="alert" className="w-full text-[var(--yellow)] text-sm">
                  L'envoi a échoué. Réessaie, ou écris-moi directement à
                  elwebo.dev@gmail.com.
                </p>
              )}

              {/* Ligne bouton + icône (séparés mais alignés) */}
              <div className="flex items-center w-full gap-3 md:gap-4 mt-2 md:mt-5">
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="bg-white text-black font-bold text-lg md:text-2xl rounded-[40px] px-7 md:px-12 h-[52px] md:h-[68px] flex items-center justify-center hover:bg-[var(--yellow)] transition-colors cursor-pointer w-full md:w-auto disabled:opacity-60 disabled:cursor-wait"
                >
                  {status === "sending" ? "Envoi…" : "Envoyer"}
                </button>
                <img
                  src={sendIcon}
                  alt=""
                  aria-hidden="true"
                  width="48"
                  height="48"
                  loading="lazy"
                  className="w-9 h-9 md:w-12 md:h-12 object-contain"
                  draggable={false}
                  style={{
                    userSelect: "none",
                  }}
                />
              </div>
              <p className="w-full text-white/60 text-[13px] leading-relaxed">
                Tes coordonnées servent uniquement à te recontacter. Aucune
                revente, aucune newsletter.
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Bas de page */}
      <div className="max-w-[1280px] mx-auto gutter mt-10 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-white/15 pt-6 text-[13px] text-white/70 font-[Epilogue,Helvetica]">
        <p>&copy; {new Date().getFullYear()} El Webo. Tous droits réservés.</p>
        <nav aria-label="Liens du pied de page" className="flex flex-wrap justify-center gap-x-5 gap-y-1">
          <Link
            to="/creation-site-vitrine"
            className="py-2 hover:text-[var(--yellow)] transition-colors"
          >
            Site vitrine
          </Link>
          <Link
            to="/creation-site-ecommerce"
            className="py-2 hover:text-[var(--yellow)] transition-colors"
          >
            Boutique en ligne
          </Link>
          <Link
            to="/creation-application"
            className="py-2 hover:text-[var(--yellow)] transition-colors"
          >
            Application
          </Link>
          <Link
            to="/a-propos"
            className="py-2 hover:text-[var(--yellow)] transition-colors"
          >
            À propos
          </Link>
          <Link
            to="/mentions-legales"
            className="py-2 hover:text-[var(--yellow)] transition-colors"
          >
            Mentions légales
          </Link>
        </nav>
      </div>
    </footer>
  );
};

export default ContactFormSection;
