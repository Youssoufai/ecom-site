import Image from "next/image";
import HeroSection from "./components/Hero";
import Categories from "./components/Categories";
import FeaturedProducts from "./components/Products";
import IpadPro from "./components/IpadSection";
import LatestNews from "./components/News";

export default function Home() {
  return (
    <>
      <HeroSection />
      <Categories />
      <FeaturedProducts />
      <IpadPro />
      <LatestNews />
    </>
  );
}
