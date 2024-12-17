"use client";
import PricingCard from "@components/PricingCard";
import Calculator from "@components/Calculator";

import Growth from "@components/Growth";
import { PricingCardList } from "@constants/home";
import Image from "next/image";
import PlanCard from "@components/PlanCard";
import DigitalMarketing from "@components/DigitalMarketing";
import BrandScroll from "@components/BrandScroll";

import PricingBackground from "../../assets/Icons/pricing.svg";

export default function PricingPage() {
  return (
    <div>
      <div className="w-full h-auto bg-[#060A22] ">
        <div className="relative flex flex-col align-center items-center justify-center xs:min-h-[68vh]">
          <Image src={PricingBackground} alt="" />
          <div className=" xs:hidden md:block  xl:block absolute top-10 flex flex-col ">
            <div className="  xs:text-[3.1vw] md:text-[3.2vw] font-bold text-white">
              Get Started with Zero Setup Fee
            </div>
            <p className="xs:text-[3vw] md:text-[3.2vw] text-center font-bold font-sora from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              & Affordable Pricing
            </p>
            <span className="xs:text-[2.5vw] pl-[15vw] text-center md:text-[1vw] font-semibold text-[#616874] md:pt-5 xs:pt-2  font-Inter">
              First 1,000 service conversations per month for free*
            </span>
          </div>
          <div className=" xs:block md:hidden absolute top-7 flex flex-col xs:text-center mt-5 ">
            <div className="  xs:text-[7vw] md:text-[3.2vw] font-extrabold text-white">
              Get Started with Zero <br /> Setup Fee
            </div>
            <p className=" xs:text-[7vw] md:text-[3.2vw] font-extrabold font-raleway from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              & Affordable Pricing
            </p>
            <span className="xs:text-[4.5vw] md:text-[1vw] font-semibold text-[#908eb5] md:pt-5 xs:pt-2  font-Inter">
              First 1,000 service conversations per month for free*
            </span>
          </div>
        </div>

        <div className="absolute xl:top-[0vw] xl:left-[20vw] xs:left-[5vw] xs:top-[30vw] ">
          <div className="py-10 grid xs:grid-cols-[repeat(3,minmax(0,1fr))] xs:auto-rows-auto xs:gap-[15vw] md:gap-0 md:grid-cols-3 md:place-items-center lg:place-items-start md:w-[100%] lg:flex lg:justify-center xs:m-auto  xs:mt-[20vw]">
            {PricingCardList?.map((data) => (
              <div
                key={data?.id}
                className="flex flex-col items-center gap-4 md:w-[10vw]"
              >
                <div className="xs:w-[20vw] xs:h-[10vh] md:w-[10vh] md:h-[10vh] border border-[#908EB5] rounded-full flex justify-center bg-[#060A22] shadow-[0px_4px_16px_0px_#2D30360F]">
                  <Image
                    src={data?.icon}
                    alt={data?.content}
                    className="md:w-[2vw]"
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
      <div className="">
        <PlanCard />
      </div>

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
