import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Goal from "../assets/Icons/Goal.svg";
import goals3 from "../assets/Icons/goals3.svg";
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
      <div className="w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10">
        <h1 className="text-[3vw] font-medium text-[#FFFFFF] font-Sora text-center">
          <p className="pl-10">Set new benchmarks and hit Goals</p>
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
            effortlessly with our AI
          </span>
        </h1>
      </div>

      <div className="relative w-full h-[50vh] flex justify-center">
        <div
          className="absolute w-full h-full flex justify-center"
          ref={goalImageRef}
        >
          <Image src={Goal} alt="goal" className="w-[50vw] h-[30vh]" />
        </div>

        <div
          className="absolute w-full h-full flex justify-center opacity-0"
          ref={strategyImageRef}
        >
          <Image src={goals3} alt="strategy" className="w-[100vw] h-[70vh]" />
        </div>
      </div>
    </div>
  );
}
