import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import HeroCarousel from "../components/HeroCarousel";
import Portlets from "../components/Portlets";

const Home = () => {
  return (
    <div>
      <Header />
      <HeroCarousel />
      <Portlets />
      <Footer />
    </div>
  );
};

export default Home;
