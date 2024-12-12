import Welcome from "@/app/components/welcome";
import Service from "@/app/components/service";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Story from "@/app/components/story";
import Footer from "@/components/footer";
import Head from "next/head";

export default function HomePage() {
  return (
    <>
      <Head>
        <title>
        Ojas Massage and Spa Winnipeg | Relax, Rejuvenate, Renew
        </title>
        <meta
          name="description"
          content="Experience relaxation and rejuvenation at Ojas Massage and Spa in Winnipeg. Explore our range of massage and spa services designed to support your well-being. Book your session today!"
          key="desc"
        />
      </Head>
      <Banner />
      <Header />
      <Welcome />
      <Service />
      <Story />
      <Footer />
    </>
  );
}
