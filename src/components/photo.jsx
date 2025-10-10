import React from "react";
import profilePhoto from "../assets/myPhoto2.png";
import javaLogo from "../assets/java.png";
import pythonLogo from "../assets/python.png";
import jsLogo from "../assets/js.png";
import awsLogo from "../assets/aws.svg";
import reactLogo from "../assets/react.svg";

function photoComp() {
  return (
    <div className="flex justify-center">
      <div className="relative">
        <img className="h-56" src={profilePhoto}></img>

        {/* Java Logo - Top Left */}
        <img
          className="absolute top-2 left-7 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-10 animate-[bounce_6s_ease-in-out_infinite]"
          src={awsLogo}
        ></img>

        {/* Python Logo */}
        <img
          className="absolute top-10 right-2 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-10 animate-[bounce_9s_ease-in-out_infinite]"
          src={javaLogo}
        ></img>

        {/* JS Logo */}
        <img
          className="absolute top-20 -left-7 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-10 animate-[bounce_5s_ease-in-out_infinite]"
          src={reactLogo}
        ></img>

        {/* AWS Logo */}
        <img
          className="absolute top-36 -right-1 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-10 animate-[bounce_4s_ease-in-out_infinite]"
          src={jsLogo}
        ></img>

        {/* React Logo */}
        <img
          className="absolute -bottom-2 left-1 transform -translate-x-1/2 rounded-full bg-gray-300/10 backdrop-blur-sm p-2 h-10 animate-[bounce_7s_ease-in-out_infinite]"
          src={pythonLogo}
        ></img>
      </div>
    </div>
  );
}

export default photoComp;
