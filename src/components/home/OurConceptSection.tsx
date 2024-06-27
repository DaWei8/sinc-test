import React from "react";
const sectionData = [
  {
    title: "Service Incubator",
    details:
      "A service-for-shares model of incubating pre-product startups and early-stage companies by building their early stage product and MVP",
  },
  {
    title: "Virtualting",
    details:
      "A resource share model that allows companies share the time of resources (employees, consultants, technical advisers or influencers) while also splitting the service cost of the resource",
  },
  {
    title: "Diiming",
    details:
      "A progressive investment model that allows you to put aside income (disposable or non-disposable) as investment over a period towards an investment or spend of your choice ",
  },
];
const OurConceptSection = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Our Concept Innovations
        </h1>
        <p className=" text-center  ">
          We have proprietary concept innovations that will support the startup
          ecosystem, support solution-providers/entrepreneurs and ultimately
          help democratize success;
        </p>
      </div>
      <div className=" flex flex-wrap gap-3 w-full justify-center ">
        {sectionData.map((content, index) => (
          <div
            className=" p-6 gap-5 flex-col items-center flex w-full max-w-[350px] bg-white rounded-[12px] "
            key={index}
          >
            <h3 className=" font-[500] text-[24px] ">{content.title} </h3>
            <p className=" text-center ">{content.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurConceptSection;
