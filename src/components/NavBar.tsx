"use client";
import Image from "next/image";

import FullLogo from "@logos/full-logo.svg";
import { cn } from "@helpers/cn";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import meta from "../assets/Icons/meta.svg";
import logo from "../assets/Icons/meganum.svg";
import MenuItem from "./MenuItem";

import ECommerce from "../assets/Icons/E-commerce.svg";
import Education from "../assets/Icons/Education.svg";
import Retail from "../assets/Icons/Retaile.svg";
import RealEstate from "../assets/Icons/Real Estate 3.svg";
import Travel from "../assets/Icons/Travel 2.svg";
import Marketing from "../assets/Icons/Marketing.svg";

import navIcon from "../assets/Icons/navIcon.svg";

export default function NavBar() {
  const navLink = "text-base font-medium";

  const navRef = useRef(null);
  let [open, setOpen] = useState(false);
  // const [selectedCountry, setSelectedCountry] = useState(countryList?.[0]);

  // const MenuLists = [
  //   {
  //     id: 1,
  //     title: "Product",
  //     type: "single",
  //     subMenu: [
  //       {
  //         id: 1,
  //         title: "Platform",
  //         width: "lg",
  //         list: [
  //           {
  //             id: 1,
  //             path: "/",
  //             title: "Conversational Relationship Platform ",
  //             icon: ICONS?.Chat,
  //             content:
  //               "Accelerate Business Growth with our Conversational Relationship Platform.",
  //           },
  //         ],
  //       },
  //       {
  //         id: 2,
  //         title: "Channels",
  //         width: "sm",
  //         list: [
  //           {
  //             id: 1,
  //             title: "WhatsApp ",
  //             icon: ICONS?.Whatsapp,
  //           },
  //         ],
  //       },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     title: "Industries",
  //     type: "multiple",
  //     subMenu: [
  //       {
  //         id: 1,
  //         title: "Platform",
  //         width: "md",
  //         list: [
  //           {
  //             id: 1,
  //             title: "E-commerce",
  //             path: "/ecommerce",
  //             icon: ICONS?.Cart,
  //             content:
  //               "Grow Your E-Commerce Business with Conversational Commerce",
  //           },
  //           {
  //             id: 2,
  //             title: "Retail industry",
  //             path: "/retail",
  //             icon: ICONS?.Home,
  //             content:
  //               "Grow Your Retail Business with Conversational Shopping.",
  //           },
  //           {
  //             id: 3,
  //             title: "Education",
  //             path: "/education",
  //             icon: ICONS?.Education,
  //             content:
  //               "Grow Your Ed Tech Institution with Conversational Learning",
  //           },
  //           {
  //             id: 4,
  //             title: "Real Estate",
  //             path: "/real_estate",
  //             icon: ICONS?.Realestate,
  //             content:
  //               "Grow Your Business with Conversational Property Solutions.",
  //           },
  //           {
  //             id: 5,
  //             title: "Travel",
  //             path: "/travel",
  //             icon: ICONS?.TravelIcon,
  //             content:
  //               "Grow Your Travel Business with Conversational Travel Assistant",
  //           },
  //         ],
  //       },
  //     ],
  //   },
  // ];

  // const onCountryChange = (item) => setSelectedCountry(item);

  // const handleClickOutside = (event) => {
  //   if (navRef.current && !navRef.current.contains(event.target)) {
  //     setOpen(false);
  //   }
  // };

  // useEffect(() => {
  //   if (open) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [open]);

  const MenuLists = [
    {
      id: 1,
      title: "Product",
      type: "single",
      subMenu: [
        {
          id: 1,
          title: "Platform",
          width: "lg",
          list: [
            {
              id: 1,
              path: "/",
              title: "Conversational Relationship Platform ",
              // icon: ICONS?.Chat,
              content:
                "Accelerate Business Growth with our Conversational Relationship Platform.",
            },
          ],
        },
        {
          id: 2,
          title: "Channels",
          width: "sm",
          list: [
            {
              id: 1,
              title: "WhatsApp ",
              // icon: ICONS?.Whatsapp,
            },
          ],
        },
      ],
    },
    {
      id: 2,
      title: "Industries",
      type: "multiple",
      subMenu: [
        {
          id: 1,
          title: "Industries",
          width: "md",
          list: [
            {
              id: 1,
              title: "E-commerce",
              path: "/ecommerce",
              icon: ECommerce,
              content:
                "Grow Your E-Commerce Business with Conversational Commerce",
            },
            {
              id: 2,
              title: "Education",
              path: "/education",
              icon: Education,
              content:
                "Grow Your Ed Tech Institution with Conversational Learning",
            },
            {
              id: 3,
              title: "Retail industry",
              path: "/retail",
              icon: Retail,
              content:
                "Grow Your Retail Business with Conversational Shopping.",
            },
            {
              id: 4,
              title: "Real Estate",
              path: "/real_estate",
              icon: RealEstate,
              content:
                "Grow Your Business with Conversational Property Solutions.",
            },
            {
              id: 5,
              title: "Travel",
              path: "/travel",
              icon: Travel,
              content:
                "Grow Your Travel Business with Conversational Travel Assistant",
            },
            {
              id: 6,
              title: "Digital Marketing Agency",
              path: "/marketing",
              icon: Marketing,
              content: "Experience the real Growth with Gainwix.ai",
            },
          ],
        },
      ],
    },
  ];

  // useEffect(() => {
  //   if (open) {
  //     document.addEventListener("mousedown", handleClickOutside);
  //   } else {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   }
  //   return () => {
  //     document.removeEventListener("mousedown", handleClickOutside);
  //   };
  // }, [open]);
  return (
    <div
      className={`2xl:w-full h-20 shadow-[0px_4px_8px_0px_#0000000F] mx-auto bg-[#060A22] sm:layout xs:w-[100%] xs:p-10 z-50 fixed backdrop-blur-xl`}
      ref={navRef}
    >
      <div className=" h-full flex flex-row items-center  lg:mx-auto  justify-between   xs:w-[100%]  xs:justify-between  ">
        {/* <div className=" flex w-[full] justify-evenly items-center   text-[#908EB5]"> */}
        <div className=" w-full flex flex-row  justify-between items-center ">
          <Link href={"/"} className=" pointer">
            <Image src={FullLogo} alt="GainWix Full Logo" />{" "}
          </Link>
          <div className="lg:hidden flex">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <Image src={meta} alt="Close menu" />
              ) : (
                <Image src={navIcon} alt="Open menu" />
              )}
            </div>
          </div>
          <div
            className={`hidden lg:flex items-center md:gap-10 px-5 md:pl-20  2xl:mr-10`}
          >
            {MenuLists?.map((menu: any) => (
              <MenuItem key={menu?.id} data={menu} type={menu.type} />
            ))}
            <div className="hidden lg:block cursor-pointer m-0 pl-5 text-base font-semibold  ">
              <Link
                href={"/pricing"}
                className={cn(
                  navLink,
                  "text-[#908EB5] font-Inter font-semibold xl:text-[1vw] lg:text-[1.5vw]  "
                )}
              >
                Pricing{" "}
              </Link>{" "}
            </div>
          </div>

          <div className="lg:block items-center lg:gap-10 xl:gap-5 xs:hidden ">
            <button className="btn secondary">Login</button>
            <button className="btn btn_primary">Request Demo</button>{" "}
          </div>
        </div>
      </div>

      {/* For responsive */}
      {open && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#060A22] shadow-lg h-[auto] max-h-[auto] ">
          <div className="flex flex-row gap-4 p-4 md:items-center">
            {MenuLists?.map((menu: any) => (
              <>
                <MenuItem key={menu?.id} data={menu} type={menu.type} />
              </>
            ))}
            <div className="cursor-pointer text-base font-semibold md:pl-[1vw] text-[#908EB5] md:text-[3.5vw] lg:text-[1.5vw] xl:text-[2vw]">
              <Link href={"/pricing"} target="_top">
                Pricing
              </Link>
            </div>
            {/* <div className="mt-1.5 flex items-center">
              <DropDown
                items={countryList}
                selectedItem={selectedCountry}
                onChange={onCountryChange}
                listStyle="w-28"
                className="bg-gray-100"
              >
                <div>
                  {selectedCountry ? (
                    <div className="flex items-center gap-2.5">
                      <img src={selectedCountry?.icon} alt="country images" />
                      <div className="uppercase">{selectedCountry?.title}</div>
                    </div>
                  ) : (
                    <div>Please Select</div>
                  )}
                </div>
              </DropDown>
            </div> */}
          </div>
        </div>
      )}
    </div>
  );
}
