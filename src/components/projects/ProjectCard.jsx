import * as React from "react";
import { BsGithub } from "react-icons/bs";

function ProjectCard({ project }) {
  return (
    <div className="from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] w-full hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 transition-all duration-500">
      
      {/* Top Gradient Divider */}
      <div className="flex flex-row">
        <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
        <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
      </div>

      {/* Header with traffic lights, title and GitHub icon */}
      <div className="px-4 lg:px-8 py-3 lg:py-5 relative flex items-center gap-x-3 justify-between">
        <div className="flex flex-row items-center space-x-3">
          <div className="flex flex-row space-x-1 lg:space-x-2">
            <span className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-red-400"></span>
            <span className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-orange-400"></span>
            <span className="h-2 w-2 lg:h-3 lg:w-3 rounded-full bg-green-200"></span>
          </div>
          <p className="text-[#16f2b3] text-base lg:text-xl font-semibold">{project.name}</p>
        </div>

        {/* GitHub Link Icon */}
        {project.code && (
          <a
            href={project.code}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 hover:text-pink-600 transition-colors duration-300"
            aria-label={`GitHub Repository for ${project.name}`}
          >
            <BsGithub size={24} />
          </a>
        )}
      </div>

      {/* Code block */}
      <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
        <pre className="font-mono text-xs md:text-sm lg:text-base whitespace-pre-wrap leading-relaxed">
          <span className="text-pink-500">const</span> <span className="text-white">project</span> <span className="text-pink-500">=</span> <span className="text-gray-400">{'{'}</span>
          {"\n"}  <span className="text-white">name:</span> <span className="text-gray-400">'</span><span className="text-amber-300">{project.name}</span><span className="text-gray-400">',</span>
          {"\n"}  <span className="text-white">tools:</span> <span className="text-gray-400">[</span>
            {project.tools.map((tool, i) => (
              <React.Fragment key={i}>
                <span className="text-amber-300">'{tool}'</span>
                {i !== project.tools.length - 1 && <span className="text-gray-400">, </span>}
              </React.Fragment>
            ))}
          <span className="text-gray-400">],</span>
          {"\n"}  <span className="text-white">myRole:</span> <span className="text-orange-400">'{project.role}'</span><span className="text-gray-400">,</span>
          {"\n"}  <span className="text-white">description:</span> <span className="text-cyan-400">'{project.description}'</span><span className="text-gray-400">,</span>
          {"\n"}<span className="text-gray-400">{'};'}</span>
        </pre>
      </div>
    </div>
  );
}

export default ProjectCard;
