import { Link } from "react-router-dom";
import { offers } from "../data/offers";
import { services } from "../data/services";
import Reveal from "./Reveal";
import hommepic from "/hommepic.webp";

const Check = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="mt-[3px] flex-shrink-0 text-[#009379]"
  >
    <path d="m5 13 4 4L19 7" />
  </svg>
);

const Clock = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </svg>
);

const formatPrice = (price) =>
  new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  }).format(price);

const OfferCard = ({ offer, onContactClick }) => {
  // L'icône et la page détaillée viennent de services.js : une seule source
  // de vérité pour le lien et le picto de chaque prestation.
  const service = services.find((s) => s.offerId === offer.id);

  return (
    <article
      className={`
        lift group flex h-full flex-col gap-4 bg-white p-5 sm:p-6 md:p-7
        rounded-[14px] shadow hover:shadow-xl
        ${offer.highlight ? "ring-3 ring-[var(--yellow)]" : ""}
      `}
    >
      {/* Délai de livraison + mise en avant */}
      <div className="flex flex-wrap items-center gap-2">
        <span className="inline-flex items-center gap-1.5 rounded-full bg-[#009379]/10 px-2.5 py-1 text-[11.5px] md:text-[12.5px] font-bold uppercase tracking-wide text-[#00775f]">
          <Clock />
          {offer.delivery}
        </span>
        {offer.highlight && (
          <span className="rounded-full bg-[var(--yellow)] px-2.5 py-1 text-[11.5px] md:text-[12.5px] font-bold uppercase tracking-wide text-[#1c1c1c]">
            Le + demandé
          </span>
        )}
      </div>

      {/* Picto + nom de la prestation */}
      <div className="flex items-center gap-4">
        {service && (
          <img
            src={service.heroImage}
            alt=""
            aria-hidden="true"
            width="76"
            height="76"
            loading="lazy"
            decoding="async"
            className="w-[58px] h-[58px] md:w-[70px] md:h-[70px] flex-shrink-0 object-contain transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
          />
        )}
        <h3 className="font-black italic font-[Epilogue,Helvetica] text-black text-[22px] md:text-[26px] leading-[1.15]">
          {offer.name}
        </h3>
      </div>

      <p className="text-[15px] md:text-[16px] leading-[23px] text-black/75">
        {offer.tagline}
      </p>

      <p className="border-y border-black/10 py-3.5">
        {offer.price ? (
          <>
            <span className="block text-[12.5px] uppercase tracking-wide text-black/50">
              À partir de
            </span>
            <span className="font-black italic font-[Epilogue,Helvetica] text-black text-[34px] md:text-[38px] leading-none">
              {formatPrice(offer.price)}
            </span>
          </>
        ) : (
          <span className="font-black italic font-[Epilogue,Helvetica] text-black text-[27px] md:text-[30px] leading-none">
            Sur devis
          </span>
        )}
      </p>

      <ul className="flex flex-1 flex-col gap-2.5">
        {offer.features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2.5 text-[14.5px] md:text-[15px] leading-[22px] text-black"
          >
            <Check />
            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-col items-center gap-3 pt-1">
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

        {service && (
          <Link
            to={`/${service.slug}`}
            className="group/link inline-flex items-center gap-1.5 py-1.5 font-bold text-[#1c1c1c] text-[14.5px] md:text-[15px]"
          >
            <span className="underline decoration-[var(--yellow)] decoration-3 underline-offset-4 transition-colors group-hover/link:decoration-[#1c1c1c]">
              Ce que comprend cette formule
            </span>
            <span
              aria-hidden="true"
              className="transition-transform duration-200 group-hover/link:translate-x-1"
            >
              &rarr;
            </span>
          </Link>
        )}
      </div>
    </article>
  );
};

/**
 * Prestations et tarifs réunis : le visiteur voit d'un coup ce que je fais,
 * en combien de temps et pour combien.
 *
 * Volontairement sans carrousel, même sur mobile : une formule qu'on ne
 * fait pas défiler est une formule qu'on ne vend pas.
 *
 * `compact` : version sans fond noir ni picto, pour la page Tarifs qui a
 * déjà son propre titre.
 */
const OffersSection = ({ onContactClick, compact = false }) => {
  const cards = (
    <ul className="grid w-full grid-cols-1 gap-5 md:gap-7 lg:grid-cols-3">
      {offers.map((offer, i) => (
        <li key={offer.id} className="h-full">
          <Reveal delay={i * 110} className="h-full">
            <OfferCard offer={offer} onContactClick={onContactClick} />
          </Reveal>
        </li>
      ))}
    </ul>
  );

  if (compact) {
    return (
      <section id="tarifs" className="w-full pt-10 pb-4 md:pt-16 md:pb-8">
        {/* Le titre de la page joue déjà ce rôle visuellement, mais sans ce
            h2 la hiérarchie sautait de h1 à h3. */}
        <h2 className="sr-only">Mes formules et leurs tarifs</h2>
        {cards}
      </section>
    );
  }

  return (
    <section
      id="services"
      className="relative w-full max-w-[1280px] bg-[#1c1c1c] py-[38px] md:py-[54px] flex flex-col items-center gap-7 md:gap-10 shadow-lg"
    >
      <span id="tarifs" aria-hidden="true" />

      <header className="w-full text-center">
        <h2 className="font-black italic font-[Epilogue,Helvetica] text-white text-[2rem] sm:text-[2.2rem] md:text-[40px] leading-[1.15]">
          Mes formules
        </h2>
        <p className="mx-auto mt-4 max-w-[680px] text-[15.5px] md:text-[1.15rem] leading-[25px] md:leading-[28px] text-white/80">
          Trois façons de travailler ensemble, avec le délai et le prix annoncés
          d&apos;entrée. Le devis est gratuit et le montant indiqué est celui que
          vous payez.
        </p>
      </header>

      {cards}

      <p className="max-w-[680px] pl-[58px] pr-2 sm:pl-2 text-center text-[14.5px] md:text-[15px] leading-[23px] text-white/60">
        Besoin d&apos;autre chose — refonte, maintenance, coup de main
        ponctuel&#8239;? Écrivez-moi, on trouvera la bonne formule.
      </p>

      {/* Picto bas gauche */}
      <img
        src={hommepic}
        alt=""
        aria-hidden="true"
        width="150"
        height="150"
        loading="lazy"
        decoding="async"
        className="
          absolute bottom-0 left-[calc(var(--gutter,0px)*-1)]
          w-[62px] sm:w-[76px] md:w-[92px] xl:w-[110px]
          pointer-events-none select-none
        "
        draggable={false}
        style={{ userSelect: "none" }}
      />
    </section>
  );
};

export default OffersSection;
