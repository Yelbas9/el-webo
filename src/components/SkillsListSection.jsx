import ordiElWebo from "/ordi.webp";
import ICONShopElWebo from "/shop.webp";
import iconTelElWebo from "/tel.webp";
import hommepic from "/hommepic.webp"; // <-- Ton image picto
import { Link } from "react-router-dom";
import Reveal from "./Reveal";

const servicesData = [
  {
    id: 1,
    image: ordiElWebo,
    alt: "Ordi el webo",
    slug: "creation-site-vitrine",
    title: "Site Vitrine",
    description:
      "Un site moderne et unique pour présenter ton activité, valoriser ton image et attirer de nouveaux clients.",
  },
  {
    id: 2,
    image: ICONShopElWebo,
    alt: "Icon SHOP EL WEBO",
    slug: "creation-site-ecommerce",
    title: "Site E-Commerce",
    description:
      "Développe ta boutique en ligne sur-mesure : une expérience d’achat simple, rapide et efficace pour booster tes ventes.",
  },
  {
    id: 3,
    image: iconTelElWebo,
    alt: "Icon tel el webo",
    slug: "creation-application",
    title: "Application Mobile",
    description:
      "Crée une appli mobile qui te ressemble : performante, intuitive et pensée pour engager tes utilisateurs au quotidien.",
  },
];

const SkillsListSection = ({ onContactClick }) => {
  return (
    <section
      id="services"
      className="relative w-full max-w-[1280px] bg-[#1c1c1c] py-[38px] md:py-[54px] flex flex-col items-center gap-7 md:gap-12 shadow-lg"
    >
      {/* Titre */}
      <header className="w-full text-center font-black italic font-[Epilogue,Helvetica] text-white text-[2rem] sm:text-[2.2rem] md:text-[40px] leading-[42px] mb-2">
        Mes services
      </header>

      {/* Cartes services */}
      <div
        className="
        grid grid-cols-1 
        sm:grid-cols-2 
        md:grid-cols-3 
        gap-5 
        md:gap-8 
        w-full 
        max-w-[1280px]
      "
      >
        {servicesData.map((service, i) => (
          <Reveal key={service.id} delay={i * 110} className="h-full">
            <article
              className="
                lift group flex flex-col items-center bg-white h-full
                px-4 py-8 sm:px-7 sm:py-10 xl:px-10 xl:py-12
                xl:min-h-[480px]
                justify-center gap-4 md:gap-8 shadow hover:shadow-xl
              "
            >
            {/* Bloc image + titre */}
            <div className="flex flex-col items-center min-h-[120px] md:min-h-[200px] justify-end w-full">
              <img
                src={service.image}
                alt=""
                aria-hidden="true"
                width="140"
                height="140"
                loading="lazy"
                decoding="async"
                className="
                  w-[88px] h-[88px] 
                  sm:w-[110px] sm:h-[110px] 
                  md:w-[140px] md:h-[140px] 
                  object-contain -mt-6 sm:-mt-8 md:-mt-10 mb-2
                  transition-transform duration-300 group-hover:scale-110
                  motion-reduce:transform-none
                "
              />
              <h3
                className="
                font-bold font-[Epilogue,Helvetica] text-black 
                text-[20px] sm:text-[22px] md:text-[27px] 
                text-center leading-[1.2]
              "
              >
                {service.title}
              </h3>
            </div>
            {/* Description */}
            <div className="w-full flex flex-col items-center gap-4 flex-1">
              <p
                className="
                font-[Epilogue,Helvetica] text-black text-center 
                text-[15px] sm:text-[16px] md:text-[17px] 
                leading-[22px] md:leading-[27px] opacity-90
              "
              >
                {service.description}
              </p>
              <Link
                to={`/${service.slug}`}
                className="group/link mt-auto inline-flex items-center gap-1.5 font-bold text-[#1c1c1c] text-[15px] md:text-[16px]"
              >
                {/* Le soulignement ne porte que sur le texte : appliqué au
                    conteneur flex, il se coupait au niveau du gap. */}
                <span className="underline decoration-[var(--yellow)] decoration-3 underline-offset-4 transition-colors group-hover/link:decoration-[#1c1c1c]">
                  En savoir plus
                </span>
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/link:translate-x-1"
                >
                  &rarr;
                </span>
                <span className="sr-only">sur la création de {service.title}</span>
              </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* CTA bouton */}
      <button
        type="button"
        onClick={() => onContactClick?.()}
        className="
    bg-[var(--yellow)] rounded-[20px] inline-flex items-center justify-center gap-2.5 
    px-8 py-4 md:px-16 md:py-6 
    font-bold text-[#1c1c1c] 
    text-xl md:text-2xl 
    hover:bg-[#e6be00] shadow hover:shadow-xl
    whitespace-nowrap lift cursor-pointer
  "
      >
        Je demande un devis
      </button>

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
          absolute left-0 bottom-0 
          w-[80px] sm:w-[100px] md:w-[120px] xl:w-[150px]
          pointer-events-none select-none
        "
        draggable={false}
        style={{ userSelect: "none" }}
      />
    </section>
  );
};

export default SkillsListSection;
