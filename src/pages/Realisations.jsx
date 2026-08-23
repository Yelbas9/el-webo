import { Link } from "react-router-dom";
import { projects } from "../data/projects";
import { services } from "../data/services";
import Seo from "../components/Seo";
import Reveal from "../components/Reveal";
import ProjectFrame from "../components/ProjectFrame";
import PhoneMockup from "../components/PhoneMockup";
import bombe from "/img/bombe.webp";

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

const ProjectDetail = ({ project, index }) => {
  const reversed = index % 2 === 1;

  return (
    <article className="group bg-[#1c1c1c] rounded-[14px] overflow-hidden on-dark shadow-lg">
      <div
        className={`grid grid-cols-1 lg:grid-cols-[1.15fr_1fr] ${
          reversed ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block focus:outline-none"
          tabIndex={-1}
          aria-hidden="true"
        >
          <ProjectFrame
            project={project}
            height="h-[280px] sm:h-[380px] lg:h-[460px]"
          />
        </a>

        <div className="flex flex-col gap-4 p-7 md:p-9">
          <div className="flex flex-wrap items-center gap-3">
            <span className="bg-[var(--yellow)] px-3 py-1 text-[12.5px] font-bold uppercase tracking-wide text-[#1c1c1c]">
              {project.category}
            </span>
            <span className="text-[13px] text-white/50">{project.year}</span>
          </div>

          <div>
            <h2 className="font-black italic font-[Epilogue,Helvetica] text-white text-[26px] md:text-[32px] leading-tight">
              {project.name}
            </h2>
            <p className="mt-1 text-[16px] md:text-[18px] text-[var(--yellow)]">
              {project.tagline}
            </p>
          </div>

          <p className="text-[15px] md:text-[16px] leading-[25px] text-white/85">
            {project.description}
          </p>

          {project.results?.length > 0 && (
            <ul className="flex flex-wrap gap-x-7 gap-y-3 border-y border-white/10 py-4">
              {project.results.map((r) => (
                <li key={r.label}>
                  <span className="block font-black italic font-[Epilogue,Helvetica] text-[var(--yellow)] text-[28px] leading-none">
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
                className="rounded-full border border-white/20 px-3 py-1.5 text-[13px] text-white/75"
              >
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-5">
            <span className="text-[12.5px] uppercase tracking-wide text-white/45">
              {project.stack.join(" · ")}
            </span>
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="
                lift inline-flex items-center gap-2 rounded-[20px] bg-white px-5 py-2.5
                text-[16px] font-bold text-[#1c1c1c] hover:bg-[var(--yellow)]
              "
            >
              Voir le site
              <ExternalIcon />
              <span className="sr-only">{project.name} (nouvel onglet)</span>
            </a>
          </div>
        </div>
      </div>

      {project.mobileImage && (
        <div className="flex flex-col sm:flex-row items-center gap-7 md:gap-10 border-t border-white/10 px-7 py-8 md:px-9 md:py-10">
          <PhoneMockup
            src={project.mobileImage}
            alt={`Version mobile du site ${project.name}`}
            className="w-[150px] sm:w-[175px]"
          />
          <p className="flex-1 text-center sm:text-left text-[15px] md:text-[16px] leading-[25px] text-white/85">
            <span className="block font-black italic font-[Epilogue,Helvetica] text-white text-[20px] md:text-[22px] mb-2">
              Le rendu mobile
            </span>
            Conçu pour le téléphone d'abord, puis adapté aux grands écrans.
            C'est là qu'arrive plus de la moitié des visiteurs.
          </p>
        </div>
      )}
    </article>
  );
};

const Realisations = ({ onContactClick }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Mes réalisations – El Webo",
    description:
      "Sites vitrines, boutiques en ligne et plateformes développés sur mesure par El Webo.",
    url: "https://el-webo.netlify.app/realisations",
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.name,
      url: p.url,
      description: p.description,
    })),
  };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title="Mes réalisations – sites et applications sur mesure | El Webo"
        description="Découvrez les sites et applications développés par El Webo : plateforme de réservation, boutiques en ligne et site vitrine. Tous en ligne, tous sur mesure."
        path="/realisations"
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
            <span className="text-black">Réalisations</span>
          </nav>

          <div className="flex items-center gap-3 md:gap-4">
            <img
              src={bombe}
              alt=""
              aria-hidden="true"
              width="80"
              height="80"
              className="w-[44px] sm:w-[60px] md:w-[74px] -mt-4 md:-mt-6 flex-shrink-0"
              draggable={false}
            />
            <h1 className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1]">
              Mes réalisations
            </h1>
          </div>

          <p
            className="rise mt-5 max-w-[720px] text-[1.12rem] md:text-[1.3rem] leading-[1.55] text-black/80"
            style={{ animationDelay: "90ms" }}
          >
            {projects.length} projets réellement en ligne, développés sur
            mesure. Aucun modèle recyclé&#8239;: survolez un aperçu pour
            parcourir le site, ou ouvrez-le directement.
          </p>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto gutter py-12 md:py-20 flex flex-col gap-8 md:gap-12">
        {projects.map((project, i) => (
          <Reveal key={project.id}>
            <ProjectDetail project={project} index={i} />
          </Reveal>
        ))}

        {/* Vers les prestations */}
        <section className="bg-white rounded-[14px] shadow p-7 md:p-10 text-center">
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.6rem] md:text-[2rem] leading-tight">
            Un projet du même genre&#8239;?
          </h2>
          <p className="mt-3 mx-auto max-w-[600px] text-[16px] leading-[26px] text-black/75">
            Chaque projet part d'un échange gratuit et sans engagement. Dites-moi
            ce que vous avez en tête.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="lift group/other inline-flex items-center gap-3 bg-[#F7F5F2] rounded-[14px] px-5 py-3.5 font-bold text-black text-[15px] hover:bg-[var(--yellow)]"
              >
                <img
                  src={s.heroImage}
                  alt=""
                  aria-hidden="true"
                  width="40"
                  height="40"
                  loading="lazy"
                  className="w-[34px] h-[34px] object-contain"
                />
                {s.navLabel}
                <span
                  aria-hidden="true"
                  className="transition-transform duration-200 group-hover/other:translate-x-1"
                >
                  &rarr;
                </span>
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onContactClick?.()}
            className="lift mt-8 bg-[var(--yellow)] rounded-[20px] px-8 py-4 md:px-12 md:py-5 font-bold text-[#1c1c1c] text-lg hover:bg-[#e6be00] shadow hover:shadow-xl cursor-pointer"
          >
            Demander un devis gratuit
          </button>
        </section>
      </div>
    </div>
  );
};

export default Realisations;
