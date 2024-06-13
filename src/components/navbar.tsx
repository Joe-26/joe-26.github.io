import Logo from "../assets/logo.png";

function NavBar() {
  return (
    <nav>
      <nav
        className={
          "flex justify-between items-center w-full top-0 py-4 z-30 text-lg"
        }
      >
        <div className={"flex h-28 w-auto px-6"}>
          <img alt="logo" src={Logo} />
        </div>
        <div className={"flex w-5/6 justify-end gap-10 px-6 sm:"}>
          <a href="#introduction">Introduction</a>
          <a href="#skills">Skills</a>
          <a href="#eduex">Education & Experience</a>
          <a href="#certification">Certifications</a>
          <a href="#contactme">Contact Me</a>
        </div>
      </nav>
    </nav>
  );
}

export default NavBar;
