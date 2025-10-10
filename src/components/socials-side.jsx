import React from 'react'
import gitHubLogo from '../assets/github.svg'
import linkedIn from '../assets/linkedin.svg'

function socialside() {
  return (
    <div className='flex bg-black'>
        <div className='flex flex-col place-items-center gap-10 px-4 fixed left-0 bottom-0'>
            <img className='h-8 scale-100 hover:scale-125' src={gitHubLogo}></img>
            <img className='h-8 scale-100 hover:scale-125' src={linkedIn}></img>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-8 scale-100 hover:scale-125">
                <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
                <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <div className='border h-50'></div>
        </div>
        
    </div>
  )
}

export default socialside