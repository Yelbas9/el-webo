// Arguments affichés dès le premier écran. Ce sont des engagements
// commerciaux : ils doivent rester alignés avec offers.js et la FAQ.
const argumentsCles = [
  "Impeccable sur tous les écrans",
  "Hébergement et domaine offerts la 1re année",
  "Sans abonnement obligatoire",
];

const Check = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0 text-[#009379]"
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
      <div className="flex flex-col gap-5 xl:gap-6 w-full md:max-w-[56%] xl:max-w-[720px] pt-10 md:pb-12">
        <p
          className="rise font-[Epilogue,Helvetica] text-lg sm:text-xl text-black"
          style={{ animationDelay: "40ms" }}
        >
          React <span className="text-[#2d2d2d]">|</span> UX/UI
        </p>
        <h1
          className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[2.7rem] xl:text-[3.5rem] leading-[1.1]"
          style={{ animationDelay: "90ms" }}
        >
          Votre site internet,{" "}
          {/* Surlignage au feutre : le fond ne monte qu'aux deux tiers de la
              ligne, et box-decoration-clone le répète sur chaque ligne. */}
          <span
            className="box-decoration-clone"
            style={{
              backgroundImage:
                "linear-gradient(transparent 64%, var(--yellow) 64%)",
            }}
          >
            en&nbsp;ligne sous 72&nbsp;h dès 400&nbsp;€
          </span>
        </h1>
        <p
          className="rise font-[Epilogue,Helvetica] text-[1.02rem] sm:text-[1.12rem] md:text-[1.18rem] leading-[1.5] text-black/85"
          style={{ animationDelay: "140ms" }}
        >
          Site vitrine, boutique en ligne ou application&#8239;: je conçois des
          sites <strong>sur mesure</strong>, optimisés pour Google et pensés
          pour transformer vos visiteurs en clients.
        </p>

        <ul
          className="rise flex flex-wrap gap-2"
          style={{ animationDelay: "170ms" }}
        >
          {argumentsCles.map((argument) => (
            <li
              key={argument}
              className="inline-flex items-center gap-1.5 rounded-full border border-black/10 bg-[#F7F5F2] px-3 py-1.5 text-[12.5px] sm:text-[13px] md:text-[14px] font-semibold leading-tight text-[#1c1c1c]"
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
            className="lift inline-flex items-center justify-center bg-[#FFD300] rounded-[20px] px-8 py-4 xl:px-10 xl:py-5 font-bold text-[#1c1c1c] text-[17px] xl:text-[19px] leading-none shadow-sm hover:bg-[#e6be00] hover:shadow-lg cursor-pointer"
            style={{ minHeight: "48px" }}
          >
            Obtenir mon devis gratuit
          </button>
          <button
            type="button"
            onClick={scrollToOffers}
            className="lift inline-flex items-center justify-center gap-2 rounded-[20px] border-2 border-[#1c1c1c] px-7 py-4 xl:px-8 xl:py-5 font-bold text-[#1c1c1c] text-[17px] xl:text-[19px] leading-none hover:bg-[#1c1c1c] hover:text-white cursor-pointer"
            style={{ minHeight: "48px" }}
          >
            Voir les tarifs dès 400&nbsp;€
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
            className="lift mb-7 flex-shrink-0 inline-flex items-center justify-center whitespace-nowrap bg-[#FFD300] rounded-[20px] px-4 sm:px-5 py-3.5 font-bold text-[#1c1c1c] text-[16px] sm:text-[17px] leading-none shadow-sm hover:bg-[#e6be00] cursor-pointer"
            style={{ minHeight: "52px" }}
          >
            Devis gratuit
          </button>
          <img
            src="/hero.webp"
            alt="Ibrahim, développeur web chez El Webo"
            width="420"
            height="542"
            fetchPriority="high"
            decoding="async"
            className="h-auto object-contain -mb-5 -mr-5 sm:-mr-8"
            draggable={false}
            /* La largeur se cale sur la place que laisse le bouton : à
               320 px le calc() prend le dessus, au-delà c'est le 50vw. */
            style={{
              userSelect: "none",
              width: "min(50vw, calc(100% - 132px), 245px)",
            }}
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
          className="w-full max-w-[260px] lg:max-w-[310px] xl:max-w-[370px] h-auto object-contain -mb-4"
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>
    </header>
  );
};

export default HeaderSection;
