import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    title: "On échange",
    text: "Un premier appel gratuit et sans engagement. Vous me racontez votre projet, vos objectifs et votre budget — je vous dis franchement ce qui est réaliste.",
  },
  {
    n: "02",
    title: "Devis & maquette",
    text: "Vous recevez un devis détaillé et une maquette de votre futur site. Rien ne démarre avant votre feu vert, et le prix annoncé est le prix final.",
  },
  {
    n: "03",
    title: "Développement",
    text: "Je code votre site sur mesure, sans template. Vous suivez l'avancement sur un lien de préversion et pouvez demander des ajustements à chaque étape.",
  },
  {
    n: "04",
    title: "Mise en ligne & suivi",
    text: "Je m'occupe du nom de domaine, de l'hébergement et du référencement. Une fois en ligne, je reste disponible pour faire évoluer votre site.",
  },
];

const ProcessSection = () => {
  return (
    <section
      id="methode"
      className="w-full flex flex-col items-center pt-14 pb-8 md:pt-24 md:pb-16"
    >
      <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2rem] sm:text-[2.3rem] md:text-[40px] leading-[1.1] text-center">
        Comment ça se passe
      </h2>
      <p className="mt-4 mb-10 md:mb-14 max-w-[680px] text-center text-base md:text-[1.2rem] leading-[27px] text-black">
        Quatre étapes claires, aucune mauvaise surprise. Vous savez à tout moment
        où en est votre projet.
      </p>

      <ol className="grid w-full max-w-[1280px] grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 md:gap-8">
        {steps.map((step, i) => (
          <li key={step.n} className="h-full">
            <Reveal delay={i * 90} className="h-full">
              <div className="relative flex h-full flex-col gap-3 bg-white p-6 md:p-8 shadow transition-shadow duration-300 hover:shadow-xl">
                <span
                  className="font-black italic font-[Epilogue,Helvetica] text-[44px] md:text-[54px] leading-none text-[var(--yellow)]"
                  aria-hidden="true"
                >
                  {step.n}
                </span>
                <h3 className="font-bold font-[Epilogue,Helvetica] text-black text-[20px] md:text-[24px] leading-tight">
                  {step.title}
                </h3>
                <p className="text-[15px] md:text-[16px] leading-[24px] md:leading-[26px] text-black opacity-90">
                  {step.text}
                </p>
              </div>
            </Reveal>
          </li>
        ))}
      </ol>
    </section>
  );
};

export default ProcessSection;
