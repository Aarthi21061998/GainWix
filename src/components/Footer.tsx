// "use client";

// import { FOOTER_LINKS } from "@constants/footer";
// import Image from "next/image";
// import Link from "next/link";
// import FullLogo from "@logos/full-logo.svg";
// import Facebook from "@custom-svg/Facebook";
// import Instagram from "@custom-svg/Instagram";
// import Linkedin from "@custom-svg/Linkedin";
// import Twitter from "@custom-svg/Twitter";
// import { useState } from "react";
// import Arrow from "../assets/Icons/Dropdown.svg";

// export default function Footer() {
//   const [openSections, setOpenSections] = useState({});

//   type OpenSections = {
//     [key: string]: boolean;
//   };

//   const toggleSection = (id: string) => {
//     setOpenSections((prevState: OpenSections) => ({
//       ...prevState,
//       [id]: !prevState[id],
//     }));
//   };

//   return (
//     <div className="xs:px-5 md:layout text-[white] bg-[#060A22]">
//       <div className="xl:min-h-[50vh] pt-[4.5vw] pl-[3vw] lg:flex pb-[1vw] gap-20 xs:block">
//         <div className="w-[40vw] lg:block">
//           <Image
//             src={FullLogo}
//             alt="logo"
//             className="lg:w-[13.8vw] lg:h-[3.2vw] mb-6 xs:w-[50vw] xs:h-[5vh]"
//           />

//           <p className="lg:max-w-[50vw] lg:w-full flex items-center gap-1 font-medium cursor-pointer font-Inter text-[#908EB5] xs:text-[14px]  xs:w-[88vw] xs:mb-5 ">
//             Transform your digital marketing <br />
//             with powerful, data-driven Generative AI
//           </p>
//           <div className=" lg:flex flex-row items-center gap-5 mt-10 xs:hidden ">
//             <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5] hover-instagram">
//               <Instagram />
//             </div>
//             <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5] hover-instagram">
//               <Facebook />
//             </div>
//             <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5] hover-instagram">
//               <Linkedin />
//             </div>
//             <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5] hover-instagram">
//               <Twitter />
//             </div>
//           </div>
//         </div>

//         <div className="xs:w-[50vw] lg:flex justify-between xs:block">
//           {FOOTER_LINKS?.map((l) => {
//             const isOpen = openSections[l.id];

//             return (
//               <div key={l.id} className={`flex flex-col gap-5 xs:mt-3 `}>
//                 <h4
//                   className="lg:text-[0.97vw] xs:text-[2vw] text-[#908EB5] font-Inter font-bold flex xs:justify-between  xs:w-[80vw] lg:w-[10vw] xs:py-2 items-center lg:justify-start cursor-pointer lg:cursor-default"
//                   onClick={() => toggleSection(l.id)}
//                 >
//                   {l.label}
//                   <div className="lg:hidden ml-2">
//                     <Image
//                       src={Arrow}
//                       alt="arrow"
//                       className={`transition-transform duration-300 xs:w-[6vw] h-[3vh]${
//                         isOpen ? "rotate-180" : "rotate-0"
//                       }`}
//                     />
//                   </div>
//                 </h4>

//                 <ul
//                   className={`flex flex-col  ${
//                     isOpen || window.innerWidth >= 992 ? "block" : "hidden"
//                   } lg:block`}
//                 >
//                   {l.lists?.map((list) => (
//                     <div
//                       key={list?.id}
//                       className="w-full xs:text-[4vw] md:text-[2vw] lg:text-[0.87vw] py-2 font-medium text-[#55567A] font-Inter hover:text-[#e2deff]"
//                     >
//                       {list.label}
//                     </div>
//                   ))}
//                 </ul>
//               </div>
//             );
//           })}
//         </div>
//       </div>

//       <div className="w-full lg:h-20 flex-center xs:flex-col  xs:h-40 gradient-border font-Inter font-medium text-[#908EB5] xs:text-[3.5vw]  md:text-[2vw] lg:text-[1vw]">
//         &copy; GainWix 2024, All Rights Reserved.
//         <div className="xs:flex  lg:hidden items-center gap-5 mt-10 xs:mb-5  xs:justify-center">
//           <div className=" xs:rounded-[50%]   xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] md:rounded-[50%] lg:size-10 lg:rounded-2xl bg-[#2B2E4F] flex-center hover:bg-[#908EB5] hover-instagram">
//             <Instagram />
//           </div>
//           <div className=" xs:rounded-[50%]   xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] md:rounded-[50%] lg:size-10 lg:rounded-2xl bg-[#2B2E4F] flex-center hover:bg-[#908EB5] hover-instagram">
//             <Facebook />
//           </div>
//           <div className="xs:rounded-[50%]   xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] md:rounded-[50%] lg:size-10 lg:rounded-2xl bg-[#2B2E4F] flex-center hover:bg-[#908EB5] hover-instagram">
//             <Linkedin />
//           </div>
//           <div className="xs:rounded-[50%]   xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] md:rounded-[50%] lg:size-10 lg:rounded-2xl bg-[#2B2E4F] flex-center hover:bg-[#908EB5] hover-instagram">
//             <Twitter />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
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

type FooterLink = {
  id: number; // Update this to number if id is a number
  label: string;
  lists: {
    id: number;
    label: string;
    href: string;
  }[];
};

type OpenSections = {
  [key: string]: boolean;
};

export default function Footer() {
  const [openSections, setOpenSections] = useState<OpenSections>({});

  const toggleSection = (id: string) => {
    setOpenSections((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  return (
    <div className="xs:px-5 md:layout text-white bg-[#060A22]">
      <div className="xl:min-h-[50vh] pt-[4.5vw] pl-[3vw] lg:flex pb-[1vw] gap-20 xs:block">
        <div className="w-[40vw] lg:block">
          <Image
            src={FullLogo}
            alt="logo"
            className="lg:w-[13.8vw] lg:h-[3.2vw] mb-6 xs:w-[50vw] xs:h-[5vh]"
          />

          <p className="lg:max-w-[50vw] lg:w-full flex items-center gap-1 font-medium cursor-pointer font-Inter text-[#908EB5] xs:text-[14px]  xs:w-[88vw] xs:mb-5 ">
            Transform your digital marketing <br />
            with powerful, data-driven Generative AI
          </p>

          <div className="lg:flex flex-row items-center gap-5 mt-10 xs:hidden">
            <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5]">
              <Instagram />
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5]">
              <Facebook />
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5]">
              <Linkedin />
            </div>
            <div className="w-10 h-10 rounded-2xl bg-[#2B2E4F] flex justify-center items-center hover:bg-[#908EB5]">
              <Twitter />
            </div>
          </div>
        </div>

        <div className="xs:w-[50vw] lg:flex justify-between xs:block">
          {FOOTER_LINKS.map((l: FooterLink) => {
            const isOpen = openSections[l.id.toString()]; // Ensure id is a string for openSections

            return (
              <div key={l.id} className="flex flex-col gap-5 xs:mt-3">
                <h4
                  className="lg:text-[0.97vw] xs:text-[2vw] text-[#908EB5] font-Inter font-bold flex xs:justify-between xs:w-[80vw] lg:w-[10vw] xs:py-2 items-center lg:justify-start cursor-pointer lg:cursor-default"
                  onClick={() => toggleSection(l.id.toString())} // Convert id to string if needed
                >
                  {l.label}
                  <div className="lg:hidden ml-2">
                    <Image
                      src={Arrow}
                      alt="arrow"
                      className={`transition-transform duration-300 xs:w-[6vw] h-[3vh] ${
                        isOpen ? "rotate-180" : "rotate-0"
                      }`}
                    />
                  </div>
                </h4>

                <ul
                  className={`flex flex-col ${
                    isOpen ||
                    (typeof window !== "undefined" && window.innerWidth >= 992)
                      ? "block"
                      : "hidden"
                  } lg:block`}
                >
                  {l.lists.map((list) => (
                    <div
                      key={list.id}
                      className="w-full xs:text-[4vw] md:text-[2vw] lg:text-[0.87vw] py-2 font-medium text-[#55567A] font-Inter hover:text-[#e2deff]"
                    >
                      {list.label}
                    </div>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="w-full lg:h-20 flex-center xs:flex-col xs:h-40 gradient-border font-Inter font-medium text-[#908EB5] xs:text-[3.5vw] md:text-[2vw] lg:text-[1vw]">
        &copy; GainWix 2024, All Rights Reserved.
        <div className="xs:flex lg:hidden items-center gap-5 mt-10 xs:mb-5 xs:justify-center">
          <div className="xs:rounded-[50%] xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] md:rounded-[50%] bg-[#2B2E4F] flex-center hover:bg-[#908EB5]">
            <Instagram />
          </div>
          <div className="xs:rounded-[50%] xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] bg-[#2B2E4F] flex-center hover:bg-[#908EB5]">
            <Facebook />
          </div>
          <div className="xs:rounded-[50%] xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] bg-[#2B2E4F] flex-center hover:bg-[#908EB5]">
            <Linkedin />
          </div>
          <div className="xs:rounded-[50%] xs:w-[12vw] xs:h-[5vh] md:w-[7vw] md:h-[5vh] bg-[#2B2E4F] flex-center hover:bg-[#908EB5]">
            <Twitter />
          </div>
        </div>
      </div>
    </div>
  );
}
