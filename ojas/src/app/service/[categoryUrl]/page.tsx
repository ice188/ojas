'use client'
import { useParams } from 'next/navigation'; 
import Banner from "../../../components/banner";
import ServiceList from '../components/serviceList';
import { serviceData } from '@/data/service-data';
import Header from '@/components/header';
import Footer from '@/components/footer';

export default function ServicePage() {
  const { categoryUrl } = useParams(); 

  return (
    <>
      <Banner />
      <Header />
      <ServiceList categoryUrl={categoryUrl as keyof typeof serviceData} /> 
      <Footer />
    </>
  );
}
