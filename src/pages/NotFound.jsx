import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { services } from "../data/services";

const NotFound = ({ onContactClick }) => {
  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title="Page introuvable – El Webo"
        description="Cette page n'existe pas ou a été déplacée."
        path="/404"
        noindex
      />

      <div className="max-w-[1280px] mx-auto gutter py-16 md:py-24 flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
        <div className="flex-1 min-w-0">
          <p
            className="font-black italic font-[Epilogue,Helvetica] text-[var(--yellow)] text-[5rem] sm:text-[7rem] md:text-[9rem] leading-none"
            aria-hidden="true"
          >
            404
          </p>

          <h1 className="mt-2 font-black italic font-[Epilogue,Helvetica] text-black text-[2rem] sm:text-[2.5rem] md:text-[3rem] leading-[1.1]">
            Cette page n'existe pas
          </h1>

          <p className="mt-5 max-w-[560px] text-[1.05rem] md:text-[1.2rem] leading-[1.6] text-black/80">
            Le lien est peut-être erroné, ou la page a été déplacée. Rien de
            grave&#8239;: voici par où continuer.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/"
              className="lift inline-flex items-center justify-center bg-[var(--yellow)] rounded-[20px] px-8 py-4 font-bold text-[#1c1c1c] text-lg hover:bg-[#e6be00] shadow hover:shadow-xl"
            >
              Retour à l'accueil
            </Link>
            <button
              type="button"
              onClick={() => onContactClick?.()}
              className="lift inline-flex items-center justify-center bg-[#1c1c1c] rounded-[20px] px-8 py-4 font-bold text-white text-lg hover:bg-[#333] shadow hover:shadow-xl cursor-pointer"
            >
              Me contacter
            </button>
          </div>

          <nav aria-label="Pages principales" className="mt-10">
            <p className="text-[14px] uppercase tracking-wide text-black/50 mb-3">
              Ou consulte directement
            </p>
            <ul className="flex flex-wrap gap-3">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link
                    to={`/${s.slug}`}
                    className="lift inline-flex items-center gap-2.5 bg-white rounded-[14px] shadow hover:shadow-xl px-4 py-3 font-bold text-black text-[15px]"
                  >
                    <img
                      src={s.heroImage}
                      alt=""
                      aria-hidden="true"
                      width="40"
                      height="40"
                      loading="lazy"
                      className="w-[34px] h-[34px] object-contain"
                    />
                    {s.navLabel}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  to="/#mes-projets"
                  className="lift inline-flex items-center bg-white rounded-[14px] shadow hover:shadow-xl px-4 py-3 font-bold text-black text-[15px]"
                >
                  Mes réalisations
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="lift inline-flex items-center bg-white rounded-[14px] shadow hover:shadow-xl px-4 py-3 font-bold text-black text-[15px]"
                >
                  À propos
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <img
          src="/hero.webp"
          alt=""
          aria-hidden="true"
          width="420"
          height="542"
          loading="lazy"
          decoding="async"
          className="w-[200px] sm:w-[260px] lg:w-[320px] h-auto object-contain flex-shrink-0"
          draggable={false}
        />
      </div>
    </div>
  );
};

export default NotFound;
