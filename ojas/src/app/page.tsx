import Welcome from "@/app/components/welcome";
import Service from "@/app/components/service";
import Banner from "@/components/banner";
import Header from "@/components/header";
import Story from "@/app/components/story";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Banner />
      <Header />
      <Welcome />
      <Service />
      <Story />
      <Footer />
      
    </>
  );
}
