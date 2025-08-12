import { educations } from "../utils/educations";
import { BsPersonWorkspace } from "react-icons/bs";
import AnimationLottie from "../helper/AnimationLottie";
import GlowCard from "../helper/GlowCard";
import lottieFile from "../assets/lottie/study.json";

export default function Education() {
  return (
    <section
      id="education"
      className="relative z-50 border-t my-12 lg:my-24 border-[#25213b]"
    >
      {/* Top Gradient Line */}
      <div className="flex justify-center">
        <div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-violet-500 to-transparent" />
      </div>

      {/* Section Heading */}
      <div className="flex justify-center my-5 lg:py-8">
        <div className="flex items-center">
          <span className="w-24 h-[2px] bg-[#1a1443]" />
          <span className="bg-[#1a1443] text-white p-2 px-5 text-xl rounded-md">
            Education
          </span>
          <span className="w-24 h-[2px] bg-[#1a1443]" />
        </div>
      </div>

      {/* Content */}
      <div className="py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Lottie Animation */}
          <div className="flex justify-center items-center">
            <div className="w-[90%] max-w-md">
              <AnimationLottie animationPath={lottieFile} />
            </div>
          </div>

          {/* Education Cards */}
          <div className="flex flex-col gap-6">
            {educations.map((education) => (
              <GlowCard key={education.id}>
                <div className="p-4 relative text-white">
                  <div className="flex justify-center">
                    <p className="text-xs sm:text-sm text-[#16f2b3]">
                      {education.duration}
                    </p>
                  </div>
                  <div className="flex items-center gap-x-6 px-3 py-5">
                    <div className="text-violet-500 transition-transform duration-300 hover:scale-125">
                      <BsPersonWorkspace size={36} />
                    </div>
                    <div>
                      <p className="text-base sm:text-xl mb-1 font-medium uppercase">
                        {education.title}
                      </p>
                      <p className="text-sm sm:text-base">
                        {education.institution}
                      </p>
                    </div>
                  </div>
                </div>
              </GlowCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
