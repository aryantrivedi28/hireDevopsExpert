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

export const metadata: Metadata = {
  title: "Hire a DevOps Expert | Done-for-You In-House DevOps Team",
  description:
    "Hire an in-house DevOps team to set up CI/CD, manage AWS/Azure/GCP infrastructure, run Kubernetes, and keep production stable, for startups, SaaS, and agencies.",
};


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
      <SocialProof />
      <Faq />
      <FinalCta />
    </>
  );
}
