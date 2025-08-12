import { projectsData } from "../../utils/projects-data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      
      {/* Section heading with gradient glow effect */}
      <div className="sticky top-10 z-10">
        <div className="relative flex items-center">
          <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
          <span className="bg-[#1a1443] w-fit text-white px-5 py-3 text-xl rounded-md z-20">
            PROJECTS
          </span>
          <span className="flex-1 h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      {/* Cards layout with staggered sticky */}
      <div className="pt-24">
        <div className="flex flex-col gap-6">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky w-full mx-auto max-w-2xl"
              style={{ top: `${10 + index * 5}rem` }} // stagger stickiness
            >
              <div className="transition-all duration-500 hover:scale-[1.02] hover:shadow-lg hover:shadow-pink-500/20 rounded-lg">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
