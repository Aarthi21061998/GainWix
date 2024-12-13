"use client";
import { pricing, PricingListTypes } from "@constants/home";
import Image from "next/image";
import React, { useState } from "react";

// import starter from "../Icons/GroupStarter.svg";
import starter from "../assets/Icons/GroupStarter.svg";
import growth from "../assets/Icons/growth.svg";
import magnum from "../assets/Icons/meganum.svg";
import { useKeenSlider } from "keen-slider/react";

// Define possible pricing types
type PlansTypes = "Monthly" | "Yearly";

export default function PlanCard() {
  const [selectedPrice, setSelectedPrice] = useState<PlansTypes>("Monthly");

  const PlansCard = ({ plan }: { plan: PlansTypes }) => {
    return (
      <button
        className={`md:w-[10vw] xs:w-[35vw] md:px-[2vw] md:py-[0.6vw] xs:px-[5vw] xs:py-[3vw] md:rounded-[2vw] xs:rounded-[18vw] xs:text-[4vw] md:text-[0.95vw] font-semibold text-center transition-colors ease-linear duration-300  ${
          selectedPrice === plan
            ? "text-[#F6EDFF] bg-[#4A2DAA]"
            : "bg-transparent text-[#2B2E4F]"
        }`}
        onClick={() => {
          setSelectedPrice(plan);
        }}
      >
        {plan}
      </button>
    );
  };

  return (
    <div className="from-[#2D3154] via-[#080724] to-[#2D3154] bg-gradient-to-r">
      <div className="p-[2vw]">
        <div className="flex flex-col items-center justify-center pb-[2vw] relative">
          <div className="w-fit relative">
            <div className="flex flex-col items-center xs:mt-[20vw] lg:mt-0">
              <div className="w-fit flex items-center justify-center xs:px-[6vw] xs:py-[4vw] lg:px-[0.6vw] lg:py-[0.6vw] bg-[#0C0B24] md:rounded-[2vw] xs:rounded-[18vw]">
                <PlansCard plan={"Monthly"} />
                <PlansCard plan={"Yearly"} />
              </div>
              <div className="xs:mt-[7vw] lg:mt-[2vw] from-[#0ACD95] via-[#0ACD95] to-[#05674B] bg-gradient-to-r rounded-full px-2  flex justify-center items-center">
                <p className="xs:p-[4vw] lg:p-[0.85vw] font-Inter font-bold  xs:text-[3.5vw] md:text-[1vw] text-white leading-2">
                  🎉 Get 2 months free with annual subscription
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="relative w-full h-fit flex   md:flex-row justify-center mt-10  xs:justify-center xs:items-center md:align-center md:items-center md:px-10 lg:py-10">
        {pricing?.map((p: PricingListTypes) => {
          const isGrowthPlan = p.title === "Growth";

          console.log("object", p[selectedPrice.toLowerCase()]);

          return (
            <div
              key={p.title}
              className={`min-w-[15vw] lg:h-[70vh] md:h-[50vh] xs:w-[90vw] md:max-w-[35vh] flex justify-center items-center h-auto lg:max-w-[22vw] xs:rounded-[3vw] lg:rounded-[1.375vw] p-[0.25vw] border border-[#616BC1] relative  ${
                isGrowthPlan ? "z-10" : "z-10"
              } ${
                p.title === "Starter"
                  ? "hover:border-[4px] hover:border-[#6940F2]  "
                  : p.title === "Growth"
                  ? "hover:border-[4px] hover:border-[#3A69E3] mt-[-5vw] !w-[70vw]  "
                  : p.title === "Magnum"
                  ? "hover:border-[4px] hover:border-[#09CC94]"
                  : "border border-[#6940F2]"
              }`}
            >
              <div
                className={`absolute lg:-top-[7vw] lg:left-[5vw] xs:top-[-18vw] ${
                  p.title === "Starter" ? "" : ""
                }`}
              >
                {p.title === "Starter" ? (
                  <Image
                    src={starter}
                    alt="s"
                    className="lg:w-[11vw] xs:w-[40vw]"
                  />
                ) : p.title === "Growth" ? (
                  <Image src={growth} alt="s" className="w-[11vw]" />
                ) : p.title === "Magnum" ? (
                  <Image src={magnum} alt="s" className="w-[11vw]" />
                ) : null}
              </div>
              <div className="w-full h-full rounded-[1.2vw] md:px-[1vw] md:py-[1.2vw] xs:py-[5vw] xs:px-[3vw] ">
                <h3
                  className={`md:text-[1.2vw] font-medium text-[white] font-inter xs:text-[5vw] rounded-full flex justify-center w-full max-w-[50%] items-center m-auto py-2 xs:mt-[14vw] lg:mt-4 ${
                    p.title === "Starter"
                      ? "border border-[#6940F2]"
                      : p.title === "Growth"
                      ? "border border-[#3A69E3]"
                      : p.title === "Magnum"
                      ? "border border-[#09CC94]"
                      : "border border-[#6940F2]"
                  }`}
                >
                  {p.title}
                </h3>

                <div className="mt-[0.7vw] items-center w-full flex justify-center xs:mt-[7vw]">
                  <span className="md:text-[2vw]  xs:text-[9vw] xs:font-extrabold font-bold text-[white] font-Inter">
                    {p.custom
                      ? "Custom"
                      : p[selectedPrice.toLowerCase()]?.price}
                  </span>
                  {!p.custom && (
                    <span className="font-medium text-[white] xs:text-[3vw]  lg:text-[1.05vw] xs:mt-[4vw] lg:mt-0 lg:pt-0 font-Inter pl-2">
                      / {selectedPrice === "Monthly" ? "Month" : "Yearly"}
                    </span>
                  )}
                </div>

                <div className="flex xs:mt-5 lg:mt-0 flex-row font-medium font-Inter text-white pt-[1vw] md:text-[1vw] xs:text-[4vw]  w-full items-center">
                  <Image
                    src={p[selectedPrice.toLowerCase()]?.tick}
                    alt="icon"
                    className="lg:w-[3vw] md:w-[20px] xs:w-[25px]"
                  />
                  <span>Business Verification</span>

                  <Image
                    src={p[selectedPrice.toLowerCase()]?.tick2}
                    alt="icon"
                    className="ml-4 lg:w-[1vw] md:w-[20px] xs:w-[16px]"
                  />
                </div>

                <div className="xs:text-[4vw]  lg:my-0 xs:my-[7vw] w-full items-center flex flex-row font-Inter font-medium text-[white] pt-[0.5vw] pb-[1.5vw] md:text-[1vw]">
                  <Image
                    src={p[selectedPrice.toLowerCase()]?.tick1}
                    alt="icon"
                    className="lg:w-[3vw] md:w-[18px] xs:w-[25px]"
                  />
                  <span>Green Tick</span>

                  <Image
                    src={p[selectedPrice.toLowerCase()]?.tick3}
                    alt="icon"
                    className="ml-[6vw] lg:w-[1vw] md:w-[18px] xs:w-[16px]"
                  />
                </div>

                <p className="w-[100%] h-[5vh] font-Inter font-medium md:text-[1.3vw] xs:text-[3.5vw] lg:text-[0.789vw] text-[#908eb5] mt-[2vw]">
                  {p.content}
                </p>
                <div className="h-[10vh] flex items-center gap-5 xs:py-[20vw] lg:py-0 ">
                  <button className="getButton get_button">Get Started</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
