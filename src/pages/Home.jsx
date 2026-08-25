import HeaderSection from "../components/HeaderSection";
import SkillsListSection from "../components/SkillsListSection";
import SkillsOverviewSection from "../components/SkillsOverviewSection";
import ProjectsSection from "../components/ProjectsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import ProcessSection from "../components/ProcessSection";
import FaqSection from "../components/FaqSection";
import PricingSection from "../components/PricingSection";
import Seo from "../components/Seo";

// Bandeau de réassurance : adapte ces promesses à ce que tu tiens vraiment.
const trustPoints = [
  "100 % sur mesure, sans template",
  "Développé en React",
  "Domaine, hébergement & SEO gérés",
  "Devis gratuit et sans engagement",
];

const Home = ({ onContactClick }) => {
  return (
    <div className="w-full min-h-screen bg-[#F7F5F2] flex flex-col">
      <Seo
        title="El Webo – Création de sites web & applications sur mesure | Développeur React"
        description="Création de sites web et d'applications sur mesure en React, en Gironde et partout en France. Site vitrine à partir de 400 €, boutique en ligne dès 800 €. Devis gratuit."
        path="/"
      />

      {/* NAVIGATION + HERO */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto gutter">
          <HeaderSection onContactClick={onContactClick} />
        </div>
      </section>

      {/* BANDEAU DE RÉASSURANCE
          Mobile : deux colonnes alignées à gauche — en flex centré, les
          quatre promesses se décalaient les unes par rapport aux autres. */}
      <div className="relative z-10 w-full bg-[var(--yellow)]">
        <ul className="max-w-[1280px] mx-auto gutter grid grid-cols-2 gap-x-4 gap-y-2.5 py-4 lg:flex lg:flex-wrap lg:items-center lg:justify-center lg:gap-x-8 lg:gap-y-2">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="flex items-start lg:items-center gap-2 text-[13px] md:text-[15px] font-semibold leading-snug text-[#1c1c1c]"
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
                className="flex-shrink-0 mt-[3px] lg:mt-0"
              >
                <path d="m5 13 4 4L19 7" />
              </svg>
              {point}
            </li>
          ))}
        </ul>
      </div>

      {/* MES SERVICES (NOIR) */}
      <section className="w-full bg-[#1c1c1c] relative overflow-hidden on-dark">
        <div className="max-w-[1280px] mx-auto gutter">
          <SkillsListSection onContactClick={onContactClick} />
        </div>
      </section>

      {/* COMPÉTENCES, PROJETS, CONTACT (fond F7F5F2) */}
      <section className="w-full bg-[#F7F5F2]">
        <div className="max-w-[1280px] mx-auto gutter">
          <SkillsOverviewSection />
          <ProjectsSection onContactClick={onContactClick} />
          <TestimonialsSection />
          <PricingSection onContactClick={onContactClick} />
          <ProcessSection />
          <FaqSection />
        </div>
      </section>
    </div>
  );
};

export default Home;
