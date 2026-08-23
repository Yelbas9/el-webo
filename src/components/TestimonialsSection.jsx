import { useEffect, useRef } from "react";
import smiley from "/smiley.webp";
import Reveal from "./Reveal";
import { GOOGLE_REVIEWS_URL } from "../config";
import SectionTitle from "./SectionTitle";

// Icône SVG 5 étoiles jaunes
const Stars = () => (
  <div className="flex gap-1 mb-1" aria-hidden="true">
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
    name: "Talha Aslan",
    company: "TH Menuiseries",
    accent: "#1c1c1c",
  },
  {
    id: 2,
    text: "Je voulais une app vraiment unique pour ma boutique, Ibrahim a tout compris ! Design dynamique, interface intuitive etc.. Mes visiteurs sont bluffés, et moi aussi. Super suivi tout au long du projet, merci !",
    name: "Rehaima Sourour",
    company: "Mydupes",
    accent: "#009379",
  },
  {
    id: 3,
    text: "Collaboration au top ! Mon site d'événementiel sort du lot et fonctionne à merveille. Un échange très amicale et instructif, force de proposition et toujours ultra réactif. Foncez !",
    name: "Mathieu Vidal",
    company: "Vid'Events",
    accent: "#ff6250",
  },
];

const initials = (name) =>
  name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0].toUpperCase())
    .join("");

const TestimonialsSection = () => {
  const scrollRef = useRef(null);

  // Sur mobile, la liste défile horizontalement : on centre la 2e carte
  // au chargement pour montrer qu'il y en a d'autres à côté.
  useEffect(() => {
    const centerSecondCard = () => {
      if (window.innerWidth >= 1024 || !scrollRef.current) return;
      const container = scrollRef.current;
      const card = container.children[1];
      if (!card) return;
      const cardRect = card.getBoundingClientRect();
      const containerRect = container.getBoundingClientRect();
      container.scrollTo({
        left:
          card.offsetLeft -
          container.offsetLeft -
          (containerRect.width / 2 - cardRect.width / 2),
        behavior: "auto",
      });
    };
    const timer = setTimeout(centerSecondCard, 40);
    window.addEventListener("resize", centerSecondCard);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", centerSecondCard);
    };
  }, []);

  return (
    <section
      id="temoignages"
      className="relative w-full mt-10 sm:mt-12 lg:mt-15 bg-[var(--white)] mb-10 sm:mb-14 lg:mb-20"
    >
      <SectionTitle
        icon={smiley}
        iconSide="right"
        iconClass="w-[26px] sm:w-[36px] lg:w-[56px] -mt-1 lg:-mt-2"
        className="mb-6 sm:mb-10 lg:mb-12"
      >
        Ce que disent mes clients
      </SectionTitle>

      {/* Testimonials grid */}
      <div
        ref={scrollRef}
        className="
          flex lg:grid lg:grid-cols-3
          gap-4 sm:gap-6 lg:gap-8
          w-full lg:max-w-[1280px] mx-auto
          overflow-x-auto lg:overflow-x-visible scroll-smooth
          snap-x lg:snap-none no-scrollbar
        "
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {testimonialsData.map((testimonial, i) => (
          <Reveal
            key={testimonial.id}
            delay={i * 110}
            className="h-full flex-shrink-0 lg:flex-shrink w-[85vw] max-w-[350px] sm:w-[350px] lg:w-auto lg:max-w-full snap-center lg:snap-none"
          >
            <article
              className="
                flex h-full flex-col justify-between bg-white
                p-5 sm:p-7 md:p-6 lg:p-8
                gap-6 sm:gap-7 lg:gap-8 shadow text-black w-full
                min-h-[260px] sm:min-h-[300px] lg:min-h-[340px]
                transition-shadow duration-300 hover:shadow-xl
              "
            >
              {/* Témoignage */}
              <blockquote className="text-base sm:text-lg lg:text-lg leading-relaxed mb-1 opacity-95 font-[Epilogue,Helvetica]">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>

              {/* Identité alignée en bas */}
              <div className="flex flex-row items-center gap-3 sm:gap-4 mt-auto">
                <span
                  aria-hidden="true"
                  className="flex h-[44px] w-[44px] sm:h-[52px] sm:w-[52px] flex-shrink-0 items-center justify-center rounded-full font-bold text-white text-[15px] sm:text-[17px]"
                  style={{ backgroundColor: testimonial.accent }}
                >
                  {initials(testimonial.name)}
                </span>
                <div className="flex flex-col">
                  <Stars />
                  <span className="sr-only">Note : 5 étoiles sur 5.</span>
                  <cite className="not-italic font-bold block text-[13px] md:text-lg">
                    {testimonial.name}
                  </cite>
                  <div className="text-xs sm:text-sm md:text-sm text-black opacity-70">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {GOOGLE_REVIEWS_URL && (
        <div className="mt-8 flex justify-center">
          <a
            href={GOOGLE_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="lift inline-flex items-center gap-2 rounded-[20px] bg-white px-6 py-3 font-bold text-[#1c1c1c] text-[16px] shadow hover:shadow-xl"
          >
            Voir mes avis Google
            <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      )}

      {/* Masque la barre de défilement du carrousel mobile */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default TestimonialsSection;
