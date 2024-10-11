import Developer from "../assets/developer.jpg";
import C from "../assets/c.png";
import Cpp from "../assets/c++.svg";
import Docker from "../assets/docker.svg";
import Kubernetes from "../assets/kubernetes.svg";
import AWS from "../assets/aws.svg";
import Shell from "../assets/powershell.svg";
import Python from "../assets/python.png";
import Bitbucket from "../assets/bitbucket.png";
import Jira from "../assets/jira.svg";
import Sap from "../assets/sap.svg";
import Terraform from "../assets/terraform.svg";
import SQL from "../assets/sql.png";
import React from "../assets/react.svg";
import Selenium from "../assets/selenium.svg";

function Skills() {
  return (
    <div className={"flex flex-row py-16 px-16 bg-yellow gap-20"}>
      <div className={"basis-1/2"}>
        <img alt="developer" src={Developer} className={"rounded-3xl"} />
      </div>
      <div className={"basis-1/2"}>
        <div className={"flex justify-center py-16"}>
          <p className={"text-7xl text-blue-navy font-medium"} id="skills">
            Skills
          </p>
        </div>
        <div className={"flex justify-center"}>
          <div className="grid grid-cols-5 gap-10 px-4">
            <img alt="aws" src={AWS} width="100" height="100" />
            <img alt="terraform" src={Terraform} width="100" height="100" />
            <img alt="docker" src={Docker} width="100" height="100" />
            <img alt="kubernetes" src={Kubernetes} width="100" height="100" />
            <img alt="c" src={C} width="100" height="100" />
            <img alt="c++" src={Cpp} width="100" height="100" />
            <img alt="shell" src={Shell} width="100" height="100" />
            <img alt="python" src={Python} width="100" height="100" />
            <img alt="selenium" src={Selenium} width="100" height="100" />

            <img alt="bitbucket" src={Bitbucket} width="100" height="100" />
            <img alt="jira" src={Jira} width="100" height="100" />

            <img alt="sql" src={SQL} width="100" height="100" />
            <img alt="react" src={React} width="100" height="100" />

            <img alt="sap" src={Sap} width="100" height="100" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
