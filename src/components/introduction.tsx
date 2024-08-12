import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Email from "../assets/email.png";
import Photo from "../assets/myPhoto1.jpg";

function Introduction() {
  return (
    <div className={"flex py-24 px-16 gap-20 bg-yellow place-items-stretch"}>
      <div className={"flex w-1/2"}>
        <p>
          <p
            className={"text-blue-navy text-8xl font-semibold"}
            id="introduction"
          >
            Hi, I'm Joseph!
          </p>
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
              <img alt="githubLogo" src={GitHub}></img>
            </a>
            <a
              href="https://www.linkedin.com/in/josephraj-velpula/"
              target="_blank"
            >
              <img alt="linkedInLogo" src={LinkedIn}></img>
            </a>
            <a href="mailto:V.josephraj26@gmail.com" target="_blank">
              <img alt="emailLogo" src={Email}></img>
            </a>
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
