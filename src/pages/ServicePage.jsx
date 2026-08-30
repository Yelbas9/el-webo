import { Link, Navigate } from "react-router-dom";
import { getService } from "../data/services";
import { offers } from "../data/offers";
import { projects } from "../data/projects";
import Seo from "../components/Seo";
import { SITE_URL } from "../config";
import Reveal from "../components/Reveal";
import ProjectFrame from "../components/ProjectFrame";
import ServiceIcon from "../components/ServiceIcon";
import PhoneMockup from "../components/PhoneMockup";

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

const ServicePage = ({ slug, onContactClick }) => {
  const service = getService(slug);

  if (!service) return <Navigate to="/" replace />;

  const offer = offers.find((o) => o.id === service.offerId);
  const caseStudy = projects.find((p) => p.id === service.caseStudyId);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    serviceType: service.projectType,
    provider: { "@id": `${SITE_URL}/#business` },
    areaServed: { "@type": "Country", name: "France" },
  };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title={service.metaTitle}
        description={service.metaDescription}
        path={`/${service.slug}`}
        breadcrumb={service.navLabel}
        jsonLd={jsonLd}
      />

      {/* En-tête : texte à gauche, picto à droite (même rythme que l'accueil) */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto gutter py-10 md:py-16 flex flex-col md:flex-row items-center gap-0 md:gap-12">
          <div className="flex-1 min-w-0">
            <nav aria-label="Fil d'ariane" className="mb-5 text-[14px]">
              <Link
                to="/"
                className="text-black/60 hover:text-black transition-colors"
              >
                Accueil
              </Link>
              <span className="mx-2 text-black/30">/</span>
              <span className="text-black">{service.navLabel}</span>
            </nav>

            {/* Mobile : le picto accompagne le titre. Seul, sous le bouton,
                il occupait une bande entière pour rien. */}
            <div className="flex items-start justify-between gap-4">
              <h1 className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1]">
                {service.title}
              </h1>
              <img
                src={service.heroImage}
                alt=""
                aria-hidden="true"
                width="222"
                height="221"
                fetchPriority="high"
                decoding="async"
                className="rise md:hidden w-[72px] sm:w-[92px] h-auto flex-shrink-0 object-contain"
                draggable={false}
              />
            </div>
            <p
              className="rise mt-5 max-w-[620px] text-[1.12rem] md:text-[1.3rem] leading-[1.55] text-black/80"
              style={{ animationDelay: "90ms" }}
            >
              {service.hook}
            </p>
            <button
              type="button"
              onClick={() => onContactClick?.(service.projectType)}
              className="rise lift mt-8 inline-flex items-center justify-center bg-[var(--yellow)] rounded-[20px] px-8 py-4 md:px-12 md:py-5 font-bold text-[#1c1c1c] text-lg md:text-xl hover:bg-[#e6be00] shadow hover:shadow-xl cursor-pointer"
              style={{ animationDelay: "170ms" }}
            >
              Demander un devis gratuit
            </button>
          </div>

          <img
            src={service.heroImage}
            alt=""
            aria-hidden="true"
            width="222"
            height="221"
            fetchPriority="high"
            decoding="async"
            className="hidden md:block md:w-[240px] lg:w-[290px] h-auto object-contain flex-shrink-0"
            draggable={false}
          />
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto gutter py-12 md:py-20 flex flex-col gap-14 md:gap-20">
        {/* Intro + à qui ça s'adresse */}
        <section className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-8 md:gap-12">
          <p className="text-[1.05rem] md:text-[1.15rem] leading-[1.7] text-black">
            {service.intro}
          </p>
          <div className="bg-white rounded-[14px] shadow p-6 md:p-8">
            <h2 className="font-bold font-[Epilogue,Helvetica] text-black text-[20px] mb-4">
              Pour qui ?
            </h2>
            <ul className="flex flex-col gap-2.5">
              {service.forWho.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-2.5 text-[15px] leading-[23px] text-black"
                >
                  <Check />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ce qui est compris */}
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-12 text-center">
            Ce qui est compris
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-8">
            {service.included.map((item, i) => (
              <Reveal key={item.title} delay={(i % 3) * 90} className="h-full">
                <article className="lift group flex h-full flex-col gap-3 bg-white p-6 md:p-7 rounded-[14px] shadow hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--yellow)] text-[#1c1c1c] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                    <ServiceIcon name={item.icon} />
                  </span>
                  <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[18px] md:text-[20px] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[15px] leading-[23px] text-black/80">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Exemple concret : même aperçu que sur l'accueil */}
        {caseStudy && (
          <section className="group bg-[#1c1c1c] rounded-[14px] overflow-hidden on-dark shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-[1.15fr_1fr]">
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block focus:outline-none"
                tabIndex={-1}
                aria-hidden="true"
              >
                <ProjectFrame
                  project={caseStudy}
                  height="h-[260px] sm:h-[340px] lg:h-[420px]"
                />
              </a>

              <div className="flex flex-col gap-4 p-7 md:p-9">
                <span className="w-fit bg-[var(--yellow)] px-3 py-1 text-[12.5px] font-bold uppercase tracking-wide text-[#1c1c1c]">
                  Exemple concret
                </span>
                <h2 className="font-black italic font-[Epilogue,Helvetica] text-white text-[24px] md:text-[30px] leading-tight">
                  {caseStudy.name}
                </h2>
                <p className="text-[15px] md:text-[16px] leading-[25px] text-white/85">
                  {caseStudy.description}
                </p>

                <ul className="flex flex-wrap gap-2">
                  {caseStudy.highlights.map((h) => (
                    <li
                      key={h}
                      className="rounded-full border border-white/20 px-3 py-1.5 text-[13px] text-white/75"
                    >
                      {h}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-3">
                  <a
                    href={caseStudy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="lift inline-flex items-center gap-2 rounded-[20px] bg-white px-5 py-2.5 text-[16px] font-bold text-[#1c1c1c] hover:bg-[var(--yellow)]"
                  >
                    Voir le site
                  </a>
                  <Link
                    to="/#mes-projets"
                    className="lift inline-flex items-center gap-2 rounded-[20px] border border-white/30 px-5 py-2.5 text-[16px] font-bold text-white hover:bg-white/10"
                  >
                    Toutes mes réalisations
                  </Link>
                </div>
              </div>
            </div>

            {/* Rendu mobile du même site */}
            {caseStudy.mobileImage && (
              <div className="flex flex-col sm:flex-row items-center gap-7 md:gap-10 border-t border-white/10 px-7 py-8 md:px-9 md:py-10">
                <PhoneMockup
                  src={caseStudy.mobileImage}
                  alt={`Version mobile du site ${caseStudy.name}`}
                />
                <div className="flex-1 text-center sm:text-left">
                  <h3 className="font-black italic font-[Epilogue,Helvetica] text-white text-[20px] md:text-[24px] leading-tight">
                    Et sur téléphone ?
                  </h3>
                  <p className="mt-3 text-[15px] md:text-[16px] leading-[25px] text-white/85">
                    Plus de la moitié des visiteurs arrivent depuis un mobile.
                    Chaque site est conçu pour cet écran en premier, puis
                    adapté aux grands formats — jamais l'inverse.
                  </p>
                </div>
              </div>
            )}
          </section>
        )}

        {/* Formule associée */}
        {offer && (
          <section className="bg-white rounded-[14px] shadow p-7 md:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
            <div className="flex-1">
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[24px] md:text-[30px] leading-tight">
                  Formule {offer.name}
                </h2>
                {offer.delivery && (
                  <span className="rounded-full bg-[#009379]/10 px-2.5 py-1 text-[12px] md:text-[12.5px] font-bold uppercase tracking-wide text-[#00775f]">
                    {offer.delivery}
                  </span>
                )}
              </div>
              <p className="mt-2 text-[16px] leading-[25px] text-black/75">
                {offer.tagline}
              </p>
              <ul className="mt-5 grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {offer.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5 text-[15px] leading-[23px] text-black"
                  >
                    <Check />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col items-stretch lg:items-center gap-4 lg:min-w-[240px]">
              <button
                type="button"
                onClick={() => onContactClick?.(service.projectType)}
                className="lift w-full bg-[var(--yellow)] rounded-[20px] px-8 py-4 font-bold text-[#1c1c1c] text-lg hover:bg-[#e6be00] shadow hover:shadow-xl cursor-pointer"
              >
                Demander un devis
              </button>
              <Link
                to="/#faq"
                className="text-center text-[15px] text-black/60 underline underline-offset-4 hover:text-black transition-colors"
              >
                Voir les questions fréquentes
              </Link>
            </div>
          </section>
        )}

        {/* Autres prestations */}
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.5rem] md:text-[1.9rem] leading-[1.1] mb-6 text-center">
            Ce n'est pas tout à fait ça ?
          </h2>
          <div className="flex flex-wrap justify-center gap-4">
            {["creation-site-vitrine", "creation-site-ecommerce", "creation-application"]
              .filter((s) => s !== service.slug)
              .map((s) => {
                const other = getService(s);
                return (
                  <Link
                    key={s}
                    to={`/${s}`}
                    className="lift group/other flex items-center gap-4 bg-white rounded-[14px] shadow hover:shadow-xl px-5 py-4"
                  >
                    <img
                      src={other.heroImage}
                      alt=""
                      aria-hidden="true"
                      width="60"
                      height="60"
                      loading="lazy"
                      className="w-[52px] h-[52px] object-contain"
                    />
                    <span className="font-bold font-[Epilogue,Helvetica] text-black text-[17px]">
                      {other.navLabel}
                    </span>
                    <span
                      aria-hidden="true"
                      className="text-black transition-transform duration-200 group-hover/other:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                );
              })}
          </div>
        </section>
      </div>
    </div>
  );
};

export default ServicePage;
