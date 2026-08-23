// Formules proposées.
//
// `price` à null => la carte affiche « Sur devis ».
// Un montant (ex. price: 400) affiche « À partir de 400 € ».
// Ne mets un prix que si tu peux le tenir.
//
// `highlight: true` met la formule en avant (bordure jaune + badge).
export const offers = [
  {
    id: "vitrine",
    name: "Site vitrine",
    // Doit correspondre à une entrée de projectTypes (formOptions.js)
    // pour pré-remplir le formulaire de devis.
    projectType: "Site vitrine",
    tagline: "Pour présenter ton activité et générer des contacts.",
    price: 400,
    highlight: false,
    features: [
      "Design sur mesure, sans template",
      "Jusqu'à 5 pages",
      "Version mobile soignée",
      "Formulaire de contact",
      "Fondations SEO et données structurées",
      "Mise en ligne, domaine et HTTPS",
    ],
  },
  {
    id: "ecommerce",
    name: "Boutique en ligne",
    projectType: "Boutique en ligne",
    tagline: "Pour vendre tes produits, sans commission sur tes ventes.",
    price: 800,
    highlight: true,
    features: [
      "Tout ce que contient le site vitrine",
      "Catalogue et fiches produits",
      "Panier et paiement sécurisé",
      "Gestion des stocks et des commandes",
      "Compte client et suivi de commande",
      "Formation à la prise en main",
    ],
  },
  {
    id: "application",
    name: "Application sur mesure",
    projectType: "Application web ou mobile",
    tagline: "Pour un outil métier ou une appli qui n'existe pas encore.",
    // Aucun montant fixé : le périmètre d'une application varie trop.
    price: null,
    highlight: false,
    features: [
      "Cadrage du besoin et parcours utilisateur",
      "Application web ou mobile (iOS et Android)",
      "Comptes utilisateurs et espace d'administration",
      "Connexion à tes outils existants",
      "Hébergement et sauvegardes",
      "Accompagnement après la mise en ligne",
    ],
  },
];
