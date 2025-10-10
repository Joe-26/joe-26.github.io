import React from "react";
import ParticlesBackground from "./particlesBg";
import PhotoComp from "./photo";

function herosection(props) {
  return (
    <div className="relative h-screen pt-30 bg-radial-[at_0%_0%] from-indigo-500 to-black to-60% px-4">
      <ParticlesBackground />
      <div className="flex flex-col z-10">
        <PhotoComp />
        <div className="flex flex-col px-4 pt-6">
          <div>Hi, I'm</div>
          <div className="font-bold text-5xl uppercase">{props.name}</div>
          <div className="font-medium font-mono text-2xl">&lt; Full Stack Developer /&gt;</div>
          <div className="pt-2">
            <p>
              A Cloud DevOps Engineer with a passion for building scalable, 
              efficient cloud infrastructure. With over two years of experience 
              in AWS, Python, and DevOps tools like Terraform and Docker, I specialize 
              in automating workflows and optimizing cloud environments for top performance.
            </p>
          </div>
          <div className="flex flex-col gap-4 justify-center text-black pt-4">
            <div className="flex justify-center">
              <a href="#" className="flex items-center border rounded-full px-4 py-1 bg-white transition-transform duration-200 scale-100 hover:scale-110">Resume</a>
            </div>
            <div className="flex justify-center">
              <a href="#" className="flex border rounded-full items-center px-4 py-1 gap-1 bg-white transition-transform duration-200 scale-100 hover:scale-110">
              V.josephraj26@gmail.com
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6" />
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
