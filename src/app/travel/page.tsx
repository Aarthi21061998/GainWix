// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import meta from "../../assets/Icons/meta.svg";

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
      <div className="   w-full 2xl:!min-h-[75vh] xl:min-h-[70vh] lg:min-h-[55vh] md:min-h-[60vh] xs:min-h-[90vh] flex flex-col justify-end   absolute top-[2vw] md:py-0 md:px-[5rem] xs:p-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className="w-[35vw] flex flex-col   xs:pt-10   xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className="xl:text-[3vw] font-bold   text-[white] font-sora  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start ">
              Grow Your Travel <br /> Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                AI Conversational <br />{" "}
              </span>{" "}
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                Travel Assistant{" "}
              </span>
            </h1>
            <p className="lg:w-[37vw]  font-light font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[1vw] text-[#908eb5]  xl:w-[34vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Gainwix empowers your agency to create a delightful travel
              experience for your customers, from initial inquiry to post-trip
              support. Let's transform your travel business together!
            </p>
            <div className="h-14 flex items-center gap-5">
              <button className="btn btn_primary">Request Demo</button>{" "}
            </div>
          </div>
          <div className=" absolute lg:left-[-1vw] lg:top-[4vw] xl:left-[-7vw] xl:top-[7vw]  w-full h-full flex justify-end">
            <Image src={TravelHero} alt="hero" />{" "}
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
                    Boost Bookings
                    <p className="from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
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
                    Cultivate Customer 
                    <p className=" xs:text-[3.5vw] md:text-[2.5vw] w-[40vw] font-bold">
                      <span className="from-[#8C76F7] via-[#F9AD68] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention & Loyalty
                      </span>
                      {/* <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
                        Retention{" "}
                      </span> */}
                    </p>
                  </div>
                </div>
              }
              list={TravelCardList1}
              image={TravelCard2}
            ></CommonCard>
          </div>
          <div className="w-full from-[#040742] from-50% via-[#101340] to-[#060A22] bg-gradient-to-r ">
            <CommonCard
              text
              className="mx-[5rem] w-full"
              customTitle={
                <>
                  <div className="bg-[#072c37] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                    {/* <img src={Loyalty} alt="" /> */}
                    <p className="text-[0.95vw] font-semibold pl-2  text-[#09CC94]">
                      Gain Loyalty
                    </p>
                  </div>
                  <div className="md:text-[2vw] md:w-[38vw] font-bold text-[#202421] font-sora xs:text-[3.5vw]">
                    <span className="text-[white] text-[2.2vw] xl:w-[40vw] font-bold  font-raleway md:text-[3vw] xs:text-[3.5vw]">
                      Seamless Support & <br />
                      <span className="text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent">
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
