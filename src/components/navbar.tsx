import { useState } from "react";
import Menu from "../assets/menu.svg";
import Close from "../assets/close.svg";
import Logo from "../assets/logo.png";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuClass, setMenuClass] = useState("-top-60");

  const clickMenu = () => {
    console.log("Clicked!");
    setMenuOpen(!menuOpen);

    if (!menuOpen) {
      setMenuClass("top-16");
    } else {
      setMenuClass("-top-60");
    }
  };

  return (
    <nav className="fixed top-0 w-full left-0 z-50 bg-white shadow-xl sm:flex sm:justify-between sm:items-center">
      <div className="flex justify-between items-center px-4 sm:px-6">
        <span>
          <img src={Logo} alt="Logo" className="h-16 sm:h-24"></img>
        </span>
        <span>
          <img
            src={menuOpen ? Close : Menu}
            alt="menuToggle"
            onClick={clickMenu}
            className="h-12 sm:hidden"
          ></img>
        </span>
      </div>

      <div
        className={`absolute ${menuClass} bg-white w-full p-4 transition-all ease-in-out duration-700 z-40 sm:top-0 sm:h-24 sm:flex sm:items-center sm:w-auto sm:right-0 sm:px-6`}
      >
        <div className="flex flex-col sm:flex-row sm:gap-6">
          <a className="text-xl no-underline cursor-pointer hover:underline underline-offset-8 py-1">
            Introduction
          </a>
          <a className="text-xl no-underline cursor-pointer hover:underline underline-offset-8 py-1">
            Skills
          </a>
          <a className="text-xl no-underline cursor-pointer hover:underline underline-offset-8 py-1">
            Education & Experience
          </a>
          <a className="text-xl no-underline cursor-pointer hover:underline underline-offset-8 py-1">
            Certifications
          </a>
          <a className="text-xl no-underline cursor-pointer hover:underline underline-offset-8 py-1">
            Contact Me
          </a>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
