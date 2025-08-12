import { CgGitFork } from "react-icons/cg";
import { IoStar } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="relative border-t bg-[#0d1224] border-[#353951] text-white">
      {/* Top Gradient Line */}
      <div className="absolute top-0 left-1/4 h-[1px] w-1/2 bg-gradient-to-r from-transparent via-violet-500 to-transparent" />

      <div className="mx-auto px-6 sm:px-12 py-6 lg:py-10 max-w-[92rem] flex flex-col md:flex-row items-center justify-between gap-4 relative">
        <p className="text-sm text-center md:text-left">
          © Developer Portfolio by{" "}
          <a
            href="https://www.linkedin.com/in/krinap08/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#16f2b3] hover:underline"
          >
            Krina Patel
          </a>
        </p>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/krinapatel08/my-portfolio"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
          >
            <IoStar />
            <span>Star</span>
          </a>
          <a
            href="https://github.com/krinapatel08/my-portfolio/fork"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 uppercase hover:text-[#16f2b3]"
          >
            <CgGitFork />
            <span>Fork</span>
          </a>
        </div>
      </div>
    </footer>
  );
}
