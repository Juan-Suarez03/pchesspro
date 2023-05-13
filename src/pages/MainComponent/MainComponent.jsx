import React from "react";
import Footer from "../../components/Footer/Footer";
import Hero from "../../components/Hero/Hero";
import "./MainComponent.css";

const MainComponent = () => {
  return (
    <div className="Main">
      <div className="Main-container">
        <Hero />
      </div>
      <Footer />
    </div>
  );
};

export default MainComponent;
