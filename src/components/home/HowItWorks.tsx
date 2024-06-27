import clsx from "clsx";
import { ArrowRight, Lightbulb } from "lucide-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const applicationProcess = [
  {
    stage: "Application and Selection",
    details: [
      "Complete straightforward application form",
      "Share insights into entrepreneurial background, expertise, and vision",
      "Dedicated selection committee reviews application",
    ],
  },
  {
    stage: "Alignment Meeting and Proposal Submission",
    details: [
      "Invite standout applicants to alignment meeting",
      "Discuss EIR program goals and expertise alignment",
      "Submit formal proposal outlining intended contributions and value addition",
    ],
  },
  {
    stage: "Negotiation and Agreement",
    details: [
      "Engage in discussions to finalize EIR role terms",
      "Draft formal agreement outlining engagement specifics",
      "Include reporting structures, responsibilities, and support/resources provided",
    ],
  },
  {
    stage: "Onboarding and Integration",
    details: [
      "Undergo onboarding process",
      "Familiarize with SINC Partners ecosystem",
      "Facilitated introductions to portfolio companies and key team members",
    ],
  },
  {
    stage: "Regular Check-ins and Evaluations",
    details: [
      "Establish system for regular check-ins",
      "Monitor progress, gather feedback",
      "Work towards continuous improvement",
      "Contribute to vibrant SINC Partners community",
    ],
  },
];

const HowItWorks = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center overflow-x-hidden w-full pt-[94px] pb-8 ">
      <div className=" flex-col flex gap-5 lg:max-w-[930px] w-full ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          How It Works
        </h1>
        <p className=" text-center  ">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
      </div>
      <div className=" flex pl-5 lg:overflow-x-scroll lg:max-w-[1200px] gap-8 max-w-[100dvw] justify-start ">
        {applicationProcess.map((content, index) => (
          <div
            className=" p-6 gap-6 flex-col flex lg:min-w-[380px] max-sm:min-w-[95%] bg-white rounded-[12px] "
            key={index}
          >
            <p
              className={clsx(
                " w-[60px] h-[60px] bg-[#303030] rounded-full flex items-center justify-center text-white"
              )}
            >
              <Lightbulb color="white" />
            </p>
            <div className=" flex flex-col gap-4 ">
              <h3 className=" font-[500] text-[24px] ">{content.stage} </h3>
              <p className="">{content.details}</p>
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
          Support the Future
        </a>
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

export default HowItWorks;
