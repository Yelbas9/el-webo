// Mes réalisations. Les captures sont dans /public/projets (pleine page :
// elles défilent au survol de la carte).
//
// `results` : LE champ qui fait vendre. Demande les chiffres à tes clients
// (« combien de demandes de devis par mois depuis la refonte ? », « quel
// panier moyen ? »). Tant qu'il est vide, rien ne s'affiche — aucun risque
// d'annoncer un résultat inventé. Exemple :
//   results: [
//     { value: "+40 %", label: "de demandes de devis" },
//     { value: "5 ★", label: "sur Google" },
//   ],
//
// `stack` : uniquement ce qui est vérifiable depuis le site publié.
// Ajoute-y librement ce que tu as réellement utilisé (MongoDB, Stripe,
// React Native…), ça renforce la crédibilité technique.
export const projects = [
  {
    id: "heurly",
    name: "Heurly",
    url: "https://heurly.fr",
    image: "/projets/heurly.webp",
    mobileImage: "/projets/heurly-mobile.webp",
    category: "Plateforme de réservation",
    year: "2025",
    tagline: "Trouver un pro et réserver en ligne, à toute heure",
    description:
      "Annuaire géolocalisé, disponibilités en temps réel, réservation sans création de compte et espace pro avec facturation automatique.",
    highlights: [
      "Recherche par ville",
      "55+ métiers",
      "Espace pro",
      "Clair / sombre",
    ],
    results: [],
    stack: ["React", "Vite", "Netlify"],
  },
  {
    id: "miraya",
    name: "Miraya Édition",
    url: "https://miraya-edition.com",
    image: "/projets/miraya.webp",
    mobileImage: "/projets/miraya-mobile.webp",
    category: "Boutique en ligne",
    year: "2025",
    tagline: "Mode féminine élégante et intemporelle",
    description:
      "Un e-commerce sur mesure à l'univers « old money » : collections mises en avant, fiches produits soignées et parcours d'achat fluide.",
    highlights: [
      "Catalogue produits",
      "Compte client",
      "Promo animée",
      "Suivi analytics",
    ],
    results: [],
    stack: ["React", "Vite", "Netlify"],
  },
  {
    id: "barosgames",
    name: "Baros Games",
    url: "https://barosgames.com",
    image: "/projets/barosgames.webp",
    mobileImage: "/projets/barosgames-mobile.webp",
    category: "Boutique en ligne",
    year: "2025",
    tagline: "Cartes TCG, boosters & produits scellés",
    description:
      "Une boutique de cartes à collectionner pensée pour un gros catalogue : filtres par univers, type et prix, avec tri instantané.",
    highlights: [
      "Filtres avancés",
      "Gestion des stocks",
      "Pokémon, One Piece…",
      "Suivi analytics",
    ],
    results: [],
    stack: ["React", "Vite", "Netlify"],
  },
  {
    id: "th-menuiseries",
    name: "TH Menuiseries",
    url: "https://th-menuiseries.fr",
    image: "/projets/th-menuiseries.webp",
    mobileImage: "/projets/th-menuiseries-mobile.webp",
    category: "Site vitrine",
    year: "2024",
    tagline: "Fabricant de menuiseries PVC & ALU sur mesure",
    description:
      "La vitrine d'un fabricant près de Bordeaux : gammes, réalisations en photos et référencement local pour générer des demandes de devis.",
    highlights: [
      "Catalogue de gammes",
      "Galerie photos",
      "SEO local Bordeaux",
      "Avis Google 5 ★",
    ],
    results: [],
    stack: ["React", "Vite", "Netlify"],
  },
];
