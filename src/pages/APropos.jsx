import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { projects } from "../data/projects";

// Parcours rédigé à partir des réponses d'Ibrahim.
// Relis-le : c'est ton histoire, tu dois t'y reconnaître.
const parcours = [
  "Avant El Webo, je travaillais en bureau d'études dans la fibre optique. Un métier de plans, de contraintes et de précision — on ne livre pas un réseau « à peu près ». C'est cette rigueur que j'ai gardée.",
  "L'informatique et le développement m'ont toujours attiré. J'ai commencé par apprendre seul, le soir et le week-end, jusqu'à ce que l'évidence s'impose : c'était ça que je voulais faire à plein temps. J'ai donc engagé une reconversion, financée par Transitions Pro Nouvelle-Aquitaine, et suivi la formation du Reacteur — un titre RNCP niveau 6 en développement de sites web et d'applications.",
  "Depuis janvier 2025, j'ai monté El Webo et je conçois des sites et des applications pour mes clients. J'ai choisi l'indépendance plutôt qu'un poste en entreprise parce que j'ai toujours voulu construire mes propres projets — et mettre ce que j'apprends au service des autres.",
];
const valeurs = [
  {
    title: "Du sur-mesure, pas du recyclé",
    text: "Trop de prestataires piochent un modèle dans leur bibliothèque, changent le logo et les textes, et facturent un « nouveau site ». Je ne travaille pas comme ça : chaque projet est conçu et codé pour l'activité qu'il représente. C'est plus long, et ça se voit.",
  },
  {
    title: "Impliqué, et réactif",
    text: "Un site n'est pas une ligne de facture de plus. Je m'intéresse à votre métier, je pose des questions, et je réponds vite — pendant le projet comme après.",
  },
  {
    title: "Un interlocuteur unique",
    text: "Vous parlez directement à la personne qui conçoit et code votre site. Pas de commercial, pas de chef de projet intermédiaire, pas de téléphone arabe.",
  },
  {
    title: "Le prix annoncé est le prix payé",
    text: "Le devis est détaillé ligne par ligne et je m'y tiens. Si le périmètre change en cours de route, on en parle avant, jamais après.",
  },
  {
    title: "Votre site vous appartient",
    text: "Nom de domaine, hébergement, code : tout est à votre nom. Vous n'êtes jamais prisonnier d'un prestataire, moi compris.",
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

      <section className="w-full bg-white">
        <div className="max-w-[1280px] mx-auto gutter py-12 md:py-20 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <nav aria-label="Fil d'ariane" className="mb-6 text-[14px]">
              <Link
                to="/"
                className="text-black/60 hover:text-black transition-colors"
              >
                Accueil
              </Link>
              <span className="mx-2 text-black/30">/</span>
              <span className="text-black">À propos</span>
            </nav>
            <h1 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2.1rem] sm:text-[2.6rem] md:text-[3.2rem] leading-[1.1]">
              Derrière El&nbsp;Webo
            </h1>
            <p className="mt-5 max-w-[620px] text-[1.15rem] md:text-[1.3rem] leading-[1.55] text-black/80">
              Ibrahim Yelbas, développeur web indépendant basé en Gironde.
              Je conçois des sites et des applications sur mesure — et je
              réponds moi-même au téléphone.
            </p>
          </div>
          <img
            src="/hero.webp"
            alt="Ibrahim, développeur web chez El Webo"
            width="420"
            height="542"
            loading="lazy"
            decoding="async"
            className="w-[220px] md:w-[300px] h-auto object-contain"
            draggable={false}
          />
        </div>
      </section>

      <div className="max-w-[900px] mx-auto gutter py-12 md:py-20 flex flex-col gap-14 md:gap-20">
        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-5">
            Mon parcours
          </h2>
          <div className="flex flex-col gap-4">
            {parcours.map((paragraphe) => (
              <p
                key={paragraphe.slice(0, 24)}
                className="text-[1.05rem] md:text-[1.12rem] leading-[1.75] text-black/85"
              >
                {paragraphe}
              </p>
            ))}
          </div>
        </section>

        <section>
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.75rem] md:text-[2.2rem] leading-[1.1] mb-8">
            Ma façon de travailler
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-7">
            {valeurs.map((v) => (
              <article
                key={v.title}
                className="lift flex flex-col gap-2 bg-white p-6 md:p-7 rounded-[14px] shadow hover:shadow-xl"
              >
                <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[18px] md:text-[20px] leading-tight">
                  {v.title}
                </h3>
                <p className="text-[15px] leading-[24px] text-black/80">
                  {v.text}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-[#1c1c1c] on-dark rounded-[14px] p-7 md:p-10 text-center">
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-white text-[1.6rem] md:text-[2rem] leading-tight">
            {projects.length} projets en ligne, et le vôtre ?
          </h2>
          <p className="mt-3 mx-auto max-w-[560px] text-[16px] leading-[26px] text-white/85">
            Un premier échange gratuit, sans engagement, pour voir si on est
            faits pour travailler ensemble.
          </p>
          <div className="mt-7 flex flex-wrap justify-center gap-4">
            <button
              type="button"
              onClick={() => onContactClick?.()}
              className="lift bg-[var(--yellow)] rounded-[20px] px-8 py-4 font-bold text-[#1c1c1c] text-lg hover:bg-[#e6be00] cursor-pointer"
            >
              Me contacter
            </button>
            <Link
              to="/#mes-projets"
              className="lift rounded-[20px] border border-white/30 px-8 py-4 font-bold text-white text-lg hover:bg-white/10"
            >
              Voir mes réalisations
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
};

export default APropos;
