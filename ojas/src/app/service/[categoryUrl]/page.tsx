import Banner from "../../../components/banner";
import ServiceList from "../components/serviceList";
import { serviceData } from "@/data/service-data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import type { Metadata } from "next";

type Params = { categoryUrl: string };

export async function generateMetadata({params}: {params: Params}): Promise<Metadata> {
  const categoryUrl = params.categoryUrl;
  const serviceName =
    serviceData[categoryUrl as keyof typeof serviceData]?.name || "Service";

  return {
    title: `Ojas Massage and Spa | ${serviceName}`,
    description: `Best-quality ${serviceName.toLowerCase()} service in Winnipeg. Explore our exclusive range of services at Ojas Massage & Spa.`,
    keywords: [
      "spa",
      "spa near me",
      "massage spa near me",
      "massage near me",
      "facial near me",
      "asian massage near me",
      "massage spa",
      "luxury nails",
      `${serviceName} near me`,
    ],
  };
}

export default async function ServicePage({ params }: { params: Params }) {
  const categoryUrl = params.categoryUrl;
  return (
    <>
      <Banner />
      <Header />
      <ServiceList categoryUrl={categoryUrl as keyof typeof serviceData} />
      <Footer />
    </>
  );
}
