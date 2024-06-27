import AreaOfFocusSection from "@/components/home/AreaOfFocusSection";
import AsFeaturedIn from "@/components/home/AsFeaturedIn";
import BlogsResources from "@/components/home/BlogsResources";
import CofoundSection from "@/components/home/CofoundSection";
import EquityJobs from "@/components/home/EquityJobs";
import HeroSection from "@/components/home/HeroSection";
import HowItWorks from "@/components/home/HowItWorks";
import InvestorNetwork from "@/components/home/InvestorNetwork";
import LetsBuild from "@/components/home/LetsBuild";
import NetworkOfBuildersSection from "@/components/home/NetworkOfBuildersSection";
import OurConceptSection from "@/components/home/OurConceptSection";
import OurService from "@/components/home/OurService";
import OurStudioPortfolio from "@/components/home/OurStudioPortfolio";
import Section2 from "@/components/home/Section2";

const page = () => {
  return (
    <div className=" flex flex-col gap-2 items-center justify-center  ">
      <HeroSection />
      <Section2 />
      <NetworkOfBuildersSection />
      <AreaOfFocusSection />
      <OurConceptSection />
      <OurService />
      <OurStudioPortfolio />
      <CofoundSection />
      <HowItWorks />
      <InvestorNetwork />
      <EquityJobs />
      <BlogsResources />
      <AsFeaturedIn />
      <LetsBuild />
    </div>
  );
};

export default page;
