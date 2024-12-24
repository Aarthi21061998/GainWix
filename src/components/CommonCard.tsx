// import { cn } from "@helpers/cn";
// import Image from "next/image";
// import React from "react";

// import BulletPoint from "../assets/Icons/bullet.svg";

// import ecommerce from "../assets/Icons/card.svg";
// interface ListItem {
//   text?: string;
//   content: string;
// }

// interface CardProps
//   extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
//   image?: string;
//   customTitle?: React.ReactNode; // Renamed to avoid conflict
//   content?: string;
//   list: ListItem[];
//   className?: string;
//   cardClassName?: string;
//   revers?: boolean;
//   text?: boolean;
// }

// const Card: React.FC<CardProps> = (props) => {
//   const {
//     image,
//     customTitle,
//     content,
//     list,
//     className,
//     cardClassName,
//     revers,
//     text,
//     ...restProps
//   } = props;

//   return (
//     <div
//       className={cn(
//         `lg:pt-14 pb-10 flex items-center ${
//           revers
//             ? "min-[768px]:!flex-row-reverse  max-[768px]:!flex-col"
//             : " !flex-row !justify-between max-[768px]:!flex-col"
//         }`,
//         className
//       )}
//       {...restProps}
//     >
//       <div
//         className={`${
//           revers
//             ? "max-[992px] flex flex-col items-end justify-end text-left xl:w-[100vw] md:py-0 md:px-[2rem]"
//             : "w-1/2 max-[992px]:w-full"
//         } ${cardClassName}`}
//       >
//         {customTitle && (
//           <div className="w-full text-left md:text-[1.5vw]">{customTitle}</div>
//         )}
//         {content && (
//           <p
//             className={`md:text-lg font-medium text-[#3B3F46] mt-5 mb-7 text-left md:w-[80vw] xs:w-[80vw] xs:text-[3vw] lg:w-full font-Inter  ${
//               revers
//                 ? "max-[992px]:w-full flex flex-col w-full text-left"
//                 : "w-5/6"
//             }`}
//           >
//             {content}
//           </p>
//         )}
//         {list && (
//           <div className={`w-full ${text ? "mt-[1vw]" : ""}`}>
//             {list.map((data) => (
//               <div
//                 className="flex items-center gap-[0.8vw] py-2"
//                 key={data.text || data.content}
//               >
//                 {text ? (
//                   <div className="flex flex-col">
//                     <div className="flex">
//                       <Image
//                         src={BulletPoint}
//                         alt="list icon"
//                         className="mb-4 xs:w-[3vw] md:w-[1.5vw]"
//                       />
//                       <h1 className="lg:text-[1.3vw] pl-[1vw] font-semibold   from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-l bg-clip-text text-transparent md:text-[0.85vw] xs:text-[3vw] font-Sora">
//                         {data.text}
//                       </h1>
//                     </div>
//                     <p className="pl-[1.8vw] xs:leading-1 md:leading-7 font-Inter lg:w-[35vw] md:w-[80vw] lg:text-[0.95vw] md:text-[1.5vw] font-medium text-[#908EB5] xs:text-[3vw] xs:w-[80vw]">
//                       {data.content}
//                     </p>
//                   </div>
//                 ) : (
//                   <div className="flex lg:text-lg font-medium align-center font-Inter">
//                     {/* <img src={ICONS?.BulletPoint} alt="list icon" /> */}
//                     <li className="pl-[1.8vw] xs:leading-1 md:leading-7 md:w-[70vw] lg:w-[35vw] xl:text-[0.95vw] md:text-[1.5vw] font-medium text-[#908EB5] md:mt-3 xs:text-[3vw] xs:w-[80vw]">
//                       {data.content}
//                     </li>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       {image && (
//         <div className="xs:w-[90vw] md:w-[70vw] w-[clamp(700px,700px,700px)] lg:h-[clamp(650px,700px,650px)]">
//           <Image
//             src={image}
//             alt="Card Image"
//             className="w-[70vw] h-[55vh] mt-10"
//           />
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card;
import { cn } from "@helpers/cn";
import Image from "next/image";
import React from "react";
import BulletPoint from "../assets/Icons/bullet.svg";

interface ListItem {
  text?: string;
  content: string;
}

interface CardProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "title"> {
  image?: string;
  customTitle?: React.ReactNode; // Renamed to avoid conflict
  content?: string;
  list?: ListItem[];
  className?: string;
  cardClassName?: string;
  revers?: boolean;
  text?: boolean;
}

const Card: React.FC<CardProps> = (props) => {
  const {
    image,
    customTitle,
    content,
    list,
    className,
    cardClassName,
    revers,
    text,
    ...restProps
  } = props;

  return (
    <div
      className={cn(
        `flex items-center 
        ${revers ? "md:flex-row-reverse gap-10 " : "md:flex-row"}
        max-md:flex-col   xl:w-[72vw] xl:m-auto xs:mx-5  `,
        className
      )}
      {...restProps}
    >
      <div
        className={cn(
          `${revers ? "text-left " : "text-left"} 
          md:w-1/2 max-md:w-full flex flex-col  `,
          cardClassName
        )}
      >
        {customTitle && (
          <div className="w-full  md:text-[1.5vw]">{customTitle}</div>
        )}
        {content && (
          <p
            className={`md:text-lg font-medium text-[#3B3F46] mt-5 mb-7  md:w-[80vw] xs:w-[75vw] xs:text-[3vw] xl:w-full font-Inter ${
              revers ? "max-md:w-full flex flex-col w-full text-left" : "w-5/6"
            }`}
          >
            {content}
          </p>
        )}
        {list && (
          <div className={`w-full ${text ? "mt-[1vw]" : ""}`}>
            {list.map((data) => (
              <div
                className="flex items-center gap-[0.8vw] py-2  md:mx-[-1vw]"
                key={data.text || data.content}
              >
                {text ? (
                  <div className="flex flex-col ">
                    <div className="flex   tracking-wide ">
                      <Image
                        src={BulletPoint}
                        alt="list icon"
                        className="md:mb-6 xs:w-[5vw] md:w-[3vw] lg:mt-2 lg:w-[2vw] xl:w-[1.5vw] "
                      />
                      <h1 className="lg:text-[2.6vw] xl:text-[1.6vw]   xs:pl-[2vw] md:pl-[1vw] font-semibold from-[#FFFFFF] via-[#FFFFFF] to-[#999999] bg-gradient-to-l bg-clip-text text-transparent md:text-[3vw] xs:text-[5vw] font-Sora">
                        {data.text}
                      </h1>
                    </div>
                    <p className="lg:pl-[1.8vw] xs:pt-3 md:pt-0 xs:leading-1 font-Inter tracking-wide xl:w-[30vw] 2xl:w-[35vw] lg:w-[42vw] md:w-[30vw] lg:text-[2.2vw] xl:text-[1vw] md:text-[2vw] font-medium text-[#908EB5] xs:text-[4vw] xs:w-[85vw] ">
                      {data.content}
                    </p>
                  </div>
                ) : (
                  <div className="flex lg:text-lg font-medium align-center font-Inter tracking-wide">
                    <li className="pl-[1.8vw] xs:leading-1 md:leading-7 md:w-[38vw] lg:w-[35vw] xl:text-[0.95vw] md:text-[1.5vw]  font-medium text-[#908EB5] md:mt-3 lg:mt-[0.03vw] xs:text-[4vw] xs:w-[80vw] sm:w-[10vw] ">
                      {data.content}
                    </li>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      {image && (
        <div className="xs:w-[90vw] md:w-[70vw]  lg:w-[40vw] xl:w-[82vw] xl:h-[65vh] ">
          <Image
            src={image}
            alt="Card Image"
            className=" xl:w-[82vw] xl:h-[65vh] lg:w-[40vw] lg:h-[40vh] 2xl:w-[85vw]  2xl:h-[60vh]  md:h-[40vh] xl:mt-[5vw] 2xl:mt-20   md:ml-0  lg:mx-0 xs:mt-2 "
          />
        </div>
      )}
    </div>
  );
};

export default Card;
