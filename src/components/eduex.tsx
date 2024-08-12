import PCCOE from "../assets/pccoe.png";
import SPPU from "../assets/sppu.png";
import GSU from "../assets/RCB.png";
import VW from "../assets/vwlogo.svg";

function EduEx() {
  return (
    <div className={"flex flex-row py-16 px-16 gap-10 bg-yellow"}>
      <div className={"basis-1/2"}>
        <div className={"flex justify-center py-6"}>
          <p className={"text-7xl"} id="eduex">
            EDUCATION
          </p>
        </div>

        <div className={"flex flex-row gap-4 justify-items-center"}>
          <div className={"basis-1/4"}>
            <div className={"grid justify-items-center"}>
              <img src={GSU} alt="GSU Logo" />
            </div>
          </div>

          <div className={"basis-3/4"}>
            <p className={"text-2xl font-bold"}>
              Georgia State University - J. Mack Robinson College of Business
            </p>
            <p>Masters in Information Systems, Digital Innovation</p>
            <p>Aug 2023 - Jul 2024</p>
            <p>Grade: 3.97</p>
          </div>
        </div>
        <br />

        <div className={"flex flex-row gap-4 justify-items-center"}>
          <div className={"basis-1/4"}>
            <div className={"grid justify-items-center"}>
              <img src={SPPU} alt="PCCOE Logo" className={"w-24"} />
            </div>
          </div>

          <div className={"basis-3/4 "}>
            <p className={"text-2xl font-bold"}>
              Savitribai Phule Pune University
            </p>
            <p>Bachelors in Electronics & Telecommunication Engineering</p>
            <p>Jun 2017 - Apr 2021</p>
            <p>Grade: 8.62</p>
          </div>
        </div>
      </div>

      <div className={"basis-1/2"}>
        <div className={"flex justify-center py-6"}>
          <p className={"text-7xl"}>EXPERIENCE</p>
        </div>

        <div className={"flex flex-row gap-4 justify-items-center"}>
          <div className={"basis-1/4"}>
            <div className={"grid justify-items-center"}>
              <img src={GSU} alt="GSU Logo" />
            </div>
          </div>

          <div className={"basis-3/4"}>
            <p className={"text-2xl font-bold"}>Graduate Research Assistant</p>
            <p>
              Graduate State University - J. Mack Robinson College of Business
            </p>
            <p>Aug 2023 - Present</p>
            <p>Atlanta, Georgia, United States</p>
          </div>
        </div>
        <br />
        <div className={"flex flex-row gap-4 justify-items-center"}>
          <div className={"basis-1/4"}>
            <div className={"grid justify-items-center"}>
              <img src={VW} alt="VW Logo" className={"w-24"} />
            </div>
          </div>

          <div className={"basis-3/4 "}>
            <p className={"text-2xl font-bold"}>AWS Cloud DevOps Engineer</p>
            <p>Volkswagen Group Technology Solutions India</p>
            <p>Full-time . 2 yrs 1 mo</p>
            <p>Pune, Maharashtra, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EduEx;
