// Adresse publique du site. Sert aux URL canoniques et aux données structurées.
export const SITE_URL = "https://elwebo.fr";

/**
 * Mesure d'audience « maison ».
 *
 * Les visites sont envoyées à une fonction Netlify (`/api/track`) qui les
 * agrège dans Netlify Blobs. Le tableau de bord est sur /admin.
 *
 * Ce qui est enregistré : la page visitée, le domaine du référent et le type
 * d'appareil. Rien d'autre — pas de cookie, pas d'adresse IP, pas
 * d'identifiant. Aucun bandeau de consentement n'est donc nécessaire et la
 * page « Mentions légales » reste exacte.
 *
 * Pour accéder au tableau de bord, définis la variable d'environnement
 * ADMIN_KEY dans Netlify (Site configuration → Environment variables).
 *
 * Mets `enabled: false` pour tout désactiver.
 */
export const ANALYTICS = {
  enabled: true,
};

/**
 * Lien vers ta fiche Google Business (avis clients).
 * Dès qu'il est renseigné, un bouton « Voir mes avis Google » apparaît
 * sous les témoignages — une preuve vérifiable vaut mieux que trois
 * citations sur ton propre site.
 */
export const GOOGLE_REVIEWS_URL = "";
