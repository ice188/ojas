import Banner from "@/components/banner";
import Header from "@/components/header";
import PromotionList from "../components/promotionList";
import { promotionData } from "@/data/promotion-data";
import Footer from "@/components/footer";

type Params = Promise<{ promotionType: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const promotionType = params.promotionType;
  const promotionName =
    promotionData[promotionType as keyof typeof promotionData]?.name ||
    "Promotion";

  return {
    title: `SPA OJAS | ${promotionName}`,
    description: `Explore our exclusive promotions at SPA OJAS. Get the best deals on facials, massages, and more.`,
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
      `${promotionName.toLowerCase()} offers`,
    ],
  };
}

export default async function PromotionPage(props: { params: Params }) {
  const params = await props.params;
  const promotionType = params.promotionType;
  return (
    <>
      <Banner />
      <Header />
      <PromotionList
        promotionType={promotionType as keyof typeof promotionData}
      />
      <Footer />
    </>
  );
}
