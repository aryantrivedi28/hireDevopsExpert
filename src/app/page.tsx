import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustStrip from "@/components/home/TrustStrip";
import Problems from "@/components/home/Problems";
import Services from "@/components/home/Services";
import EngagementModels from "@/components/home/EngagementModels";
import WhyUs from "@/components/home/WhyUs";
import Tools from "@/components/home/Tools";
import Process from "@/components/home/Process";
import WhoWeHelp from "@/components/home/WhoWeHelp";
import SocialProof from "@/components/home/SocialProof";
import Faq from "@/components/home/Faq";
import FinalCta from "@/components/home/FinalCta";


export default function Home() {
  return (
    <>
      {/* {jsonLdScript("organization-jsonld", ORGANIZATION_JSON_LD)}, enable once real Organization details are confirmed */}
      <Hero />
      <TrustStrip />
      <Problems />
      <Services />
      <EngagementModels />
      <WhyUs />
      <Tools />
      <Process />
      <WhoWeHelp />
      {/* <SocialProof /> */}
      <Faq />
      <FinalCta />
    </>
  );
}
