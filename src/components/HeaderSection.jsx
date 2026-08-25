// Arguments affichés dès le premier écran. Ce sont des engagements
// commerciaux : ils doivent rester alignés avec offers.js et la FAQ.
const argumentsCles = [
  "Hébergement et nom de domaine offerts la 1re année",
  "Sans abonnement obligatoire, le site vous appartient",
  "Devis gratuit, détaillé et sans engagement",
];

const Check = () => (
  <svg
    width="16"
    height="16"
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

const HeaderSection = ({ onContactClick }) => {
  const scrollToOffers = () => {
    document
      .getElementById("services")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className="relative w-full max-w-[1280px] mx-auto min-h-[400px] md:min-h-[500px] xl:min-h-[440px] flex flex-col md:flex-row items-center md:items-stretch justify-between gap-4 md:gap-8 xl:gap-20">
      {/* Texte à gauche */}
      <div className="flex flex-col gap-5 xl:gap-7 w-full md:max-w-[54%] xl:max-w-[640px] pt-10 md:pb-12">
        <p
          className="rise font-[Epilogue,Helvetica] text-lg sm:text-xl text-black"
          style={{ animationDelay: "40ms" }}
        >
          React <span className="text-[#2d2d2d]">|</span> UX/UI
        </p>
        <h1
          className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[2.9rem] xl:text-[3.7rem] leading-[1.08]"
          style={{ animationDelay: "90ms" }}
        >
          Votre site internet,
          <span className="block">en ligne sous 72&nbsp;h</span>
        </h1>
        <p
          className="rise font-[Epilogue,Helvetica] text-[1.05rem] sm:text-[1.15rem] md:text-[1.25rem] leading-[1.5] text-black"
          style={{ animationDelay: "140ms" }}
        >
          Site vitrine sur mesure <strong>à partir de 400&nbsp;€</strong>,
          développé en React — jamais à partir d’un template. Boutique en ligne
          dès 800&nbsp;€, application sur devis.
        </p>

        <ul
          className="rise flex flex-col gap-2"
          style={{ animationDelay: "170ms" }}
        >
          {argumentsCles.map((argument) => (
            <li
              key={argument}
              className="flex items-start gap-2 text-[14px] sm:text-[15px] md:text-[16px] font-semibold leading-[21px] text-black"
            >
              <Check />
              {argument}
            </li>
          ))}
        </ul>

        {/* BUREAU : appel à l'action principal + secondaire */}
        <div
          className="rise hidden md:flex flex-wrap items-center gap-3 xl:gap-4"
          style={{ animationDelay: "200ms" }}
        >
          <button
            type="button"
            onClick={onContactClick}
            className="lift inline-flex items-center justify-center bg-[#FFD300] rounded-[20px] px-8 py-4 xl:px-11 xl:py-5 font-bold text-[#1c1c1c] text-[18px] xl:text-[20px] leading-none shadow-sm hover:bg-[#e6be00] hover:shadow-lg cursor-pointer"
            style={{ minHeight: "48px" }}
          >
            Obtenir mon devis gratuit
          </button>
          <button
            type="button"
            onClick={scrollToOffers}
            className="lift inline-flex items-center justify-center gap-2 rounded-[20px] border-2 border-[#1c1c1c] px-7 py-4 xl:px-9 xl:py-5 font-bold text-[#1c1c1c] text-[18px] xl:text-[20px] leading-none hover:bg-[#1c1c1c] hover:text-white cursor-pointer"
            style={{ minHeight: "48px" }}
          >
            Voir les formules
            <span aria-hidden="true">&darr;</span>
          </button>
        </div>

        {/* MOBILE : bouton + illustration côte à côte. Seule l'image se
            pose sur la bordure basse ; le bouton garde sa marge (mb-7). */}
        <div
          className="rise flex md:hidden flex-row items-end justify-between gap-3 w-full -mt-1"
          style={{ animationDelay: "200ms" }}
        >
          <button
            type="button"
            onClick={onContactClick}
            className="lift mb-7 flex-shrink-0 inline-flex items-center justify-center bg-[#FFD300] rounded-[20px] px-5 py-3.5 font-bold text-[#1c1c1c] text-[16px] sm:text-[17px] leading-none shadow-sm hover:bg-[#e6be00] cursor-pointer"
            style={{ minHeight: "52px" }}
          >
            Mon devis gratuit
          </button>
          <img
            src="/hero.webp"
            alt="Ibrahim, développeur web chez El Webo"
            width="420"
            height="542"
            fetchPriority="high"
            decoding="async"
            className="w-[40%] max-w-[200px] h-auto object-contain -mb-5"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
      </div>

      {/* IMAGE À DROITE POUR DESKTOP */}
      <div className="hidden md:flex items-end justify-center flex-1 min-w-0">
        <img
          src="/hero.webp"
          alt="Ibrahim, développeur web chez El Webo"
          width="420"
          height="542"
          fetchPriority="high"
          decoding="async"
          className="w-full max-w-[280px] lg:max-w-[330px] xl:max-w-[390px] h-auto object-contain -mb-4"
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </header>
  );
};

export default HeaderSection;
