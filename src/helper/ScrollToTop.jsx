import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa6";

const DEFAULT_BTN_CLS =
  "fixed bottom-8 right-6 z-50 flex items-center justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-600 p-4 hover:scale-110 transition-all duration-300 ease-out text-white";
const SCROLL_THRESHOLD = 50;

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > SCROLL_THRESHOLD);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () =>
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

  if (!isVisible) return null;

  return (
    <button className={DEFAULT_BTN_CLS} onClick={scrollToTop}>
      <FaArrowUp size={20} />
    </button>
  );
};

export default ScrollToTop;
