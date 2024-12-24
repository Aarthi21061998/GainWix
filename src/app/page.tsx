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
import Mobile from "../assets/Icons/mbl.svg";
import image from "../assets/Icons/cardIcon.svg";
import image1 from "../assets/Icons/card2.svg";
import image2 from "../assets/Icons/card3.svg";

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
import Responsive from "../assets/Icons/responsive.svg";

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
    const is2xl = window.matchMedia("(min-width: 1536px)").matches;

    gsap.fromTo(
      divRef.current,
      {
        y: 0,
        willChange: "transform",
      },
      {
        y: is2xl ? "141.5vh" : "131vh",
        x: is2xl ? "6.5vh" : "4vh",
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
      gsap.to(travelDiv, {
        scrollTrigger: {
          trigger: travelDiv,
          start: "top center", // Top-to-bottom start
          endTrigger: segmentDiv,
          end: "bottom center", // Top-to-bottom end
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            const xOffset =
              window.innerWidth >= 1280 // xl breakpoint
                ? 1100 // Adjust offset for xl
                : window.innerWidth >= 1600 // 2xl breakpoint
                ? 10 // Adjust offset for 2xl
                : 10; // Default offset

            const yOffset =
              window.innerWidth >= 1280
                ? 800
                : window.innerWidth >= 1920
                ? 10000
                : 10000;

            const xDistance =
              segmentDiv.getBoundingClientRect().left -
              travelDiv.getBoundingClientRect().left +
              xOffset;
            const yDistance =
              segmentDiv.getBoundingClientRect().top -
              travelDiv.getBoundingClientRect().top +
              yOffset;

            const newX = xDistance * progress;
            const newY = yDistance * progress;

            gsap.to(travelDiv, {
              x: newX,
              y: newY,
              duration: 0.1,
              ease: "none",
            });
          },
        },
      });

      gsap.to(travelDiv, {
        scrollTrigger: {
          trigger: segmentDiv,
          start: "bottom center", // Bottom-to-top start
          endTrigger: scaleThrough,
          end: "top center", // Bottom-to-top end
          scrub: true,
          onUpdate: (self) => {
            const progress = self.progress;

            const getScreenSize = () => {
              if (window.matchMedia("(min-width: 1536px)").matches) {
                return "2xl";
              } else if (window.matchMedia("(min-width: 1280px)").matches) {
                return "xl";
              } else {
                return "default";
              }
            };

            const calculatePosition = (progress: any) => {
              const screenSize = getScreenSize();

              let xOffset, yOffset;

              switch (screenSize) {
                case "2xl":
                  xOffset = 0;
                  yOffset = 0;
                  break;

                // case "xl":
                //   xOffset = 20;
                //   yOffset = 1050;
                //   break;
                default:
                  xOffset = 5;
                  yOffset = 560;
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

  useEffect(() => {
    const animateIcons = (direction: any) => {
      const refs = [
        {
          ref: whatsappRef,
          start: { y: -100, x: -10 },
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
  useEffect(() => {
    gsap.fromTo(
      ".card",
      { rotation: 0, x: 10 },
      {
        rotation: 0, // Final rotation (no rotation)
        x: (index) => index * 350, // Separate cards horizontally (adjust as needed)
        scrollTrigger: {
          trigger: ".cards-container",
          start: "top bottom", // Start the animation when the container is in view
          end: "bottom top", // End the animation when the container is out of view
          // onEnter: () => {
          //   // Animation when scrolling down (top to bottom)
          //   gsap.to(".card", { x: (index) => index * 350 });
          // },
          // onEnterBack: () => {
          //   // Reset animation when scrolling up (bottom to top)
          //   gsap.to(".card", { x: 10 });
          // },
          // onLeave: () => {
          //   // Optional: Reset when leaving (if needed)
          //   gsap.set(".card", { x: 10 });
          // },
          // onLeaveBack: () => {
          //   // Optional: Reset when leaving back (if needed)
          //   gsap.set(".card", { x: 10 });
          // },
          // scrub: true, // Smoothly animate based on scroll position (optional)
        },
      }
    );
  }, []);

  return (
    <div className="w-full bg-[#060A22] w-100  md:h-auto  lg:h-auto flex flex-col justify-center">
      <Image
        src={homeBg}
        alt=""
        className=" relative w-full "
        style={{ opacity: "0.25" }}
      />
      <div className=" w-[100vw]  absolute xl:top-10 xs:top-1 md:top-[20vw] md:my-10    ">
        <div className="xs:hidden md:block w-[100%] flex justify-center  lg:text-[3vw]   font-medium font-Sora py-10  ">
          <h1 className="lg:text-[3vw] md:text-[4vw] font-bold text-[#FFFFFF]  text-center font-Sora  xl:mt-16">
            <p className="text-center ">Transform your digital marketing</p>
            with awesome data-driven
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              {" "}
              Generative AI
            </span>
          </h1>
        </div>
        <div className="xs:block md:hidden w-[95%] flex justify-center text-[3vw] font-medium font-Sora py-10  ">
          <h1 className=" xs:text-center  md:text-[3vw] xs:text-[7vw] lg:text-[3vw] font-bold text-[#FFFFFF]  font-Sora  xs:mt-[25vw]">
            <p className="text-center ">
              Transform your <br /> digital marketing with
            </p>
            Awesome data-driven <br />
            <span className="from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent font-Sora">
              {" "}
              Generative AI
            </span>
          </h1>
        </div>
        <div className="xs:hidden lg:block  flex justify-center md:text-[3vw]  font-medium font-Sora xl:mt-12 2xl:mt-6">
          <h1 className="lg:text-[1vw] md:text-[2.5vw] text-center font-medium text-[#D7DEDA] lg:-mt-14 font-Inter ">
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
        <div className="xs:block md:block lg:hidden  xs:w-[80vw] md:w-[90vw] flex text-center  xs:mx-10 items-center justify-center md:text-[3vw]  font-medium font-Sora xs:mt-10 2xl:mt-6">
          <h1 className="xs:text-[2vw] md:text-[2.5vw] font-medium text-[#908EB5] -mt-14 font-Inter ">
            <p>
              Say goodbye to fragmented, ineffective marketing. Transforming
              your agency into a Cutting-edge, AI-powered powerhouse. Experience
              a seamless, data-driven approach that drives Real results.
            </p>
          </h1>
        </div>
        <div className="w-[100%]  flex justify-center md:text-[4vw] lg:text-[3vw] font-medium font-inter gap-5 my-5  xl:my-12 z-20 relative">
          <button className="btn btn_primary md:text-[2vw] lg:text-[0.95vw] font-bold 2xl:p-8 ">
            <a
              href="https://calendly.com/sales-h-cn/30min?month=2024-12"
              target="_blank"
              rel="noreferrer"
              className="2xl:mt-[-0.7vw]"
            >
              Request Demo
            </a>
          </button>
          <button>
            <div className="w-[100%] flex flex-row border-4 border-[#111449] p-4 rounded-full align-center justify-center items-center">
              <Image src={MetaIcon} alt="MetaIcon" className="w-10 h-4" />
              <p className="lg:text-[1.05vw] md:text-[2vw] text-[#FFFFFF] font-Inter">
                Tech Partner
              </p>
            </div>
          </button>
        </div>

        <div className="blend-screen">
          <div className="xs:block md:block lg:block xl:hidden ">
            <Image
              src={Mobile}
              alt=""
              className="md:mx-[10vw] lg:ml-[-1vw]  lg:-mt-[7vw] lg:w-[95vw] xl:w-full "
            />
          </div>
          {!isImageHidden && (
            <div className="xs:hidden md:hidden xl:block z-10">
              <Image
                src={mainLine}
                alt=""
                className="absolute md:top-[40vw]  lg:top-[16vw]    z-0 "
              />
              <div ref={whatsappRef} className="relative">
                <Image
                  src={what1}
                  alt="Animated Image"
                  className="absolute md:top-[30vw] lg:top-[7vw] lg:left-[6vw] lg:w-[20vw] lg:h-[23vh] md:w-[10vw] md:h-[13vh] 2xl:left-[8vw] 2xl:top-[10vw]"
                />
              </div>
              <div ref={slackRef} className="relative">
                <Image
                  src={slack}
                  alt="Animated Image"
                  className="scrolling-image absolute lg:top-[4vw] lg:left-[20vw] lg:w-[20vw] lg:h-[19vh]  md:w-[10vw] md:h-[13vh] 2xl:left-[25vw] 2xl:top-[6vw]"
                />
              </div>
              <div ref={instagramRef} className="relative">
                <Image
                  src={insts}
                  alt=""
                  className=" absolute xl:top-[1vw] xl:right-[16vw] lg:w-[20vw] lg:h-[13vh]  md:w-[10vw] md:h-[13vh]  2xl:right-[20vw] 2xl:top-[3vw] "
                />
              </div>
              <div ref={MessageRef} className="relative">
                <Image
                  src={mess1}
                  alt=""
                  className=" absolute xl:top-[-2vw] xl:right-[4vw] lg:w-[20vw] lg:h-[23vh]   md:w-[10vw] md:h-[13vh] 2xl:right-[4vw] 2xl:top-[3vw] "
                />
              </div>
              <div ref={TicktokRef} className="relative">
                <Image
                  src={tik}
                  alt=""
                  className=" absolute xl:top-[13vw] xl:right-[15vw] lg:w-[20vw] lg:h-[15vh]  md:w-[10vw] md:h-[13vh] 2xl:top-[17vw]"
                />
              </div>
              <div ref={LinkedInRef} className="relative">
                <Image
                  src={linked}
                  alt=""
                  className=" absolute lg:top-[20vw] lg:left-[15vw] lg:w-[20vw] lg:h-[13vh]  md:w-[10vw] md:h-[13vh] 2xl:top-[25vw] 2xl:left-[16vw]"
                />
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="">
        <div className="">
          <Image
            src={mainImage}
            alt=""
            className=" absolute xl:top-[12vw] xl:left-[-3vw] lg:top-[75vw] lg:left-[10vw] md:top-[75vw] md:left-[-5vw] xs:top-[145vw] blend-screen lg:w-[70vw] xl:w-full"
          />
        </div>
        <div
          ref={divRef}
          className="overflow-hidden absolute xl:top-[44vw]  xl:h-[43vh] 2xl:h-[39vh] xl:left-[34vw] 2xl:left-[34vw]  2xl:top-[46vw] w-[50vh]   z-10 xs:hidden md:hidden lg:hidden xl:block"
        >
          <iframe
            src="https://lottie.host/embed/9560e7d1-c797-4b22-8614-9cd19a36f44f/B0IxtOljg5.json"
            className="w-full h-full"
            style={{
              width: "100%",

              border: "none",
            }}
          />
        </div>
        <div className="overflow-hidden absolute xs:h-[13vh] md:h-[18vh] lg:h-[16vh] md:top-[108vw] md:left-[12vw] xs:top-[178vw] lg:top-[96vw]  xs:left-[6vw] 2xl:left-[38vw]  w-[50vh]   z-10 xs:block md:block lg:block xl:hidden">
          <iframe
            src="https://lottie.host/embed/9560e7d1-c797-4b22-8614-9cd19a36f44f/B0IxtOljg5.json"
            className="w-full h-full"
            style={{
              width: "100%",
              border: "none",
            }}
          />
        </div>
      </div>

      <div
        className="py-10 xl:h-[120vh] xl:mt-0 lg:mt-[30vw]   md:mt-[50vw] 2xl:h-[140vh] "
        ref={goalsRef}
      >
        <Goals />
      </div>

      <div className="relative md:py-10 lg:py-0">
        <div className="relative xs:py-5 md:py-0 flex !flex-row">
          <Image
            src={Strategy}
            alt="Background"
            className="w-full md:h-auto xs:h-[100vh]  "
            style={{ opacity: "0.75" }}
          />

          <div className="flex flex-col items-center justify-center ">
            <div className="  xs:block md:hidden flex justify-center text-[3vw] font-medium font-Sora absolute top-[-13vw] left-[4vw]">
              <h1 className="text-[6vw] text-center  font-bold font-Sora text-[#FFFFFF]">
                <p className="">
                  Integrate The <br /> &quot;3 S&quot; AI in your
                  <span className="font-Sora text-[6vw] pl-1 font-bold from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent ">
                    digital
                  </span>
                </p>
                <span className="font-Sora text-[6vw] font-bold from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent ">
                  marketing
                </span>
              </h1>
              <div className="text-[white]  pl-[5vw]">
                Become one of the first ever AI powered digital Agency
              </div>
            </div>
            <div className=" xs:hidden md:block flex justify-center text-[3vw] font-medium font-Sora absolute top-4  left-[25vw]">
              <h1 className="text-[3vw] font-semibold font-Sora text-[#FFFFFF] pt-16">
                <p className="pl-10">
                  Integrate the &quot;3 S&quot; AI in your{" "}
                </p>
                <span className="font-Sora text-[3vw] text-center font-bold from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent lg:pl-32 md:pl-24">
                  digital marketing
                </span>
              </h1>
              <div className="text-[white] text-[1.5vw] text-center">
                Become one of the first ever AI powered digital Agency
              </div>
            </div>
          </div>

          <div className=" xs:hidden md:flex w-[100%] overflow-visible flex  flex-row  justify-center absolute top-44">
            <div className="flex relative">
              <Image
                src={Marketing_first}
                alt="marketing1"
                className="w-[50vw] h-auto blend-screen md:hidden xl:block"
              />
              <Image
                src={Responsive}
                alt="marketing1"
                className="w-[50vw] blend-screen md:block lg:block xl:hidden"
              />

              <div className="scroll-container">
                <div
                  className="lottie-container absolute  flex justify-center items-center xl:right-[13vw] xl:h-[378px] xl:top-[5.5vw] 2xl:top-[6.5vw] 2xl:left-[11vw] z-0 2xl:h-[450px] lg:hidden xl:block lg:border-l-background"
                  style={{}}
                ></div>
              </div>

              <div
                className="absolute xl:top-[10.5vw] xl:left-[-5.5vw] flex justify-center items-center 2xl:top-[11vw] 2xl:left-[-5.5vw] xl:h-[33.5vh] 2xl:h-[32vh] xl:block lg:hidden md:hidden"
                ref={travelDivRef}
                style={{
                  position: "absolute",

                  width: "60vw",
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
            <div className="w-1/2 mx-[10px] flex flex-col justify-center text-white ">
              <h1 className="text-[2.7vw] font-semibold pb-5 font-Sora lg:pl-20 xl:pl-0">
                Strategy AI
              </h1>
              <p className="lg:w-[80%] lg:pl-20 xl:pl-0 font-Inter font-medium text-[#908EB5] md:text-lg xl:text-[1vw] leading-8">
                Create intelligent, data-driven strategies that respond to
                evolving market trends and customer behavior, ensuring alignment
                with your strategic goals & objectives.
              </p>
            </div>
          </div>
        </div>

        <div className="xs:block md:hidden overflow-visible flex flex-row justify-center items-center absolute top-44 space-x-4">
          <div className="flex flex-col justify-center text-[white] pl-3">
            <h1 className="w-[90%] text-[5vw] font-semibold pb-5 font-Sora">
              Strategy AI
            </h1>
            <p className="w-[90%] font-Inter font-semibold text-[#908EB5] text-[3.8vw] leading-6">
              Create intelligent, data-driven strategies that respond to
              evolving market trends and customer behavior, ensuring alignment
              with your strategic goals & objectives.
            </p>
          </div>
          <div className="flex relative overflow-hidden">
            <Image
              src={Responsive}
              alt="marketing1"
              className="blend-screen !w-[90%] max-w-[450px]"
            />
          </div>
        </div>
      </div>

      <div
        ref={segmentImageRef}
        className="xs:py-[45vw]  md:py-[40vw] lg:py-[30vw] xl:py-0"
      >
        <SegmentAnimation />
      </div>

      <div className="md:py-[10vw] lg:py-[10vw] xl:py-0 " ref={scaleThroughRef}>
        <ScaleThorugh />
      </div>

      <DigitalMarketing />
      <div className="py-10 ">
        <BrandScroll />
      </div>
      <div className="xs:hidden xl:block flex flex-col items-center justify-center xl:py-[10vw]">
        <div className="flex justify-center text-[3vw] font-semibold font-Sora ">
          <h1 className="text-[3vw] font-Sora  text-[#FFFFFF] py-16">
            <p className="pl-10 font-Sora">
              The 3 S AI stabilizes your marketing goal{" "}
            </p>{" "}
            <span className="  from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-gradient-to-r bg-clip-text text-transparent xl:pl-32 xs:pl-24">
              And increase performance all time{" "}
            </span>
          </h1>
        </div>
        <div className="cards-container w-full  flex flex-row justify-center  mx-[-25vw] ">
          <div className="card w-[23%] h-[45vh] rounded-[5%] from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r relative -rotate-12 ">
            <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] mt-16">
              <Image src={image} alt="" className="w-[80vw] h-[15vh]" />
              <p className="text-[#d7d2fc] mt-7 xl:text-[1.5vw] font-Sora font-semibold text-center">
                Anticipates <br /> Market Trends{" "}
              </p>
              <span className="text-[#908EB5] text-[1vw] xl:mt-3 font-Sora font-medium text-center">
                Leverage AI to stay ahead by predicting market shifts with
                precision.{" "}
              </span>
            </div>
          </div>

          <div className="card w-[23%] h-[45vh] rounded-[5%] from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r absolute rotate-12 scroll-snap-start">
            <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] mt-16">
              <Image src={image1} alt="" className="w-[80vw] h-[15vh]" />
              <p className="text-[#d7d2fc] mt-7 text-[1.5vw] font-Sora font-semibold text-center">
                Generate <br />
                Target Audience{" "}
              </p>
              <span className="text-[#908EB5] text-[1vw] xl:mt-3 font-Sora font-medium text-center mx-2">
                AI-driven insights to identify and attract your ideal customers
                effortlessly.{" "}
              </span>
            </div>
          </div>

          <div className="card w-[23%] h-[45vh] rounded-[5%] from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r absolute rotate-[42vw] scroll-snap-start">
            <div className="flex-col text-white w-full flex items-center justify-center text-[1.2vw] mt-16">
              <Image src={image2} alt="" className="w-[80vw] h-[15vh]" />
              <p className="text-[#d7d2fc] mt-7 text-[1.5vw] font-Sora font-semibold text-center">
                Specific <br /> Channel Targeting{" "}
              </p>
              <span className="text-[#908EB5] text-[1vw] font-Sora font-medium text-center xl:mt-3 ">
                Optimize outreach with AI-powered targeting for the most
                effective channels.{" "}
              </span>
            </div>
          </div>
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
