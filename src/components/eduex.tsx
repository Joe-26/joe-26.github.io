import SPPU from "../assets/sppu.png";
import GSU from "../assets/RCB.png";
import VW from "../assets/vwlogo.svg";
function EduEx() {
  return (
    <div className="flex flex-col justify-center xl:py-12 xl:flex-row">
      {/* Education Section */}
      <div className="py-12">
        <div className="flex justify-center pb-20">
          <p className="text-4xl font-bold" id="eduex">
            Education
          </p>
        </div>

        <div className="flex flex-row gap-4 px-4">
          <div className="basis-1/4">
            <div className="grid">
              <img src={GSU} alt="GSU Logo" />
            </div>
          </div>

          <div className="basis-3/4">
            <p className="text-xl font-bold">
              Georgia State University - J. Mack Robinson College of Business
            </p>
            <p>Masters in Information Systems, Digital Innovation</p>
            <p>Aug 2023 - Jul 2024</p>
            <p>Grade: 3.97 / 4.0</p>
          </div>
        </div>

        <br />

        <div className={"flex flex-row gap-4 justify-items-center px-4"}>
          <div className={"basis-1/4"}>
            <div className={"grid justify-items-center"}>
              <img src={SPPU} alt="PCCOE Logo" className={"w-24"} />
            </div>
          </div>

          <div className={"basis-3/4 "}>
            <p className={"text-xl font-bold"}>
              Savitribai Phule Pune University
            </p>
            <p>Bachelors in Electronics & Telecommunication Engineering</p>
            <p>Jun 2017 - Apr 2021</p>
            <p>Grade: 8.62 / 10.0</p>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="py-12">
        <div className={"flex justify-center pb-20"}>
          <p className={"text-4xl font-bold"}>Experience</p>
        </div>

        <div className={"flex flex-row gap-4 justify-items-center px-4"}>
          <div className={"flex basis-1/4 justify-center items-center"}>
            <div className={"grid justify-items-center bg-indigo-700 rounded-md px-4 py-2"}>
              <img src='https://scgscorp.com/images/scgslogo.png' alt="SCGS Logo" className="w-24" />
            </div>
          </div>

          <div className={"basis-3/4 "}>
            <p className={"text-xl font-bold"}>Software Engineer</p>
            <p>SCG Solutions</p>
            <p>May 2024 - Present . Full-time</p>
            <p>East Lansing, MI, United Sates</p>
          </div>
        </div>

        <br /><br />

        <div className={"flex flex-row gap-4 justify-items-center px-4"}>
          <div className={"flex basis-1/4 justify-center"}>
            <div className={"grid justify-items-center"}>
              <img src={GSU} alt="GSU Logo" />
            </div>
          </div>

          <div className={"basis-3/4"}>
            <p className={"text-xl font-bold"}>Graduate Research Assistant</p>
            <p>
              Graduate State University - J. Mack Robinson College of Business
            </p>
            <p>Aug 2023 - Aug 2024</p>
            <p>Atlanta, GA, United States</p>
          </div>
        </div>

        <br /><br />

        <div className={"flex flex-row gap-4 justify-items-center px-4"}>
          <div className={"flex basis-1/4 items-center justify-center"}>
            <div className={"grid justify-items-center"}>
              <img src={VW} alt="VW Logo" className={"w-24"} />
            </div>
          </div>

          <div className={"basis-3/4 "}>
            <p className={"text-xl font-bold"}>AWS Cloud DevOps Engineer</p>
            <p>Volkswagen Group Technology Solutions India</p>
            <p>Aug 2021 - Aug 2023 . Full-time . 2 yrs 1 mo</p>
            <p>Pune, MH, India</p>
          </div>
        </div>
        
      </div>
    </div>
  );
}

export default EduEx;
