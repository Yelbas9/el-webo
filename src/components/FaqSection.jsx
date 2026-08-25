import { faqItems } from "../data/faq";
import FaqAccordion from "./FaqAccordion";

const FaqSection = () => {
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
        Tout ce qu'on me demande avant de se lancer. Si votre question n'y est
        pas, écrivez-moi : je réponds vite.
      </p>

      <FaqAccordion items={faqItems} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </section>
  );
};

export default FaqSection;
