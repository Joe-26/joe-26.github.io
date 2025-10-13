import React from "react";
import profilePhoto from "../assets/myPhoto5.png";
import springboot from "../assets/tech-icons/spring-boot.png";
import fastapi from "../assets/tech-icons/fastapi.png";
import huggingface from "../assets/tech-icons/hugging-face.png";
import awsLogo from "../assets/aws.svg";
import reactLogo from "../assets/react.svg";

function photoComp() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <img className="h-96 sm:h-[34rem]" src={profilePhoto}></img>

        {/* AWS Logo */}
        <img
          className="absolute top-8 left-15 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-14 sm:-top-10 sm:h-20 animate-[bounce_6s_ease-in-out_infinite]"
          src={awsLogo}
        ></img>

        {/* Springboot Logo */}
        <img
          className="absolute top-10 right-8 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-14 sm:h-20 animate-[bounce_9s_ease-in-out_infinite]"
          src={springboot}
        ></img>

        {/* React Logo */}
        <img
          className="absolute top-45 -left-7 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-14 sm:top-36 sm:h-20 animate-[bounce_5s_ease-in-out_infinite]"
          src={reactLogo}
        ></img>

        {/* Hugging Face Logo */}
        <img
          className="absolute top-55 -right-1 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-14 sm:top-70 sm:h-20 animate-[bounce_4s_ease-in-out_infinite]"
          src={huggingface}
        ></img>

        {/* FastAPI Logo */}
        <img
          className="absolute bottom-0 left-12 transform -translate-x-1/2 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-14 sm:h-20 animate-[bounce_7s_ease-in-out_infinite]"
          src={fastapi}
        ></img>
      </div>
    </div>
  );
}

export default photoComp;
