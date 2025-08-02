import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="w-full py-7 px-6 md:px-20 bg-[#f7f5f2] flex items-center justify-between font-[Epilogue,Helvetica,sans-serif]">
      {/* Logo / nom */}
      <Link
        to="/"
        className="text-3xl font-black tracking-tight text-[#1c1c1c] select-none italic"
        style={{ fontFamily: "'Epilogue', Helvetica, Arial, sans-serif" }}
      >
        El Webo
      </Link>
      {/* Menu */}
      <ul className="flex gap-10 items-center text-lg">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD300] font-bold"
                : "text-[#1c1c1c] hover:text-[#FFD300] font-semibold transition"
            }
            end
          >
            Accueil
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/services"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD300] font-bold"
                : "text-[#1c1c1c] hover:text-[#FFD300] font-semibold transition"
            }
          >
            Services
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/competences"
            className={({ isActive }) =>
              isActive
                ? "text-[#FFD300] font-bold"
                : "text-[#1c1c1c] hover:text-[#FFD300] font-semibold transition"
            }
          >
            Compétences
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-[#FFD300] text-[#1c1c1c] font-bold px-7 py-2 rounded-[20px] shadow hover:bg-[#ffe066] transition"
                : "border border-[#1c1c1c] text-[#1c1c1c] font-semibold px-7 py-2 rounded-[20px] hover:bg-[#FFD300] hover:text-[#1c1c1c] transition"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
