import clsx from "clsx";
import { Check } from "lucide-react";
import React from "react";

const deals = [
  {
    name: "Deal 1",
    stage: "Idea Stage",
    investment: "$5k for 5% Equity",
    expectedRevenue: "$0/mth",
    duration: "1mth",
    investors: "People with Domain Expertise and Advisors",
  },
  {
    name: "Deal 2",
    stage: "Build Stage",
    investment: "$25k worth of service for 10% Equity",
    expectedRevenue: "$100+/mth",
    duration: "1-3mths",
    investors: "Developers, Engineers, Growth Marketers",
  },
  {
    name: "Deal 3",
    stage: "Validation Stage",
    investment: "$50k for 5% Equity",
    expectedRevenue: "$1k+/mth",
    duration: "3-6mths",
    investors: "Everyone",
  },
  {
    name: "Deal 4",
    stage: "Traction Stage",
    investment: "$125k worth of service for 5% Equity",
    expectedRevenue: "$5k+/mth",
    duration: "6-12mths",
    investors: "Media, Influencers, Celebrity, Platform Owners",
  },
];

const advancedDeals = [
  {
    name: "Deal 5",
    stage: "Pre-seed Stage",
    investment: "$1.5M for 10% Equity",
    expectedRevenue: "$50k+/mth",
    duration: "6-18mths",
    investors: "Angel Investors, VCs, PE, Institutions",
  },
  {
    name: "Deal 6",
    stage: "Seed Stage",
    investment: "$7.5M for 20% Equity",
    expectedRevenue: "$250k+/mth",
    duration: "12-24mths",
    investors: "VCs, PE, Institutions",
  },
  {
    name: "Deal 7",
    stage: "IPO Stage",
    investment: "$1.5B for 20% Equity",
    expectedRevenue: "$1M+/mth",
    duration: "18-36mths",
    investors: "The Public",
  },
];

const InvestorNetwork = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          SINC Investors Network
        </h1>
        <p className=" text-center  ">
          Our deals are structured not just to take in investments but to
          onboard owners passionate about our solutions. Our portfolio companies
          are valued at $50k at start, with these low valuation, you are
          guaranteed at least 2x-5x, usually been the first to invest.
        </p>
        <p className=" text-center  ">
          Disclaimer: These deal flows is a statement of our projections and may
          differ from stage to stage and from venture to venture and the
          guarantee is for deal 1, usually the first to invest
        </p>
      </div>
      <div className=" flex flex-col gap-8 ">
        <div className=" w-full ">
          <h1>
            <span className=" font-semibold ">
              Micro Angel Investors & Service incubators{" "}
            </span>
            (Invest from $500 & above)
          </h1>
        </div>
        <div className=" flex flex-wrap w-full justify-center border-x-0 border-[#212121] border border-solid  ">
          {deals.map((content, index) => (
            <div
              className={clsx(
                " p-5 gap-3 flex-col flex w-[300px] max-md:w-full border-r-[#212121] border-r border-solid max-md:border-x-0 max-md:border-t-2   ",
                index + 1 === deals.length && "border-r-0 "
              )}
              key={index}
            >
              <h1 className=" text-[18px] font-[500] ">{content.name}</h1>
              <div className=" flex flex-col gap-1 ">
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full  " />
                  <span>
                    {content.stage} :{" "}
                    <span className=" font-semibold ">
                      {content.investment}
                    </span>
                  </span>
                </span>
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full " />
                  <span>
                    Expected Revenue at This Stage :
                    <span className=" font-semibold ">
                      {content.expectedRevenue}
                    </span>
                  </span>
                </span>
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full " />
                  <span>
                    Duration of Raise :
                    <span className=" font-semibold ">{content.duration}</span>
                  </span>
                </span>
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full  " />
                  <span>
                    Who Can Invest :
                    <span className=" font-semibold ">{content.investors}</span>
                  </span>
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className=" w-full ">
          <h1>
            <span className=" font-semibold ">
              Angel Investors & Venture Capital
            </span>
            (Invest from $50k & above)
          </h1>
        </div>
        <div className=" flex flex-wrap w-full justify-center border-x-0 border-[#212121] border border-solid max-md:border-none ">
          {advancedDeals.map((content, index) => (
            <div
              className={clsx(
                " p-5 gap-3 flex-col flex w-[300px] max-md:w-full border-r-[#212121] border-r border-solid max-md:border-x-0 max-md:border-t-2   ",
                index + 1 === deals.length && "border-r-0 "
              )}
              key={index}
            >
              <h1 className=" text-[18px] font-[500] ">{content.name}</h1>
              <div className=" flex flex-col gap-1 ">
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full  " />
                  <span>
                    {content.stage} :{" "}
                    <span className=" font-semibold ">
                      {content.investment}
                    </span>
                  </span>
                </span>
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full " />
                  <span>
                    Expected Revenue at This Stage :
                    <span className=" font-semibold ">
                      {content.expectedRevenue}
                    </span>
                  </span>
                </span>
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full " />
                  <span>
                    Duration of Raise :
                    <span className=" font-semibold ">{content.duration}</span>
                  </span>
                </span>
                <span className=" flex gap-1 text-[13px] ">
                  <Check className="max-w-4 h-4 w-full  " />
                  <span>
                    Who Can Invest :
                    <span className=" font-semibold ">{content.investors}</span>
                  </span>
                </span>
              </div>
            </div>
          ))}
          <div className=" px-5 py-[18px] gap-5 flex-col flex max-md:w-full w-[280px] bg-[#212121] my-3 ml-5 ">
            <h1 className=" text-[17px] text-white font-semibold ">
              Work with Service Incubators (SINC) to expedite your
              time to market
            </h1>
            <button className=" py-[15px] px-[32px] font-medium bg-[#303030] text-white items-center justify-center rounded-[24px] ">
              Join SINC Network
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestorNetwork;
