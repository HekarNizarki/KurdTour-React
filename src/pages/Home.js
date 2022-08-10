import React from "react";
import BestLocation from "../components/BestLocation";
import HeroSection from "../components/HeroSection";
import HomePlaces from "../components/HomePlaces";

export default function Home() {
  return <div className=" bg-teal-50 w-screen h-screen">
    <HeroSection />
    <HomePlaces />
    <BestLocation />
  </div>;
}
