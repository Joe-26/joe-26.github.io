import React from "react";
import { motion } from "motion/react";
import Skills from "./skills/skills";

import photoCollage from "../assets/myPhoto1.jpg";
import instaPat from "../assets/instaPat.jpeg";
import awsSA from "../assets/aws-sa-a.png";
import awsCom from "../assets/aws-com.png";
import awsServer from "../assets/aws-server.png";
import k8s from "../assets/kuber.png";
import terraformCert from "../assets/terraformCert.jpeg";
import containerCert from "../assets/ContainerCert.jpg";
import javaCert from "../assets/JavaCert.jpg";

function aboutme() {
  return (
    <div className="bg-radial-[at_100%_0%] from-indigo-500 to-black to-60% px-4 pt-30 sm:px-52">
      {/* Introduction */}
      <div className="flex flex-col gap-5 sm:flex-row">
        <div className="flex text-2xl font-mono text-center px-2 sm:basis-1/2 sm:text-5xl sm:items-center">
          Full Stack Developer, with a background in Gen AI & Cloud.
          <br />
          <br />
          📍 United States
        </div>
        <div className="flex justify-center sm:basis-1/2">
          <img className="rounded-full w-64 sm:w-full" src={photoCollage}></img>
        </div>
      </div>

      {/* Experience */}
      <div className="flex flex-col mt-10 sm:mt-20 gap-5 font-extralight sm:flex-row">
        <div className="flex font-mono sm:basis-1/4">
          <h2 className="uppercase font-extrabold">Experience</h2>
        </div>
        <div className="flex flex-col gap-4 sm:basis-3/4">
          <div className="flex justify-between items-center border-b-1 border-gray-500">
            <div className="basis-1/2"><strong>Full Stack Developer</strong><br/><em>Audemy, Houston, TX</em></div>
            <div>Sep 2024 - Present</div>
          </div>
          <div className="flex justify-between items-center border-b-1 border-gray-500">
            <div><strong>Full Stack Developer</strong><br/><em>SCG Solutions, East Lansing, MI</em></div>
            <div>Nov 2023 - Sep 2024</div>
          </div>
          <div className="flex justify-between items-center border-b-1 border-gray-500">
            <div className="basis-1/2"><strong>Cloud DevOps Engineer</strong><br/><em>Volkswagen, India</em></div>
            <div>Jun 2020 - Aug 2023</div>
          </div>
        </div>
      </div>

      <Skills></Skills>

      {/* Education */}
      <div className="flex flex-col mt-10 gap-5 font-extralight sm:flex-row">
        <div className="flex font-mono  sm:basis-1/4">
          <h2 className="uppercase font-extrabold">Education</h2>
        </div>
        <div className="sm:basis-3/4">
          <div className="flex justify-between items-center  sm:basis-1/2">
            <div className="basis-1/2">Master of Science in Information Systems<br/><em>Georgia State University, Atlanta, GA</em></div>
            <div>Aug 2023 - Aug 2024</div>
          </div>
        </div>
      </div>

      {/* Achievements */}
      <div className="flex flex-col mt-10 gap-5 font-extralight sm:flex-row">
        <div className="flex font-mono sm:basis-1/4 ">
          <h2 className="uppercase font-extrabold">Achievements</h2>
        </div>
        <div className="flex justify-center sm:justify-start sm:basis-3/4">
          <img className="h-80" src={instaPat}></img>
        </div>
      </div>

      {/* Certifications */}
      <div className="flex flex-col mt-10 gap-5 font-extralight sm:flex-row">
        <div className="flex font-mono sm:basis-1/4 ">
          <h2 className="uppercase font-extrabold">Certifications</h2>
        </div>
        <div className="sm:basis-3/4 overflow-hidden">
          <motion.div
            className="flex gap-2 w-[365%] sm:w-[213%]"
            initial={{ x: "0%" }}
            animate={{ x: "-100%" }}
            transition={{
              repeat: Infinity,
              ease: "linear",
              duration: 15,
              repeatType: "loop",
            }}
          >
            {/* First set */}
            <img className="h-52 w-52 flex-shrink-0" src={awsSA}></img>
            <img className="h-52 w-52 flex-shrink-0" src={awsCom}></img>
            <img className="h-52 w-52 flex-shrink-0" src={awsServer}></img>
            <img className="h-52 w-52 flex-shrink-0" src={k8s}></img>
            <img className="h-52 w-64 flex-shrink-0" src={terraformCert}></img>
            <img className="h-52 w-64 flex-shrink-0" src={containerCert}></img>
            <img className="h-52 w-64 flex-shrink-0" src={javaCert}></img>

            {/* Duplicate set for seamless loop */}
            <img className="h-52 w-52 flex-shrink-0" src={awsSA}></img>
            <img className="h-52 w-52 flex-shrink-0" src={awsCom}></img>
            <img className="h-52 w-52 flex-shrink-0" src={awsServer}></img>
            <img className="h-52 w-52 flex-shrink-0" src={k8s}></img>
            <img className="h-52 w-64 flex-shrink-0" src={terraformCert}></img>
            <img className="h-52 w-64 flex-shrink-0" src={containerCert}></img>
            <img className="h-52 w-64 flex-shrink-0" src={javaCert}></img>


            {/* Duplicate set for seamless loop */}
            <img className="h-52 w-52 flex-shrink-0" src={awsSA}></img>
            <img className="h-52 w-52 flex-shrink-0" src={awsCom}></img>
            <img className="h-52 w-52 flex-shrink-0" src={awsServer}></img>
            <img className="h-52 w-52 flex-shrink-0" src={k8s}></img>
            <img className="h-52 w-64 flex-shrink-0" src={terraformCert}></img>
            <img className="h-52 w-64 flex-shrink-0" src={containerCert}></img>
            <img className="h-52 w-64 flex-shrink-0" src={javaCert}></img>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default aboutme;
