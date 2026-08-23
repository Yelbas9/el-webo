import { Link } from "react-router-dom";
import { offers } from "../data/offers";
import { faqItems } from "../data/faq";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import PricingSection from "../components/PricingSection";

// Ce qui fait bouger un devis. Adapte librement à ta réalité.
const facteurs = [
  {
    title: "Le nombre de pages",
    text: "Un site de trois pages et un site de quinze ne demandent pas le même travail de conception ni de rédaction.",
  },
  {
    title: "Les fonctionnalités",
    text: "Un formulaire de contact, c'est simple. Une prise de rendez-vous, un espace client ou un paiement en ligne, c'est un autre métier.",
  },
  {
    title: "Le contenu",
    text: "Si vous fournissez textes et photos, on avance vite. Si tout est à créer, il faut le prévoir au devis.",
  },
  {
    title: "Le sur-mesure graphique",
    text: "Une maquette entièrement originale demande plus de temps qu'une mise en page sobre à partir de votre identité existante.",
  },
];

const toujoursInclus = [
  "Un premier échange gratuit pour cadrer le besoin",
  "Un devis détaillé ligne par ligne, sans engagement",
  "Une version mobile soignée, pensée en premier",
  "Les fondations du référencement naturel",
  "La mise en ligne : domaine, hébergement, HTTPS",
  "Les accès à votre nom : le site vous appartient",
];

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

// On reprend les questions de la FAQ qui portent sur le prix et les délais.
const faqPrix = faqItems.filter((item) =>
  /coûte|temps|référencement|domaine/i.test(item.q)
);

const Tarifs = ({ onContactClick }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: "Tarifs El Webo",
    url: "https://el-webo.netlify.app/tarifs",
    itemListElement: offers.map((o) => ({
      "@type": "Offer",
      name: o.name,
      description: o.tagline,
      ...(o.price
        ? { price: String(o.price), priceCurrency: "EUR" }
        : {}),
    })),
  };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title="Tarifs – création de site web sur mesure | El Webo"
        description="Site vitrine à partir de 400 €, boutique en ligne dès 800 €, application sur devis. Devis détaillé et gratuit, le montant annoncé est celui que vous payez."
        path="/tarifs"
        jsonLd={jsonLd}
      />

      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto gutter py-10 md:py-16">
          <nav aria-label="Fil d'ariane" className="mb-5 text-[14px]">
            <Link
              to="/"
              className="text-black/60 hover:text-black transition-colors"
            >
              Accueil
            </Link>
            <span className="mx-2 text-black/30">/</span>
            <span className="text-black">Tarifs</span>
          </nav>

          <h1 className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1]">
            Combien coûte votre site&#8239;?
          </h1>
          <p
            className="rise mt-5 max-w-[720px] text-[1.12rem] md:text-[1.3rem] leading-[1.55] text-black/80"
            style={{ animationDelay: "90ms" }}
          >
            Pas de grille cachée ni de «&#8239;nous consulter&#8239;» systématique.
            Voici mes points de départ, ce qui fait varier un devis, et ce qui
            est compris dans tous les cas.
          </p>
        </div>
      </section>

      <PricingSection onContactClick={onContactClick} />

      <div className="max-w-[1280px] mx-auto gutter pb-16 md:pb-24 flex flex-col gap-14 md:gap-20">
        {/* Ce qui fait varier le prix */}
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-12 text-center">
            Ce qui fait varier un devis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-[980px] mx-auto">
            {facteurs.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 90} className="h-full">
                <article className="lift flex h-full flex-col gap-2 bg-white p-6 md:p-7 rounded-[14px] shadow hover:shadow-xl">
                  <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[18px] md:text-[20px] leading-tight">
                    {f.title}
                  </h3>
                  <p className="text-[15px] leading-[23px] text-black/80">
                    {f.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Toujours inclus */}
        <section className="bg-[#1c1c1c] on-dark rounded-[14px] p-7 md:p-10">
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-white text-[1.6rem] md:text-[2rem] leading-tight text-center">
            Compris dans tous les cas
          </h2>
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 max-w-[820px] mx-auto">
            {toujoursInclus.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2.5 text-[15px] md:text-[16px] leading-[24px] text-white/90"
              >
                <Check />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Questions sur le prix */}
        {faqPrix.length > 0 && (
          <section>
            <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-10 text-center">
              Les questions qu'on me pose
            </h2>
            <div className="flex flex-col gap-4 max-w-[860px] mx-auto">
              {faqPrix.map((item) => (
                <article
                  key={item.q}
                  className="bg-white rounded-[14px] shadow p-6 md:p-7"
                >
                  <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[17px] md:text-[19px] leading-snug mb-2">
                    {item.q}
                  </h3>
                  <p className="text-[15px] md:text-[16px] leading-[25px] text-black/80">
                    {item.a}
                  </p>
                </article>
              ))}
            </div>
            <p className="mt-6 text-center text-[15px] text-black/65">
              <Link
                to="/#faq"
                className="underline underline-offset-4 hover:text-black transition-colors"
              >
                Voir toutes les questions fréquentes
              </Link>
            </p>
          </section>
        )}

        {/* CTA final */}
        <section className="text-center">
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.6rem] md:text-[2rem] leading-tight">
            Le devis est gratuit, et il vous engage à rien
          </h2>
          <p className="mt-3 mx-auto max-w-[600px] text-[16px] leading-[26px] text-black/75">
            Décrivez votre projet en deux minutes, je reviens vers vous avec un
            chiffrage détaillé.
          </p>
          <button
            type="button"
            onClick={() => onContactClick?.()}
            className="lift mt-7 bg-[var(--yellow)] rounded-[20px] px-8 py-4 md:px-12 md:py-5 font-bold text-[#1c1c1c] text-lg md:text-xl hover:bg-[#e6be00] shadow hover:shadow-xl cursor-pointer"
          >
            Demander mon devis
          </button>
        </section>
      </div>
    </div>
  );
};

export default Tarifs;
