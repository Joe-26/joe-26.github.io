import Agile from "../assets/agile.png";
import AWS from "../assets/aws.svg";
import Bitbucket from "../assets/bitbucket.png";
import Bootstrap from "../assets/bootstrap5.png";
import C from "../assets/c.png";
import Cpp from "../assets/c++.svg";
import Css3 from "../assets/css3.png";
import Django from "../assets/django.png";
import Docker from "../assets/docker.svg";
import Git from "../assets/git.png";
import GitHub from "../assets/github.svg";
import HTML from "../assets/html-5.png";
import Java from "../assets/java.png";
import Jira from "../assets/jira.png";
import JavaScript from "../assets/js.png";
import Kubernetes from "../assets/kubernetes.svg";
import Linux from "../assets/linux.png";
import Postgresql from "../assets/postgresql.png";
import PowerBI from "../assets/power-bi-icon.png";
import PowerShell from "../assets/powershell.svg";
import Python from "../assets/python.png";
import React from "../assets/react.svg";
import Sap from "../assets/sap.svg";
import Scrum from "../assets/scrum.png";
import Selenium from "../assets/selenium.svg";
import SQL from "../assets/sql.png";
import Tableau from "../assets/tableau.svg";
import TailwindCss from "../assets/tailwind-css-icon.png";
import Terraform from "../assets/terraform.svg";
import TypeScript from "../assets/typescript.png";
import Windows from "../assets/windows.png";

function Skills() {
  return (
    <div className="flex flex-col justify-center py-12">
        <div className=" flex justify-center text-4xl font-bold pb-12">
            Skills
        </div>
        <div className="text-xl font-medium px-4 py-1">Languages:</div>
      <div className="grid grid-cols-9 p-4">
        <img alt="python" src={Python} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="Python"/>
        <img alt="java" src={Java} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Java"/>
        <img alt="c" src={C} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="C"/>
        <img alt="c++" src={Cpp} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="C++"/>
        <img alt="sql" src={SQL} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="SQL"/>
        <img alt="postgresql" src={Postgresql} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="PostgreSQL"/>
        <img alt="shell" src={PowerShell} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="PowerShell"/>
        </div>
        <div className="text-xl font-medium px-4 py-1">Technologies:</div>
        <div className="grid grid-cols-9 p-4">
        <img alt="aws" src={AWS} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="AWS"/>
        <img alt="selenium" src={Selenium} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Selenium"/>
        <img alt="tableau" src={Tableau} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Tableau"/>
        <img alt="powerbi" src={PowerBI} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="PowerBI"/>
        <img alt="sap" src={Sap} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="SAP S/4HANA"/>
        <img alt="linuxunix" src={Linux} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Linux/Unix"/>
        <img alt="sap" src={Windows} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Windows"/>
        </div>
        <div className="text-xl font-medium px-4 py-1">WebDev Tools:</div>
        <div className="grid grid-cols-9 p-4">
        <img alt="sap" src={HTML} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="HTML"/>
        <img alt="sap" src={Css3} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="CSS"/>
        <img alt="sap" src={TailwindCss} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="TailwindCSS"/>
        <img alt="sap" src={Bootstrap} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Bootstrap"/>
        <img alt="sap" src={JavaScript} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="JavaScript"/>
        <img alt="sap" src={TypeScript} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="TypeScript"/>
        <img alt="sap" src={Django} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="Django"/>
        <img alt="react" src={React} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-spinslow"  title="React"/>
        </div>
        <div className="text-xl font-medium px-4 py-1">DevOps:</div>
        <div className="grid grid-cols-9 p-4">
        <img alt="scrum" src={Scrum} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="Scrum"/>
        <img alt="agile" src={Agile} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Agile"/>
        <img alt="git" src={Git} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Git"/>
        <img alt="github" src={GitHub} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="GitHub"/>
        <img alt="bitbucket" src={Bitbucket} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Bitbucket"/>
        <img alt="jira" src={Jira} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Jira"/>
        <img alt="terraform" src={Terraform} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition" title="Terraform"/>
        <img alt="docker" src={Docker} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-wiggle" title="Docker"/>
        <img alt="kubernetes" src={Kubernetes} width="40" height="40" className="sm:w-16 hover:-translate-y-2 transition animate-spinslow" title="Kubernetes"/>
      </div>
    </div>
  );
}

export default Skills;
