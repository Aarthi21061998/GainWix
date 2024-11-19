// assets
import Image from "next/image";
import ECommerceBg from "../../assets/Icons/E-commerce bg.svg";
import ecommerce1 from "../../assets/Icons/ecommerce1.svg";
import meta from "../../assets/Icons/meta.svg";

// components
import React from "react";
import BrandScroll from "@components/BrandScroll";
import CommonCard from "@components/CommonCard";
import Card from "@components/Card";
import GainScroll from "@components/GainScroll";
import {
  EcommerceList1,
  EcommerceList2,
  EcommerceList3,
} from "@constants/ecommerce";

import DigitalMarketing from "@components/DigitalMarketing";

export default function Ecommerce() {
  return (
    <div className=" relative bg-[#060A22] ">
      <Image src={ECommerceBg} alt="" />
      <div className="  w-full 2xl:!min-h-[75vh] xl:min-h-[70vh] lg:min-h-[55vh] md:min-h-[60vh] xs:min-h-[90vh] flex flex-col justify-end   absolute top-[2vw] md:py-0 md:px-[5rem] xs:p-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className="w-[30vw] flex flex-col   xs:pt-10   xs:mt-[5vw] md:flex  md:items-center lg:items-baseline  xs:items-center">
            <h1 className="xl:text-[3vw] font-bold   text-[white] font-sora  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start ">
              Grow Your <br /> E-Commerce Business With <br />
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-sora">
                AI Conversational Commerce{" "}
              </span>
            </h1>
            <p className="w-5/4 font-medium font-Inter mt-5 mb-7 lg:text-[1vw] 2xl:text-[0.95vw] text-[white]  lg:w-[45vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Transform E-Commerce shopping into a personalized journey with
              Gainwix.ai. From turning conversations into conversions to
              managing all aspects of sales, support, and marketing from an
              unified platform.
            </p>
            <div className="h-14 flex items-center gap-5">
              <button className="btn btn_primary">Request Demo</button>{" "}
            </div>
          </div>
          <div className=" absolute lg:right-[5vw] lg:top-[7vw]  w-full h-full flex justify-end">
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

      <div className=" rounded-[120px] min-h-[150vh] ">
        <div className="md:py-0 md:px-[5rem] xs:p-10 ">
          <CommonCard
            text
            customTitle={
              <div className="-mt-20 xs:mt-[10vw]">
                <div className="p-2 border-2 border-[#BEAAFF] rounded-[30px] inline-flex items-center bg-[#6940F2] mb-5">
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
            revers
          ></CommonCard>
          ;
          <CommonCard
            text
            customTitle={
              <>
                <div className="bg-[#0F4EEF] inline-flex p-3 border border-[#A7C0FF]  rounded-[30px]  items-center mb-5">
                  {/* <img src={Retention} alt="" /> */}
                  <p className="text-[1vw] font-semibold pl-2 text-[#A7C0FF]">
                    Gain Retention{" "}
                  </p>
                </div>
                <div className="text-[2.2vw] md:w-[45vw] font-bold text-[#202421] font-raleway md:text-[32px] xs:text-[3.5vw]">
                  <span className=" text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw]">
                    Build Loyalty And <br />
                    Drive
                  </span>{" "}
                  <span className="  text-[2.2vw] w-[40vw] font-bold text-[white] font-sora md:text-[3vw] xs:text-[3.5vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent  ">
                    {" "}
                    Repeat <br /> Business{" "}
                  </span>{" "}
                </div>
              </>
            }
            list={EcommerceList2}
          >
            <Image src={meta} alt="" />
          </CommonCard>
          <CommonCard
            text
            customTitle={
              <>
                <div className="bg-[] inline-flex p-2 border-2 border-[#09CC94]  rounded-[30px]  items-center mb-5">
                  {/* <img src={Loyalty} alt="" /> */}
                  <p className="text-[1vw] font-semibold pl-2 text-[#09CC94]">
                    Gain Loyalty
                  </p>
                </div>
                <div className="md:text-[2vw] md:w-[38vw] font-bold text-[#202421] font-sora xs:text-[3.5vw]">
                  <span className="text-[white] text-[2.2vw] xl:w-[40vw] font-bold  font-raleway md:text-[3vw] xs:text-[3.5vw]">
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
          >
            {/* // image={ICONS?.ECommerceCard3} */}
          </CommonCard>
        </div>
      </div>

      <div className="py-10">
        <DigitalMarketing />
      </div>
      <div className="mt-10">
        <BrandScroll />
      </div>
    </div>
  );
}
