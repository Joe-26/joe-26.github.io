import React from "react";

function navbar(props) {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] sm:w-[75%] z-10 font-FjallaOne">
      <div className="flex justify-between border-[0.2px] border-gray-500 rounded-full px-6 py-4 sm:px-12 bg-white/10 backdrop-blur text-white">
        {/* Left Section */}
        <div>
          <div className="font-glitch font-extrabold text-3xl sm:text-4xl">
            <a href="/">{props.logo}</a>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-4 sm:text-xl sm:gap-6">
          <a href="about-me" class="group transition-all duration-300">
            About Me
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="contact-me" class="group transition-all duration-300">
            Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="https://drive.google.com/file/d/1xEfVIxGMe0OG-bEJ_Y_AtVKOD2lyMmbn/view?usp=sharing" target="_blank" class="group transition-all duration-300">
            Resume
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
