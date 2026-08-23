import { useEffect } from "react";
import { SITE_URL } from "../config";

const SITE = SITE_URL;

/**
 * Métadonnées propres à une page.
 * React 19 remonte automatiquement <title>, <meta> et <link> dans le <head>,
 * aucune dépendance externe n'est nécessaire.
 */
const Seo = ({ title, description, path = "/", jsonLd, noindex = false }) => {
  const url = `${SITE}${path}`;

  // index.html contient des balises SEO de repli pour les robots qui
  // n'exécutent pas JavaScript. Dès que React prend la main, on les retire :
  // sinon deux balises canonical coexistent et Google reçoit un signal
  // contradictoire sur chaque page interne.
  useEffect(() => {
    document
      .querySelectorAll("[data-static-seo]")
      .forEach((el) => el.remove());
  }, []);

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta
        name="robots"
        content={noindex ? "noindex, nofollow" : "index, follow"}
      />

      <meta property="og:type" content="website" />
      <meta property="og:locale" content="fr_FR" />
      <meta property="og:site_name" content="El Webo" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={`${SITE}/og.jpg`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE}/og.jpg`} />

      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
    </>
  );
};

export default Seo;
