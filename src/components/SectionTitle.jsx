/**
 * Titre de section avec picto optionnel.
 * Le titre et le picto sont centrés ensemble : plus besoin de compenser
 * la largeur du picto avec des marges négatives au jugé.
 */
const SectionTitle = ({
  children,
  icon,
  iconSide = "right",
  iconClass = "",
  className = "",
}) => {
  const picto = icon ? (
    <img
      src={icon}
      alt=""
      aria-hidden="true"
      width="80"
      height="80"
      loading="lazy"
      decoding="async"
      draggable={false}
      className={`flex-shrink-0 select-none ${iconClass}`}
      style={{ userSelect: "none" }}
    />
  ) : null;

  return (
    <div
      className={`flex w-full items-center justify-center gap-2 sm:gap-3 md:gap-4 ${className}`}
    >
      {iconSide === "left" && picto}
      <h2
        className="
          font-black italic font-[Epilogue,Helvetica] text-black text-center
          text-[1.75rem] sm:text-[2.3rem] md:text-[40px] leading-[1.1]
        "
      >
        {children}
      </h2>
      {iconSide === "right" && picto}
    </div>
  );
};

export default SectionTitle;
