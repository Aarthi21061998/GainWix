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
    <div className="relative overflow-hidden  mx-40">
      <div className="flex  animate-marquee space-x-8">
        {[...List, ...List].map((item, index) => (
          <div className="w-full flex flex-row align-center items-center">
            <Image src={star} alt="" />
            <p className="text-[#908EB5] w-[13vw] pl-5">{item?.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
