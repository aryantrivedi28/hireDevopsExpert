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
// import { jsonLdScript } from "@/lib/jsonLd";, re-add when Organization schema is enabled below

export const metadata: Metadata = {
  title: "Hire a DevOps Expert | Done-for-You In-House DevOps Team",
  description:
    "Hire an in-house DevOps team to set up CI/CD, manage AWS/Azure/GCP infrastructure, run Kubernetes, and keep production stable, for startups, SaaS, and agencies.",
};

// Organization schema lives here (homepage) rather than the root layout: current Google
// guidance says it only needs to appear once per site, not duplicated on every page.
//
// PLACEHOLDER, do not enable until real values exist:
//  , `name`: real legal/brand name (do not guess)
//  , `sameAs`: real LinkedIn/social URLs (omit the field entirely if none)
//  , `logo`: omit until a real logo asset exists in /public
//  , `address`, `telephone`, `aggregateRating`, `review`: omit unless real
//
// The block is left unrendered (not emitted with placeholder text) rather than shipping
// fabricated data. Uncomment and fill in real values before launch.
//
// const ORGANIZATION_JSON_LD = {
//   "@context": "https://schema.org",
//   "@type": "Organization",
//   name: "<real legal/brand name>",
//   url: "https://hiredevopsexpert.com",
// };

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
