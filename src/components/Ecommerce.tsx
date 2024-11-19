import React from "react";

// assets

// constants

export default function Ecommerce() {
  return (
    <div className="bg-white">
      <div className="w-full 2xl:!min-h-[75vh] xl:min-h-[70vh] lg:min-h-[60vh] md:min-h-[60vh] xs:min-h-[90vh] flex flex-col justify-end  relative top-[2vw] md:py-0 md:px-[5rem] xs:p-10">
        <div className="grid lg:grid-cols-2 justify-between gap-14  sm:grid-cols-1">
          <div className="w-auto flex flex-col md:pt-10  xs:pt-10  md:mt-[7vw] lg:mt-[-8vw]  xs:mt-[5vw] md:flex md:justify-center md:items-center lg:items-baseline  xs:items-center">
            <h1 className="xl:text-[2.2vw] font-bold  text-[#202421] font-raleway  md:text-[3vw] xs:text-[5vw] xs:text-center   lg:text-start ">
              Grow Your E-Commerce Business With <br />
              <span className="from-[#0ACD95] via-[#0ACD95] to-[#6940F2] bg-gradient-to-r bg-clip-text text-transparent font-raleway">
                AI Conversational Commerce{" "}
              </span>
            </h1>
            <p className="w-5/4 font-medium mt-5 mb-7 lg:text-[1vw] 2xl:text-[0.95vw] text-[#3B3F46]  lg:w-[45vw]   md:text-[2vw] md:items-center lg:items-baseline  xs:text-center lg:text-start  xs:text-[3vw] ">
              Transform E-Commerce shopping into a personalized journey with
              Gainwix.ai. From turning conversations into conversions to
              managing all aspects of sales, support, and marketing from an
              unified platform.
            </p>
            <div className="h-14 flex items-center gap-5">
              <a
                href="https://calendly.com/sales-h-cn/30min"
                target="_blank"
                rel="noreferrer"
              ></a>
            </div>
          </div>
          {/* <div className="w-full h-full flex justify-end">
            <img src={Ecommerce1} alt="hero" />{" "}
          </div> */}
        </div>
      </div>
      {/* <div className="mt-20">
        <InfiniteCarousel marque data={CommerceBrandList} />
      </div>
      <div className="flex my-[5vw]  gap-14 justify-center xs:flex-col  md:justify-center md:items-center lg:flex-row xs:items-center ">
        {EcommerceCard?.map((c) => {
          return <SmallCard data={c} />;
        })}
      </div>
      <div className="bg-gradient-to-r from-[#FCFBF3]  via-[#EEFFFC]  to-[#EEFFFC] rounded-[120px] min-h-[150vh] ">
        <div className="md:py-0 md:px-[5rem] xs:p-10 ">
          <Card
            text
            title={
              <div className="-mt-20 xs:mt-[10vw]  ">
                <div className="  p-2 border-2 border-[#0ACD95]   rounded-[30px] inline-flex items-center bg-[#EAFCF7] mb-5 ">
                  <img src={Acquisition} alt="" />
                  <p className="text-[#0ACD95]  md:text-[1vw] font-semibold pl-2 ">
                    Gain Acquisition{" "}
                  </p>
                </div>
                <div className="xs:text-[3.5vw] md:text-[2vw] md:w-[40vw]  font-bold text-[#202421] font-raleway">
                  Attract{" "}
                  <span className="from-[#0ACD95] via-[#0ACD95] to-[#6940F2] bg-gradient-to-r bg-clip-text text-transparent xs:text-[3.5vw]  md:text-[2vw] w-[40vw] font-bold font-raleway">
                    New Customers{" "}
                  </span>
                  and Drive Traffic{" "}
                </div>
              </div>
            }
            list={EcommerceList1}
            image={ICONS?.AttractIcon}
          />

          <Card
            text
            title={
              <>
                <div className="bg-[#FFFBF2] inline-flex p-3 border border-[#F5B91F]  rounded-[30px]  items-center mb-5">
                  <img src={Retention} alt="" />
                  <p className="text-[0.8] font-semibold pl-2 text-[#F5B91F]">
                    Gain Retention{" "}
                  </p>
                </div>
                <div className="text-[2.2vw] md:w-[45vw] font-bold text-[#202421] font-raleway md:text-[32px] xs:text-[3.5vw]">
                  <span className="from-[#0ACD95] via-[#0ACD95] to-[#6940F2] bg-gradient-to-r bg-clip-text text-transparent text-[2.2vw] w-[40vw] font-bold text-[#202421] font-raleway md:text-[32px] xs:text-[3.5vw]">
                    Build Loyalty
                  </span>{" "}
                  and Drive Repeat Business{" "}
                </div>
              </>
            }
            list={EcommerceList2}
            image={ICONS?.ECommerceCard2}
            revers
          />
          <Card
            text
            title={
              <>
                <div className="bg-[#FFF0E8] inline-flex p-2 border-2 border-[#FF833E]  rounded-[30px]  items-center mb-5">
                  <img src={Loyalty} alt="" />
                  <p className="text-[0.8] font-semibold pl-2 text-[#FF833E]">
                    Gain Loyalty
                  </p>
                </div>
                <div className="md:text-[2vw] md:w-[38vw] font-bold text-[#202421] font-raleway xs:text-[3.5vw]">
                  <span className="from-[#0ACD95] via-[#0ACD95] to-[#6940F2] bg-gradient-to-r bg-clip-text text-transparent text-[2.2vw] xl:w-[40vw] font-bold text-[#202421] font-raleway md:text-[32px] xs:text-[3.5vw]">
                    Omni-channel Support{" "}
                  </span>
                </div>
              </>
            }
            list={EcommerceList3}
            image={ICONS?.ECommerceCard3}
          />
        </div>
      </div> */}
{/* 
      <div className="layout w-full flex-column md:mt-10 xs:mt-5">
        <div className="xl:w-[60%] m-auto md:w-[100%] xs:w-[70vw] ">
          <p className="md:w-[49vw] flex md:justify-center md:align-center md:items-center md:text-[3vw] lg:text-[2.2vw] xs:text-[3.5vw] font-bold text-[#202421] font-raleway  ">
            Personalize Customer Experience
          </p>
          <p className="xl:w-[49vw] md:justify-center md:align-center flex md:text-[3vw] lg:text-[2.2vw] font-bold text-[#202421] xs:text-[3.5vw] font-raleway xs:text-center xs:items-center xs:pl-5 ">
            To{" "}
            <span className="from-[#0ACD95] via-[#0ACD95] to-[#6940F2] bg-gradient-to-r bg-clip-text text-transparent pl-1 md:text-[3vw] lg:text-[2.2vw] xs:text-[3.5vw] font-bold font-raleway ">
              {"  "} scale your business.
            </span>
            👋🏼
          </p>
        </div>
        <div className="lg:flex gap-10 mt-10 xs:block md:hidden lg:flex-row xs:my-10  ">
          {CommerceCardList?.map((data, index) => (
            <div
              key={index}
              className="xl:w-80 md:w-[20vw] h-auto flex flex-col justify-center items-center border border-#E8E8EC rounded-[25px]  p-5 xs:my-10"
            >
              <div className="w-[30%] flex flex-col justify-center items-center text-center m-auto">
                <img src={data?.icon} alt="icon" />
              </div>
              <p className="py-5 w-[100%] flex md:text-[1.5vw] xl:text-[0.95vw] font-medium align-center items-center text-center justify-center text-[#202421]">
                {data?.text}
              </p>
            </div>
          ))}
        </div>
        <div className="flex flex-wrap gap-10 mt-10 md:flex-col  xs:hidden  md:block lg:hidden">
          <div className="flex gap-10 justify-center flex-wrap md:grid md:grid-cols-3">
            {CommerceCardList?.slice(0, 3).map((data, index) => (
              <div
                key={index}
                className="xl:w-80 md:w-[20vw] h-auto flex flex-col justify-center items-center border border-#E8E8EC rounded-[25px] p-5"
              >
                <div className="w-[30%] flex flex-col justify-center items-center text-center m-auto">
                  <img src={data?.icon} alt="icon" />
                </div>
                <p className="py-5 w-[100%] flex md:text-[1.5vw] xl:text-[0.95vw] font-medium align-center items-center text-center justify-center text-[#202421]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
          <div className="flex gap-10 justify-center">
            {CommerceCardList?.slice(3).map((data, index) => (
              <div
                key={index}
                className="xl:w-80 md:w-[20vw] h-auto flex flex-col justify-center items-center border border-#E8E8EC rounded-[25px] p-5"
              >
                <div className="w-[30%] flex flex-col justify-center items-center text-center m-auto">
                  <img src={data?.icon} alt="icon" />
                </div>
                <p className="py-5 w-[100%] flex md:text-[1.5vw] xl:text-[0.95vw] font-medium align-center items-center text-center justify-center text-[#202421]">
                  {data?.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div> */}
    </div>
  );
}
