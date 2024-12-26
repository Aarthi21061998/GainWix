"use client";

// assets
import Image from "next/image";
import Strargy from "../../assets/Icons/strategy AI (1).svg";

import segment1 from "../../assets/Icons/segment1.svg";
import segment2 from "../../assets/Icons/segment2.svg";
import segment3 from "../../assets/Icons/segment3.svg";

import segmentHero from "../../assets/Icons/Segmentation AI.svg";
// components
import React, { useEffect, useRef } from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";
import {
  SegmentList,
  SegmentType,
  StrargyList,
  StrargyType,
} from "@constants/home";

interface ItemType {
  id: number;
  icon: any;
  content1: string;
  data?: string; // Add the missing property
}

interface Props {
  item: ItemType;
}

export default function segment() {
  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={Strargy} alt="" className="" />
      <div className=" 2xl:!min-h-[70vh] xl:min-h-[70vh] lg:min-h-[60vh] md:min-h-[65vh] xs:min-h-[45vh]  flex flex-col justify-end   absolute  xl:top-[-50vw]  lg:top-[-10vw] md:top-[-10vw] md:py-0 md:px-[5rem]  ">
        <div className="grid xl:grid-cols-2 justify-between gap-14  sm:grid-cols-1 lg:grid-cols-1  xl:mx-24 2xl:mx-36 xl:mt-[10vw]  2xl:mt-[-5vw] ">
          <div className=" flex flex-col xs:mt-[5vw] xl: mt-[13vw] 2xl:mt-[18vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className=" md:hidden  xs:hidden lg:hidden xl:block  2xl:block xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[2.5vw] leading-[3.8vw]  font-bold   text-[white] font-sora   xs:text-center   lg:text-start xs:-mt-[60vw] lg:mt-[10vw] xl:mt-[50vw]  ">
              Reach Right <br />
              <p className="xl:text-[3vw] xs:text-[7vw] lg:text-[2.5vw] md:text-[3vw] font-bold   text-[white] font-sora    xs:text-center   lg:text-start">
                {" "}
                Audience at the <br />
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                  Right Time with Segmentation AI{" "}
                </span>
              </p>
            </h1>
            <h1 className=" md:hidden  xs:block lg:hidden xl:hidden  2xl:hidden xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[2.5vw]  font-bold   text-[white] font-sora   xs:text-center   lg:text-start xs:-mt-[80vw] lg:-mt-0 ">
              Reach Right Audience at the
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-3 font-sora ">
                Right Time with Segmentation AI{" "}
              </span>
            </h1>
            <h1 className=" xs:hidden sm:hidden md:block lg:block xl:hidden xl:text-[3vw] xs:text-[7vw]  sm:text-[1vw] font-bold   text-[white] font-sora  md:text-[5vw]  xs:text-center   lg:text-center  ">
              Reach Right Audience at the
              <p className="xl:text-[3vw] xs:text-[7vw] font-bold   text-[white] font-sora  md:text-[5vw]  xs:text-center   lg:text-start">
                {" "}
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                  Right Time with Segmentation AI{" "}
                </span>
              </p>
            </h1>
            <p className=" xs:px-2 font-light font-Inter mt-5 mb-7 lg:text-[2vw] xl:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[3vw] md:items-center lg:items-baseline  xs:text-center lg:text-center  xs:text-[4vw] xl:text-start ">
              Create precise customer segments based on behaviors, demographics,
              and more. Deliver personalized, relevant messages that resonate,
              improving engagement, retention, and conversions across every
              campaign
            </p>

            <div className="items-center gap-5 ">
              <a
                href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                target="_blank"
                rel="noreferrer"
                className="2xl:mt-[-0.7vw]"
              >
                {" "}
                <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold 2xl:p-8 pointer ">
                  Request Demo
                </button>
              </a>

              {/* <button>
                <div className="lg:hidden xs:block w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center ">
                  <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
                  <p className=" xs:text-[4vw] md:text-[2vw] lg:text-[1.05vw] text-[#FFFFFF] font-Inter font-medium">
                    Tech Partner
                  </p>
                </div>
              </button>{" "} */}
            </div>
          </div>

          <div className="absolute blend-screen 2xl:right-[11vw]  2xl:top-[30.5vw] xs:top-[80vw] lg:right-[10vw] lg:top-[70vw] xl:right-[1vw] xl:top-[35vw]  md:right-[1vw] w-full h-full flex justify-end">
            <Image src={segmentHero} alt="hero" className="" />
          </div>
        </div>
      </div>

      <div className=" rounded-[120px]  lg:min-h-[120vh] xl:min-h-[150vh] xs:mt-[70vw] md:mt-[100vw] lg:mt-[80vw] xl:mt-0 ">
        <div className="md:py-0 xs:py-5  ">
          <div className=" from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <div className="xs:hidden md:block w-[100%] h-[24vh] flex justify-center text-[3vw] font-medium font-Sora py-10">
              <h1 className="xl:text-[3vw] lg:text-[5vw] md:text-[5vw] font-semibold text-[#FFFFFF] font-Sora text-center ">
                <p className="md:pl-10">Set new benchmarks and hit Goals</p>
                <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
                  effortlessly with our AI
                </span>
                <p className="xs:text-[1.5vw] md:text-[2vw] lg:text-[2vw] xl:text-[1vw] text-[#908EB5] text-center ">
                  Leverage AI in every step of your digital marketing and
                  optimize your campaign performance
                </p>
              </h1>
            </div>
            <div className="xs:block md:hidden w-[100%] h-[10vh] flex justify-center text-[3vw] font-medium font-Sora pt-10 mt-[100vw]">
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
            <CommonCard
              // className=" xl:mx-[9v] lg:mx-[3rem]  w-full "
              text
              customTitle={
                <div className=" xs:mt-[10vw] xs:mx-[5vw] md:mx-[-1vw] lg:mx-0  ">
                  <div className="md:hidden xs:text-[8vw] md:w-[50%] md:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Automated Customer
                    <br />
                    <span className=" xs:text-[8vw] md:text-[2.5vw]  font-bold font-sora"></span>
                    <p className=" from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw]  font-bold">
                      Segmentation{" "}
                    </p>
                  </div>
                  <div className="md:block  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[3vw] xs:w-[90%]   lg:w-[40vw] font-bold text-[white] font-sora 2xl:tracking-wide lg:leading-[3.5vw] ">
                    <p>
                      {" "}
                      Automated{" "}
                      <span className=" from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[3vw] font-bold">
                        Customer
                      </span>
                    </p>
                    <span className=" from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[3vw] font-bold">
                      Segmentation{" "}
                    </span>
                  </div>
                  <div className="xs:text-[3vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Save time and maximize accuracy with automated, AI-driven
                    segmentation. Our AI groups customers based on shared
                    characteristics and behavior, helping you target your
                    message to the right audience.
                  </div>
                </div>
              }
              image={segment1}
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] lg:py-10 "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="md:hidden xs:hidden lg:block xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora tracking-wide leading-[3.5vw]">
                    Real-Time <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Dynamic Segments{" "}
                    </span>
                  </div>
                  <div className="md:hidden lg:hidden xs:block xs:text-[8vw] lg:text-[3vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora ">
                    Real-Time <br />
                    <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Dynamic Segments{" "}
                    </span>
                  </div>
                  <div className="md:block lg:hidden xs:hidden xs:text-[8vw] md:text-[3.5vw] xs:w-[88vw] md:w-[25%]  lg:w-[60vw] font-bold text-[white] font-sora ">
                    Real-Time
                    <span className="md:pl-3 from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] lg:text-[3vw] bg-gradient-to-r bg-clip-text text-transparent">
                      Dynamic Segments{" "}
                    </span>
                  </div>
                  <div className="xs:text-[3vw] xl:w-[30vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Stay relevant with real-time, dynamic segmentation. As new
                    data flows in, your segments automatically update, ensuring
                    your messaging is always in tune with your audience’s latest
                    interests.
                  </div>
                </div>
              }
              // list={EcommerceList2}
              image={segment2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l  xl:py-10 xl:pb-40">
            <CommonCard
              text
              // className="xl:mx-[3rem] lg:mx-[4rem] xs:mx-[5vw] w-full"
              customTitle={
                <>
                  <div className="md:hidden xs:hidden lg:block  pt-[15vw] md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide leading-[3vw]">
                    <span className="text-[white] lg:text-[3vw] xl:w-[40vw] font-semibold  font-sora md:text-[4vw] xs:text-[8vw] ">
                      In-Depth <br /> Demographic And
                      <span className="lg:text-[3vw] pl-3 xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Psychographic <br /> Insights{" "}
                      </span>
                    </span>
                  </div>
                  <div className="md:block xs:hidden lg:hidden xl:hidden  pt-[15vw] md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide ">
                    <span className="text-[white] lg:text-[3vw] xl:w-[40vw] font-semibold  font-sora md:text-[4vw] xs:text-[8vw] ">
                      In-Depth <br /> Demographic And <br />
                      <span className="lg:text-[3vw] xs:pl-3 xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Psychographic <br /> Insights{" "}
                      </span>
                    </span>
                  </div>
                  <div className="md:hidden xs:block md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide">
                    <p className="text-[white] lg:text-[2.2vw]  xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      In-Depth Demographic And
                      <span className="md:text-[4vw] xs:pl-2  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Psychographic <br /> Insights{" "}
                      </span>
                    </p>
                  </div>
                  <div className=" xs:text-[3vw] xl:text-[0.95vw] lg:text-[2vw] font-Inter font-medium text-[#908EB5] pt-3">
                    Gain a comprehensive view of your customers. From
                    demographics to psychographics, Segmentation AI provides
                    insights that let you tailor campaigns for deeper
                    connections.
                  </div>
                </>
              }
              revers
              // list={EcommerceList3}
              image={segment3}
            ></CommonCard>
          </div>
        </div>
      </div>

      <div className="md:py-10">
        <DigitalMarketing />
      </div>
      <div className="mt-10 xs:hidden md:block">
        <BrandScroll />
      </div>

      <div className="">
        <div className="flex justify-center text-[3vw] font-semibold">
          <h1 className="lg:text-[3vw] md:text-[3vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] pt-16 text-center xl:tracking-wide">
            <p className="lg:pl-10">
              How Segmentation
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                AI Works
              </span>
            </p>
          </h1>
        </div>

        <div className="2xl:w-[64vw] flex flex-row  xl:gap-5 md:gap-5 xs:gap-[5vw] justify-start overflow-x-auto   md:w-full  xs:w-[100vw] xl:w-[70vw] xl:min-h-[37vw] xs:m-auto xs:justify-start md:justify-center md:items-center ">
          {SegmentList.map(
            (item: {
              id: number;
              icon: any;
              data: string;
              content1: string;
            }) => (
              <div
                className="xs:w-[100%]  md:w-[30vw] md:h-[33vh] xs:h-[52vh] lg:w-[30%] lg:h-[30vh] xl:w-[25%] xl:h-[43vh] xs:rounded-[30px]   bg-gradient-to-r from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] p-6 text-white shadow-lg "
                key={item?.id}
              >
                <div className="flex-col text-white w-full flex text-[1.2vw] align-center 2xl:mt-16 xl:mt-6 justify-center items-start ">
                  <Image
                    src={item?.icon}
                    alt=""
                    className="xs:w-[50vw] xs:h-[10vw] md:w-[40%] md:h-[40%]"
                  />
                  <p className="font-Inter -mt-10 xs:w-[100%] font-semibold xs:text-[3vw] md:text-[2vw] lg:text-[2vw] xl:text-[1.3vw] text-[#FFFFFF] xs:px-1 xs:mt-7">
                    {(item as { data: string }).data}
                  </p>
                  <span className="font-Inter -mt-10 xs:w-[100%]  font-medium xs:text-[3vw] md:text-[1.5vw] lg:text-[1.4vw] xl:text-[0.85vw] text-[#FFFFFF]   xs:px-1 xs:mt-7">
                    {item?.content1}
                  </span>
                </div>
              </div>
            )
          )}
        </div>
      </div>
      <Growth />
    </div>
  );
}
