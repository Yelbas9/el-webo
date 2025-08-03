import React from "react";
import bombe from "/bombe.webp";
import accueilImage from "/pageaccueil.1.webp";
import produitsImage from "/pageproduit.1.webp";
// import fleche from "/mnt/data/Fleche.webp"; // à décommenter si tu préfères

// Flèche générique positionnée à l'extérieur d'une image
const FlecheExt = ({
  side = "right",
  alt = "flèche",
  direction = "left",
  flipY = false,
}) => {
  // rotation selon direction demandée
  const rotation = direction === "left" ? "rotate(-270deg)" : "rotate(90deg)";
  const flip = flipY ? " scaleY(-1)" : "";
  // position : à droite ou à gauche du conteneur parent, bottom aligné
  const position =
    side === "right"
      ? "absolute right-[-130px] bottom-0"
      : "absolute left-[-130px] bottom-0";
  return (
    <img
      src="/fleche.webp"
      alt={alt}
      className={`${position} w-16 sm:w-30 mb-2 hidden xl:block pointer-events-none`}
      style={{
        zIndex: 21,
        transform: rotation + flip, // combine rotation + flip vertical si demandé
      }}
      draggable={false}
    />
  );
};

const ChevronScroll = () => (
  <div className="hidden xl:flex flex-col items-center absolute left-[-38px] top-1/2 -translate-y-1/2 select-none animate-bounce-vert z-20 pointer-events-none">
    <svg width="28" height="46" viewBox="0 0 28 46" fill="none">
      <path d="M14 2V44" stroke="black" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M6 36L14 44L22 36"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="mt-1 text-xs text-gray-500">Scroll</span>
    <style>{`
      .animate-bounce-vert { animation: bounce-vert 1.2s infinite; }
      @keyframes bounce-vert { 0%,100%{transform:translateY(-12px);} 50%{transform:translateY(12px);} }
    `}</style>
  </div>
);

const ChevronScrollRight = () => (
  <div className="hidden xl:flex flex-col items-center absolute right-[-38px] top-1/2 -translate-y-1/2 select-none animate-bounce-vert z-20 pointer-events-none">
    <svg width="28" height="46" viewBox="0 0 28 46" fill="none">
      <path d="M14 2V44" stroke="black" strokeWidth="3" strokeLinecap="round" />
      <path
        d="M6 36L14 44L22 36"
        stroke="black"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
    <span className="mt-1 text-xs text-gray-500">Scroll</span>
    <style>{`
      .animate-bounce-vert { animation: bounce-vert 1.2s infinite; }
      @keyframes bounce-vert { 0%,100%{transform:translateY(-12px);} 50%{transform:translateY(12px);} }
    `}</style>
  </div>
);

const MonDernierProjet = () => {
  return (
    <section
      id="mes-projets"
      className="w-full flex flex-col items-center pt-16 pb-10 md:pt-30 md:pb-20"
    >
      {/* --- Titre avec déco à gauche --- */}
      <div className="w-full flex items-center justify-center mb-6 md:mb-8 -ml-8 sm:-ml-20">
        <img
          src={bombe}
          alt=""
          className="w-[48px] sm:w-[60px] md:w-[80px] -mt-6 md:-mt-8"
          aria-hidden="true"
          draggable={false}
          style={{ userSelect: "none" }}
        />
        <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2rem] sm:text-[2.3rem] md:text-[40px] leading-[1.1]">
          Mon Dernier Projet
        </h2>
      </div>

      {/* Texte résumé en haut */}
      <div className="flex flex-col items-center w-full max-w-[900px] mb-6 md:mb-12 px-2 sm:px-4">
        <p className="font-[Epilogue,Helvetica] text-black text-center text-base sm:text-[1.14rem] md:text-[1.2rem] leading-[27px]">
          Ce site vitrine a été réalisé pour <strong>TH Menuiserie</strong>, un
          artisan menuisier. Identité visuelle professionnelle, navigation
          optimisée et contenus adaptés à la cible locale.
        </p>
      </div>

      {/* Bloc 1 : Image accueil à gauche, texte à droite */}
      <div className="w-full flex flex-col md:flex-row items-center justify-center mb-10 md:mb-14 max-w-[1280px] relative gap-6 md:gap-0 px-2 xl:px-0">
        <div
          className="flex flex-1 flex-col md:flex-row items-center w-full bg-[#1c1c1c] shadow-lg"
          style={{ backdropFilter: "blur(0px)" }}
        >
          {/* Bloc image accueil */}
          <div className="flex-1 flex items-center justify-center relative min-w-[50%] w-full">
            <ChevronScroll />
            <div className="relative w-full max-w-[950px] aspect-[16/9] bg-white overflow-hidden">
              {/* SCROLLABLE Y */}
              <div className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden">
                <img
                  src={accueilImage}
                  alt="Page d'accueil TH Menuiserie"
                  className="w-full h-auto min-h-full object-cover object-left"
                  draggable={false}
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
            {/* Flèche à droite, orientée vers la gauche */}
            <FlecheExt
              side="right"
              direction="right"
              alt="Flèche vers la gauche"
            />
          </div>
          {/* Bloc texte accueil */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start px-8 pt-5 md:pt-0 w-full">
            <h3 className="font-bold font-[Epilogue,Helvetica] text-white text-lg sm:text-xl xl:text-2xl mb-3 md:mb-4 text-center md:text-left">
              Page d’accueil du site vitrine
            </h3>
            <p className="text-base xl:text-lg font-[Epilogue,Helvetica] text-white opacity-90 mb-10 sm:mb-1 text-center md:text-left">
              Présentation de l'entreprise, mise en avant des services proposés,
              navigation fluide et call-to-action efficaces pour convertir les
              visiteurs en prospects.
            </p>
          </div>
        </div>
      </div>

      {/* Bloc 2 : Texte à gauche, image produit à droite */}
      <div className="w-full flex flex-col md:flex-row-reverse items-center justify-center mb-10 md:mb-14 max-w-[1280px] relative gap-6 md:gap-0 px-2 xl:px-0">
        <div
          className="flex flex-1 flex-col md:flex-row-reverse items-center w-full bg-[#1c1c1c] shadow-lg "
          style={{ backdropFilter: "blur(0px)" }}
        >
          {/* Bloc image produit */}
          <div className="flex-1 flex items-center justify-center relative min-w-[50%] w-full">
            <ChevronScrollRight />
            <div className="relative w-full max-w-[950px] aspect-[16/9] bg-white overflow-hidden">
              {/* SCROLLABLE Y */}
              <div className="absolute top-0 left-0 w-full h-full overflow-y-auto overflow-x-hidden">
                <img
                  src={produitsImage}
                  alt="Page produit TH Menuiserie"
                  className="w-full h-auto min-h-full object-cover object-left"
                  draggable={false}
                  style={{ minHeight: "100%" }}
                />
              </div>
            </div>
            {/* Flèche à gauche, orientée vers la droite, flip vertical */}
            <FlecheExt
              side="left"
              direction="left"
              alt="Flèche vers la droite"
              flipY={true}
            />
          </div>
          {/* Bloc texte produit */}
          <div className="flex-1 flex flex-col justify-center items-center md:items-start px-8 pt-5 md:pt-0 w-full">
            <h3 className="font-bold font-[Epilogue,Helvetica] text-white text-lg sm:text-xl xl:text-2xl mb-3 md:mb-4 text-center md:text-left">
              Page produits/services
            </h3>
            <p className="text-base xl:text-lg font-[Epilogue,Helvetica] text-white opacity-90 mb-10 sm:mb-1 text-center md:text-left ">
              Détails des prestations, catalogue des produits, galeries photo et
              descriptions précises pour présenter l’expertise de l’entreprise.
            </p>
          </div>
        </div>
      </div>

      {/* CTA bouton */}
      <div className="flex justify-center w-full">
        <a
          href="https://docs.google.com/forms/d/e/1FAIpQLSe5hvpRaPU26VUqFm81nqy9_MEupiXwQIwgs7JL2UOr5_wCrw/viewform?usp=dialog"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[var(--yellow)] rounded-[20px] px-8 py-3 md:px-16 md:py-6 font-bold text-[#1c1c1c] text-lg md:text-2xl hover:bg-[#e6be00] transition-colors duration-200 shadow whitespace-nowrap"
        >
          Je demande un devis
        </a>
      </div>
    </section>
  );
};

export default MonDernierProjet;
