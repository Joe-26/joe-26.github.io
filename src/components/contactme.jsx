import React from 'react'

import gitHubLogo from '../assets/github.svg';
import linkedIn from '../assets/linkedin.svg';

function contactme() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 px-4 sm:px-44">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-white mb-2 capitalize sm:text-6xl">Let's get in touch!</h1>
        <p className="text-gray-400 text-lg sm:text-xl">I’m here for collaborations & job opportunities! 💥</p>

        {/* Email */}
        <div className="flex justify-center">
          <a 
            href="mailto:V.josephraj26@gmail.com"
            className="flex justify-center border rounded-full items-center px-6 py-2 mt-5 gap-1 bg-white  transition-transform duration-300 scale-100 hover:scale-110"
          >
            <p className='text-black text-lg'>V.josephraj26@gmail.com</p>
            <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6 text-black"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M16.5 8.25V6a2.25 2.25 0 0 0-2.25-2.25H6A2.25 2.25 0 0 0 3.75 6v8.25A2.25 2.25 0 0 0 6 16.5h2.25m8.25-8.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-7.5A2.25 2.25 0 0 1 8.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 0 0-2.25 2.25v6"
            />
          </svg></a>
        </div>

        {/* Socials */}
        <div className="flex justify-center gap-4 mt-5">
          <a href="https://www.linkedin.com/in/josephraj-velpula/" target='_blank'><img className="w-14 h-14 scale-100 hover:scale-125 transition duration-300" src={linkedIn}></img></a>
          <a href="https://github.com/Joe-26" target='_blank'><img className="w-14 h-14 scale-100 hover:scale-125 transition duration-300" src={gitHubLogo}></img></a>
        </div>
      </div>
    </div>
  )
}

export default contactme