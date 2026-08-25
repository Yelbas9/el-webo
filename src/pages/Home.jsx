import HeaderSection from "../components/HeaderSection";
import OffersSection from "../components/OffersSection";
import SkillsOverviewSection from "../components/SkillsOverviewSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ProcessSection from "../components/ProcessSection";
import FaqSection from "../components/FaqSection";
import Seo from "../components/Seo";

// Bandeau de réassurance : volontairement différent des arguments du
// héros, sinon le visiteur lit deux fois la même chose.
const trustPoints = [
  "100 % sur mesure, sans template",
  "Développé en React, donc rapide",
  "Vous restez propriétaire à 100 %",
  "En Gironde et partout en France",
];

const Home = ({ onContactClick }) => {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F2] flex flex-col">
      <Seo
        title="El Webo – Création de site internet sur mesure dès 400 €, en ligne sous 72 h"
        description="Création de sites web et d'applications sur mesure en React. Site vitrine dès 400 € livré sous 72 h, boutique en ligne dès 800 €. Hébergement et nom de domaine offerts la première année, sans abonnement obligatoire."
        path="/"
      />

      {/* NAVIGATION + HERO */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto gutter">
          <HeaderSection onContactClick={onContactClick} />
        </div>
      </section>

      {/* BANDEAU DE RÉASSURANCE — bureau uniquement.
          Sur mobile il se retrouvait systématiquement collé au bouton du
          héros, et les arguments clés y figurent déjà. */}
      <div className="relative z-10 hidden w-full bg-[var(--yellow)] lg:block">
        <ul className="max-w-[1280px] mx-auto gutter flex flex-wrap items-center justify-center gap-x-8 gap-y-2 py-4">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-center gap-2 text-[15px] font-semibold leading-snug text-[#1c1c1c]"
            >
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
                className="flex-shrink-0"
              >
                <path d="m5 13 4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* PRESTATIONS ET TARIFS RÉUNIS, JUSTE APRÈS LE HÉROS */}
      <section className="w-full bg-[#1c1c1c] relative overflow-hidden on-dark">
        <div className="max-w-[1280px] mx-auto gutter">
          <OffersSection onContactClick={onContactClick} />
        </div>
      </section>

      {/* PREUVES, PUIS EXPERTISE, PUIS OBJECTIONS */}
      <section className="w-full bg-[#F7F5F2]">
        <div className="max-w-[1280px] mx-auto gutter">
          <ProjectsSection onContactClick={onContactClick} />
          <TestimonialsSection />
          <SkillsOverviewSection />
          <ProcessSection />
          <FaqSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
