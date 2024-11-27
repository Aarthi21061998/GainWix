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
          "flex items-start align-center md:py-3  xs:p-1 rounded-xl hover:bg-[#2D2E4F] ",
          className
        )}
        {...prop}
      >
        <div className=" flex-column items-center">
          <div className="flex items-center w-[15vw] h-[6vh] ">
            {data?.icon && <Image src={data?.icon} alt="icon" className=" " />}

            <div className="md:text-[1vw] xs:text-[3.5vw] font-semibold font-Inter text-[#908EB5]   ">
              {data?.title}
            </div>
          </div>
          {data?.content && (
            <div className="md:text-[13px] font-medium text-[#616874] md:pl-14 -mt-5 pt-6  xs:text-[3.5vw] md:w-[20vw] xs:w-[80vw]">
              {data?.content}
            </div>
          )}
        </div>
      </div>
    </Link>
  );
}
