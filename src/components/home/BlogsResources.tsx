import { Clock } from "lucide-react";
import Image from "next/image";
import React from "react";

const sectionData = [
  {
    title: "Top Ten Most Powerful Startup",
    duration: "2 mins",
  },
  {
    title: "Top Ten Most Powerful Startup",
    duration: "2 mins",
  },
  {
    title: "Top Ten Most Powerful Startup",
    duration: "2 mins",
  },
];

const sectionData2 = [
  {
    image: "blog2a",
    title: "Top Ten Most Powerful Startup",
    description:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
  },
  {
    image: "blog2b",
    title: "Top Ten Most Powerful Startup",
    description:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
  },
  {
    image: "blog2c",
    title: "Top Ten Most Powerful Startup",
    description:
      "Top Ten Most Powerful Startup. Top Ten Most Powerful Startup. Top Ten Most Powerful Startup",
  },
];

const BlogsResources = () => {
  return (
    <div className=" flex flex-col gap-16 items-center justify-center pt-[94px] pb-8 px-5 ">
      <div className=" flex-col flex gap-5 max-w-[930px] ">
        <h1 className=" lg:text-[56px] font-[500] text-[36px] text-center ">
          Blogs & Resources
        </h1>
      </div>
      <div className=" flex flex-wrap gap-8 w-full justify-center ">
        {sectionData.map((content, index) => (
          <div
            className=" relative z-[2] gap-6 flex-col flex items-end justify-end w-full max-w-[380px] h-[235px] overflow-hidden "
            key={index}
          >
            <Image
              className=" absolute top-0 -z-[1] left-0 w-full "
              width={200}
              height={180}
              src={"/assets/images/blog.png"}
              alt="blog thumbnail"
            />
            <Image
              className=" self-center "
              width={56}
              height={56}
              src={"/assets/icons/icon-park-solid_play.svg"}
              alt="blog thumbnail"
            />
            <span className="flex gap-2 items-center justify-between p-4 ">
              <span className=" text-[18px] text-white font-semibold ">
                {content.title}
              </span>
              <span className=" flex text-white text-[12px] gap-2 items-center ">
                <Clock color="white" />
                {content.duration}
              </span>
            </span>
          </div>
        ))}
      </div>
      <div className=" flex flex-wrap gap-8 w-full justify-center ">
        {sectionData2.map((content, index) => (
          <div
            className=" relative z-[2] gap-4 flex items-end justify-end w-full max-w-[380px] "
            key={index}
          >
            <div className=" flex flex-col gap-2 ">
              <h1 className=" text-[14px] font-semibold ">{content.title}</h1>
              <p className=" text-[13px] ">{content.description}</p>
            </div>
            <Image
              className=" h-full "
              src={`/assets/images/${content.image}.png`}
              alt=""
              width={200}
              height={200}
            />
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
          See More Blogs & Resources
        </a>
      </button>
    </div>
  );
};

export default BlogsResources;
