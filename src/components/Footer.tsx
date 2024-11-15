// import { FOOTER_LINKS } from "@constants/footer";
// import Image from "next/image";
// import Link from "next/link";
// import FullLogo from "@logos/full-logo.svg";
// import Facebook from "@custom-svg/Facebook";
// import Instagram from "@custom-svg/Instagram";
// import Linkedin from "@custom-svg/Linkedin";
// import Twitter from "@custom-svg/Twitter";

// export default function Footer() {
//   return (
//     <footer className="bg-[#060A22] text-white  flex flex-col gap-10 px-20">
//       <div className="w-full h-full max-w-screen-2xl flex justify-between mx-auto pt-4">
//         <div className="flex flex-col justify-between">
//           <div className="flex flex-col gap-2.5">
//             <Image src={FullLogo} alt="GainWix Full Logo" />
//             <p className="text-sm  text-[#908EB5] font-Inter font-semibold">
//               Transform your digital marketing <br />
//               with powerful, data-driven Generative AI
//             </p>
//           </div>
// <div className="flex items-center gap-5">
//   <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center">
//     <Instagram />
//   </div>
//   <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center">
//     <Facebook />
//   </div>
//   <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center">
//     <Linkedin />
//   </div>
//   <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center">
//     <Twitter />
//   </div>
// </div>
//         </div>
//   <div className="flex gap-32">
//     {FOOTER_LINKS?.map((l) => {
//       return (
//         <div key={l?.id} className="flex flex-col gap-5">
//           <h4 className="text-[1.3vw]  text-[#908EB5] font-Inter font-medium ">
//             {l?.label}
//           </h4>
//           <ul className="flex flex-col">
//             {l?.lists?.map((list) => {
//               return (
//                 <Link
//                   href={list?.href}
//                   key={list?.id}
//                   className="w-full h-8 text-[1vw] font-semibold text-[#55567A] font-Inter "
//                 >
//                   {list?.label}
//                 </Link>
//               );
//             })}
//           </ul>
//         </div>
//       );
//     })}
//   </div>
// </div>
//       <div className="w-full h-20 flex-center gradient-border font-Inter font-medium">
//         &copy; GainWix 2024, All Rights Reserved.
//       </div>
//     </footer>
//   );
// }

"use clients";

import { FOOTER_LINKS } from "@constants/footer";
import Image from "next/image";
import Link from "next/link";
import FullLogo from "@logos/full-logo.svg";
import Facebook from "@custom-svg/Facebook";
import Instagram from "@custom-svg/Instagram";
import Linkedin from "@custom-svg/Linkedin";
import Twitter from "@custom-svg/Twitter";

export default function Footer() {
  return (
    <div className=" xs:px-10 md:layout text-[white] bg-[#060A22]">
      <div className="min-h-[50vh] pt-[4.5vw] pl-[3vw] flex  pb-[1vw] gap-20  ">
        <div className="w-[40vw] xs:hidden lg:block">
          <Image
            src={FullLogo}
            alt="logo"
            className="w-[13.8vw] h-[3.2vw] mb-6"
          />

          <p className="max-w[50vw] w-full flex items-center gap-1 font-medium cursor-pointer  font-Inter text-[#908EB5]">
            Transform your digital marketing <br />
            with powerful, data-driven Generative AI
          </p>
          <div className="flex items-center gap-5 mt-10 ">
            <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center  hover:bg-[#908EB5] hover-instagram">
              <Instagram />
            </div>
            <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center  hover:bg-[#908EB5] hover-instagram">
              <Facebook />
            </div>
            <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center  hover:bg-[#908EB5] hover-instagram">
              <Linkedin />
            </div>
            <div className="size-10 rounded-2xl bg-[#2B2E4F] flex-center  hover:bg-[#908EB5] hover-instagram">
              <Twitter />
            </div>
          </div>
        </div>
        <div className="w-[50vw] lg:flex justify-between  xs:hidden">
          {" "}
          {FOOTER_LINKS?.map((l) => {
            return (
              <div key={l?.id} className="flex flex-col gap-5">
                <h4 className="text-[1.3vw]  text-[#908EB5] font-Inter font-medium   ">
                  {l?.label}
                </h4>
                <ul className="flex flex-col">
                  {l?.lists?.map((list) => {
                    return (
                      <Link
                        href={list?.href}
                        key={list?.id}
                        className="w-full h-8 text-[1vw] font-semibold text-[#55567A] font-Inter hover:text-[white] "
                      >
                        {list?.label}
                      </Link>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-full h-20 flex-center gradient-border font-Inter font-medium">
        &copy; GainWix 2024, All Rights Reserved.{" "}
      </div>
    </div>
  );
}
