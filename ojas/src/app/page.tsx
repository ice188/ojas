import Welcome from "@/app/components/welcome";
import Service from "@/app/components/service";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Story from "@/app/components/story";
import Footer from "@/components/footer";

import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Ojas Massage & Spa Winnipeg',
  description: 'Ojas specialize in nonsurgical technology to correct and diminish facial and body concerns. Book your free consultation and speak to professions today!',
  keywords: ["spa", "spa near me", "massage spa near me", "massage near me", "facial near me", "asian massage near me", "massage spa", "luxury nails"],
}
 

export default function HomePage() {
  return (
    <>
      <Banner />
      <Header />
      <Welcome />
      <Service />
      <Story />
      <Footer />
    </>
  );
}
