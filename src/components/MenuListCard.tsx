import { cn } from "@helpers/cn";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function MenuListCard(props: any) {
  const { data, className, ...prop } = props;
  return (
    <Link href={data?.path || "/default-path"} target="_top">
      <div
        className={cn(
          "flex items-start align-center md:py-3 xl:pb-3 xs:p-1 rounded-xl md:hover:bg-[#2D2E4F] ",
          className
        )}
        {...prop}
      >
        <div className=" flex-column items-center  ">
          <div className="flex items-center   xl:w-[15vw] xl:h-[6vh] ">
            {data?.icon && <Image src={data?.icon} alt="icon" className=" " />}

            <div className=" 2xl:w-[10vw] xs:w-[44vw] xl:text-[1vw] lg:text-[2vw]  xs:text-[3.5vw] md:text-[2.5vw] font-semibold font-Inter text-[#908EB5]   ">
              {data?.title}
            </div>
          </div>
          {data?.content && (
            <span className="md:text-[13px] font-medium text-[#616874] md:pl-14 xl:-mt-5 xl:w-[22vw]  xl:text-start  2xl:-mt-8 xs:pt-1 lg:pt-6  xs:text-[3.5vw] md:w-[40vw]  xs:w-[80vw]  xl:flex xl:items-center xl:pr-10  2xl:w-[100%]">
              {data?.content}
            </span>
          )}
        </div>
        
      </div>
    </Link>
  );
}
