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

const skillsDataBase = [
  {
    id: 1,
    image: image8,
    imageAlt: "React Icon",
    title: "React",
    description:
      "Mon outil de prédilection pour créer des interfaces web interactives, ultra-fluides, et personnalisées sur-mesure.",
    imageClasses: "w-[40px] h-[36px] md:w-[57px] md:h-[53px]",
  },
  {
    id: 2,
    image: image10,
    imageAlt: "Tailwind CSS Icon",
    title: "Tailwind CSS",
    description:
      "Un workflow de développement rapide : je réalise des sites élégants, adaptatifs et cohérents en un temps record.",
    imageClasses: "w-[40px] h-[24px] md:w-[57px] md:h-[35px]",
  },
  {
    id: 3,
    image: image15,
    imageAlt: "Node JS Icon",
    title: "Node JS",
    description:
      "Back-end moderne : création d’API, automatisations, serveurs rapides et fiables pour tes projets.",
    imageClasses: "w-[40px] h-[24px] md:w-[57px] md:h-[35px]",
  },
  {
    id: 4,
    image: image16,
    imageAlt: "Git Icon",
    title: "Git",
    description:
      "Gestion de versions, collaboration et déploiement continu : Git & GitHub pour un dev sans stress.",
    imageClasses: "w-[40px] h-[40px] md:w-[57px] md:h-[57px]",
  },
];

const moreSkills = [
  {
    id: 5,
    image: mongodbIcon,
    imageAlt: "MongoDB Icon",
    title: "MongoDB",
    description:
      "Base de données NoSQL : souple, rapide et idéale pour tous les projets web modernes.",
    imageClasses: "w-[36px] h-[36px] md:w-[50px] md:h-[50px]",
  },
  {
    id: 6,
    image: rnIcon,
    imageAlt: "React Native Icon",
    title: "React Native",
    description:
      "Apps mobiles performantes iOS/Android en un seul codebase grâce à React Native.",
    imageClasses: "w-[36px] h-[36px] md:w-[50px] md:h-[50px]",
  },
];

const SkillCard = ({ skill, idx }) => (
  <article
    className={`
      lift group flex flex-row items-start gap-4 sm:gap-6 md:gap-8 bg-white
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
          text-[18px] sm:text-[22px] md:text-[27px] leading-[1.25]
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
    </div>
  </article>
);

const SkillsOverviewSection = () => {
  const [showMore, setShowMore] = useState(false);
  const visibleSkills = showMore
    ? [...skillsDataBase, ...moreSkills]
    : skillsDataBase;

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

      <div
        id="liste-competences"
        className="
          grid grid-cols-1 md:grid-cols-2
          gap-4 sm:gap-6 md:gap-8
          w-full mb-4 md:mb-8 max-w-[1280px]
        "
      >
        {visibleSkills.map((skill, idx) => (
          <Reveal
            key={skill.id}
            delay={idx < skillsDataBase.length ? (idx % 2) * 90 : 0}
            className="h-full"
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
