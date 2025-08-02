import image2 from "/hero.webp";
import image3 from "/hero.webp";
import image4 from "/hero.webp";
import image5 from "/hero.webp";
import image6 from "/hero.webp";
import image7 from "/hero.webp";
import bombe from "/bombe.webp";

const projectsData = [
  {
    id: 1,
    image: image2,
    title: "Project title",
    description: "UI, Art direction",
  },
  {
    id: 2,
    image: image3,
    title: "Project title",
    description: "UI, Art direction",
  },
  {
    id: 3,
    image: image4,
    title: "Project title",
    description: "UI, Art direction",
  },
  {
    id: 4,
    image: image5,
    title: "Project title",
    description: "UI, Art direction",
  },
  {
    id: 5,
    image: image6,
    title: "Project title",
    description: "UI, Art direction",
  },
  {
    id: 6,
    image: image7,
    title: "Project title",
    description: "UI, Art direction",
  },
];

const MesDerniersProjetsSection = () => {
  return (
    <section
      id="mes-projets"
      className="w-full flex flex-col items-center pt-30 pb-20"
    >
      {/* --- Titre "Mes Derniers Projets" AVEC DECO GAUCHE --- */}
      <div className="w-full flex items-center justify-center mb-12 -ml-25">
        <img
          src={bombe}
          alt=""
          className="w-[60px] md:w-[80px] mr-4 -mt-8"
          aria-hidden="true"
          draggable={false}
          style={{ userSelect: "none" }}
        />
        <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2.3rem] md:text-[40px] leading-[1.1]">
          Mes Derniers Projets
        </h2>
      </div>

      {/* Projets */}
      <div className="w-full flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-8 gap-y-12 w-full max-w-[1380px] px-4 md:px-0">
          {projectsData.map((project) => (
            <article
              key={project.id}
              className="flex flex-col w-full overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-[290px] md:h-[220px] xl:h-[240px] object-cover"
              />
              <div className="flex flex-col gap-1 p-6">
                <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-xl mb-1">
                  {project.title}
                </h3>
                <p className="font-[Epilogue,Helvetica] text-black text-base opacity-80">
                  {project.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* CTA bouton */}
      <div className="flex justify-center my-14 w-full">
        <a
          href="#contact"
          className="bg-[var(--yellow)] rounded-[20px] px-16 py-6 font-bold text-[#1c1c1c] text-2xl hover:bg-[#e6be00] transition-colors duration-200 shadow"
        >
          Je demande un devis
        </a>
      </div>
    </section>
  );
};

export default MesDerniersProjetsSection;
