"use client";
import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Image1 from "../assets/Icons/Testimonial1.svg";
import Image2 from "../assets/Icons/Testimonial3.svg";
import Image3 from "../assets/Icons/Testimonial2.svg";
import Image4 from "../assets/Icons/Testimonial4.svg";
import Image5 from "../assets/Icons/Testimonial5.svg";

import VGN from "../assets/Icons/VGN.svg";
import Aachi from "../assets/Icons/Aachi.svg";
import Diedam from "../assets/Icons/DiaDem.svg";
import NKC from "../assets/Icons/NKC_TAMIL.svg";
import tour from "../assets/Icons/tours.svg";

interface SlideContent {
  id: number;
  icon: string;
  title?: string;
  description: string;
  author?: string;
  position?: string;
  brand: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slides: SlideContent[] = [
    {
      id: 1,
      icon: Image1,
      brand: VGN,
      description:
        "Working with Gainwix.ai has transformed our marketing approach. Their AI solutions and expert guidance through Gainwix Consulting have streamlined our communication across platforms, allowing us to reach our target audience with precision. Our campaigns have never been more efficient, and our ROAS has soared.",
      author: "Mathesh",
      position: "Sales Manager",
    },
    {
      id: 2,
      icon: Image2,
      brand: Aachi,
      description:
        "The AI-powered marketing solutions from Gainwix.ai especially through WhatsApp, have revolutionized the way we interact with our customers. Gainwix Consulting's insights have enabled us to scale our campaigns effectively, resulting in impressive growth and engagement.",
      author: "Harish",
      position: "Managing Director",
    },
    {
      id: 3,
      icon: Image3,
      brand: Diedam,
      description:
        "Aptonworks (Digital Solutions Provider):- One of the most impactful decisions we've made is transforming into an AI-powered agency, thanks to Gainwix.ai. Their platform has truly elevated our capabilities, boosting our growth rate and customer satisfaction by an impressive 37%. Not only has this reduced our need to hire more employees, but it has also significantly decreased the time spent on tasks, which our clients appreciate. Gainwix.ai has been a game-changer for our agency.",
      author: "Pown",
      position: "Digital Marketing Manager",
    },
    {
      id: 4,
      icon: Image4,
      brand: NKC,
      description:
        "Gainwix.ai has been a game-changer for us. With their AI-driven WhatsApp channel marketing, we've seen a significant increase in customer engagement and sales. The tailored strategies provided by Gainwix Consulting have helped us connect with our audience more effectively than ever before.",
      author: "Arun kumar",
      position: "Assistant Vice President",
    },
    {
      id: 4,
      icon: Image5,
      brand: tour,
      description:
        "Aptonworks (Digital Solutions Provider):- One of the most impactful decisions we've made is transforming into an AI-powered agency, thanks to Gainwix.ai. Their platform has truly elevated our capabilities, boosting our growth rate and customer satisfaction by an impressive 37%. Not only has this reduced our need to hire more employees, but it has also significantly decreased the time spent on tasks, which our clients appreciate. Gainwix.ai has been a game-changer for our agency.",
      author: "Basant Kumar Giri",
      position: "CEO",
    },
  ];

  // Keen Slider Logic
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    initial: 0,
    slideChanged(slider) {
      setCurrentIndex(slider.track.details.rel);
    },
  });

  useEffect(() => {
    const interval = setInterval(() => {
      instanceRef.current?.next();
    }, 3000);

    return () => clearInterval(interval);
  }, [instanceRef]);

  return (
    <div className="bg-[#060A22] overflow-hidden py-10">
      {/* Title */}
      <div className="text-center text-white mb-10">
        <h1 className="text-[3vw] font-Sora font-semibold lg:text-[2.5vw] md:text-[4vw] xs:text-[6vw]">
          Hear What Our AI-Powered Digital Agencies <br />
          <span className="bg-gradient-to-r from-[#8C76F7] via-[#8C76F7] to-[#F9AD68] bg-clip-text text-transparent">
            Say About Gainwix.ai
          </span>
        </h1>
      </div>

      {/* Keen Slider */}
      <div ref={sliderRef} className="keen-slider xs:hidden ">
        {slides.map((slide) => (
          <div key={slide.id} className="keen-slider__slide">
            <div className="w-[90%] md:w-[70%] lg:w-[70%] xl:h-[60vh] xl:flex xl:flex-row xs:flex-row-reverse bg-gradient-to-r from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] rounded-lg pt-4 pl-4 pr-4 text-white shadow-lg mx-auto">
              <div className="flex flex-col">
                <Image src={slide.brand} alt="Slide" />{" "}
                <p className="lg:text-[1vw] md:text-[1.5vw] xs:text-[3vw] text-[#908eb5] mt-[10vw]  xl:w-[40vw]">
                  {slide.description}
                </p>
                <p className="text-[1.2vw] mt-4 font-bold lg:text-[1.5vw] md:text-[2vw] xs:text-[4vw]">
                  {slide.author}
                </p>
                <p className="lg:text-[0.85vw] md:text-[1.5vw] xs:text-[3vw] text-[#908eb5]">
                  {slide.position}
                </p>
              </div>
              <Image
                src={slide.icon}
                alt="Slide"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Dots Navigation */}
      <div className="flex justify-center mt-6 gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => instanceRef.current?.moveToIdx(index)}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index
                ? "bg-[#4B4E6F] w-5 h-2 rounded-[40%]"
                : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
