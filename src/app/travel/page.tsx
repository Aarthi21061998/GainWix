// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import MetaIcon from "../../assets/Icons/meta.svg";

import TravelHero from "../../assets/Icons/TravelHero.svg";

import TravelCard1 from "../../assets/Icons/TravelCard1.svg";
import TravelCard2 from "../../assets/Icons/TravelCard2.svg";
import TravelCard3 from "../../assets/Icons/TravelCard3.svg";

import RealEstateHero from "../../assets/Icons/RealEstateHero.svg";
import RealEstateCard1 from "../../assets/Icons/RealEstateCard1.svg";
import RealEstateCard2 from "../../assets/Icons/RealEstateCard2.svg";
import RealEstateCard3 from "../../assets/Icons/RealEsateCard3.svg";

// components
import React from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";
import Card from "@components/Card";
import GainScroll from "@components/GainScroll";
import {
  CommerceCardList,
  RealEstateCardList,
  RealEstateCardList1,
  RealEstateCardList2,
  TravelCardList,
  TravelCardList1,
  TravelCardList2,
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";
import Growth from "@components/Growth";

export default function Travel() {
  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className=" w-full 2xl:!min-h-[70vh] xl:min-h-[0vh] lg:min-h-[60vh] md:min-h-[40vh]  flex flex-col justify-end   absolute  xl:top-[-50vw]  lg:top-[-10vw] md:top-[-10vw] md:py-0 md:px-[5rem] xs:pt-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className=" flex flex-col xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className="md:hidden lg:block xl:block sm:block xl:text-[3vw] xs:text-[7vw] sm-text-[1vw]  font-bold   text-[white] font-sora  md:text-[3vw]  xs:text-center   lg:text-start xs:-mt-[60vw] xl:mt-[50vw]">
              Grow Your Travel <br /> Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational <br />{" "}
              </span>{" "}
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                Travel Assistant{" "}
              </span>
            </h1>
            <h1 className="md:block xs:hidden sm:hidden lg:hidden xl:text-[3vw] xs:text-[7vw]  sm:text-[1vw] font-bold   text-[white] font-sora  md:text-[3vw]  xs:text-center   lg:text-start xs:-mt-10 ">
              Grow Your Travel Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora ">
                AI Conversational 
                Travel Assistant{" "}
              </span>
            </h1>
            <p className="lg:w-[35vw] xs:px-2 font-light font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[28.5vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Gainwix empowers your agency to create a delightful travel
              experience for your customers, from initial inquiry to post-trip
              support. Let's transform your travel business together!
            </p>
            <div className="items-center gap-5  ">
              <button className="btn btn_primary">Request Demo</button>{" "}
              <button>
                <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center md:items-center ">
                  <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
                  <p className=" xs:text-[4vw] md:text-[2vw] lg:text-[1.05vw] text-[#FFFFFF] font-Inter font-medium">
                    Tech Partner
                  </p>
                </div>
              </button>{" "}
            </div>
          </div>
          <div className="absolute xs:right-[5vw] xs:top-[60vw] lg:right-[4vw] lg:top-[4vw] xl:left-[13vw] xl:top-[63vw]  w-full h-full flex justify-end">
            <Image
              src={TravelHero}
              alt="hero"
              className="xl:w-[80vw] xl:h-[50vh] lg:w-[45vw] lg:h-[50vh]"
            />{" "}
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
              className="xl:mx-[5rem] lg:mx-[3rem]  w-full "
              text
              customTitle={
                <div className="-mt-20 xs:mt-[10vw] xs:mx-[5vw] md:mx-[-1vw] lg:mx-0  ">
                  <div className="p-2 border-2 border-[#6940f2] rounded-[30px] inline-flex items-center bg-[#22146a] mb-5">
                    <p className="text-[#BEAAFF] md:text-[2vw] lg:text-[1vw] font-semibold pl-2">
                      Gain Acquisition
                    </p>
                  </div>
                  <div className="md:block  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Boost Bookings
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[2.5vw] font-bold">
                      & Revenue{" "}
                    </p>
                  </div>
                  <div className="md:block  xs:hidden xs:text-[8vw] md:text-[4vw] md:w-[88%] lg:text-[2.5vw] xs:w-[90%]  lg:w-[40vw] font-bold text-[white] font-sora">
                    Boost Bookings
                    <p className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[8vw]  md:text-[4vw]  lg:text-[2.5vw] font-bold">
                      & Revenue{" "}
                    </p>
                  </div>
                </div>
              }
              list={TravelCardList}
              image={TravelCard1}
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
                    Cultivate Customer 
                    <p className=" xs:text-[8vw] md:text-[2.5vw] lg:w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention & Loyalty
                      </span>
                    </p>
                  </div>
                  <div className="lg:hidden xs:hidden  md:block xs:text-[8vw] xs:w-[88%] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[60vw] font-bold text-[white] font-sora">
                    Cultivate Customer 
                    <p className=" xs:text-[8vw] md:w-[95%] md:text-[4vw] lg:text-[2.5vw] lg:w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention & Loyalty
                      </span>
                    </p>
                  </div>
                </div>
              }
              list={TravelCardList1}
              image={TravelCard2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r xs:pt-10 ">
            <CommonCard
              text
              className="xl:mx-[12rem] lg:mx-[4rem] xs:mx-[5vw] w-full"
              customTitle={
                <>
                  <div className="bg-[#253c35] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    <p className="lg:text-[1vw] md:text-[1vw] xs:text-[4vw] font-semibold pl-2 text-[#09CC94]">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className=" md:text-[2vw] xs:w-[40vw] md:w-[38vw]  font-bold text-[#202421] font-sora xs:text-[8vw]">
                    <span className="text-[white] lg:text-[2.2vw] xl:w-[40vw] font-bold  font-sora md:text-[4vw] xs:text-[8vw]">
                      Seamless Support & <br />
                      <span className="lg:text-[2.2vw] xs:text-[8vw] lg:w-[40vw] font-bold text-[white] font-sora md:text-[4vw]  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Improved Efficiency{" "}
                      </span>
                    </span>
                  </div>
                </>
              }
              list={TravelCardList2}
              image={TravelCard3}
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
