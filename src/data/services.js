// Pages de service dédiées : une URL par prestation.
// C'est ce qui permet de se positionner sur plusieurs requêtes Google
// plutôt que sur une seule page d'accueil.
export const services = [
  {
    slug: "creation-site-vitrine",
    heroImage: "/ordi.webp",
    projectType: "Site vitrine",
    offerId: "vitrine",
    navLabel: "Site vitrine",
    title: "Création de site vitrine sur mesure",
    metaTitle: "Création de site vitrine sur mesure | El Webo",
    metaDescription:
      "Création de site vitrine professionnel en React : design unique, site rapide, optimisé pour Google et pensé pour transformer vos visiteurs en clients. Devis gratuit.",
    hook: "Votre site est souvent le premier contact d'un client avec vous. Autant qu'il donne envie.",
    intro:
      "Un site vitrine sert à une chose : convaincre quelqu'un qui vous découvre de vous contacter. Cela demande un message clair, une navigation évidente et des pages qui s'affichent instantanément — pas un catalogue de fonctionnalités inutiles. Je conçois chaque site sur mesure, sans modèle prédéfini, pour que le vôtre ressemble à votre activité et à personne d'autre.",
    forWho: [
      "Artisans et professionnels du bâtiment",
      "Professions libérales et thérapeutes",
      "Restaurants, salons et commerces de proximité",
      "Associations et jeunes entreprises",
    ],
    included: [
      {
        title: "Un design qui vous ressemble",
        icon: "monitor",
        text: "Maquette sur mesure validée avant le développement. Vos couleurs, votre ton, vos photos.",
      },
      {
        title: "Un site réellement rapide",
        icon: "zap",
        text: "Développé en React, images optimisées, aucune extension superflue. La vitesse compte pour vos visiteurs comme pour Google.",
      },
      {
        title: "Parfait sur mobile",
        icon: "smartphone",
        text: "Plus de la moitié de vos visiteurs arrivent depuis un téléphone. Le site est pensé pour eux en premier.",
      },
      {
        title: "Les fondations du référencement",
        icon: "search",
        text: "Structure des pages, balises, plan du site, données structurées : tout ce qu'il faut pour que Google comprenne votre activité.",
      },
      {
        title: "Un formulaire qui fonctionne",
        icon: "mail",
        text: "Les demandes arrivent directement dans votre boîte mail, sans intermédiaire ni abonnement.",
      },
      {
        title: "La mise en ligne comprise",
        icon: "launch",
        text: "Nom de domaine, hébergement, certificat de sécurité. Les accès restent à votre nom.",
      },
    ],
    caseStudyId: "th-menuiseries",
  },
  {
    slug: "creation-site-ecommerce",
    heroImage: "/shop.webp",
    projectType: "Boutique en ligne",
    offerId: "ecommerce",
    navLabel: "Boutique en ligne",
    title: "Création de boutique en ligne sur mesure",
    metaTitle: "Création de site e-commerce sur mesure | El Webo",
    metaDescription:
      "Création de boutique en ligne sur mesure : catalogue, panier, paiement sécurisé et gestion des stocks. Sans commission sur vos ventes. Devis gratuit.",
    hook: "Une boutique qui vous appartient vraiment, sans commission prélevée sur chaque vente.",
    intro:
      "Les plateformes clés en main sont pratiques au départ, puis coûteuses : abonnement mensuel, commission sur les ventes, et un site qui ressemble à des milliers d'autres. Je développe votre boutique sur mesure : vous gardez la main sur votre catalogue, votre image et vos marges. Le parcours d'achat est pensé pour aller du premier clic au paiement sans friction.",
    forWho: [
      "Marques de vêtements et d'accessoires",
      "Créateurs et artisans qui vendent en ligne",
      "Boutiques spécialisées à gros catalogue",
      "Commerces physiques qui veulent vendre à distance",
    ],
    included: [
      {
        title: "Un catalogue qui reste lisible",
        icon: "grid",
        text: "Filtres, tri, recherche et gestion des ruptures : vos clients trouvent le bon produit même avec des centaines de références.",
      },
      {
        title: "Des fiches produits qui vendent",
        icon: "tag",
        text: "Galerie photo, variantes, stock en temps réel et informations de livraison claires.",
      },
      {
        title: "Un paiement sécurisé",
        icon: "lock",
        text: "Carte bancaire et portefeuilles numériques via un prestataire certifié. Vous encaissez directement.",
      },
      {
        title: "Commandes et stocks maîtrisés",
        icon: "box",
        text: "Un espace d'administration simple pour suivre les commandes, ajuster les stocks et éditer vos produits.",
      },
      {
        title: "Un compte client complet",
        icon: "user",
        text: "Historique, suivi de commande et adresses enregistrées : ce que vos clients attendent aujourd'hui.",
      },
      {
        title: "La prise en main assurée",
        icon: "book",
        text: "Je vous forme à l'outil pour que vous soyez autonome sur votre catalogue au quotidien.",
      },
    ],
    caseStudyId: "barosgames",
  },
  {
    slug: "creation-application",
    heroImage: "/tel.webp",
    projectType: "Application web ou mobile",
    offerId: "application",
    navLabel: "Application",
    title: "Développement d'application sur mesure",
    metaTitle: "Développement d'application web et mobile | El Webo",
    metaDescription:
      "Développement d'applications web et mobiles sur mesure en React et React Native : outils métier, plateformes de réservation, espaces clients. Devis gratuit.",
    hook: "Quand aucun logiciel du marché ne fait exactement ce dont vous avez besoin.",
    intro:
      "Certaines activités ne rentrent dans aucune case : un outil interne, une plateforme qui met en relation, un espace réservé à vos clients. Plutôt que de tordre un logiciel existant, je construis l'outil autour de votre façon de travailler. On commence toujours par cadrer précisément le besoin — c'est là que se joue la réussite du projet.",
    forWho: [
      "Plateformes de mise en relation ou de réservation",
      "Outils métier et automatisation de tâches répétitives",
      "Espaces clients et tableaux de bord",
      "Applications mobiles iOS et Android",
    ],
    included: [
      {
        title: "Un cadrage sérieux avant de coder",
        icon: "target",
        text: "On liste ensemble les parcours, les cas particuliers et les priorités. Vous savez exactement ce qui sera livré.",
      },
      {
        title: "Web et mobile",
        icon: "devices",
        text: "Application web accessible depuis un navigateur, ou application mobile iOS et Android développée en React Native.",
      },
      {
        title: "Comptes et rôles",
        icon: "users",
        text: "Inscription, connexion sécurisée, droits différenciés entre administrateurs et utilisateurs.",
      },
      {
        title: "Un espace d'administration",
        icon: "grid",
        text: "Vous pilotez vos données, vos utilisateurs et vos contenus sans passer par moi.",
      },
      {
        title: "Connexion à vos outils",
        icon: "plug",
        text: "Paiement, e-mails, agenda, facturation : l'application s'intègre à ce que vous utilisez déjà.",
      },
      {
        title: "Hébergement et suivi",
        icon: "server",
        text: "Mise en production, sauvegardes et accompagnement pour faire évoluer l'outil dans le temps.",
      },
    ],
    caseStudyId: "heurly",
  },
];

export const getService = (slug) => services.find((s) => s.slug === slug);
