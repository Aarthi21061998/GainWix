"use client";
// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import meta from "../../assets/Icons/meta.svg";

import RetailHero from "../../assets/Icons/Retailhero.svg";
import RetailCard1 from "../../assets/Icons/RetailCard1.svg";
import RetailCard2 from "../../assets/Icons/RetailCard2.svg";
import RetailCard3 from "../../assets/Icons/RetailCard3.svg";

// components
import React, { useEffect, useRef } from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";
import Card from "@components/Card";
import GainScroll from "@components/GainScroll";
import {
  CommerceCardList,
  EducationCardList,
  EducationCardList1,
  EducationCardList2,
  EducationCardList3,
  EducationScrolling,
  RetailList,
  RetailList1,
  RetailList2,
  RetailScrolling,
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";

export default function Retail() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let scrollPosition = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollPosition += 2;
        if (
          scrollPosition >=
          scrollContainer.scrollHeight - scrollContainer.clientHeight
        ) {
          scrollPosition = 0;
        }
        scrollContainer.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const intervalId = setInterval(scrollImages, 30);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className="   w-full 2xl:!min-h-[75vh] xl:min-h-[70vh] lg:min-h-[55vh] md:min-h-[60vh] xs:min-h-[90vh] flex flex-col justify-end   absolute top-[2vw] md:py-0 md:px-[5rem] xs:p-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1 lg:pt-[5vw]">
          <div className="w-[30vw] flex flex-col   xs:pt-10   xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center  ">
            <h1 className="xl:text-[3vw] font-bold   text-[white] font-sora  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start ">
              Grow Your Retail Business With{" "}
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                Online to offline Marketing{" "}
              </span>
            </h1>
            <p className="lg:w-[37vw]  font-light font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Increase customer footfalls to your physical store, engage with
              your existing customers, and scale your revenue with GainWix’s
              conversational relationship platform.
            </p>
            <div className="h-14 flex items-center gap-5">
              <button className="btn btn_primary">Request Demo</button>{" "}
            </div>
          </div>

          <div
            ref={scrollRef}
            className="h-[300px]  overflow-y-scroll no-scrollbar relative right-[12vw] top-[10vw]"
          >
            {/* Scrollable content */}
            <div className="relative h-[800px]">
              {RetailScrolling?.map((data, index) => (
                <div
                  className="scroll-item  flex items-center justify-center  "
                  key={index}
                >
                  <Image
                    src={data.icon}
                    alt={`Education Icon ${index + 1}`}
                    // width={200}
                    // height={150}
                    style={{ marginTop: "-4vw" }}
                  />
                </div>
              ))}
            </div>
          </div>
          <div className=" absolute lg:left-[-1vw] lg:top-[4vw]  w-full h-full flex justify-end">
            <Image src={RetailHero} alt="hero" />{" "}
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
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l  ">
            <CommonCard
              className="lg:mx-[14rem] w-full"
              customTitle={
                <div className="mt-20 xs:mt-[10vw] ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5">
                    <p className="text-[#BEAAFF] md:text-[1vw] font-semibold pl-2">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="xs:text-[3.5vw] md:w-[25%] md:text-[2.5vw] lg:w-[40vw] font-bold text-[white] font-sora">
                    Boost Footfall <br />
                    <p className=" xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      At
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        {" "}
                        Your Physical <br /> Outlet.{" "}
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={RetailList}
              image={RetailCard1}
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              className="mx-[10rem]"
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF] md:text-[1vw] font-semibold pl-2">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="xs:text-[3.5vw] md:w-[25%] md:text-[2.5vw] lg:w-[40vw] font-bold text-[white] font-sora">
                    Increase <br />
                    <p className=" xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      Revenue with <br />
                      Your
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        {" "}
                        New Sales <br />
                        Channel{" "}
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={RetailList1}
              image={RetailCard2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              className="mx-[5rem]"
              customTitle={
                <>
                  <div className="bg-[#072c37] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    {/* <img src={Loyalty} alt="" /> */}
                    <p className="text-[0.95vw] font-semibold pl-2  text-[#09CC94]">
                      Gain Retention & cross selling{" "}
                    </p>
                  </div>
                  <div className="md:text-[2vw] md:w-[38vw] font-bold text-[#202421] font-sora xs:text-[3.5vw]">
                    <span className="text-[white] text-[2.2vw] xl:w-[50vw] font-bold  font-raleway md:text-[3vw] xs:text-[3.5vw]">
                      Build  End to End <br />
                      <span className="text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Customer  <br /> Experience{" "}
                      </span>
                    </span>
                  </div>
                </>
              }
              list={RetailList2}
              image={RetailCard3}
              revers
            ></CommonCard>
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
              className="xl:w-[10vw] md:w-[1vw] h-auto flex flex-col px-10  p-5  gradient-border2"
              // style={{
              //   border: data?.id === 1 ? ".gradient-border2" : "none",
              // }}
            >
              <div className="w-[40%]  xl:w-[70%] flex flex-col  text-center ">
                <Image src={data?.icon} alt="icon" className=" " />
              </div>
              <p className="py-5 w-[11vw] font-Inter flex md:text-[1.5vw] xl:text-[0.95vw] font-normal  text-start  text-[white]">
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
