"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import Light from "../assets/Icons/Light Spheres.svg";
import SunLight from "../assets/Icons/Sun light11.svg";

export default function Growth() {
  const earthRef = useRef<HTMLImageElement | null>(null);
  const sunRef = useRef<HTMLImageElement | null>(null);

  useEffect(() => {
    const sunAnimation = gsap.to(sunRef.current, {
      x: "-40%",
      y: "-40%",
      duration: 8,
      ease: "linear",
      repeat: -1,
    });

    const handleMouseEnter = () => {
      sunAnimation.play();
    };

    const handleMouseLeave = () => {
      sunAnimation.reverse();
    };

    if (earthRef.current) {
      earthRef.current.addEventListener("mouseenter", handleMouseEnter);
      earthRef.current.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      // if (earthRef.current) {
      //   earthRef.current.removeEventListener("mouseenter", handleMouseEnter);
      //   earthRef.current.removeEventListener("mouseleave", handleMouseLeave);
      // }
    };
  }, []);

  return (
    <div className=" w-full xl:min-h-[45vh] lg:min-h-[40vh] lg:py-10 xs:py-10   xs:min-h-[50vh] overflow-hidden ">
      <div className="relative">
        <Image
          // ref={earthRef}
          src={Light}
          alt="Earth"
          className="transition-transform duration-300 transform lg:scale-[2vw]  xs:scale-150 "
        />
        <div className="absolute xl:top-[12vw] lg:left-[22vw] xl:left-[24vw] md:top-[7vw] text-[white] xs:top-[-10vw] ">
          <div className="py-20 flex flex-col align-center items-center justify-center xs:w-full xs:max-w-[60vw]lg:m-0 xs:justify-center xs:items-center xs:text-center">
            <div className=" font-Sora align-center items-center justify-center xs:text-[5.5vw] md:text-[3vw] font-semibold text-white">
              Accelerate Growth in
            </div>
            <p className=" font-Sora  xs:text-[6vw] md:text-[3vw] font-semibold  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              Every Way Possible with GainWix.ai{" "}
            </p>
            <p className="  font-Inter fond-bold text-center xs:text-[2.3vw] lg:text-[0.95vw] text-[#908EB5] lg:mt-4 xs:mt-2">
              <p className="xl:w-[45vw] xl:pl-10 text-center lg:w-[47vw]  md:w-[95vw] xs:w-[95vw] xs:text-center">
                Leverage Gainwix.ai as your all-in-one platform to streamline
                your operations and keep
              </p>
              <p className="lg:w-[47vw] md:w-[98vw] md:px-[1vw]  ">
                your valuable data unified. Avoid the pitfalls of juggling
                multiple tools and harness the power of AI-driven <br />
              </p>
              insights to achieve your business objectives efficiently.
            </p>

            <div className="border border-[#2D3154] rounded-full lg:min-w-[30vw] w-auto lg:max-h-[10vh] xs:w-[90%]  justify-between flex flex-row h-auto lg:p-3 xs:p-2 lg:m-5 xs:m-2 items-center">
              <div className="xs:hidden md:block text-[#2D3154] font-Inter font-medium overflow-hidden whitespace-nowrap">
                example@mail.com
              </div>
              <div className="text-[#2D3154] font-Inter font-medium text-ellipsis md:hidden xs:block">
                example@mail.com
              </div>
              <div className="btn btn_primary items-center ">
                <p className="lg:mt-2 md:mt-1 font-Inter font-medium lg:text-[1vw] xs:text-[3vw] md:text-[2vw] xs:h-[1vh]">
                  Book a Demo
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* <Image
          ref={sunRef}
          src={SunLight}
          alt="Sun"
          className="absolute top-[14vw] left-[66vw] rotate-6 "
        /> */}
      </div>
    </div>
  );
}
