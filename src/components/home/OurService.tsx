import { LucideTriangle } from "lucide-react";
import Image from "next/image";

const sectionData = [
  "Most early-stage companies and pre-product startups cannot afford professional services especially those who dont have family and friends network that can support",
  "If startups can seed 5-10% in equity to incubators for $20k to $200k funding most times, they will be willing to seed 10% equity for a $25k service investment",
  "Young professionals who dont have a lot of money to invest nor an accredited investors will have opportunities to take equity at the early stage of their career, usually been the first to invest and almost guaranteed of return",
  // "Most early-stage companies and pre-product startups cannot afford professional services
];

const caseStudaynData = [
  "Service Incubator Equity",
  "SEEQ Maths Equation",
  "Value of my Equity Over Time",
];

const OurService = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Our Service Incubation Model{" "}
        </h1>
        <p className=" text-center  ">
          The Service Incubation model is an alternate funding model for startup
          that allows professionals to offer their services to startups in
          return for a minute equity (usually between 0.5% to 1.5%) in the
          startup. As a service incubator, you will see your share grow as much
          as 1000% in 12 – 24 months as been first to invest.
        </p>
      </div>
      <div className=" flex flex-col gap-11 ">
        <div className=" flex flex-col gap-3 ">
          <h4 className=" text-[32px] font-[500] ">Hypothesis</h4>
          <p>
            Just a few reasons we know its time for this model
            within the ecosystem
          </p>
        </div>
        <div className=" flex flex-wrap gap-3 w-full justify-center ">
          {sectionData.map((content, index) => (
            <div
              className=" p-6 gap-5 flex-col flex w-full max-w-[380px] bg-white rounded-[12px] "
              key={index}
            >
              <Image
                src={`/assets/icons/poly${index + 1}.svg`}
                alt="polygon"
                width={40}
                height={40}
                className=" w-10 h-10 "
              />
              <h3 className=" tracking-wide text-[17px] ">{content} </h3>
            </div>
          ))}
        </div>
      </div>
      <div className=" flex flex-col gap-11 w-full ">
        <div className=" flex flex-col gap-3 ">
          <h4 className=" text-[32px] font-[500] ">Case Study</h4>
          <p>
            See what Service Incubators get, the maths behind Service Equity
            (SEEQ) and what the value of your share equity can be over time
          </p>
        </div>
        <div className=" flex flex-wrap gap-3 w-full">
          {caseStudaynData.map((content, index) => (
            <p
              className=" px-8 py-3 items-center justify-center bg-white flex w-fit border-[#212121] border border-solid rounded-[24px] "
              key={index}
            >
              {content}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurService;
