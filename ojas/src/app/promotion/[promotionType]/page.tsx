import Banner from "@/components/banner";
import Header from "@/components/header";
import PromotionList from "../components/promotionList";
import { promotionData } from "@/data/promotion-data";
import Footer from "@/components/footer";
import Head from "next/head";

export default function PromotionPage({
  params
}: {
  params: {promotionType: keyof typeof promotionData};
}) {
  const {promotionType} = params;
  return (
    <>
      <Head>
        <title>
          Ojas Massage and Spa|{" "}
          {promotionData[promotionType as keyof typeof promotionData].name}
        </title>
        <meta
          name="description"
          content="Explore our exclusive promotions at Ojas Massage & Spa. Get the best deals on facials, massages, and more."
        />
        <meta
          name="keywords"
          content="spa promotions, massage promotions, spa deals, massage deals, spa offers, spa package, massage package, spa discounts, massage discounts"
        />
      </Head>
      <Banner />
      <Header />
      <PromotionList
        promotionType={promotionType as keyof typeof promotionData}
      />
      <Footer />
    </>
  );
}
