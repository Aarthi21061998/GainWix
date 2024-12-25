"use client";

import { FOOTER_LINKS } from "@constants/footer";
import Image from "next/image";
import Link from "next/link";
import FullLogo from "@logos/full-logo.svg";
import Facebook from "@custom-svg/Facebook";
import Instagram from "@custom-svg/Instagram";
import Linkedin from "@custom-svg/Linkedin";
import Twitter from "@custom-svg/Twitter";
import { useState } from "react";
import Arrow from "../assets/Icons/Dropdown.svg";

type ListItem = {
  id: number;
  label: string;
  path?: string; // Path is optional
  href?: string; // Href is optional
};

type FooterLink = {
  id: number;
  label: string;
  lists: ListItem[];
};

type OpenSections = Record<string, boolean>;

export default function Footer(): JSX.Element {
  const [openSections, setOpenSections] = useState<OpenSections>({});

  const toggleSection = (id: string): void => {
    setOpenSections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="xs:px-5 md:layout text-white bg-[#060A22]">
      <div className="xl:min-h-[50vh] pt-[4.5vw] md:pl-[3vw] lg:flex pb-[1vw] gap-20 xs:block xl:w-[80vw] 2xl:w-[64vw] xl:m-auto">
        {/* Logo and Description */}
        <div className="w-[40vw] lg:block">
          <Image
            src={FullLogo}
            alt="GainWix Logo"
            className="lg:w-[13.8vw] lg:h-[3.2vw] mb-6 xs:w-[50vw] xs:h-[5vh]"
          />
          <p className="lg:max-w-[50vw] lg:w-full flex items-center gap-1 font-medium cursor-pointer font-Inter text-[#908EB5] xs:text-[16px] md:text-[18px] xs:w-[88vw] xs:mb-5">
            Transform your digital marketing <br />
            with powerful, data-driven Generative AI
          </p>
          {/* Social Media Links */}
          <div className="lg:flex flex-row items-center gap-5 mt-10 xs:hidden">
            <SocialMediaLink
              href="https://www.instagram.com/gainwix/"
              Icon={Instagram}
            />
            <SocialMediaLink
              href="https://www.facebook.com/people/GainWix/61556584534406/"
              Icon={Facebook}
            />
            <SocialMediaLink
              href="https://www.linkedin.com/company/gainwixai/"
              Icon={Linkedin}
            />
            <SocialMediaLink
              href="https://x.com/i/flow/login?redirect_after_login=%2Fgainwixai%2F"
              Icon={Twitter}
            />
          </div>
        </div>

        {/* Footer Links */}
        <div className="xs:w-[50vw] lg:flex justify-between xs:block pointer">
          {FOOTER_LINKS.length > 0 &&
            FOOTER_LINKS.map((data: FooterLink) => {
              const isOpen = openSections[data.id.toString()];

              return (
                <div key={data.id} className="flex flex-col gap-5 xs:mt-3">
                  <h4
                    className="lg:text-[0.97vw] xs:text-[3.5vw] text-[#908EB5] font-Inter font-bold flex xs:justify-between xs:w-[80vw] lg:w-[10vw] xs:py-2 items-center lg:justify-start cursor-pointer lg:cursor-default"
                    onClick={() => toggleSection(data.id.toString())}
                  >
                    {data.label}
                    <div className="lg:hidden ml-2">
                      <Image
                        src={Arrow}
                        alt="Dropdown Arrow"
                        className={`transition-transform duration-300 xs:w-[6vw] h-[3vh] ${
                          isOpen ? "rotate-180" : "rotate-0"
                        }`}
                      />
                    </div>
                  </h4>

                  <ul
                    className={`flex flex-col ${
                      isOpen ||
                      (typeof window !== "undefined" &&
                        window.innerWidth >= 992)
                        ? "block"
                        : "hidden"
                    } lg:block`}
                  >
                    {data.lists.map((list) => (
                      <li
                        key={list.id}
                        className="w-full xs:text-[4vw] md:text-[2vw] lg:text-[0.87vw] py-2 font-medium text-[#55567A] font-Inter hover:text-[#e2deff] pointer"
                      >
                        <Link href={list.path ?? list.href ?? "#"}>
                          {list.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
        </div>
      </div>

      {/* Footer Bottom Section */}
      <div className="w-full lg:h-20 flex-center xs:flex-col xs:h-40 gradient-border font-Inter font-medium text-[#908EB5] xs:text-[3.5vw] md:text-[2vw] lg:text-[1vw]">
        &copy; GainWix 2024, All Rights Reserved.
        {/* Mobile Social Media Links */}
        <div className="xs:flex lg:hidden items-center gap-5 mt-10 xs:mb-5 xs:justify-center">
          <SocialMediaLink Icon={Instagram} />
          <SocialMediaLink Icon={Facebook} />
          <SocialMediaLink Icon={Linkedin} />
          <SocialMediaLink Icon={Twitter} />
        </div>
      </div>
    </div>
  );
}

// Social Media Link Component
type SocialMediaLinkProps = {
  href?: string;
  Icon: React.ComponentType;
};

const SocialMediaLink: React.FC<SocialMediaLinkProps> = ({ href, Icon }) => (
  <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5]">
    {href ? (
      <a href={href} target="_blank" rel="noopener noreferrer">
        <Icon />
      </a>
    ) : (
      <Icon />
    )}
  </div>
);
