import React from "react";
import { motion } from "motion/react";
import javaLogo from "../../assets/tech-icons/java.png";
import pythonLogo from "../../assets/tech-icons/python.png";
import jsLogo from "../../assets/tech-icons/javascript.png";
import ts from '../../assets/tech-icons/typescript.png';
import awsLogo from "../../assets/aws.svg";
import reactLogo from "../../assets/react.svg";
import mongodb from '../../assets/tech-icons/mongo-db.png';
import postgresql from '../../assets/tech-icons/postgres.png';
import springboot from '../../assets/tech-icons/spring-boot.png';
import django from '../../assets/tech-icons/django.png';
import fastapi from '../../assets/tech-icons/fastapi.png';
import docker from '../../assets/tech-icons/docker.png';
import redis from '../../assets/tech-icons/redis.png';
import azure from '../../assets/tech-icons/azure.png';
import huggingface from '../../assets/tech-icons/hugging-face.png';

function keySkills() {
  const logos = [
    { src: javaLogo, name: "Java" },
    { src: pythonLogo, name: "Python" },
    { src: jsLogo, name: "JavaScript" },
    { src: ts, name: "TypeScript" },
    { src: awsLogo, name: "AWS" },
    { src: azure, name: "azure" },
    { src: reactLogo, name: "React" },
    { src: mongodb, name: "mongodb" },
    { src: postgresql, name: "postgresql" },
    { src: fastapi, name: "fastapi" },
    { src: django, name: "django" },
    { src: springboot, name: "springboot" },
    { src: docker, name: "docker" },
    { src: redis, name: "redis" },
    { src: huggingface, name: "huggingface" },
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
