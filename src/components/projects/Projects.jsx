import { projectsData } from "../../utils/projects-data";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div id="projects" className="relative z-50 my-12 lg:my-24">
      
      <div className="flex justify-center my-5 lg:py-8">
  <div className="flex items-center gap-4">
    <span className="w-24 h-[2px] bg-[#1a1443]" />
    <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
      PROJECTS
    </span>
    <span className="w-24 h-[2px] bg-[#1a1443]" />
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
