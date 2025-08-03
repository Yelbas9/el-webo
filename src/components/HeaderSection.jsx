const HeaderSection = ({ onContactClick }) => {
  return (
    <header className="relative w-full max-w-[1280px] min-h-[400px] md:min-h-[500px] xl:min-h-[400px] mx-auto flex flex-col md:flex-row items-center justify-between px-4 xl:px-[0px] xl:gap-20">
      {/* Texte à gauche */}
      <div className="flex flex-col gap-6 xl:gap-10 max-w-full md:max-w-[450px] xl:max-w-[600px] order-2 pt-10">
        <p className="font-[Epilogue,Helvetica] text-xl text-black">
          React <span className="text-[#2d2d2d]">|</span> UX/UI
        </p>
        <h1 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2.3rem] md:text-[3rem] xl:text-[4rem] leading-[1.1]">
          Développeur Web
        </h1>
        <p className="font-[Epilogue,Helvetica] text-[1.1rem] md:text-[1.38rem] leading-[27px] text-black">
          Spécialiste React, UX/UI : je crée des sites web modernes, rapides et
          uniques, pensés pour marquer les esprits.
          <br className="mb-4" />
          <span className="block mt-3">
            Besoin d’un site vitrine, d’une boutique ou d’une appli ? Discutons
            de ton projet.
          </span>
        </p>
        {/* BOUTON VISIBLE UNIQUEMENT EN DESKTOP */}
        <button
          type="button"
          onClick={onContactClick}
          className="hidden md:inline-flex items-center justify-center bg-[#FFD300] rounded-[20px] px-[64px] py-[24px] font-bold text-[#1c1c1c] text-[22px] leading-none shadow-sm hover:bg-[#e6be00] transition-colors cursor-pointer duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD300] focus:ring-offset-2"
          style={{
            minWidth: "148px",
            maxWidth: "300px",
            minHeight: "48px",
            gap: "10px",
            borderRadius: "20px",
          }}
        >
          Me contacter
        </button>

        {/* FLEX ROW BOUTON + IMAGE SUR MOBILE */}
        <div className="flex md:hidden flex-row items-center justify-between w-full -mt-10">
          <button
            type="button"
            onClick={onContactClick}
            className="-mt-15 inline-flex items-center justify-center bg-[#FFD300] rounded-[20px] px-8 py-3 font-bold text-[#1c1c1c] text-[18px] leading-none shadow-sm hover:bg-[#e6be00] transition-colors cursor-pointer duration-200 focus:outline-none focus:ring-2 focus:ring-[#FFD300] focus:ring-offset-2"
            style={{
              minWidth: "180px",
              maxWidth: "220px",
              minHeight: "52px",
              gap: "8px",
              borderRadius: "20px",
            }}
          >
            Me contacter
          </button>
          <img
            src="/hero.webp"
            alt="Développeur web El Webo"
            className="w-[220px] h-[250px] object-contain -mb-5"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
      </div>

      {/* IMAGE À DROITE POUR DESKTOP */}
      <div className="hidden md:flex items-center justify-center w-full xl:w-[520px] h-full order-2">
        <img
          src="/hero.webp"
          alt="Développeur web El Webo"
          className="w-[320px] h-[500px] xl:w-[420px] xl:h-[542px] object-contain md:-mb-25 xl:-mb-0"
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </header>
  );
};

export default HeaderSection;
