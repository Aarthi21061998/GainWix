"use client";

import Image from "next/image";
import Image1 from "../assets/Icons/image1.svg";

import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";

export default function DigitalMarketing() {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      rubberband: true,
      breakpoints: {
        "(max-width: 320px)": { slides: { perView: 1 } },
        "(min-width: 320px)": { slides: { perView: 1 } },
        "(min-width: 768px)": { slides: { perView: 1 } },
        "(min-width: 1024px)": { slides: { perView: 1 } },
        "(min-width: 1280px)": { slides: { perView: 1 } },
        "(min-width: 1536px)": { slides: { perView: 1 } },
      },
    },
    [
      (slider) => {
        let timeout: ReturnType<typeof setTimeout>;
        let mouseOver = false;

        function clearNextTimeout() {
          clearTimeout(timeout);
        }

        function nextTimeout() {
          clearTimeout(timeout);
          if (mouseOver) return;
          timeout = setTimeout(() => {
            slider.next();
          }, 2000);
        }

        slider.on("created", () => {
          slider.container.addEventListener("mouseover", () => {
            mouseOver = true;
            clearNextTimeout();
          });
          slider.container.addEventListener("mouseout", () => {
            mouseOver = false;
            nextTimeout();
          });
          nextTimeout();
        });

        slider.on("dragStarted", clearNextTimeout);
        slider.on("animationEnded", nextTimeout);
        slider.on("updated", nextTimeout);
      },
    ]
  );

  return (
    <div className="bg-[#060A22] overflow-hidden">
      <div className="flex flex-col lg:items-center justify-center">
        <div className="flex lg:justify-center text-[3vw] xs:w-[100vw] md:w-[98vw] md:justify-center md:items-center">
          <h1 className="lg:text-[2.7vw] md:text-[4vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] lg:pt-16 text-center xl:tracking-wide">
            <p className="lg:pl-10">
              Hear What our AI-powered digital agencies{" "}
            </p>
            <span className="lg:text-[2.7vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent  md:text-[4vw] xs:text-[8vw]">
              say about Gainwix.ai{" "}
            </span>
          </h1>
        </div>
      </div>
      {/* <div ref={sliderRef} className="keen-slider w-full overflow-hidden"> */}
      <div className="keen-slider__slide number-slide1">
        <div className=" ">
          <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r 2xl:w-[64vw] xl:w-[70vw] lg:w-[60vw]  lg:h-[30vh] md:h-[30vh] xl:h-[60vh] xs:w-[90vw]   rounded-lg md:mt-[10vw] xl:mt-7 xs:mt-[20vw]  ">
            <div className="lg:p-10 w-[100%]   flex md:flex-row xs:flex-col-reverse justify-center">
              <div className=" lg:w-[50%] xs:w-[100%] xs:h-auto  flex flex-col justify-center">
                <p className="  xs:w-[90vw]  md:w-[45vw] lg:w-[30vw] lg:text-[0.85vw] md:text-[1.5vw] xs:text-[3.5vw] xs:p-3 font-Inter font-medium flex justify-center items-center text-[#908eb5]">
                  Aptonworks (Digital Solutions Provider):&nbsp;One of the most
                  impactful decisions we&apos;ve made is transforming into an
                  AI-powered agency, thanks to Gainwix.ai. Their platform has
                  truly elevated our capabilities, boosting our growth rate and
                  customer satisfaction by an impressive 37%. Not only has this
                  reduced our need to hire more employees, but it has also
                  significantly decreased the time spent on tasks, which our
                  clients appreciate. Gainwix.ai has been a game-changer for our
                  agency.
                </p>
                <span className="lg:text-[3vw] md:text-[2vw] xs:text-[5vw] lg-mt-5 xs:pl-3 font-Inter font-semibold">
                  Pown{" "}
                </span>
                <p className="lg:text-[0.85vw] md:text-[2vw] xs:text-[3.5vw] xs:pl-3 font-Inter font-medium">
                  Digital Marketing Manager{" "}
                </p>
              </div>
              <div className="w-[100%] xs:w-[100%] lg:w-[50%] md:text-[3vw] flex justify-center">
                <Image src={Image1} alt="banner" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Additional Slides */}

      {/* <div className="keen-slider__slide number-slide1">
          <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r 2xl:w-[64vw] xl:w-[70vw] lg:w-[60vw] md:h-[30vh] xl:h-[60vh] xs:w-[90vw] xs:h-[95vh]  rounded-lg md:mt-[10vw] xl:mt-7 xs:mt-[60vw] ">
            <div className="lg:p-10 w-[100%] flex md:flex-row xs:flex-col-reverse justify-center">
              <div className=" lg:w-[50%] xs:w-[100%] flex flex-col justify-center">
                <p className="  xs:w-[90vw]  md:w-[45vw] lg:w-[30vw] lg:text-[0.85vw] md:text-[1.5vw] xs:text-[3.5vw] xs:p-3 font-Inter font-medium flex justify-center items-center text-[#908eb5]">
                  Aptonworks (Digital Solutions Provider):&nbsp;One of the most
                  impactful decisions we&apos;ve made is transforming into an
                  AI-powered agency, thanks to Gainwix.ai. Their platform has
                  truly elevated our capabilities, boosting our growth rate and
                  customer satisfaction by an impressive 37%. Not only has this
                  reduced our need to hire more employees, but it has also
                  significantly decreased the time spent on tasks, which our
                  clients appreciate. Gainwix.ai has been a game-changer for our
                  agency.
                </p>
                <span className="lg:text-[3vw] xs:text-[5vw] lg-mt-5 xs:pl-3 font-Inter font-semibold">
                  Pown{" "}
                </span>
                <p className="lg:text-[0.85vw] xs:text-[3.5vw] xs:pl-3 font-Inter font-medium">
                  Digital Marketing Manager{" "}
                </p>
              </div>
              <div className="w-[100%] xs:w-[100%] lg:w-[50%] flex justify-center">
                <Image src={Image1} alt="banner" className="w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
        <div className="keen-slider__slide number-slide1">
          <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r 2xl:w-[64vw]  xl:w-[70vw] lg:w-[60vw] md:h-[30vh] xl:h-[60vh] xs:w-[90vw] xs:h-[95vh]  rounded-lg md:mt-[10vw] xl:mt-7 xs:mt-[60vw] ">
            <div className="lg:p-10 w-[100%] flex md:flex-row xs:flex-col-reverse justify-center">
              <div className=" lg:w-[50%] xs:w-[100%] flex flex-col justify-center">
                <p className="  xs:w-[90vw]  md:w-[45vw] lg:w-[30vw] lg:text-[0.85vw] md:text-[1.5vw] xs:text-[3.5vw] xs:p-3 font-Inter font-medium flex justify-center items-center text-[#908eb5]">
                  Aptonworks (Digital Solutions Provider):&nbsp;One of the most
                  impactful decisions we&apos;ve made is transforming into an
                  AI-powered agency, thanks to Gainwix.ai. Their platform has
                  truly elevated our capabilities, boosting our growth rate and
                  customer satisfaction by an impressive 37%. Not only has this
                  reduced our need to hire more employees, but it has also
                  significantly decreased the time spent on tasks, which our
                  clients appreciate. Gainwix.ai has been a game-changer for our
                  agency.
                </p>
                <span className="lg:text-[3vw] xs:text-[5vw] lg-mt-5 xs:pl-3 font-Inter font-semibold">
                  Pown{" "}
                </span>
                <p className="lg:text-[0.85vw] xs:text-[3.5vw] xs:pl-3 font-Inter font-medium">
                  Digital Marketing Manager{" "}
                </p>
              </div>
              <div className="w-[100%] xs:w-[100%] lg:w-[50%] flex justify-center object-cover">
                <Image
                  src={Image1}
                  alt="banner"
                  className="w-full h-auto object-cover xs:rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div> */}
    </div>
    // </div>
  );
}
// "use client";

// import Image from "next/image";
// import Image1 from "../assets/Icons/image1.svg";

// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import { useState } from "react";

// export default function DigitalMarketing() {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const [sliderRef] = useKeenSlider<HTMLDivElement>(
//     {
//       loop: true,
//       rubberband: true,
//       breakpoints: {
//         "(max-width: 320px)": { slides: { perView: 1 } },
//         "(min-width: 320px)": { slides: { perView: 1 } },
//         "(min-width: 768px)": { slides: { perView: 1 } },
//         "(min-width: 1024px)": { slides: { perView: 1 } },
//         "(min-width: 1280px)": { slides: { perView: 1 } },
//         "(min-width: 1536px)": { slides: { perView: 1 } },
//       },
//       slideChanged(slider) {
//         setCurrentSlide(slider.track.details.rel);
//       },
//     },
//     [
//       (slider) => {
//         let timeout: ReturnType<typeof setTimeout>;
//         let mouseOver = false;

//         function clearNextTimeout() {
//           clearTimeout(timeout);
//         }

//         function nextTimeout() {
//           clearTimeout(timeout);
//           if (mouseOver) return;
//           timeout = setTimeout(() => {
//             slider.next();
//           }, 2000);
//         }

//         slider.on("created", () => {
//           slider.container.addEventListener("mouseover", () => {
//             mouseOver = true;
//             clearNextTimeout();
//           });
//           slider.container.addEventListener("mouseout", () => {
//             mouseOver = false;
//             nextTimeout();
//           });
//           nextTimeout();
//         });

//         slider.on("dragStarted", clearNextTimeout);
//         slider.on("animationEnded", nextTimeout);
//         slider.on("updated", nextTimeout);
//       },
//     ]
//   );

//   return (
//     <div className="bg-[#060A22] overflow-hidden">
//       <div className="flex flex-col lg:items-center justify-center">
//         <div className="flex lg:justify-center text-[3vw] xs:w-[100vw] md:w-[98vw] md:justify-center md:items-center">
//           <h1 className="lg:text-[2.7vw] md:text-[4vw] xs:text-[8vw] font-Sora font-semibold text-[#FFFFFF] lg:pt-16 text-center xl:tracking-wide">
//             <p className="lg:pl-10">
//               Hear What our AI-powered digital agencies{" "}
//             </p>
//             <span className="lg:text-[2.7vw] from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent  md:text-[4vw] xs:text-[8vw]">
//               say about Gainwix.ai{" "}
//             </span>
//           </h1>
//         </div>
//       </div>

//       <div ref={sliderRef} className="keen-slider w-full overflow-hidden">
//         {/* Slide 1 */}
//         <div className="keen-slider__slide number-slide1">
//           <div className="from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r 2xl:w-[64vw] xl:w-[70vw] lg:w-[60vw] lg:h-[30vh] md:h-[30vh] xl:h-[60vh] xs:w-[90vw] rounded-lg md:mt-[10vw] xl:mt-7 xs:mt-[20vw]">
//             <div className="lg:p-10 w-[100%] flex md:flex-row xs:flex-col-reverse justify-center">
//               <div className="lg:w-[50%] xs:w-[100%] flex flex-col justify-center">
//                 <p className="xs:w-[90vw] md:w-[45vw] lg:w-[30vw] lg:text-[0.85vw] md:text-[1.5vw] xs:text-[3.5vw] xs:p-3 font-Inter font-medium flex justify-center items-center text-[#908eb5]">
//                   Aptonworks (Digital Solutions Provider):&nbsp;One of the most
//                   impactful decisions we&apos;ve made is transforming into an
//                   AI-powered agency, thanks to Gainwix.ai. Their platform has
//                   truly elevated our capabilities, boosting our growth rate and
//                   customer satisfaction by an impressive 37%.
//                 </p>
//                 <span className="lg:text-[3vw] xs:text-[5vw] lg-mt-5 xs:pl-3 font-Inter font-semibold">
//                   Pown{" "}
//                 </span>
//                 <p className="lg:text-[0.85vw] xs:text-[3.5vw] xs:pl-3 font-Inter font-medium">
//                   Digital Marketing Manager{" "}
//                 </p>
//               </div>
//               <div className="w-[100%] xs:w-[100%] lg:w-[50%] flex justify-center">
//                 <Image src={Image1} alt="banner" className="w-full h-auto" />
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Additional Slides */}
//         {/* Repeat the structure for additional slides */}
//       </div>

//       {/* Navigation Dots */}
//       <div className="flex justify-center mt-5">
//         {Array.from({ length: 3 }).map((_, idx) => (
//           <button
//             key={idx}
//             onClick={() => {
//               sliderRef.current?.moveToIdx(idx);
//             }}
//             className={`h-3 w-3 rounded-full mx-1 ${
//               currentSlide === idx ? "bg-white" : "bg-gray-500"
//             }`}
//           ></button>
//         ))}
//       </div>
//     </div>
//   );
// }
