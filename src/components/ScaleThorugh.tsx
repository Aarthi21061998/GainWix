import React, { useEffect, useRef } from "react";
import lottie, { AnimationItem } from "lottie-web";
import Image from "next/image";
import Responsive2 from "../assets/Icons/responsive2.svg";

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
    <div
      style={{}}
      className="flex items-center justify-center relative  xs:h-[70vh] md:h-auto"
    >
      <Image
        src={Scale}
        alt=""
        style={{ opacity: "0.75" }}
        className="xs:hidden  md:hidden  xl:block"
      />

      <div className="xs:hidden md:block  xl:block  md:-mt-[10vw] lg:mt-[40vw] xl:mt-0 lg:h-[70vh] xl:h-[50vh] xl:left-[9vw] xl:w-[90vw] md:flex-row  flex items-center justify-center absolute">
        <div
          className="xl:block lg:hidden md:hidden"
          ref={lottieContainerRef}
          style={{
            width: "45vw",
            height: "100vh",
            marginTop: "-14vw",
          }}
        ></div>
        <div className="">
          <Image src={Responsive2} alt="" className=" blend-screen md:block lg:block xl:hidden lg:w-[50vw]" />
        </div>

        <div className="lg:w-[40vw]  flex flex-col justify-center text-white mt-[-35vw] ml-[40vw]">
          <h1 className="text-[2.7vw] font-Sora font-semibold px-20 pb-5">
            Scale Through Automation
          </h1>
          <p className="lg-[10vw]  text-start pl-20 font-Inter font-medium text-[#908EB5] lg:text-lg xl:text-[1vw] leading-8">
            Effortlessly scale your marketing efforts with Automation,
            optimizing performance and expanding your reach without compromising
            quality or efficiency.
          </p>
        </div>
      </div>
      {/* <div className="xs:hidden md:block lg:hidden  md:-mt-[10vw] h-[50vh] xl:w-[100vw] md:flex-row  flex items-center justify-center absolute">
        <div
          ref={lottieContainerRef}
          className="md:hidden"
          style={{
            width: "50vw",
            height: "100vh",
            marginTop: "-14vw",
          }}
        ></div>
        <div className="">
          <Image src={Responsive2} alt="" className=" blend-screen" />
        </div>

        <div className="  flex flex-col justify-center text-white mt-[-35vw] ml-[50vw]">
          <h1 className="text-[2.7vw] font-Sora font-semibold px-20 pb-5">
            Scale Through Automation
          </h1>
          <p className="md-w[10vw]  text-start pl-20 font-Inter font-medium text-[#908EB5] text-[2vw] leading-8">
            Effortlessly scale your marketing efforts with Automation,
            optimizing performance and expanding your reach without compromising
            quality or efficiency.
          </p>
        </div>
      </div> */}
      <div className="xs:block md:hidden   flex items-center justify-center absolute">
        <div className=" flex flex-col justify-center text-white pl-2 mt-[35vw]">
          <h1 className="text-[5vw] font-semibold pb-5 font-Sora">
            Scale Through Automation
          </h1>
          <p className="w-[90%] font-Inter font-semibold text-[#908EB5] text-[3.8vw] leading-6">
            Effortlessly scale your marketing efforts with Automation,
            optimizing performance and expanding your reach without compromising
            quality or efficiency.
          </p>
          <div className="">
            <Image src={Responsive2} alt="" className=" blend-screen" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleThrough;
