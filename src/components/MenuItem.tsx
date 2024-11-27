import React from "react";
import MenuListCard from "./MenuListCard";
import Image from "next/image";

import Arrow from "../assets/Icons/Dropdown.svg";

interface MenuItemProps {
  data: {
    title: string;
    subMenu: {
      id: string;
      title?: string;
      list: {
        id: string;
        title: string;
        width?: "lg" | "md" | "sm" | "xs"; // Ensure these are valid options
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
        <p className=" text-[#908EB5] font-Inter font-semibold text-[0.85vw]">
          {data?.title}
        </p>
        <div className="group-hover:rotate-180 transition-all ease-linear duration-200">
          <Image src={Arrow} alt="arrow" />
        </div>
      </div>

      {data?.subMenu.length > 0 && (
        <div className="md:w-[620px]   lg:absolute  lg:right-[-25vw]  bg-[#0E132D] rounded-2xl hidden shadow-[0px_4px_16px_0px_#2D303614] group-hover:flex">
          {data.subMenu.map((item) => (
            <div
              key={item.id}
              className={`w-full md:p-5 xs:p-5 ${
                data.type === "single"
                  ? "border-r border-r-[#D1D3D8] last:border-r-0 mr-5 last:mr-0 last:ml-5"
                  : data.type === "multiple"
                  ? ""
                  : ""
              }`}
            >
              {item.title && (
                <div className="text-base font-semibold text-[#BBBEC5] md:mb-1  font-Inter uppercase">
                  {item.title}
                </div>
              )}

              <div
                className={`w-full ${
                  data.type === "single"
                    ? ""
                    : data.type === "multiple"
                    ? "grid md:grid-cols-2 gap-x-0 gap-y-0 xs:grid-cols-1 xs:max-h-[75vh] xs:h-auto md:max-h-full"
                    : ""
                }`}
              >
                {item.list.map((value) => (
                  <MenuListCard
                    key={value.id}
                    data={value}
                    className={`${
                      value.width === "lg"
                        ? "w-[390px]"
                        : value.width === "md"
                        ? "w-[350px]"
                        : value.width === "sm"
                        ? "w-[250px]"
                        : value.width === "xs"
                        ? "w-[100px]"
                        : ""
                    }`}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuItem;
