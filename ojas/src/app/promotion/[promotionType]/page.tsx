import Banner from "@/components/banner";
import Header from "@/components/header";
import PromotionList from "../components/promotionList";
import { promotionData } from "@/data/promotion-data";
import Footer from "@/components/footer";
import type { Metadata } from "next";

type Params = { promotionType: string };

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const promotionType = params.promotionType;
  const promotionName = promotionData[promotionType as keyof typeof promotionData]?.name || "Promotion";

  return {
    title: `Ojas Massage and Spa | ${promotionName}`,
    description: `Explore our exclusive promotions at Ojas Massage & Spa. Get the best deals on facials, massages, and more.`,
    keywords: [
      "spa promotions",
      "massage promotions",
      "spa deals",
      "massage deals",
      "spa offers",
      "spa package",
      "massage package",
      "spa discounts",
      "massage discounts",
      `${promotionName.toLowerCase()} offers`
    ],
  };
}

export default async function PromotionPage({ params }: { params: Params }) {
  const promotionType = params.promotionType;

  return (
    <>
      <Banner />
      <Header />
      <PromotionList promotionType={promotionType as keyof typeof promotionData} />
      <Footer />
    </>
  );
}
