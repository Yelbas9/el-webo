import React, { useCallback, useEffect, useRef, useState } from "react";
import { projectTypes, budgetRanges, deadlines } from "../data/formOptions";
import { trackEvent } from "../lib/analytics";

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), textarea:not([disabled]), select:not([disabled]), [tabindex]:not([tabindex="-1"])';

const EMPTY = {
  nom: "",
  email: "",
  tel: "",
  projet: "",
  budget: "",
  echeance: "",
  message: "",
};

const encode = (data) =>
  Object.keys(data)
    .map((k) => `${encodeURIComponent(k)}=${encodeURIComponent(data[k])}`)
    .join("&");

const Field = ({ label, htmlFor, children }) => (
  <div className="flex flex-col gap-1.5">
    <label htmlFor={htmlFor} className="font-semibold text-black text-[15px]">
      {label}
    </label>
    {children}
  </div>
);

const inputClass =
  "px-4 py-3 bg-[#f3f3f3] rounded-md text-black focus:outline-none w-full";

const ContactModal = ({ open, onClose, prefill = "" }) => {
  const [form, setForm] = useState(EMPTY);
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const dialogRef = useRef(null);
  const firstFieldRef = useRef(null);
  const previouslyFocused = useRef(null);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    const botField = e.target["bot-field"]?.value || "";

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({
          "form-name": "contact-modal",
          "bot-field": botField,
          ...form,
        }),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      trackEvent("Demande de devis", {
        projet: form.projet || "non précisé",
        budget: form.budget || "non précisé",
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  // Fermeture au clavier + piège de focus dans la modale
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") {
        e.stopPropagation();
        onClose();
        return;
      }
      if (e.key !== "Tab" || !dialogRef.current) return;

      const items = Array.from(
        dialogRef.current.querySelectorAll(FOCUSABLE)
      ).filter((el) => el.offsetParent !== null);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    },
    [onClose]
  );

  // Bloque le scroll, mémorise et restaure le focus, réinitialise le formulaire
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement;
    document.body.style.overflow = "hidden";
    setForm((prev) =>
      status === "sent" ? { ...EMPTY, projet: prefill } : { ...prev, projet: prefill || prev.projet }
    );
    if (status === "sent") setStatus("idle");
    const timer = setTimeout(() => firstFieldRef.current?.focus(), 30);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
      previouslyFocused.current?.focus?.();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, prefill]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto p-4 py-8"
      style={{ background: "rgba(0,0,0,0.95)", backdropFilter: "blur(4px)" }}
      onClick={onClose}
      onKeyDown={handleKeyDown}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-modal-title"
        className="bg-white rounded-[20px] shadow-lg max-w-[480px] w-full my-auto p-6 sm:p-8 relative flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-3 right-4 text-black hover:text-gray-500 text-3xl font-bold bg-transparent border-none cursor-pointer leading-none p-2"
          aria-label="Fermer la fenêtre de contact"
        >
          ×
        </button>

        {status === "sent" ? (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <h2
              id="contact-modal-title"
              className="font-black italic text-[26px] mb-3 text-black font-[Epilogue,Helvetica]"
            >
              Message bien reçu !
            </h2>
            <p className="text-black">
              Je reviens vers vous très vite avec une première réponse.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="lift mt-7 bg-[#FFD300] text-[#1c1c1c] font-bold rounded-[20px] px-8 py-3 text-lg hover:bg-[#e6be00] cursor-pointer"
            >
              Fermer
            </button>
          </div>
        ) : (
          <>
            <h2
              id="contact-modal-title"
              className="font-black italic text-[24px] sm:text-[28px] mb-1 text-black font-[Epilogue,Helvetica] pr-8"
            >
              Parlons de votre projet
            </h2>
            <p className="text-[15px] text-black/70 mb-5">
              Quelques informations pour préparer notre échange. Réponse rapide,
              devis gratuit et sans engagement.
            </p>

            <form
              name="contact-modal"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              className="flex flex-col gap-4"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="form-name" value="contact-modal" />
              <p className="hidden">
                <label>
                  Ne pas remplir : <input name="bot-field" tabIndex={-1} />
                </label>
              </p>

              <Field label="Nom et prénom" htmlFor="nom">
                <input
                  ref={firstFieldRef}
                  className={inputClass}
                  type="text"
                  name="nom"
                  id="nom"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                />
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Adresse email" htmlFor="email">
                  <input
                    className={inputClass}
                    type="email"
                    name="email"
                    id="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    autoComplete="email"
                  />
                </Field>
                <Field label="Téléphone" htmlFor="tel">
                  <input
                    className={inputClass}
                    type="tel"
                    name="tel"
                    id="tel"
                    value={form.tel}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </Field>
              </div>

              <Field label="Type de projet" htmlFor="projet">
                <select
                  className={inputClass}
                  name="projet"
                  id="projet"
                  value={form.projet}
                  onChange={handleChange}
                  required
                >
                  <option value="">Choisissez une option…</option>
                  {projectTypes.map((t) => (
                    <option key={t} value={t}>
                      {t}
                    </option>
                  ))}
                </select>
              </Field>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <Field label="Budget envisagé" htmlFor="budget">
                  <select
                    className={inputClass}
                    name="budget"
                    id="budget"
                    value={form.budget}
                    onChange={handleChange}
                  >
                    <option value="">Sans préciser</option>
                    {budgetRanges.map((b) => (
                      <option key={b} value={b}>
                        {b}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Échéance" htmlFor="echeance">
                  <select
                    className={inputClass}
                    name="echeance"
                    id="echeance"
                    value={form.echeance}
                    onChange={handleChange}
                  >
                    <option value="">Sans préciser</option>
                    {deadlines.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </select>
                </Field>
              </div>

              <Field label="Votre projet en quelques mots" htmlFor="message">
                <textarea
                  className={inputClass}
                  name="message"
                  id="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </Field>

              {status === "error" && (
                <p role="alert" className="text-[#c02718] text-sm">
                  L'envoi a échoué. Réessaie, ou écris-moi directement à{" "}
                  <a
                    className="underline font-semibold"
                    href="mailto:elwebo.dev@gmail.com"
                  >
                    elwebo.dev@gmail.com
                  </a>
                  .
                </p>
              )}

              <button
                type="submit"
                className="lift mt-1 w-full bg-[#FFD300] text-[#1c1c1c] font-bold rounded-[20px] px-8 py-4 text-lg hover:bg-[#e6be00] cursor-pointer disabled:opacity-60 disabled:cursor-wait"
                disabled={status === "sending"}
              >
                {status === "sending" ? "Envoi…" : "Envoyer ma demande"}
              </button>
              <p className="text-[13px] text-black/55 text-center">
                Vos informations servent uniquement à vous répondre. Aucune
                revente, aucune newsletter.
              </p>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default ContactModal;
