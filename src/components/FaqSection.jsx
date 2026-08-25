import { useId, useState } from "react";
import { faqItems } from "../data/faq";
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

const FaqSection = () => {
  // -1 : tout est fermé au chargement, c'est au visiteur d'ouvrir.
  const [openIndex, setOpenIndex] = useState(-1);
  const baseId = useId();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: { "@type": "Answer", text: item.a },
    })),
  };

  return (
    <section
      id="faq"
      className="w-full flex flex-col items-center pt-14 pb-16 md:pt-24 md:pb-24"
    >
      <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2rem] sm:text-[2.3rem] md:text-[40px] leading-[1.1] text-center">
        Questions fréquentes
      </h2>
      <p className="mt-4 mb-10 md:mb-14 max-w-[680px] text-center text-base md:text-[1.2rem] leading-[27px] text-black">
        Tout ce qu'on me demande avant de se lancer. Si ta question n'y est pas,
        écris-moi : je réponds vite.
      </p>

      <div className="w-full max-w-[900px] flex flex-col gap-3 md:gap-4">
        {faqItems.map((item, i) => {
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

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default FaqSection;
