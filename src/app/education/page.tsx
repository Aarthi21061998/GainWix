"use client";
import { useEffect, useRef, useState } from "react";

// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import MetaIcon from "../../assets/Icons/meta.svg";

import Educationhero from "../../assets/Icons/Educationhero.svg";
import EducationCard1 from "../../assets/Icons/EducationCard1.svg";
import EducationCard2 from "../../assets/Icons/EducationCard2.svg";
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
import { userAgent } from "next/server";

export default function Education() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === EducationScrolling.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, [EducationScrolling.length]);

  // function setCustomVH() {
  //   const vh = window.innerHeight * 0.01; // 1% of the viewport height
  //   document.documentElement.style.setProperty("--vh", `${vh}px`);
  // }

  // // Run on initial load
  // setCustomVH();

  // // Update on resize
  // window.addEventListener("resize", setCustomVH);

  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className=" 2xl:!min-h-[70vh] xl:min-h-[90vh] lg:min-h-[90vh] md:min-h-[100vh] xs:min-h-[55vh]  flex flex-col justify-end   absolute  xl:top-[-50vw]  lg:top-[-10vw] md:top-[-10vw] md:py-0 md:px-[5rem] xs:pt-20">
        <div className="grid xl:grid-cols-2 justify-between gap-14  sm:grid-cols-1 lg:grid-cols-1  xl:mx-24 2xl:mx-36">
          <div className=" flex flex-col xs:mt-[5vw] xl:mt-[13vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className=" leading-[4vw] md:hidden lg:hidden  xs:hidden xl:block xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[2.5vw]  font-bold   text-[white] font-sora   xs:text-center   lg:text-start xs:-mt-[60vw] lg:mt-[10vw] xl:mt-[50vw]">
              Grow Your Ed Tech <br /> Institution With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational <br />
                Learning
              </span>
            </h1>
            <h1 className="  md:hidden lg:hidden xl:hidden xs:block xl:text-[3vw] xs:text-[7vw] sm-text-[1vw] md:text-[3vw] lg:text-[2.5vw]  font-bold   text-[white] font-sora   xs:text-center   lg:text-start xs:-mt-[90vw] lg:mt-[10vw] xl:mt-[50vw]">
              Grow Your Ed Tech <br /> Institution With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational <br />
                Learning
              </span>
            </h1>
            <h1 className=" xs:hidden sm:hidden md:block  lg:block xl:hidden  md:w-[90vw] xl:text-[3vw] xs:text-[7vw]  md:-mt-[90vw] sm:text-[1vw] font-bold   text-[white] font-sora  md:text-[5vw]  xs:text-center   lg:text-center  ">
              Grow Your Ed Tech Institution With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational Learning
              </span>
            </h1>
            <p className=" xs:px-2 font-light font-Inter mt-5 mb-7 lg:text-[2vw] xl:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[3vw] md:items-center lg:items-baseline  xs:text-center lg:text-center  xs:text-[4vw] xl:text-start ">
              Engage with students instantly across various platforms.
              Efficiently manage classes, deliver personalized updates to
              parents about their children, and foster a strong, enduring
              relationship between students and the school.
            </p>
            <div className="items-center gap-5 z-50">
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
              <button>
                <div className="w-[100%] items-center flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center ">
                  <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
                  <p className=" xs:text-[4vw] md:text-[2vw] lg:text-[1.05vw] text-[#FFFFFF] font-Inter font-medium">
                    Tech Partner
                  </p>
                </div>
              </button>{" "}
            </div>
          </div>
          <div className="h-full lg:max-h-[80vh] xs:max-h-[5vh]   xl:w-[20vw] xs:w-[30vw] overflow-hidden relative lg:left-[1vw] lg:top-[25vw] md:top-[20vw] md:left-[1vw] xl:top-[60vw] xl:left-[-1vw] 2xl:top-[80vw] 2xl:left-[-0.05vw] xs:left-[10vw] xs:top-[42vw]">
            <div className="flex flex-col h-[60vh] relative">
              {EducationScrolling?.map((data, index) => (
                <div
                  key={index}
                  className={`scroll-item mb-2 flex items-center justify-end transition-transform duration-700 ease-in-out ${
                    index <= currentIndex
                      ? "translate-y-0 opacity-100"
                      : "translate-y-full opacity-0"
                  }`}
                >
                  {data?.icon && (
                    <Image
                      src={data.icon}
                      alt={`Education Icon ${index + 1}`}
                      // width={100}
                      // height={150}
                      // className="xl:h-[30vh] xs:h-[50vh]"
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="absolute xs:top-[100vw] lg:right-[20vw] lg:top-[40vw] xl:left-[6vw] xl:top-[30vw] 2xl:top-[31vw] 2xl:left-[4.2vw]  md:right-[10vw] md:top-[70vw] w-full h-full flex justify-end">
            <Image
              src={Educationhero}
              alt="Education Hero"
              // className="xl:w-[80vw] xl:h-[50vh] lg:w-[60vw] lg:h-[50vh]"
            />
          </div>
          {/* <div
  style={{
    top: `calc(var(--vh) * 54)`,
  }}
  className="absolute xs:top-[calc(var(--vh)*100)] 
                     lg:right-[20vw] lg:top-[calc(var(--vh)*40)] 
                     xl:left-[6vw] xl:top-[calc(var(--vh)*30)] 
                     2xl:top-[calc(var(--vh)*31)] 2xl:left-[4.2vw] 
                     md:right-[10vw] md:top-[calc(var(--vh)*70)] 
                     w-full h-full flex justify-end"
>
  <Image
    src={Educationhero}
    alt="Education Hero"
    className="object-contain"
  />
</div> */}

        </div>
      </div>
      <div className="lg:mt-[80vw] xl:mt-20 xs:mt-[210vw] md:mt-[120vw]">
        <BrandScroll />
      </div>
      <div className="py-12">
        <Card />
        <div className="pt-10">
          <GainScroll />
        </div>
      </div>

      <div className=" rounded-[120px] lg:min-h-[120vh] xl:min-h-[150vh] ">
        <div className="md:py-0 xs:py-5  ">
          <div className=" from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              // className="xl:mx-[5rem] lg:mx-[3rem] md:mx-[1vw]  w-full "
              text
              customTitle={
                <div className="2xl:mt-[5vw] xl:mt-[1vw]  xs:mt-[10vw]    lg:mx-0  ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5 2xl:mt-[-15vw]  ">
                    <p className="text-[#BEAAFF] md:text-[2vw] lg:text-[1vw] font-semibold pl-2 px-4 ">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="md:hidden xs:text-[8vw] lg:text-[3vw] md:w-[50vw]  md:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora tracking-wide  ">
                    Streamline Student
                    <p className=" from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw] lg:text-[3vw]  font-bold">
                      Acquisition & Enrollment{" "}
                    </p>
                  </div>
                  <div className="md:block leading-[3.5vw] lg:text-[3vw]  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%]  xs:w-[90%]   lg:w-[45vw] font-bold text-[white] font-sora 2xl:tracking-wide ">
                    Streamline Student
                    <p className=" from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[3vw] font-bold">
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

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF]  lg:text-[1vw] md:text-[2vw] font-semibold pl-2 xl:px-4">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="md:hidden lg:block leading-[3.5vw] lg:text-[3vw]  xs:text-[8vw] xs:w-[88vw] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora tracking-wide">
                    Effortless <br />{" "}
                    <p className=" xs:text-[8vw] md:text-[2.5vw] leading-[3.5vw] lg:text-[3vw]  lg:w-[40vw] font-bold">
                      Enrollment with <br />
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent leading-[3.5vw] lg:text-[3vw] ">
                        Integrated Forms
                      </span>
                    </p>
                  </div>
                  <div className="lg:hidden xs:hidden   md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Effortless <br />{" "}
                    <p className=" xs:text-[8vw] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[40vw] font-bold">
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

          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l  ">
            <CommonCard
              text
              // className="xl:mx-[13rem] lg:mx-[7rem] md:mx-[5rem] xs:mx-[2rem] "
              customTitle={
                <>
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5 xl:mt-20">
                    <p className="text-[#09CC94]  lg:text-[1vw] font-semibold pl-2">
                      Gain Retention & cross selling{" "}
                    </p>
                  </div>
                  <div className="md:hidden lg:block xs:text-[8vw] xs:w-[88%]  md:text-[2.5vw] leading-[3.5vw] lg:text-[3vw]  font-bold text-[white] font-sora">
                    <span className="text-[white] leading-[3.5vw] lg:text-[3vw]  xl:w-[40vw] font-bold  font-sora md:text-[3vw] xs:text-[8vw]">
                      Boost <br /> Engagement with <br />
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Automated Class Reminders{" "}
                      </span>
                    </span>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    <span className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                      Boost <br /> Engagement with <br />
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
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
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l  2xl:py-40">
            <CommonCard
              text
              className="2xl:mx-[20rem] xl:mx-[13rem] md:mx-[1.5rem] lg:mx-[8rem] xs:mx-[1rem] "
              customTitle={
                <div className="">
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5 xl:mt-20">
                    <p className="lg:text-[1vw] md:text-[1vw] xs:text-[4vw] font-semibold lg:pl-2 text-[#09CC94] xl:px-4">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className="md:block xs:hidden  md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide ">
                    <span className="text-[white] lg:text-[3vw] leading-[3.5vw] xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Streamlined <br /> Support{" "}
                      <span className="text-[white]  lg:text-[3vw] leading-[3.5vw]  xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                        & Rapid <br />
                      </span>
                      <span className=" lg:text-[3vw] leading-[3.5vw]  xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Issue Resolution{" "}
                      </span>
                    </span>
                  </div>
                  <div className="md:hidden xs:block  md:text-[2vw]  md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw] tracking-wide ">
                    <span className="text-[white] lg:text-[2.2vw] xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Streamlined <br /> Support{" "}
                      <span className="text-[white] lg:text-[2.2vw] xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                        & Rapid <br />
                      </span>
                      <span className="lg:text-[2.2vw] xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Issue Resolution{" "}
                      </span>
                    </span>
                  </div>
                </div>
              }
              list={EducationCardList3}
              image={EducationCard4}
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
          <h1 className="lg:text-[3vw] md:text-[3vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] py-16 text-center xl:tracking-wide">
            <p className="lg:pl-10">Personalize Customer Experience To</p>
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              scale your business
            </span>
          </h1>
        </div>

        <div className="lmd:w-full mt-5 overflow-x-auto lg:overflow-visible 2xl:w-[64vw] xl:w-[74vw] xl:m-auto">
          <div
            className="
      flex flex-row md:gap-5 xs:flex-row sm:flex-row overflow-x-auto
      md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-5
      lg:grid-cols-5 lg:grid-rows-1 lg:gap-5"
          >
            {CommerceCardList?.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 xs:w-[45%] w-[80%] sm:w-[60%] md:w-full lg:w-auto flex flex-col items-center xs:px-5 md:px-5 gradient-borders  last:border-r-0"
              >
                <div className="w-full flex flex-col xs:justify-center xl:justify-start">
                  <Image src={data?.icon} alt="icon" />
                  <p className="py-5 font-Inter font-medium  text-white xs:text-[3vw] sm:text-[1.5vw] lg:text-[1vw] md:text-[2.5vw] ">
                    {data?.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Growth />
    </div>
  );
}
