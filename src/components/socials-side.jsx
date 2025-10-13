import React from 'react'
import gitHubLogo from '../assets/github.svg'
import linkedIn from '../assets/linkedin.svg'

function socialside() {
  return (
    <div className='flex bg-black'>
        <div className='flex flex-col place-items-center gap-10 px-4 fixed left-0 bottom-0 z-30'>
            <a href='https://github.com/Joe-26' target='_blank'><img className='h-10 scale-100 hover:scale-125 transition duration-300' src={gitHubLogo}></img></a>
            <a href='https://www.linkedin.com/in/josephraj-velpula/' target='_blank'><img className='h-10 scale-100 hover:scale-125 transition duration-300' src={linkedIn}></img></a>
            <a href='mailto:V.josephraj26@gmail.com'><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-10 scale-100 hover:scale-125 transition duration-300">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg></a>
            <div className='border h-50'></div>
        </div>
        
    </div>
  )
}

export default socialside