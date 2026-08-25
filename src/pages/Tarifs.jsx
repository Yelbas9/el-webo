import { Link } from "react-router-dom";
import { offers } from "../data/offers";
import { faqItems } from "../data/faq";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import OffersSection from "../components/OffersSection";
import FaqAccordion from "../components/FaqAccordion";
import ServiceIcon from "../components/ServiceIcon";

// Ce qui fait bouger le prix. Chaque facteur porte un picto : la page
// était un mur de texte, on lit maintenant les titres d'un coup d'œil.
const facteurs = [
  {
    icon: "grid",
    title: "Le nombre de pages",
    text: "Un site de trois pages et un site de quinze ne demandent pas le même travail de conception ni de rédaction.",
  },
  {
    icon: "plug",
    title: "Les fonctionnalités",
    text: "Un formulaire de contact, c'est simple. Une prise de rendez-vous, un espace client ou un paiement en ligne, c'est un autre métier.",
  },
  {
    icon: "image",
    title: "Le contenu",
    text: "Si vous fournissez textes et photos, on avance vite. Si tout est à créer, il faut le prévoir au devis.",
  },
  {
    icon: "monitor",
    title: "Le sur-mesure graphique",
    text: "Une maquette entièrement originale demande plus de temps qu'une mise en page sobre à partir de votre identité existante.",
  },
];

const toujoursInclus = [
  { icon: "users", text: "Un premier échange gratuit pour cadrer le besoin" },
  { icon: "book", text: "Un devis détaillé ligne par ligne, sans engagement" },
  { icon: "smartphone", text: "Une version mobile soignée, pensée en premier" },
  { icon: "search", text: "Les fondations du référencement naturel" },
  {
    icon: "server",
    text: "L'hébergement et le nom de domaine, offerts la première année",
  },
  {
    icon: "lock",
    text: "Les accès à votre nom : le site vous appartient, sans abonnement",
  },
];

// On reprend les questions de la FAQ qui portent sur le prix et les délais.
const faqPrix = faqItems.filter((item) =>
  /coûte|temps|abonnement|référencement|domaine/i.test(item.q)
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
      ...(o.price ? { price: String(o.price), priceCurrency: "EUR" } : {}),
    })),
  };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title="Tarifs – création de site web sur mesure | El Webo"
        description="Site vitrine à partir de 400 € en ligne sous 72 h, boutique en ligne dès 800 €, application sur devis. Hébergement et nom de domaine offerts la première année, sans abonnement obligatoire."
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
            Pas de grille cachée ni de «&#8239;nous consulter&#8239;»
            systématique. Voici mes points de départ, ce qui fait varier le
            prix, et ce qui est compris dans tous les cas.
          </p>
        </div>
      </section>

      {/* Même conteneur que sur l'accueil : sans lui, la section n'avait
          aucune gouttière et le texte touchait les bords sur mobile. */}
      <div className="max-w-[1280px] mx-auto gutter">
        <OffersSection onContactClick={onContactClick} compact />
      </div>

      <div className="max-w-[1280px] mx-auto gutter pb-16 md:pb-24 flex flex-col gap-14 md:gap-20">
        {/* Ce qui fait varier le prix */}
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-12 text-center">
            Ce qui fait varier le prix
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-8 max-w-[980px] mx-auto">
            {facteurs.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 90} className="h-full">
                <article className="lift group flex h-full flex-col gap-3 bg-white p-6 md:p-7 rounded-[14px] shadow hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--yellow)] text-[#1c1c1c] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                    <ServiceIcon name={f.icon} />
                  </span>
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
          <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5 max-w-[820px] mx-auto">
            {toujoursInclus.map((item) => (
              <li
                key={item.text}
                className="flex items-center gap-3.5 text-[15px] md:text-[16px] leading-[23px] text-white/90"
              >
                <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--yellow)] text-[#1c1c1c]">
                  <ServiceIcon name={item.icon} />
                </span>
                {item.text}
              </li>
            ))}
          </ul>
        </section>

        {/* Questions sur le prix */}
        {faqPrix.length > 0 && (
          <section className="flex flex-col items-center">
            <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-10 text-center">
              Les questions qu'on me pose
            </h2>

            <FaqAccordion items={faqPrix} className="max-w-[860px]" />

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
            Le devis est gratuit, et il ne vous engage à rien
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
