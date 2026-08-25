import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { services } from "../data/services";
import Reveal from "../components/Reveal";
import ServiceIcon from "../components/ServiceIcon";
import SkillsOverviewSection from "../components/SkillsOverviewSection";

// Parcours en étapes courtes plutôt qu'en gros pavés de texte.
const etapes = [
  {
    annee: "Avant",
    icon: "target",
    title: "Bureau d'études, fibre optique",
    text: "Un métier de plans et de précision — on ne livre pas un réseau « à peu près ». C'est cette rigueur que j'ai gardée.",
  },
  {
    annee: "Le déclic",
    icon: "monitor",
    title: "Autodidacte, le soir et le week-end",
    text: "L'informatique m'a toujours attiré. J'ai appris seul, jusqu'à ce que l'évidence s'impose : c'était ça, à plein temps.",
  },
  {
    annee: "2024",
    icon: "book",
    title: "Reconversion, titre RNCP niveau 6",
    text: "Formation au Reacteur en développement web et applications, financée par Transitions Pro Nouvelle-Aquitaine.",
  },
  {
    annee: "2025",
    icon: "launch",
    title: "El Webo",
    text: "J'ai choisi l'indépendance plutôt qu'un poste : construire mes propres projets, et mettre ce que j'apprends au service des autres.",
  },
];

const valeurs = [
  {
    icon: "zap",
    title: "Du sur-mesure, pas du recyclé",
    text: "Trop de prestataires piochent un modèle, changent le logo et facturent un « nouveau site ». Chaque projet est conçu et codé pour l'activité qu'il représente.",
  },
  {
    icon: "users",
    title: "Impliqué, et réactif",
    text: "Un site n'est pas une ligne de facture de plus. Je m'intéresse à votre métier, je pose des questions, et je réponds vite.",
  },
  {
    icon: "user",
    title: "Un interlocuteur unique",
    text: "Vous parlez directement à la personne qui conçoit et code votre site. Pas de commercial, pas de téléphone arabe.",
  },
  {
    icon: "lock",
    title: "Le prix annoncé est le prix payé",
    text: "Le devis est détaillé ligne par ligne et je m'y tiens. Si le périmètre change, on en parle avant, jamais après.",
  },
];

const APropos = ({ onContactClick }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: "À propos d'El Webo",
    url: "https://el-webo.netlify.app/a-propos",
    mainEntity: { "@id": "https://el-webo.netlify.app/#business" },
  };

  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title="À propos – El Webo, développeur web indépendant"
        description="Ibrahim Yelbas, développeur web indépendant en Gironde. Ancien technicien en bureau d'études reconverti au développement, je crée des sites et applications sur mesure en React."
        path="/a-propos"
        jsonLd={jsonLd}
      />

      {/* En-tête, même rythme que le héros de l'accueil */}
      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto gutter pt-8 pb-8 md:pt-0 md:pb-0 md:min-h-[440px] flex flex-col md:flex-row items-center justify-between gap-4 md:gap-10">
          <div className="w-full md:max-w-[54%] md:pt-10">
            <nav aria-label="Fil d'ariane" className="mb-5 text-[14px]">
              <Link
                to="/"
                className="text-black/60 hover:text-black transition-colors"
              >
                Accueil
              </Link>
              <span className="mx-2 text-black/30">/</span>
              <span className="text-black">À propos</span>
            </nav>

            <h1 className="rise font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[3.1rem] leading-[1.1]">
              Derrière El&nbsp;Webo
            </h1>
            <p
              className="rise mt-5 text-[1.05rem] sm:text-[1.15rem] md:text-[1.3rem] leading-[1.55] text-black/80"
              style={{ animationDelay: "90ms" }}
            >
              Ibrahim Yelbas, développeur web indépendant basé en Gironde. Je
              conçois des sites et des applications sur mesure — et je réponds
              moi-même au téléphone.
            </p>

            {/* Mobile : le portrait accompagne le bouton, comme sur l'accueil */}
            <div
              className="rise flex md:hidden flex-row items-end justify-between gap-4 w-full mt-6"
              style={{ animationDelay: "150ms" }}
            >
              <button
                type="button"
                onClick={() => onContactClick?.()}
                className="lift flex-shrink-0 inline-flex items-center justify-center bg-[var(--yellow)] rounded-[20px] px-6 py-3.5 font-bold text-[#1c1c1c] text-[17px] hover:bg-[#e6be00] cursor-pointer"
                style={{ minHeight: "52px" }}
              >
                Me contacter
              </button>
              <img
                src="/hero.webp"
                alt="Ibrahim Yelbas, développeur web"
                width="420"
                height="542"
                fetchPriority="high"
                decoding="async"
                className="w-[40%] max-w-[190px] h-auto object-contain"
                draggable={false}
              />
            </div>

            <button
              type="button"
              onClick={() => onContactClick?.()}
              className="rise lift hidden md:inline-flex mt-8 items-center justify-center bg-[var(--yellow)] rounded-[20px] px-10 py-5 font-bold text-[#1c1c1c] text-[20px] hover:bg-[#e6be00] shadow-sm hover:shadow-lg cursor-pointer"
              style={{ animationDelay: "150ms" }}
            >
              Me contacter
            </button>
          </div>

          <div className="hidden md:flex items-end justify-center flex-1 min-w-0 h-full">
            <img
              src="/hero.webp"
              alt="Ibrahim Yelbas, développeur web"
              width="420"
              height="542"
              fetchPriority="high"
              decoding="async"
              className="w-full max-w-[280px] lg:max-w-[340px] h-auto object-contain md:-mb-8"
              draggable={false}
            />
          </div>
        </div>
      </section>

      <div className="max-w-[1280px] mx-auto gutter py-12 md:py-20 flex flex-col gap-14 md:gap-20">
        {/* Parcours en étapes */}
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-12 text-center">
            Mon parcours
          </h2>

          <ol className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-7">
            {etapes.map((e, i) => (
              <li key={e.title} className="h-full">
                <Reveal delay={(i % 4) * 90} className="h-full">
                  <article className="lift group flex h-full flex-col gap-3 bg-white p-6 md:p-7 rounded-[14px] shadow hover:shadow-xl">
                    <div className="flex items-center gap-3">
                      <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[var(--yellow)] text-[#1c1c1c] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                        <ServiceIcon name={e.icon} />
                      </span>
                      <span className="font-black italic font-[Epilogue,Helvetica] text-[var(--yellow)] text-[20px] leading-none">
                        {e.annee}
                      </span>
                    </div>
                    <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[17px] md:text-[18px] leading-tight">
                      {e.title}
                    </h3>
                    <p className="text-[15px] leading-[23px] text-black/80">
                      {e.text}
                    </p>
                  </article>
                </Reveal>
              </li>
            ))}
          </ol>
        </section>

        {/* Compétences — rapatriées de l'accueil : c'est ici qu'un visiteur
          qui veut savoir avec quoi je travaille vient les chercher. */}
      <SkillsOverviewSection compact />

      {/* Façon de travailler */}
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8 md:mb-12 text-center">
            Ma façon de travailler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
            {valeurs.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 90} className="h-full">
                <article className="lift group flex h-full flex-col gap-3 bg-white p-6 md:p-7 rounded-[14px] shadow hover:shadow-xl">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[var(--yellow)] text-[#1c1c1c] transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none">
                    <ServiceIcon name={v.icon} />
                  </span>
                  <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[18px] md:text-[20px] leading-tight">
                    {v.title}
                  </h3>
                  <p className="text-[15px] leading-[24px] text-black/80">
                    {v.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1c1c1c] on-dark rounded-[14px] p-7 md:p-10 text-center">
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-white text-[1.6rem] md:text-[2rem] leading-tight">
            Des sites en ligne, des clients qui recommandent — et le
            vôtre&#8239;?
          </h2>
          <p className="mt-3 mx-auto max-w-[560px] text-[16px] leading-[26px] text-white/85">
            Un premier échange gratuit, sans engagement, pour voir si on est
            faits pour travailler ensemble.
          </p>

          <div className="mt-7 flex flex-wrap justify-center gap-3">
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/${s.slug}`}
                className="lift group/other inline-flex items-center gap-2.5 bg-white rounded-[14px] px-4 py-3 font-bold text-[#1c1c1c] text-[15px] hover:bg-[var(--yellow)]"
              >
                <img
                  src={s.heroImage}
                  alt=""
                  aria-hidden="true"
                  width="32"
                  height="32"
                  loading="lazy"
                  className="w-[28px] h-[28px] object-contain"
                />
                {s.navLabel}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => onContactClick?.()}
            className="lift mt-8 bg-[var(--yellow)] rounded-[20px] px-8 py-4 font-bold text-[#1c1c1c] text-lg hover:bg-[#e6be00] cursor-pointer"
          >
            Me contacter
          </button>
        </section>
      </div>
    </div>
  );
};

export default APropos;
