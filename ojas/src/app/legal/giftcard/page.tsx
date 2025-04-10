import Banner from "../../../components/banner";
import Header from "@/components/header";
import Footer from "@/components/footer";
import GiftCardPolicy from "../components/giftcardPolicy";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SPA OJAS | Winnipeg | Giftcard Policy",
  description:
    "SPA OJAS specialize in nonsurgical technology to correct and diminish facial and body concerns. Book your free consultation and speak to professions today!",
  keywords: [
    "spa ojas giftcard policy",
    "spa ojas giftcard",
    "spa giftcard",
    "spa insurance"
  ],
}
export default function ServicePage() {
  return (
    <>
      <Banner />
      <Header />
      <GiftCardPolicy />
      <Footer />
    </>
  );
}
