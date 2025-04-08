import Welcome from "@/app/components/welcome";
import Service from "@/app/components/service";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Story from "@/app/components/story";
import Footer from "@/components/footer";

import type { Metadata } from "next";
import Promotion from "./components/promotion";

export const metadata: Metadata = {
  title: "SPA OJAS | Winnipeg",
  description:
    "SPA OJAS specialize in nonsurgical technology to correct and diminish facial and body concerns. Book your free consultation and speak to professions today!",
  keywords: [
    // Brand and variations
    "h plus day spa",
    "h+ day spa",
    "SPA OJAS",
    "spa ojas winnipeg",
    "spa ojas wellness",
    "ojas head spa",
    "ojas",

    // Location-based
    "spa winnipeg",
    "day spa winnipeg",
    "massage winnipeg",
    "best massage therapy winnipeg",
    "best massage winnipeg",
    "best spa winnipeg",
    "laser beauty winnipeg",
    "facial winnipeg",
    "head spa winnipeg",
    "winnipeg spa",
    "winnipeg massage",
    "winnipeg facial",
    "best winnipeg spa",
    "best winnipeg massage",
    "best facial winnipeg",
    "top rated spa winnipeg",
    "professional spa winnipeg",
    "clinical spa winnipeg",
    "luxury spa winnipeg",
    "downtown winnipeg spa",
    "spa services winnipeg",
    "relaxation spa winnipeg",
    "aromatherapy winnipeg",
    "spa treatment winnipeg",
    "medical grade spa winnipeg",
    "advanced spa treatments winnipeg",
    "medical massage winnipeg",
    "affordable spa winnipeg",
    "affordable massage winnipeg",
    "insurance spa winnipeg",

    // Local search phrases
    "spa near me",
    "day spa near me",
    "best nail salon near me",
    "wellness spa near me",
    "massage spa near me",
    "massage near me",
    "facial near me",
    "head massage near me",
    "asian massage near me",
    "day spa near me",
    "full body massage near me",
    "professional massage near me",
    "luxury facial near me",
    "clinical facial near me",
    "medical massage near me",
    "beauty service near me",
    "asian massage near me",
    "affordable massage near me",
    "luxury beauty treatments near me",
    "detox spa near me",

    // Service keywords
    "spa",
    "massage spa",
    "foot spa",
    "massage",
    "asian massage",
    "thai massage",
    "best spa",
    "massage spa",
    "facial",
    "relaxation massage",
    "deep tissue massage",
    "swedish massage",
    "hot stone massage",
    "couples massage",
    "therapeutic massage",
    "professional massage",
    "medical grade facial",
    "clinical facial",
    "rejuvenating facial",
    "hydrating facial",
    "anti-aging facial",
    "scalp massage",
    "head massage",
    "full body massage",
    "body treatments",
    "aromatherapy",
    "wellness treatments",
    "detox spa treatments",
    "advanced skincare treatments",
    "laser skin treatments",
    "medical spa services",
    "nonsurgical beauty technology",
    "beauty service",
    "brow extension",
    "massage therapy",
    "best massage service",
    "best massage therapy",
    
    "foot massage spa",
    "relaxation spa therapy",
    "asian therapeutic massage",
    "swedish relaxation massage",
    "deep tissue therapy",
    "luxury body massage",
    "couples spa massage",
    "therapeutic body massage",
    "head and neck massage",
    "hydration facial therapy",
    "anti-aging skin treatment",
    "facial rejuvenation services",
    "scalp and head therapy",
    "nonsurgical facial treatments",
    "spa treatments",
    "healing massage services",
    "luxury wellness massage",
    "beauty spa therapy",
    "detox facial treatments",
    "relaxing body treatments",
    "advanced body skincare",
    "full body detox treatments",

    // Add-ons and related services
    "nails",
    "nail polish",
    "artistic nails",
    "nail salon",
    "nail spa",
    "best nail salon",
    "nail art",
    "manicure winnipeg",
    "pedicure winnipeg",
    "gel nails winnipeg",
    "spa manicure",
    "spa pedicure",
    "nail art winnipeg",
    "eyelash extensions winnipeg",
    "medical pedicure",
    "beauty treatments winnipeg",

    // Experience / ambiance keywords
    "holistic spa experience",
    "clinical spa experience",
    "professional spa therapists",
    "premium spa services",
    "modern spa facilities",
    "relaxation and wellness",
    "advanced skincare treatments",
    "natural skincare treatments",
    "medical wellness treatments",
    "pampering sessions winnipeg",
    "personalized skincare solutions",
    "luxury clinical spa",
  ],
};

export default function HomePage() {
  return (
    <>
      <Banner />
      <Header />
      <Welcome />
      <Service />
      <Story />
      <Promotion />
      <Footer />
    </>
  );
}
