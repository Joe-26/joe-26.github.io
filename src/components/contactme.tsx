import Mail from "../assets/email.png";
import Github from "../assets/github.svg";
import Linkedin from "../assets/linkedin.svg";

function ContactMe() {
  return (
    <div className={"flex flex-col py-6 px-16 bg-yellow"}>
      <p className={"flex text-5xl text-blue-navy font-medium"} id="contactme">
        Let's Get in Touch
      </p>
      <p className={"flex"}>
        Thank you for your interest in getting in touch with me. I welcome your
        feedback, questions, and suggestions.
      </p>
      <div className={"flex flex-col py-6"}>
        <div className={"flex py-2 gap-3"}>
          <img src={Linkedin} alt="mailLogo" width="30"></img>
          <a
            href="https://www.linkedin.com/in/josephraj-velpula/"
            target="_blank"
          >
            <p>Follow on LinkedIn</p>
          </a>
        </div>
        <div className={"flex py-2 gap-3"}>
          <img src={Github} alt="mailLogo" width="30"></img>
          <a href="https://github.com/Joe-26?tab=repositories" target="_blank">
            <p>Follow on Github</p>
          </a>
        </div>
        <p className={"py-3"}></p>
        <hr className={"border-gray-400 w-1/5 py-3 content-center"} />
        <div className={"flex py-2 gap-3"}>
          <img src={Mail} alt="mailLogo" width="30"></img>
          <a href="mailto:V.josephraj26@gmail.com" target="_blank"><p>V.josephraj26@gmail.com</p></a>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
