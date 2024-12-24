import React from "react";
import MenuListCard from "./MenuListCard";
import Image from "next/image";

import Arrow from "../assets/Icons/Dropdown.svg";

interface MenuItemProps {
  data: {
    title: string;
    content?: string; // Ensure these are valid options

    subMenu: {
      id: string;
      title?: string;
      content?: string; // Ensure these are valid options

      list: {
        id: string;
        title: string;
        width?: "lg" | "md" | "sm" | "xs";
      }[];
    }[];
    type: "single" | "multiple" | "other"; // Ensure type options match your use case
  };
  type: "single" | "multiple" | "other"; // Adjust this if necessary
}

const MenuItem: React.FC<MenuItemProps> = ({ data }) => {
  return (
    <div className="relative group cursor-pointer h-auto ">
      <div className="md:py-2.5 flex items-center  md:px-2.5">
        <p className=" text-[#908EB5] font-Inter font-semibold xl:text-[0.85vw] xs:text-[4vw] lg:text-[1.5vw]">
          {data?.title}
        </p>

        <div className="group-hover:rotate-180 transition-all ease-linear duration-200">
          <Image src={Arrow} alt="arrow" />
        </div>
      </div>

      {data?.subMenu.length > 0 && (
        <div
          className={`${
            data?.type === "multiple"
              ? "xl:w-[670px] lg:w-[700px] 2xl:w-[750px] md:w-[700px] xs:w-[350px] xs:absolute xs:right-[-50vw] xl:top-[2vw] 2xl:absolute 2xl:right-[-15vw] lg:absolute xl:left-[-10vw] lg:right-[-25vw] bg-[#0E132D] rounded-2xl hidden shadow-[0px_4px_16px_0px_#2D303614] group-hover:flex"
              : data?.type === "single"
              ? "xl:w-[500px] lg:w-[700px] 2xl:w-[750px] md:w-[700px] xs:w-[350px] xs:absolute xs:right-[-50vw] xl:top-[2.5vw] 2xl:absolute 2xl:right-[-15vw] lg:absolute xl:left-[-10vw] lg:right-[-25vw] bg-[#0E132D] rounded-2xl hidden shadow-[0px_4px_16px_0px_#2D303614] group-hover:flex"
              : ""
          }`}
        >
          {data.subMenu.map((item) => (
            <div
              key={item.id}
              className={` w-full  xs:p-5 ${
                data.type === "single"
                  ? "w-[40vw]"
                  : data.type === "multiple"
                  ? ""
                  : ""
              }`}
            >
              {item.title && (
                <>
                  <div className=" text-[1.5vw] font-semibold text-[#908EB5]  font-Inter  ">
                    {item.title}
                  </div>
                  <div className="font-medium text-[#55567A] text-[1vw]  font-Inter">
                    {item?.content}
                  </div>
                </>
              )}

              <div
                className={`w-full ${
                  data.type === "single"
                    ? "flex flex-col"
                    : data.type === "multiple"
                    ? "grid md:grid-cols-2 gap-x-0 gap-y-0 xs:grid-cols-1 xs:max-h-[75vh] xs:h-auto md:max-h-full"
                    : ""
                }`}
              >
                {item?.list?.map((value) => (
                  <MenuListCard
                    key={value.id}
                    data={value}
                    className={
                      value.width === "lg"
                        ? ""
                        : value.width === "md"
                        ? ""
                        : value.width === "sm"
                        ? "w-[250px]"
                        : value.width === "xs"
                        ? "w-[100px]"
                        : ""
                    }
                  />
                ))}

                <div className="lg:hidden items-center gap-5 xs:py-10 xs:flex xs:flex-row    ">
                  <button className="btn secondary">Login</button>
                  <button className="btn btn_primary">Request Demo</button>{" "}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
