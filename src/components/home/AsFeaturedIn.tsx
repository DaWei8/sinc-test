import Image from "next/image";
import React from "react";

const news_array = [
  {
    source: "PUNCH",
    headline: "SNC Partners invests over 200 million naira in 5 startups",
    reporter: "Remi's Veil",
  },
  {
    source: "B.I.",
    headline: "SNC Partners invests over 200 million naira in 5 startups",
    reporter: "Remi's Veil",
  },
  {
    source: "QNTECx",
    headline: "SNC Partners invests over 200 million naira in 5 startups",
    reporter: "Remi's Veil",
  },
  {
    source: "The Guardian",
    headline: "SNC Partners invests over 200 million naira in 5 startups",
    reporter: "Remi's Veil",
  },
];
const AsFeaturedIn = () => {
  return (
    <div className=" max-md:hidden w-full flex flex-col gap-14 items-center justify-center ">
      <h1 className="text-[24px] font-semibold ">As Featured In</h1>
      <div className=" flex w-[100%] items-start justify-center max-h-[500px] overflow-scroll gap-8 mx-20 px-10 ">
        {news_array.map((content, index) => {
          return (
            <div key={index} className=" min-w-[894px] h-[393px] flex ">
              <Image
                className=" w-[622px] h-full "
                src={`/assets/images/featured${index + 1}.png`}
                alt="featured in thumbnail"
                width={622}
                height={293}
              />
              <div className=" w-full flex flex-col bg-white py-10 px-5 ">
                <Image
                  className=" w-[150px] h-12 mb-4 "
                  src={`/assets/logos/${index + 1}.svg`}
                  alt="featured in thumbnail"
                  width={622}
                  height={293}
                />
                <p className=" font-semibold mb-2 ">
                  SNC Partners invests over 200 million naira in 5 startups
                </p>
                <p className="text-[14px]">
                  SINC Partners invests over 200 million naira in 5 startups.
                  SINC Partners invests over 200 million naira in 5 startups
                  SINC Partners invests over 200 million naira in ....
                </p>
                <div className=" flex flex-col gap-2 mt-auto  ">
                  <p className=" uppercase text-[14px] ">REPORTED BY:</p>
                  <p>{content.reporter}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AsFeaturedIn;
