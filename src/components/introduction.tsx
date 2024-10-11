import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Email from "../assets/email.png";
import Photo from "../assets/myPhoto1.jpg";

function Introduction() {
  return (
    <div
      className={"flex py-24 px-16 gap-20 bg-yellow place-items-stretch mt-32"}
    >
      <div className={"flex w-1/2"}>
        <p>
          <h1
            className={
              "text-blue-navy text-8xl font-semibold animate-typing overflow-hidden whitespace-nowrap"
            }
            id="introduction"
          >
            Hi, Joseph here!
          </h1>
          <br /> <br />
          <p className={"font-normal text-2xl"}>
            Passionate about innovation and excellence, I am an AWS DevOps
            engineer with over 2 years of experience in cloud infrastructure
            solutions. I bring leadership, automation expertise, and a
            commitment to continuous learning. Certified as an AWS Solutions
            Architect, I am ready to drive cloud technology forward.
          </p>
          <br />
          <div className={"flex gap-6"}>
            <a
              href="https://github.com/Joe-26?tab=repositories"
              target="_blank"
            >
              <img
                alt="githubLogo"
                src={GitHub}
                className="transition hover:-translate-y-1"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/josephraj-velpula/"
              target="_blank"
            >
              <img
                alt="linkedInLogo"
                src={LinkedIn}
                className="transition hover:-translate-y-1"
              ></img>
            </a>
            <a href="mailto:V.josephraj26@gmail.com" target="_blank">
              <img
                alt="emailLogo"
                src={Email}
                className="transition hover:-translate-y-1"
              ></img>
            </a>
            <button className="transition duration-300 bg-black rounded-full px-7 text-yellow hover:bg-yellow hover:text-black hover:ring-2 hover:ring-black">
              <a
                href="https://drive.google.com/file/d/15XEm2QGsdklWp0ES8MXd3DsNPPG8_y69/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </p>
      </div>
      <div className={"flex w-1/2 justify-center"}>
        <div className={"place-self-center"}>
          <img
            alt="developer"
            src={Photo}
            className={"max-w-xl rounded-full"}
          />
        </div>
      </div>
    </div>
  );
}

export default Introduction;
