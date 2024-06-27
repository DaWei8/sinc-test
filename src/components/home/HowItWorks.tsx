import clsx from "clsx";
import {
  ArrowLeftCircle,
  ArrowRight,
  ArrowRightCircle,
  Lightbulb,
} from "lucide-react";
import CarouselComponent from "../ui/CarouselComponent";

const applicationProcess = [
  {
    stage: "Application and Selection",
    details: [
      "Begin your journey by completing our straightforward application form. Share insights into your entrepreneurial background, expertise, and your vision for supporting the success of our portfolio companies. Our dedicated selection committee, comprised of key stakeholders at SINC Partners, will carefully review your application.",
    ],
  },
  {
    stage: "Alignment Meeting and Proposal Submission",
    details: [
      "If your application stands out, we'll invite you to an alignment meeting. This is an opportunity to discuss the goals of our EIR program and explore how your expertise aligns with the needs of our portfolio companies.",
      "Following the alignment meeting, submit a formal proposal outlining your intended contributions and how you envision adding significant value to our portfolio companies",
    ],
  },
  {
    stage: "Negotiation and Agreement",
    details: [
      "Upon successful alignment and proposal review, we'll engage in discussions to finalize the terms of your EIR role. This includes the duration, expectations, and any compensation or equity arrangements.",
      "Once terms are agreed upon, we'll draft a formal agreement outlining the specifics of your EIR engagement, including reporting structures, responsibilities, and the support/resources provided by SINC Partners.",
    ],
  },
  {
    stage: "Onboarding and Integration",
    details: [
      "Congratulations! As an accepted EIR, you'll undergo an onboarding process to familiarize yourself with the SINC Partners ecosystem, our portfolio companies, and key team members.",
      "Facilitated introductions will ensure a seamless integration between you and relevant portfolio companies, setting clear expectations for collaboration.",
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
    <div className=" flex flex-col gap-16 items-center justify-center w-full pt-[94px] pb-8 ">
      <div className=" flex-col flex gap-5 lg:max-w-[930px] w-full px-10 md:px-20 ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          How It Works
        </h1>
        <p className=" text-center  ">
          Our EIR program is our structured 3 months un-paid program designed to
          help us have a pipeline of business and technical cofounders who can
          run the venture of choice as CEO & CTO owning 20% equity each.
        </p>
      </div>
      <div className=" hidden lg:flex pl-32 gap-10 overflow-scroll w-full ">
        {applicationProcess.map((content, index) => (
          <div
            className=" p-5 gap-6 flex-col flex lg:min-w-[380px] max-w-[400px] max-md:w-full self-stretch bg-white rounded-[12px] "
            key={index}
          >
            <p
              className={clsx(
                " w-[60px] min-h-[60px] bg-[#303030] rounded-full flex items-center justify-center text-white"
              )}
            >
              <Lightbulb color="white" />
            </p>
            <div className=" flex flex-col gap-4 ">
              <h3 className=" font-semibold text-[20px] ">{content.stage} </h3>
              <p className=" leading-normal text-[16px] ">{content.details}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="hidden lg:flex gap-10 mt-10 w-full items-center justify-center self-center ">
        <button className=" w-10 h-10 ">
          <ArrowLeftCircle size={52} />
        </button>
        <button className=" w-10 h-10 ">
          <ArrowRightCircle size={52} />
        </button>
      </div>
      <div className=" lg:hidden ">
        <CarouselComponent
          showButton={true}
          autoSlide={false}
          items={applicationProcess.map((content, index) => (
            <div
              className=" p-6 gap-6 flex-col flex lg:min-w-[380px] max-w-[400px] max-md:w-full bg-white rounded-[12px] self-center "
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
        />
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
