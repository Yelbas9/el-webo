import sendIcon from "/send.webp";

const socialLinks = [
  {
    href: "https://www.instagram.com/el.webo.dev/",
    icon: "/instagram.webp",
    alt: "Instagram",
  },
  {
    href: "https://www.tiktok.com/@elwebo.dev",
    icon: "/tiktok.webp",
    alt: "TikTok",
  },
  {
    href: "https://github.com/Yelbas9",
    icon: "/github.webp",
    alt: "GitHub",
  },
  {
    href: "https://x.com/EL_WEBO_DEV",
    icon: "/twitter.webp",
    alt: "Twitter",
  },
  {
    href: "mailto:elwebo.dev@gmail.com?subject=Contact%20depuis%20le%20site%20web&body=Bonjour%20El%20Webo%2C%0A",
    icon: "/gmail.webp",
    alt: "Gmail",
  },
];

const ContactFormSection = () => {
  return (
    <footer className="w-full bg-[#1c1c1c] pt-12 pb-6 px-3 md:px-8 lg:px-0">
      <section
        id="contact"
        className="
          max-w-[1280px] mx-auto flex flex-col md:flex-row gap-10 md:gap-20 xl:gap-40
          items-stretch md:items-start
        "
      >
        {/* Partie gauche */}
        <div className="flex-1 flex flex-col gap-8 justify-center max-w-[640px] mx-auto md:mx-0">
          <h2 className="font-black text-[2rem] md:text-[32px] leading-[1.1] text-white font-[Epilogue,Helvetica] text-center md:text-left">
            Travaillons ensemble !
          </h2>
          <p className="font-[Epilogue,Helvetica] text-[1rem] md:text-[17px] leading-[1.6] text-white text-center md:text-left">
            Laisse-moi tes coordonnées et je te recontacte au plus vite pour en
            discuter !
            <br />
            Tu peux aussi me retrouver sur les réseaux ou m’écrire directement
            par mail.
          </p>
          <nav className="flex gap-5 md:gap-6 justify-center md:justify-start flex-wrap">
            {socialLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                target="_blank"
                rel={
                  link.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={link.alt}
                className="transition-transform hover:scale-110"
              >
                <img
                  src={link.icon}
                  alt={link.alt}
                  className="w-8 h-8 md:w-10 md:h-10 object-contain filter invert brightness-200 transition"
                />
              </a>
            ))}
          </nav>
        </div>
        {/* Formulaire Netlify */}
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          className="
            flex-1 flex flex-col gap-4 md:gap-6
            max-w-[520px] mx-auto md:mx-0
            w-full
            items-center md:items-end
            pt-4 md:pt-0
          "
        >
          {/* Champ caché Netlify */}
          <input type="hidden" name="form-name" value="contact" />
          <input
            id="name"
            name="name"
            type="text"
            className="px-5 py-3 md:px-6 md:py-4 bg-[#f3f3f3] rounded-md w-full text-black text-[1rem] md:text-[17px] focus:outline-none"
            placeholder="Nom"
            required
          />
          <input
            id="email"
            name="email"
            type="email"
            className="px-5 py-3 md:px-6 md:py-4 bg-[#f3f3f3] rounded-md w-full text-black text-[1rem] md:text-[17px] focus:outline-none"
            placeholder="Email"
            required
          />
          {/* Ligne bouton + icône (séparés mais alignés) */}
          <div className="flex items-center w-full gap-3 md:gap-4 mt-2 md:mt-5">
            <button
              type="submit"
              className="bg-[#f3f3f3] text-black font-bold text-lg md:text-2xl rounded-[40px] px-7 md:px-12 h-[52px] md:h-[68px] flex items-center justify-center hover:bg-[#b6b5b5] transition-colors cursor-pointer w-full md:w-auto"
            >
              Envoyer
            </button>
            <img
              src={sendIcon}
              alt="Envoyer"
              className="w-9 h-9 md:w-12 md:h-12 object-contain"
              draggable={false}
              style={{
                userSelect: "none",
              }}
            />
          </div>
        </form>
      </section>
      {/* Copyright / info bas de page */}
      <div className="w-full text-center mt-8 text-xs text-white font-[Epilogue,Helvetica]">
        &copy; {new Date().getFullYear()} El Webo. Tous droits réservés.
      </div>
    </footer>
  );
};

export default ContactFormSection;
