import GitHub from "../assets/github.svg";
import LinkedIn from "../assets/linkedin.svg";
import Email from "../assets/email.svg";
import Photo from "../assets/myPhoto1.jpg";
import Wave from "../assets/wave.png";
import ScrollArrow from "../assets/scroll_arrow.svg";

function Introduction() {
  return (
    <div className="sm:h-screen sm:relative">
      <div className="flex-col gap-2 mt-16 xl:mt-24 xl:flex xl:flex-row xl:items-center">
        {/* Introduction Flex Box */}
        <div className="px-4 sm:py-20">
          <br /> <br />
          <div className="text-5xl font-semibold animate-typing  whitespace-nowrap flex sm:text-7xl">
            Hi&nbsp;<img src={Wave} className="h-14 animate-wigglemore z-0 sm:h-20" />
          </div>
          <div className="text-5xl font-semibold animate-typing  whitespace-nowrap flex sm:text-7xl">
            Joseph here!
          </div>
          <br />
          <p className="font-normal sm:text-lg">
          A Cloud DevOps Engineer with a passion for building scalable, efficient cloud infrastructure. 
          With over two years of experience in AWS, Python, and DevOps tools like Terraform and Docker, I specialize in automating workflows and optimizing cloud environments for top performance.
          <br /><br />Explore my portfolio to see how I streamline deployment processes, improve system reliability, and drive innovation in the cloud.
          </p>
          {/* Social Box */}
          <div className="hidden sm:flex sm:gap-6 sm:items-center sm:py-4">
            <a
              href="https://github.com/Joe-26?tab=repositories"
              target="_blank"
            >
              <img
                alt="githubLogo"
                src={GitHub}
                className="h-9 transition hover:-translate-y-1 sm:h-14"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/josephraj-velpula/"
              target="_blank"
            >
              <img
                alt="linkedInLogo"
                src={LinkedIn}
                className="h-9 transition hover:-translate-y-1 sm:h-14"
              ></img>
            </a>
            <a href="mailto:V.josephraj26@gmail.com" target="_blank">
              <img
                alt="emailLogo"
                src={Email}
                className="h-9 transition hover:-translate-y-1 sm:h-16"
              ></img>
            </a>
            <button className="transition duration-300 bg-black rounded-full px-7 py-1 text-honeydew hover:ring-4 hover:ring-black sm:py-3">
              <a
                href="https://drive.google.com/file/d/15XEm2QGsdklWp0ES8MXd3DsNPPG8_y69/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>

        {/* Profile Photo Flex Box */}
        <div className="flex flex-col p-4">
          <div className="flex justify-center h-auto">
            <img
              alt="developer"
              src={Photo}
              className="w-auto rounded-full sm:w-auto sm:h-auto "
            />
          </div>

          {/* Social Box */}
          <div className="flex justify-center gap-4 items-center py-4 sm:hidden">
            <a
              href="https://github.com/Joe-26?tab=repositories"
              target="_blank"
            >
              <img
                alt="githubLogo"
                src={GitHub}
                className="h-14 transition hover:-translate-y-1"
              ></img>
            </a>
            <a
              href="https://www.linkedin.com/in/josephraj-velpula/"
              target="_blank"
            >
              <img
                alt="linkedInLogo"
                src={LinkedIn}
                className="h-14 transition hover:-translate-y-1"
              ></img>
            </a>
            <a href="mailto:V.josephraj26@gmail.com" target="_blank">
              <img
                alt="emailLogo"
                src={Email}
                className="h-14 transition hover:-translate-y-1"
              ></img>
            </a>
            <button className="transition duration-300 bg-black rounded-full px-7 py-2 text-honeydew hover:bg-yellow hover:ring-2 hover:ring-black">
              <a
                href="https://drive.google.com/file/d/15XEm2QGsdklWp0ES8MXd3DsNPPG8_y69/view?usp=drive_link"
                target="_blank"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
      </div>

      {/* Scroll Section */}
      <div className="sm:absolute bottom-10 w-full flex justify-center pb-12">
        <img
          className="animate-bounce w-12"
          src={ScrollArrow}
          alt="scroll_arrow"
        />
      </div>
    </div>
  );
}

export default Introduction;
