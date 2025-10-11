import React from 'react'
import ProjectCard from './projectCard'

function keyProjects() {
  return (
    <div className="py-16 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white mb-4">
            Personal Projects
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Explore some of my recent work showcasing cloud infrastructure, web development, and DevOps solutions
          </p>
        </div>

        {/* Project Cards */}
        <div className="mb-12">
          <ProjectCard />
        </div>

        {/* Show More Button */}
        <div className="text-center">
          <a 
            href="#" 
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-3 rounded-lg"
          >
            Show More Projects
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default keyProjects