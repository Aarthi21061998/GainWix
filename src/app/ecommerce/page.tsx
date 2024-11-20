"use client";

// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import meta from "../../assets/Icons/meta.svg";

import EcommerceBg from "../../assets/Icons/E-commercebg1.svg";

import EcommerceCard1 from "../../assets/Icons/EcommerceCard1.svg";
import EcommerceCard2 from "../../assets/Icons/ecommerceCard2.svg";
import EcommerceCard3 from "../../assets/Icons/EcommerceCard3.svg";

// components
import React, { useEffect, useRef } from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";
import Card from "@components/Card";
import GainScroll from "@components/GainScroll";
import {
  CommerceCardList,
  EcommerceList1,
  EcommerceList2,
  EcommerceList3,
  EcommerceScorlling,
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";

export default function Ecommerce() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    let scrollAmount = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollAmount += 1;

        if (
          scrollAmount >=
          scrollContainer.scrollWidth - scrollContainer.clientWidth
        ) {
          scrollAmount = 0;
        }

        scrollContainer.scrollTo({
          left: scrollAmount,
          behavior: "smooth",
        });
      }
    };

    const interval = setInterval(scrollImages, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className="   w-full 2xl:!min-h-[70vh] xl:min-h-[70vh] lg:min-h-[55vh] md:min-h-[60vh] xs:min-h-[90vh] flex flex-col justify-end   absolute top-[2vw] md:py-0 md:px-[5rem] xs:p-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className=" flex flex-col   xs:pt-10   xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className="xl:text-[3vw] font-bold   text-[white] font-sora  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start ">
              Grow Your <br /> E-Commerce Business <br />
              <p className="xl:text-[3vw] font-bold   text-[white] font-sora  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start">
                {" "}
                With{" "}
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                  AI Conversational
                  <br /> Commerce{" "}
                </span>
              </p>
            </h1>
            <p className="lg:w-[35vw]  font-light font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Transform E-Commerce shopping into a personalized journey with
              Gainwix.ai. From turning conversations into conversions to
              managing all aspects of sales, support, and marketing from an
              unified platform.
            </p>
            <div className="h-14 flex items-center gap-5">
              <button className="btn btn_primary">Request Demo</button>{" "}
            </div>
          </div>
          <div
            ref={scrollRef}
            className="h-[200px] w-[15vw] overflow-x-scroll no-scrollbar relative left-[2vw] top-[25vw]"
          >
            <div className="flex space-x-4">
              {EcommerceScorlling?.map((data, index) => (
                <div
                  className="scroll-item mb-4 flex items-center justify-center"
                  key={index}
                >
                  <Image
                    src={data.icon}
                    alt={`Education Icon ${index + 1}`}
                    width={200}
                    height={150}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" absolute lg:right-[5vw] lg:top-[7vw] xl:right-[10vw] xl:top-[6vw]  w-full h-full flex justify-end">
            <Image src={ecommerce1} alt="hero" />{" "}
          </div>
        </div>
      </div>
      <div className="mt-20">
        <BrandScroll />
      </div>
      <div className="py-12">
        <Card />
        <div className="pt-10">
          <GainScroll />
        </div>
      </div>

      <div className=" rounded-[120px] min-h-[150vh]  ">
        <div className="md:py-0  xs:p-10 ">
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="lg:mx-[14rem] w-full"
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5">
                    <p className="text-[#BEAAFF] md:text-[1vw] font-semibold pl-2">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="xs:text-[3.5vw] md:w-[25%] md:text-[2.5vw] lg:w-[40vw] font-bold text-[white] font-sora">
                    Attract New <br />
                    <span className=" xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold font-raleway">
                      Customers And{" "}
                    </span>
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      Drive Traffic
                    </p>
                  </div>
                </div>
              }
              list={EcommerceList1}
              image={EcommerceCard1}
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="mx-[7rem] "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF] md:text-[1vw] font-semibold pl-2">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="xs:text-[3.5vw] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Build Loyalty and
                    <p className=" xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      Drive{" "}
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Repeat <br /> Business{" "}
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={EcommerceList2}
              image={EcommerceCard2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              text
              className="mx-[14rem] w-full"
              customTitle={
                <>
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    <p className="text-[1vw] font-semibold pl-2 text-[#09CC94]">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className="md:text-[2vw] md:w-[38vw] font-bold text-[#202421] font-sora xs:text-[3.5vw]">
                    <span className="text-[white] text-[2.2vw] xl:w-[40vw] font-bold  font-sora md:text-[3vw] xs:text-[3.5vw]">
                      Omni-channel <br />
                      <span className="text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Support{" "}
                      </span>
                    </span>
                  </div>
                </>
              }
              revers
              list={EcommerceList3}
              image={EcommerceCard3}
            >
              {/* // image={ICONS?.ECommerceCard3} */}
            </CommonCard>
          </div>
        </div>
      </div>

      <div className="py-10">
        <DigitalMarketing />
      </div>
      <div className="mt-10">
        <BrandScroll />
      </div>

      <div className="">
        {/* <div className="">
          <div className="flex flex-wrap gap-10 mt-10 md:flex-col  xs:hidden  md:block lg:hidden">
          <div className="flex gap-10 justify-center flex-wrap md:grid md:grid-cols-3">
         
        </div> */}
        <div className="flex justify-center text-[3vw] font-semibold ">
          <h1 className="text-[3vw] font-Sora font-semibold text-[#FFFFFF] py-16 text-center">
            <p className="pl-10">Personalize Customer Experience To</p>
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent ">
              scale your business{" "}
            </span>
          </h1>
        </div>
        <div className="flex gap-10 xl:gap-20 justify-center xl:mt-5">
          {CommerceCardList?.map((data, index) => (
            <div
              key={index}
              className="xl:w-48 md:w-[1vw] h-auto flex flex-col px-10  p-5  gradient-border2"
              // style={{
              //   border: data?.id === 1 ? ".gradient-border2" : "none",
              // }}
            >
              <div className="w-[40%]  xl:w-[70%] flex flex-col  text-center ">
                <Image src={data?.icon} alt="icon" className=" " />
              </div>
              <p className="py-5 w-[12vw] font-Inter flex md:text-[1.5vw] xl:text-[0.95vw] font-normal  text-start  text-[white]">
                {data?.text}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Growth />
    </div>
  );
}
