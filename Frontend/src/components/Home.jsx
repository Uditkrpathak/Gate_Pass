import React from "react";
import Navbar from "../pages/Navbar";
import HeroSection from "../pages/HeroSection";
import Card from "../pages/Card";
import NewsLetter from "../pages/NewsLetter";
import Footer from "../pages/Footer";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-gray-300">
      <Navbar />

      <HeroSection />

      <Card />
      <NewsLetter />

      <Footer />
    </div>
  );
};

export default Home;
