"use client";
import { useParams } from "next/navigation";
import Banner from "../../../components/banner";
import ServiceList from "../components/serviceList";
import { serviceData } from "@/data/service-data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function ServicePage() {
  const { categoryUrl } = useParams();

  return (
    <>
      <Head>
        <title>
          Ojas Massage and Spa - Relaxation, Beauty, and Wellness Services in Winnipeg
        </title>
        <meta
          name="description"
          content="Discover a wide range of services at Ojas Massage and Spa in Winnipeg. We offer expert Massage, Facials, Laser Treatments, Nail Services, Brow Shaping, Lash Extensions, Waxing, and more. Experience relaxation, rejuvenation, and beauty all in one place!"
          key="desc"
        />
      </Head>
      <Banner />
      <Header />
      <ServiceList categoryUrl={categoryUrl as keyof typeof serviceData} />
      <Footer />
    </>
  );
}
