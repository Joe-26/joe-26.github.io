import React from "react";
import ParticlesBackground from "./particlesBg";
import PhotoComp from "./photo";

function herosection(props) {
  return (
    <div className="relative h-screen bg-radial-[at_0%_0%] from-rebecca-purple to-black to-60% px-4 sm:px-44">
      <ParticlesBackground />
      <div className="flex flex-col gap-2 sm:flex-row-reverse items-center justify-center h-full z-10">
        {/* Photo Component */}
        <div className="sm:basis-1/2">
          <PhotoComp />
        </div>

        {/* Introduction Section */}
        <div className="flex flex-col gap-2 px-4 sm:basis-1/2 justify-center">
          <div>Hi, I'm</div>
          <div className="font-bold text-5xl uppercase font-FjallaOne sm:text-7xl">
            {props.name}
          </div>
          <div className="font-medium font-mono text-2xl sm:text-3xl">
            &lt; Full Stack AI Engineer /&gt;
          </div>
          <div className="pt-2 sm:text-lg">
            <p>
              AWS Certified Solutions Architect with 5 years of experience in
              designing, developing, and deploying scalable, secureenterprise
              applications across cloud and full-stack environments.
              <br />
              <br />
              Passionate about leveraging Generative AI, DevOps, and cloud
              technologies to deliver resilient, high-performance solutions that
              optimize processes and enhance user experiences.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center text-black pt-4 sm:flex-row sm:justify-start sm:text-lg">
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/file/d/1xEfVIxGMe0OG-bEJ_Y_AtVKOD2lyMmbn/view?usp=sharing"
                className="flex items-center border rounded-full px-6 py-2 bg-white transition-transform duration-200 scale-100 hover:scale-110"
              >
                Resume
              </a>
            </div>
            <div className="flex justify-center">
              <a
                href="mailto:V.josephraj26@gmail.com"
                className="flex border rounded-full items-center px-6 py-2 gap-1 bg-white transition-transform duration-200 scale-100 hover:scale-110"
              >
                V.josephraj26@gmail.com
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default herosection;
