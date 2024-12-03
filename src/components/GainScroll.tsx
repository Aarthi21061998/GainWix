"use client";

import Image from "next/image";

import star from "../assets/Icons/star.svg";

const List = [
  {
    id: 1,
    content: "Gain Growth",
  },
  {
    id: 2,
    content: "Gain Sales",
  },
  {
    id: 3,
    content: "Gain Customers",
  },
  {
    id: 4,
    content: "Gain Loyalty",
  },
  {
    id: 5,
    content: "Gain Growth",
  },
  {
    id: 6,
    content: "Gain Sales",
  },
];
export default function GainScroll() {
  return (
    <div className="relative overflow-hidden md:w-full  m-auto   lg:w-[80vw] xs:w-[85vw]">
      <div className="flex animate-marquee space-x-1 min-w-full">
        {[...List, ...List].map((item, index) => (
          <div className="w-full flex flex-row align-center items-center">
            <Image src={star} alt="" className="xs:w-[10px]" />
            <p className="text-[#908EB5] lg:w-[13vw] xs:w-[20vw] xs:text-[2vw] lg:text-[0.95vw] lg:pl-5">
              {item?.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
