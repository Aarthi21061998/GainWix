"use client";
import { useEffect } from "react";
import Lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

import Strategy from "../assets/Icons/Strategy.svg";
import SegmentAnimation from "../assets/Icons/Segment Animation.svg";
import SegmentsAnimations from "./SegmentsAnimations";

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <div className="flex flex-col xl:flex-row items-center px-10 ">
        {/* Text Section */}

        {/* Image and Animations Section */}
        <div className="w-full   flex justify-center relative">
          <Image src={Strategy} alt="Background" className="w-full h-auto" />

          <div className=" absolute left-[1vh] lg:w-[100%]  h-[70vh] flex flex-row  justify-center text-white mb-10 xl:mb-0 ">
            <div className="w-[50%] flex flex-col mt-[30vh] pl-[15vw] ">
              <h1 className="text-3xl font-Sora font-semibold mb-5">
                Segmentation AI
              </h1>
              <p className="text-lg font-Inter font-medium text-[#908EB5] leading-8">
                Accurately segment your audience using AI to deliver
                personalized messages that resonate, driving higher engagement
                and conversion rates.
              </p>
            </div>
            <div className="scroll-container1 overflow-hidden  w-[50vw] ">
              <div className="segment-animation-container relative">
                <div className="mt-20">
                  <Image
                    src={SegmentAnimation}
                    alt="Marketing Animation"
                    className=" blend-screen absolute top-[3vw] "
                  />
                  <div className=" absolute w-[26vw]  top-[5vw] left-[11vw]">
                    <SegmentsAnimations />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
