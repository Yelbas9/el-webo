// Formules proposées.
//
// `price` à null => la carte affiche « Sur devis ».
// Un montant (ex. price: 400) affiche « À partir de 400 € ».
// `delivery` : le délai annoncé sur la carte et dans le héros. C'est un
// engagement commercial — ne l'allonge ni ne le raccourcis sans être sûr
// de le tenir même en période chargée.
// `highlight: true` met la formule en avant (bordure jaune + badge).
// L'icône et la page de service sont retrouvées via services.js (offerId).
export const offers = [
  {
    id: "vitrine",
    name: "Site vitrine",
    // Doit correspondre à une entrée de projectTypes (formOptions.js)
    // pour pré-remplir le formulaire de devis.
    projectType: "Site vitrine",
    tagline: "Pour présenter votre activité et recevoir des demandes de devis.",
    delivery: "En ligne sous 72 h",
    price: 400,
    highlight: false,
    features: [
      "Design sur mesure, sans template",
      "Jusqu'à 5 pages",
      "Version mobile soignée",
      "Formulaire de contact",
      "Fondations SEO et données structurées",
      "Hébergement et nom de domaine offerts la 1re année",
    ],
  },
  {
    id: "ecommerce",
    name: "Boutique en ligne",
    projectType: "Boutique en ligne",
    tagline: "Pour vendre vos produits, sans commission sur vos ventes.",
    delivery: "En ligne en 1 à 2 semaines",
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
    tagline: "Pour un outil métier ou une application qui n'existe pas encore.",
    delivery: "Livrée sous 1 mois",
    // Aucun montant fixé : le périmètre d'une application varie trop.
    price: null,
    highlight: false,
    features: [
      "Cadrage du besoin et parcours utilisateur",
      "Application web ou mobile (iOS et Android)",
      "Comptes utilisateurs et espace d'administration",
      "Connexion à vos outils existants",
      "Hébergement et sauvegardes",
      "Accompagnement après la mise en ligne",
    ],
  },
];
