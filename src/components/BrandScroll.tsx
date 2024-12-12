"use client";

import Brand1 from "../assets/Icons/brand1.svg";
import Brand2 from "../assets/Icons/brand2.svg";
import Brand3 from "../assets/Icons/brand3.svg";
import Brand4 from "../assets/Icons/brand4.svg";
import Brand5 from "../assets/Icons/brand5.svg";
import Brand6 from "../assets/Icons/brand6.svg";
import Brand7 from "../assets/Icons/brand7.svg";
import Brand8 from "../assets/Icons/brand8.svg";
import Image from "next/image";

const BrandList = [
  {
    id: 1,
    image: Brand1,
  },

  {
    id: 2,
    image: Brand2,
  },
  {
    id: 3,
    image: Brand3,
  },
  {
    id: 4,
    image: Brand4,
  },
  {
    id: 5,
    image: Brand5,
  },
  {
    id: 6,
    image: Brand6,
  },
  {
    id: 7,
    image: Brand7,
  },
  {
    id: 8,
    image: Brand8,
  },
];
export default function BrandScroll() {
  return (
    <div className="relative overflow-hidden md:w-full  m-auto   lg:w-[80vw]  xs:w-[85vw] xl:w-[74.5vw] 2xl:w-[64vw]">
      <div className="flex animate-marquee space-x-8 min-w-full">
        {[...BrandList, ...BrandList].map((item, index) => (
          <Image
            key={index}
            src={item.image}
            alt={`Brand ${item.id}`}
            width={100}
            height={100}
          />
        ))}
      </div>
    </div>
  );
}
