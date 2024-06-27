import clsx from "clsx";
import React from "react";

const AreaOfFocusSection = () => {
  const sectionData = [
    {
      title: "Business Support & Incubation",
      color: "#303030",
    },
    {
      title: "On-Demand & As-A-Service",
      color: "#F47733",
    },
    {
      title: "Marketplace & Crowdsourcing",
      color: "#FF78BF",
    },
    {
      title: "Aggregation & Shared Economy",
      color: "#20888F",
    },
    {
      title: "Decentralized Economy & Digital Assets",
      color: "#FF88C6",
    },
  ];
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[630px] text-center ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Our Area of Focus
        </h1>
        <p>
          In our quest to help make success available to everyone, we have
          initial strategic direction to focus on these five (5) key areas at
          the lab
        </p>
      </div>
      <div className=" flex flex-wrap w-full justify-center ">
        {sectionData.map((content, index) => (
          <div
            className={clsx(
              "p-6 gap-5 flex-col justify-between flex h-[160px] lg:w-[240px] w-full ",
              index === 1
                ? "bg-[#f47733] "
                : index === 2
                ? "bg-[#ff78bf]"
                : index === 4
                ? "bg-[#ff88c6]"
                : `bg-[${content.color}]`
            )}
            key={index}
          >
            <p className="text-[20px] text-white leading-6">{index + 1}</p>
            <h3 className=" text-[20px] text-white leading-6 ">
              {content.title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AreaOfFocusSection;
