import Banner from "@/components/Banner";
import CareTips from "@/components/CareTips";
import PopularProducts from "@/components/PopularProducts";
import TopBrands from "@/components/TopBrands";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner></Banner>
      <PopularProducts></PopularProducts>
      <CareTips></CareTips>
      <TopBrands></TopBrands>
    </div>
  );
}
