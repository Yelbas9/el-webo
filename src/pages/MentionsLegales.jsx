import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { ANALYTICS } from "../config";

// Informations légales obligatoires (article 6 de la LCEN).
const editeur = {
  raisonSociale: "El Webo",
  statut: "Entreprise individuelle (micro-entreprise)",
  siren: "SIREN 100 579 804 — SIRET 100 579 804 00012",
  adresse: "5 impasse des Pruniers, 33450 Saint-Sulpice-et-Cameyrac, France",
  email: "elwebo.dev@gmail.com",
  directeurPublication: "Ibrahim Yelbas",
  tva: "TVA non applicable, article 293 B du CGI",
};

const Section = ({ id, title, children }) => (
  <section id={id} className="flex flex-col gap-3 scroll-mt-28">
    <h2 className="font-black italic font-[Epilogue,Helvetica] text-black text-[1.5rem] md:text-[2rem] leading-tight">
      {title}
    </h2>
    <div className="flex flex-col gap-3 text-[15px] md:text-[17px] leading-[26px] md:leading-[28px] text-black opacity-90">
      {children}
    </div>
  </section>
);

const MentionsLegales = () => {
  return (
    <div className="w-full bg-[#F7F5F2]">
      <Seo
        title="Mentions légales & confidentialité | El Webo"
        description="Mentions légales, hébergement, propriété intellectuelle et traitement des données personnelles du site El Webo."
        path="/mentions-legales"
      />
      <div className="max-w-[860px] mx-auto px-4 py-12 md:py-20 flex flex-col gap-10 md:gap-14">
        <header className="flex flex-col gap-4">
          <Link
            to="/"
            className="text-[15px] font-semibold text-black hover:text-[#8a7200] transition-colors w-fit"
          >
            ← Retour à l'accueil
          </Link>
          <h1 className="font-black italic font-[Epilogue,Helvetica] text-black text-[2rem] md:text-[3rem] leading-[1.1]">
            Mentions légales & confidentialité
          </h1>
          <p className="text-[15px] md:text-[17px] text-black opacity-80">
            Dernière mise à jour : {new Date().getFullYear()}
          </p>
        </header>

        <Section id="editeur" title="Éditeur du site">
          <ul className="flex flex-col gap-1">
            <li>
              <strong>Raison sociale :</strong> {editeur.raisonSociale}
            </li>
            <li>
              <strong>Forme juridique :</strong> {editeur.statut}
            </li>
            <li>
              <strong>SIREN / SIRET :</strong> {editeur.siren}
            </li>
            <li>
              <strong>Siège social :</strong> {editeur.adresse}
            </li>
            <li>
              <strong>Numéro de TVA :</strong> {editeur.tva}
            </li>
            <li>
              <strong>Directeur de la publication :</strong>{" "}
              {editeur.directeurPublication}
            </li>
            <li>
              <strong>Contact :</strong>{" "}
              <a
                href={`mailto:${editeur.email}`}
                className="underline underline-offset-4 hover:text-[#8a7200] transition-colors"
              >
                {editeur.email}
              </a>
            </li>
          </ul>
        </Section>

        <Section id="hebergeur" title="Hébergement">
          <p>
            Ce site est hébergé par <strong>Netlify, Inc.</strong>, 512 2nd
            Street, Suite 200, San Francisco, CA 94107, États-Unis —{" "}
            <a
              href="https://www.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#8a7200] transition-colors"
            >
              netlify.com
            </a>
            .
          </p>
        </Section>

        <Section id="propriete" title="Propriété intellectuelle">
          <p>
            L'ensemble du contenu de ce site (textes, code, graphismes, logo,
            illustrations et photographies) est la propriété d'El Webo, sauf
            mention contraire. Toute reproduction, représentation ou
            exploitation, totale ou partielle, sans autorisation écrite
            préalable est interdite.
          </p>
          <p>
            Les captures d'écran présentées dans la section « Mes Réalisations »
            illustrent des sites livrés à des clients. Les marques, logos et
            visuels qui y figurent restent la propriété de leurs détenteurs
            respectifs et sont reproduits à titre de référence professionnelle.
          </p>
        </Section>

        <Section id="confidentialite" title="Données personnelles">
          <p>
            <strong>Ce qui est collecté.</strong> Uniquement ce que vous saisissez
            dans les formulaires de contact du site : nom, adresse e-mail, et le
            cas échéant numéro de téléphone et contenu de votre message.
          </p>
          <p>
            <strong>Pourquoi.</strong> Ces données servent exclusivement à
            répondre à votre demande et à établir un devis. Elles ne sont ni
            revendues, ni cédées, ni utilisées à des fins de prospection non
            sollicitée.
          </p>
          <p>
            <strong>Base légale.</strong> Votre consentement, matérialisé par
            l'envoi volontaire du formulaire, ainsi que les mesures
            précontractuelles prises à votre demande.
          </p>
          <p>
            <strong>Traitement et conservation.</strong> Les messages sont
            transmis via le service Netlify Forms et conservés le temps
            nécessaire au traitement de votre demande, puis au maximum trois ans
            après le dernier contact.
          </p>
          <p>
            <strong>Vos droits.</strong> Conformément au RGPD et à la loi
            Informatique et Libertés, vous disposez d'un droit d'accès, de
            rectification, d'effacement, de limitation, d'opposition et de
            portabilité de vos données. Pour l'exercer, écrivez à{" "}
            <a
              href={`mailto:${editeur.email}`}
              className="underline underline-offset-4 hover:text-[#8a7200] transition-colors"
            >
              {editeur.email}
            </a>
            . Vous pouvez également introduire une réclamation auprès de la{" "}
            <a
              href="https://www.cnil.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-[#8a7200] transition-colors"
            >
              CNIL
            </a>
            .
          </p>
        </Section>

        <Section id="cookies" title="Cookies">
          <p>
            Ce site ne dépose <strong>aucun cookie</strong> : ni publicitaire,
            ni de personnalisation. Aucun consentement n'est donc requis à ce
            titre.
          </p>
          {ANALYTICS.enabled ? (
            <p>
              La fréquentation du site est mesurée par un outil développé et
              hébergé sur ce site même. Sont enregistrés uniquement : la page
              consultée, le domaine du site qui vous a amené ici et le type
              d'appareil. Aucun cookie, aucune adresse IP, aucun identifiant :
              vous ne pouvez être ni identifié, ni suivi d'un site à l'autre.
              Aucune donnée n'est transmise à un tiers.
            </p>
          ) : (
            <p>
              Aucun outil de mesure d'audience n'est actuellement actif.
            </p>
          )}
          <p className="text-[14px] opacity-70">
            Note : l'ajout d'un outil déposant des cookies (Google Analytics,
            régies publicitaires, pixels de réseaux sociaux) imposerait la mise
            en place d'un bandeau de consentement et la mise à jour de cette
            section.
          </p>
        </Section>

        <Section id="liens" title="Liens externes">
          <p>
            Ce site contient des liens vers des sites tiers, notamment ceux de
            mes clients et mes réseaux sociaux. El Webo n'exerce aucun contrôle
            sur leur contenu et ne saurait être tenu responsable de leurs
            pratiques.
          </p>
        </Section>

        <div className="pt-2">
          <Link
            to="/"
            className="inline-flex items-center bg-[var(--yellow)] rounded-[20px] px-8 py-4 font-bold text-[#1c1c1c] text-lg hover:bg-[#e6be00] transition-colors duration-200 shadow"
          >
            Retour à l'accueil
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MentionsLegales;
