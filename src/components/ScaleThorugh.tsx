import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import Image from "next/image";

import Scale from "../assets/Icons/Scale.svg";

const ScaleThrough = () => {
  const lottieContainerRef = useRef<HTMLDivElement | null>(null);
  const animationRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (lottieContainerRef.current) {
      animationRef.current = lottie.loadAnimation({
        container: lottieContainerRef.current,
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: "https://lottie.host/4a43524e-2c28-4fd8-bde2-a10477aec437/7rwEjNuLai.json", // Ensure the path is correct
      });

      // Stop animation at the first frame initially
      animationRef.current.addEventListener("DOMLoaded", () => {
        animationRef.current?.goToAndStop(0, true);
      });
    }

    const handleScroll = () => {
      if (!animationRef.current) return;

      const container = lottieContainerRef.current;
      if (!container) return;

      const containerTop = container.getBoundingClientRect().top;
      const containerHeight = container.offsetHeight;
      const windowHeight = window.innerHeight;

      const start = windowHeight * 0.5;
      const end = start + containerHeight;

      const scrollProgress = Math.min(
        Math.max((start - containerTop) / containerHeight, 0),
        1
      );

      const totalFrames = animationRef.current.totalFrames;
      const frameToShow = Math.floor(scrollProgress * totalFrames);

      animationRef.current.goToAndStop(frameToShow, true);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      animationRef.current?.destroy();
    };
  }, []);

  return (
    <div style={{}} className="flex items-center justify-center relative ">
      <Image src={Scale} alt="" style={{ opacity: "0.75" }} />

      <div className="h-[50vh] xl:w-[100vw]  flex items-center justify-center absolute">
        <div
          ref={lottieContainerRef}
          style={{
            width: "50vw",
            height: "100vh",
            
          }}
        ></div>

        <div className="w-[40vw]  flex flex-col justify-center text-white">
          <h1 className="text-[2.7vw] font-Sora font-semibold px-20 pb-5">
            Scale Through Automation
          </h1>
          <p className="lg-[10vw]  text-start pl-20 font-Inter font-medium text-[#908EB5] text-[1vw] leading-8">
            Effortlessly scale your marketing efforts with Automation,
            optimizing performance and expanding your reach without compromising
            quality or efficiency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ScaleThrough;
