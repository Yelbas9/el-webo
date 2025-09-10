import ordiElWebo from "/ordi.webp";
import ICONShopElWebo from "/shop.webp";
import iconTelElWebo from "/tel.webp";
import hommepic from "/hommepic.webp"; // <-- Ton image picto
import { useRef, useEffect } from "react";

// NOUVEL ORDRE : Application Mobile, Site Vitrine, Site E-Commerce
const servicesData = [
  {
    id: 3,
    image: iconTelElWebo,
    alt: "Icon tel el webo",
    title: "Application Mobile",
    description:
      "Crée une appli mobile qui te ressemble : performante, intuitive et pensée pour engager tes utilisateurs au quotidien.",
  },
  {
    id: 1,
    image: ordiElWebo,
    alt: "Ordi el webo",
    title: "Site Vitrine",
    description:
      "Un site moderne et unique pour présenter ton activité, valoriser ton image et attirer de nouveaux clients.",
  },
  {
    id: 2,
    image: ICONShopElWebo,
    alt: "Icon SHOP EL WEBO",
    title: "Site E-Commerce",
    description:
      "Développe ta boutique en ligne sur-mesure : une expérience d’achat simple, rapide et efficace pour booster tes ventes.",
  },
];

const SkillsListSection = () => {
  // Pour centrer la 2e carte au chargement (mobile uniquement)
  const scrollRef = useRef(null);

  useEffect(() => {
    // Sur mobile uniquement, centre la carte du milieu
    const handleScrollToCenter = () => {
      if (window.innerWidth < 768 && scrollRef.current) {
        const container = scrollRef.current;
        const card = container.children[1]; // 2e carte (index 1)
        if (card) {
          // Décale pour centrer la carte du milieu
          const cardRect = card.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollTo =
            card.offsetLeft -
            container.offsetLeft -
            (containerRect.width / 2 - cardRect.width / 2);
          container.scrollTo({ left: scrollTo, behavior: "auto" });
        }
      }
    };
    // Un petit timeout pour laisser le layout se stabiliser
    setTimeout(handleScrollToCenter, 40);
    // Sur resize, recentre (optionnel)
    window.addEventListener("resize", handleScrollToCenter);
    return () => window.removeEventListener("resize", handleScrollToCenter);
  }, []);

  return (
    <section
      id="services"
      className="relative w-full max-w-[1280px] bg-[#1c1c1c] py-[38px] md:py-[54px] px-3 sm:px-6 md:px-0 flex flex-col items-center gap-7 md:gap-12 shadow-lg"
    >
      {/* Titre */}
      <header className="w-full text-center font-black italic font-[Epilogue,Helvetica] text-white text-[2rem] sm:text-[2.2rem] md:text-[40px] leading-[42px] mb-2">
        Mes services
      </header>

      {/* Cartes services */}
      <div
        ref={scrollRef}
        className="
          flex md:grid
          md:grid-cols-3
          sm:grid-cols-2
          grid-cols-1
          gap-5 
          md:gap-8 
          w-full 
          max-w-[1280px]
          px-0
          md:px-4
          xl:px-0

          overflow-x-auto md:overflow-x-visible scroll-smooth snap-x md:snap-none
          no-scrollbar
        "
        style={{
          WebkitOverflowScrolling: "touch",
        }}
      >
        {servicesData.map((service) => (
          <article
            key={service.id}
            className="
              flex flex-col items-center bg-white 
              px-4 py-8 sm:px-7 sm:py-10 xl:px-10 xl:py-12 
              h-auto xl:h-[480px] 
              justify-center gap-4 md:gap-8 shadow transition hover:shadow-xl

              flex-shrink-0 w-[80vw] max-w-[330px] md:max-w-none md:w-auto snap-center md:snap-none
            "
          >
            {/* Bloc image + titre */}
            <div className="flex flex-col items-center min-h-[120px] md:min-h-[200px] justify-end w-full">
              <img
                src={service.image}
                alt={service.alt}
                className="
                  w-[88px] h-[88px] 
                  sm:w-[110px] sm:h-[110px] 
                  md:w-[140px] md:h-[140px] 
                  object-contain -mt-6 sm:-mt-8 md:-mt-10 mb-2
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
            <div className="w-full flex flex-col items-center gap-1 flex-1">
              <p
                className="
                  font-[Epilogue,Helvetica] text-black text-center 
                  text-[15px] sm:text-[16px] md:text-[17px] 
                  leading-[22px] md:leading-[27px] opacity-90
                "
              >
                {service.description}
              </p>
            </div>
          </article>
        ))}
      </div>

      {/* CTA bouton */}
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSe5hvpRaPU26VUqFm81nqy9_MEupiXwQIwgs7JL2UOr5_wCrw/viewform?usp=dialog"
        target="_blank"
        rel="noopener noreferrer"
        className="
          bg-[var(--yellow)] rounded-[20px] inline-flex items-center justify-center gap-2.5 
          px-8 py-3 md:px-16 md:py-6 
          font-bold text-[#1c1c1c] 
          text-lg sm:text-xl md:text-2xl
          hover:bg-[#e6be00] transition-colors duration-200 shadow
          whitespace-nowrap
        "
      >
        Je demande un devis
      </a>

      {/* Picto bas gauche */}
      <img
        src={hommepic}
        alt="Picto bas gauche"
        className="
          absolute left-0 bottom-0 
          w-[60px] sm:w-[100px] md:w-[120px] xl:w-[150px]
          pointer-events-none select-none
        "
        draggable={false}
        style={{ userSelect: "none" }}
      />

      {/* SCSS/TAILWIND pour cacher la scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default SkillsListSection;
