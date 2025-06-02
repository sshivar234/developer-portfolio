"use client";

import dynamic from "next/dynamic";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

const AnimationLottie = ({ animationPath, width }) => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationPath,
    style: {
      width: width || '95%', // Use the provided width or default to '95%'
    }
  };

  return (
    <Lottie {...defaultOptions} />
  );
};

export default AnimationLottie;
