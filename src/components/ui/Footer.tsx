import React from "react";
import CompanyLogo from "./CompanyLogo";
import Image from "next/image";

const data = [
  {
    heading: "Platforms",
    items: [
      "Kofoundme",
      "InResidency",
      "Service Market",
      "Founders Square",
      "Metty",
      "Grantty",
      "Boldtell",
      "Chekwa",
    ],
  },
  {
    heading: "Initiatives",
    items: [
      "Jabi Plains",
      "Local Pricing Initiative",
      "Scholarship Program",
      "SSMN Pricing",
      "University STEM",
      "University InResidency",
      "1M Nigeria Products",
      "Founders Festival",
    ],
  },
  {
    heading: "About Us",
    items: [
      "Who We Are",
      "Our People",
      "Concept Innovations",
      "Our Process",
      "Investors Network",
      "CSR & Events",
      "Career",
      "Contact",
    ],
  },
  {
    heading: "More",
    items: [
      "Services",
      "Equity Jobs",
      "EIR Program",
      "Offers",
      "Innovation News",
      "FAQ",
      "Blog & Resources",
      "Press",
    ],
  },
];

const Footer = () => {
  return (
    <footer className=" w-[100dvw] bg-[#212121] flex flex-col gap-6 pt-11 px-6 md:px-[60px]  ">
      <NewsLetter />

      <div className=" h-1 w-full bg-[#E9E9E94D] bg-opacity-30 " />

      <div className=" flex pt-12 pb-6 w-full flex-wrap gap-8 justify-between ">
        <div className=" flex flex-col gap-3 w-full lg:max-w-[20%] ">
          <CompanyLogo light />
          <p className=" max-sm:text-[12px] w-full ">
            SINC Partners is a service incubation company connecting experts in
            product development and growth marketing willing to offer their
            services to amazing startups in exchange for minute equity (usually
            0.5% to 2%)
          </p>
        </div>
        <>
          {data.map((item, index) => {
            return (
              <div
                key={index}
                className=" flex flex-col gap-3 w-fit lg:max-w-[20%]  "
              >
                <h1 className=" font-semibold ">{item.heading}</h1>
                <div className=" flex flex-col gap-3 w-full ">
                  {item.items.map((items: string, subIndex: number) => {
                    return <p key={subIndex}>{items}</p>;
                  })}
                </div>
              </div>
            );
          })}
        </>
        <div className=" flex flex-col gap-3 w-full lg:max-w-[20%] ">
          <div className=" flex flex-col gap-4 w-full ">
            <h1 className=" font-semibold ">Location</h1>
            {["Abuja, Nigeria", "Lagos, Nigeria", "Philadelphia, USA"].map(
              (items: string, subIndex: number) => {
                return <p key={subIndex}>{items}</p>;
              }
            )}
          </div>
          <div className=" flex gap-4 ">
            <Image
              src={"/assets/accredited.svg"}
              alt=" accredited A+"
              className=" w-full max-w-[150px] "
              width={100}
              height={100}
            />
            <div className=" w-full flex flex-col gap-3 items-center ">
              <Image
                src={"/assets/icons/Whatsapp.svg"}
                alt=" whatsapp"
                className="max-w-[60px] w-fit "
                width={60}
                height={60}
              />
              <p className="text-[13px]">Chat with US</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap max-md:flex-col-reverse justify-between lg:gap-20 ">
        <div className=" flex-auto flex flex-col justify-between max-md:items-center gap-6 ">
          <p className=" max-md:text-center " >
            Guaranteed 2x on your service or cash investment, usually been the
            first to invest. Get in early and SINC your guaranty!
          </p>
          <div className=" flex flex-wrap lg:gap-24 gap-6 items-center max-md:justify-center w-full ">
            <p>© 2023 SINC Partners Ltd. All rights reserved</p>
            <div className=" flex gap-4 ">
              <p className=" font-semibold underline ">Privacy Policy </p>
              <p className=" font-semibold underline ">Terms of Service</p>
              <p className=" font-semibold underline ">Security</p>
            </div>
          </div>
        </div>
        <div className=" flex gap-4 max-md:flex-col max-md:items-center ">
          <Image
            src={"/assets/logo2.svg"}
            alt=" gauss business"
            className=" w-full max-w-[150px] "
            width={100}
            height={100}
          />
          <p className=" lg:max-w-[217px] max-md:text-center ">
            We are a business built on the foundation of Christian values and
            belief
          </p>
        </div>
      </div>
      <p className=" flex self-center gap-2 ">
        Web In Nigeria
        <Image
          src={"/assets/twemoji_flag-nigeria.svg"}
          alt=" gauss business"
          className=" w-full max-w-[16px] "
          width={100}
          height={100}
        />
      </p>
    </footer>
  );
};

export default Footer;

const NewsLetter = () => {
  return (
    <div className=" max-w-[553px] w-full flex flex-col gap-16  pb-8 ">
      <div className=" flex flex-col gap-3 w-full ">
        <h1 className=" text-[60px] font-semibold ">Newsletter</h1>
        <p>
          Get the latest about SINC Partners, our startup Incubator program,
          Portfolio company offerings - straight into your inbox.
        </p>
      </div>
      <div className=" relative w-full max-w-[468px] ">
        <input className=" w-full rounded-3xl h-[50px] pl-4 border border-white bg-transparent " placeholder="Enter your email address" type="text" />
        <button className=" absolute right-0 top-0 font-semibold px-4 w-[150px] h-[50px] rounded-3xl bg-white text-[#212121] ">Subscribe</button>
      </div>
    </div>
  );
};
