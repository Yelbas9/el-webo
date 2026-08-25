import { useId, useState } from "react";
import Reveal from "./Reveal";

const Chevron = ({ open }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className={`flex-shrink-0 transition-transform duration-300 ${
      open ? "rotate-180" : ""
    }`}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

/**
 * Liste de questions dépliables, partagée par l'accueil et la page Tarifs.
 * Tout est fermé au chargement : c'est au visiteur d'ouvrir.
 */
const FaqAccordion = ({ items, className = "" }) => {
  const [openIndex, setOpenIndex] = useState(-1);
  const baseId = useId();

  return (
    <div
      className={`w-full max-w-[900px] flex flex-col gap-3 md:gap-4 ${className}`}
    >
      {items.map((item, i) => {
        const open = openIndex === i;
        const panelId = `${baseId}-panel-${i}`;
        const buttonId = `${baseId}-button-${i}`;

        return (
          <Reveal key={item.q} delay={i * 50}>
            <div className="bg-white shadow rounded-[14px] overflow-hidden">
              <h3>
                <button
                  type="button"
                  id={buttonId}
                  aria-expanded={open}
                  aria-controls={panelId}
                  onClick={() => setOpenIndex(open ? -1 : i)}
                  className="
                    flex w-full items-center justify-between gap-4
                    px-5 py-5 md:px-7 md:py-6 text-left cursor-pointer
                    font-bold font-[Epilogue,Helvetica] text-black
                    text-[16px] md:text-[19px] leading-snug
                    transition-colors duration-200 hover:text-[#8a7200]
                  "
                >
                  {item.q}
                  <Chevron open={open} />
                </button>
              </h3>
              <div
                id={panelId}
                role="region"
                aria-labelledby={buttonId}
                hidden={!open}
                className="px-5 pb-5 md:px-7 md:pb-7 -mt-1"
              >
                <p className="text-[15px] md:text-[17px] leading-[25px] md:leading-[28px] text-black opacity-90">
                  {item.a}
                </p>
              </div>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
};

export default FaqAccordion;
