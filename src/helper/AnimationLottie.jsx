import Lottie from "lottie-react";

export default function AnimationLottie({ animationPath }) {
  return (
    <div>
      <Lottie animationData={animationPath} loop={true} />
    </div>
  );
}
