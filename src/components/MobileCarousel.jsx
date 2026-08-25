import { Children, useCallback, useEffect, useRef, useState } from "react";

/**
 * Carrousel horizontal sur mobile, grille classique à partir de `lg`.
 *
 * Sur mobile la liste déborde volontairement des gouttières (-mx / px) pour
 * que la carte suivante dépasse sur le côté : c'est ce débord qui fait
 * comprendre au visiteur qu'il peut faire défiler.
 *
 * `desktopClass`  : les classes de grille appliquées à partir de lg.
 * `startCentered` : ouvre sur la carte du milieu, pour qu'on voie tout de
 *                   suite qu'il y a du contenu à gauche ET à droite.
 */
const MobileCarousel = ({
  children,
  desktopClass = "",
  ariaLabel,
  dark = false,
  startCentered = false,
}) => {
  const items = Children.toArray(children);
  const middle = Math.floor((items.length - 1) / 2);
  const trackRef = useRef(null);
  const [active, setActive] = useState(startCentered ? middle : 0);

  // Mesures via getBoundingClientRect plutôt que offsetLeft : ce dernier est
  // relatif au premier ancêtre positionné, qui n'est pas toujours la piste.
  const scrollToIndex = useCallback((i, behavior) => {
    const track = trackRef.current;
    const child = track?.children[i];
    if (!track || !child) return;
    const delta =
      child.getBoundingClientRect().left - track.getBoundingClientRect().left;
    track.scrollTo({
      left:
        track.scrollLeft + delta - (track.clientWidth - child.offsetWidth) / 2,
      behavior,
    });
  }, []);

  const onScroll = useCallback(() => {
    const track = trackRef.current;
    if (!track || track.children.length === 0) return;
    // La carte active est celle dont le centre est le plus proche du centre visible
    const center = track.getBoundingClientRect().left + track.clientWidth / 2;
    let best = 0;
    let bestDist = Infinity;
    [...track.children].forEach((child, i) => {
      const rect = child.getBoundingClientRect();
      const dist = Math.abs(rect.left + rect.width / 2 - center);
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

  // Position d'ouverture au milieu : uniquement en mobile, sans animation,
  // et après la première mise en page pour que les largeurs soient connues.
  useEffect(() => {
    if (!startCentered || items.length < 2) return;
    if (window.matchMedia("(min-width: 1024px)").matches) return;
    const id = requestAnimationFrame(() => scrollToIndex(middle, "auto"));
    return () => cancelAnimationFrame(id);
  }, [startCentered, items.length, middle, scrollToIndex]);

  return (
    <div className="w-full">
      <ul
        ref={trackRef}
        aria-label={ariaLabel}
        className={`
          no-scrollbar flex snap-x snap-mandatory
          overflow-x-auto overflow-y-hidden overscroll-x-contain
          gap-4 py-2
          -mx-5 px-5 scroll-px-5
          sm:-mx-8 sm:px-8 sm:scroll-px-8
          lg:mx-0 lg:px-0 lg:py-0 lg:gap-0 lg:snap-none
          lg:overflow-x-visible lg:overflow-y-visible
          ${desktopClass}
        `}
      >
        {items.map((child, i) => (
          <li
            key={i}
            className="
              snap-center snap-always shrink-0 flex
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
              onClick={() => scrollToIndex(i, "smooth")}
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
