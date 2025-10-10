import React from "react";

function navbar(props) {
  return (
    <div className="fixed top-5 left-1/2 -translate-x-1/2 w-[90%] z-10">
      <div className="flex justify-between rounded-full px-6 py-2 sm:px-12 bg-white/40 backdrop-blur-sm text-white">
        {/* Left Section */}
        <div>
          <div className="font-glitch font-extrabold text-3xl">
            <a href="#">{props.logo}</a>
          </div>
        </div>
        {/* Right Section */}
        <div className="flex items-center gap-4">
          <a href="#" class="group transition-all duration-300">
            Contact
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
          <a href="#" class="group transition-all duration-300">
            Resume
            <span class="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-white"></span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default navbar;
