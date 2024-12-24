"use client";

import Image from "next/image";

import { CardListType, cardList } from "@constants/home";

export default function Card() {
  return (
    <div className="2xl:w-[64vw] flex flex-row  xl:gap-5 md:gap-5 xs:gap-[5vw] justify-start overflow-x-auto   md:w-full  xs:w-[90vw] xl:w-[70vw] xl:min-h-[35vw] xs:m-auto xs:justify-start md:justify-center md:items-center ">
      {cardList?.map((data: CardListType) => (
        <div
          className="xs:w-[70vw]  md:w-[30vw] md:h-[33vh] xs:h-[45vh] lg:w-[30%] lg:h-[35vh] xl:w-[32%] xl:h-[52vh] xs:rounded-[30px] lg:rounded-[50px] border border-[#2D3154] flex-shrink-0  "
          key={data?.id}
        >
          <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] align-center 2xl:mt-16 xl:mt-6">
            <Image
              src={data?.icon}
              alt=""
              className="xl:w-[60vw] xl:h-[20vh]  md:w-[50vw] md:h-[20vh] xs:w-[50vw] flex justify-center items-center"
            />

            {/* <p className="font-Sora font-semibold xs:text-[4vw] md:text-[2.65vw] lg:text-[3vw] xl:text-[2.65vw] from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-r bg-clip-text text-transparent 2xl:mb-5 xl:mb-12 justify-center items-center ">
              {data?.content}
            </p> */}
            <span className="font-Inter font-medium xs:text-[3vw] md:text-[1.5vw] lg:text-[1.5vw] xl:text-[1vw] text-[#908EB5] text-center  lg:px-5 xs:px-1">
              {data?.content1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
