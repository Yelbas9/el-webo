import { useEffect, useState } from "react";

/** Bouton de retour en haut : la page d'accueil est longue. */
const BackToTop = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 900);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      aria-label="Revenir en haut de la page"
      className={`
        fixed bottom-5 right-5 z-40 flex h-12 w-12 items-center justify-center
        rounded-full bg-[#1c1c1c] text-[var(--yellow)] shadow-lg cursor-pointer
        transition-all duration-300 hover:bg-[var(--yellow)] hover:text-[#1c1c1c]
        ${
          visible
            ? "translate-y-0 opacity-100"
            : "pointer-events-none translate-y-3 opacity-0"
        }
      `}
    >
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
      >
        <path d="m18 15-6-6-6 6" />
      </svg>
    </button>
  );
};

export default BackToTop;
