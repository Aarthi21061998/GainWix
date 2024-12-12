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
    <div className="relative overflow-hidden md:w-full  m-auto   lg:w-[80vw] xl:w-[68vw] xs:w-[85vw]">
      <div className="flex animate-marquee space-x-1 min-w-full">
        {[...List, ...List].map((item, index) => (
          <div className="w-full flex flex-row align-center items-center">
            <Image src={star} alt="" className="xs:w-[25px] xl:w-[20px]" />
            <p className="text-[#908EB5]  font-semibold xl:w-[11vw] lg:w-[13vw] xs:w-[42vw] xs:text-[4vw] lg:text-[0.95vw] xl:text-[1vw] lg:pl-5 xl:pl-1.5 xs:pl-1">
              {item?.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
