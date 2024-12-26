"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";

import Light from "../assets/Icons/Light Spheres.svg";
import SunLight from "../assets/Icons/Sun light11.svg";

export default function Growth() {
  const earthRef = useRef<HTMLImageElement | null>(null);
  const sunRef = useRef<HTMLImageElement | null>(null);
  const [emailChange, setEmailChange] = useState("");

  const handleEmailChange = (e: any) => {
    setEmailChange(e.target.value);
  };

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
    <div className="2xl:w-full xl:w-[!100vw] xl:min-h-[45vh] md:min-h-[55vh] lg:min-h-[40vh] lg:py-10 xs:pt-10  xs:auto   xs:min-h-[70vh] overflow-hidden 2xl:py-40 ">
      <div className="relative">
        <Image
          // ref={earthRef}
          src={Light}
          alt="Earth"
          className="transition-transform duration-300 transform  xl:scale-125 lg:scale-[2vw]  xs:scale-150 "
        />
        <div className="absolute xl:top-[12vw]  md:top-[7vw] text-[white] xs:top-[-5vw] xs:left-[20vw] ">
          <div className="py-20 flex flex-col align-center items-center justify-center xs:w-full xs:max-w-[60vw] xs:justify-center xs:items-center xs:text-center xl:mt-[4vw]">
            <div className=" font-Sora align-center items-center justify-center xs:text-[5.5vw] md:text-[3.5vw] font-semibold text-white">
              Accelerate Growth in
            </div>
            <p className=" font-Sora  xs:text-[6vw] md:text-[3vw] font-semibold  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              Every Way Possible with GainWix.ai{" "}
            </p>
            <span className=" xs:hidden  lg:block font-Inter fond-semibold xs:text-[3vw] lg:text-[1.55vw] xl:text-[1vw] xs:px-5  text-[#908EB5] lg:mt-4 lg:mx-0 xs:mt-2">
              <p className="2xl:w-[56vw] xl:w-[48vw] 2xl:pl-[3vw] xl:pl-10  lg:pl-0 lg:w-[55vw]  md:w-[95vw] xs:w-[95vw] ">
                Leverage Gainwix.ai as your all-in-one platform to streamline
                your operations and keep
              </p>
              <p className=" 2xl:w-[60vw] xl:w-[55vw] lg:w-[50vw] md:w-[98vw] md:px-[1vw]  ">
                your valuable data unified. Avoid the pitfalls of juggling
                multiple tools and harness the power of AI-driven <br />
              </p>
              insights to achieve your business objectives efficiently.
            </span>
            <p className="  xs:w-[95vw] xs:block md:block  lg:hidden md:w-[105] w-full font-Inter  font-bold xs:text-[4.5vw] xl:text-[1.2vw]  lg:text-[2vw] md:text-[3vw] xs:px-5  text-[#908EB5] lg:mt-4 xs:mt-2">
              Leverage Gainwix.ai as your all-in-one platform to streamline your
              operations and keep your valuable data unified. Avoid the pitfalls
              of juggling multiple tools and harness the power of AI-driven{" "}
              insights to achieve your business objectives efficiently.
            </p>
            <div className="border border-[#2D3154] bg-[#0c0c2f] rounded-full lg:w-[32vw]  w-auto lg:max-h-[10vh] xs:w-[95vw] sm:w-full  justify-between flex flex-row h-auto lg:p-3 xs:p-2 md:p-4 lg:m-5 xs:m-2 items-center  xl:mb-[20vw] ">
              <input
                className="xs:hidden md:block text-[white] bg-[#0c0c2f] rounded-full  outline-none font-Inter font-medium overflow-hidden whitespace-nowrap"
                value={emailChange} // Bind state to input value
                onChange={handleEmailChange}
                placeholder="example@mail.com"
              />
              <div className="text-[#2D3154] font-Inter font-medium text-ellipsis md:hidden xs:block ">
                example@mail.com
              </div>
              <div className="btn btn_primary items-center z-50 ">
                <p className="2xl:mt-[7px] xs:mt-[7px] lg:mt-2 md:mt-1 font-Inter font-medium lg:text-[1vw] xs:text-[3vw] md:text-[2vw] ">
                  <a
                    href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                    target="_blank"
                    rel="noreferrer"
                    className="2xl:mt-[-0.7vw]"
                  >
                    {" "}
                    Book a Demo
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <Image
          ref={sunRef}
          src={SunLight}
          alt="Sun"
          className="absolute  xs:hidden xl:block top-[14vw] left-[70vw] rotate-6 "
        />
      </div>
    </div>
  );
}
