import React from "react";

const LetsBuild = () => {
  return (
    <div className=" flex flex-col gap-10 items-center justify-center pt-[94px] pb-8 px-5 w-full ">
      <h1 className=" lg:text-[80px] text-[36px] text-center ">
        Let&apos;s build companies that help everyone succeed
      </h1>
      <div className=" flex flex-wrap gap-3 w-full justify-center ">
        <button className=" w-full max-w-[190px] h-12 px-[30px] font-medium border-[#212121] border border-solid text-[#212121] items-center justify-center rounded-[24px]  ">
          SINC With Us
        </button>
        <button className=" max-w-[190px] w-full h-12 px-[30px] font-medium bg-[#303030] text-white items-center justify-center rounded-[24px]  ">
          Apply to SIP 1.0
        </button>
      </div>
    </div>
  );
};

export default LetsBuild;
