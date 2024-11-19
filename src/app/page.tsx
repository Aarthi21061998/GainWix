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
import SegmentAnimation from "../assets/Icons/Segment Animation.svg";
import Strategy from "../assets/Icons/Strategy.svg";
import Segmentation from "../assets/Icons/Segmentation.svg";
import Scale from "../assets/Icons/Scale.svg";
import scale from "../assets/Icons/scal.svg";
import DigitalMarketing from "@components/DigitalMarketing";

import Goals from "@components/Goals";
import { useEffect, useRef } from "react";

import gsap from "gsap";
import BrandScroll from "@components/BrandScroll";
import Growth from "@components/Growth";
import { MarketingGoalsList, MarketingGoalsListType } from "@constants/home";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import instagram from "../assets/Icons/insta.svg";
import message from "../assets/Icons/message.svg";
import whatsapp from "../assets/Icons/Whatsapp.svg";
import facebook from "../assets/Icons/facebook.svg";

import inst1 from "../assets/Icons/instagram.svg";
import mess from "../assets/Icons/Mess.svg";
import whats1 from "../assets/Icons/wApp.svg";
import Fbook from "../assets/Icons/fb.svg";

import Image1 from "../assets/Icons/instaMarketing.svg";
import Image2 from "../assets/Icons/message1.svg";
import Image3 from "../assets/Icons/messanger.svg";
import Image4 from "../assets/Icons/whatsapp2.svg";

export default function Home() {
  const imageRef = useRef<HTMLImageElement | null>(null);

  const divRef: MutableRefObject<HTMLDivElement | null> = useRef(null);
  const goalsRef = useRef<HTMLDivElement | null>(null);
  const travelDivRef = useRef<HTMLDivElement | null>(null);
  const segmentImageRef = useRef<HTMLImageElement | null>(null);
  const scaleRef = useRef<HTMLImageElement | null>(null);

  const rotatingRef = useRef(null);
  const iconsRefs = useRef<(HTMLDivElement | null)[]>([]);

  const instagramRef = useRef(null);
  const messageRef = useRef(null);
  const whatsappRef = useRef(null);
  const facebookRef = useRef(null);

  const [activeIcon, setActiveIcon] = useState(null);

  const handleMouseEnter = (index: any) => {
    setActiveIcon(index);
  };

  const handleMouseLeave = () => {
    setActiveIcon(null);
  };
  const iconPositions = [
    { top: "-1vw", left: "14vw" },
    { top: "8vw", left: "6vw" },
    { top: "15vw", left: "14vw" },
    { top: "8vw", left: "20vw" },
  ];

  const icons = [
    { src: instagram, alt: "Instagram", img: Image1 },
    { src: message, alt: "Message", img: Image2 },
    { src: whatsapp, alt: "WhatsApp", img: Image3 },
    { src: facebook, alt: "Facebook", img: Image4 },
  ];

  useEffect(() => {
    if (imageRef.current) {
      gsap.fromTo(
        imageRef.current,
        { scale: 1 },
        {
          scale: 0.8,
          scrollTrigger: {
            trigger: imageRef.current,
            start: "bottom",
            // end: "",
            scrub: true,
          },
        }
      );
    }
  }, []);

  useEffect(() => {
    gsap.fromTo(
      divRef.current,
      {
        y: 0,
      },
      {
        y: "100vh",
        scrollTrigger: {
          trigger: goalsRef.current,
          start: "top center",
          end: "top center",
          scrub: true,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updatePosition = () => {
      if (
        !travelDivRef.current ||
        !segmentImageRef.current ||
        !scaleRef.current
      )
        return;

      const travelRect = travelDivRef.current.getBoundingClientRect();
      const segmentRect = segmentImageRef.current.getBoundingClientRect();
      const scaleRect = scaleRef.current.getBoundingClientRect();

      const xDistanceFromSegment = segmentRect.left - travelRect.left + 290;
      const yDistanceFromSegment = segmentRect.top - travelRect.top + 200;

      const xDistanceToScale = scaleRect.left - segmentRect.left + 470;
      const yDistanceToScale = scaleRect.top - segmentRect.top + 600;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: segmentImageRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      tl.to(travelDivRef.current, {
        x: xDistanceFromSegment,
        y: yDistanceFromSegment,
        ease: "power2.out",
      });

      tl.to(travelDivRef.current, {
        x: xDistanceToScale,
        y: yDistanceToScale,

        ease: "power2.out",
        scrollTrigger: {
          trigger: scaleRef.current,
          start: "top center",
          end: "bottom center",
          scrub: true,
        },
      });

      gsap.to(scaleRef.current, {
        scale: 1, // The header will shrink to 80% of its original size

        scrollTrigger: {
          trigger: scaleRef.current,
          start: "top center",
          end: "bottom top",
          scrub: true, // This ensures the scaling is tied to the scroll position
        },
      });
    };

    updatePosition();
    window.addEventListener("resize", updatePosition);

    gsap.fromTo(
      travelDivRef.current,
      { opacity: 0, y: 100 },
      {
        opacity: 1,
        y: 0,
        scrollTrigger: {
          trigger: travelDivRef.current,
          start: "top 80%",
          end: "top 50%",
          scrub: true,
        },
      }
    );

    return () => {
      window.removeEventListener("resize", updatePosition);
    };
  }, []);

  useEffect(() => {
    // Register the ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    gsap.to(imageRef.current, {
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
      },
      scale: 0.5,
      ease: "none",
    });

    gsap.to(divRef.current, {
      scrollTrigger: {
        trigger: divRef.current,
        start: "top center",
        scrub: true,
      },
      width: "20vw",
      height: "30vh",
      top: "13.7%",
      left: "50%",
      x: "-50%",
      ease: "none",
    });

    gsap.to(goalsRef.current, {
      scrollTrigger: {
        trigger: goalsRef.current,
        start: "top bottom",
        end: "bottom top",
        scrub: true,
      },
      opacity: 1,
      ease: "none",
    });
  }, []);

  // useEffect(() => {
  //   const resetIcons = () => {
  //     iconsRefs.current.forEach((icon) => {
  //       const imageWrapper = icon.querySelector(".image-wrapper");
  //       if (imageWrapper) {
  //         gsap.set(imageWrapper, { rotate: 0 });
  //       }
  //     });
  //     setActiveIcon(null);
  //   };

  //   const rotationAnimation = gsap.to(rotatingRef.current, {
  //     rotation: 360,
  //     scrollTrigger: {
  //       trigger: rotatingRef.current,
  //       start: "top center",
  //       end: "bottom center",
  //       scrub: true,
  //       onUpdate: () => {
  //         // Counter-rotate the images to keep them upright
  //         iconsRefs.current.forEach((icon) => {
  //           const currentRotation = gsap.getProperty(
  //             rotatingRef.current,
  //             "rotation"
  //           );
  //           const imageWrapper = icon.querySelector(".image-wrapper");

  //           if (imageWrapper) {
  //             gsap.set(imageWrapper, {
  //               rotate: -currentRotation, // Counter the parent's rotation
  //             });
  //           }
  //         });

  //         // Highlight the rightmost icon by setting it as active
  //         const rightmostIcon = getRightmostIcon();
  //         if (rightmostIcon) {
  //           iconsRefs.current.forEach((icon, index) => {
  //             if (icon === rightmostIcon) {
  //               setActiveIcon(index); // Update active icon index
  //             }
  //           });
  //         }
  //       },
  //       onLeave: resetIcons,
  //       onEnterBack: resetIcons,
  //       onStop: resetIcons, // Reset icons when scrolling stops
  //     },
  //   });

  //   const getRightmostIcon = () => {
  //     let rightmostIcon = null;
  //     let maxRight = -Infinity;

  //     iconsRefs.current.forEach((icon) => {
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
  //     ScrollTrigger.killAll(); // Clean up ScrollTrigger instances
  //   };
  // }, []);

  useEffect(() => {
    let scrollStopTimeout: ReturnType<typeof setTimeout>;

    const resetPositions = () => {
      iconsRefs.current.forEach((icon, index) => {
        if (!icon) return; // Skip null entries
        const imageWrapper = icon.querySelector(".image-wrapper");
        if (imageWrapper) {
          const { top, left } = iconPositions[index]; // Get initial positions
          gsap.set(imageWrapper, {
            rotate: 0, // Reset the rotation
            top, // Set the initial top position
            left, // Set the initial left position
          });
        }
      });
      setActiveIcon(null);
    };

    const handleScrollStop = () => {
      clearTimeout(scrollStopTimeout);
      scrollStopTimeout = setTimeout(() => {
        resetPositions();
      }, 200); // Delay to consider scrolling stopped
    };

    const rotationAnimation = gsap.to(rotatingRef.current, {
      rotation: 360,
      scrollTrigger: {
        trigger: rotatingRef.current!,
        start: "top center",
        end: "bottom center",
        scrub: true,
        onUpdate: () => {
          handleScrollStop(); // Trigger scroll stop logic
          iconsRefs.current.forEach((icon) => {
            if (!icon) return;
            const currentRotation = gsap.getProperty(
              rotatingRef.current!,
              "rotation"
            );
            const imageWrapper = icon.querySelector(".image-wrapper");

            if (imageWrapper) {
              gsap.set(imageWrapper, {
                rotate: -currentRotation, // Counter the parent's rotation
              });
            }
          });

          const rightmostIcon = getRightmostIcon();
          if (rightmostIcon) {
            iconsRefs.current.forEach((icon, index: any) => {
              if (icon === rightmostIcon) {
                setActiveIcon(index);
              }
            });
          }
        },
        onLeave: resetPositions, // Reset when scrolling leaves the section
        onEnterBack: resetPositions, // Reset when scrolling back into the section
      },
    });

    const getRightmostIcon = () => {
      let rightmostIcon: HTMLDivElement | null = null;
      let maxRight = -Infinity;

      iconsRefs.current.forEach((icon) => {
        if (!icon) return;
        const rect = icon.getBoundingClientRect();
        const iconRight = rect.left + rect.width;

        if (iconRight > maxRight) {
          maxRight = iconRight;
          rightmostIcon = icon;
        }
      });

      return rightmostIcon;
    };

    return () => {
      if (rotationAnimation) rotationAnimation.kill();
      ScrollTrigger.killAll();
      clearTimeout(scrollStopTimeout); // Clear the timeout on unmount
    };
  }, []);

  return (
    <div className="w-full h-full bg-[#060A22]">
      <div className="w-[100%] h-[30vh] flex justify-center text-[3vw] font-medium font-Sora py-10 ">
        <h1 className="text-[3vw] font-medium text-[#FFFFFF]  font-Sora">
          <p className="pl-10">Transform your digital marketing</p>
          with awesome data-driven
          <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
            {" "}
            Generative AI
          </span>
        </h1>
      </div>
      <div className="w-[100%] flex justify-center text-[3vw] font-medium font-Sora">
        <h1 className="text-[1vw] font-medium text-[#D7DEDA] -mt-14 font-Inter">
          <p>
            Say goodbye to fragmented, ineffective marketing. Transforming your
            agency into a Cutting-edge, AI-powered
          </p>
          <p className="pl-14">
            powerhouse. Experience a seamless, data-driven approach that drives
            Real results.
          </p>
        </h1>
      </div>
      <div className="w-[100%] flex justify-center text-[3vw] font-medium font-inter gap-5 my-5">
        <button className="btn btn_primary">Request Demo</button>
        <button>
          <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center">
            <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
            <p className="text-[1.05vw] text-[#FFFFFF] font-Inter">
              Tech Partner
            </p>
          </div>
        </button>
      </div>
      <div
        className="relative"
        style={{
          width: "100%",
          height: "auto",
        }}
      >
        <Image src={HomePage} alt="" className="" />{" "}
      </div>
      <Image
        src={MainImage}
        alt="home"
        ref={imageRef}
        className="absolute top-[20vw]"
        style={{
          width: "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
      <div
        ref={divRef}
        className="overflow-hidden absolute top-[49vw] left-[34vw] w-[32vw] h-[44vh]  z-50"
      >
        <Image src={Header} alt="" />
      </div>{" "}
      <div className="py-10 h-[120vh]" ref={goalsRef} style={{ opacity: 0 }}>
        <Goals />
      </div>
      <div className="relative">
        <Image src={Strategy} alt="Background" className="w-full h-auto" />
        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center text-[3vw] font-medium font-Sora absolute top-4">
            <h1 className="text-[3vw] font-medium font-Sora text-[#FFFFFF] pt-16">
              <p className="pl-10">Integrate the &quot;3 S&quot; AI in your </p>
              <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-32">
                digital marketing
              </span>
            </h1>
          </div>
        </div>

        <div className="w-[100%] overflow-visible flex flex-row  px-10 absolute top-44">
          <div className="w-[45%] flex justify-center relative ">
            <Image
              src={Marketing_first}
              alt="marketing1"
              className="w-full h-auto blend-screen"
            />
            <div className="absolute  flex justify-center items-center">
              <Image src={Video} alt="" className="w-[30vw] h-[55vh]" />
            </div>
            <div
              className=" absolute top-16  flex justify-center items-center z-40 opacity-0"
              ref={travelDivRef}
            >
              <Image src={Header} alt="" className="w-80 h-80" />
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center  text-[white]">
            <h1 className="text-[2vw] font-semibold pb-5 font-Sora pl-20">
              Strategy AI
            </h1>
            <p className="w-[70%] pl-20 font-Inter font-medium">
              Develop smarter, data-driven strategies that adapt to market
              trends and customer behavior, ensuring your campaigns are always
              on target
            </p>
          </div>
        </div>
      </div>
      <div className="relative flex flex-row ">
        <Image src={Segmentation} alt="" />

        <div className="w-[100%] flex flex-row px-40 absolute top-10 ">
          <div className="w-[45%] flex flex-col justify-center text-[white]">
            <h1 className="text-[2vw] font-Sora font-bold px-20 pb-5">
              Segmentation AI
            </h1>
            <p className=" text-start pl-20 font-Inter font-semibold">
              Accurately segment your audience using AI to deliver personalized
              messages that resonate, driving higher engagement and conversion
              rates.
            </p>
          </div>
          <div className="w-[55%] flex justify-center ">
            <Image
              src={SegmentAnimation}
              alt="marketing1"
              ref={segmentImageRef}
              className="blend-screen "
            />
          </div>
          <div className="rounded-full">
            <Image
              src={Video1}
              alt=""
              className="absolute right-[17.3vw] top-[3vw]  w-[30vw] h-[55vh]"
            />
          </div>
        </div>
      </div>
      <div className="w-full relative flex flex-row">
        <div className="relative flex flex-row h-[70vh]">
          <Image src={Scale} alt="" />

          <div className="w-[100%] flex flex-row px-40 absolute top-10 gap-10">
            <div className="w-[45%] flex justify-center blend-screen ">
              <div className="relative">
                {/* Rotating Elements */}
                <div ref={rotatingRef} className="relative flex flex-row">
                  <Image src={scale} alt="" className="" />

                  {/* Icons */}
                  {["instagram", "message", "whatsapp", "facebook"].map(
                    (icon, index) => (
                      <div
                        key={index}
                        ref={(el) => {
                          iconsRefs.current[index] = el;
                        }}
                        className="circle-image absolute"
                        style={{
                          top: iconPositions[index].top,
                          left: iconPositions[index].left,
                        }}
                      >
                        <div className="image-wrapper">
                          {activeIcon === index ? (
                            icon === "instagram" ? (
                              <Image src={inst1} alt="Instagram" />
                            ) : icon === "message" ? (
                              <Image src={mess} alt="Message" />
                            ) : icon === "whatsapp" ? (
                              <Image src={whats1} alt="WhatsApp" />
                            ) : icon === "facebook" ? (
                              <Image src={Fbook} alt="Facebook" />
                            ) : null
                          ) : (
                            <Image src={icons[index].src} alt={icon} />
                          )}
                        </div>
                      </div>
                    )
                  )}
                </div>

                {activeIcon !== null && (
                  <div
                    className="absolute left-[28vw] "
                    style={{
                      top: iconPositions[activeIcon].top,
                      left: iconPositions[activeIcon].left + 50, // Add offset to place the content to the right
                      zIndex: 5, // Ensure the content is above the icon
                      width: 150,
                      height: 200,
                    }}
                  >
                    <div className=" absolute ">
                      <Image
                        src={icons[activeIcon]?.img}
                        alt={icons[activeIcon]?.alt || ""}
                        className="rounded "
                      />
                    </div>{" "}
                  </div>
                )}
              </div>
            </div>
            <div className="w-[60%] flex flex-col justify-center text-[white]">
              <h1 className="text-[2vw] font-Sora font-bold px-20 pb-5">
                Scale Through Automation
              </h1>
              <p className="text-start font-Sora font-semibold pl-20">
                Effortlessly scale your marketing efforts with Automation,
                optimizing performance and expanding your reach without
                compromising quality or efficiency.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Slider Section */}
      <DigitalMarketing />
      <div className="py-10 ">
        <BrandScroll />
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="flex justify-center text-[3vw] font-medium font-Sora ">
          <h1 className="text-[3vw] font-Sora font-medium text-[#FFFFFF] py-16">
            <p className="pl-10 font-Sora">
              The 3 S AI stabilizes your marketing goal{" "}
            </p>{" "}
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-36">
              And increase performance all time.{" "}
            </span>
          </h1>
        </div>

        <div className="w-full flex flex-row gap-10 justify-center">
          {MarketingGoalsList?.map((data: MarketingGoalsListType) => (
            <div
              className="w-[25%] h-[45vh] rounded-lg from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r "
              key={data?.id}
            >
              <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw]  align-center mt-16">
                {/* <Image src={data?.icon} alt="" /> */}
                <Image
                  src={data?.icon}
                  alt=""
                  className="w-70 h-32 flex justify-center items-center"
                />

                <p className="font-Sora font-semibold">{data?.content}</p>
                <span className=" font-Sora font-semibold">
                  {data?.content1}
                </span>

                <p className="w-auto min-w-10 text-[0.95vw] px-10 py-5 flex justify-center  font-Sora items-center text-center font-medium ">
                  {data?.details}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Growth */}
      </div>
      <Growth />
    </div>
  );
}
