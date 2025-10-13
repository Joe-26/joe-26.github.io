import React from 'react'
import ProjectCard from './projectCard'

function keyProjects() {
  return (
    <div className="py-16 bg-radial-[at_100%_100%] from-rebecca-purple to-black to-60% px-4 sm:px-44">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4 font-FjallaOne">
            Personal Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent work showcasing Generative AI, web development, and DevOps solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="mb-12">
          <ProjectCard />
        </div>

      </div>
    </div>
  )
}

export default keyProjects