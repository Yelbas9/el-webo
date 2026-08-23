const HeaderSection = ({ onContactClick }) => {
  return (
    <header className="relative w-full max-w-[1280px] min-h-[400px] md:min-h-[500px] xl:min-h-[400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 xl:gap-20">
      {/* Texte à gauche */}
      <div className="flex flex-col gap-6 xl:gap-10 w-full md:max-w-[54%] xl:max-w-[600px] pt-10">
        <p
          className="rise font-[Epilogue,Helvetica] text-xl text-black"
          style={{ animationDelay: "40ms" }}
        >
          React <span className="text-[#2d2d2d]">|</span> UX/UI
        </p>
        <h1
          className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[3rem] xl:text-[4rem] leading-[1.1]"
          style={{ animationDelay: "90ms" }}
        >
          Développeur Web
        </h1>
        <p
          className="rise font-[Epilogue,Helvetica] text-[1.05rem] sm:text-[1.15rem] md:text-[1.38rem] leading-[27px] text-black"
          style={{ animationDelay: "140ms" }}
        >
          Spécialiste React, UX/UI&#8239;: je crée des sites web modernes,
          rapides et uniques, pensés pour marquer les esprits.
          <span className="block mt-3">
            Besoin d’un site vitrine, d’une boutique ou d’une appli&#8239;?
            Discutons de ton projet.
          </span>
        </p>

        {/* BOUTON VISIBLE UNIQUEMENT EN DESKTOP */}
        <button
          type="button"
          onClick={onContactClick}
          className="rise lift hidden md:inline-flex items-center justify-center self-start bg-[#FFD300] rounded-[20px] px-10 py-5 xl:px-[64px] xl:py-[24px] font-bold text-[#1c1c1c] text-[20px] xl:text-[22px] leading-none shadow-sm hover:bg-[#e6be00] hover:shadow-lg cursor-pointer"
          style={{ animationDelay: "190ms", minHeight: "48px" }}
        >
          Me contacter
        </button>

        {/* FLEX ROW BOUTON + IMAGE SUR MOBILE */}
        <div
          className="rise flex md:hidden flex-row items-end justify-between gap-3 w-full -mt-8"
          style={{ animationDelay: "190ms" }}
        >
          <button
            type="button"
            onClick={onContactClick}
            className="lift flex-shrink-0 inline-flex items-center justify-center bg-[#FFD300] rounded-[20px] px-6 py-3.5 font-bold text-[#1c1c1c] text-[17px] sm:text-[18px] leading-none shadow-sm hover:bg-[#e6be00] cursor-pointer"
            style={{ minHeight: "52px" }}
          >
            Me contacter
          </button>
          <img
            src="/hero.webp"
            alt="Ibrahim, développeur web chez El Webo"
            width="420"
            height="542"
            fetchPriority="high"
            decoding="async"
            className="w-[42%] max-w-[220px] h-auto object-contain -mb-5"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
      </div>

      {/* IMAGE À DROITE POUR DESKTOP */}
      <div className="hidden md:flex items-end justify-center flex-1 min-w-0 h-full">
        <img
          src="/hero.webp"
          alt="Ibrahim, développeur web chez El Webo"
          width="420"
          height="542"
          fetchPriority="high"
          decoding="async"
          className="w-full max-w-[280px] lg:max-w-[350px] xl:max-w-[420px] h-auto object-contain md:-mb-16 xl:-mb-0"
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </header>
  );
};

export default HeaderSection;
