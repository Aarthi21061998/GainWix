"use client";

import Image from "next/image";
import { MutableRefObject, useState } from "react";

import Video1 from "../assets/Icons/SegmentVideo.gif";
// import Video from 'icons/Strategy.gif';
import Video from "../assets/Icons/Strategy.gif";
// import Video2 from 'icons/final.gif';

import Video2 from "../assets/Icons/final.gif";

import Header from "../assets/Icons/header.gif";

import MetaIcon from "../assets/Icons/meta.svg";
import MainImage from "../assets/Icons/homeIcon.svg";

import card from "../assets/Icons/cardIcon.svg";

// import LightBackGround from "../assets/Icons/light.svg";
import HomePage from "../assets/Icons/HomePage.svg";
import Marketing_first from "../assets/Icons/Strategy Animation.svg";
import Strategy from "../assets/Icons/Strategy.svg";
import Segmentation from "../assets/Icons/Segmentation.svg";
import Scale from "../assets/Icons/Scale.svg";
import scale1 from "../assets/Icons/scal.svg";
import DigitalMarketing from "@components/DigitalMarketing";

import chessKing from "../assets/Icons/chessKing.png";

import Goals from "@components/Goals";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import BrandScroll from "@components/BrandScroll";
import Growth from "@components/Growth";
import { MarketingGoalsList, MarketingGoalsListType } from "@constants/home";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import instagram from "../assets/Icons/insta.svg";
import message from "../assets/Icons/message.svg";
import whatsapp from "../assets/Icons/whatsappIcon.svg";
import facebook from "../assets/Icons/facebook.svg";

import inst1 from "../assets/Icons/instagram.svg";
import whats1 from "../assets/Icons/wApp.svg";
import mess from "../assets/Icons/messIcon.svg";
import Fbook from "../assets/Icons/fb.svg";

import Image1 from "../assets/Icons/instaMarketing.svg";
import Image2 from "../assets/Icons/message1.svg";
import Image3 from "../assets/Icons/messanger.svg";
import Image4 from "../assets/Icons/whatsapp2.svg";
import lottie, { AnimationItem } from "lottie-web";

import homeBg from "../assets/Icons/Home Screen bg.svg";

import SegmentAnimation from "@components/SegmentAnimation";
import ScaleThorugh from "@components/ScaleThorugh";

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const divRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const goalsRef = useRef<HTMLDivElement | null>(null);
  const travelDivRef = useRef<HTMLDivElement | null>(null);
  const segmentImageRef = useRef<HTMLImageElement | null>(null);
  const scaleRef = useRef<HTMLImageElement | null>(null);

  const rotatingRef = useRef(null);
  const iconsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const iframeRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout = null;

  const lottieContainerRef = useRef(null); // Ref for the Lottie container

  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEnter = (index: any) => {
    setActiveIcon(index);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };
  const iconPositions = [
    { top: "1vw", left: "14vw" },
    { top: "7vw", left: "6vw" },
    { top: "12vw", left: "12vw" },
    { top: "7vw", left: "20vw" },
  ];

  const icons = [
    { src: instagram, alt: "Instagram", img: Image1 },
    { src: message, alt: "Message", img: Image2 },
    { src: whatsapp, alt: "WhatsApp", img: Image3 },
    { src: facebook, alt: "Facebook", img: Image4 },
  ];

  // useEffect(() => {
  //   if (imageRef.current) {
  //     gsap.fromTo(
  //       imageRef.current,
  //       { scale: 1 },
  //       {
  //         scale: 0.8,
  //         scrollTrigger: {
  //           trigger: imageRef.current,
  //           start: "bottom",
  //           // end: "",
  //           scrub: true,
  //         },
  //       }
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   gsap.fromTo(
  //     divRef.current,
  //     {
  //       y: 0,
  //     },
  //     {
  //       y: "100vh",
  //       scrollTrigger: {
  //         trigger: goalsRef.current,
  //         start: "top center",
  //         end: "top center",
  //         scrub: true,
  //       },
  //     }
  //   );
  // }, []);

  // travel the animation

  // useEffect(() => {
  //   gsap.registerPlugin(ScrollTrigger);

  //   const updatePosition = () => {
  //     if (
  //       !travelDivRef.current ||
  //       !segmentImageRef.current ||
  //       !scaleRef.current
  //     )
  //       return;

  //     const travelRect = travelDivRef.current.getBoundingClientRect();
  //     const segmentRect = segmentImageRef.current.getBoundingClientRect();
  //     const scaleRect = scaleRef.current.getBoundingClientRect();

  //     const xDistanceFromSegment = segmentRect.left - travelRect.left + 290;
  //     const yDistanceFromSegment = segmentRect.top - travelRect.top + 200;

  //     const xDistanceToScale = scaleRect.left - segmentRect.left + 470;
  //     const yDistanceToScale = scaleRect.top - segmentRect.top + 600;

  //     const tl = gsap.timeline({
  //       scrollTrigger: {
  //         trigger: segmentImageRef.current,
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     });

  //     tl.to(travelDivRef.current, {
  //       x: xDistanceFromSegment,
  //       y: yDistanceFromSegment,
  //       ease: "power2.out",
  //     });

  //     tl.to(travelDivRef.current, {
  //       x: xDistanceToScale,
  //       y: yDistanceToScale,

  //       ease: "power2.out",
  //       scrollTrigger: {
  //         trigger: scaleRef.current,
  //         start: "top center",
  //         end: "bottom center",
  //         scrub: true,
  //       },
  //     });

  //     gsap.to(scaleRef.current, {
  //       scale: 1, // The header will shrink to 80% of its original size

  //       scrollTrigger: {
  //         trigger: scaleRef.current,
  //         start: "top center",
  //         end: "bottom top",
  //         scrub: true, // This ensures the scaling is tied to the scroll position
  //       },
  //     });
  //   };

  //   updatePosition();
  //   window.addEventListener("resize", updatePosition);

  //   gsap.fromTo(
  //     travelDivRef.current,
  //     { opacity: 0, y: 100 },
  //     {
  //       opacity: 1,
  //       y: 0,
  //       scrollTrigger: {
  //         trigger: travelDivRef.current,
  //         start: "top 80%",
  //         end: "top 50%",
  //         scrub: true,
  //       },
  //     }
  //   );

  //   return () => {
  //     window.removeEventListener("resize", updatePosition);
  //   };
  // }, []);

  // useEffect(() => {
  //   // Register the ScrollTrigger plugin
  //   gsap.registerPlugin(ScrollTrigger);

  //   gsap.to(imageRef.current, {
  //     scrollTrigger: {
  //       trigger: imageRef.current,
  //       start: "top top",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //     scale: 0.5,
  //     ease: "none",
  //   });

  //   gsap.to(divRef.current, {
  //     scrollTrigger: {
  //       trigger: divRef.current,
  //       start: "top center",
  //       scrub: true,
  //     },
  //     width: "20vw",
  //     height: "30vh",
  //     top: "13.7%",
  //     left: "50%",
  //     x: "-50%",
  //     ease: "none",
  //   });

  //   gsap.to(goalsRef.current, {
  //     scrollTrigger: {
  //       trigger: goalsRef.current,
  //       start: "top bottom",
  //       end: "bottom top",
  //       scrub: true,
  //     },
  //     opacity: 1,
  //     ease: "none",
  //   });
  // }, []);

  // useEffect(() => {
  //   let scrollStopTimeout: ReturnType<typeof setTimeout>;

  //   const resetPositions = () => {
  //     iconsRefs.current.forEach((icon, index) => {
  //       if (!icon) return;
  //       const imageWrapper = icon.querySelector(".image-wrapper");

  //       // Reset position only if it's not the active icon
  //       if (imageWrapper && index !== activeIcon) {
  //         const { top, left } = iconPositions[index];
  //         gsap.set(imageWrapper, {
  //           rotation: 0,
  //           top,
  //           left,
  //         });
  //       }
  //     });

  //     // Only reset the active icon's position if it's not active
  //     if (activeIcon !== null) {
  //       const activeIconElement = iconsRefs.current[activeIcon];
  //       const imageWrapper = activeIconElement?.querySelector(".image-wrapper");

  //       if (imageWrapper) {
  //         gsap.set(imageWrapper, {
  //           rotation: 0,
  //         });
  //       }
  //     }

  //     gsap.set(rotatingRef.current, { rotation: 0 });
  //     setActiveIcon(null); // Optionally reset active icon after reset
  //   };

  //   const handleScrollStop = () => {
  //     clearTimeout(scrollStopTimeout);
  //     scrollStopTimeout = setTimeout(() => {
  //       resetPositions();
  //     }, 200);
  //   };

  //   const rotationAnimation = gsap.to(rotatingRef.current, {
  //     rotation: 360,
  //     scrollTrigger: {
  //       trigger: rotatingRef.current!,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: true,
  //       onUpdate: () => {
  //         handleScrollStop();

  //         iconsRefs.current.forEach((icon) => {
  //           if (!icon) return;
  //           const currentRotation = gsap.getProperty(
  //             rotatingRef.current!,
  //             "rotation"
  //           );
  //           const imageWrapper = icon.querySelector(".image-wrapper");

  //           if (imageWrapper) {
  //             gsap.set(imageWrapper, {
  //               rotation: -currentRotation,
  //             });
  //           }
  //         });

  //         const rightmostIcon = getRightmostIcon();
  //         if (rightmostIcon) {
  //           iconsRefs.current.forEach((icon, index: any) => {
  //             if (icon === rightmostIcon) {
  //               setActiveIcon(index);
  //             }
  //           });
  //         }
  //       },
  //       onLeave: resetPositions,
  //       onEnterBack: resetPositions,
  //     },
  //   });

  //   const getRightmostIcon = () => {
  //     let rightmostIcon: HTMLDivElement | null = null;
  //     let maxRight = -Infinity;

  //     iconsRefs.current.forEach((icon) => {
  //       if (!icon) return;
  //       const rect = icon.getBoundingClientRect();
  //       const iconRight = rect.left + rect.width;

  //       if (iconRight > maxRight) {
  //         maxRight = iconRight;
  //         rightmostIcon = icon;
  //       }
  //     });

  //     return rightmostIcon;
  //   };

  //   return () => {
  //     if (rotationAnimation) rotationAnimation.kill();
  //     ScrollTrigger.killAll();
  //     clearTimeout(scrollStopTimeout);
  //   };
  // }, []);

  // const resetToInitialPosition = () => {
  //   gsap.set(rotatingRef.current, { rotation: 0 });
  //   iconsRefs.current.forEach((icon, index) => {
  //     if (!icon) return;
  //     const imageWrapper = icon.querySelector(".image-wrapper");
  //     if (imageWrapper) {
  //       const { top, left } = iconPositions[index];
  //       gsap.set(imageWrapper, {
  //         rotation: 0,
  //         top,
  //         left,
  //       });
  //     }
  //   });
  //   setActiveIcon(null);
  // };

  useEffect(() => {
    let animation: AnimationItem | null = null; // Type for Lottie animation
    const container =
      document.querySelector<HTMLDivElement>(".lottie-container");

    if (!container) return;

    animation = lottie.loadAnimation({
      container,
      path: "https://lottie.host/2b2164f8-cf9d-4976-8569-54d186861111/3wjCimvblG.json",
      renderer: "svg",
      autoplay: false,
      loop: false,
    });

    animation.addEventListener("DOMLoaded", () => {
      // ScrollTrigger for the main animation
      ScrollTrigger.create({
        trigger: container, // Target the container
        start: "top center", // Start animation when the top of the container reaches the center of the viewport
        end: "bottom center", // End when the bottom of the container reaches the center
        scrub: 1, // Smooth progress linked to scroll
        onUpdate: (self) => {
          const progress = self.progress; // Get ScrollTrigger's progress (0 to 1)
          if (animation) {
            const frame = Math.floor(animation.totalFrames * progress); // Map progress to frames
            animation.goToAndStop(frame, true); // Jump to the appropriate frame
          }
        },
        onLeave: () => {
          // Triggered when leaving the scroll range
          if (animation) {
            animation.goToAndStop(animation.totalFrames - 1, true); // Display only the chess icon
          }
        },
        onEnterBack: () => {
          // Re-entering the scroll range
          if (animation) {
            animation.goToAndStop(0, true); // Reset to the first frame
          }
        },
      });
    });

    // Cleanup on component unmount
    return () => {
      if (animation) animation.destroy(); // Destroy Lottie instance
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill()); // Kill all ScrollTrigger instances
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#060A22] w-100 flex flex-col justify-center">
      <Image
        src={homeBg}
        alt=""
        className=" relative w-full "
        style={{ opacity: "0.25" }}
      />
      <div className=" w-[100vw]  absolute top-10  ">
        <div className="w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10 ">
          <h1 className="text-[3vw] font-bold text-[#FFFFFF]  font-Sora  xl:mt-16">
            <p className="text-center ">Transform your digital marketing</p>
            with awesome data-driven
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              {" "}
              Generative AI
            </span>
          </h1>
        </div>
        <div className="w-[100%] flex justify-center text-[3vw] font-medium font-Sora xl:mt-12">
          <h1 className="text-[1vw] font-medium text-[#D7DEDA] -mt-14 font-Inter ">
            <p>
              Say goodbye to fragmented, ineffective marketing. Transforming
              your agency into a Cutting-edge, AI-powered
            </p>
            <p className="pl-14">
              powerhouse. Experience a seamless, data-driven approach that
              drives Real results.
            </p>
          </h1>
        </div>
        <div className="w-[100%] flex justify-center text-[3vw] font-medium font-inter gap-5 my-5  xl:my-12">
          <button className="btn btn_primary text-[0.95vw] font-bold">
            Request Demo
          </button>
          <button>
            <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center ">
              <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
              <p className="text-[1.05vw] text-[#FFFFFF] font-Inter">
                Tech Partner
              </p>
            </div>
          </button>
        </div>
        <div className="">
          <Image
            src={MainImage}
            alt="home"
            ref={imageRef}
            className="absolute top-[25vw]"
            style={{
              width: "100vw !important",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </div>
      </div>
      <div
        ref={divRef}
        className="overflow-hidden absolute top-[49vw] left-[34vw] w-[32vw] h-[44vh]  z-50"
      ></div>
      <div className="py-10 h-[120vh]">
        <Goals />
      </div>
      <div className="relative">
        <Image
          src={Strategy}
          alt="Background"
          className="w-full h-auto "
          style={{ opacity: "0.75" }}
        />
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center text-[3vw] font-medium font-Sora absolute top-4">
            <h1 className="text-[3vw] font-semibold font-Sora text-[#FFFFFF] pt-16">
              <p className="pl-10">Integrate the &quot;3 S&quot; AI in your </p>
              <span className="font-Sora text-[3vw] font-bold  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-32">
                digital marketing
              </span>
            </h1>
          </div>
        </div>

        <div className="w-[100%] overflow-visible flex flex-row   justify-center absolute top-44 ">
          <div className=" flex relative  ">
            <Image
              src={Marketing_first}
              alt="marketing1"
              className="w-[50vw]!important h-auto blend-screen "
            />

            <div className="scroll-container">
              <div
                className="lottie-container absolute  flex justify-center items-center right-[-8vw] top-[6vw]"
                style={{
                  width: "70vw",
                  height: "410px",
                }}
              ></div>
            </div>
            <div
              className=" absolute top-16  flex justify-center items-center z-40 opacity-0"
              ref={travelDivRef}
            >
              <Image src={Header} alt="" className="w-80 h-80" />
            </div>
          </div>
          <div className="w-[60%] flex flex-col justify-center  text-[white]">
            <h1 className="text-[2.7vw] font-semibold pb-5 font-Sora pl-20">
              Strategy AI
            </h1>
            <p className="w-[60%] pl-20 font-Inter font-medium text-[#908EB5] text-[1vw] leading-8">
              Create intelligent, data-driven strategies that respond to
              evolving market trends and customer behavior, ensuring alignment
              with your strategic goals & objectives.
            </p>
          </div>
        </div>
      </div>
      <div className="">
        <SegmentAnimation />
      </div>

      <div className=" ">
        <ScaleThorugh />
      </div>

      {/* Slider Section */}
      <DigitalMarketing />
      <div className="py-10 ">
        <BrandScroll />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center text-[3vw] font-semibold font-Sora ">
          <h1 className="text-[3vw] font-Sora  text-[#FFFFFF] py-16">
            <p className="pl-10 font-Sora">
              The 3 S AI stabilizes your marketing goal{" "}
            </p>{" "}
            <span className="  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-36">
              And increase performance all time{" "}
            </span>
          </h1>
        </div>
        <div className="w-full flex flex-row gap-5 justify-center">
          {MarketingGoalsList?.map((data: MarketingGoalsListType) => (
            <div
              className="w-[22%] h-[45vh] rounded-[5%] from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r "
              key={data?.id}
            >
              <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw]  align-center mt-16">
                <Image
                  src={data?.icon}
                  alt=""
                  className="w-[80vw] h-[15vh] flex justify-center items-center"
                />

                <p className="text-[#d7d2fc] mt-7 text-[1.2vw] font-Sora font-semibold">
                  {data?.content}
                </p>
                <span className=" text-[#d7d2fc] text-[1.2vw] font-Sora font-semibold">
                  {data?.content1}
                </span>

                <p className="w-auto min-w-10 text-[0.95vw] px-10 py-2 flex justify-center  font-Inter items-center text-center font-medium text-[#908eb5] ">
                  {data?.details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Growth />
    </div>
  );
}
