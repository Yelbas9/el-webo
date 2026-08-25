import { Children, useCallback, useEffect, useRef, useState } from "react";

/**
 * Carrousel horizontal sur mobile, grille classique à partir de `lg`.
 *
 * Sur mobile la liste déborde volontairement des gouttières (-mx / px) pour
 * que la carte suivante dépasse à droite : c'est ce débord qui fait
 * comprendre au visiteur qu'il peut faire défiler.
 *
 * `desktopClass` : les classes de grille appliquées à partir de lg.
 */
const MobileCarousel = ({ children, desktopClass = "", ariaLabel, dark = false }) => {
  const items = Children.toArray(children);
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    // La carte active est celle dont le centre est le plus proche du centre visible
    const center = track.scrollLeft + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    [...track.children].forEach((child, i) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const dist = Math.abs(childCenter - center);
      if (dist < bestDist) {
        bestDist = dist;
        best = i;
      }
    });
    setActive(best);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    track.addEventListener("scroll", onScroll, { passive: true });
    return () => track.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  const goTo = (i) => {
    const track = trackRef.current;
    const child = track?.children[i];
    if (!track || !child) return;
    track.scrollTo({
      left: child.offsetLeft - (track.clientWidth - child.offsetWidth) / 2,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full">
      <ul
        ref={trackRef}
        aria-label={ariaLabel}
        className={`
          no-scrollbar flex snap-x snap-mandatory overflow-x-auto scroll-smooth
          gap-4 pb-1
          -mx-5 px-5 scroll-px-5
          sm:-mx-8 sm:px-8 sm:scroll-px-8
          lg:mx-0 lg:px-0 lg:overflow-visible lg:snap-none lg:gap-0
          ${desktopClass}
        `}
      >
        {items.map((child, i) => (
          <li
            key={i}
            className="
              snap-center shrink-0 flex
              w-[80vw] max-w-[340px]
              lg:w-auto lg:max-w-none lg:shrink lg:snap-align-none
            "
          >
            {child}
          </li>
        ))}
      </ul>

      {/* Pastilles : repère de position, et raccourci pour naviguer */}
      {items.length > 1 && (
        <div className="mt-5 flex items-center justify-center gap-2 lg:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => goTo(i)}
              aria-label={`Aller à l'élément ${i + 1} sur ${items.length}`}
              aria-current={active === i}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                active === i
                  ? "w-7 bg-[var(--yellow)]"
                  : dark
                  ? "w-2.5 bg-white/30 hover:bg-white/50"
                  : "w-2.5 bg-black/20 hover:bg-black/35"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default MobileCarousel;
