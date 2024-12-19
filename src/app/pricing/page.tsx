"use client";
import PricingCard from "@components/PricingCard";
import Calculator from "@components/Calculator";

import Growth from "@components/Growth";
import { cardList, CardListType, PricingCardList } from "@constants/home";
import Image from "next/image";
import PlanCard from "@components/PlanCard";
import DigitalMarketing from "@components/DigitalMarketing";
import BrandScroll from "@components/BrandScroll";

import PricingBackground from "../../assets/Icons/pricing.svg";

export default function PricingPage() {
  return (
    <div>
      <div className="w-full h-auto bg-[#060A22] ">
        <div className="relative flex flex-col align-center items-center justify-center xs:min-h-[78vh] md:min-h-auto ">
          <Image src={PricingBackground} alt="" />
          <div className=" xs:hidden md:block  xl:block absolute  md:top-[25vw] xl:top-[10vw] lg:top-[20vw] flex flex-col text-center ">
            <div className="  xs:text-[3.1vw] md:text-[3.2vw] font-bold text-white">
              Get Started with Zero Setup Fee
            </div>
            <p className="xs:text-[3vw] md:text-[3.2vw] text-center font-bold font-sora from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              & Affordable Pricing
            </p>
            <span className="xs:text-[2.5vw] md:text-[2vw]  text-center  font-semibold text-[#616874] md:pt-5 xs:pt-2  font-Inter">
              First 1,000 service conversations per month for free*
            </span>
          </div>
          <div className=" xs:block md:hidden absolute top-[28vw] flex flex-col xs:text-center mt-5 ">
            <div className="  xs:text-[7vw] md:text-[3.2vw] font-extrabold text-white">
              Get Started with Zero <br /> Setup Fee
            </div>
            <p className=" xs:text-[7vw] md:text-[3.2vw] font-extrabold font-raleway from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              & Affordable Pricing
            </p>
            <span className="xs:text-[4vw] md:text-[2vw] font-semibold text-[#908eb5] md:pt-5 xs:pt-2 xs:px-3  font-Inter">
              First 1,000 service conversations per month for free*
            </span>
          </div>
        </div>

        <div className="absolute xl:top-[7vw] xl:left-[20vw] xs:left-[5vw]   md:top-[20vw] md:left-[20vw] xs:top-[50vw] ">
          <div className="py-10 grid xs:grid-cols-[repeat(3,minmax(0,1fr))] xs:auto-rows-auto xs:gap-x-[15vw] xs:gap-y-[15vw] md:gap-y-[5vw] md:gap-x-[15vw] lg:gap-y-[5vw] lg:gap-x-[15vw] xl:gap-x-0 xl:gap-y-0 md:grid-cols-3 md:place-items-center md:w-[100%] xl:flex xl:justify-center xs:m-auto  xs:mt-[20vw]">
            {PricingCardList?.map((data) => (
              <div
                key={data?.id}
                className="flex flex-col items-center gap-4 md:w-[10vw]"
              >
                <div className="xs:w-[20vw] xs:h-[10vh] md:w-[10vh] md:h-[10vh] border border-[#908EB5] rounded-full flex justify-center bg-[#060A22] shadow-[0px_4px_16px_0px_#2D30360F]">
                  <Image
                    src={data?.icon}
                    alt={data?.content}
                    className="xl:w-[2vw] md:w-[5vw]"
                  />
                </div>
                <p className="font-Inter flex items-center justify-center text-center font-medium text-white xs:text-[3vw] md:text-[1vw] w-[8vw]">
                  {data?.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="xs:hidden lg:block">
        <PlanCard />
      </div>
      {/* <div className=" bg-[#060A22] mx-6 my-8 md:hidden flex  flex-row  xl:gap-5  xs:gap-[5vw] justify-start xs:overflow-x-auto   xs:m-auto xs:justify-start">
        {cardList?.map((data: CardListType) => (
          <div
            className="w-[180vw] h-[45vh]  xs:rounded-[30px] lg:rounded-[50px] border border-[#2D3154]   "
            key={data?.id}
          >
            <div className="w-[60vw] mx-[10vw] flex-col text-white flex items-center justify-center text-[1.2vw] align-center 2xl:mt-16 xl:mt-6">
              <Image
                src={data?.icon}
                alt=""
                className="xl:w-[60vw] xl:h-[20vh]  md:w-[50vw] md:h-[20vh] xs:w-[50vw] flex justify-center items-center"
              />

              <p className="font-Sora font-semibold xs:text-[4vw] md:text-[2.65vw] lg:text-[3vw] xl:text-[2.65vw] from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-r bg-clip-text text-transparent 2xl:mb-5 xl:mb-12 justify-center items-center ">
                {data?.content}
              </p>
              <span className="font-Inter font-medium xs:text-[3vw] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1vw] text-[#908EB5] text-center  lg:px-5 xs:px-1">
                {data?.content1}
              </span>
            </div>
          </div>
        ))}
      </div> */}

      <div className="bg-[#060A22]">
        <div className="pt-10">
          <PricingCard />
        </div>
        <Calculator />

        <DigitalMarketing />
        <div className="mt-[10vw]">
          <BrandScroll />
        </div>
        <div className="py-10">
          <Growth />
        </div>
      </div>
    </div>
  );
}
