import NewWindow from "../assets/new-window.svg";
import AudemyLogo from "../assets/audemy_logo.png"; 

function Volunteering() {
  return (
    <div className="py-12 sm:py-14">
      <div className="flex justify-center pb-20">
        <p className={"text-4xl font-bold"} id="certification">
          Volunteering
        </p>
      </div>
      <div className="flex gap-5 px-4">

        <div className="basis-1/5">
            <div >
                <img src={AudemyLogo} alt="Audemy Logo" className="w-36"></img>
            </div>
        </div>
        
        <div className="basis-4/5">
            <div className="text-xl font-bold">Full Stack Developer</div>
            <div className="flex items-center">
                <div>Audemy &nbsp;</div>
                <div><a href="https://audemy.org/" target="_blank"><img src={NewWindow} className="w-4"></img></a></div>
            </div>
            <div>Sep 2024 - Present . Remote</div>
            <div><em>Education</em></div>
            <div>
                I contribute to Audemy's mission of creating accessible educational
                games for visually challenged and blind children. My responsibilities
                include developing and optimizing both frontend and backend systems to
                deliver seamless, user-friendly experiences on the platform. I design
                and implement intuitive user interfaces while collaborating on backend
                infrastructure to ensure game logic functionality, data security, and
                performance. By integrating inclusive design principles and
                cutting-edge technology, I help empower children through engaging and
                accessible learning tools.
            </div>
        </div>

      </div>
    </div>
  );
}

export default Volunteering;
