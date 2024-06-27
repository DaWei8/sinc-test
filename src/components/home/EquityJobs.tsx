import clsx from "clsx";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import React from "react";
const jobOpenings = [
  {
    position: "Chief Executive Officer",
    location: "Abuja, Nigeria",
    industry: "On-demand print",
    equity: "1.2%",
    stipend: "NGN 200,000/mth",
    deadline: "24th, January 2024",
    roleType: "Full-time",
  },
  {
    position: "UX Strategist",
    location: "Abuja, Nigeria",
    industry: "E-commerce",
    equity: "1.2%",
    stipend: "NGN 200,000/mth",
    deadline: "24th, January 2024",
    roleType: "Full-time",
  },
  {
    position: "CTO & Head of innovations",
    location: "Abuja, Nigeria",
    industry: "Fintech",
    equity: "1.2%",
    stipend: "NGN 200,000/mth",
    deadline: "24th, January 2024",
    roleType: "Full-time",
  },
  {
    position: "Backend Developer",
    location: "Abuja, Nigeria",
    industry: "Transportation",
    equity: "1.2%",
    stipend: "NGN 200,000/mth",
    deadline: "24th, January 2024",
    roleType: "Full-time",
  },
];

const EquityJobs = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Equity jobs
        </h1>
        <p className=" text-center  ">
          See companies and startups offering equity or a mix of cash and equity
          for very important position in their company
        </p>
      </div>
      <div className=" flex flex-wrap gap-3 w-full justify-center ">
        {jobOpenings.map((content, index) => (
          <div
            className=" p-6 gap-6 flex-col flex w-full max-w-[278px] bg-white rounded-[12px] "
            key={index}
          >
            <Image
              width={120}
              height={40}
              src={`assets/${index + 1}.svg`}
              alt="other company logo"
            />
            <p>
              This company is a SAAS Startup that builds AI copy generator...
            </p>
            <div className=" flex flex-col gap-5 flex-auto ">
              <h1 className=" text-[18px] font-semibold ">
                {content.position}
              </h1>
              <div className=" flex justify-between items-center ">
                <div className=" flex flex-col gap-2 ">
                  <p className=" uppercase text-[14px] ">Location</p>
                  <p>{content.location}</p>
                </div>
                <div className=" flex flex-col gap-2 items-end ">
                  <p className=" uppercase text-[14px] ">Industry</p>
                  <p>{content.industry}</p>
                </div>
              </div>
              <div className=" flex justify-between items-center ">
                <div className="flex flex-col gap-2 ">
                  <p className=" uppercase text-[14px] ">Equity</p>
                  <p>{content.equity}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <p className=" uppercase text-[14px] ">Stipend</p>
                  <p>{content.stipend}</p>
                </div>
              </div>
              <div className=" flex justify-between items-center ">
                <div className=" flex flex-col gap-2  ">
                  <p className=" uppercase text-[14px] ">Deadline</p>
                  <p>{content.deadline}</p>
                </div>
                <div className="flex flex-col gap-2 items-end">
                  <p className=" uppercase text-[14px] ">Role Type</p>
                  <p>{content.roleType}</p>
                </div>
              </div>
              <button className=" py-[15px] mt-auto px-[32px] font-medium bg-[#303030] text-white items-center justify-center rounded-[24px] ">
                Join SINC Network
              </button>
            </div>
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
          See More Equity Jobs
        </a>
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

export default EquityJobs;
