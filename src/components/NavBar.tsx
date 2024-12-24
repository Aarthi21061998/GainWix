"use client";
import Image from "next/image";

import FullLogo from "@logos/full-logo.svg";
import { cn } from "@helpers/cn";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

import logo from "../assets/Icons/meganum.svg";
import cross from "../assets/Icons/cross.svg";
import MenuItem from "./MenuItem";

import ECommerce from "../assets/Icons/E-commerce.svg";
import Education from "../assets/Icons/Education.svg";
import Retail from "../assets/Icons/Retaile.svg";
import RealEstate from "../assets/Icons/Real Estate 3.svg";
import Travel from "../assets/Icons/Travel 2.svg";
import Marketing from "../assets/Icons/Marketing.svg";

import strategy from "../assets/Icons/strategy 2.svg";
import segment from "../assets/Icons/Segment.svg";
import scale from "../assets/Icons/Scales.svg";
import navIcon from "../assets/Icons/navIcon.svg";

export default function NavBar() {
  const navLink = "text-base font-medium";

  const navRef = useRef(null);
  let [open, setOpen] = useState(false);

  const MenuLists = [
    // {
    //   id: 1,
    //   title: "Product",
    //   type: "single",
    //   width: "lg",

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
              title: "Strategy AI",
              path: "/strategy",
              icon: strategy,
              content: "Experience the real Growth with Gainwix.ai",
            },
            {
              id: 2,
              title: "Segmentation AI ",
              path: "/segment",
              icon: segment,
              content: "Experience the real Growth with Gainwix.ai",
            },
            // {
            //   id: 3,
            //   title: " Scale Through Automation  ",
            //   path: "/scale",
            //   icon: scale,
            //   content: "Experience the real Growth with Gainwix.ai",
            // },
          ],
        },
        // {
        //   id: 2,
        //   title: "Chennals",
        //   width: "sm",
        //   list: [
        //     {
        //       id: 1,
        //       title: "WhatsApp ",
        //     },
        //   ],
        // },
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
            // {
            //   id: 6,
            //   title: "Digital Marketing Agency",
            //   path: "/marketing",
            //   icon: Marketing,
            //   content: "Experience the real Growth with Gainwix.ai",
            // },
          ],
        },
      ],
    },
  ];

  return (
    <div
      className={`2xl:w-full h-[15vh]  shadow-[0px_4px_8px_0px_#0000000F] mx-auto bg-[#060A22] sm:layout xs:w-[100%] xs:p-10 z-50 fixed backdrop-blur-xl`}
      ref={navRef}
    >
      <div className=" h-full flex flex-row items-center  lg:mx-auto  justify-between   xs:w-[100%]  xs:justify-between  ">
        <div className="  2xl:w-[76vw] xl:w-[76vw] 2xl:m-auto  xl:m-auto flex flex-row  justify-between items-center  w-full ">
          <Link href={"/"} className=" pointer">
            <Image src={FullLogo} alt="GainWix Full Logo" />{" "}
          </Link>
          <div className="lg:hidden flex ">
            <div onClick={() => setOpen(!open)}>
              {open ? (
                <Image src={cross} alt="Close menu" />
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
                  "text-[#908EB5] font-Inter font-semibold lg:text-[1.5vw] xl:text-[0.95vw]   "
                )}
              >
                Pricing{" "}
              </Link>{" "}
            </div>
          </div>

          <div className="lg:block items-center lg:gap-10 xl:gap-5 xs:hidden ">
            <button className="btn secondary">
              {" "}
              <a
                href="https://app.gainwix.ai/login"
                target="_blank"
                rel="noreferrer"
              >
                Login{" "}
              </a>
            </button>
            <button className="btn btn_primary">
              {" "}
              <a
                href="https://calendly.com/sales-h-cn/30min?month=2024-12"
                target="_blank"
                rel="noreferrer"
              >
                Request Demo
              </a>
            </button>{" "}
          </div>
        </div>
      </div>

      {/* For responsive */}
      {open && (
        <div className="lg:hidden absolute top-20 left-0 w-full bg-[#060A22] shadow-lg h-[auto] max-h-[auto] ">
          <div className="flex flex-row gap-4 p-4 md:items-center ">
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
          </div>
        </div>
      )}
    </div>
  );
}
