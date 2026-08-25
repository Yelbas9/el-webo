import React, { useState } from "react";
import image8 from "/react.webp";
import image10 from "/tailwind.webp";
import image15 from "/nodejs.webp";
import image16 from "/git.webp";
import mongodbIcon from "/img/mongodb.webp";
import rnIcon from "/img/react-native.webp";
import satoshiBoldExtrabold2 from "/inter.webp";
import Reveal from "./Reveal";
import SectionTitle from "./SectionTitle";

// Le titre porte le bénéfice, pas le nom de l'outil : un client qui ne
// programme pas doit comprendre ce que ça change pour lui. Le nom de la
// techno reste, en étiquette, pour qui sait la lire.
const skillsDataBase = [
  {
    id: 1,
    image: image8,
    tech: "React",
    title: "Un site qui répond au quart de tour",
    description:
      "Les pages s'affichent sans rechargement. Votre visiteur ne perd jamais patience — et Google en tient compte dans son classement.",
    imageClasses: "w-[40px] h-[36px] md:w-[57px] md:h-[53px]",
  },
  {
    id: 2,
    image: image10,
    tech: "Tailwind CSS",
    title: "Parfait sur téléphone comme sur ordinateur",
    description:
      "Chaque taille d'écran a droit à sa propre mise en page. Plus de la moitié de vos visiteurs arrivent depuis un mobile : ils ne doivent rien avoir à zoomer.",
    imageClasses: "w-[40px] h-[24px] md:w-[57px] md:h-[35px]",
  },
  {
    id: 3,
    image: image15,
    tech: "Node.js",
    title: "Des fonctions faites sur mesure",
    description:
      "Formulaire de devis, paiement en ligne, espace client, e-mails automatiques : ce dont vous avez besoin est codé pour vous, pas bricolé avec une extension.",
    imageClasses: "w-[40px] h-[24px] md:w-[57px] md:h-[35px]",
  },
  {
    id: 4,
    image: image16,
    tech: "Git",
    title: "Rien ne se perd, jamais",
    description:
      "Chaque modification de votre site est archivée. Si une nouveauté ne vous convient pas, on revient à la version précédente en quelques minutes.",
    imageClasses: "w-[40px] h-[40px] md:w-[57px] md:h-[57px]",
  },
];

const moreSkills = [
  {
    id: 5,
    image: mongodbIcon,
    tech: "MongoDB",
    title: "Vos contenus évoluent avec vous",
    description:
      "Produits, tarifs, articles : vos données sont organisées dès le départ pour qu'on puisse en ajouter sans tout reconstruire.",
    imageClasses: "w-[36px] h-[36px] md:w-[50px] md:h-[50px]",
  },
  {
    id: 6,
    image: rnIcon,
    tech: "React Native",
    title: "Une seule application, iPhone et Android",
    description:
      "Pas deux développements à financer : un même code alimente les deux boutiques d'applications.",
    imageClasses: "w-[36px] h-[36px] md:w-[50px] md:h-[50px]",
  },
];

const SkillCard = ({ skill, idx }) => (
  <article
    className={`
      lift group flex h-full flex-row items-start gap-4 sm:gap-6 md:gap-8 bg-white
      px-4 py-6 sm:px-6 sm:py-8 md:px-8 md:py-10
      min-w-0 max-w-full md:min-w-[270px] md:max-w-[600px]
      rounded-[14px] shadow hover:shadow-xl
      ${idx % 2 === 0 ? "md:justify-self-start" : "md:justify-self-end"}
      mx-auto md:mx-0 w-full
    `}
  >
    <img
      src={skill.image}
      alt=""
      aria-hidden="true"
      width="57"
      height="57"
      loading="lazy"
      decoding="async"
      className={
        skill.imageClasses +
        " object-contain flex-shrink-0 transition-transform duration-300 group-hover:scale-110 motion-reduce:transform-none"
      }
    />
    <div className="flex-1 flex flex-col gap-1 sm:gap-2">
      <h3
        className="
          font-bold font-[Epilogue,Helvetica] text-black
          text-[18px] sm:text-[21px] md:text-[25px] leading-[1.25]
        "
      >
        {skill.title}
      </h3>
      <p
        className="
          font-[Epilogue,Helvetica] text-black
          text-[15px] sm:text-[15.5px] md:text-[17px]
          leading-[23px] md:leading-[27px]
        "
      >
        {skill.description}
      </p>
      <span
        className="
          mt-1 w-fit rounded-full bg-black/[0.06]
          px-3 py-1 text-[12.5px] md:text-[13px]
          font-semibold tracking-wide text-black/55
        "
      >
        {skill.tech}
      </span>
    </div>
  </article>
);

const allSkills = [...skillsDataBase, ...moreSkills];

// Repliée, la liste montre 3 cartes sur mobile et 4 sur bureau (la grille
// passe à deux colonnes en md, une 4e carte y complète la seconde ligne).
const hiddenClass = (idx) => {
  if (idx < 3) return "";
  if (idx === 3) return "hidden md:block";
  return "hidden";
};

const SkillsOverviewSection = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="competences"
      className="relative w-full flex flex-col items-center gap-4 pt-8 sm:pt-12 md:pt-20 pb-8"
    >
      <SectionTitle
        icon={satoshiBoldExtrabold2}
        iconSide="right"
        iconClass="w-[30px] sm:w-[42px] md:w-[58px] -mt-4 md:-mt-8"
        className="mb-6 md:mb-8"
      >
        Mes Compétences
      </SectionTitle>

      <p className="-mt-2 mb-6 md:mb-8 max-w-[720px] text-center text-base md:text-[1.2rem] leading-[27px] text-black">
        Les outils que j'utilise — et ce que ça change concrètement pour vous.
      </p>

      <div
        id="liste-competences"
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-4 sm:gap-6 md:gap-8
          w-full mb-4 md:mb-8 max-w-[1280px]
        "
      >
        {allSkills.map((skill, idx) => (
          <Reveal
            key={skill.id}
            delay={idx < 4 ? (idx % 2) * 90 : 0}
            className={`h-full ${showMore ? "" : hiddenClass(idx)}`}
          >
            <SkillCard skill={skill} idx={idx} />
          </Reveal>
        ))}
      </div>

      <button
        type="button"
        onClick={() => setShowMore((prev) => !prev)}
        aria-expanded={showMore}
        aria-controls="liste-competences"
        className="
          lift bg-[#1c1c1c] rounded-[20px] inline-flex items-center justify-center gap-3
          px-8 py-4 sm:px-12 sm:py-5 md:px-16 md:py-6
          font-bold text-white
          text-lg sm:text-xl md:text-2xl
          hover:bg-[#333] shadow hover:shadow-xl cursor-pointer
        "
      >
        {showMore ? "Afficher moins" : "Je veux en savoir +"}
        <svg
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`transition-transform duration-300 ${
            showMore ? "rotate-180" : ""
          }`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </section>
  );
};

export default SkillsOverviewSection;
