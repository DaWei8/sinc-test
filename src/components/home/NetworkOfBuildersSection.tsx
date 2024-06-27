import { ArrowRight } from "lucide-react";
import React from "react";
const serviceInfo = [
  {
    title: "Work with Service Incubators to expedite your time-to-market",
    details: [
      "Collaborate with meticulously chosen service partners",
      "Each partner has a vested interest in shared commitment to success",
      "For 7.5% equity, get a product manager, product designer, frontend engineer, software engineer and growth marketer",
      "Build the MVP of your app or web application and validate it",
    ],
  },
  {
    title: "Access funding after your mvp is validated",
    details: [
      "Startups with built and validated products can take advantage of SINC Investors Network financial resources",
      "Potential for success in the venture capital landscape",
      "Raise $5k, $25k, $50k and $125k in bootstrap deals within 12 months",
    ],
  },
];

const NetworkOfBuildersSection = () => {
  return (
    <div className=" flex flex-col gap-10 items-center justify-center pt-[94px] pb-8 px-5 ">
      <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
        Network of builders helping startup scale{" "}
      </h1>
      <div className=" flex flex-wrap gap-3 w-full justify-center ">
        {serviceInfo.map((content, index) => (
          <div
            className=" p-6 gap-5 flex-col flex w-full max-w-[530px] bg-white rounded-[12px] "
            key={index}
          >
            <h3 className=" font-[500] text-[24px] ">{content.title} </h3>
            <p>{content.details[0]}</p>
            <p className=" font-[500] ">{content.details[1]}</p>
            <button className=" flex gap-2 items-center mt-auto ">
              <a
                className=" font-[600] text-[#212121] underline "
                href="https://www.linkedin.com/company/sinc-investors-network/"
                target="_blank"
                rel="noreferrer"
              >
                Learn More
              </a>
              <ArrowRight size={15} />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkOfBuildersSection;
