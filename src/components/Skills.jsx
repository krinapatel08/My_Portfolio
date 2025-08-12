import { skillsData, skillsImage } from "../utils/skills";
import Marquee from "react-fast-marquee";

export default function Skills() {
  return (
    <section
  id="skills"
  className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
>
  {/* Background Blur Accent */}
  <div className="w-[100px] h-[100px] bg-violet-100 rounded-full absolute top-6 left-1/2 -translate-x-1/2 blur-3xl opacity-20" />

  {/* Top Gradient Line */}
  <div className="flex justify-center">
    <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
  </div>

  {/* Section Heading */}
  <div className="flex justify-center my-5 lg:py-8">
    <div className="flex items-center">
      <span className="w-24 h-[2px] bg-[#1a1443]" />
      <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
        Skills
      </span>
      <span className="w-24 h-[2px] bg-[#1a1443]" />
    </div>
  </div>

  {/* Skills Carousel */}
  <div className="my-12">
    <Marquee
      gradient={false}
      speed={80}
      pauseOnHover
      pauseOnClick
      direction="left"
    >
      {skillsData.map((skill, id) => (
        <div
          key={id}
          className="min-w-fit flex flex-col items-center m-3 sm:m-5 group hover:scale-110 transition-transform duration-500 cursor-pointer"
        >
          <div className="w-36 rounded-lg border border-[#1f223c] bg-[#11152c] group-hover:border-violet-500 transition-colors duration-500">
            {/* Inner Gradient Line */}
            <div className="flex justify-center">
              <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
            </div>

            {/* Skill Icon + Label */}
            <div className="flex flex-col items-center gap-3 p-6">
              <img
                src={skillsImage(skill)}
                alt={skill}
                width={40}
                height={40}
                className="h-8 sm:h-10 w-auto rounded-lg"
              />
              <p className="text-white text-sm sm:text-lg">{skill}</p>
            </div>
          </div>
        </div>
      ))}
    </Marquee>
  </div>
</section>

  );
}
