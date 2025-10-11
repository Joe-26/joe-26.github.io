import React from "react";

function projectCard() {
  const projects = [
    {
      id: 1,
      title: "Cloud Infrastructure Automation",
      description:
        "Automated AWS infrastructure deployment using Terraform and CI/CD pipelines.",
      image:
        "https://via.placeholder.com/400x250/1f2937/ffffff?text=Cloud+Project",
      githubUrl: "https://github.com/yourusername/cloud-automation",
    },
    {
      id: 2,
      title: "Full Stack Web Application",
      description:
        "React-based web app with Node.js backend and MongoDB database integration.",
      image: "https://via.placeholder.com/400x250/374151/ffffff?text=Web+App",
      githubUrl: "https://github.com/yourusername/fullstack-app",
    },
    {
      id: 3,
      title: "DevOps Monitoring Dashboard",
      description:
        "Real-time monitoring dashboard built with Python and Docker containerization.",
      image: "https://via.placeholder.com/400x250/4b5563/ffffff?text=Dashboard",
      githubUrl: "https://github.com/yourusername/monitoring-dashboard",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {projects.map((project) => (
        <div
          key={project.id}
          className="bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
        >
          {/* Project Image */}
          <div className="relative overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
            />
          </div>

          {/* Card Content */}
          <div className="p-6">
            {/* Project Title */}
            <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
              {project.title}
            </h3>

            {/* Project Description */}
            <p className="text-gray-300 text-sm mb-4 line-clamp-2">
              {project.description}
            </p>

            {/* GitHub Button */}
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-lg font-medium hover:bg-gray-100 transition-colors duration-200"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
              </svg>
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export default projectCard;
