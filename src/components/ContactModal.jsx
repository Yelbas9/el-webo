import React, { useState } from "react";

// Remplace ici par ton vrai Google Form
const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSe5hvpRaPU26VUqFm81nqy9_MEupiXwQIwgs7JL2UOr5_wCrw/viewform?usp=dialog"; // <- à modifier

const ContactModal = ({ open, onClose }) => {
  const [form, setForm] = useState({
    nom: "",
    email: "",
    tel: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  // Gestion des champs
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Soumission Netlify (classique)
  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    // Envoi en mode Netlify
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({
        "form-name": "contact-modal",
        ...form,
      }).toString(),
    })
      .then(() => {
        setSent(true);
        setSending(false);
      })
      .catch(() => setSending(false));
  };

  // Empêche de scroller le body derrière la modal
  React.useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center transition-all"
      style={{
        background: "rgba(0,0,0,0.95)",
        backdropFilter: "blur(4px)",
      }}
      onClick={onClose}
    >
      <div
        className="bg-white rounded-[20px] shadow-lg max-w-[440px] w-full mx-4 p-7 relative flex flex-col"
        style={{ minWidth: "320px" }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Bouton de fermeture */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-black hover:text-gray-500 text-3xl font-bold p-0 bg-transparent border-none outline-none cursor-pointer"
          aria-label="Fermer"
          tabIndex={0}
        >
          ×
        </button>

        <h2 className="font-black text-[26px] mb-4 text-black font-[Epilogue,Helvetica]">
          Contactez-moi
        </h2>

        {sent ? (
          <div className="flex flex-col items-center justify-center py-8">
            <span className="text-green-700 text-xl font-bold mb-2">
              Merci pour votre message !
            </span>
            <span className="text-black">Je reviens vers vous très vite.</span>
          </div>
        ) : (
          <form
            name="contact-modal"
            method="POST"
            data-netlify="true"
            className="flex flex-col gap-5"
            onSubmit={handleSubmit}
          >
            <input type="hidden" name="form-name" value="contact-modal" />
            <div className="flex flex-col gap-2">
              <label htmlFor="nom" className="font-semibold text-black">
                Nom et prénom
              </label>
              <input
                className="px-4 py-3 bg-[#f3f3f3] rounded-md text-black focus:outline-none"
                type="text"
                name="nom"
                id="nom"
                value={form.nom}
                onChange={handleChange}
                required
                autoComplete="name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="font-semibold text-black">
                Adresse email
              </label>
              <input
                className="px-4 py-3 bg-[#f3f3f3] rounded-md text-black focus:outline-none"
                type="email"
                name="email"
                id="email"
                value={form.email}
                onChange={handleChange}
                required
                autoComplete="email"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="tel" className="font-semibold text-black">
                Numéro de téléphone
              </label>
              <input
                className="px-4 py-3 bg-[#f3f3f3] rounded-md text-black focus:outline-none"
                type="tel"
                name="tel"
                id="tel"
                value={form.tel}
                onChange={handleChange}
                required
                autoComplete="tel"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className="font-semibold text-black">
                Message
              </label>
              <textarea
                className="px-4 py-3 bg-[#f3f3f3] rounded-md text-black focus:outline-none"
                name="message"
                id="message"
                value={form.message}
                onChange={handleChange}
                rows={4}
                required
              />
            </div>
            <div className="flex gap-4 mt-3 flex-row justify-end">
              <button
                type="submit"
                className=" bg-[#FFD300] text-[#1c1c1c] font-bold rounded-[20px] px-8 py-3 text-lg  hover:bg-[#e6be00] transition-colors cursor-pointer"
                disabled={sending}
              >
                {sending ? "Envoi..." : "Envoyer"}
              </button>
              <button
                type="button"
                className="bg-[#2d2d2d]  text-white font-bold rounded-[20px] px-8 py-3 text-lg hover:bg-[#1a1a1a] md:whitespace-nowrap transition-colors cursor-pointer"
                onClick={() => window.open(GOOGLE_FORM_URL, "_blank")}
              >
                Demander un devis
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
