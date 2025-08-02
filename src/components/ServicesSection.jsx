import image2 from "/hero.webp"; // Remplace par tes vraies images
import image3 from "/hero.webp";
import image4 from "/hero.webp";
import image5 from "/hero.webp";
import image6 from "/hero.webp";
import image7 from "/hero.webp";
import clientImage from "/hero.webp";
import clientImage2 from "/hero.webp";
import clientImage3 from "/hero.webp";
import stars from "/hero.webp";
import stars2 from "/hero.webp";
import stars3 from "/hero.webp";

// IMPORTS DES DECORS
import bombe from "/bombe.webp";
import smiley from "/smiley.webp";

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

const testimonialsData = [
  {
    id: 1,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    clientImage: clientImage,
    stars: stars,
    name: "Gemma Nolen",
    company: "Google",
    companyTextColor: "text-white",
  },
  {
    id: 2,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    clientImage: clientImage2,
    stars: stars2,
    name: "Gemma Nolen",
    company: "Google",
    companyTextColor: "text-black",
  },
  {
    id: 3,
    text: "This is a template Figma file, turned into code using Anima. Learn more at AnimaApp.com",
    clientImage: clientImage3,
    stars: stars3,
    name: "Gemma Nolen",
    company: "Google",
    companyTextColor: "text-black",
  },
];

const ServicesSection = () => {
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

      {/* --- Témoignages clients AVEC DECO DROITE --- */}
      <div className="relative w-full mt-15 bg-[var(--white)]">
        {/* Titre avec smiley à droite */}
        <div className="w-full flex items-center justify-center mb-12 relative ml-5">
          <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2.3rem] md:text-[40px] leading-[1.1] text-center">
            Ce que disent mes clients
          </h2>
          <img
            src={smiley}
            alt=""
            className="w-[36px] md:w-[56px] ml-4 md:ml-6 -mt-2"
            aria-hidden="true"
            draggable={false}
            style={{ userSelect: "none" }}
          />
        </div>
        {/* Testimonials grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-4 md:px-0">
          {testimonialsData.map((testimonial) => (
            <article
              key={testimonial.id}
              className="flex flex-col bg-[#1c1c1c] p-8 gap-8 shadow text-white w-full"
            >
              <blockquote className="text-lg leading-relaxed mb-2 opacity-95 font-[Epilogue,Helvetica]">
                “{testimonial.text}”
              </blockquote>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.clientImage}
                  alt={testimonial.name}
                  className="w-[50px] h-[50px] rounded-full object-cover border-2 border-white"
                />
                <div>
                  <img
                    src={testimonial.stars}
                    alt="5 stars"
                    className="h-6 mb-1"
                  />
                  <cite className="not-italic font-bold block">
                    {testimonial.name}
                  </cite>
                  <div className={`text-sm ${testimonial.companyTextColor}`}>
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
