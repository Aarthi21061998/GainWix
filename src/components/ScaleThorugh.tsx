import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";

import Scale from "../assets/Icons/Scale.svg";
import scale1 from "../assets/Icons/scal.svg";
import instagram from "../assets/Icons/insta.svg";
import message from "../assets/Icons/message.svg";
import whatsapp from "../assets/Icons/whatsappIcon.svg";
import facebook from "../assets/Icons/facebook.svg";
import Image1 from "../assets/Icons/instaMarketing.svg";
import Image2 from "../assets/Icons/message1.svg";
import Image3 from "../assets/Icons/messanger.svg";
import Image4 from "../assets/Icons/whatsapp2.svg";
import inst1 from "../assets/Icons/instagram.svg";
import whats1 from "../assets/Icons/wApp.svg";
import mess from "../assets/Icons/messIcon.svg";
import Fbook from "../assets/Icons/fb.svg";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const ScaleThorugh = () => {
  const rotatingRef = useRef(null);
  const iconsRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeIcon, setActiveIcon] = useState(3); // Initially set active to WhatsApp icon
  const iconPositions = [
    { top: "1vw", left: "17vw" },
    { top: "9vw", left: "10vw" },
    { top: "15vw", left: "17vw" },
    { top: "9vw", left: "22vw" }, // Adjusted position for WhatsApp icon (far right)
  ];

  const icons = [
    { src: instagram, alt: "Instagram", img: Image1 },
    { src: message, alt: "Message", img: Image2 },

    { src: facebook, alt: "Facebook", img: Image4 },
    { src: whatsapp, alt: "WhatsApp", img: Image3 },
  ];

  return (
    <div className="w-full relative flex flex-row">
      <div className="relative flex flex-row h-[70vh]">
        <Image src={Scale} alt="" style={{ opacity: "0.75" }} />

        <div className="w-[100%] flex flex-row px-20 absolute top-[10vw] gap-10">
          <div className="w-[45%] flex justify-center blend-screen ">
            <div
              ref={rotatingRef}
              className="relative flex flex-row blend-screen"
            >
              <Image src={scale1} alt="" className="" />

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
                        icon === "whatsapp" ? (
                          <Image src={Fbook} alt="" />
                        ) : icon === "instagram" ? (
                          <Image src={inst1} alt="Instagram" />
                        ) : icon === "message" ? (
                          <Image src={mess} alt="Message" />
                        ) : icon === "facebook" ? (
                          <>
                            <Image src={whats1} alt="WhatsApp" />
                            <Image
                              src={Image3}
                              alt="WhatsApp Message"
                              className=" absolute top-[1vw] left-[7vw]"
                            />
                          </>
                        ) : null
                      ) : (
                        <Image src={icons[index].src} alt={icon} />
                      )}
                    </div>
                  </div>
                )
              )}
            </div>
          </div>
          <div className="w-[50%] flex flex-col justify-center text-[white]">
            <h1 className="text-[2.7vw] font-Sora font-semibold px-20 pb-5">
              Scale Through Automation
            </h1>
            <p className="lg-[10vw]  xl:w-[55%] text-start pl-20 font-Inter font-medium text-[#908EB5] text-[1vw] leading-8">
              Effortlessly scale your marketing efforts with Automation,
              optimizing performance and expanding your reach without
              compromising quality or efficiency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScaleThorugh;
