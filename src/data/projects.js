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
      "Une plateforme complète de prise de rendez-vous : annuaire géolocalisé, disponibilités en temps réel, réservation sans création de compte et espace professionnel avec acomptes et facturation automatiques.",
    highlights: [
      "Recherche par métier et par ville",
      "Plus de 55 métiers couverts",
      "Espace pro & agenda",
      "Thème clair / sombre",
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
      "Un e-commerce sur mesure à l'univers « old money » : mise en avant des collections, fiches produits soignées, compte client et parcours d'achat fluide du premier clic au paiement.",
    highlights: [
      "Catalogue & collections",
      "Panier et compte client",
      "Bandeau promo animé",
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
      "Une boutique spécialisée dans les cartes à collectionner, pensée pour un gros catalogue : filtres par univers, type, prix et disponibilité, tri instantané et gestion des ruptures de stock.",
    highlights: [
      "Filtres multi-critères",
      "Gestion des stocks",
      "One Piece, Pokémon, Yu-Gi-Oh…",
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
      "Un site vitrine pour un fabricant près de Bordeaux : présentation des gammes, réalisations en photos, référencement local travaillé et appels à l'action pour transformer les visiteurs en demandes de devis.",
    highlights: [
      "Catalogue de gammes",
      "Galerie de réalisations",
      "SEO local (Bordeaux)",
      "Avis Google 5 ★",
    ],
    results: [],
    stack: ["React", "Vite", "Netlify"],
  },
];
