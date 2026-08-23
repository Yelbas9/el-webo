# El Webo — site vitrine

Site vitrine d'El Webo (création de sites web et d'applications sur mesure).
React 19 + Vite 7 + Tailwind CSS 4, déployé sur Netlify.

## Démarrer

```bash
yarn install
yarn dev        # développement (http://localhost:5173)
yarn build      # build de production dans dist/
yarn preview    # prévisualise le build
yarn lint       # ESLint
```

Le projet utilise **Yarn 4 avec un `node_modules` classique**
(`nodeLinker: node-modules` dans `.yarnrc.yml`). Ne repasse pas en mode PnP :
les fonctions Netlify ne peuvent alors plus résoudre leurs dépendances.

## Structure

```
src/
  pages/
    Home.jsx              page d'accueil (assemble les sections)
    ServicePage.jsx       pages de service, générées depuis data/services.js
    APropos.jsx           page « À propos » (/a-propos)
    MentionsLegales.jsx   page légale (/mentions-legales)
  components/
    Seo.jsx                    métadonnées par page (React 19, sans dépendance)
    NavigationMenuSection.jsx  navbar collante + scroll-spy + menu mobile
    HeaderSection.jsx          hero
    SkillsListSection.jsx      « Mes services »
    SkillsOverviewSection.jsx  « Mes compétences »
    ProjectsSection.jsx        « Mes réalisations » (portfolio)
    TestimonialsSection.jsx    avis clients
    PricingSection.jsx         « Mes formules »
    ProcessSection.jsx         « Comment ça se passe »
    FaqSection.jsx             FAQ (+ données structurées FAQPage)
    ContactFormSection.jsx     pied de page + formulaire de rappel
    ContactModal.jsx           formulaire de devis (modale)
    SectionTitle.jsx           titre de section + picto, centré
    Reveal.jsx                 apparition au défilement
    BackToTop.jsx              retour en haut de page
  data/
    projects.js           portfolio (dont `results`, les chiffres clés)
    offers.js             formules et tarifs
    services.js           contenu des pages de service
    faq.js                questions / réponses
    formOptions.js        listes du formulaire de devis
  lib/
    analytics.js          mesure d'audience sans cookie (désactivée par défaut)
  config.js               URL du site, analytics, lien avis Google
```

### Routes

| URL | Page |
|---|---|
| `/` | Accueil |
| `/creation-site-vitrine` | Service — site vitrine |
| `/creation-site-ecommerce` | Service — boutique en ligne |
| `/creation-application` | Service — application |
| `/a-propos` | À propos |
| `/mentions-legales` | Mentions légales & confidentialité |

Les couleurs de marque sont exposées à la fois en variables CSS
(`--yellow`, `--white`…) et en tokens Tailwind v4 (`bg-brand-yellow`,
`text-brand-ink`…), définis dans `src/index.css` via `@theme`.

### Images

`public/img/` contient les images optimisées réellement servies (WebP, à 2×
la taille d'affichage). Les originaux haute résolution sont conservés dans
`design-sources/`, hors du dossier déployé. **Ne réintroduis jamais un
export 1000×1000 dans `public/`** : c'est ce qui faisait peser la page
1 Mo au lieu de 168 Ko.

### Mesure d'audience

Analytics développé sur mesure, sans service tiers ni abonnement :

- `netlify/functions/track.mjs` reçoit les visites sur `/api/track` et les
  agrège dans **Netlify Blobs** (compteurs journaliers) ; les conversions sont
  stockées une par une pour n'en perdre aucune.
- `netlify/functions/stats.mjs` expose `/api/stats`, protégé par la variable
  d'environnement `ADMIN_KEY`.
- `src/pages/Admin.jsx` affiche le tableau de bord sur `/admin` (page en
  `noindex`).

Sont enregistrés : la page, le domaine du référent et le type d'appareil.
**Aucun cookie, aucune adresse IP, aucun identifiant** — donc aucun bandeau de
consentement à afficher. Les robots sont ignorés via le User-Agent.

Pour tout désactiver : `ANALYTICS.enabled = false` dans `src/config.js`.

Limite connue : les compteurs journaliers sont écrits en lecture-modification-
écriture. À très fort trafic simultané, une visite peut être perdue. Les
conversions, elles, sont écrites individuellement et ne risquent rien.

### Routes techniques

| URL | Rôle |
|---|---|
| `/api/track` | Enregistre une visite ou une conversion |
| `/api/stats` | Statistiques agrégées (nécessite `ADMIN_KEY`) |
| `/admin` | Tableau de bord |

### SEO

`index.html` contient des balises SEO de repli marquées `data-static-seo`,
utiles aux robots qui n'exécutent pas JavaScript. Le composant `Seo` les
retire au montage et pose les bonnes balises pour la page courante — sans
cela, deux `canonical` coexisteraient.

## Formulaires

Les deux formulaires passent par **Netlify Forms**. Pour que Netlify les
détecte, une version statique de chaque formulaire est présente dans
`index.html` (`contact-modal` et `contact-rappel`) : **ne pas les supprimer**.
Les formulaires React envoient ensuite leurs données en POST sur `/`.

Après le premier déploiement, vérifier dans l'interface Netlify
(*Forms*) que les deux formulaires apparaissent, et y activer les
notifications par e-mail.

## À compléter

Par ordre d'impact :

- [x] ~~Tarifs site vitrine (400 €) et boutique (800 €)~~ — faits.
      Reste la formule « Application », volontairement sur devis
      (`src/data/offers.js`).
- [ ] **Résultats clients** — `src/data/projects.js`, champ `results` :
      demander les chiffres à tes clients (demandes de devis, ventes, avis).
      C'est ce qui transforme une capture d'écran en argument de vente.
- [ ] **Mesure d'audience** — définir la variable d'environnement `ADMIN_KEY`
      dans Netlify (Site configuration → Environment variables) pour accéder au
      tableau de bord sur `/admin`. La collecte fonctionne dès le déploiement,
      sans configuration.
- [ ] **Avis Google** — créer une fiche Google Business (gratuit), puis
      coller son lien dans `src/config.js` (`GOOGLE_REVIEWS_URL`) : un bouton
      « Voir mes avis Google » apparaîtra sous les témoignages. C'est la
      preuve sociale la plus crédible, surtout en local.
- [ ] **Mentions légales** — `src/pages/MentionsLegales.jsx` : forme
      juridique, SIREN/SIRET, adresse, TVA, directeur de publication.
      Obligatoire (article 6 de la LCEN).
- [ ] **Page À propos** — `src/pages/APropos.jsx`, constante `parcours` :
      raconter ton histoire. C'est la partie la plus lue de la page.
- [ ] **Stack des projets** — `src/data/projects.js` : compléter `stack` avec
      ce que tu as réellement utilisé.
- [ ] **FAQ** — `src/data/faq.js` : relire les délais et conditions annoncés.
- [ ] **Bandeau de réassurance** — `src/pages/Home.jsx` (`trustPoints`).
- [ ] **Domaine définitif** — remplacer `el-webo.netlify.app` dans
      `src/config.js`, `index.html`, `public/robots.txt` et
      `public/sitemap.xml`.

### Piste non traitée

Le site est une application monopage rendue côté navigateur : le HTML servi
est vide avant l'exécution de JavaScript. Google sait l'interpréter, mais pas
tous les robots (partage LinkedIn, WhatsApp…). Un pré-rendu au build ou un
passage à un framework statique (Astro, Next) réglerait ce point — c'est un
chantier à part entière, pas un réglage.

## Captures du portfolio

Les images de `public/projets/` sont des captures pleine page des sites
livrés ; elles défilent au survol de la carte. Pour les régénérer, refaire
une capture en 1440 px de large, la recadrer à ~2340 px de haut, la
redimensionner à 1000 px de large et l'exporter en WebP.
