import clsx from "clsx";
import { ArrowRight } from "lucide-react";

const sectionData = [
  {
    title: "We Ideate",
    details:
      "We internally generate concepts and ideas that help solve problems in our thesis areas, after which we proceed to develop a nano/micro MVP (usually having as low as 30 functions to as high as 100 functions) of the product that we take to the market.",
  },
  {
    title: "You Validate",
    details:
      "You join our 3 months  inResidence program as a business expert to run the operations or as a technical expert to further the development and validate the idea with an average monthly revenue of $1k or 10,000 users and/or an MVP of at least 150 functions ",
  },
  {
    title: "You Co-own",
    details:
      "After successful validation and demo day at the end of the EIR program, we move those with perfect fit to become co-founders of the product they validated as CEO & CTO, each owning 20% of the venture.",
  },
];
const CofoundSection = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Co-found With Us
        </h1>
        <p className=" text-center  ">
          We seek to collaborate with visionary individuals who are solving
          similar problems of helping entrepreneurs succeed
        </p>
      </div>
      <div className=" flex flex-wrap gap-3 w-full justify-center ">
        {sectionData.map((content, index) => (
          <div
            className=" p-6 gap-6 flex-col flex w-full max-w-[380px] bg-white rounded-[12px] "
            key={index}
          >
            <p
              className={clsx(
                " w-[60px] h-[60px] rounded-full flex items-center justify-center text-white ",
                index === 1
                  ? "bg-[#F47733]"
                  : index === 2
                  ? "bg-[#FF78BF]"
                  : "bg-[#303030]"
              )}
            >
              {index + 1}
            </p>
            <div className=" flex flex-col gap-4 " >
              <h3 className=" font-[500] text-[24px] ">{content.title} </h3>
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
          Build your dream
        </a>
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

export default CofoundSection;
