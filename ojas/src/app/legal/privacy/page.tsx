import Banner from "../../../components/banner";
import Header from '@/components/header';
import PrivacyPolicy from "../components/privacyPolicy";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPA OJAS | Winnipeg | Privacy Policy",
  description:
    "SPA OJAS specialize in nonsurgical technology to correct and diminish facial and body concerns. Book your free consultation and speak to professions today!",
  keywords: [
    "spa ojas privacy policy",
    "spa ojas privacy",
    "spa privacy",
  ],
}

export default function ServicePage() {

  return (
    <>
      <Banner />
      <Header />
      <PrivacyPolicy />
      <Footer/>
    </>
  );
}
