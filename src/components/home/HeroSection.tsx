import Image from "next/image";
import React from "react";
import CarouselComponent from "../ui/CarouselComponent";

const sectionData = [
  {
    image: "hero1",
    heading: "We are big on these 3 things;",
    details: [
      "Service Incubation & Ecosystem Advocacy",
      "Building SAAS & Marketing Tech Platforms",
      "Institutional Innovations",
    ],
  },
  {
    image: "hero2",
    heading: "SINC Partners is a service incubation company",
    details:
      "Connecting experts in product development and growth marketing willing to offer their services to amazing startups in exchange for minute equity (usually 0.5% to 2%).",
  },
  {
    image: "hero3",
    heading: "Come with an idea, leave with a company.",
    details:
      "You, alongside seasoned service partners and investors, expedite the growth and market entry of your startup.",
  },
];

const HeroSection = () => {
  return (
    <div className=" flex w-[100%] items-center justify-center max-h-[500px] overflow-scroll ">
      <CarouselComponent
        autoSlide
        autoSlideInterval={3000}
        showButton={false}
        items={sectionData.map((content, index) => (
          <div
            key={index}
            className=" flex w-full items-center justify-center "
          >
            <div className=" lg:w-[50%] lg:pl-[120px] py-[80px] ">
              <div className="flex flex-col gap-11 ">
                <div className=" flex flex-col gap-3 max-w-[490px] w-full ">
                  <h4 className=" text-[24px] font-semibold ">
                    {content.heading}{" "}
                  </h4>
                  <p>{content.details}</p>
                  <button className=" w-full max-w-[190px] h-12 px-[30px] font-medium  text-white items-center justify-center rounded-[24px] bg-[#212121]  ">
                    SINC With Us
                  </button>
                </div>
              </div>
            </div>
            <div className=" hidden lg:flex lg:w-[50%] w-full object-fill ">
              <Image
                className=" w-full h-[500px] "
                src={`/assets/images/${content.image}.png`}
                alt="hero-section image"
                width={600}
                height={500}
              />
            </div>
          </div>
        ))}
      />
    </div>
  );
};

export default HeroSection;
