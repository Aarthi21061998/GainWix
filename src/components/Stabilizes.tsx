"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { MarketingGoalsList, MarketingGoalsListType } from "@constants/home";

const MarketingGoals = ({
  MarketingGoalsList,
}: {
  MarketingGoalsList: MarketingGoalsListType[];
}) => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative h-[150vh] w-full overflow-hidden">
      {MarketingGoalsList?.map(
        (data: MarketingGoalsListType, index: number) => {
          const offset = scrollPosition - index * 200; // Adjust 200 for how far each card should reveal.
          const isVisible = offset > 0;

          return (
            <div
              key={data?.id}
              className={`absolute w-[22%] h-[45vh] rounded-[5%] from-[#0A0D2A] via-[#0A0D2A] to-[#2D3154] bg-gradient-to-r transition-transform duration-500`}
              style={{
                top: isVisible ? 50 * index : 0, // Adjust 50 for vertical spacing between cards.
                left: isVisible ? `${index * 30}%` : "50%", // Spread out horizontally.
                transform: `translateX(-50%) translateY(${
                  isVisible ? 0 : 100
                }px)`,
                zIndex: MarketingGoalsList.length - index, // Stack order.
                opacity: isVisible ? 1 : 0.5,
              }}
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
          );
        }
      )}
    </div>
  );
};

export default MarketingGoals;
