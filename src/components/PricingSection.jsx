import { offers } from "../data/offers";
import Reveal from "./Reveal";
import MobileCarousel from "./MobileCarousel";
import SectionTitle from "./SectionTitle";

const Check = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="mt-1 flex-shrink-0 text-[#009379]"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

const OfferCard = ({ offer, onContactClick }) => (
  <article
    className={`
      lift flex h-full flex-col gap-5 bg-white p-6 md:p-8 rounded-[14px]
      shadow hover:shadow-xl
      ${offer.highlight ? "ring-3 ring-[var(--yellow)]" : ""}
    `}
  >
    <div className="flex items-start justify-between gap-3">
      <h3 className="font-black italic font-[Epilogue,Helvetica] text-black text-[22px] md:text-[26px] leading-tight">
        {offer.name}
      </h3>
      {offer.highlight && (
        <span className="flex-shrink-0 bg-[var(--yellow)] px-3 py-1 text-[12px] font-bold uppercase tracking-wide text-[#1c1c1c] rounded-full">
          Le + demandé
        </span>
      )}
    </div>

    <p className="text-[15px] md:text-[16px] leading-[24px] text-black/75">
      {offer.tagline}
    </p>

    <p className="border-y border-black/10 py-4">
      {offer.price ? (
        <>
          <span className="block text-[13px] uppercase tracking-wide text-black/50">
            À partir de
          </span>
          <span className="font-black italic font-[Epilogue,Helvetica] text-black text-[32px] md:text-[38px] leading-none">
            {formatPrice(offer.price)}
          </span>
        </>
      ) : (
        <span className="font-black italic font-[Epilogue,Helvetica] text-black text-[26px] md:text-[30px] leading-none">
          Sur devis
        </span>
      )}
    </p>

    <ul className="flex flex-1 flex-col gap-2.5">
      {offer.features.map((feature) => (
        <li
          key={feature}
          className="flex items-start gap-2.5 text-[15px] leading-[23px] text-black"
        >
          <Check />
          {feature}
        </li>
      ))}
    </ul>

    <button
      type="button"
      onClick={() => onContactClick?.(offer.projectType)}
      className={`
        lift w-full rounded-[20px] px-6 py-3.5 font-bold text-[17px] cursor-pointer
        ${
          offer.highlight
            ? "bg-[var(--yellow)] text-[#1c1c1c] hover:bg-[#e6be00]"
            : "bg-[#1c1c1c] text-white hover:bg-[#333]"
        }
      `}
    >
      Demander un devis
    </button>
  </article>
);

const PricingSection = ({ onContactClick }) => {
  return (
    <section
      id="tarifs"
      className="w-full flex flex-col items-center pt-14 pb-8 md:pt-24 md:pb-16"
    >
      <SectionTitle className="mb-4 md:mb-6">Mes formules</SectionTitle>

      <p className="mb-10 md:mb-14 max-w-[720px] text-center text-base md:text-[1.2rem] leading-[27px] text-black">
        Chaque projet est chiffré sur mesure, mais voici ce que contient chaque
        formule. Le devis est gratuit et le montant annoncé est celui que tu
        paies.
      </p>

      <MobileCarousel
        startCentered
        ariaLabel="Mes formules"
        desktopClass="lg:grid lg:grid-cols-3 lg:gap-8"
      >
        {offers.map((offer, i) => (
          <Reveal key={offer.id} delay={i * 110} className="h-full w-full">
            <OfferCard offer={offer} onContactClick={onContactClick} />
          </Reveal>
        ))}
      </MobileCarousel>

      <p className="mt-8 max-w-[720px] text-center text-[15px] leading-[24px] text-black/65">
        Besoin d'autre chose — refonte, maintenance, coup de main ponctuel ?
        Écris-moi, on trouvera la bonne formule.
      </p>
    </section>
  );
};

export default PricingSection;
