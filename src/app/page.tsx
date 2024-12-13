"use client";

import Image from "next/image";

import MetaIcon from "../assets/Icons/meta.svg";
import mainLine from "../assets/Icons/mainLine.svg";
import what1 from "../assets/Icons/1.svg";
import slack from "../assets/Icons/2.svg";
import insts from "../assets/Icons/3.svg";
import mess1 from "../assets/Icons/4.svg";
import tik from "../assets/Icons/6.svg";
import linked from "../assets/Icons/5.svg";
import mainImage from "../assets/Icons/mainImage2.svg";

import Marketing_first from "../assets/Icons/Strategy Animation.svg";
import Strategy from "../assets/Icons/Strategy.svg";

import DigitalMarketing from "@components/DigitalMarketing";

import Goals from "@components/Goals";
import { useEffect, useRef, useState } from "react";

import gsap from "gsap";
import BrandScroll from "@components/BrandScroll";
import Growth from "@components/Growth";
import { MarketingGoalsList, MarketingGoalsListType } from "@constants/home";

import { ScrollTrigger } from "gsap/ScrollTrigger";

import lottie, { AnimationItem } from "lottie-web";

import homeBg from "../assets/Icons/Home Screen bg.svg";

import SegmentAnimation from "@components/SegmentAnimation";
import ScaleThorugh from "@components/ScaleThorugh";

export default function Home() {
  const whatsappRef = useRef<HTMLImageElement | null>(null);
  const imageRef = useRef<HTMLImageElement | null>(null);
  const slackRef = useRef<HTMLImageElement | null>(null);
  const instagramRef = useRef<HTMLImageElement | null>(null);
  const LinkedInRef = useRef<HTMLImageElement | null>(null);
  const MessageRef = useRef<HTMLImageElement | null>(null);
  const TicktokRef = useRef<HTMLImageElement | null>(null);
  const divRef = useRef<HTMLDivElement | null>(null);
  const goalsRef = useRef<HTMLDivElement | null>(null);
  const travelDivRef = useRef<HTMLDivElement | null>(null);
  const segmentImageRef = useRef<HTMLDivElement | null>(null);
  const scaleThroughRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const is2xl = window.matchMedia("(min-width: 1536px)").matches;

    gsap.fromTo(
      divRef.current,
      {
        y: 0,
        willChange: "transform",
      },
      {
        y: is2xl ? "153vh" : "138vh",
        x: "-1vh", // Adjust 'y' based on screen size
        ease: "power1.inOut",
        scrollTrigger: {
          trigger: goalsRef.current,
          start: "top center",
          end: "top center",
          scrub: 2,
        },
      }
    );
  }, []);

  useEffect(() => {
    gsap.fromTo(
      imageRef.current,
      {
        scale: 1,
      },
      {
        scale: 0.5, // Shrinking size
        scrollTrigger: {
          trigger: imageRef.current,
          start: "top top", // Trigger when the image is at the top of the screen
          end: "bottom top", // End when the image reaches the top of the viewport
          scrub: 5, // Makes the animation follow the scroll
        },
      }
    );
  }, []);

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

  useEffect(() => {
    const travelDiv = travelDivRef.current;
    const segmentDiv = segmentImageRef.current;
    const scaleThrough = scaleThroughRef.current;

    if (travelDiv && segmentDiv && scaleThrough) {
      // gsap.to(travelDiv, {
      //   scrollTrigger: {
      //     trigger: travelDiv,
      //     start: "top center",
      //     endTrigger: segmentDiv,
      //     end: "center center",
      //     scrub: true,
      //     onUpdate: (self) => {
      //       const progress = self.progress;

      //       const xDistance =
      //         segmentDiv.getBoundingClientRect().left -
      //         travelDiv.getBoundingClientRect().left +
      //         1300;
      //       const yDistance =
      //         segmentDiv.getBoundingClientRect().top -
      //         travelDiv.getBoundingClientRect().top +
      //         900;

      //       const newX = xDistance * progress;
      //       const newY = yDistance * progress;

      //       gsap.to(travelDiv, {
      //         x: newX,
      //         y: newY,
      //         duration: 0.1,
      //         ease: "none",
      //       });
      //     },
      //   },
      // });

      gsap.to(travelDiv, {
        scrollTrigger: {
          trigger: travelDiv,
          start: "top center",
          endTrigger: segmentDiv,
          end: "center center",
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            // Calculate x and y distances dynamically
            const xOffset =
              window.innerWidth >= 1280 // xl breakpoint
                ? 1500 // Adjust offset for xl
                : window.innerWidth >= 1536 // 2xl breakpoint
                ? 1700 // Adjust offset for 2xl
                : 1300; // Default offset

            const yOffset =
              window.innerWidth >= 1280
                ? 1000
                : window.innerWidth >= 1536
                ? 1500
                : 900;

            const xDistance =
              segmentDiv.getBoundingClientRect().left -
              travelDiv.getBoundingClientRect().left +
              xOffset;
            const yDistance =
              segmentDiv.getBoundingClientRect().top -
              travelDiv.getBoundingClientRect().top +
              yOffset;

            // Calculate new positions
            const newX = xDistance * progress;
            const newY = yDistance * progress;

            // Update travelDiv position
            gsap.to(travelDiv, {
              x: newX,
              y: newY,
              duration: 0.1,
              ease: "none",
            });
          },
        },
      });

      // gsap.to(travelDiv, {
      //   scrollTrigger: {
      //     trigger: segmentDiv,
      //     start: "center center",
      //     endTrigger: scaleThrough,
      //     // end: "center center",
      //     scrub: true,

      //     onUpdate: (self) => {
      //       const progress = self.progress;

      //       const xDistance =
      //         scaleThrough.getBoundingClientRect().right -
      //         segmentDiv.getBoundingClientRect().right;
      //       const yDistance =
      //         scaleThrough.getBoundingClientRect().top -
      //         segmentDiv.getBoundingClientRect().top;

      //       const newX = xDistance * progress + 6;
      //       const newY = yDistance * progress + 750;

      //       gsap.to(travelDiv, {
      //         x: newX,
      //         y: newY,
      //       });
      //     },
      //   },
      // });

      gsap.to(travelDiv, {
        scrollTrigger: {
          trigger: segmentDiv,
          start: "center center",
          endTrigger: scaleThrough,
          scrub: true,

          onUpdate: (self) => {
            const progress = self.progress;

            // Get screen size dynamically
            const getScreenSize = () => {
              if (window.matchMedia("(min-width: 1536px)").matches) {
                return "2xl";
              } else if (window.matchMedia("(min-width: 1280px)").matches) {
                return "xl";
              } else {
                return "default";
              }
            };

            // Calculate position based on screen size
            const calculatePosition = (progress: any) => {
              const screenSize = getScreenSize();

              let xOffset, yOffset;

              // Define offsets for each screen size
              switch (screenSize) {
                case "2xl":
                  xOffset = 20; // Adjust this value for 2xl
                  yOffset = 1050; // Adjust this value for 2xl
                  break;
                case "xl":
                  xOffset = 10; // Adjust this value for xl
                  yOffset = 800; // Adjust this value for xl
                  break;
                default:
                  xOffset = 6; // Default value
                  yOffset = 700; // Default value
              }

              const xDistance =
                scaleThrough.getBoundingClientRect().right -
                segmentDiv.getBoundingClientRect().right;
              const yDistance =
                scaleThrough.getBoundingClientRect().top -
                segmentDiv.getBoundingClientRect().top;

              const newX = xDistance * progress + xOffset;
              const newY = yDistance * progress + yOffset;

              return { newX, newY };
            };

            const { newX, newY } = calculatePosition(progress);

            gsap.to(travelDiv, {
              x: newX,
              y: newY,
            });
          },
        },
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const [scale, setScale] = useState(1);
  const [isImageHidden, setIsImageHidden] = useState(false);
  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Decrease the size of the image with scroll
    const newScale = Math.max(1 - scrollY / 1000, 0.5); // Min scale is 0.5
    setScale(newScale);

    // Hide or show the image based on scroll threshold
    if (scrollY > 300) {
      setIsImageHidden(true); // Hide the image when scrolling down
    } else {
      setIsImageHidden(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const animateIcons = (direction: any) => {
      const refs = [
        {
          ref: whatsappRef,
          start: { y: -100, x: 10 },
          end: { y: -80, x: -10 },
        },
        { ref: slackRef, start: { y: -100, x: 10 }, end: { y: -80, x: -10 } },
        {
          ref: instagramRef,

          start: { y: -100, x: -10 },
          end: { y: -80, x: 10 },
        },
        {
          ref: LinkedInRef,
          start: { y: -100, x: -10 },
          end: { y: -90, x: 10 },
        },
        {
          ref: MessageRef,
          start: { y: -100, x: -10 },
          end: { y: -80, x: 10 },
        },
        { ref: TicktokRef, start: { y: -100, x: 30 }, end: { y: -80, x: 10 } },
      ];

      refs.forEach(({ ref, start, end }) => {
        if (ref.current) {
          gsap.fromTo(
            ref.current.querySelector("img"),
            direction === "down" ? start : end,
            {
              ...((direction === "down" ? end : start) as object),
              duration: 2,
              ease: "power2.inOut",
              repeat: -1,
              yoyo: true,
            }
          );
        }
      });
    };

    animateIcons("down");

    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const direction = currentScrollY > lastScrollY ? "down" : "up";
      lastScrollY = currentScrollY;

      animateIcons(direction);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="w-full bg-[#060A22] w-100 flex flex-col justify-center">
      <Image
        src={homeBg}
        alt=""
        className=" relative w-full "
        style={{ opacity: "0.25" }}
      />
      <div className=" w-[100vw]  absolute top-10  ">
        <div className="w-[100%] flex justify-center text-[3vw] font-medium font-Sora py-10 ">
          <h1 className="text-[3vw] font-bold text-[#FFFFFF]  font-Sora  xl:mt-16">
            <p className="text-center ">Transform your digital marketing</p>
            with awesome data-driven
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              {" "}
              Generative AI
            </span>
          </h1>
        </div>
        <div className="w-[100%] flex justify-center text-[3vw] font-medium font-Sora xl:mt-12 2xl:mt-6">
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

        {/* {!isImageHidden && ( */}
        <div className="blend-screen">
          <div className="w-[100%] flex justify-center text-[3vw] font-medium font-inter gap-5 my-5  xl:my-12 z-0">
            <button className="btn btn_primary text-[0.95vw] font-bold 2xl:p-8 ">
              <p className="2xl:mt-[-0.7vw]">Request Demo</p>
            </button>
            <button>
              <div className="w-[100%] flex flex-row border border-[#111449] p-4 rounded-full align-center justify-center items-center ">
                <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
                <p className="text-[1.05vw] text-[#FFFFFF] font-Inter">
                  Tech Partner
                </p>
              </div>
            </button>
          </div>

          <div className="">
            <Image src={mainLine} alt="" className="absolute  top-[16vw]  " />
            <div ref={whatsappRef} className="relative">
              <Image
                src={what1}
                alt="Animated Image"
                className="absolute top-[7vw] left-[6vw] w-[20vw] h-[23vh] 2xl:left-[8vw] 2xl:top-[10vw]"
              />
            </div>
            <div ref={slackRef} className="relative">
              <Image
                src={slack}
                alt="Animated Image"
                className="scrolling-image absolute top-[4vw] left-[20vw] w-[20vw] h-[19vh] 2xl:left-[25vw] 2xl:top-[6vw]"
              />
            </div>
            <div ref={instagramRef} className="relative">
              <Image
                src={insts}
                alt=""
                className=" absolute xl:top-[1vw] xl:right-[16vw] w-[20vw] h-[13vh]  2xl:right-[20vw] 2xl:top-[3vw] "
              />
            </div>
            <div ref={MessageRef} className="relative">
              <Image
                src={mess1}
                alt=""
                className=" absolute xl:top-[-2vw] xl:right-[4vw] w-[20vw] h-[23vh] 2xl:right-[4vw] 2xl:top-[3vw] "
              />
            </div>
            <div ref={TicktokRef} className="relative">
              <Image
                src={tik}
                alt=""
                className=" absolute xl:top-[13vw] xl:right-[15vw] w-[20vw] h-[15vh] 2xl:top-[17vw]"
              />
            </div>
            <div ref={LinkedInRef} className="relative">
              <Image
                src={linked}
                alt=""
                className=" absolute top-[20vw] left-[15vw] w-[20vw] h-[13vh] 2xl:top-[25vw] 2xl:left-[16vw]"
              />
            </div>
          </div>
        </div>
        {/* )} */}
      </div>
      <div className="">
        <div className="">
          <Image
            src={mainImage}
            alt=""
            className=" absolute top-[8vw] blend-screen"
          />
        </div>
        <div
          ref={divRef}
          className="overflow-hidden absolute xl:top-[42vw]  xl:left-[36.5vw] 2xl:left-[38vw]  w-[50vh]   z-10"
        >
          <iframe
            src="https://lottie.host/embed/9560e7d1-c797-4b22-8614-9cd19a36f44f/B0IxtOljg5.json"
            className="w-full h-full"
            style={{
              width: "100%",
              height: "43vh",
              border: "none",
            }}
          />
        </div>
      </div>

      <div className="py-10 xl:h-[120vh] 2xl:h-[140vh] " ref={goalsRef}>
        <Goals />
      </div>

      <div className="relative">
        <Image
          src={Strategy}
          alt="Background"
          className="w-full h-auto"
          style={{ opacity: "0.75" }}
        />

        <div className="flex flex-col items-center justify-center">
          <div className="flex justify-center text-[3vw] font-medium font-Sora absolute top-4">
            <h1 className="text-[3vw] font-semibold font-Sora text-[#FFFFFF] pt-16">
              <p className="pl-10">Integrate the &quot;3 S&quot; AI in your </p>
              <span className="font-Sora text-[3vw] font-bold from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent pl-32">
                digital marketing
              </span>
            </h1>
          </div>
        </div>

        <div className="w-[100%] overflow-visible flex flex-row justify-center absolute top-44">
          <div className="flex relative">
            <Image
              src={Marketing_first}
              alt="marketing1"
              className="w-[50vw] h-auto blend-screen"
            />

            <div className="scroll-container">
              <div
                className="lottie-container absolute  flex justify-center items-center xl:right-[-11.5vw] xl:h-[375px] xl:top-[4.5vw] 2xl:top-[6.5vw] z-0 2xl:h-[420px]"
                style={{
                  width: "70vw",
                  // height: "380px",
                  zIndex: 10,
                }}
              ></div>
            </div>

            <div
              className="absolute xl:top-1 flex justify-center items-center 2xl:top-[18vw] 2xl:left-[2vw] xl:h-[32vh] 2xl:h-[34vh]"
              ref={travelDivRef}
              style={{
                position: "absolute",
                top: "9vw",
                left: "-7vw",
                width: "60vw",
                // height: "30vh",
                zIndex: 30,
              }}
            >
              <iframe
                src="https://lottie.host/embed/9560e7d1-c797-4b22-8614-9cd19a36f44f/B0IxtOljg5.json"
                className="w-full h-full"
                style={{
                  width: "100%",
                  height: "100%",
                  border: "none",
                }}
              />
            </div>
          </div>

          <div className="w-[60%] flex flex-col justify-center text-[white]">
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

      <div ref={segmentImageRef}>
        <SegmentAnimation />
      </div>

      <div className=" " ref={scaleThroughRef}>
        <ScaleThorugh />
      </div>

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
        {/* <div className="xs:hidden md:hidden:w-full h-[45vh] relative flex justify-center items-center">
          {MarketingGoalsList?.map(
            (data: MarketingGoalsListType, index: number) => (
              <div
                className={`w-[22%] h-[45vh] rounded-[5%] from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r absolute transform ${
                  index === 0
                    ? " z-[30] top-0  transform-origin-center" // First card (rotate 80 degrees, topmost)
                    : index === 1
                    ? "rotate-[-20deg] z-[20] top-[-10%]  transform-origin-center" // Second card (rotate -120 degrees, slightly left)
                    : index === 2
                    ? "rotate-[20deg] z-[10] top-[-10%]  transform-origin-center" // Third card (rotate 80 degrees, slightly right)
                    : ""
                }`}
                key={data?.id}
              >
                <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] align-center mt-16">
                  <Image
                    src={data?.icon}
                    alt=""
                    className="w-[80vw] h-[15vh] flex justify-center items-center"
                  />
                  <p className="text-[#d7d2fc] mt-7 text-[1.2vw] font-Sora font-semibold">
                    {data?.content}
                  </p>
                  <span className="text-[#d7d2fc] text-[1.2vw] font-Sora font-semibold">
                    {data?.content1}
                  </span>
                  <p className="w-auto min-w-10 text-[0.95vw] px-10 py-2 flex justify-center font-Inter items-center text-center font-medium text-[#908eb5]">
                    {data?.details}
                  </p>
                </div>
              </div>
            )
          )}
        </div> */}
      </div>
      <Growth />
    </div>
  );
}
