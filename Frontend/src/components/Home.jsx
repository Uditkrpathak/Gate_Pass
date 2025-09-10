import React from "react";
import Navbar from "../pages/Navbar";
import HeroSection from "../pages/HeroSection";
import Card from "../pages/Card";
import NewsLetter from "../pages/NewsLetter";
import Footer from "../pages/Footer";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-500 to-blue-400 relative">
      <Navbar />

      <HeroSection />

      <Card />
      <NewsLetter />

      <Footer />
    </div>
  );
};

export default Home;
