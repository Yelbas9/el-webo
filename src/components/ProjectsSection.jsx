import bombe from "/img/bombe.webp";
import { projects } from "../data/projects";
import Reveal from "./Reveal";
import MobileCarousel from "./MobileCarousel";
import ProjectFrame from "./ProjectFrame";
import SectionTitle from "./SectionTitle";

const ExternalIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
    className="flex-shrink-0"
  >
    <path d="M7 17 17 7M9 7h8v8" />
  </svg>
);

const ProjectCard = ({ project }) => {
  return (
    <article className="lift group flex flex-col bg-[#1c1c1c] shadow-lg overflow-hidden h-full hover:shadow-2xl">
      {/* Fenêtre navigateur : la capture défile au survol */}
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className="block focus:outline-none"
        tabIndex={-1}
        aria-hidden="true"
      >
        <ProjectFrame project={project} />
      </a>

      {/* Contenu */}
      <div className="flex flex-1 flex-col gap-4 p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="bg-[var(--yellow)] px-3 py-1 text-[12.5px] md:text-[13px] font-bold uppercase tracking-wide text-[#1c1c1c]">
            {project.category}
          </span>
          <span className="text-[13px] text-white/50">{project.year}</span>
        </div>

        <div>
          <h3 className="font-black italic font-[Epilogue,Helvetica] text-white text-[22px] md:text-[27px] leading-tight">
            {project.name}
          </h3>
          <p className="mt-1 text-[15px] md:text-[17px] text-[var(--yellow)]">
            {project.tagline}
          </p>
        </div>

        <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-white/85">
          {project.description}
        </p>

        {project.results?.length > 0 && (
          <ul className="flex flex-wrap gap-x-7 gap-y-3 border-y border-white/10 py-4">
            {project.results.map((r) => (
              <li key={r.label}>
                <span className="block font-black italic font-[Epilogue,Helvetica] text-[var(--yellow)] text-[26px] md:text-[30px] leading-none">
                  {r.value}
                </span>
                <span className="block mt-1 text-[13px] text-white/70">
                  {r.label}
                </span>
              </li>
            ))}
          </ul>
        )}

        <ul className="flex flex-wrap gap-2">
          {project.highlights.map((item) => (
            <li
              key={item}
              className="rounded-full border border-white/20 px-3 py-1.5 text-[13px] md:text-[13.5px] text-white/75"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
          <span className="text-[12.5px] md:text-[13px] uppercase tracking-wide text-white/45">
            {project.stack.join(" · ")}
          </span>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="
              inline-flex items-center gap-2 rounded-[20px] bg-white px-5 py-2.5
              text-[15px] md:text-[16px] font-bold text-[#1c1c1c]
              transition-colors duration-200 hover:bg-[var(--yellow)]
              [&>svg]:transition-transform [&:hover>svg]:translate-x-0.5
              [&:hover>svg]:-translate-y-0.5
            "
          >
            Voir le site
            <ExternalIcon />
            <span className="sr-only">
              {project.name} (nouvel onglet)
            </span>
          </a>
        </div>
      </div>
    </article>
  );
};

const ProjectsSection = ({ onContactClick }) => {
  return (
    <section
      id="mes-projets"
      className="w-full flex flex-col items-center pt-16 pb-10 md:pt-28 md:pb-20"
    >
      <SectionTitle
        icon={bombe}
        iconSide="left"
        iconClass="w-[42px] sm:w-[60px] md:w-[80px] -mt-5 md:-mt-8"
        className="mb-4 md:mb-6"
      >
        Mes Réalisations
      </SectionTitle>

      <p className="mb-10 md:mb-14 max-w-[720px] text-center text-base md:text-[1.2rem] leading-[27px] text-black">
        Des projets réellement en ligne, développés sur mesure — pas de
        template. Survole une carte pour parcourir le site, ou ouvre-le
        directement.
      </p>

      <MobileCarousel
        ariaLabel="Mes réalisations"
        desktopClass="lg:grid lg:grid-cols-2 lg:gap-8"
      >
        {projects.map((project, i) => (
          <Reveal key={project.id} delay={(i % 2) * 120} className="h-full w-full">
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </MobileCarousel>

      {/* CTA bouton */}
      <div className="mt-12 md:mt-16 flex justify-center w-full">
        <button
          type="button"
          onClick={() => onContactClick?.()}
          className="lift bg-[var(--yellow)] rounded-[20px] px-8 py-4 md:px-16 md:py-6 font-bold text-[#1c1c1c] text-lg md:text-2xl hover:bg-[#e6be00] shadow hover:shadow-xl whitespace-nowrap cursor-pointer"
        >
          Je demande un devis
        </button>
      </div>
    </section>
  );
};

export default ProjectsSection;
