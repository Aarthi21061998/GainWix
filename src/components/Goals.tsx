import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import EmptyBg from "../assets/Icons/emptybento.svg";
import bentoBg from "../assets/Icons/bento bg.svg";
import bentoBackGround from "../assets/Icons/bentoBackGround.svg";

import light from "../assets/Icons/Lights.svg";
export default function Goals() {
  const goalImageRef = useRef(null);
  const strategyImageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (goalImageRef.current && strategyImageRef.current) {
      gsap
        .timeline({
          scrollTrigger: {
            trigger: goalImageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        })
        .to(goalImageRef.current, { opacity: 0, duration: 0 })
        .to(strategyImageRef.current, { opacity: 3, duration: 1 });
    }
  }, []);

  return (
    <div className="text-white bg-[#060A22] w-full h-full">
      <div className="xs:hidden md:block w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10">
        <h1 className="text-[3vw] font-medium text-[#FFFFFF] font-Sora text-center ">
          <p className="md:pl-10">Set new benchmarks and hit Goals</p>
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
            effortlessly with our AI
          </span>
        </h1>
      </div>
      <div className="xs:block md:hidden w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10 mt-[100vw]">
        <h1 className="text-[6vw] font-bold text-[#FFFFFF] font-Sora text-center ">
          <p className="md:pl-10">
            Set new benchmarks And <br /> Hit Goals{" "}
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              Effortlessly{" "}
            </span>
          </p>
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
            with GainWix.AI
          </span>
        </h1>
      </div>

      <div className=" xs:hidden md:block relative w-full h-[100vh] flex  ">
        <div
          className="absolute w-full h-full flex justify-center"
          ref={goalImageRef}
        >
          <Image src={EmptyBg} alt="goal" className="w-[70vw] h-[70vh]" />
        </div>

        <div
          className="w-full h-full flex justify-center opacity-0"
          ref={strategyImageRef}
        >
          <Image src={bentoBg} alt="" className=" opacity-0" />

          <div className="absolute   md:top-0">
            <Image
              src={bentoBackGround}
              alt=""
              className="md:w-[60vw] xs:w-[90vw]"
            />
          </div>
        </div>
      </div>
      <div className=" xs:block md:hidden relative w-full h-[40vh] flex  ">
        <div className="absolute mx-5  md:top-0">
          <Image
            src={bentoBackGround}
            alt=""
            className="md:w-[60vw] xs:w-[90vw]"
          />
        </div>
      </div>
    </div>
  );
}
