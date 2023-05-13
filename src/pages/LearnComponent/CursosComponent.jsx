import React from "react";
import "./CursosComponent.css";
import Footer from "../../components/Footer/Footer";
import LearnContent from "../../components/LearnContent/CursosContent";
const CursosComponent = () => {
  return (
    <div className="Main-learn">
      <div className="Main-learn-container">
        <LearnContent />
      </div>
      <Footer />
    </div>
  );
};

export default CursosComponent;
