"use client";

import Image from "next/image";

// import image from "../assets/Icons/1st.svg";
// import image1 from "../assets/Icons/second.svg";
// import image2 from "../assets/Icons/3rd.svg";
import { CardListType, cardList } from "@constants/home";

export default function Card() {
  return (
    <div className="w-full flex flex-row gap-10 justify-center">
      {cardList?.map((data: CardListType) => (
        <div
          className="w-[25%] h-[48vh] rounded-[50px] border border-[#2D3154] "
          key={data?.id}
        >
          <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw]  align-center mt-16">
            {/* <Image src={data?.icon} alt="" /> */}
            <Image
              src={data?.icon}
              alt=""
              className="w-[60vw] h-[20vh] flex justify-center items-center"
            />

            <p className="font-Sora font-semibold from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-r bg-clip-text text-transparent mb-5 ">
              {data?.content}
            </p>
            <span className=" font-Inter font-medium text-[1vw] text-[#908EB5] text-center px-5">
              {data?.content1}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}
