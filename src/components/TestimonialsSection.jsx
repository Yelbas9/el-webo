import clientImage from "/homme.webp";
import clientImage2 from "/femme.webp";
import clientImage3 from "/homme.webp";
import smiley from "/smiley.webp";
import { useRef, useEffect } from "react";

// Icône SVG 5 étoiles jaunes
const Stars = () => (
  <div className="flex gap-1 mb-1">
    {[...Array(5)].map((_, i) => (
      <svg
        key={i}
        width="20"
        height="20"
        fill="#FFD700"
        viewBox="0 0 24 24"
        className="min-w-[20px] min-h-[20px] md:w-[24px] md:h-[24px]"
      >
        <path d="M12 17.25L6.18 20.25l1.13-6.62L2 8.99l6.64-.97L12 2.5l3.36 5.52L22 8.99l-5.31 4.64 1.13 6.62z" />
      </svg>
    ))}
  </div>
);

const testimonialsData = [
  {
    id: 1,
    text: "Un grand merci pour ce site internet. Tout est clair, pro, moderne. C'est un réel gain de temps, mes clients trouvent facilement mes réalisations et peuvent me contacter sans prise de tête. Service rapide et efficace, je recommande les yeux fermés !",
    clientImage: clientImage,
    name: "Talha Aslan",
    company: "TH Menuiserie",
  },
  {
    id: 2,
    text: "Je voulais une app vraiment unique pour ma boutique, Ibrahim a tout compris ! Design dynamique, interface intuitive etc.. Mes visiteurs sont bluffés, et moi aussi. Super suivi tout au long du projet, merci !",
    clientImage: clientImage2,
    name: "Rehaima Sourour",
    company: "Mydupes",
  },
  {
    id: 3,
    text: "Collaboration au top ! Mon site d’événementiel sort du lot et fonctionne à merveille. Un échange très amicale et instructif, force de proposition et toujours ultra réactif. Foncez !",
    clientImage: clientImage3,
    name: "Mathieu Vidal",
    company: "Vid’Events",
  },
];

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const centerSecondCard = () => {
      if (window.innerWidth < 1024 && scrollRef.current) {
        const container = scrollRef.current;
        const card = container.children[1]; // 2ème témoignage
        if (card) {
          const cardRect = card.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          const scrollTo =
            card.offsetLeft -
            container.offsetLeft -
            (containerRect.width / 2 - cardRect.width / 2);
          container.scrollTo({ left: scrollTo, behavior: "auto" });
        }
      }
    };
    setTimeout(centerSecondCard, 40);
    window.addEventListener("resize", centerSecondCard);
    return () => window.removeEventListener("resize", centerSecondCard);
  }, []);

  return (
    <section className="relative w-full mt-10 sm:mt-12 lg:mt-15 bg-[var(--white)] mb-10 sm:mb-14 lg:mb-20 px-2 sm:px-4 md:px-8 lg:px-0">
      {/* Titre avec smiley à droite */}
      <div className="w-full flex items-center justify-center mb-6 sm:mb-10 lg:mb-12 relative ml-0 sm:ml-5">
        <h2
          className="font-black italic font-[Epilogue,Helvetica] text-black
          text-[1.7rem] sm:text-[2.3rem] lg:text-[40px] leading-[1.1] text-center"
        >
          Ce que disent mes clients
        </h2>
        <img
          src={smiley}
          alt=""
          className="w-[26px] sm:w-[36px] lg:w-[56px] ml-2 sm:ml-4 lg:ml-6 -mt-1 lg:-mt-2"
          aria-hidden="true"
          draggable={false}
          style={{ userSelect: "none" }}
        />
      </div>

      {/* Testimonials carrousel / grid */}
      <div
        ref={scrollRef}
        className="
          flex lg:grid lg:grid-cols-3
          gap-4 sm:gap-6 lg:gap-8
          w-full
          lg:max-w-[1280px] mx-auto

          overflow-x-auto lg:overflow-x-visible scroll-smooth snap-x lg:snap-none
          no-scrollbar
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {testimonialsData.map((testimonial) => (
          <article
            key={testimonial.id}
            className="
              flex flex-col justify-between bg-white
              p-5 sm:p-7 md:p-6 lg:p-8
              gap-6 sm:gap-7 lg:gap-8 shadow text-black
              min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]
              flex-shrink-0 lg:flex-shrink
              lg:h-full
              mx-auto lg:mx-0
              max-w-[350px] sm:max-w-full
              snap-center lg:snap-none
            "
          >
            {/* Témoignage */}
            <blockquote className="text-base sm:text-lg lg:text-lg leading-relaxed mb-1 opacity-95 font-[Epilogue,Helvetica]">
              “{testimonial.text}”
            </blockquote>
            {/* Identité */}
            <div className="flex flex-row items-center gap-3 sm:gap-4 mt-auto">
              <img
                src={testimonial.clientImage}
                alt={testimonial.name}
                className="w-[38px] h-[38px] sm:w-[48px] sm:h-[48px] md:w-[50px] md:h-[50px] rounded-full object-cover border-2 border-white"
              />
              <div className="flex flex-col">
                <Stars />
                <cite className="not-italic font-bold block text-[13px] md:text-lg">
                  {testimonial.name}
                </cite>
                <div className="text-xs sm:text-sm md:text-sm text-black">
                  {testimonial.company}
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Astuce mobile : un peu de margin bottom si besoin pour scroll */}
      <div className="block lg:hidden h-6" />

      {/* Masquer la scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
