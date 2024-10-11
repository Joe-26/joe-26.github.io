import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav>
      <nav
        className={
          "fixed flex justify-between items-center w-full top-0 z-30 text-lg h-32 bg-white"
        }
      >
        <div className={"flex h-28 w-auto px-6"}>
          <img alt="logo" src={Logo} />
        </div>
        <div className={"flex w-5/6 justify-end gap-10 px-6 text-2xl"}>
          <a
            href="#introduction"
            className="no-underline hover:underline underline-offset-8"
          >
            Introduction
          </a>
          <a
            href="#skills"
            className="no-underline hover:underline underline-offset-8"
          >
            Skills
          </a>
          <a
            href="#eduex"
            className="no-underline hover:underline underline-offset-8"
          >
            Education & Experience
          </a>
          <a
            href="#certification"
            className="no-underline hover:underline underline-offset-8"
          >
            Certifications
          </a>
          <a
            href="#contactme"
            className="no-underline hover:underline underline-offset-8"
          >
            Contact Me
          </a>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
