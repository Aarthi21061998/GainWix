"use client";
import { useEffect, useRef } from "react";

// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import MetaIcon from "../../assets/Icons/meta.svg";

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
      <div className=" w-full 2xl:!min-h-[70vh] xl:min-h-[90vh] lg:min-h-[40vh] md:min-h-[55vh]  flex flex-col justify-end   absolute  xl:top-[-50vw]  lg:top-[-10vw] md:top-[-10vw] md:py-0 md:px-[5rem] xs:pt-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className="flex flex-col xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className="md:hidden lg:block xl:block sm:block xl:text-[3vw] xs:text-[7vw] sm-text-[1vw]  font-bold   text-[white] font-sora  md:text-[3vw]  xs:text-center   lg:text-start xs:-mt-[60vw]  xl:mt-[50vw]">
              Grow Your Ed Tech <br /> Institution With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational
              </span>
            </h1>
            <h1 className="md:block xs:hidden sm:hidden lg:hidden xl:text-[3vw] xs:text-[7vw]  sm:text-[1vw] font-bold   text-[white] font-sora  md:text-[3vw]  xs:text-center   lg:text-start xs:-mt-10 ">
              Grow Your Ed Tech Institution With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational
              </span>
            </h1>
            <p className="lg:w-[35vw] xs:px-2 font-light font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Engage with students instantly across various platforms.
              Efficiently manage classes, deliver personalized updates to
              parents about their children, and foster a strong, enduring
              relationship between students and the school.
            </p>
            <div className="items-center gap-5  ">
              <button className="btn btn_primary">Request Demo</button>{" "}
              <button>
                <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center ">
                  <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
                  <p className=" xs:text-[4vw] md:text-[2vw] lg:text-[1.05vw] text-[#FFFFFF] font-Inter font-medium">
                    Tech Partner
                  </p>
                </div>
              </button>{" "}
            </div>
          </div>
          <div
            ref={scrollRef}
            className="h-[200px] w-[15vw] overflow-x-scroll no-scrollbar relative lg:left-[2vw] lg:top-[-30vw] md:top-[40vw] xl:top-[-70vw]  xs:left-2 xs:top-[10vw]"
          >
            {/* Scrollable content */}
            <div className="flex space-x-4">
              {EducationScrolling?.map((data, index) => (
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
          <div className="absolute xs:right-[5vw] xs:top-[60vw]  md:top-[60vh] lg:right-[-2vw] lg:top-[4vw] xl:left-[13vw] xl:top-[63vw]  w-full h-full flex justify-end">
            <Image
              src={Educationhero}
              alt="Education Hero"
              className="xl:w-[80vw] xl:h-[50vh] lg:w-[60vw] lg:h-[50vh]"
            />
          </div>
        </div>
      </div>
      <div className="lg:mt-20 xs:mt-[160vw] md:mt-[120vw]">
        <BrandScroll />
      </div>
      <div className="py-12">
        <Card />
        <div className="pt-10">
          <GainScroll />
        </div>
      </div>

      <div className=" rounded-[120px] lg:min-h-[120vh] xl:min-h-[150vh]  ">
        <div className="md:py-0 xs:py-5  ">
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              className="xl:mx-[5rem] lg:mx-[3rem] md:mx-[1vw]  w-full "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] xs:mx-[5vw] md:mx-[-1vw] lg:mx-0  ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5">
                    <p className="text-[#BEAAFF] md:text-[2vw] lg:text-[1vw] font-semibold pl-2">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="md:hidden xs:text-[8vw] md:w-[50%] md:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Streamline Student
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw] md:text-[2.5vw]  font-bold">
                      Acquisition & Enrollment{" "}
                    </p>
                  </div>
                  <div className="md:block  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Streamline Student
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[2.5vw] font-bold">
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
              className="xl:mx-[13rem] lg:mx-[7rem] md:mx-[5rem] xs:mx-[2rem] "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw]   ">
                  <div className="p-2 border-2 border-[#0F4EEF] rounded-[30px] inline-flex items-center bg-[#061b4d] mb-5">
                    <p className="text-[#A7C0FF]  lg:text-[1vw] font-semibold pl-2">
                      Gain Retention{" "}
                    </p>
                  </div>
                  <div className="md:hidden lg:block xs:text-[8vw] xs:w-[88%] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Effortless <br />{" "}
                    <p className=" xs:text-[8vw] md:text-[2.5vw] lg:w-[40vw] font-bold">
                      Enrollment with <br />
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Integrated Forms
                      </span>
                    </p>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
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
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r xs:pt-10 ">
            <CommonCard
              text
              className="xl:mx-[6rem] lg:mx-[4rem] xs:mx-[5vw] w-full"
              customTitle={
                <>
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    <p className="lg:text-[1vw] md:text-[1vw] xs:text-[4vw] font-semibold pl-2 text-[#09CC94]">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className=" md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw]">
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
                </>
              }
              list={EducationCardList3}
              image={EducationCard4}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-l ">
            <CommonCard
              text
              className="xl:mx-[13rem] lg:mx-[7rem] md:mx-[5rem] xs:mx-[2rem] "
              customTitle={
                <>
                  <div className="bg-[#072c37] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    <p className="text-[#A7C0FF]  lg:text-[1vw] font-semibold pl-2">
                      Gain Retention & cross selling{" "}
                    </p>
                  </div>
                  <div className="md:hidden lg:block xs:text-[8vw] xs:w-[88%] md:w-[25%] md:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    <span className="text-[white] lg:text-[2.2vw] xl:w-[40vw] font-bold  font-sora md:text-[3vw] xs:text-[8vw]">
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
        </div>
      </div>

      <div className="py-10">
        <DigitalMarketing />
      </div>
      <div className="mt-10">
        <BrandScroll />
      </div>

      <div className="">
        <div className="flex justify-center text-[3vw] font-semibold">
          <h1 className="lg:text-[3vw] md:text-[3vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] py-16 text-center">
            <p className="lg:pl-10">Personalize Customer Experience To</p>
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
              scale your business{" "}
            </span>
          </h1>
        </div>
        <div className="w-full mt-5 overflow-x-auto lg:overflow-visible">
          <div
            className="
      flex flex-row gap-5 xs:flex-row sm:flex-row overflow-x-auto
      md:grid md:grid-cols-3 md:grid-rows-2 md:gap-y-5
      lg:grid-cols-5 lg:grid-rows-1 lg:gap-5"
          >
            {CommerceCardList?.map((data, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-[80%] sm:w-[60%] md:w-full lg:w-auto flex flex-col items-center"
              >
                <div className="w-full flex justify-center">
                  <Image src={data?.icon} alt="icon" />
                </div>
                <p className="py-5 font-Inter font-medium text-center text-white xs:text-[2vw] sm:text-[1.5vw] lg:text-[1vw]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Growth />
    </div>
  );
}
