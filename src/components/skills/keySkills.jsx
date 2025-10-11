import React from "react";
import { motion } from "motion/react";
import javaLogo from "../../assets/java.png";
import pythonLogo from "../../assets/python.png";
import jsLogo from "../../assets/js.png";
import awsLogo from "../../assets/aws.svg";
import reactLogo from "../../assets/react.svg";

function keySkills() {
  const logos = [
    { src: javaLogo, name: "Java" },
    { src: pythonLogo, name: "Python" },
    { src: jsLogo, name: "JavaScript" },
    { src: awsLogo, name: "AWS" },
    { src: reactLogo, name: "React" },
  ];

  return (
    <div className="py-12 bg-black overflow-hidden ">
      <div className="relative">
        <motion.div
          className="flex w-[292%]  sm:w-[81.5%]"
          initial={{ x: "0%" }}
          animate={{ x: "-100%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
            repeatType: "loop",
          }}
        >
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`first-${index}`} className="flex-shrink-0 mx-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-10 object-contain mx-auto"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-10 object-contain mx-auto"
                />
              </div>
            </div>
          ))}

          {/* Duplicate set for seamless loop */}
          {logos.map((logo, index) => (
            <div key={`second-${index}`} className="flex-shrink-0 mx-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 hover:bg-white/20 transition-all duration-300">
                <img
                  src={logo.src}
                  alt={logo.name}
                  className="h-10 w-10 object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

export default keySkills;
