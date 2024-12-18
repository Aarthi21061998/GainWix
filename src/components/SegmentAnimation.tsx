"use client";
import { useEffect } from "react";
import Lottie from "lottie-web";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import Responsive1 from "../assets/Icons/reponsive1.svg";

import Strategy from "../assets/Icons/Strategy.svg";
import SegmentAnimation from "../assets/Icons/Segment Animation.svg";
import SegmentsAnimations from "./SegmentsAnimations";

export default function Home() {
  return (
    // <div className="w-full overflow-x-hidden">
    <div className="flex flex-col xl:flex-row items-center md:px-10 ">
      {/* Text Section */}

      {/* Image and Animations Section */}
      <div className="w-full   flex justify-center relative">
        <Image
          src={Strategy}
          alt="Background"
          className="w-full md:h-auto xs:hidden md:hidden xl:block "
        />

        <div className=" absolute left-[1vh] xl:w-[100%] md:h-[40vh] lg:h-[70vh] flex flex-row  justify-center text-white mb-10 xl:mb-0 ">
          <div className="lg:block  md:block xs:hidden w-[50%] flex flex-col xl:mt-[30vh] lg:mt-[-10vw] md:mt-[-20vw] xl:pl-[15vw] ">
            <h1 className="text-3xl font-Sora font-semibold mb-5">
              Segmentation AI
            </h1>
            <p className="text-lg font-Inter font-medium text-[#908EB5] leading-8">
              Accurately segment your audience using AI to deliver personalized
              messages that resonate, driving higher engagement and conversion
              rates.
            </p>
            <Image
              src={Responsive1}
              alt="Marketing Animation"
              className=" blend-screen absolute top-[-20vw] right-[-5vw]  z-[1] lg:block xl:hidden "
            />
          </div>

          <div className="md:hidden xs:block flex flex-col  h-[80vh] mt-[-80vw] pl-2  ">
            <h1 className="text-[5vw] font-semibold pb-5 font-Sora">
              Segmentation AI
            </h1>
            <p className="w-full font-Inter font-semibold text-[#908EB5] text-[3.8vw] leading-6">
              Accurately segment your audience using AI to deliver personalized
              messages that resonate, driving higher engagement and conversion
              rates.
              <Image
                src={Responsive1}
                alt="Marketing Animation"
                className=" blend-screen absolute top-[-38vw] right-[7vw]  z-[1] "
              />
            </p>
          </div>
          <div className="md:block xs:hidden scroll-container1 overflow-hidden  w-[50vw] ">
            <div className="segment-animation-container relative">
              <div className="mt-20">
                <Image
                  src={SegmentAnimation}
                  alt="Marketing Animation"
                  className=" blend-screen absolute top-[3vw] right-[7vw] md:hidden xl:block "
                />

                <div className="xl:block md:hidden absolute w-[26vw]  xl:top-[5vw] xl:left-[4vw] 2xl:top-[9vw]">
                  <SegmentsAnimations />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    // </div>
  );
}

// for responsive

// "use client";
// import { useEffect } from "react";
// import Lottie from "lottie-web";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import Image from "next/image";

// import Strategy from "../assets/Icons/Strategy.svg";
// import SegmentAnimation from "../assets/Icons/Segment Animation.svg";
// import SegmentsAnimations from "./SegmentsAnimations";

// export default function Home() {
//   return (
//     // <div className="w-full overflow-x-hidden">
//     <div className="flex flex-col xl:flex-row items-center px-4 ">
//       {/* Text Section */}

//       {/* Image and Animations Section */}
//       <div className="w-full   flex justify-center relative">
//         <Image
//           src={Strategy}
//           alt="Background"
//           className="w-full h-auto xs:h-[90vh]"
//         />

//         <div className=" xs:hidden md:block absolute left-[1vh] lg:w-[100%]  h-[70vh] flex flex-row  justify-center text-white mb-10 xl:mb-0 ">
//           <div className="w-[50%] flex flex-col mt-[30vh] pl-[15vw] ">
//             <h1 className="text-3xl font-Sora font-semibold mb-5">
//               Segmentation AI
//             </h1>
//             <p className="text-lg font-Inter font-medium text-[#908EB5] leading-8">
//               Accurately segment your audience using AI to deliver personalized
//               messages that resonate, driving higher engagement and conversion
//               rates.
//             </p>
//           </div>
//           <div className="scroll-container1 overflow-hidden  w-[50vw] ">
//             <div className="segment-animation-container relative">
//               <div className="mt-20">
//                 <Image
//                   src={SegmentAnimation}
//                   alt="Marketing Animation"
//                   className=" blend-screen absolute top-[3vw] "
//                 />
//                 <div className=" absolute w-[26vw]  xl:top-[5vw] xl:left-[11vw] 2xl:top-[9vw]">
//                   <SegmentsAnimations />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className=" xs:block md:hidden absolute  flex flex-row  justify-center text-white mb-10 xl:mb-0 ">
//           <div className="flex flex-col  ">
//             <h1 className="text-[6vw] font-Sora font-semibold mb-5 ">
//               Segmentation AI
//             </h1>
//             <p className="text-[4vw] font-Inter font-semibold text-[#908EB5] leading-7">
//               Accurately segment your audience using AI to deliver personalized
//               messages that resonate, driving higher engagement and conversion
//               rates.
//             </p>
//           </div>
//           <div className="scroll-container1 overflow-hidden  w-[50vw] ">
//             <div className="segment-animation-container relative">
//               <div className="mt-20">
//                 <Image
//                   src={SegmentAnimation}
//                   alt="Marketing Animation"
//                   className=" blend-screen absolute top-[3vw]  z-50"
//                 />
//                 <div className="xs:hidden md:block absolute w-[26vw]  xl:top-[5vw] xl:left-[11vw] 2xl:top-[9vw]">
//                   <SegmentsAnimations />
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//     // </div>
//   );
// }
