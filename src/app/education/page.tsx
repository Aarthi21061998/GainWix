"use client";
import { useEffect, useRef } from "react";

// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import meta from "../../assets/Icons/meta.svg";

import Educationhero from "../../assets/Icons/Educationhero.svg";
import EducationCard1 from "../../assets/Icons/EducationCard1.svg";
import EducationCard2 from "../../assets/Icons/EducationCard3.svg";
import EducationCard3 from "../../assets/Icons/EducationCard3.svg";
import EducationCard4 from "../../assets/Icons/EducationCard4.svg";

// components
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
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";

export default function Education() {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;

    if (!scrollContainer) return;

    let scrollPosition = 0;

    const scrollImages = () => {
      if (scrollContainer) {
        scrollPosition += 2; // Adjust speed
        if (
          scrollPosition >=
          scrollContainer.scrollHeight - scrollContainer.clientHeight
        ) {
          scrollPosition = 0; // Reset to the top when reaching the end
        }
        scrollContainer.scrollTo({
          top: scrollPosition,
          behavior: "smooth",
        });
      }
    };

    const intervalId = setInterval(scrollImages, 30); // Adjust interval for smoothness

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);
  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className="   w-full 2xl:!min-h-[75vh] xl:min-h-[70vh] lg:min-h-[55vh] md:min-h-[60vh] xs:min-h-[90vh] flex flex-col justify-end   absolute top-[2vw] md:py-0 md:px-[5rem] xs:p-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className="w-[30vw] flex flex-col   xs:pt-10   xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className="xl:text-[3vw] font-bold   text-[white] font-sora  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start ">
              Grow Your Ed Tech <br /> Institution With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                AI Conversational
              </span>
            </h1>
            <p className="lg:w-[37vw]  font-light font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Engage with students instantly across various platforms.
              Efficiently manage classes, deliver personalized updates to
              parents about their children, and foster a strong, enduring
              relationship between students and the school.
            </p>
            <div className="h-14 flex items-center gap-5">
              <button className="btn btn_primary">Request Demo</button>{" "}
            </div>
          </div>
          <div
            ref={scrollRef}
            className="h-[200px]  overflow-y-scroll no-scrollbar relative right-[12vw] top-[20vw]" // Added relative here
          >
            {/* Scrollable content */}
            <div className="relative h-[800px]">
              {EducationScrolling?.map((data, index) => (
                <div
                  className="scroll-item mb-4 flex items-center justify-center "
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
          <div className="relative lg:left-[45vw] lg:top-[-25vw] w-full h-full flex justify-end">
            <Image src={Educationhero} alt="Education Hero" />
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
              text
              customTitle={
                <div className="mt-20 xs:mt-[10vw] ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5">
                    <p className="text-[#BEAAFF] md:text-[1vw] font-semibold pl-2">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="xs:text-[3.5vw] md:w-[25%] md:text-[2.5vw] lg:w-[40vw] font-bold text-[white] font-sora">
                    Streamline Student
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      Acquisition & Enrollment{" "}
                    </p>
                  </div>
                </div>
              }
              list={EducationCardList}
              image={EducationCard1}
              revers
            ></CommonCard>
          </div>

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              className="mx-[10rem]"
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF] md:text-[1vw] font-semibold pl-2">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="xs:text-[3.5vw] md:w-[25%] md:text-[2.5vw] lg:w-[40vw] font-bold text-[white] font-sora">
                    Effortless <br />{" "}
                    <p className=" xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      Enrollment with <br />
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Integrated Forms
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={EducationCardList1}
              image={EducationCard2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              text
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
                    <span className="text-[white] text-[2.2vw] xl:w-[40vw] font-bold  font-raleway md:text-[3vw] xs:text-[3.5vw]">
                      Boost <br /> Engagement with <br />
                      <span className="text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Automated Class Reminders{" "}
                      </span>
                    </span>
                  </div>
                </>
              }
              list={EducationCardList2}
              image={EducationCard3}
              revers
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              text
              className="mx-[5rem]"
              customTitle={
                <>
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    {/* <img src={Loyalty} alt="" /> */}
                    <p className="text-[0.95vw] font-semibold pl-2  text-[#09CC94]">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className="md:text-[2vw] md:w-[38vw] font-bold text-[#202421] font-sora xs:text-[3.5vw]">
                    <span className="text-[white] text-[2.2vw] xl:w-[40vw] font-bold  font-raleway md:text-[3vw] xs:text-[3.5vw]">
                      Streamlined <br /> Support{" "}
                      <span className="text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        & Rapid <br />
                      </span>
                      <span className="text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Issue Resolution{" "}
                      </span>
                    </span>
                  </div>
                </>
              }
              
              list={EducationCardList3}
              image={EducationCard4}
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
