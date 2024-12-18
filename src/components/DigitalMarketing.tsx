"use client";
import React, { useState, useEffect } from "react";
import "keen-slider/keen-slider.min.css";
import { useKeenSlider } from "keen-slider/react";
import Image from "next/image";
import Image1 from "../assets/Icons/image1.svg";

interface SlideContent {
  id: number;
  icon: string;
  title?: string;
  description: string;
  author?: string;
  position?: string;
}

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const slides: SlideContent[] = [
    {
      id: 1,
      icon: Image1,
      description:
        "The AI-powered marketing solutions from Gainwix.ai especially through WhatsApp, have revolutionized the way we interact with our customers. Gainwix Consulting's insights have enabled us to scale our campaigns effectively, resulting in impressive growth and engagement.",
      author: "Pown",
      position: "Digital Marketing Manager",
    },
    {
      id: 2,
      icon: Image1,
      description:
        "The AI-powered marketing solutions from Gainwix.ai especially through WhatsApp, have revolutionized the way we interact with our customers. Gainwix Consulting's insights have enabled us to scale our campaigns effectively, resulting in impressive growth and engagement.",
      author: "Alex Roberts",
      position: "Lead AI Strategist",
    },
    {
      id: 3,
      icon: Image1,
      description:
        "The AI-powered marketing solutions from Gainwix.ai especially through WhatsApp, have revolutionized the way we interact with our customers. Gainwix Consulting's insights have enabled us to scale our campaigns effectively, resulting in impressive growth and engagement.",
      author: "Samantha Lee",
      position: "Creative Director",
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
            <div className="w-[90%] md:w-[70%] lg:w-[70%] xl:h-[60vh] xl:flex xl:flex-row xs:flex-row-reverse bg-gradient-to-r from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] rounded-lg p-6 text-white shadow-lg mx-auto">
              <div className="flex flex-col">
                <p className="lg:text-[1vw] md:text-[1.5vw] xs:text-[3vw] text-[#908eb5] mt-[10vw] xl:w-[40vw]">
                  {slide.description}
                </p>
                <p className="text-[1.2vw] mt-4 font-bold lg:text-[1.5vw] md:text-[2vw] xs:text-[4vw]">
                  {slide.author}
                </p>
                <p className="text-[1vw] md:text-[1.5vw] xs:text-[3vw] text-[#908eb5]">
                  {slide.position}
                </p>
              </div>
              <Image
                src={slide.icon}
                alt="Slide"
                className="w-full object-cover rounded-lg mt-4"
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
                ? "bg-[#4B4E6F] w-5 h-2 rounded-sm"
                : "bg-gray-500"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
