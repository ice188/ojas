import Banner from "../../../components/banner";
import ServiceList from "../components/serviceList";
import { serviceData } from "@/data/service-data";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Head from "next/head";

export default function ServicePage({
  params
}: {
  params:{categoryUrl: keyof typeof serviceData};
}) {
  const {categoryUrl} = params;
  return (
    <>
      <Head>
        <title>
          Ojas Massage and Spa{" "}|{" "}
          {serviceData[categoryUrl as keyof typeof serviceData].name}
        </title>

        <meta
          name="description"
          content={`Best-quality ${serviceData[categoryUrl as keyof typeof serviceData].name.toLowerCase()} service in winnipeg. Explore our exclusive range of services at Ojas Massage & Spa.`}
        />
        <meta
          name="keywords"
          content="massage therapy near me, acupuncture near me, facials near me, medical facials near me, nails near me, brows, lashing, laser freckles removal, body sculpting"
        />
      </Head>
      <Banner />
      <Header />
      <ServiceList categoryUrl={categoryUrl as keyof typeof serviceData} />
      <Footer />
    </>
  );
}
