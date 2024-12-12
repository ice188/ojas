"use client";

import Banner from "@/components/banner";
import Header from "@/components/header";
import { useParams } from "next/navigation";
import PromotionList from "../components/promotionList";
import { promotionData } from "@/data/promotion-data";
import Footer from "@/components/footer";
import Head from "next/head";

export default function PromotionPage() {
  const { promotionType } = useParams();
  return (
    <>
      <Head>
        <title>Ojas Massage and Spa Winnipeg | Promotions and Special Deals</title>
        <meta
          name="description"
          content="Discover relaxation and rejuvenation at Ojas Massage and Spa in Winnipeg. Explore our range of exclusive deals to support your well-being. Book your session today!"
          key="desc"
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
