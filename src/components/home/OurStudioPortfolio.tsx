import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const OurStudioPortfolio = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Our Studio Portfolio{" "}
        </h1>
        <p className=" text-center  ">
          Our 2024 Service Incubator Portfolio Companies
        </p>
      </div>
      <div className=" flex flex-wrap gap-5 w-full justify-center max-w-[1100px] ">
        {Array.from({ length: 40 }).map((_, index) => (
          <div
            key={index}
            className=" w-[120px] h-[60px] py-[30px] p-5 flex items-center justify-center bg-white rounded-[12px] "
          >
            <Image
              className=" W-full max-h-[40px] "
              src={`/assets/logos/${index + 1}.svg`}
              alt="other company logo"
              width={60}
              height={40}
            />
          </div>
        ))}
      </div>
      <button className=" flex gap-2 items-center mt-auto ">
        <a
          className=" font-[600] text-[#212121] underline "
          href="https://www.linkedin.com/company/sinc-investors-network/"
          target="_blank"
          rel="noreferrer"
        >
          View All Companies
        </a>
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

export default OurStudioPortfolio;
