import React from "react";
import ParticlesBackground from "./particlesBg";

function herosection(props) {
  return (
    <div className="relative h-screen pt-30 bg-radial-[at_0%_0%] from-indigo-500 to-black to-60%">
      <ParticlesBackground />
      <div>👋 Hi, I'm</div>
      <div className="font-bold">{props.name}</div>
    </div>
  );
}

export default herosection;
