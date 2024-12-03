"use client";

import Image from "next/image";

import { CardListType, cardList } from "@constants/home";

export default function Card() {
  return (
    <div className="xl:w-full flex flex-row gap-10 justify-start overflow-x-auto xs:w-[90vw]  xl:min-h-[50vw] xs:m-auto xs:justify-start md:justify-center md:items-center ">
      {cardList?.map((data: CardListType) => (
        <div
          className="xs:w-[70vw]  md:w-[26vw] md:h-[30vh] xs:h-[40vh] lg:w-[30%] lg:h-[40vh] xl:w-[30%] xl:h-[58vh] xs:rounded-[30px] lg:rounded-[50px] border border-[#2D3154] flex-shrink-0  "
          key={data?.id}
        >
          <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] align-center xl:mt-16">
            <Image
              src={data?.icon}
              alt=""
              className="xl:w-[60vw] xl:h-[20vh]  md:w-[50vw] md:h-[20vh] xs:w-[50vw] flex justify-center items-center"
            />

            <p className="font-Sora font-semibold xs:text-[4vw] md:text-[1.65vw] from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-r bg-clip-text text-transparent mb-5 justify-center items-center ">
              {data?.content}
            </p>
            <span className="font-Inter font-medium xs:text-[3vw] md:text-[0.85vw] lg:text-[1vw] text-[#908EB5] text-center  lg:px-5 xs:px-1">
              {data?.content1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
