import Banner from "../../../components/banner";
import ServiceList from "../components/serviceList";
import { serviceData } from "@/data/service-data";
import Header from "@/components/header";
import Footer from "@/components/footer";

type Params = Promise<{ categoryUrl: string }>;

export async function generateMetadata(props: { params: Params }) {
  const params = await props.params;
  const categoryUrl = params.categoryUrl;
  const serviceName =
    serviceData[categoryUrl as keyof typeof serviceData]?.name || "Service";

  return {
    title: `H Plus Day Spa | ${serviceName}`,
    description: `Best-quality ${serviceName.toLowerCase()} service in Winnipeg. Explore our exclusive range of services at H Plus Day Spa .`,
    keywords: [
      "spa",
      "spa near me",
      "massage spa near me",
      "massage near me",
      "facial near me",
      "asian massage near me",
      "massage spa",
      "nails",
      `${serviceName} near me`,
    ],
  };
}

export default async function ServicePage(props: { params: Params }) {
  const params = await props.params;
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
