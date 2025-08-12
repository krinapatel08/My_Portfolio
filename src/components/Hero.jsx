import personalData from "../utils/personal-data";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";

export default function Hero() {
  const socialLinks = [
    { Icon: BsGithub, url: personalData.github },
    { Icon: BsLinkedin, url: personalData.linkedIn },
    { Icon: FaFacebook, url: personalData.facebook },
    { Icon: FaTwitterSquare, url: personalData.twitter },
  ];

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative z-50 py-16">
      <div className="grid grid-cols-1 items-start lg:grid-cols-2 lg:gap-12 gap-y-8">
        
        {/* Left Side */}
        <div className="order-2 lg:order-1 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:pt-10">
          <h1 className="text-3xl font-bold leading-10 text-white md:font-extrabold lg:text-[2.6rem] lg:leading-[3.5rem]">
            Hello, <br />
            This is <span className="text-pink-500">{personalData.name}</span>
            {`, I'm a Professional `}
            <span className="text-[#16f2b3]">{personalData.designation}</span>.
          </h1>

          {/* Social Links */}
          <div className="my-12 flex items-center gap-5">
            {socialLinks.map(({ Icon, url }, i) => (
              <a
                key={i}
                href={url}
                target="_blank"
                rel="noreferrer"
                className="transition-all text-pink-500 hover:scale-125 duration-300"
              >
                {Icon && <Icon size={30} />}
              </a>
            ))}
          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={scrollToContact}
              className="px-3 text-xs md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-pink-500 rounded-full text-white md:text-sm font-medium uppercase tracking-wider flex items-center gap-1 hover:gap-3 transition-all duration-300"
            >
              <span>Contact me</span>
              <RiContactsFill size={16} />
            </button>

            <a
              href={personalData.resume}
              download
              className="flex items-center gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-xs md:text-sm font-medium uppercase tracking-wider text-white transition-all duration-200 ease-out"
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </a>
          </div>
        </div>

        {/* Right Side */}
        <div className="order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37]">
          <div className="flex">
            <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-[1px] w-full bg-gradient-to-r from-violet-600 to-transparent"></div>
          </div>

          <div className="px-4 lg:px-8 py-5 flex space-x-2">
            <div className="h-3 w-3 rounded-full bg-red-400"></div>
            <div className="h-3 w-3 rounded-full bg-orange-400"></div>
            <div className="h-3 w-3 rounded-full bg-green-200"></div>
          </div>

          <div className="overflow-hidden border-t-[2px] border-indigo-900 px-4 lg:px-8 py-4 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{"{"}</span>
              </div>
              <div><span className="ml-8 mr-2 text-white">name:</span><span className="text-amber-300">'Krina Patel'</span>,</div>
              <div><span className="ml-8 mr-2 text-white">skills:</span><span className="text-amber-300">['React', 'Tailwind', 'Vite', 'JavaScript']</span>,</div>
              <div><span className="ml-8 mr-2 text-white">hardWorker:</span><span className="text-orange-400">true</span>,</div>
              <div><span className="ml-8 mr-2 text-white">quickLearner:</span><span className="text-orange-400">true</span>,</div>
              <div><span className="ml-8 mr-2 text-white">problemSolver:</span><span className="text-orange-400">true</span></div>
              <div><span className="text-gray-400">{"}"}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}
