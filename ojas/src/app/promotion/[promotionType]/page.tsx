'use client'

import Banner from "@/components/banner";
import Header from "@/components/header";
import { useParams } from "next/navigation";
import PromotionList from "../components/promotionList";
import { promotionData } from "@/data/promotion-data";

export default function PromotionPage() {
  const { promotionType } = useParams(); 
  return (
    <>
      <Banner />
      <Header />
      <PromotionList promotionType={promotionType as keyof typeof promotionData} /> 
    </>
  );
}
