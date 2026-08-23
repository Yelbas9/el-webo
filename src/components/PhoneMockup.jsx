/** Maquette de téléphone contenant la capture mobile d'un site client. */
const PhoneMockup = ({ src, alt, className = "w-[160px] sm:w-[195px]" }) => (
  <div
    className={`relative flex-shrink-0 rounded-[28px] border-[6px] border-[#3a3a3a] bg-[#3a3a3a] shadow-2xl ${className}`}
  >
    <span className="absolute left-1/2 top-[8px] z-10 h-1.5 w-12 -translate-x-1/2 rounded-full bg-black/70" />
    {/* aspect-[440/952] : exactement le format de la capture, aucun rognage */}
    <div className="aspect-[440/952] overflow-hidden rounded-[22px] bg-white">
      <img
        src={src}
        alt={alt}
        width="440"
        height="952"
        loading="lazy"
        decoding="async"
        draggable={false}
        className="w-full h-full object-cover object-top"
      />
    </div>
  </div>
);

export default PhoneMockup;
