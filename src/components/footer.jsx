import React from 'react'

function footer(props) {
  return (
    <div className="flex justify-center relative bg-black px-4 py-5 w-full bottom-0">
      <div className="flex-col text-center text-gray-400">
        <div className="font-extrabold text-xl font-glitch">{props.logo}</div>
        <div>Made with ❤️ by Josephraj Velpula</div>
      </div>
    </div>
  )
}

export default footer