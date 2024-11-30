'use client'

import Banner from "@/components/banner";
import Header from "@/components/header";
import { useParams } from "next/navigation";
import PromotionList from "../components/promotionList";
import { promotionData } from "@/data/promotion-data";
import Footer from "@/components/footer";

export default function PromotionPage() {
  const { promotionType } = useParams(); 
  return (
    <>
      <Banner />
      <Header />
      <PromotionList promotionType={promotionType as keyof typeof promotionData} /> 
      <Footer />
    </>
  );
}
