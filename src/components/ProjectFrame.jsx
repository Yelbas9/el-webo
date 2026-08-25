/**
 * Fenêtre de navigateur contenant une capture pleine page qui défile
 * au survol. Utilisé par le portfolio de l'accueil et par les pages
 * de service, pour que les aperçus se ressemblent partout.
 *
 * `height` : classes de hauteur du cadre (Tailwind).
 */
const ProjectFrame = ({ project, height = "h-[240px] sm:h-[300px] lg:h-[330px]" }) => {
  const domain = project.url.replace(/^https?:\/\//, "");

  return (
    <>
      <div className="flex items-center gap-2 bg-[#2a2a2a] px-4 py-3">
        <span className="w-3 h-3 rounded-full bg-[#ff6250]" />
        <span className="w-3 h-3 rounded-full bg-[#ffd300]" />
        <span className="w-3 h-3 rounded-full bg-[#009379]" />
        <span className="ml-3 truncate rounded-full bg-[#1c1c1c] px-3 py-1 text-[12px] sm:px-4 sm:text-[13px] text-white/60">
          {domain}
        </span>
      </div>

      <div className={`relative overflow-hidden bg-white ${height}`}>
        <img
          src={project.image}
          alt={`Aperçu du site ${project.name}`}
          width="1000"
          height="1625"
          loading="lazy"
          decoding="async"
          draggable={false}
          className="
            absolute inset-0 h-full w-full object-cover
            [object-position:50%_0%] group-hover:[object-position:50%_100%]
            transition-[object-position] duration-[2600ms] ease-linear
            motion-reduce:transition-none
          "
        />
      </div>
    </>
  );
};

export default ProjectFrame;
