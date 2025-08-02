const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 py-8 mt-16 font-[Poppins]">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#4C4C4C]">
        <div>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">El Webo</span> – Tous droits réservés
        </div>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#FEC400] transition">
            Mentions légales
          </a>
          <a href="#" className="hover:text-[#FEC400] transition">
            Politique de confidentialité
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
